import { Router } from 'express';
import { NotificationService } from './notification.service';

const router = Router();

router
	.route('/')
	.get(NotificationService.getAll)
	.post(NotificationService.create);

router.route('/:id').get(NotificationService.clicked);

export default router;
