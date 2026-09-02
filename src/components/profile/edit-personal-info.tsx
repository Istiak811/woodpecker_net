"use client";
import {
  PersonalInfoFormData,
  personalInfoSchema,
} from "@/lib/validations/profile";
import { PersonalInfo } from "@/types/profile";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface EditPersonalInfoProps {
  personal: PersonalInfo;
  onCancel: () => void;
  onSave: (data: PersonalInfoFormData) => void;
}

export function EditPersonalInfo({
  personal,
  onCancel,
  onSave,
}: EditPersonalInfoProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoFormData>({
    resolver: zodResolver(personalInfoSchema),

    defaultValues: {
      fullName: personal.fullName,
      email: personal.email,
      phone: personal.phone,
      dateOfBirth: personal.dateOfBirth,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSave)} className="space-y-5">
      {/* Full Name */}
      <div className="space-y-2">
        <label htmlFor="fullName" className="text-sm font-medium">
          Full Name
        </label>

        <input
          id="fullName"
          {...register("fullName")}
          className="border-input bg-background w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2"
        />

        {errors.fullName && (
          <p className="text-sm text-destructive">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>

        <input
          id="email"
          type="email"
          {...register("email")}
          className="border-input bg-background w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2"
        />

        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium">
          Phone
        </label>

        <input
          id="phone"
          {...register("phone")}
          className="border-input bg-background w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2"
        />

        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      {/* Date of Birth */}
      <div className="space-y-2">
        <label htmlFor="dateOfBirth" className="text-sm font-medium">
          Date of Birth
        </label>

        <input
          id="dateOfBirth"
          type="date"
          {...register("dateOfBirth")}
          className="border-input bg-background w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2"
        />

        {errors.dateOfBirth && (
          <p className="text-sm text-destructive">
            {errors.dateOfBirth.message}
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md border px-4 py-2 text-sm font-medium"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
