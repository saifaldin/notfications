import express from 'express';
import router from './notifications/notification.routes';

const app: express.Application = express();

app.use('/notifications', router);


export default app;
