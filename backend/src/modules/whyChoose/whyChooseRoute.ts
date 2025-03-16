import express, { NextFunction, Request, Response } from 'express';
const Router = express.Router();
import { verifyAdmin } from '../../middlewares/verifyAdmin';
import verifyValidate from '../../middlewares/verifyValidate';
import { fileUploader } from '../../utils/fileUploader';
import { whyChooseValidation } from './whyChooseValidation';
import {
  addWhyChoose,
  deleteWhyChoose,
  getAllWhyChoose,
  getWhyChooseById,
  updateWhyChoose,
} from './whyChooseController';
const upload = fileUploader('whyChoose').single('icon');

Router.post(
  '/add',
  verifyAdmin,
  upload,
  (req: Request, res: Response, next: NextFunction) => {
    req.body = req.body.data && JSON.parse(req.body.data);
    next();
  },
  verifyValidate(whyChooseValidation),
  addWhyChoose,
);
Router.get('/all', getAllWhyChoose);
Router.get('/:id', getWhyChooseById);
Router.patch(
  '/update/:id',
  verifyAdmin,
  upload,
  (req: Request, res: Response, next: NextFunction) => {
    req.body = req.body.data && JSON.parse(req.body.data);
    next();
  },
  updateWhyChoose,
);
Router.delete('/delete/:id', verifyAdmin, deleteWhyChoose);

export const whyChooseRoute = Router;
