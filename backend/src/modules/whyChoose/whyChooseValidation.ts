import { z } from 'zod';

export const whyChooseValidation = z.object({
  title: z.string(),
});
