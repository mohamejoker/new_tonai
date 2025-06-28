"use client";

import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { CurrencySwitcher } from "@/components/ui/currency-switcher";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { Search, Bell, Plus, User, Settings, LogOut, Home } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "New Order Received",
    titleAr: "طلب جديد مستلم",
    message: "Order #1234 from Ahmed Ali",
    messageAr: "طلب رقم 1234 من أحمد علي",
    time: "5 min ago",
    timeAr: "منذ 5 دقائق",
    unread: true,
  },
  {
    id: 2,
    title: "Service Completed",
    titleAr: "خدمة مكتملة",
    message: "Campaign optimization finished",
    messageAr: "تحسين الحملة اكتمل",
    time: "1 hour ago",
    timeAr: "منذ ساعة",
    unread: true,
  },
  {
    id: 3,
    title: "New User Registration",
    titleAr: "تسجيل مستخدم جديد",
    message: "Sarah Johnson joined",
    messageAr: "انضمت سارة جونسون",
    time: "2 hours ago",
    timeAr: "منذ ساعتين",
    unread: false,
  },
];

export function AdminHeader() {
  const [searchQuery, setSearchQuery] = useState("");
  const { language, isRTL } = useLanguage();
  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <motion.header
      className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        {/* Left Section - Search */}
        <div className="flex items-center space-x-4 flex-1">
          <Button variant="ghost" size="sm" asChild>
            <a
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Home className="w-4 h-4 mr-2" />
              {language === "ar" ? "الرئيسية" : "Home"}
            </a>
          </Button>

          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder={language === "ar" ? "البحث..." : "Search..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
            />
          </div>
        </div>

        {/* Right Section - Actions */}
        <div className="flex items-center space-x-4">
          {/* Quick Actions */}
          <Button
            size="sm"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            <Plus className="w-4 h-4 mr-2" />
            {language === "ar" ? "إضافة" : "Add New"}
          </Button>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs min-w-[18px] h-[18px] flex items-center justify-center p-0">
                    {unreadCount}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-80 max-h-96 overflow-y-auto"
            >
              <div className="p-3 border-b">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {language === "ar" ? "الإشعارات" : "Notifications"}
                </h3>
              </div>
              {notifications.map((notification) => (
                <DropdownMenuItem
                  key={notification.id}
                  className="p-3 cursor-pointer"
                >
                  <div className="w-full">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p
                          className={`text-sm font-medium ${notification.unread ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-300"}`}
                        >
                          {language === "ar"
                            ? notification.titleAr
                            : notification.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {language === "ar"
                            ? notification.messageAr
                            : notification.message}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {language === "ar"
                            ? notification.timeAr
                            : notification.time}
                        </p>
                      </div>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-1"></div>
                      )}
                    </div>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Language & Currency */}
          <LanguageSwitcher />
          <CurrencySwitcher />

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center space-x-2"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">A</span>
                </div>
                <span className="hidden md:block text-gray-700 dark:text-gray-300">
                  Admin
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="cursor-pointer">
                <User className="w-4 h-4 mr-2" />
                {language === "ar" ? "الملف الشخصي" : "Profile"}
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Settings className="w-4 h-4 mr-2" />
                {language === "ar" ? "الإعدادات" : "Settings"}
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-red-600">
                <LogOut className="w-4 h-4 mr-2" />
                {language === "ar" ? "تسجيل الخروج" : "Logout"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.header>
  );
}
