import { z } from "zod";

export const createPaymentSchema = (currentBill: number) =>
  z.object({
    amount: z
      .number({
        error: "Payment amount is required",
      })
      .positive("Amount must be greater than 0")
      .max(
        currentBill,
        `Payment cannot exceed ৳${currentBill}`,
      ),

    paymentMethod: z.enum([
      "bKash",
      "Nagad",
      "Cash",
    ]),
  });

export type PaymentFormData = z.infer<
  ReturnType<typeof createPaymentSchema>
>;