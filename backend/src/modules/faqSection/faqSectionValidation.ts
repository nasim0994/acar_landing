import { z } from 'zod';

export const faqSectionValidation = z.object({
  title: z.string(),
});
