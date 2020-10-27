import app from './app';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: __dirname + '../secrets/.env' });

mongoose
	.connect(process.env.DB_URI!, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useFindAndModify: false,
	})
	.then(() => console.log('connected to db'));

app.listen(3001, () => {
	console.log('Listening on port 3001');
});
