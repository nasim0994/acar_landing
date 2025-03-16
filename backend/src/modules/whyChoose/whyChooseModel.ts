import { model, Schema } from 'mongoose';
import { IWhyChoose } from './whyChooseInterface';

const whyChooseSchema = new Schema<IWhyChoose>({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

export const WhyChoose = model<IWhyChoose>('WhyChoose', whyChooseSchema);
