import { RequestHandler } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import {
  addWhyChooseSectionService,
  getWhyChooseSectionService,
  updateWhyChooseSectionService,
} from './whyChooseSectionService';

export const addWhyChooseSection: RequestHandler = catchAsync(
  async (req, res) => {
    const data = req.body;
    const result = await addWhyChooseSectionService(data);

    res.status(200).json({
      success: true,
      message: 'WhyChooseSection add successfully',
      data: result,
    });
  },
);

export const getWhyChooseSection: RequestHandler = catchAsync(
  async (req, res) => {
    const result = await getWhyChooseSectionService();

    res.status(200).json({
      success: true,
      message: 'WhyChooseSection get successfully',
      data: result,
    });
  },
);

export const updateWhyChooseSection: RequestHandler = catchAsync(
  async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    const result = await updateWhyChooseSectionService(data, id);

    res.status(200).json({
      success: true,
      message: 'WhyChooseSection updated successfully',
      data: result,
    });
  },
);
