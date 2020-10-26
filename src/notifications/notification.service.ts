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
		} catch (err) {
			console.log(err);
		}
	},
	async flag(req: express.Request, res: express.Response, id: Types.ObjectId) {
		try {
			const getNotification = await Notifications.findById(req.params.id)
			if (getNotification) {
				const seen = await Notifications.findOneAndUpdate(getNotification, {isSeen: true})
			}
		} catch (err) {
			console.log(err);
		}
	},
};
