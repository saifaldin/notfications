const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
	avatar: String,
	posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
	votes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
	googleId: String,
});

userSchema.methods.vote = function (id: any) {
	if (this.votes.indexOf(id) === -1) {
		this.votes.push(id);
	}
	return this.save();
};

userSchema.methods.isVoted = function (id: any) {
	return this.votes.some(function (pollId: any) {
		return pollId.toString() === id.toString();
	});
};

const User = mongoose.model('user', userSchema);

export default User;
