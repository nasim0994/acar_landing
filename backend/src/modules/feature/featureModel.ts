import { model, Schema } from 'mongoose';
import { IFeature } from './featureInterface';

const featureSchema = new Schema<IFeature>({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

export const Feature = model<IFeature>('Feature', featureSchema);
