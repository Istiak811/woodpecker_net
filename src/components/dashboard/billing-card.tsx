import { CreditCard } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { BillingInfo } from "@/types/dashboard";

interface BillingCardProps {
  billing: BillingInfo;
}

export function BillingCard({
  billing,
}: BillingCardProps) {
  const isPaid = billing.status === "paid";

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Billing</CardTitle>

        <CreditCard className="size-5 text-muted-foreground" />
      </CardHeader>

      <CardContent>
        <div className="flex items-center gap-2">
          <span
            className={`size-3 rounded-full ${
              isPaid ? "bg-green-500" : "bg-yellow-500"
            }`}
          />

          <span className="font-semibold">
            {isPaid ? "Paid" : "Payment Pending"}
          </span>
        </div>

        <p className="mt-3 text-2xl font-bold">
          ৳{billing.amount.toLocaleString()}
        </p>

        <p className="text-sm text-muted-foreground">
          Paid till {billing.paidTill}
        </p>
      </CardContent>
    </Card>
  );
}