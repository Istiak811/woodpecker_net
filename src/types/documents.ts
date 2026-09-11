export type DocumentType =
  | "profile-picture"
  | "nid";

export interface UserDocument {
  id: number;
  type: DocumentType;
  fileName: string;
  fileSize: number;
  fileUrl?: string;
  uploadedAt: string;
}

export interface DocumentData {
  documents: UserDocument[];
}