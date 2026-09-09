import type { ComplaintData } from "@/types/complaint";

export const complaintData: ComplaintData = {
  complaints: [
    {
      id: 1,
      subject: "Internet connection dropping frequently",
      category: "connection",
      description:
        "The internet connection disconnects several times throughout the day.",
      status: "open",
      priority: "high",
      createdAt: "September 05, 2026",
      updatedAt: "September 05, 2026",
    },
    {
      id: 2,
      subject: "Internet speed is very slow",
      category: "speed",
      description:
        "Internet speed becomes significantly slower during the evening.",
      status: "in-progress",
      priority: "medium",
      createdAt: "September 02, 2026",
      updatedAt: "September 04, 2026",
    },
    {
      id: 3,
      subject: "Router needs technical inspection",
      category: "technical",
      description:
        "The router is frequently restarting and may require technical support.",
      status: "resolved",
      priority: "medium",
      createdAt: "August 25, 2026",
      updatedAt: "August 27, 2026",
    },
    {
      id: 4,
      subject: "Incorrect billing amount",
      category: "billing",
      description:
        "The bill amount appears to be different from the expected monthly charge.",
      status: "closed",
      priority: "low",
      createdAt: "August 15, 2026",
      updatedAt: "August 17, 2026",
    },
  ],
};