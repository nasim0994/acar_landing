import { RequestHandler } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import fs from 'fs';
import { IFavicon } from './faviconInterface';
import {
  addFaviconService,
  getFaviconService,
  updateFaviconService,
} from './faviconService';

export const addFavicon: RequestHandler = catchAsync(async (req, res, next) => {
  const favicon: string | undefined = req?.file?.filename;

  if (!favicon)
    throw new AppError(httpStatus.NOT_FOUND, 'Favicon is required !');

  const data: IFavicon = {
    favicon: `/favicon/${favicon}`,
  };

  try {
    const result = await addFaviconService(data);

    res.status(200).json({
      success: true,
      message: 'Favicon add successfully',
      data: result,
    });
  } catch (error) {
    fs.unlink(`./uploads/favicon/${favicon}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
    next(error);
  }
});

export const getFavicon: RequestHandler = catchAsync(async (req, res) => {
  const result = await getFaviconService();

  res.status(200).json({
    success: true,
    message: 'Favicon get successfully',
    data: result,
  });
});

export const updateFavicon: RequestHandler = catchAsync(
  async (req, res, next) => {
    const favicon: string | undefined = req?.file?.filename;
    const id = req.params.id;

    if (!favicon)
      throw new AppError(httpStatus.NOT_FOUND, 'Favicon is required !');

    const data: IFavicon = {
      favicon: `/favicon/${favicon}`,
    };

    try {
      const result = await updateFaviconService(data, id);

      res.status(200).json({
        success: true,
        message: 'Favicon update successfully',
        data: result,
      });
    } catch (error) {
      fs.unlink(`./uploads/favicon/${favicon}`, (err) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.error(err);
        }
      });
      next(error);
    }
  },
);
