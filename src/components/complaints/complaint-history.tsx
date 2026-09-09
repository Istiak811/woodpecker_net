"use client";

import { useState } from "react";

import type { Complaint } from "@/types/complaint";
import { Badge } from "@/components/ui/badge";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ComplaintHistoryProps {
  complaints: Complaint[];
}

export function ComplaintHistory({
  complaints,
}: ComplaintHistoryProps) {
  const [selectedComplaint, setSelectedComplaint] =
    useState<Complaint | null>(null);

  return (
    <div className="min-w-0 overflow-hidden rounded-xl border bg-card">
      <div className="border-b p-4 sm:p-5">
        <h2 className="text-lg font-semibold">
          Complaint History
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          View your submitted complaints and their current status.
        </p>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="min-w-[800px] w-full text-sm">
          <thead>
            <tr className="border-b text-left">
              <th className="px-4 py-3 font-medium sm:px-5">
                Subject
              </th>

              <th className="px-4 py-3 font-medium sm:px-5">
                Category
              </th>

              <th className="px-4 py-3 font-medium sm:px-5">
                Priority
              </th>

              <th className="px-4 py-3 font-medium sm:px-5">
                Date
              </th>

              <th className="px-4 py-3 font-medium sm:px-5">
                Status
              </th>

              <th className="px-4 py-3 text-right font-medium sm:px-5">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {complaints.map((complaint) => (
              <tr
                key={complaint.id}
                className="border-b last:border-0"
              >
                <td className="px-4 py-4 sm:px-5">
                  <p className="font-medium">
                    {complaint.subject}
                  </p>

                  <p className="mt-1 max-w-xs truncate text-xs text-muted-foreground">
                    {complaint.description}
                  </p>
                </td>

                <td className="px-4 py-4 capitalize sm:px-5">
                  {complaint.category}
                </td>

                <td className="px-4 py-4 sm:px-5">
                  <Badge
                    variant={
                      complaint.priority === "high"
                        ? "destructive"
                        : complaint.priority === "medium"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {complaint.priority}
                  </Badge>
                </td>

                <td className="whitespace-nowrap px-4 py-4 text-muted-foreground sm:px-5">
                  {complaint.createdAt}
                </td>

                <td className="px-4 py-4 sm:px-5">
                  <Badge
                    variant={
                      complaint.status === "open"
                        ? "destructive"
                        : complaint.status === "in-progress"
                          ? "secondary"
                          : "default"
                    }
                  >
                    {complaint.status}
                  </Badge>
                </td>

                <td className="px-4 py-4 text-right sm:px-5">
                  <button
                    type="button"
                    className="font-medium text-primary hover:underline"
                    onClick={() =>
                      setSelectedComplaint(complaint)
                    }
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Dialog stays outside overflow container */}
      <Dialog
        open={selectedComplaint !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedComplaint(null);
          }
        }}
      >
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>
              Complaint Details
            </DialogTitle>

            <DialogDescription>
              View the complete information about your complaint.
            </DialogDescription>
          </DialogHeader>

          {selectedComplaint && (
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">
                  Subject
                </p>

                <p className="mt-1 font-medium">
                  {selectedComplaint.subject}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Category
                  </p>

                  <p className="mt-1 font-medium capitalize">
                    {selectedComplaint.category}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Priority
                  </p>

                  <p className="mt-1 font-medium capitalize">
                    {selectedComplaint.priority}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Status
                  </p>

                  <p className="mt-1 font-medium capitalize">
                    {selectedComplaint.status}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Created
                  </p>

                  <p className="mt-1 font-medium">
                    {selectedComplaint.createdAt}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Description
                </p>

                <p className="mt-1 text-sm leading-6">
                  {selectedComplaint.description}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Last Updated
                </p>

                <p className="mt-1 text-sm">
                  {selectedComplaint.updatedAt}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}