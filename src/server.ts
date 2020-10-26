import app from './app';
import * as mongoose from 'mongoose';
import 'dotenv';

mongoose
	.connect(
		process.env.DB || 'mongodb+srv://mustafa:mmmkkk@cluster0.zj3wa.mongodb.net/pickly?retryWrites=true&w=majority',
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
