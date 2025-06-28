"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  Target,
  BarChart3,
  Megaphone,
  Palette,
  Video,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "AI Campaign Management",
    titleAr: "إدارة الحملات بالذكاء الاصطناعي",
    description:
      "Automated campaign creation, optimization, and management across all platforms",
    descriptionAr: "إنشاء وتحسين وإدارة الحملات تلقائياً عبر جميع المنصات",
    icon: Bot,
    features: [
      "Auto-optimization",
      "Real-time adjustments",
      "Performance tracking",
    ],
    featuresAr: ["تحسين تلقائي", "تعديلات في الوقت الفعلي", "تتبع الأداء"],
    price: 297,
    color: "from-purple-500 to-violet-600",
    popular: true,
  },
  {
    id: 2,
    title: "Targeted Advertising",
    titleAr: "الإعلانات المستهدفة",
    description:
      "Precision targeting using AI-powered audience analysis and segmentation",
    descriptionAr:
      "استهداف دقيق باستخدام تحليل وتقسيم الجمهور بالذكاء الاصطناعي",
    icon: Target,
    features: ["Audience analysis", "Smart targeting", "A/B testing"],
    featuresAr: ["تحليل الجمهور", "استهداف ذكي", "اختبار A/B"],
    price: 197,
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 3,
    title: "Analytics & Reporting",
    titleAr: "التحليلات والتقارير",
    description:
      "Comprehensive analytics with actionable insights and custom reports",
    descriptionAr: "تحليلات شاملة مع رؤى قابلة للتنفيذ وتقارير مخصصة",
    icon: BarChart3,
    features: ["Custom dashboards", "ROI tracking", "Predictive analytics"],
    featuresAr: ["لوحات مخصصة", "تتبع العائد", "تحليلات تنبؤية"],
    price: 147,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 4,
    title: "Social Media Marketing",
    titleAr: "تسويق وسائل التواصل الاجتماعي",
    description:
      "Complete social media management with AI-powered content creation",
    descriptionAr:
      "إدارة كاملة لوسائل التواصل مع إنشاء محتوى بالذكاء الاصطناعي",
    icon: Megaphone,
    features: ["Content creation", "Scheduling", "Engagement automation"],
    featuresAr: ["إنشاء المحتوى", "الجدولة", "أتمتة التفاعل"],
    price: 247,
    color: "from-pink-500 to-rose-600",
  },
  {
    id: 5,
    title: "Creative Design",
    titleAr: "التصميم الإبداعي",
    description:
      "AI-generated creative assets optimized for maximum engagement",
    descriptionAr: "أصول إبداعية مُولدة بالذكاء ��لاصطناعي محسنة لأقصى تفاعل",
    icon: Palette,
    features: [
      "AI-generated designs",
      "Brand consistency",
      "Multi-format output",
    ],
    featuresAr: [
      "تصاميم مولدة بالذكاء الاصطناعي",
      "اتساق العلامة التجارية",
      "إخراج متعدد الصيغ",
    ],
    price: 197,
    color: "from-orange-500 to-amber-600",
  },
  {
    id: 6,
    title: "Video Marketing",
    titleAr: "تسويق الفيديو",
    description:
      "AI-powered video creation and optimization for all social platforms",
    descriptionAr: "إنشاء وتحسين الفيديو بالذكاء الاصطناعي لجميع منصات التواصل",
    icon: Video,
    features: [
      "Auto video creation",
      "Platform optimization",
      "Performance tracking",
    ],
    featuresAr: ["إنشاء فيديو تلقائي", "تحسين المنصة", "تتبع الأداء"],
    price: 347,
    color: "from-red-500 to-pink-600",
  },
];

export function ServicesSection() {
  const { translation, language, isRTL } = useLanguage();

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">
              {translation.ourServices}
            </Badge>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {translation.servicesDescription}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {language === "ar"
              ? "نقدم مجموعة شاملة من خدمات التسويق الرقمي المدعومة بالذكاء الاصطناعي"
              : "We offer a comprehensive suite of AI-powered digital marketing services"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <Card
                className={`relative h-full bg-white/5 border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 ${service.popular ? "ring-2 ring-purple-500/50" : ""}`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-violet-500 text-white">
                      {translation.mostPopular}
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl mb-2">
                    {language === "ar" ? service.titleAr : service.title}
                  </CardTitle>
                  <p className="text-gray-300 text-sm">
                    {language === "ar"
                      ? service.descriptionAr
                      : service.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {(language === "ar"
                      ? service.featuresAr
                      : service.features
                    ).map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-gray-300 text-sm"
                      >
                        <Check
                          className={`w-4 h-4 text-green-400 ${isRTL ? "ml-2" : "mr-2"} flex-shrink-0`}
                        />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-white">
                      ${service.price}
                      <span className="text-sm text-gray-400 font-normal">
                        /month
                      </span>
                    </div>
                  </div>

                  <Button
                    className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 transition-opacity`}
                  >
                    {translation.requestService}
                    <ArrowRight
                      className={`w-4 h-4 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`}
                    />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-6">
            {language === "ar"
              ? "هل تحتاج خدمة مخصصة؟ تواصل معنا لمناقشة احتياجاتك"
              : "Need a custom service? Contact us to discuss your requirements"}
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            {translation.contactSales}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
