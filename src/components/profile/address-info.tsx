import { MapPin } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { AddressInfo } from "@/types/profile";

interface AddressInfoProps {
  address: AddressInfo;
}

export function AddressInfoCard({
  address,
}: AddressInfoProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="size-5" />
          Address Details
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <p className="text-sm text-muted-foreground">
              Address
            </p>

            <p className="font-medium">
              {address.address}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Area
            </p>

            <p className="font-medium">
              {address.area}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              City
            </p>

            <p className="font-medium">
              {address.city}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Postal Code
            </p>

            <p className="font-medium">
              {address.postalCode}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}