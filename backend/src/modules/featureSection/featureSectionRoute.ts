import express from 'express';
const Router = express.Router();
import verifyValidate from '../../middlewares/verifyValidate';
import { verifyAdmin } from '../../middlewares/verifyAdmin';
import { featureSectionValidation } from './featureSectionValidation';
import {
  addFeatureSection,
  getFeatureSection,
  updateFeatureSection,
} from './featureSectionController';

Router.post(
  '/add',
  verifyAdmin,
  verifyValidate(featureSectionValidation),
  addFeatureSection,
);
Router.get('/', getFeatureSection);
Router.patch('/update/:id', verifyAdmin, updateFeatureSection);

export const featureSectionRoute = Router;
