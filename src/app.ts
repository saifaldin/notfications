import express from 'express';
import router from './notifications/notification.routes';
const { protector } = require('pickly-protector-master');

// const userEnricher = async (user) => {
// 	let mongoUser = await User.findOne({ email: user.tokeninfo.email });
// 	if (!mongoUser)
// 		mongoUser = await User.create({
// 			name: user.tokeninfo.name,
// 			email: user.tokeninfo.email,
// 		});
// 	return mongoUser;
// };
var serviceAccount = require('./service-account.json');

const app: express.Application = express();
app.use(protector(serviceAccount));
app.use('/notifications', router);

export default app;
