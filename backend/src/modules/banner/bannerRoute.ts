import express, { NextFunction, Request, Response } from 'express';
import verifyValidate from '../../middlewares/verifyValidate';
import { bannerValidation } from './bannerValidation';
import { addBanner, getBanner, updateBanner } from './bannerController';
import { verifyAdmin } from '../../middlewares/verifyAdmin';
import { fileUploader } from '../../utils/fileUploader';
const Router = express.Router();
const upload = fileUploader('banner').single('image');

Router.post(
  '/add',
  verifyAdmin,
  upload,
  (req: Request, res: Response, next: NextFunction) => {
    req.body = req.body.data && JSON.parse(req.body.data);
    next();
  },
  verifyValidate(bannerValidation),
  addBanner,
);
Router.get('/', getBanner);
Router.patch(
  '/update/:id',
  verifyAdmin,
  upload,
  (req: Request, res: Response, next: NextFunction) => {
    req.body = req.body.data && JSON.parse(req.body.data);
    next();
  },
  verifyValidate(bannerValidation),
  updateBanner,
);

export const bannerRoute = Router;
