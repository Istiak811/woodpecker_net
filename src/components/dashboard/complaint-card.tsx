import { MessageSquareWarning } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { ComplaintSummary } from "@/types/dashboard";

interface ComplaintCardProps {
  complaints: ComplaintSummary;
}

export function ComplaintCard({
  complaints,
}: ComplaintCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Complaints</CardTitle>

        <MessageSquareWarning className="size-5 text-muted-foreground" />
      </CardHeader>

      <CardContent>
        <p className="text-3xl font-bold">
          {complaints.openCount}
        </p>

        <p className="text-sm text-muted-foreground">
          Open complaints
        </p>
      </CardContent>
    </Card>
  );
}