import { z } from 'zod';

export const productValidation = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  price: z.number().positive(),
  discountPrice: z.number().positive().optional(),
});
