import express from 'express';

import { registerController, loginController, testController, forgotPasswordController } from '../controllers/authController.js';
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router();

//routiing

//REGISTER || POST METHOD
router.post('/register', registerController);

//LOGIN || POST METHOD
router.post('/login', loginController);

//FORGOT-PASSWORD || POST METHOD
router.post('/forgot-password', forgotPasswordController);

//test routes
router.get('/test', requireSignIn, isAdmin, testController);

//protected-route-auth
router.get('/userAuth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
})


export default router;