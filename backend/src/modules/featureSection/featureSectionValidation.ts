import { z } from 'zod';

export const featureSectionValidation = z.object({
  title: z.string(),
});
