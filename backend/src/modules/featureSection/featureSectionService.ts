import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { IFeatureSection } from './featureSectionInterface';
import { FeatureSection } from './featureSectionModel';

export const addFeatureSectionService = async (data: IFeatureSection) => {
  const isExist = await FeatureSection.findOne();
  if (isExist)
    throw new AppError(httpStatus.CONFLICT, 'Feature Section already exist');

  const result = await FeatureSection.create(data);
  return result;
};

export const getFeatureSectionService = async () => {
  const result = await FeatureSection.findOne();
  return result;
};

export const updateFeatureSectionService = async (
  data: IFeatureSection,
  id: string,
) => {
  const result = await FeatureSection.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};
