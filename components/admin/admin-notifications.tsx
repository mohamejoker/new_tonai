"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bell,
  AlertCircle,
  CheckCircle,
  Info,
  TrendingUp,
  Users,
  DollarSign,
  Settings,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "success",
    title: "New Order Received",
    titleAr: "طلب جديد مستلم",
    message: "Order #ORD-001 for AI Campaign Management",
    messageAr: "طلب رقم ORD-001 لإدارة الحملات بالذكاء الاصطناعي",
    time: "5 minutes ago",
    timeAr: "منذ 5 دقائق",
    icon: CheckCircle,
    unread: true,
  },
  {
    id: 2,
    type: "warning",
    title: "High Server Load",
    titleAr: "حمولة خادم عالية",
    message: "Server CPU usage is at 85%",
    messageAr: "استخدام معالج الخادم عند 85%",
    time: "15 minutes ago",
    timeAr: "منذ 15 دقيقة",
    icon: AlertCircle,
    unread: true,
  },
  {
    id: 3,
    type: "info",
    title: "Monthly Revenue Update",
    titleAr: "تحديث الإيرادات الشهرية",
    message: "Revenue increased by 12.5% this month",
    messageAr: "زادت الإيرادات بنسبة 12.5% هذا الشهر",
    time: "1 hour ago",
    timeAr: "منذ ساعة",
    icon: TrendingUp,
    unread: false,
  },
  {
    id: 4,
    type: "success",
    title: "New User Registration",
    titleAr: "تسجيل مستخدم جديد",
    message: "Sarah Johnson has joined the platform",
    messageAr: "انضمت سارة جونسون إلى المنصة",
    time: "2 hours ago",
    timeAr: "منذ ساعتين",
    icon: Users,
    unread: false,
  },
  {
    id: 5,
    type: "info",
    title: "Payment Processed",
    titleAr: "دفعة معالجة",
    message: "Payment of $297 has been processed",
    messageAr: "تم معالجة دفعة بقيمة 297 دولار",
    time: "3 hours ago",
    timeAr: "منذ 3 ساعات",
    icon: DollarSign,
    unread: false,
  },
  {
    id: 6,
    type: "warning",
    title: "System Maintenance",
    titleAr: "صيانة النظام",
    message: "Scheduled maintenance in 2 hours",
    messageAr: "صيانة مجدولة خلال ساعتين",
    time: "4 hours ago",
    timeAr: "منذ 4 ساعات",
    icon: Settings,
    unread: false,
  },
];

export function AdminNotifications() {
  const { language } = useLanguage();

  const getNotificationStyle = (type: string) => {
    const styles = {
      success: {
        bg: "bg-green-50 dark:bg-green-900/20",
        border: "border-green-200 dark:border-green-800",
        icon: "text-green-600 dark:text-green-400",
      },
      warning: {
        bg: "bg-yellow-50 dark:bg-yellow-900/20",
        border: "border-yellow-200 dark:border-yellow-800",
        icon: "text-yellow-600 dark:text-yellow-400",
      },
      info: {
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800",
        icon: "text-blue-600 dark:text-blue-400",
      },
    };

    return styles[type as keyof typeof styles] || styles.info;
  };

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CardTitle className="text-gray-900 dark:text-white">
                {language === "ar" ? "الإشعارات" : "Notifications"}
              </CardTitle>
              {unreadCount > 0 && (
                <Badge className="bg-red-500 text-white">{unreadCount}</Badge>
              )}
            </div>
            <Button variant="outline" size="sm">
              {language === "ar" ? "تحديد الكل كمقروء" : "Mark All Read"}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {notifications.map((notification, index) => {
              const style = getNotificationStyle(notification.type);

              return (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`p-4 rounded-lg border ${style.bg} ${style.border} ${
                    notification.unread ? "ring-2 ring-blue-500/20" : ""
                  } hover:shadow-md transition-all duration-200 cursor-pointer`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`p-1 rounded-full ${style.icon}`}>
                      <notification.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4
                          className={`text-sm font-medium text-gray-900 dark:text-white ${
                            notification.unread ? "font-semibold" : ""
                          }`}
                        >
                          {language === "ar"
                            ? notification.titleAr
                            : notification.title}
                        </h4>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {language === "ar"
                            ? notification.timeAr
                            : notification.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {language === "ar"
                          ? notification.messageAr
                          : notification.message}
                      </p>
                      {notification.unread && (
                        <div className="flex items-center mt-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="ml-2 text-xs text-blue-600 dark:text-blue-400">
                            {language === "ar" ? "جديد" : "New"}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600 text-center">
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            >
              <Bell className="w-4 h-4 mr-2" />
              {language === "ar"
                ? "عرض جميع الإشعارات"
                : "View All Notifications"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
