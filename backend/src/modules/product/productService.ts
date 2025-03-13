import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import fs from 'fs';
import { Product } from './productModel';
import { IProduct } from './productInterface';

export const addProductService = async (data: IProduct) => {
  const result = await Product.create(data);
  return result;
};

export const getAllProductService = async () => {
  const result = await Product.find();
  return result;
};

export const getProductByIdService = async (id: string) => {
  const result = await Product.findById(id);
  if (!result) throw new AppError(httpStatus.NOT_FOUND, 'Product not found');
  return result;
};

export const updateProductService = async (id: string, data: IProduct) => {
  const isExist = await Product.findById(id);
  if (!isExist) {
    fs.unlink(`./uploads/${data?.image}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
    throw new AppError(httpStatus.NOT_FOUND, 'Product not found');
  }

  const result = await Product.findByIdAndUpdate(id, data, { new: true });

  if (result?.image && data?.image && isExist?.image) {
    fs.unlink(`./uploads/${isExist?.image}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
  }

  return result;
};

export const deleteProductService = async (id: string) => {
  const isExist = await Product.findById(id);
  if (!isExist) throw new AppError(httpStatus.NOT_FOUND, 'Product not found');

  const result = await Product.findByIdAndDelete(id);

  if (result?.image) {
    fs.unlink(`./uploads/${result?.image}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
  }

  return result;
};
