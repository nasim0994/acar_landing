import { model, Schema } from 'mongoose';
import { IBanner } from './bannerInterface';

const bannerSchema = new Schema<IBanner>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export const Banner = model<IBanner>('Banner', bannerSchema);
