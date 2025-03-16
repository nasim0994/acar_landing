import express from 'express';
const Router = express.Router();
import verifyValidate from '../../middlewares/verifyValidate';
import { verifyAdmin } from '../../middlewares/verifyAdmin';
import {
  addWhyChooseSection,
  getWhyChooseSection,
  updateWhyChooseSection,
} from './whyChooseSectionController';
import { whyChooseSectionValidation } from './whyChooseSectionValidation';

Router.post(
  '/add',
  verifyAdmin,
  verifyValidate(whyChooseSectionValidation),
  addWhyChooseSection,
);
Router.get('/', getWhyChooseSection);
Router.patch('/update/:id', verifyAdmin, updateWhyChooseSection);

export const whyChooseSectionRoute = Router;
