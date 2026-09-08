"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  createPaymentSchema,
  type PaymentFormData,
} from "@/lib/validations/payment";

interface MakePaymentProps {
  amount: number;
}

export function MakePayment({ amount }: MakePaymentProps) {
  const [paymentData, setPaymentData] =
    useState<PaymentFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormData>({
    resolver: zodResolver(createPaymentSchema(amount)),
    defaultValues: {
      amount,
      paymentMethod: "bKash",
    },
  });

  const handlePayment = (data: PaymentFormData) => {
    setPaymentData(data);
  };

  return (
    <div className="rounded-xl border bg-card p-5">
      <div className="mb-5">
        <h2 className="text-lg font-semibold">
          Make Payment
        </h2>

        <p className="text-sm text-muted-foreground">
          Pay your current internet bill.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(handlePayment)}
        className="space-y-4"
      >
        <div>
          <p className="text-sm text-muted-foreground">
            Current Bill
          </p>

          <p className="mt-1 text-2xl font-bold">
            ৳{amount}
          </p>
        </div>

        <div>
          <label
            htmlFor="amount"
            className="text-sm font-medium"
          >
            Payment Amount
          </label>

          <input
            id="amount"
            type="number"
            {...register("amount", {
              valueAsNumber: true,
            })}
            className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm"
          />

          {errors.amount && (
            <p className="mt-1 text-sm text-destructive">
              {errors.amount.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="paymentMethod"
            className="text-sm font-medium"
          >
            Payment Method
          </label>

          <select
            id="paymentMethod"
            {...register("paymentMethod")}
            className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm"
          >
            <option value="bKash">bKash</option>
            <option value="Nagad">Nagad</option>
            <option value="Cash">Cash</option>
          </select>

          {errors.paymentMethod && (
            <p className="mt-1 text-sm text-destructive">
              {errors.paymentMethod.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Pay Now
        </button>
      </form>

      {paymentData && (
        <div className="mt-4 rounded-xl border p-5">
          <h2 className="text-lg font-semibold">
            Payment Ready
          </h2>

          <div className="mt-4 space-y-2 text-sm">
            <p>
              <span className="text-muted-foreground">
                Amount:
              </span>{" "}
              ৳{paymentData.amount}
            </p>

            <p>
              <span className="text-muted-foreground">
                Method:
              </span>{" "}
              {paymentData.paymentMethod}
            </p>
          </div>

          <button
            type="button"
            className="mt-4 w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            onClick={() => {
              console.log(
                "Confirm payment:",
                paymentData
              );
            }}
          >
            Confirm Payment
          </button>
        </div>
      )}
    </div>
  );
}