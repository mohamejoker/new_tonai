"use client";

import { AdminStats } from "@/components/admin/admin-stats";
import { AdminCharts } from "@/components/admin/admin-charts";
import { RecentOrders } from "@/components/admin/recent-orders";
import { AdminNotifications } from "@/components/admin/admin-notifications";
import { useLanguage } from "@/hooks/use-language";

export default function AdminDashboard() {
  const { translation } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {translation.dashboard || "Dashboard"}
        </h1>
      </div>

      <AdminStats />
      <AdminCharts />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentOrders />
        <AdminNotifications />
      </div>
    </div>
  );
}
