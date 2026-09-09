"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  complaintSchema,
  type ComplaintFormData,
} from "@/lib/validations/complaint";

interface AddComplaintProps {
  onSubmitComplaint: (data: ComplaintFormData) => void;
}

export function AddComplaint({ onSubmitComplaint }: AddComplaintProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ComplaintFormData>({
    resolver: zodResolver(complaintSchema),
    defaultValues: {
      subject: "",
      category: "connection",
      priority: "medium",
      description: "",
    },
  });

  const handleComplaintSubmit = (data: ComplaintFormData) => {
    onSubmitComplaint(data);
    setSubmitted(true);
    reset();
  };

  return (
    <div className="w-full min-w-0 rounded-xl border bg-card p-4 sm:p-5">
      <div className="mb-5">
        <h2 className="text-lg font-semibold">Add Complaint</h2>

        <p className="text-sm text-muted-foreground">
          Submit a complaint about your internet service.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(handleComplaintSubmit)}
        className="min-w-0 space-y-4"
      >
        {/* Subject */}
        <div>
          <label htmlFor="subject" className="text-sm font-medium">
            Subject
          </label>

          <input
            id="subject"
            type="text"
            {...register("subject")}
            className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm"
            placeholder="Enter complaint subject"
          />

          {errors.subject && (
            <p className="mt-1 text-sm text-destructive">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="text-sm font-medium">
            Category
          </label>

          <select
            id="category"
            {...register("category")}
            className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm"
          >
            <option value="connection">Connection</option>

            <option value="speed">Internet Speed</option>

            <option value="billing">Billing</option>

            <option value="technical">Technical</option>

            <option value="other">Other</option>
          </select>
        </div>

        {/* Priority */}
        <div>
          <label htmlFor="priority" className="text-sm font-medium">
            Priority
          </label>

          <select
            id="priority"
            {...register("priority")}
            className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="text-sm font-medium">
            Description
          </label>

          <textarea
            id="description"
            rows={5}
            {...register("description")}
            className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm"
            placeholder="Describe your problem..."
          />

          {errors.description && (
            <p className="mt-1 text-sm text-destructive">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => {
              reset();
              setSubmitted(false);
            }}
            className="flex-1 rounded-md border px-4 py-2 text-sm font-medium"
          >
            Clear
          </button>

          <button
            type="submit"
            className="flex-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Submit Complaint
          </button>
        </div>
      </form>

      {submitted && (
        <div className="mt-4 rounded-lg border p-4">
          <p className="font-medium">Complaint submitted successfully.</p>

          <p className="mt-1 text-sm text-muted-foreground">
            Your complaint has been recorded and will be reviewed by our support
            team.
          </p>
        </div>
      )}
    </div>
  );
}
