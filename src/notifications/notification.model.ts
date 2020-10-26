import { Types, Document, Schema, model } from 'mongoose';
import { Notification } from './notification.interface';

const notificationSchema = new Schema<Notification>(
	{
		receiver: {
			type: Types.ObjectId,
			ref: 'user',
		},
		sender: {
			type: Types.ObjectId,
			ref: 'user',
		},
		post: {
			type: Types.ObjectId,
			ref: 'post',
		},
		isSeen: Boolean
	},
	{ timestamps: true }
);

const Notifications = model<Notification>(
	'notification',
	notificationSchema
);

export default Notifications;
