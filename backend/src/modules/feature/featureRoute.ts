import express, { NextFunction, Request, Response } from 'express';
import verifyValidate from '../../middlewares/verifyValidate';
import { addFeature, getFeature, updateFeature } from './featureController';
import { verifyAdmin } from '../../middlewares/verifyAdmin';
import { fileUploader } from '../../utils/fileUploader';
import { featureValidation } from './featureValidation';
const Router = express.Router();
const upload = fileUploader('feature').single('image');

Router.post(
  '/add',
  verifyAdmin,
  upload,
  (req: Request, res: Response, next: NextFunction) => {
    req.body = req.body.data && JSON.parse(req.body.data);
    next();
  },
  verifyValidate(featureValidation),
  addFeature,
);
Router.get('/', getFeature);
Router.patch(
  '/update/:id',
  verifyAdmin,
  upload,
  (req: Request, res: Response, next: NextFunction) => {
    req.body = req.body.data && JSON.parse(req.body.data);
    next();
  },
  verifyValidate(featureValidation),
  updateFeature,
);

export const featureRoute = Router;
