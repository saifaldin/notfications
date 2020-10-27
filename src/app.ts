import express from 'express';
import router from './notifications/notification.routes';
import { protector } from '@m3ntorship/pickly-protector';

// const userEnricher = async (user) => {
// 	let mongoUser = await User.findOne({ email: user.tokeninfo.email });
// 	if (!mongoUser)
// 		mongoUser = await User.create({
// 			name: user.tokeninfo.name,
// 			email: user.tokeninfo.email,
// 		});
// 	return mongoUser;
// };
const serviceAccount = require('./service-account.json');

const app: express.Application = express();

app.use(protector(serviceAccount));
app.use('/notifications', router);

export default app;
