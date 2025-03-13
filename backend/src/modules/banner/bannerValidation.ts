import { z } from 'zod';

export const bannerValidation = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});
