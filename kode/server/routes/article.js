import express from 'express';
import { articleController, categoryController } from '../controllers/index.js'
import { isAuthenticated, isAuthorized } from '../middleware/auth.js';



const router = express.Router();

router.get('/:id', articleController.get);
router.get('/category', categoryController.getCategory);
//router.get('/', articleController.list);
router.get('/', articleController.listArticlesPage);
router.get('/category/:id', articleController.listByCategory)
router.get('/search/:title', articleController.listBySearch)
router.post('/nyartikkel', [isAuthenticated, isAuthorized('admin')], articleController.create);
router.put('/oppdater/:id', articleController.update)
router.delete('/:id', articleController.remove);

export default router;