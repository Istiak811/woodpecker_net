import { DocumentList } from "@/components/documents/document-list";
import { documentData } from "@/data/documents";

export default function DocumentsPage() {
  return (
    <div className="w-full min-w-0 flex-1 space-y-6 p-4 sm:p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Documents
        </h1>

        <p className="text-muted-foreground">
          Manage your profile picture and identification documents.
        </p>
      </div>

      <DocumentList documents={documentData.documents} />
    </div>
  );
}