import { BillingSummary } from "@/components/billing/billing-summary";
import { MakePayment } from "@/components/billing/make-payment";
import { PaymentHistory } from "@/components/billing/payment-history";
import { billingData } from "@/data/billing";

export default function BillingPage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Billing</h1>

        <p className="text-muted-foreground">
          View your current bill and payment information.
        </p>
      </div>

      <BillingSummary summary={billingData.summary} />

      <MakePayment amount={billingData.summary.currentBill} />
      
      <PaymentHistory payments={billingData.payments} />
    </div>
  );
}
