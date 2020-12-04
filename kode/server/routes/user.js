import express from 'express';
import { userController } from '../controllers/index.js'

const router = express.Router();

router.get('/:id', userController.get);
router.get('/', userController.list);
router.post('/', userController.create);
// router.put('/:id', pollController.update);
router.delete('/:id', userController.remove);

export default router;