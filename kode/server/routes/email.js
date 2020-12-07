import express from 'express';
import { emailController } from '../controllers/index.js';
import { isAuthenticated, isAuthorized } from '../middleware/auth.js';



const router = express.Router()

router.post('/send', emailController.send);
router.post('/create', emailController.create);
router.get('/', emailController.list);


export default router;