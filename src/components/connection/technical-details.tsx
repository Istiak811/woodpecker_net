import type { TechnicalInfo } from "@/types/connection";

interface TechnicalDetailsProps {
  technical: TechnicalInfo;
}

export function TechnicalDetails({
  technical,
}: TechnicalDetailsProps) {
  return (
    <div className="rounded-xl border bg-card p-5">
      <div className="mb-5">
        <h2 className="text-lg font-semibold">
          Technical Details
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Technical information about your internet connection.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-sm text-muted-foreground">
            Router Model
          </p>

          <p className="mt-1 font-medium">
            {technical.routerModel}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Router MAC Address
          </p>

          <p className="mt-1 break-all font-medium">
            {technical.routerMac}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            IP Address
          </p>

          <p className="mt-1 font-medium">
            {technical.ipAddress}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            ONU Serial
          </p>

          <p className="mt-1 break-all font-medium">
            {technical.onuSerial}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Connection Mode
          </p>

          <p className="mt-1 font-medium">
            {technical.connectionMode}
          </p>
        </div>
      </div>
    </div>
  );
}