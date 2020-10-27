const { resolve } = require('path');
const User2 = require('./user.model');
export const { protector } = require('@m3ntorship/pickly-protector');
export const serviceAccount = resolve('secrets', 'service-account.json');

export const userEnricher = async (user: any) => {
	let mongoUser = await User2.findOne({ email: user.tokeninfo.email });
	if (!mongoUser)
		mongoUser = await User2.create({
			name: user.tokeninfo.name,
			email: user.tokeninfo.email,
		});
	return mongoUser;
};

// module.exports = { protector, serviceAccount, userEnricher };
