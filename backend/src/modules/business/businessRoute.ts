import express from 'express';
const Router = express.Router();
import verifyValidate from '../../middlewares/verifyValidate';
import { verifyAdmin } from '../../middlewares/verifyAdmin';
import {
  businessUpdateValidation,
  businessValidation,
} from './businessValidation';
import { addBusiness, getBusiness, updateBusiness } from './businessController';

Router.post(
  '/add',
  verifyAdmin,
  verifyValidate(businessValidation),
  addBusiness,
);
Router.get('/', getBusiness);
Router.patch(
  '/update/:id',
  verifyAdmin,
  verifyValidate(businessUpdateValidation),
  updateBusiness,
);

export const businessRoute = Router;
