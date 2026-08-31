import type { DashboardData } from "@/types/dashboard";

export const dashboardData: DashboardData = {
  connection: {
    status: "connected",
    packageName: "Premium 20 Mbps",
    speed: "20 Mbps",
  },

  billing: {
    amount: 1000,
    paidTill: "August 31, 2026",
    status: "paid",
  },

  complaints: {
    openCount: 2,
  },

  notices: [
    {
      id: 1,
      title: "Scheduled Maintenance",
      description:
        "Network maintenance will be performed on September 2 from 2:00 AM to 4:00 AM.",
      date: "August 28, 2026",
    },
  ],

  payments: [
    {
      id: 1,
      date: "August 01, 2026",
      amount: 1000,
      status: "paid",
      invoice: "INV-2026-08-001",
    },
    {
      id: 2,
      date: "July 01, 2026",
      amount: 1000,
      status: "paid",
      invoice: "INV-2026-07-001",
    },
    {
      id: 3,
      date: "June 01, 2026",
      amount: 1000,
      status: "paid",
      invoice: "INV-2026-06-001",
    },
  ],

  recentComplaints: [
    {
      id: 1,
      title: "Slow Internet",
      date: "August 25, 2026",
      status: "open",
    },
    {
      id: 2,
      title: "Router Issue",
      date: "August 18, 2026",
      status: "resolved",
    },
  ],
};