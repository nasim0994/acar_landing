import express from 'express';
const Router = express.Router();
import { addLogo, getLogo, updateLogo } from './logoController';
import { verifyAdmin } from '../../middlewares/verifyAdmin';
import { fileUploder } from '../../utils/fileUploder';
const upload = fileUploder('logo', 1024 * 1024).single('file');

Router.post('/add', verifyAdmin, upload, addLogo);
Router.get('/', getLogo);
Router.patch('/update/:id', verifyAdmin, upload, updateLogo);

export const logoRoute = Router;
