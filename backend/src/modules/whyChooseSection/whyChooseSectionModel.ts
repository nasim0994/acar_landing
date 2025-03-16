import { model, Schema } from 'mongoose';
import { IWhyChooseSection } from './whyChooseSectionInterface';

const whyChooseSectionSchema = new Schema<IWhyChooseSection>({
  title: {
    type: String,
    required: true,
  },
});

export const WhyChooseSection = model<IWhyChooseSection>(
  'WhyChooseSection',
  whyChooseSectionSchema,
);
