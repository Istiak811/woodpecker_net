"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  Eye,
  FileText,
  Image as ImageIcon,
  Pencil,
  Trash2,
} from "lucide-react";

import type { UserDocument } from "@/types/documents";

import { formatFileSize } from "@/lib/utils/format-file-size";

interface DocumentListProps {
  documents: UserDocument[];
}

export function DocumentList({ documents }: DocumentListProps) {
  const [documentList, setDocumentList] = useState<UserDocument[]>(documents);

  const [selectedDocument, setSelectedDocument] = useState<UserDocument | null>(
    null,
  );

  const handleRemove = (documentId: number) => {
    setDocumentList((currentDocuments) =>
      currentDocuments.filter((document) => document.id !== documentId),
    );

    if (selectedDocument?.id === documentId) {
      setSelectedDocument(null);
    }
  };
  const profileInputRef = useRef<HTMLInputElement>(null);
  const nidInputRef = useRef<HTMLInputElement>(null);

  const MAX_FILE_SIZE = 5 * 1024 * 1024;
  const [changingDocument, setChangingDocument] = useState<UserDocument | null>(
    null,
  );
  const handleChange = (document: UserDocument) => {
    setChangingDocument(document);

    if (document.type === "profile-picture") {
      profileInputRef.current?.click();
      return;
    }

    nidInputRef.current?.click();
  };

  const replaceDocument = (documentId: number, file: File) => {
    setDocumentList((currentDocuments) =>
      currentDocuments.map((document) =>
        document.id === documentId
          ? {
              ...document,
              fileName: file.name,
              fileSize: file.size,
              uploadedAt: "September 11, 2026",
              fileUrl: URL.createObjectURL(file),
            }
          : document,
      ),
    );
  };

  return (
    <div className="space-y-4">
      <input
        ref={profileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(event) => {
          const file = event.target.files?.[0];

          if (!file) {
            return;
          }

          if (file.size > MAX_FILE_SIZE) {
            alert("Profile picture must be smaller than 5 MB.");
            event.target.value = "";
            return;
          }

          if (!file.type.startsWith("image/")) {
            alert("Please select an image file.");
            event.target.value = "";
            return;
          }

          if (changingDocument) {
            replaceDocument(changingDocument.id, file);
          }

          setChangingDocument(null);
          event.target.value = "";
        }}
      />

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
            event.target.value = "";
            return;
          }

          const isValidNid =
            file.type === "application/pdf" || file.type.startsWith("image/");

          if (!isValidNid) {
            alert("NID must be a PDF or image file.");
            event.target.value = "";
            return;
          }

          if (changingDocument) {
            replaceDocument(changingDocument.id, file);
          }

          setChangingDocument(null);
          event.target.value = "";
        }}
      />
      {/* Document List */}
      {documentList.map((document) => {
        const isProfilePicture = document.type === "profile-picture";

        return (
          <div key={document.id} className="rounded-xl border bg-card p-5">
            <div className="flex items-start gap-4">
              {/* Document Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                {isProfilePicture ? (
                  <ImageIcon className="h-5 w-5" />
                ) : (
                  <FileText className="h-5 w-5" />
                )}
              </div>

              {/* Document Information */}
              <div className="min-w-0 flex-1">
                <h3 className="truncate font-medium">{document.fileName}</h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {isProfilePicture ? "Profile Picture" : "National ID"}
                </p>

                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span>Size: {formatFileSize(document.fileSize)}</span>

                  <span>Uploaded: {document.uploadedAt}</span>
                </div>
              </div>
            </div>

            {/* Document Actions */}
            <div className="mt-4 flex flex-wrap gap-2">
              {/* View */}
              <button
                type="button"
                onClick={() => setSelectedDocument(document)}
                className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium"
              >
                <Eye className="h-4 w-4" />
                View
              </button>

              {/* Change */}
              <button
                type="button"
                onClick={() => handleChange(document)}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
              >
                <Pencil className="h-4 w-4" />
                Change
              </button>

              {/* Remove */}
              <button
                type="button"
                onClick={() => handleRemove(document.id)}
                className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium text-destructive"
              >
                <Trash2 className="h-4 w-4" />
                Remove
              </button>
            </div>
          </div>
        );
      })}

      {/* Empty State */}
      {documentList.length === 0 && (
        <div className="rounded-xl border bg-card p-8 text-center">
          <FileText className="mx-auto h-8 w-8 text-muted-foreground" />

          <h2 className="mt-3 font-semibold">No documents</h2>

          <p className="mt-1 text-sm text-muted-foreground">
            You have not uploaded any documents yet.
          </p>
        </div>
      )}

      {/* Document Preview */}
      {selectedDocument && (
        <div className="rounded-xl border bg-card p-5">
          {/* Preview Header */}
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <h2 className="font-semibold">Document Preview</h2>

              <p className="truncate text-sm text-muted-foreground">
                {selectedDocument.fileName}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSelectedDocument(null)}
              className="shrink-0 rounded-md border px-3 py-2 text-sm"
            >
              Close
            </button>
          </div>

          {/* Image Preview */}
          {selectedDocument.fileUrl &&
            /\.(jpg|jpeg|png|webp)$/i.test(selectedDocument.fileName) && (
              <div className="mt-4 flex justify-center rounded-lg bg-muted p-4">
                <Image
                  src={selectedDocument.fileUrl}
                  alt={selectedDocument.fileName}
                  width={500}
                  height={500}
                  className="max-h-[500px] w-auto rounded-lg object-contain"
                />
              </div>
            )}

          {/* PDF Preview */}
          {selectedDocument.fileUrl &&
            /\.pdf$/i.test(selectedDocument.fileName) && (
              <div className="mt-4 overflow-hidden rounded-lg border">
                <iframe
                  src={selectedDocument.fileUrl}
                  title={selectedDocument.fileName}
                  className="h-[600px] w-full"
                />
              </div>
            )}

          {/* No Preview */}
          {!selectedDocument.fileUrl && (
            <div className="mt-4 rounded-lg bg-muted p-6 text-center text-sm text-muted-foreground">
              This document does not have a preview available.
            </div>
          )}

          {/* Unsupported File Type */}
          {selectedDocument.fileUrl &&
            !/\.(jpg|jpeg|png|webp|pdf)$/i.test(selectedDocument.fileName) && (
              <div className="mt-4 rounded-lg bg-muted p-6 text-center text-sm text-muted-foreground">
                Preview is not available for this file type.
              </div>
            )}
        </div>
      )}
    </div>
  );
}
