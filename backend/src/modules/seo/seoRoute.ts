import express from 'express';
const Router = express.Router();
import { createSeo, getSeo, updateSeo } from './seoController';
import { verifyAdmin } from '../../middlewares/verifyAdmin';

Router.post('/create', verifyAdmin, createSeo);
Router.get('/', getSeo);
Router.patch('/update/:id', verifyAdmin, updateSeo);

export const seoRoute = Router;
