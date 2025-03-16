import express from 'express';
const Router = express.Router();
import { createSeo, getSeo, updateSeo } from './seoController';
import { verifyAdmin } from '../../middlewares/verifyAdmin';
import verifyValidate from '../../middlewares/verifyValidate';
import { seoValidation } from './seoValidation';

Router.post('/add', verifyAdmin, verifyValidate(seoValidation), createSeo);
Router.get('/', getSeo);
Router.patch(
  '/update/:id',
  verifyAdmin,
  verifyValidate(seoValidation),
  updateSeo,
);

export const seoRoute = Router;
