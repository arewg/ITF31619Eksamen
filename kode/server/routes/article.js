import express from 'express';
import { articleController, categoryController } from '../controllers/index.js'
import { isAuthenticated, isAuthorized } from '../middleware/auth.js';



const router = express.Router();

router.get('/topten', [isAuthenticated, isAuthorized('superadmin')], articleController.listTopTen);
router.get('/:id', articleController.get);
router.get('/category', categoryController.getCategory);
router.get('/', articleController.list);
router.get('/category/:id', articleController.listByCategory)
router.get('/search/:title', articleController.listBySearch)
router.post('/new', [isAuthenticated, isAuthorized('admin')], articleController.create);
router.put('/update/:id', articleController.update)
router.delete('/:id', articleController.remove);

export default router;