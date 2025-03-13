import { RequestHandler } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import {
  addFeatureSectionService,
  getFeatureSectionService,
  updateFeatureSectionService,
} from './featureSectionService';

export const addFeatureSection: RequestHandler = catchAsync(
  async (req, res) => {
    const data = req.body;
    const result = await addFeatureSectionService(data);

    res.status(200).json({
      success: true,
      message: 'FeatureSection add successfully',
      data: result,
    });
  },
);

export const getFeatureSection: RequestHandler = catchAsync(
  async (req, res) => {
    const result = await getFeatureSectionService();

    res.status(200).json({
      success: true,
      message: 'FeatureSection get successfully',
      data: result,
    });
  },
);

export const updateFeatureSection: RequestHandler = catchAsync(
  async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    const result = await updateFeatureSectionService(data, id);

    res.status(200).json({
      success: true,
      message: 'FeatureSection updated successfully',
      data: result,
    });
  },
);
