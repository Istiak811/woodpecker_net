import type { BillingData } from "@/types/billing";

export const billingData: BillingData = {
  summary: {
    currentBill: 1000,
    dueDate: "September 10, 2026",
    paidTill: "August 31, 2026",
    status: "pending",
  },

  payments: [
    {
      id: 1,
      invoice: "INV-2026-008",
      date: "August 05, 2026",
      amount: 1000,
      status: "paid",
      paymentMethod: "bKash",
    },
    {
      id: 2,
      invoice: "INV-2026-007",
      date: "July 05, 2026",
      amount: 1000,
      status: "paid",
      paymentMethod: "Nagad",
    },
    {
      id: 3,
      invoice: "INV-2026-006",
      date: "June 05, 2026",
      amount: 1000,
      status: "paid",
      paymentMethod: "Cash",
    },
    {
      id: 4,
      invoice: "INV-2026-005",
      date: "May 05, 2026",
      amount: 1000,
      status: "failed",
      paymentMethod: "bKash",
    },
  ],
};