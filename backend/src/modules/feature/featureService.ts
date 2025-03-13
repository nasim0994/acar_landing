import AppError from '../../errors/AppError';
import { IFeature } from './featureInterface';
import { Feature } from './featureModel';
import httpStatus from 'http-status';
import fs from 'fs';

export const addFeatureService = async (data: IFeature) => {
  const result = await Feature.create(data);
  return result;
};

export const getAllFeatureService = async () => {
  const result = await Feature.find();
  return result;
};

export const getFeatureByIdService = async (id: string) => {
  const result = await Feature.findById(id);
  if (!result) throw new AppError(httpStatus.NOT_FOUND, 'Feature not found');
  return result;
};

export const updateFeatureService = async (id: string, data: IFeature) => {
  const isExist = await Feature.findById(id);
  if (!isExist) {
    fs.unlink(`./uploads/${data?.icon}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
    throw new AppError(httpStatus.NOT_FOUND, 'Feature not found');
  }

  const result = await Feature.findByIdAndUpdate(id, data, { new: true });

  if (result?.icon && data?.icon && isExist?.icon) {
    fs.unlink(`./uploads/${isExist?.icon}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
  }

  return result;
};

export const deleteFeatureService = async (id: string) => {
  const isExist = await Feature.findById(id);
  if (!isExist) throw new AppError(httpStatus.NOT_FOUND, 'Feature not found');

  const result = await Feature.findByIdAndDelete(id);

  if (result?.icon) {
    fs.unlink(`./uploads/${result?.icon}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });
  }

  return result;
};
