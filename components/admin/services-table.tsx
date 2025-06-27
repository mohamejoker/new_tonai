"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { useCurrency } from "@/hooks/use-currency";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Search,
  Edit,
  Trash2,
  Eye,
  Plus,
  MoreHorizontal,
  Filter,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = [
  {
    id: 1,
    name: "AI Campaign Management",
    nameAr: "إدارة الحملات بالذكاء الاصطناعي",
    category: "AI Services",
    categoryAr: "خدمات الذكاء الاصطناعي",
    price: 297,
    status: "active",
    clients: 245,
    revenue: 72765,
    rating: 4.8,
    lastUpdated: "2024-01-15",
  },
  {
    id: 2,
    name: "Social Media Marketing",
    nameAr: "تسويق وسائل التواصل الاجتماعي",
    category: "Marketing",
    categoryAr: "التسويق",
    price: 247,
    status: "active",
    clients: 189,
    revenue: 46683,
    rating: 4.6,
    lastUpdated: "2024-01-14",
  },
  {
    id: 3,
    name: "Analytics & Reporting",
    nameAr: "التحليلات والتقارير",
    category: "Analytics",
    categoryAr: "التحليلات",
    price: 147,
    status: "active",
    clients: 156,
    revenue: 22932,
    rating: 4.7,
    lastUpdated: "2024-01-13",
  },
  {
    id: 4,
    name: "Video Marketing",
    nameAr: "تسويق الفيديو",
    category: "Creative",
    categoryAr: "الإبداع",
    price: 347,
    status: "draft",
    clients: 67,
    revenue: 23249,
    rating: 4.9,
    lastUpdated: "2024-01-12",
  },
  {
    id: 5,
    name: "Creative Design",
    nameAr: "التصميم الإبداعي",
    category: "Creative",
    categoryAr: "الإبداع",
    price: 197,
    status: "paused",
    clients: 123,
    revenue: 24231,
    rating: 4.5,
    lastUpdated: "2024-01-10",
  },
];

export function ServicesTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { language, translation } = useLanguage();
  const { formatPrice } = useCurrency();

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.nameAr.includes(searchQuery);
    const matchesCategory =
      selectedCategory === "all" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: {
        label: language === "ar" ? "نشط" : "Active",
        className:
          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      },
      draft: {
        label: language === "ar" ? "مسودة" : "Draft",
        className:
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      },
      paused: {
        label: language === "ar" ? "متوقف" : "Paused",
        className: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
      },
    };

    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge className={config.className}>{config.label}</Badge>;
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
              {translation.servicesManagement}
            </CardTitle>
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <Plus className="w-4 h-4 mr-2" />
              {translation.addService}
            </Button>
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-4 mt-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder={
                  language === "ar"
                    ? "البحث في الخدمات..."
                    : "Search services..."
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              {language === "ar" ? "تصفية" : "Filter"}
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    {language === "ar" ? "الخدمة" : "Service"}
                  </TableHead>
                  <TableHead>
                    {language === "ar" ? "الفئة" : "Category"}
                  </TableHead>
                  <TableHead>{language === "ar" ? "السعر" : "Price"}</TableHead>
                  <TableHead>
                    {language === "ar" ? "الحالة" : "Status"}
                  </TableHead>
                  <TableHead>
                    {language === "ar" ? "العملاء" : "Clients"}
                  </TableHead>
                  <TableHead>
                    {language === "ar" ? "الإيرادات" : "Revenue"}
                  </TableHead>
                  <TableHead>
                    {language === "ar" ? "التقييم" : "Rating"}
                  </TableHead>
                  <TableHead>
                    {language === "ar" ? "الإجراءات" : "Actions"}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredServices.map((service) => (
                  <motion.tr
                    key={service.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <TableCell className="font-medium">
                      <div>
                        <div className="text-gray-900 dark:text-white">
                          {language === "ar" ? service.nameAr : service.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          ID: {service.id}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {language === "ar"
                          ? service.categoryAr
                          : service.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-semibold">
                      {formatPrice(service.price)}
                    </TableCell>
                    <TableCell>{getStatusBadge(service.status)}</TableCell>
                    <TableCell>{service.clients.toLocaleString()}</TableCell>
                    <TableCell className="font-semibold text-green-600 dark:text-green-400">
                      {formatPrice(service.revenue)}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1">{service.rating}</span>
                      </div>
                    </TableCell>
                    <TableCell>
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
                            <Edit className="w-4 h-4 mr-2" />
                            {translation.edit}
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer text-red-600">
                            <Trash2 className="w-4 h-4 mr-2" />
                            {translation.delete}
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              {language === "ar" ? "لا توجد خدمات" : "No services found"}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
