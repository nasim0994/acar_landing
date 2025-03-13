import AppError from '../../errors/AppError';
import { IFaq } from './faqInterface';
import { FAQ } from './faqModel';
import httpStatus from 'http-status';

export const addFaqService = async (data: IFaq) => {
  const result = await FAQ.create(data);
  return result;
};

export const getAllFaqService = async () => {
  const result = await FAQ.find({});
  return result;
};

export const getFaqByIdService = async (id: string) => {
  const result = await FAQ.findById(id);
  if (!result) throw new AppError(httpStatus.NOT_FOUND, 'FAQ not found');
  return result;
};

export const updateFaqService = async (id: string, data: IFaq) => {
  const isExist = await FAQ.findById(id);
  if (!isExist) throw new AppError(httpStatus.NOT_FOUND, 'FAQ not found');

  const result = await FAQ.findByIdAndUpdate(id, data, { new: true });
  return result;
};

export const deleteFaqService = async (id: string) => {
  const isExist = await FAQ.findById(id);
  if (!isExist) throw new AppError(httpStatus.NOT_FOUND, 'FAQ not found');

  const result = await FAQ.findByIdAndDelete(id);
  return result;
};
