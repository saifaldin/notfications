import express from 'express';
import { Types } from 'mongoose';
import Notifications from './notification.model';
import User from '../auth/user.model';

export const NotificationService = {
	async getAll(req: any, res: express.Response) {
		try {
			const data = await Notifications.find({
				receiver: req.user.mongouser._id,
			}).sort('-createdAt');
			if (!data)
				res.status(500).json({
					status: 'error',
					messege: 'cannot find user',
				});
			res.status(200).json({
				status: 'success',
				data,
			});
		} catch (err) {
			console.log(err);
		}
	},
	async create(req: any, res: express.Response) {
		try {
			const sender: string | Types.ObjectId = req.user.mongouser.id;
			const post: string | Types.ObjectId = req.body.postId;
			const user = await User.findOne({ posts: { $in: [post] } });

			if (!user)
				return res.status(500).json({
					status: 'error',
					messege: 'cannot find user',
				});
			if (user.id === sender)
				return res.status(400).json({
					status: 'fail',
					messege: 'you cannot upvote your own image',
				});

			const notification = await Notifications.create({
				sender,
				receiver: user.id,
				post,
				isSeen: false,
			});

			res.status(201).json({
				status: 'success',
				notification,
			});
		} catch (err) {
			console.log(err);
		}
	},
	async flag(req: any, res: express.Response) {
		try {
			const notification = await Notifications.findById(req.params.id);
			if (!notification)
				return res.status(500).json({
					status: 'error',
					messege: 'cannot find user',
				});
			if (
				notification.receiver.toString() !==
				req.user.mongouser.id.toString()
			)
				return res.status(400).json({
					status: 'fail',
					messege: 'you cannot flag other people notification',
				});
			notification.isSeen = true;
			notification.save();
			res.status(201).json({
				status: 'success',
				data: notification,
			});
		} catch (err) {
			console.log(err);
		}
	},
};
