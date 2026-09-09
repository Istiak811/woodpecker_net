import { z } from "zod";

export const complaintSchema = z.object({
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters"),

  category: z.enum([
    "connection",
    "speed",
    "billing",
    "technical",
    "other",
  ]),

  priority: z.enum([
    "low",
    "medium",
    "high",
  ]),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters"),
});

export type ComplaintFormData = z.infer<
  typeof complaintSchema
>;