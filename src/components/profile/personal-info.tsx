"use client";

import { useState } from "react";
import { Pencil, User } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { PersonalInfo } from "@/types/profile";

import { EditPersonalInfo } from "./edit-personal-info";

import type { PersonalInfoFormData } from "@/lib/validations/profile";

interface PersonalInfoProps {
  personal: PersonalInfo;
}

export function PersonalInfoCard({ personal }: PersonalInfoProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (data: PersonalInfoFormData) => {
    console.log("Updated profile:", data);

    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Edit Personal Information</CardTitle>
        </CardHeader>

        <CardContent>
          <EditPersonalInfo
            personal={personal}
            onCancel={() => setIsEditing(false)}
            onSave={handleSave}
          />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <User className="size-5" />
          Personal Information
        </CardTitle>

        <button
          type="button"
          onClick={() => setIsEditing(true)}
          className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted"
        >
          <Pencil className="size-4" />
          Edit
        </button>
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
