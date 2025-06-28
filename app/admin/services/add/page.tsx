"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { useCurrency } from "@/hooks/use-currency";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Save,
  ArrowLeft,
  Upload,
  Image as ImageIcon,
  Bot,
  Target,
  BarChart3,
  Megaphone,
  Palette,
  Video,
  Plus,
  Trash2,
} from "lucide-react";
import Link from "next/link";

const serviceIcons = [
  { icon: Bot, name: "Bot", nameAr: "بوت" },
  { icon: Target, name: "Target", nameAr: "هدف" },
  { icon: BarChart3, name: "Analytics", nameAr: "تحليلات" },
  { icon: Megaphone, name: "Marketing", nameAr: "تسويق" },
  { icon: Palette, name: "Design", nameAr: "تصميم" },
  { icon: Video, name: "Video", nameAr: "فيديو" },
];

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
  { value: "consulting", label: "Consulting", labelAr: "الاستشارات" },
];

interface ServiceFeature {
  id: string;
  name: string;
  nameAr: string;
}

export default function AddServicePage() {
  const { language, translation, isRTL } = useLanguage();
  const { currency } = useCurrency();

  const [formData, setFormData] = useState({
    name: "",
    nameAr: "",
    description: "",
    descriptionAr: "",
    shortDescription: "",
    shortDescriptionAr: "",
    category: "",
    price: "",
    originalPrice: "",
    icon: "Bot",
    color: "from-purple-500 to-violet-600",
    status: "draft",
    popular: false,
    featured: false,
    duration: "30",
    durationType: "days",
  });

  const [features, setFeatures] = useState<ServiceFeature[]>([
    { id: "1", name: "", nameAr: "" },
  ]);

  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const addFeature = () => {
    const newFeature: ServiceFeature = {
      id: Date.now().toString(),
      name: "",
      nameAr: "",
    };
    setFeatures([...features, newFeature]);
  };

  const removeFeature = (id: string) => {
    setFeatures(features.filter((f) => f.id !== id));
  };

  const updateFeature = (id: string, field: string, value: string) => {
    setFeatures(
      features.map((f) => (f.id === id ? { ...f, [field]: value } : f)),
    );
  };

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const serviceData = {
      ...formData,
      features: features.filter((f) => f.name.trim() || f.nameAr.trim()),
      tags,
    };
    console.log("Service Data:", serviceData);
    // API call would go here
  };

  const colorOptions = [
    {
      value: "from-purple-500 to-violet-600",
      label: "Purple",
      labelAr: "بنفسجي",
    },
    { value: "from-blue-500 to-cyan-600", label: "Blue", labelAr: "أزرق" },
    { value: "from-green-500 to-emerald-600", label: "Green", labelAr: "أخضر" },
    {
      value: "from-orange-500 to-amber-600",
      label: "Orange",
      labelAr: "برتقالي",
    },
    { value: "from-pink-500 to-rose-600", label: "Pink", labelAr: "وردي" },
    { value: "from-red-500 to-pink-600", label: "Red", labelAr: "أحمر" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/services">
            <Button variant="outline" size="sm">
              <ArrowLeft
                className={`w-4 h-4 ${isRTL ? "ml-2 rotate-180" : "mr-2"}`}
              />
              {language === "ar" ? "رجوع" : "Back"}
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {translation.addService}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {language === "ar"
                ? "إنشاء خدمة جديدة مع جميع التفاصيل والإعدادات"
                : "Create a new service with all details and settings"}
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === "ar"
                    ? "المعلومات الأساسية"
                    : "Basic Information"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
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
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
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

                {/* Short Descriptions */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="shortDescription">
                      {language === "ar"
                        ? "وصف مختصر (إنجليزي)"
                        : "Short Description (English)"}
                    </Label>
                    <Textarea
                      id="shortDescription"
                      value={formData.shortDescription}
                      onChange={(e) =>
                        handleInputChange("shortDescription", e.target.value)
                      }
                      placeholder="Automated campaign creation and optimization..."
                      rows={3}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="shortDescriptionAr">
                      {language === "ar"
                        ? "وصف مختصر (عربي)"
                        : "Short Description (Arabic)"}
                    </Label>
                    <Textarea
                      id="shortDescriptionAr"
                      value={formData.shortDescriptionAr}
                      onChange={(e) =>
                        handleInputChange("shortDescriptionAr", e.target.value)
                      }
                      placeholder="إنشاء وتحسين الحملات تلقائياً..."
                      rows={3}
                      required
                    />
                  </div>
                </div>

                {/* Full Descriptions */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="description">
                      {language === "ar"
                        ? "الوصف الكامل (إنجليزي)"
                        : "Full Description (English)"}
                    </Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                      placeholder="Comprehensive description of the service..."
                      rows={6}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="descriptionAr">
                      {language === "ar"
                        ? "الوصف الكامل (عربي)"
                        : "Full Description (Arabic)"}
                    </Label>
                    <Textarea
                      id="descriptionAr"
                      value={formData.descriptionAr}
                      onChange={(e) =>
                        handleInputChange("descriptionAr", e.target.value)
                      }
                      placeholder="وصف شامل للخدمة..."
                      rows={6}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>
                    {language === "ar" ? "مميزات الخدمة" : "Service Features"}
                  </CardTitle>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addFeature}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    {language === "ar" ? "إضافة ميزة" : "Add Feature"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid md:grid-cols-2 gap-4 p-4 border border-gray-200 dark:border-gray-600 rounded-lg"
                  >
                    <div className="space-y-2">
                      <Label>
                        {language === "ar"
                          ? `الميزة ${index + 1} (إنجليزي)`
                          : `Feature ${index + 1} (English)`}
                      </Label>
                      <Input
                        value={feature.name}
                        onChange={(e) =>
                          updateFeature(feature.id, "name", e.target.value)
                        }
                        placeholder="Auto-optimization"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>
                        {language === "ar"
                          ? `الميزة ${index + 1} (عربي)`
                          : `Feature ${index + 1} (Arabic)`}
                      </Label>
                      <div className="flex gap-2">
                        <Input
                          value={feature.nameAr}
                          onChange={(e) =>
                            updateFeature(feature.id, "nameAr", e.target.value)
                          }
                          placeholder="تحسين تلقائي"
                        />
                        {features.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => removeFeature(feature.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle>{language === "ar" ? "العلامات" : "Tags"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder={
                      language === "ar" ? "أضف علامة..." : "Add tag..."
                    }
                    onKeyPress={(e) =>
                      e.key === "Enter" && (e.preventDefault(), addTag())
                    }
                  />
                  <Button type="button" onClick={addTag}>
                    {language === "ar" ? "إضافة" : "Add"}
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-red-100 dark:hover:bg-red-900"
                      onClick={() => removeTag(tag)}
                    >
                      {tag} ×
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Preview */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === "ar" ? "معاينة" : "Preview"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${formData.color}`}
                    >
                      {(() => {
                        const IconComponent =
                          serviceIcons.find((i) => i.name === formData.icon)
                            ?.icon || Bot;
                        return <IconComponent className="w-6 h-6 text-white" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        {language === "ar"
                          ? formData.nameAr || "اسم الخدمة"
                          : formData.name || "Service Name"}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {language === "ar"
                          ? formData.shortDescriptionAr || "وصف مختصر"
                          : formData.shortDescription || "Short description"}
                      </p>
                    </div>
                  </div>
                  {formData.popular && (
                    <Badge className="mb-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      {translation.mostPopular}
                    </Badge>
                  )}
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {formData.price ? `${formData.price} ${currency}` : "0 USD"}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Settings */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === "ar" ? "الإعدادات" : "Settings"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Category */}
                <div className="space-y-2">
                  <Label>{language === "ar" ? "الفئة" : "Category"}</Label>
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

                {/* Icon */}
                <div className="space-y-2">
                  <Label>{language === "ar" ? "الأيقونة" : "Icon"}</Label>
                  <Select
                    value={formData.icon}
                    onValueChange={(value) => handleInputChange("icon", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceIcons.map((icon) => (
                        <SelectItem key={icon.name} value={icon.name}>
                          {language === "ar" ? icon.nameAr : icon.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Color */}
                <div className="space-y-2">
                  <Label>{language === "ar" ? "اللون" : "Color"}</Label>
                  <Select
                    value={formData.color}
                    onValueChange={(value) => handleInputChange("color", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {colorOptions.map((color) => (
                        <SelectItem key={color.value} value={color.value}>
                          {language === "ar" ? color.labelAr : color.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Pricing */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>{language === "ar" ? "السعر" : "Price"}</Label>
                    <Input
                      type="number"
                      value={formData.price}
                      onChange={(e) =>
                        handleInputChange("price", e.target.value)
                      }
                      placeholder="297"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>
                      {language === "ar" ? "السعر الأصلي" : "Original Price"}
                    </Label>
                    <Input
                      type="number"
                      value={formData.originalPrice}
                      onChange={(e) =>
                        handleInputChange("originalPrice", e.target.value)
                      }
                      placeholder="497"
                    />
                  </div>
                </div>

                {/* Duration */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>{language === "ar" ? "المدة" : "Duration"}</Label>
                    <Input
                      type="number"
                      value={formData.duration}
                      onChange={(e) =>
                        handleInputChange("duration", e.target.value)
                      }
                      placeholder="30"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>
                      {language === "ar" ? "وحدة المدة" : "Duration Type"}
                    </Label>
                    <Select
                      value={formData.durationType}
                      onValueChange={(value) =>
                        handleInputChange("durationType", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="days">
                          {language === "ar" ? "أيام" : "Days"}
                        </SelectItem>
                        <SelectItem value="weeks">
                          {language === "ar" ? "أسابيع" : "Weeks"}
                        </SelectItem>
                        <SelectItem value="months">
                          {language === "ar" ? "شهور" : "Months"}
                        </SelectItem>
                        <SelectItem value="years">
                          {language === "ar" ? "سنوات" : "Years"}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Status */}
                <div className="space-y-2">
                  <Label>{language === "ar" ? "الحالة" : "Status"}</Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) =>
                      handleInputChange("status", value)
                    }
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

                {/* Toggles */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>
                      {language === "ar" ? "خدمة شائعة" : "Popular Service"}
                    </Label>
                    <Switch
                      checked={formData.popular}
                      onCheckedChange={(value) =>
                        handleInputChange("popular", value)
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>
                      {language === "ar" ? "خدمة مميزة" : "Featured Service"}
                    </Label>
                    <Switch
                      checked={formData.featured}
                      onCheckedChange={(value) =>
                        handleInputChange("featured", value)
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Image Upload */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === "ar" ? "صور�� الخدمة" : "Service Image"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                  <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {language === "ar"
                      ? "اسحب وأفلت الصورة هنا أو انقر للاختيار"
                      : "Drag and drop image here or click to select"}
                  </p>
                  <Button type="button" variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    {language === "ar" ? "اختر صورة" : "Choose Image"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-4 pt-6 border-t">
          <Link href="/admin/services">
            <Button type="button" variant="outline">
              {translation.cancel}
            </Button>
          </Link>
          <Button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            <Save className="w-4 h-4 mr-2" />
            {translation.save}
          </Button>
        </div>
      </form>
    </div>
  );
}
