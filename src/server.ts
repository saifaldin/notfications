import app from './app';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
	.connect(
		,
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
