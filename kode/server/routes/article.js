import express from 'express';
import { articleController } from '../controllers/index.js'

const router = express.Router();

router.get('/:id', articleController.get);
router.get('/', articleController.list);
router.post('/nyartikkel', articleController.create);
// router.put('/:id', pollController.update);
router.delete('/:id', articleController.remove);

export default router;