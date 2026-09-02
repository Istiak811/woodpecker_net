import { Wifi } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { ConnectionInfo } from "@/types/profile";

interface ConnectionInfoProps {
  connection: ConnectionInfo;
}

export function ConnectionInfoCard({
  connection,
}: ConnectionInfoProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wifi className="size-5" />
          Connection Information
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-sm text-muted-foreground">
              Customer ID
            </p>

            <p className="font-medium">
              {connection.customerId}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Package
            </p>

            <p className="font-medium">
              {connection.packageName}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Speed
            </p>

            <p className="font-medium">
              {connection.speed}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Connection Type
            </p>

            <p className="font-medium">
              {connection.connectionType}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Connection Date
            </p>

            <p className="font-medium">
              {connection.connectionDate}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Status
            </p>

            <p className="font-medium capitalize text-green-600">
              {connection.status}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}