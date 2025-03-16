import AppError from '../../errors/AppError';
import { deleteFile } from '../../utils/deleteFile';
import httpStatus from 'http-status';
import { IFeature } from './featureInterface';
import { Feature } from './featureModel';

export const addFeatureService = async (data: IFeature) => {
  const isExist = await Feature.findOne();
  if (isExist) throw new AppError(httpStatus.CONFLICT, 'Feature already exist');

  const result = await Feature.create(data);
  return result;
};

export const getFeatureService = async () => {
  const result = await Feature.findOne();
  return result;
};

export const updateFeatureService = async (data: IFeature, id: string) => {
  const isExist = await Feature.findById(id);
  if (!isExist) {
    deleteFile(data?.image as string);
    throw new AppError(httpStatus.NOT_FOUND, 'Feature not found');
  }

  const result = await Feature.findByIdAndUpdate(id, data, { new: true });

  if (result && data?.image && isExist?.image) {
    deleteFile(isExist?.image);
  }

  return result;
};
