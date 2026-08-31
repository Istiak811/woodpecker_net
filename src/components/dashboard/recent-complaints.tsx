import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { Complaint } from "@/types/dashboard";

interface RecentComplaintsProps {
  complaints: Complaint[];
}

export function RecentComplaints({
  complaints,
}: RecentComplaintsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Complaints</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {complaints.map((complaint) => (
            <div
              key={complaint.id}
              className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0"
            >
              <div>
                <p className="font-medium">
                  {complaint.title}
                </p>

                <p className="text-xs text-muted-foreground">
                  {complaint.date}
                </p>
              </div>

              <span className="text-xs font-medium capitalize">
                {complaint.status}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}