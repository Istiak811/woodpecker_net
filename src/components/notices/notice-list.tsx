"use client";

import type { Notice } from "@/types/notice";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface NoticeListProps {
  notices: Notice[];
}

export function NoticeList({ notices }: NoticeListProps) {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [noticeList, setNoticeList] = useState<Notice[]>(notices);
  return (
    <div className="space-y-4">
      {noticeList.map((notice) => (
        <button
          type="button"
          key={notice.id}
          onClick={() => {
            setSelectedNotice(notice);

            if (!notice.isRead) {
              setNoticeList((currentNotices) =>
                currentNotices.map((currentNotice) =>
                  currentNotice.id === notice.id
                    ? { ...currentNotice, isRead: true }
                    : currentNotice,
                ),
              );
            }
          }}
          className="w-full rounded-xl border bg-card p-5 text-left transition hover:bg-muted/50"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                {!notice.isRead && (
                  <span className="h-2 w-2 rounded-full bg-primary" />
                )}
                <h2 className="font-semibold">{notice.title}</h2>

                <Badge
                  variant={
                    notice.priority === "high"
                      ? "destructive"
                      : notice.priority === "medium"
                        ? "secondary"
                        : "outline"
                  }
                >
                  {notice.priority}
                </Badge>
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                {notice.description}
              </p>
            </div>

            <span className="shrink-0 text-xs text-muted-foreground">
              {notice.createdAt}
            </span>
          </div>
        </button>
      ))}
      <Dialog
        open={selectedNotice !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedNotice(null);
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Notice Details</DialogTitle>

            <DialogDescription>
              View the complete information about this notice.
            </DialogDescription>
          </DialogHeader>

          {selectedNotice && (
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Title</p>

                <p className="font-medium">{selectedNotice.title}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground">Priority</p>

                  <Badge
                    variant={
                      selectedNotice.priority === "high"
                        ? "destructive"
                        : selectedNotice.priority === "medium"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {selectedNotice.priority}
                  </Badge>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Date</p>

                  <p className="font-medium">{selectedNotice.createdAt}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Status</p>

                  <p className="font-medium">
                    {selectedNotice.isRead ? "Read" : "Unread"}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Description</p>

                <p className="mt-1 text-sm leading-6">
                  {selectedNotice.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
