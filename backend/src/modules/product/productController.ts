import { RequestHandler } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import fs from 'fs';
import { IProduct } from './productInterface';
import {
  addProductService,
  deleteProductService,
  getAllProductService,
  getProductByIdService,
  updateProductService,
} from './productService';

export const addProduct: RequestHandler = catchAsync(async (req, res, next) => {
  const image: string | undefined = req?.file?.filename;

  if (!image) throw new AppError(httpStatus.NOT_FOUND, 'image is required !');

  const data: IProduct = {
    ...req.body,
    image: `/product/${image}`,
  };

  try {
    const result = await addProductService(data);

    res.status(200).json({
      success: true,
      message: 'Product add successfully',
      data: result,
    });
  } catch (error) {
    fs.unlink(`./uploads/product/${image}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
    next(error);
  }
});

export const getAllProduct: RequestHandler = catchAsync(async (req, res) => {
  const result = await getAllProductService();

  res.status(200).json({
    success: true,
    message: 'All Product get successfully',
    data: result,
  });
});

export const getProductById: RequestHandler = catchAsync(async (req, res) => {
  const result = await getProductByIdService(req.params.id);

  res.status(200).json({
    success: true,
    message: 'Product get successfully',
    data: result,
  });
});

export const updateProduct: RequestHandler = catchAsync(
  async (req, res, next) => {
    const image: string | undefined = req?.file?.filename;

    const data: IProduct = {
      ...req.body,
      image: image ? `/product/${image}` : undefined,
    };

    try {
      const result = await updateProductService(req.params.id, data);

      res.status(200).json({
        success: true,
        message: 'Product updated successfully',
        data: result,
      });
    } catch (error) {
      if (image) {
        fs.unlink(`./uploads/product/${image}`, (err) => {
          if (err) {
            // eslint-disable-next-line no-console
            console.error(err);
          }
        });
      }
      next(error);
    }
  },
);

export const deleteProduct: RequestHandler = catchAsync(async (req, res) => {
  await deleteProductService(req.params.id);

  res.status(200).json({
    success: true,
    message: 'Product deleted successfully',
  });
});
