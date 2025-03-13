import { model, Schema } from 'mongoose';
import { IFaq } from './faqInterface';

const faqSchema = new Schema<IFaq>({
  question: {
    type: String,
    required: true,
    unique: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

export const FAQ = model<IFaq>('FAQ', faqSchema);
