"use client";

import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminHeader } from "@/components/admin/admin-header";
import { useLanguage } from "@/hooks/use-language";
import { motion } from "framer-motion";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isRTL } = useLanguage();

  return (
    <div
      className={`min-h-screen bg-gray-100 dark:bg-gray-900 ${isRTL ? "rtl" : "ltr"}`}
    >
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 flex flex-col">
          <AdminHeader />
          <motion.main
            className="flex-1 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.main>
        </div>
      </div>
    </div>
  );
}
