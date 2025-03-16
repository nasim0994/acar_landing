import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { IWhyChooseSection } from './whyChooseSectionInterface';
import { WhyChooseSection } from './whyChooseSectionModel';

export const addWhyChooseSectionService = async (data: IWhyChooseSection) => {
  const isExist = await WhyChooseSection.findOne();
  if (isExist)
    throw new AppError(httpStatus.CONFLICT, 'Feature Section already exist');

  const result = await WhyChooseSection.create(data);
  return result;
};

export const getWhyChooseSectionService = async () => {
  const result = await WhyChooseSection.findOne();
  return result;
};

export const updateWhyChooseSectionService = async (
  data: IWhyChooseSection,
  id: string,
) => {
  const result = await WhyChooseSection.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};
