import { z } from "zod";

export const personalInfoSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters"),

  email: z
    .string()
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .min(10, "Please enter a valid phone number"),

  dateOfBirth: z
    .string()
    .min(1, "Date of birth is required"),
});

export type PersonalInfoFormData = z.infer<
  typeof personalInfoSchema
>;