import { RequestHandler } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import {
  addBannerService,
  getBannerService,
  updateBannerService,
} from './bannerService';

export const addBanner: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
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

export const updateBanner: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const result = await updateBannerService(data, id);

  res.status(200).json({
    success: true,
    message: 'Banner updated successfully',
    data: result,
  });
});
