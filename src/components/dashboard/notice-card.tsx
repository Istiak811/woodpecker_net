import { Bell } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { Notice } from "@/types/dashboard";

interface NoticeCardProps {
  notice: Notice;
}

export function NoticeCard({ notice }: NoticeCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-3">
        <Bell className="size-5 text-muted-foreground" />

        <CardTitle>{notice.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm">
          {notice.description}
        </p>

        <p className="mt-3 text-xs text-muted-foreground">
          {notice.date}
        </p>
      </CardContent>
    </Card>
  );
}