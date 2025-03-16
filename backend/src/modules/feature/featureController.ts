import { catchAsync } from '../../utils/catchAsync';
import {
  addFeatureService,
  getFeatureService,
  updateFeatureService,
} from './featureService';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { deleteFile } from '../../utils/deleteFile';

export const addFeature = catchAsync(async (req, res) => {
  const image: string | undefined = req?.file?.filename;
  if (!image) throw new AppError(httpStatus.NOT_FOUND, 'image is required !');

  const data = {
    ...req.body,
    image: `/feature/${image}`,
  };

  const result = await addFeatureService(data);

  res.status(200).json({
    success: true,
    message: 'Feature add successfully',
    data: result,
  });
});

export const getFeature = catchAsync(async (req, res) => {
  const result = await getFeatureService();

  res.status(200).json({
    success: true,
    message: 'Feature get successfully',
    data: result,
  });
});

export const updateFeature = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const image: string | undefined = req?.file?.filename;
  const data = {
    ...req.body,
    image: image ? `/feature/${image}` : undefined,
  };

  try {
    const result = await updateFeatureService(data, id);

    res.status(200).json({
      success: true,
      message: 'Feature updated successfully',
      data: result,
    });
  } catch (error) {
    if (image) deleteFile(`/feature/${image}`);
    next(error);
  }
});
