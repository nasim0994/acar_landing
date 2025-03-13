import { z } from 'zod';

export const featureValidation = z.object({
  title: z.string(),
});
