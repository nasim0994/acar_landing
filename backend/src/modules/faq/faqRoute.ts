import express from 'express';
const Router = express.Router();
import verifyValidate from '../../middlewares/verifyValidate';
import { verifyAdmin } from '../../middlewares/verifyAdmin';
import {
  addFaq,
  deleteFaq,
  getAllFaq,
  getFaqById,
  updateFaq,
} from './faqController';
import { faqUpdateValidation, faqValidation } from './faqValidation';

Router.post('/add', verifyAdmin, verifyValidate(faqValidation), addFaq);
Router.get('/all', getAllFaq);
Router.get('/:id', getFaqById);
Router.patch(
  '/update/:id',
  verifyAdmin,
  verifyValidate(faqUpdateValidation),
  updateFaq,
);
Router.delete('/delete/:id', verifyAdmin, deleteFaq);

export const faqRoute = Router;
