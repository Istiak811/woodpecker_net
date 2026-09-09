export type ComplaintStatus =
  | "open"
  | "in-progress"
  | "resolved"
  | "closed";

export type ComplaintPriority =
  | "low"
  | "medium"
  | "high";

export type ComplaintCategory =
  | "connection"
  | "speed"
  | "billing"
  | "technical"
  | "other";

export interface Complaint {
  id: number;
  subject: string;
  category: ComplaintCategory;
  description: string;
  status: ComplaintStatus;
  priority: ComplaintPriority;
  createdAt: string;
  updatedAt: string;
}

export interface ComplaintData {
  complaints: Complaint[];
}