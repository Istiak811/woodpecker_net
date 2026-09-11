export type NoticePriority =
  | "low"
  | "medium"
  | "high";

export interface Notice {
  id: number;
  title: string;
  description: string;
  priority: NoticePriority;
  createdAt: string;
  isRead: boolean;
}

export interface NoticeData {
  notices: Notice[];
}