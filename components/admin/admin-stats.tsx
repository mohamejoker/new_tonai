"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { useCurrency } from "@/hooks/use-currency";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  Bot,
  Globe,
  Zap,
  CheckCircle,
} from "lucide-react";

const stats = [
  {
    id: "revenue",
    title: "Total Revenue",
    titleAr: "إجمالي الإيرادات",
    value: 125000,
    change: "+12.5%",
    changeType: "positive",
    icon: DollarSign,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "users",
    title: "Active Users",
    titleAr: "المستخدمون النشطون",
    value: "8,942",
    change: "+8.2%",
    changeType: "positive",
    icon: Users,
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: "orders",
    title: "Total Orders",
    titleAr: "إجمالي الطلبات",
    value: "2,847",
    change: "+15.3%",
    changeType: "positive",
    icon: ShoppingCart,
    color: "from-purple-500 to-violet-600",
  },
  {
    id: "conversion",
    title: "Conversion Rate",
    titleAr: "معدل التحويل",
    value: "4.8%",
    change: "+2.1%",
    changeType: "positive",
    icon: TrendingUp,
    color: "from-orange-500 to-amber-600",
  },
  {
    id: "ai-agents",
    title: "AI Agents Running",
    titleAr: "وكلاء الذكاء الاصطناعي العاملون",
    value: "1,250",
    change: "+25.7%",
    changeType: "positive",
    icon: Bot,
    color: "from-pink-500 to-rose-600",
  },
  {
    id: "countries",
    title: "Countries Served",
    titleAr: "البلدان المخدومة",
    value: "45",
    change: "+5",
    changeType: "positive",
    icon: Globe,
    color: "from-teal-500 to-cyan-600",
  },
  {
    id: "api-calls",
    title: "API Calls Today",
    titleAr: "استدعاءات API اليوم",
    value: "2.1M",
    change: "+18.4%",
    changeType: "positive",
    icon: Zap,
    color: "from-indigo-500 to-blue-600",
  },
  {
    id: "uptime",
    title: "System Uptime",
    titleAr: "وقت تشغيل النظام",
    value: "99.9%",
    change: "+0.1%",
    changeType: "positive",
    icon: CheckCircle,
    color: "from-red-500 to-pink-600",
  },
];

export function AdminStats() {
  const { language } = useLanguage();
  const { formatPrice } = useCurrency();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {language === "ar" ? stat.titleAr : stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.color}`}>
                <stat.icon className="w-4 h-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.id === "revenue"
                  ? formatPrice(stat.value as number)
                  : stat.value}
              </div>
              <div
                className={`flex items-center text-xs ${
                  stat.changeType === "positive"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                <TrendingUp className="w-3 h-3 mr-1" />
                {stat.change}{" "}
                {language === "ar" ? "من الشهر الماضي" : "from last month"}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
