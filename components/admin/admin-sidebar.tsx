"use client";

import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Package,
  ShoppingCart,
  BarChart3,
  Settings,
  CreditCard,
  Bot,
  Bell,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Brain,
} from "lucide-react";

const sidebarItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    labelAr: "لوحة التحكم",
    href: "/admin",
    notifications: 0,
  },
  {
    id: "users",
    icon: Users,
    label: "Users",
    labelAr: "المستخدمون",
    href: "/admin/users",
    notifications: 3,
  },
  {
    id: "services",
    icon: Package,
    label: "Services",
    labelAr: "الخدمات",
    href: "/admin/services",
    notifications: 0,
  },
  {
    id: "orders",
    icon: ShoppingCart,
    label: "Orders",
    labelAr: "الطلبات",
    href: "/admin/orders",
    notifications: 7,
  },
  {
    id: "ai-agents",
    icon: Bot,
    label: "AI Agents",
    labelAr: "الوكلاء الذكيون",
    href: "/admin/ai-agents",
    notifications: 2,
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    labelAr: "التحليلات",
    href: "/admin/analytics",
    notifications: 0,
  },
  {
    id: "payments",
    icon: CreditCard,
    label: "Payments",
    labelAr: "المدفوعات",
    href: "/admin/payments",
    notifications: 1,
  },
  {
    id: "notifications",
    icon: Bell,
    label: "Notifications",
    labelAr: "الإشعارات",
    href: "/admin/notifications",
    notifications: 12,
  },
  {
    id: "settings",
    icon: Settings,
    label: "Settings",
    labelAr: "الإعدادات",
    href: "/admin/settings",
    notifications: 0,
  },
];

export function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");
  const { language, isRTL } = useLanguage();

  return (
    <motion.div
      className={`bg-gray-900 border-r border-gray-700 h-screen flex flex-col ${collapsed ? "w-16" : "w-64"} transition-all duration-300`}
      initial={{ x: isRTL ? 100 : -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-white font-bold">Town Media AI</h2>
                <p className="text-gray-400 text-xs">Admin Panel</p>
              </div>
            </motion.div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-400 hover:text-white hover:bg-gray-800"
          >
            {collapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <Button
              variant={activeItem === item.id ? "secondary" : "ghost"}
              className={`w-full justify-start relative ${
                activeItem === item.id
                  ? "bg-purple-500/20 text-purple-300 hover:bg-purple-500/30"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              } ${collapsed ? "px-2" : "px-3"}`}
              onClick={() => setActiveItem(item.id)}
              asChild
            >
              <a href={item.href}>
                <item.icon className={`w-5 h-5 ${collapsed ? "" : "mr-3"}`} />
                {!collapsed && (
                  <span className="flex-1 text-left">
                    {language === "ar" ? item.labelAr : item.label}
                  </span>
                )}
                {!collapsed && item.notifications > 0 && (
                  <Badge className="bg-red-500 text-white text-xs">
                    {item.notifications}
                  </Badge>
                )}
                {collapsed && item.notifications > 0 && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                )}
              </a>
            </Button>
          </motion.div>
        ))}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-gray-700">
        {!collapsed ? (
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">A</span>
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-medium">Admin User</p>
              <p className="text-gray-400 text-xs">admin@townmedia.ai</p>
            </div>
          </div>
        ) : (
          <div className="flex justify-center mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-xs">A</span>
            </div>
          </div>
        )}

        <Button
          variant="ghost"
          className={`w-full text-gray-400 hover:text-white hover:bg-gray-800 ${collapsed ? "px-2" : "justify-start"}`}
        >
          <LogOut className={`w-4 h-4 ${collapsed ? "" : "mr-2"}`} />
          {!collapsed && (language === "ar" ? "تسجيل الخروج" : "Logout")}
        </Button>
      </div>
    </motion.div>
  );
}
