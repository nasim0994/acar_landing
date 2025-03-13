import express from 'express';
const Router = express.Router();
import verifyValidate from '../../middlewares/verifyValidate';
import { userValidation } from '../user/userValidation';
import { loginValidation } from './authValidation';
import { createAdmin, loggedUser, loginUser } from './authController';
import { verifyToken } from '../../middlewares/verifyToken';

Router.post('/admin/register', verifyValidate(userValidation), createAdmin);
Router.post('/login', verifyValidate(loginValidation), loginUser);
Router.get('/me', verifyToken, loggedUser);

export const authRoute = Router;
