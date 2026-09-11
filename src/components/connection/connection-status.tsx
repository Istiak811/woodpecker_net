import type { ConnectionInfo } from "@/types/connection";
import { Badge } from "@/components/ui/badge";

interface ConnectionStatusProps {
  connection: ConnectionInfo;
}

export function ConnectionStatus({
  connection,
}: ConnectionStatusProps) {
  const statusLabel = {
    connected: "Connected",
    disconnected: "Disconnected",
    suspended: "Suspended",
  }[connection.status];

  const statusVariant =
    connection.status === "connected"
      ? "default"
      : connection.status === "suspended"
        ? "secondary"
        : "destructive";

  return (
    <div className="rounded-xl border bg-card p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">
            Connection Status
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Current status of your internet connection.
          </p>
        </div>

        <Badge variant={statusVariant}>
          {statusLabel}
        </Badge>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-sm text-muted-foreground">
            Package
          </p>

          <p className="mt-1 font-medium">
            {connection.packageName}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Speed
          </p>

          <p className="mt-1 font-medium">
            {connection.speed}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Connection Type
          </p>

          <p className="mt-1 font-medium">
            {connection.connectionType}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Connected Since
          </p>

          <p className="mt-1 font-medium">
            {connection.connectionDate}
          </p>
        </div>
      </div>
    </div>
  );
}