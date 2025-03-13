import { RequestHandler } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import {
  addFaqService,
  deleteFaqService,
  getAllFaqService,
  getFaqByIdService,
  updateFaqService,
} from './faqService';

export const addFaq: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await addFaqService(data);

  res.status(200).json({
    success: true,
    message: 'Faq add successfully',
    data: result,
  });
});

export const getAllFaq: RequestHandler = catchAsync(async (req, res) => {
  const result = await getAllFaqService();

  res.status(200).json({
    success: true,
    message: 'Get all faq successfully',
    data: result,
  });
});

export const getFaqById: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await getFaqByIdService(id);

  res.status(200).json({
    success: true,
    message: 'Get faq by id successfully',
    data: result,
  });
});

export const updateFaq: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const result = await updateFaqService(id, data);

  res.status(200).json({
    success: true,
    message: 'Faq updated successfully',
    data: result,
  });
});

export const deleteFaq: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  await deleteFaqService(id);

  res.status(200).json({
    success: true,
    message: 'Faq deleted successfully',
  });
});
