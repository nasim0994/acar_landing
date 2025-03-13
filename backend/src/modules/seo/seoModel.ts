import { model, Schema } from 'mongoose';
import { ISeo } from './seoInterface';

const seoSchema = new Schema<ISeo>({
  basic: {
    type: Object,
    require: true,
  },
  og: {
    type: Object,
  },
  custom: {
    type: Object,
  },
});

export const SEO = model<ISeo>('SEO', seoSchema);
