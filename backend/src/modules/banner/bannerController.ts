import { RequestHandler } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import {
  addBannerService,
  getBannerService,
  updateBannerService,
} from './bannerService';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { deleteFile } from '../../utils/deleteFile';

export const addBanner: RequestHandler = catchAsync(async (req, res) => {
  const image: string | undefined = req?.file?.filename;
  if (!image) throw new AppError(httpStatus.NOT_FOUND, 'image is required !');

  const data = {
    ...req.body,
    image: `/banner/${image}`,
  };

  const result = await addBannerService(data);

  res.status(200).json({
    success: true,
    message: 'Banner add successfully',
    data: result,
  });
});

export const getBanner: RequestHandler = catchAsync(async (req, res) => {
  const result = await getBannerService();

  res.status(200).json({
    success: true,
    message: 'Banner get successfully',
    data: result,
  });
});

export const updateBanner: RequestHandler = catchAsync(
  async (req, res, next) => {
    const id = req.params.id;
    const image: string | undefined = req?.file?.filename;
    const data = {
      ...req.body,
      image: image ? `/banner/${image}` : undefined,
    };

    try {
      const result = await updateBannerService(data, id);

      res.status(200).json({
        success: true,
        message: 'Banner updated successfully',
        data: result,
      });
    } catch (error) {
      if (image) deleteFile(`/banner/${image}`);
      next(error);
    }
  },
);
