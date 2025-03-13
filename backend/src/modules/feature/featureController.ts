import { RequestHandler } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { IFeature } from './featureInterface';
import {
  addFeatureService,
  deleteFeatureService,
  getAllFeatureService,
  getFeatureByIdService,
  updateFeatureService,
} from './featureService';
import fs from 'fs';

export const addFeature: RequestHandler = catchAsync(async (req, res, next) => {
  const icon: string | undefined = req?.file?.filename;

  if (!icon) throw new AppError(httpStatus.NOT_FOUND, 'Icon is required !');

  const data: IFeature = {
    ...req.body,
    icon: `/feature/${icon}`,
  };

  try {
    const result = await addFeatureService(data);

    res.status(200).json({
      success: true,
      message: 'Feature add successfully',
      data: result,
    });
  } catch (error) {
    fs.unlink(`./uploads/feature/${icon}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
    next(error);
  }
});

export const getAllFeature: RequestHandler = catchAsync(async (req, res) => {
  const result = await getAllFeatureService();

  res.status(200).json({
    success: true,
    message: 'All feature get successfully',
    data: result,
  });
});

export const getFeatureById: RequestHandler = catchAsync(async (req, res) => {
  const result = await getFeatureByIdService(req.params.id);

  res.status(200).json({
    success: true,
    message: 'Feature get successfully',
    data: result,
  });
});

export const updateFeature: RequestHandler = catchAsync(
  async (req, res, next) => {
    const icon: string | undefined = req?.file?.filename;

    const data: IFeature = {
      ...req.body,
      icon: icon ? `/feature/${icon}` : undefined,
    };

    try {
      const result = await updateFeatureService(req.params.id, data);

      res.status(200).json({
        success: true,
        message: 'Feature updated successfully',
        data: result,
      });
    } catch (error) {
      if (icon) {
        fs.unlink(`./uploads/feature/${icon}`, (err) => {
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

export const deleteFeature: RequestHandler = catchAsync(async (req, res) => {
  await deleteFeatureService(req.params.id);

  res.status(200).json({
    success: true,
    message: 'Feature deleted successfully',
  });
});
