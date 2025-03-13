import { model, Schema } from 'mongoose';
import { IFaqSection } from './faqSectionInterface';

const faqSectionSchema = new Schema<IFaqSection>({
  title: {
    type: String,
    required: true,
  },
});

export const FAQSection = model<IFaqSection>('FAQSection', faqSectionSchema);
