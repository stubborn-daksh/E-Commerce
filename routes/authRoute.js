import express from 'express';

import { registerController, loginController, testController } from '../controllers/authController.js';
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router();

//routiing

//REGISTER || POST METHOD
router.post('/register', registerController);

//LOGIN || POST METHOD
router.post('/login', loginController);

//test routes
router.get('/test', requireSignIn, isAdmin, testController);

export default router;