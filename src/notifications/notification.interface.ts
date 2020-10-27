import { Document, Types } from 'mongoose';

export interface Notification extends Document {
	reciever: Types.ObjectId;
	sender: Types.ObjectId;
	post: Types.ObjectId;
	isSeen: boolean;
}
