import express from 'express';
import verifyValidate from '../../middlewares/verifyValidate';
import { bannerValidation } from './bannerValidation';
import { addBanner, getBanner, updateBanner } from './bannerController';
import { verifyAdmin } from '../../middlewares/verifyAdmin';
const Router = express.Router();

Router.post('/add', verifyAdmin, verifyValidate(bannerValidation), addBanner);
Router.get('/', getBanner);
Router.patch(
  '/update/:id',
  verifyAdmin,
  verifyValidate(bannerValidation),
  updateBanner,
);

export const bannerRoute = Router;
