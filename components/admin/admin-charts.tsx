"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const revenueData = [
  { month: "Jan", monthAr: "يناير", revenue: 45000, orders: 120 },
  { month: "Feb", monthAr: "فبراير", revenue: 52000, orders: 142 },
  { month: "Mar", monthAr: "مارس", revenue: 48000, orders: 135 },
  { month: "Apr", monthAr: "أبريل", revenue: 61000, orders: 168 },
  { month: "May", monthAr: "مايو", revenue: 55000, orders: 155 },
  { month: "Jun", monthAr: "يونيو", revenue: 67000, orders: 189 },
];

const serviceData = [
  {
    name: "AI Campaign",
    nameAr: "حملات الذكاء الاصطناعي",
    value: 35,
    color: "#8B5CF6",
  },
  {
    name: "Social Media",
    nameAr: "وسائل التواصل",
    value: 25,
    color: "#06B6D4",
  },
  { name: "Analytics", nameAr: "التحليلات", value: 20, color: "#10B981" },
  { name: "Creative", nameAr: "الإبداع", value: 15, color: "#F59E0B" },
  { name: "Other", nameAr: "أخرى", value: 5, color: "#EF4444" },
];

const growthData = [
  { period: "Week 1", periodAr: "الأسبوع 1", users: 1200, revenue: 15000 },
  { period: "Week 2", periodAr: "الأسبوع 2", users: 1350, revenue: 18000 },
  { period: "Week 3", periodAr: "الأسبوع 3", users: 1100, revenue: 14000 },
  { period: "Week 4", periodAr: "الأسبوع 4", users: 1800, revenue: 25000 },
];

export function AdminCharts() {
  const { language } = useLanguage();

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg">
          <p className="text-gray-900 dark:text-white font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* Revenue Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="xl:col-span-2"
      >
        <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-gray-900 dark:text-white">
                {language === "ar"
                  ? "إيرادات الأشهر الستة الماضية"
                  : "Revenue Last 6 Months"}
              </CardTitle>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                +12.5%
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  className="stroke-gray-300 dark:stroke-gray-600"
                />
                <XAxis
                  dataKey={language === "ar" ? "monthAr" : "month"}
                  className="text-gray-600 dark:text-gray-300"
                />
                <YAxis className="text-gray-600 dark:text-gray-300" />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="revenue" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* Service Distribution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              {language === "ar" ? "توز��ع الخدمات" : "Service Distribution"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={serviceData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${value}%`}
                >
                  {serviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [
                    `${value}%`,
                    language === "ar" ? "النسبة" : "Percentage",
                  ]}
                  labelFormatter={(label) => {
                    const item = serviceData.find(
                      (d) => (language === "ar" ? d.nameAr : d.name) === label,
                    );
                    return language === "ar" ? item?.nameAr : item?.name;
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {serviceData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-gray-600 dark:text-gray-300">
                      {language === "ar" ? item.nameAr : item.name}
                    </span>
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Growth Trend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="xl:col-span-3"
      >
        <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-gray-900 dark:text-white">
                {language === "ar"
                  ? "اتجاه النمو الأسبوعي"
                  : "Weekly Growth Trend"}
              </CardTitle>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">
                    {language === "ar" ? "المستخدمون" : "Users"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">
                    {language === "ar" ? "الإيرادات" : "Revenue"}
                  </span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={growthData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  className="stroke-gray-300 dark:stroke-gray-600"
                />
                <XAxis
                  dataKey={language === "ar" ? "periodAr" : "period"}
                  className="text-gray-600 dark:text-gray-300"
                />
                <YAxis className="text-gray-600 dark:text-gray-300" />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#3B82F6"
                  strokeWidth={3}
                  dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#10B981"
                  strokeWidth={3}
                  dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
