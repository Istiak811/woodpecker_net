import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { Payment } from "@/types/dashboard";

interface PaymentHistoryProps {
  payments: Payment[];
}

export function PaymentHistory({
  payments,
}: PaymentHistoryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Payments</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {payments.map((payment) => (
            <div
              key={payment.id}
              className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0"
            >
              <div>
                <p className="font-medium">
                  {payment.date}
                </p>

                <p className="text-xs text-muted-foreground">
                  {payment.invoice}
                </p>
              </div>

              <div className="text-right">
                <p className="font-semibold">
                  ৳{payment.amount.toLocaleString()}
                </p>

                <p className="text-xs text-green-600">
                  {payment.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}