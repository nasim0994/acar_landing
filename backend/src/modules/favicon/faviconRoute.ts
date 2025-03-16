import express from 'express';
const Router = express.Router();
import { verifyAdmin } from '../../middlewares/verifyAdmin';
import { addFavicon, getFavicon, updateFavicon } from './faviconController';
import { fileUploader } from '../../utils/fileUploader';
const upload = fileUploader('favicon').single('image');

Router.post('/add', verifyAdmin, upload, addFavicon);
Router.get('/', getFavicon);
Router.patch('/update/:id', verifyAdmin, upload, updateFavicon);

export const faviconRoute = Router;
