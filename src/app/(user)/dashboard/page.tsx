import { dashboardData } from "@/data/dashboard";

import { ConnectionCard } from "@/components/dashboard/connection-card";
import { BillingCard } from "@/components/dashboard/billing-card";
import { ComplaintCard } from "@/components/dashboard/complaint-card";
import { NoticeCard } from "@/components/dashboard/notice-card";
import { PaymentHistory } from "@/components/dashboard/payment-history";
import { RecentComplaints } from "@/components/dashboard/recent-complaints";

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-1 text-muted-foreground">
          Welcome back to Woodpecker Net.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ConnectionCard
          connection={dashboardData.connection}
        />

        <BillingCard
          billing={dashboardData.billing}
        />

        <ComplaintCard
          complaints={dashboardData.complaints}
        />
      </div>

      {/* Notice */}
      {dashboardData.notices.length > 0 && (
        <NoticeCard
          notice={dashboardData.notices[0]}
        />
      )}

      {/* Bottom Sections */}
      <div className="grid gap-4 lg:grid-cols-2">
        <PaymentHistory
          payments={dashboardData.payments}
        />

        <RecentComplaints
          complaints={dashboardData.recentComplaints}
        />
      </div>
    </div>
  );
}