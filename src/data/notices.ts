import type { NoticeData } from "@/types/notice";

export const noticeData: NoticeData = {
  notices: [
    {
      id: 1,
      title: "Scheduled Network Maintenance",
      description:
        "Network maintenance will be performed on September 15 from 2:00 AM to 5:00 AM. Internet service may be temporarily unavailable during this period.",
      priority: "high",
      createdAt: "September 09, 2026",
      isRead: false,
    },
    {
      id: 2,
      title: "Monthly Bill Payment Reminder",
      description:
        "Please make sure your monthly internet bill is paid before the due date to avoid service interruption.",
      priority: "medium",
      createdAt: "September 05, 2026",
      isRead: false,
    },
    {
      id: 3,
      title: "New Internet Packages Available",
      description:
        "We have introduced new internet packages with improved speed and better pricing. Contact support for more information.",
      priority: "low",
      createdAt: "September 01, 2026",
      isRead: true,
    },
    {
      id: 4,
      title: "Service Policy Update",
      description:
        "Our service policy has been updated. Please review the latest terms and conditions from your customer portal.",
      priority: "low",
      createdAt: "August 25, 2026",
      isRead: true,
    },
  ],
};