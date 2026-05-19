import { z } from "zod";

export const ContactFormDataSchema = z.object({
  first_name: z.string().min(1).max(100),
  last_name: z.string().min(1).max(100),
  email: z.string().email(),
  phone_number: z.string().min(1).max(30),
  inquiry: z.string().min(1).max(5000),
});

export type ContactFormData = z.infer<typeof ContactFormDataSchema>;
