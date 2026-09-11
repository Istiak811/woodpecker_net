import { NoticeList } from "@/components/notices/notice-list";
import { noticeData } from "@/data/notices";

export default function NoticesPage() {
  return (
    <div className="w-full min-w-0 flex-1 space-y-6 p-4 sm:p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Notices
        </h1>

        <p className="text-muted-foreground">
          View important announcements and service updates.
        </p>
      </div>

      <NoticeList notices={noticeData.notices} />
    </div>
  );
}