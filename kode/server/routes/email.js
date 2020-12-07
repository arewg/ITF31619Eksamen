import express from 'express';
import { authController } from '../controllers/index.js';
import { emailController } from './controllers/index.js';
import {isAuthnticated } from './middelware/auth.js';
import { authController } from '../controllers/index.js';


const router = express.Router()

router.post('/send', emailController.send);
router.get('/me', isAuthnticated, authController.currentUser);

export default router;