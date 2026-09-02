import { PersonalInfo } from "@/types/profile";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { User } from "lucide-react";

interface PersonalInfoProps {
  personal: PersonalInfo;
}

export function PersonalInfoCard({ personal }: PersonalInfoProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <User />
          Personal Information
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <p className="text-sm text-muted-foreground">Full Name</p>

            <p className="font-medium">{personal.fullName}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Email</p>

            <p className="font-medium">{personal.email}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Phone</p>

            <p className="font-medium">{personal.phone}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Date of Birth</p>

            <p className="font-medium">{personal.dateOfBirth}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
