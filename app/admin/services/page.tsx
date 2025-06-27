"use client";

import { useState } from "react";
import { ServicesTable } from "@/components/admin/services-table";
import { AddServiceModal } from "@/components/admin/add-service-modal";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function AdminServicesPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { translation } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {translation.servicesManagement || "Services Management"}
        </h1>
        <Button onClick={() => setIsAddModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          {translation.addService || "Add Service"}
        </Button>
      </div>

      <ServicesTable />

      <AddServiceModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </div>
  );
}
