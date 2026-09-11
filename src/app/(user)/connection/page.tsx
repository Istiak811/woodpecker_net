import { ConnectionStatus } from "@/components/connection/connection-status";
import { TechnicalDetails } from "@/components/connection/technical-details";
import { connectionData } from "@/data/connection";

export default function ConnectionPage() {
  return (
    <div className="w-full min-w-0 flex-1 space-y-6 p-4 sm:p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Connection
        </h1>

        <p className="text-muted-foreground">
          View your internet connection and technical details.
        </p>
      </div>

      <ConnectionStatus
        connection={connectionData.connection}
      />

      <TechnicalDetails
        technical={connectionData.technical}
      />
    </div>
  );
}