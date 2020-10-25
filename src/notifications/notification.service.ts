import Notifications from './notification.model';
import { Types } from 'mongoose';
import express from 'express';

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
	async create(req: express.Request, res: express.Response) {
		try {
			const receiver: Types.ObjectId = req.body.receiver;
			const sender: Types.ObjectId = req.body.sender;
			const post: Types.ObjectId = req.body.post;
			// await Notifications.create({
			// 	receiver,
			// 	sender,
			// 	post,
			// });
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
