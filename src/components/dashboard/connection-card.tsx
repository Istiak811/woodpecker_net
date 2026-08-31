import { Wifi } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { ConnectionInfo } from "@/types/dashboard";

interface ConnectionCardProps {
  connection: ConnectionInfo;
}

export function ConnectionCard({
  connection,
}: ConnectionCardProps) {
  const isConnected = connection.status === "connected";

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Connection</CardTitle>

        <Wifi className="size-5 text-muted-foreground" />
      </CardHeader>

      <CardContent>
        <div className="flex items-center gap-2">
          <span
            className={`size-3 rounded-full ${
              isConnected ? "bg-green-500" : "bg-red-500"
            }`}
          />

          <span className="font-semibold">
            {isConnected ? "Connected" : "Disconnected"}
          </span>
        </div>

        <p className="mt-3 text-2xl font-bold">
          {connection.speed}
        </p>

        <p className="text-sm text-muted-foreground">
          {connection.packageName}
        </p>
      </CardContent>
    </Card>
  );
}