import { Router } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { TechnicalInfo } from "@/types/profile";

interface TechnicalInfoProps {
  technical: TechnicalInfo;
}

export function TechnicalInfoCard({
  technical,
}: TechnicalInfoProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Router className="size-5" />
          Technical Details
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <p className="text-sm text-muted-foreground">
              Router Model
            </p>

            <p className="font-medium">
              {technical.routerModel}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Router MAC
            </p>

            <p className="font-medium">
              {technical.routerMac}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              IP Address
            </p>

            <p className="font-medium">
              {technical.ipAddress}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              ONU Serial
            </p>

            <p className="font-medium">
              {technical.onuSerial}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Connection Mode
            </p>

            <p className="font-medium">
              {technical.connectionMode}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}