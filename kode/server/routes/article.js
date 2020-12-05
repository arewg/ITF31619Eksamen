import express from 'express';
import { articleController, categoryController } from '../controllers/index.js'
//import { isAuthenticated, isAuthorized } from '../middleware/auth.js';



const router = express.Router();

router.get('/:id', articleController.get);
router.get('/category', categoryController.getCategory);
router.get('/', articleController.list);
router.post('/nyartikkel', articleController.create); //[isAuthenticated, isAuthorized('admin')]
router.put('/oppdater/:id', articleController.update)
router.delete('/:id', articleController.remove);

export default router;