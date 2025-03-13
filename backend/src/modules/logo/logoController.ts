import { RequestHandler } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import {
  addLogoService,
  getLogoService,
  updateLogoService,
} from './logoService';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { ILogo } from './logoInterface';
import fs from 'fs';

export const addLogo: RequestHandler = catchAsync(async (req, res, next) => {
  const logo: string | undefined = req?.file?.filename;

  if (!logo) throw new AppError(httpStatus.NOT_FOUND, 'Logo is required !');

  const data: ILogo = {
    logo: `/logo/${logo}`,
  };

  try {
    const result = await addLogoService(data);

    res.status(200).json({
      success: true,
      message: 'Logo add successfully',
      data: result,
    });
  } catch (error) {
    fs.unlink(`./uploads/logo/${logo}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
    next(error);
  }
});

export const getLogo: RequestHandler = catchAsync(async (req, res) => {
  const result = await getLogoService();

  res.status(200).json({
    success: true,
    message: 'Logo get successfully',
    data: result,
  });
});

export const updateLogo: RequestHandler = catchAsync(async (req, res, next) => {
  const logo: string | undefined = req?.file?.filename;
  const id = req.params.id;

  if (!logo) throw new AppError(httpStatus.NOT_FOUND, 'Logo is required !');

  const data: ILogo = {
    logo: `/logo/${logo}`,
  };

  try {
    const result = await updateLogoService(data, id);

    res.status(200).json({
      success: true,
      message: 'Logo update successfully',
      data: result,
    });
  } catch (error) {
    fs.unlink(`./uploads/logo/${logo}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
    next(error);
  }
});
