import type { BillingSummary } from "@/types/billing";

interface BillingSummaryProps {
  summary: BillingSummary;
}

export function BillingSummary({ summary }: BillingSummaryProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-xl border bg-card p-5">
        <p className="text-sm text-muted-foreground">
          Current Bill
        </p>

        <h2 className="mt-2 text-2xl font-bold">
          ৳{summary.currentBill}
        </h2>
      </div>

      <div className="rounded-xl border bg-card p-5">
        <p className="text-sm text-muted-foreground">
          Due Date
        </p>

        <h2 className="mt-2 text-lg font-semibold">
          {summary.dueDate}
        </h2>
      </div>

      <div className="rounded-xl border bg-card p-5">
        <p className="text-sm text-muted-foreground">
          Paid Till
        </p>

        <h2 className="mt-2 text-lg font-semibold">
          {summary.paidTill}
        </h2>
      </div>

      <div className="rounded-xl border bg-card p-5">
        <p className="text-sm text-muted-foreground">
          Payment Status
        </p>

        <h2 className="mt-2 text-lg font-semibold capitalize">
          {summary.status}
        </h2>
      </div>
    </div>
  );
}