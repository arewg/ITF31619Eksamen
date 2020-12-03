import express from 'express';
import { articleController } from '../controllers/index.js'

const router = express.Router();

router.get('/:id', articleController.get);
//router.get('/', pollController.list);
router.post('/', articleController.create);
// router.put('/:id', pollController.update);
router.delete('/:id', articleController.removeArticle);

export default router;