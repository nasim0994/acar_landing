import { RequestHandler } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import {
  addFaqSectionService,
  getFaqSectionService,
  updateFaqSectionService,
} from './faqSectionService';

export const addFaqSection: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await addFaqSectionService(data);

  res.status(200).json({
    success: true,
    message: 'FaqSection add successfully',
    data: result,
  });
});

export const getFaqSection: RequestHandler = catchAsync(async (req, res) => {
  const result = await getFaqSectionService();

  res.status(200).json({
    success: true,
    message: 'FaqSection get successfully',
    data: result,
  });
});

export const updateFaqSection: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const result = await updateFaqSectionService(data, id);

  res.status(200).json({
    success: true,
    message: 'FaqSection updated successfully',
    data: result,
  });
});
