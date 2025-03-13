import AppError from '../../errors/AppError';
import { IFaqSection } from './faqSectionInterface';
import { FAQSection } from './faqSectionModel';
import httpStatus from 'http-status';

export const addFaqSectionService = async (data: IFaqSection) => {
  const isExist = await FAQSection.findOne();
  if (isExist)
    throw new AppError(httpStatus.CONFLICT, 'FAQ Section already exist');

  const result = await FAQSection.create(data);
  return result;
};

export const getFaqSectionService = async () => {
  const result = await FAQSection.findOne();
  return result;
};

export const updateFaqSectionService = async (
  data: IFaqSection,
  id: string,
) => {
  const result = await FAQSection.findByIdAndUpdate(id, data, { new: true });
  return result;
};
