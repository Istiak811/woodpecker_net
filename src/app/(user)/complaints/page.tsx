"use client"

import { AddComplaint } from "@/components/complaints/add-complaint";
import { ComplaintHistory } from "@/components/complaints/complaint-history";
import { complaintData } from "@/data/complaints";
import { ComplaintFormData } from "@/lib/validations/complaint";
import { Complaint } from "@/types/complaint";
import { useState } from "react";

export default function ComplaintsPage() {
  const [complaints, setComplaints] = useState<Complaint[]>(
    complaintData.complaints,
  );

  const handleSubmitComplaint = (data: ComplaintFormData) => {
    const newComplaint: Complaint = {
      id: Date.now(),
      subject: data.subject,
      category: data.category,
      description: data.description,
      status: "open",
      priority: data.priority,
      createdAt: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }),
      updatedAt: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }),
    };

    setComplaints((currentComplaints) => [
      newComplaint,
      ...currentComplaints,
    ]);
  };

  return (
    <div className="w-full min-w-0 flex-1 space-y-6 p-4 sm:p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Complaints
        </h1>

        <p className="text-muted-foreground">
          Submit and track your internet service complaints.
        </p>
      </div>

      <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]">
        <div className="min-w-0">
          <ComplaintHistory complaints={complaints} />
        </div>

        <div className="min-w-0">
          <AddComplaint
            onSubmitComplaint={handleSubmitComplaint}
          />
        </div>
      </div>
    </div>
  );
}