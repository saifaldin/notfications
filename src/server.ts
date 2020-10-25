import app from './app';
import mongoose from 'mongoose';

mongoose
	.connect(
		'mongodb+srv://saifaldin:qwer1234@cluster0.ht6ko.mongodb.net/pickly?retryWrites=true&w=majority',
		{
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useFindAndModify: false,
		}
	)
	.then(() => console.log('connected to db'));

app.listen(3001, () => {
	console.log('Listening on port 3001');
});
