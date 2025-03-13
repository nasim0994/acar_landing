import { z } from 'zod';

export const faqValidation = z.object({
  question: z.string(),
  answer: z.string(),
});

export const faqUpdateValidation = z.object({
  question: z.string().optional(),
  answer: z.string().optional(),
});
