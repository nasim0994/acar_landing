import express from 'express';
const Router = express.Router();
import { verifyAdmin } from '../../middlewares/verifyAdmin';
import { fileUploder } from '../../utils/fileUploder';
import { addFavicon, getFavicon, updateFavicon } from './faviconController';
const upload = fileUploder('favicon', 1024 * 1024).single('file');

Router.post('/add', verifyAdmin, upload, addFavicon);
Router.get('/', getFavicon);
Router.patch('/update/:id', verifyAdmin, upload, updateFavicon);

export const faviconRoute = Router;
