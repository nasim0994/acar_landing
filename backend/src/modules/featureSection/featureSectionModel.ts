import { model, Schema } from 'mongoose';
import { IFeatureSection } from './featureSectionInterface';

const featureSectionSchema = new Schema<IFeatureSection>({
  title: {
    type: String,
    required: true,
  },
});

export const FeatureSection = model<IFeatureSection>(
  'FeatureSection',
  featureSectionSchema,
);
