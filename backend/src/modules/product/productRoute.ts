import express, { NextFunction, Request, Response } from 'express';
const Router = express.Router();
import { verifyAdmin } from '../../middlewares/verifyAdmin';
import verifyValidate from '../../middlewares/verifyValidate';
import { productValidation } from './productValidation';
import {
  addProduct,
  deleteProduct,
  getAllProduct,
  getProductById,
  updateProduct,
} from './productController';
import { fileUploader } from '../../utils/fileUploader';
const upload = fileUploader('product').single('image');

Router.post(
  '/add',
  verifyAdmin,
  upload,
  (req: Request, res: Response, next: NextFunction) => {
    req.body = req.body.data && JSON.parse(req.body.data);
    next();
  },
  verifyValidate(productValidation),
  addProduct,
);

Router.get('/all', getAllProduct);
Router.get('/:id', getProductById);
Router.patch(
  '/update/:id',
  verifyAdmin,
  upload,
  (req: Request, res: Response, next: NextFunction) => {
    req.body = req.body.data && JSON.parse(req.body.data);
    next();
  },
  updateProduct,
);
Router.delete('/delete/:id', verifyAdmin, deleteProduct);

export const productRoute = Router;
