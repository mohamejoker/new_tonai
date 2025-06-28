"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { useCurrency } from "@/hooks/use-currency";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X, Upload, Save } from "lucide-react";

interface AddServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  {
    value: "ai-services",
    label: "AI Services",
    labelAr: "خدمات الذكاء الاصطناعي",
  },
  { value: "marketing", label: "Marketing", labelAr: "التسويق" },
  { value: "analytics", label: "Analytics", labelAr: "التحليلات" },
  { value: "creative", label: "Creative", labelAr: "الإبداع" },
  { value: "automation", label: "Automation", labelAr: "الأتمتة" },
];

export function AddServiceModal({ isOpen, onClose }: AddServiceModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    nameAr: "",
    description: "",
    descriptionAr: "",
    category: "",
    price: "",
    features: "",
    featuresAr: "",
    status: "draft",
  });

  const { language, translation } = useLanguage();
  const { currency } = useCurrency();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Service data:", formData);
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                {translation.addService}
              </DialogTitle>
              <DialogDescription>
                {language === "ar"
                  ? "أضف خدمة جديدة إلى النظام مع جميع التفاصيل المطلوبة"
                  : "Add a new service to the system with all required details"}
              </DialogDescription>
            </DialogHeader>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Service Names */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    {language === "ar"
                      ? "اسم الخدمة (إنجليزي)"
                      : "Service Name (English)"}
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="AI Campaign Management"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nameAr">
                    {language === "ar"
                      ? "اسم الخدمة (عربي)"
                      : "Service Name (Arabic)"}
                  </Label>
                  <Input
                    id="nameAr"
                    value={formData.nameAr}
                    onChange={(e) =>
                      handleInputChange("nameAr", e.target.value)
                    }
                    placeholder="إدارة الحملات بالذكاء الاصطناعي"
                    required
                  />
                </div>
              </div>

              {/* Category and Price */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">
                    {language === "ar" ? "الفئة" : "Category"}
                  </Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) =>
                      handleInputChange("category", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          language === "ar" ? "اختر الفئة" : "Select category"
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {language === "ar"
                            ? category.labelAr
                            : category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">
                    {language === "ar"
                      ? `السعر (${currency})`
                      : `Price (${currency})`}
                  </Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                    placeholder="297"
                    required
                  />
                </div>
              </div>

              {/* Descriptions */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="description">
                    {language === "ar"
                      ? "الوصف (إنجليزي)"
                      : "Description (English)"}
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    placeholder="Automated campaign creation and optimization..."
                    rows={4}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="descriptionAr">
                    {language === "ar"
                      ? "الوصف (عربي)"
                      : "Description (Arabic)"}
                  </Label>
                  <Textarea
                    id="descriptionAr"
                    value={formData.descriptionAr}
                    onChange={(e) =>
                      handleInputChange("descriptionAr", e.target.value)
                    }
                    placeholder="إنشاء وتحسين الحملات تلقائياً..."
                    rows={4}
                    required
                  />
                </div>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="features">
                    {language === "ar"
                      ? "المميزات (إنجليزي)"
                      : "Features (English)"}
                  </Label>
                  <Textarea
                    id="features"
                    value={formData.features}
                    onChange={(e) =>
                      handleInputChange("features", e.target.value)
                    }
                    placeholder="Auto-optimization, Real-time adjustments, Performance tracking"
                    rows={3}
                  />
                  <p className="text-xs text-gray-500">
                    {language === "ar"
                      ? "افصل بين المميزات بفاصلة"
                      : "Separate features with commas"}
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="featuresAr">
                    {language === "ar"
                      ? "المميزات (عربي)"
                      : "Features (Arabic)"}
                  </Label>
                  <Textarea
                    id="featuresAr"
                    value={formData.featuresAr}
                    onChange={(e) =>
                      handleInputChange("featuresAr", e.target.value)
                    }
                    placeholder="تحسين تلقائي، تعديلات في الوقت الفعلي، تتبع الأداء"
                    rows={3}
                  />
                  <p className="text-xs text-gray-500">
                    {language === "ar"
                      ? "افصل بين المميزات بفاصلة"
                      : "Separate features with commas"}
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="space-y-2">
                <Label htmlFor="status">
                  {language === "ar" ? "الحالة" : "Status"}
                </Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) => handleInputChange("status", value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">
                      {language === "ar" ? "مسودة" : "Draft"}
                    </SelectItem>
                    <SelectItem value="active">
                      {language === "ar" ? "نشط" : "Active"}
                    </SelectItem>
                    <SelectItem value="paused">
                      {language === "ar" ? "متوقف" : "Paused"}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Image Upload */}
              <div className="space-y-2">
                <Label>
                  {language === "ar" ? "صورة الخدمة" : "Service Image"}
                </Label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 dark:text-gray-400">
                    {language === "ar"
                      ? "اسحب وأفلت الصورة هنا أو انقر للاختيار"
                      : "Drag and drop image here or click to select"}
                  </p>
                  <Button type="button" variant="outline" className="mt-2">
                    {language === "ar" ? "اختر صورة" : "Choose Image"}
                  </Button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end space-x-4 pt-6">
                <Button type="button" variant="outline" onClick={onClose}>
                  {translation.cancel}
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {translation.save}
                </Button>
              </div>
            </motion.form>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
