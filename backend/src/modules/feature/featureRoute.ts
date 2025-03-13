import express, { NextFunction, Request, Response } from 'express';
const Router = express.Router();
import { verifyAdmin } from '../../middlewares/verifyAdmin';
import {
  addFeature,
  deleteFeature,
  getAllFeature,
  getFeatureById,
  updateFeature,
} from './featureController';
import verifyValidate from '../../middlewares/verifyValidate';
import { featureValidation } from './featureValidation';
import { fileUploader } from '../../utils/fileUploader';
const upload = fileUploader('feature').single('file');

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

Router.get('/all', getAllFeature);
Router.get('/:id', getFeatureById);
Router.patch(
  '/update/:id',
  verifyAdmin,
  upload,
  (req: Request, res: Response, next: NextFunction) => {
    req.body = req.body.data && JSON.parse(req.body.data);
    next();
  },
  updateFeature,
);
Router.delete('/delete/:id', verifyAdmin, deleteFeature);

export const featureRoute = Router;
