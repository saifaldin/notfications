import express from 'express';
import { Types } from 'mongoose';
import Notifications from './notification.model';
import User from '../auth/user.model';

export const NotificationService = {
	async getAll(req: express.Request, res: express.Response) {
		try {
			const data = await Notifications.find();
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
			const sender: string | Types.ObjectId = req.user.mongouser._id;
			const post: string | Types.ObjectId = req.body.postId;
			const user = await User.find({ posts: { $in: [post] } });
			if (!user)
				res.status(500).json({
					status: 'error',
					messege: 'cannot find user',
				});
				
			const notification = await Notifications.create({
				sender,
				reciever: user._id,
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
	async flag(req: express.Request, res: express.Response) {
		try {
		} catch (err) {
			console.log(err);
		}
	},
};
