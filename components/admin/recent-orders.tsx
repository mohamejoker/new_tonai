"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { useCurrency } from "@/hooks/use-currency";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Eye, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const recentOrders = [
  {
    id: "ORD-001",
    customer: {
      name: "Ahmed Al-Rashid",
      email: "ahmed@example.com",
      avatar: "/api/placeholder/32/32",
    },
    service: "AI Campaign Management",
    serviceAr: "إدارة الحملات بالذكاء الاصطناعي",
    amount: 297,
    status: "completed",
    date: "2024-01-15T10:30:00Z",
  },
  {
    id: "ORD-002",
    customer: {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      avatar: "/api/placeholder/32/32",
    },
    service: "Social Media Marketing",
    serviceAr: "تسويق وسائل التواصل الاجتماعي",
    amount: 247,
    status: "processing",
    date: "2024-01-15T09:15:00Z",
  },
  {
    id: "ORD-003",
    customer: {
      name: "Mohamed Hassan",
      email: "mohamed@example.com",
      avatar: "/api/placeholder/32/32",
    },
    service: "Video Marketing",
    serviceAr: "تسويق الفيديو",
    amount: 347,
    status: "pending",
    date: "2024-01-15T08:45:00Z",
  },
  {
    id: "ORD-004",
    customer: {
      name: "Lisa Chen",
      email: "lisa@example.com",
      avatar: "/api/placeholder/32/32",
    },
    service: "Analytics & Reporting",
    serviceAr: "التحليلات والتقارير",
    amount: 147,
    status: "completed",
    date: "2024-01-14T16:20:00Z",
  },
  {
    id: "ORD-005",
    customer: {
      name: "Omar Ibrahim",
      email: "omar@example.com",
      avatar: "/api/placeholder/32/32",
    },
    service: "Creative Design",
    serviceAr: "التصميم الإبداعي",
    amount: 197,
    status: "cancelled",
    date: "2024-01-14T14:10:00Z",
  },
];

export function RecentOrders() {
  const { language, translation } = useLanguage();
  const { formatPrice } = useCurrency();

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      completed: {
        label: language === "ar" ? "مكتمل" : "Completed",
        className:
          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      },
      processing: {
        label: language === "ar" ? "قيد المعالجة" : "Processing",
        className:
          "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      },
      pending: {
        label: language === "ar" ? "معلق" : "Pending",
        className:
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      },
      cancelled: {
        label: language === "ar" ? "ملغي" : "Cancelled",
        className: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
      },
    };

    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge className={config.className}>{config.label}</Badge>;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return language === "ar"
      ? date.toLocaleDateString("ar-EG")
      : date.toLocaleDateString("en-US");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-gray-900 dark:text-white">
              {language === "ar" ? "الطلبات الأخيرة" : "Recent Orders"}
            </CardTitle>
            <Button variant="outline" size="sm">
              {language === "ar" ? "عرض الكل" : "View All"}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentOrders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      src={order.customer.avatar}
                      alt={order.customer.name}
                    />
                    <AvatarFallback>
                      {order.customer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {order.customer.name}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        #{order.id}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {language === "ar" ? order.serviceAr : order.service}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(order.date)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {formatPrice(order.amount)}
                    </div>
                    {getStatusBadge(order.status)}
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="cursor-pointer">
                        <Eye className="w-4 h-4 mr-2" />
                        {translation.view}
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        {language === "ar" ? "تحديث الحالة" : "Update Status"}
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        {language === "ar" ? "إرسال رسالة" : "Send Message"}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
