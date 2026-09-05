"use client";

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";

export function DocumentSection() {
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  const [nidDocument, setNidDocument] = useState<File | null>(null);
  //   const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const isNidImage = nidDocument?.type.startsWith("image/");
  const MAX_FILE_SIZE = 5 * 1024 * 1024;

  const profilePreview = useMemo(() => {
    if (!profilePicture) {
      return;
    }
    return URL.createObjectURL(profilePicture);
  }, [profilePicture]);

  useEffect(() => {
    return () => {
      if (profilePreview) {
        URL.revokeObjectURL(profilePreview);
      }
    };
  }, [profilePreview]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Documents</h2>

        <p className="text-muted-foreground text-sm">
          Upload your profile picture and NID document.
        </p>
      </div>

      {/* Profile Picture */}
      <div className="flex flex-1 flex-col gap-5">
        <label
          className="text-md font-bold
        "
        >
          Profile Picture
        </label>

        <input
          className=""
          type="file"
          accept="image/*"
          onChange={(event) => {
            const file = event.target.files?.[0];

            if (!file) {
              return;
            }

            if (file.size > MAX_FILE_SIZE) {
              alert("Profile picture must be smaller than 5 MB.");
              return;
            }

            setProfilePicture(file);
          }}
        />

        {profilePreview && (
          <div className="mt-4">
            <Image
              src={profilePreview}
              alt="Profile Preview"
              width={128}
              height={128}
              className="h-32 w-32 rounded-full object-cover"
            />
          </div>
        )}

        {profilePicture && (
          <p className="text-sm text-muted-foreground">
            Selected: {profilePicture.name}
          </p>
        )}
      </div>

      {/* NID */}
      <div className="flex flex-1 flex-col gap-5">
        <label className="text-md font-bold">NID Document</label>

        <input
          type="file"
          accept=".pdf,image/*"
          onChange={(event) => {
            const file = event.target.files?.[0];

            if (!file) {
              return;
            }

            if (file.size > MAX_FILE_SIZE) {
              alert("NID file must be smaller than 5 MB.");
              return;
            }

            setNidDocument(file);
          }}
        />

        {nidDocument && (
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">
              Selected: {nidDocument.name}
            </p>

            {isNidImage ? (
              <p className="text-sm font-medium">Image document selected</p>
            ) : (
              <p className="text-sm font-medium">PDF document selected</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
