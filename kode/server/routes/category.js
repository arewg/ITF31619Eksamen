import express from 'express';
import { categoryController } from '../controllers/index.js';

const router = express.Router();

router.get('/', categoryController.getCategory);
router.post('/', categoryController.create);

export default router;