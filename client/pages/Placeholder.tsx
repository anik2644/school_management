import DashboardLayout from "@/components/DashboardLayout";
import { useLocation } from "react-router-dom";
import { AlertCircle } from "lucide-react";

export default function Placeholder() {
  const location = useLocation();
  const pageName = location.pathname.split("/").pop()?.replace(/-/g, " ") || "page";

  return (
    <DashboardLayout>
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center max-w-md">
          <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {pageName.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
          </h1>
          <p className="text-gray-600 mb-6">
            This page is coming soon! Continue exploring or prompt to add more features.
          </p>
          <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
            <strong>Current path:</strong> {location.pathname}
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
