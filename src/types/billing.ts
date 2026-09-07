export type PaymentStatus =
  | "paid"
  | "pending"
  | "failed";

export interface BillingSummary {
  currentBill: number;
  dueDate: string;
  paidTill: string;
  status: PaymentStatus;
}

export interface Payment {
  id: number;
  invoice: string;
  date: string;
  amount: number;
  status: PaymentStatus;
  paymentMethod: string;
}

export interface BillingData {
  summary: BillingSummary;
  payments: Payment[];
}