"use client";

import Image from "next/image";
import { useState, useEffect, useMemo, useRef } from "react";

export function DocumentSection() {
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  const [nidDocument, setNidDocument] = useState<File | null>(null);
  //   const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const isNidImage = nidDocument?.type.startsWith("image/");
  const MAX_FILE_SIZE = 5 * 1024 * 1024;

  const profileInputRef = useRef<HTMLInputElement>(null);
  const nidInputRef = useRef<HTMLInputElement>(null);

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
      <div className="space-x-6">
        <label
          className="text-md font-bold
        "
        >
          Profile Picture
        </label>

        <input
          ref={profileInputRef}
          className="hidden "
          type="file"
          accept="image/*"
          onChange={(event) => {
            const file = event.target.files?.[0];

            if (!file) {
              return;
            }

            if (file.size > MAX_FILE_SIZE) {
              alert("Profile picture must be smaller than 5 MB.");
              event.target.value = ""
              return;
            }

            setProfilePicture(file);
          }}
        />
        <button
          type="button"
          onClick={() => profileInputRef.current?.click()}
          className="w-fit rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          {profilePicture ? "Change Photo" : "Upload Photo"}
        </button>

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
          // <p className="text-sm text-muted-foreground">
          //   Selected: {profilePicture.name}
          // </p>
          <button
            type="button"
            onClick={() => {
              setProfilePicture(null);

              if (profileInputRef.current) {
                profileInputRef.current.value = "";
              }
            }}
            className="w-fit rounded-md border px-4 py-2 text-sm font-medium"
          >
            Remove
          </button>
        )}
      </div>

      {/* NID */}
      <div className="space-x-5">
        <label className="text-md font-bold">NID Document</label>

        <input
          ref={nidInputRef}
          type="file"
          accept=".pdf,image/*"
          className="hidden"
          onChange={(event) => {
            const file = event.target.files?.[0];

            if (!file) {
              return;
            }

            if (file.size > MAX_FILE_SIZE) {
              alert("NID file must be smaller than 5 MB.");
              event.target.value = ""
              return;
            }

            setNidDocument(file);
          }}
        />
        <button
          type="button"
          onClick={() => nidInputRef.current?.click()}
          className="w-fit rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          {nidDocument ? "Change Document" : "Upload NID"}
        </button>

        {nidDocument && (
          <div className="space-x-2 flex items-center">
            {/* <p className="text-muted-foreground text-sm">
              Selected: {nidDocument.name}
            </p> */}
            <button
              type="button"
              onClick={() => {
                setNidDocument(null);

                if (nidInputRef.current) {
                  nidInputRef.current.value = "";
                }
              }}
              className="w-fit rounded-md border px-4 py-2 text-sm font-medium"
            >
              Remove
            </button>

            {isNidImage ? (
              <p className="text-sm font-medium ">Image document selected</p>
            ) : (
              <p className="text-sm font-medium">PDF document selected</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
