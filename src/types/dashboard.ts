export type ConnectionStatus = "connected" | "disconnected" | "suspended";

export type PaymentStatus = "paid" | "pending" | "failed";

export type ComplaintStatus = "open" | "in-progress" | "resolved";

export interface ConnectionInfo {
  status: ConnectionStatus;
  packageName: string;
  speed: string;
}

export interface BillingInfo {
  amount: number;
  paidTill: string;
  status: PaymentStatus;
}

export interface ComplaintSummary {
  openCount: number;
}

export interface Notice {
  id: number;
  title: string;
  description: string;
  date: string;
}

export interface Payment {
  id: number;
  date: string;
  amount: number;
  status: PaymentStatus;
  invoice: string;
}

export interface Complaint {
  id: number;
  title: string;
  date: string;
  status: ComplaintStatus;
}

export interface DashboardData {
  connection: ConnectionInfo;
  billing: BillingInfo;
  complaints: ComplaintSummary;
  notices: Notice[];
  payments: Payment[];
  recentComplaints: Complaint[];
}
