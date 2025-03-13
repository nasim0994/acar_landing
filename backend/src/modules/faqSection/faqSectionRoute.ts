import express from 'express';
const Router = express.Router();
import verifyValidate from '../../middlewares/verifyValidate';
import { faqSectionValidation } from './faqSectionValidation';
import {
  addFaqSection,
  getFaqSection,
  updateFaqSection,
} from './faqSectionController';
import { verifyAdmin } from '../../middlewares/verifyAdmin';

Router.post(
  '/add',
  verifyAdmin,
  verifyValidate(faqSectionValidation),
  addFaqSection,
);
Router.get('/', getFaqSection);
Router.patch(
  '/update/:id',
  verifyAdmin,
  verifyValidate(faqSectionValidation),
  updateFaqSection,
);

export const faqSectionRoute = Router;
