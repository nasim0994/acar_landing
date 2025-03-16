import { z } from 'zod';

export const whyChooseSectionValidation = z.object({
  title: z.string(),
});
