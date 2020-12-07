import express from 'express';
import { emailController } from '../controllers/index.js';



const router = express.Router()

router.post('/send', emailController.send);
router.post('/create', emailController.create);

export default router;