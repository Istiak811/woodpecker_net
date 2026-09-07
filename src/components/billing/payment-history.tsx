import type { Payment } from "@/types/billing";
import { Badge } from "@/components/ui/badge";

interface PaymentHistoryProps {
  payments: Payment[];
}

export function PaymentHistory({ payments }: PaymentHistoryProps) {
  return (
    <div className="rounded-xl border bg-card">
      <div className="border-b p-5">
        <h2 className="text-lg font-semibold">Payment History</h2>

        <p className="text-sm text-muted-foreground">
          View your previous payment transactions.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-left">
              <th className="px-5 py-3 font-medium">Invoice</th>

              <th className="px-5 py-3 font-medium">Date</th>

              <th className="px-5 py-3 font-medium">Amount</th>

              <th className="px-5 py-3 font-medium">Method</th>

              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-b last:border-0">
                <td className="px-5 py-4 font-medium">{payment.invoice}</td>

                <td className="px-5 py-4 text-muted-foreground">
                  {payment.date}
                </td>

                <td className="px-5 py-4">৳{payment.amount}</td>

                <td className="px-5 py-4">{payment.paymentMethod}</td>

                <td className="px-5 py-4">
                  <Badge
                    variant={
                      payment.status === "paid"
                        ? "default"
                        : payment.status === "pending"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {payment.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
