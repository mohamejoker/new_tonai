"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { useCurrency } from "@/hooks/use-currency";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  Target,
  BarChart3,
  Megaphone,
  Palette,
  Video,
  ArrowRight,
  Star,
  CheckCircle,
  Zap,
  Users,
  TrendingUp,
  Globe,
  Clock,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "AI Campaign Automation",
    titleAr: "أتمتة الحملات بالذكاء الاصطناعي",
    description:
      "Fully automated campaign creation, optimization, and management with advanced AI algorithms",
    descriptionAr:
      "إنشاء وتحسين وإدارة الحملات تلقائياً مع خوارزميات ذكاء اصطناعي متطورة",
    icon: Bot,
    price: 497,
    originalPrice: 797,
    features: [
      "Auto-optimization every hour",
      "Smart budget allocation",
      "Cross-platform management",
      "Real-time performance tracking",
      "A/B testing automation",
    ],
    featuresAr: [
      "تحسين تلقائي كل ساعة",
      "تخصيص ميزانية ذكي",
      "إدارة متعددة المنصات",
      "تتبع أداء في الوقت الفعلي",
      "أتمتة اختبار A/B",
    ],
    color: "from-purple-600 to-violet-700",
    stats: { users: "5K+", roi: "340%", rating: 4.9 },
    popular: true,
  },
  {
    id: 2,
    title: "Social Media Mastery",
    titleAr: "إتقان وسائل التواصل الاجتماعي",
    description:
      "Complete social media management with AI-powered content creation and engagement",
    descriptionAr:
      "إدارة كاملة لوسائل التواصل مع إنشاء محتوى وتفاعل بالذكاء الاصطناعي",
    icon: Megaphone,
    price: 297,
    originalPrice: 497,
    features: [
      "AI content generation",
      "Smart posting scheduler",
      "Engagement automation",
      "Hashtag optimization",
      "Influencer matching",
    ],
    featuresAr: [
      "إنشاء محتوى بالذكاء الاصطناعي",
      "جدولة النشر الذكي",
      "أتمتة التفاعل",
      "تحسين الهاشتاجات",
      "مطابقة المؤثرين",
    ],
    color: "from-pink-600 to-rose-700",
    stats: { users: "3K+", roi: "280%", rating: 4.8 },
  },
  {
    id: 3,
    title: "Advanced Analytics Suite",
    titleAr: "مجموعة التحليلات المتقدمة",
    description:
      "Deep insights and predictive analytics for data-driven marketing decisions",
    descriptionAr: "رؤى عميقة وتحليلات تنبؤية لقرارات تسويقية مدفوعة بالبيانات",
    icon: BarChart3,
    price: 197,
    originalPrice: 347,
    features: [
      "Predictive analytics",
      "Custom dashboards",
      "ROI tracking",
      "Competitor analysis",
      "Performance forecasting",
    ],
    featuresAr: [
      "تحليلات تنبؤية",
      "لوحات مخصصة",
      "تتبع العائد على الاستثمار",
      "تحليل المنافسين",
      "توقع الأداء",
    ],
    color: "from-blue-600 to-cyan-700",
    stats: { users: "2K+", roi: "220%", rating: 4.7 },
  },
  {
    id: 4,
    title: "Creative Design AI",
    titleAr: "تصميم إبداعي بالذكاء الاصطناعي",
    description:
      "AI-generated creative assets optimized for maximum engagement and conversion",
    descriptionAr:
      "أصول إبداعية مُولدة بالذكاء الاصطناعي محسنة لأقصى تفاعل وتحويل",
    icon: Palette,
    price: 397,
    originalPrice: 597,
    features: [
      "AI design generation",
      "Brand consistency",
      "Multi-format output",
      "Style adaptation",
      "Creative optimization",
    ],
    featuresAr: [
      "إنشاء تصاميم بالذكاء الاصطناعي",
      "اتساق العلامة التجارية",
      "إخراج متعدد الصيغ",
      "تكيف الأسلوب",
      "تحسين إبداعي",
    ],
    color: "from-orange-600 to-amber-700",
    stats: { users: "1.5K+", roi: "260%", rating: 4.6 },
  },
  {
    id: 5,
    title: "Video Marketing Pro",
    titleAr: "تسويق الفيديو الاحترافي",
    description:
      "AI-powered video creation and optimization for all social platforms",
    descriptionAr: "إنشاء وتحسين الفيديو بالذكاء الاصطناعي لجميع منصات التواصل",
    icon: Video,
    price: 597,
    originalPrice: 897,
    features: [
      "Auto video creation",
      "Platform optimization",
      "Viral content analysis",
      "Thumbnail generation",
      "Performance tracking",
    ],
    featuresAr: [
      "إنشاء فيديو تلقائي",
      "تحسين المنصة",
      "تحليل المحتوى الفيروسي",
      "إنشاء الصور المصغرة",
      "تتبع الأداء",
    ],
    color: "from-red-600 to-pink-700",
    stats: { users: "4K+", roi: "320%", rating: 4.9 },
  },
  {
    id: 6,
    title: "Precision Targeting",
    titleAr: "الاستهداف الدقيق",
    description:
      "Advanced audience targeting using AI-powered demographic and behavioral analysis",
    descriptionAr:
      "استهداف جمهور متقدم باستخدام تحليل ديموغرافي وسلوكي بالذكاء الاصطناعي",
    icon: Target,
    price: 347,
    originalPrice: 497,
    features: [
      "AI audience analysis",
      "Behavioral targeting",
      "Lookalike modeling",
      "Geo-targeting",
      "Interest profiling",
    ],
    featuresAr: [
      "تحليل الجمهور بالذكاء الاصطناعي",
      "الاستهداف السلوكي",
      "نمذجة المتشابهين",
      "الاستهداف الجغرافي",
      "تحليل الاهتمامات",
    ],
    color: "from-green-600 to-emerald-700",
    stats: { users: "2.5K+", roi: "290%", rating: 4.8 },
  },
];

export function InteractiveServices() {
  const { language, translation, isRTL } = useLanguage();
  const { formatPrice } = useCurrency();
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={sectionRef}
      className="py-32 px-4 sm:px-6 lg:px-8 relative"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge className="mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 text-lg px-6 py-2">
            <Zap className="w-5 h-5 mr-2" />
            {language === "ar" ? "خدماتنا المتطورة" : "Our Advanced Services"}
          </Badge>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            {language === "ar" ? (
              <>
                <span className="block">حلول</span>
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ذكية
                </span>
              </>
            ) : (
              <>
                <span className="block">SMART</span>
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  SOLUTIONS
                </span>
              </>
            )}
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            {language === "ar"
              ? "خدمات متكاملة مدعومة بالذكاء الاصطناعي لتحقيق أقصى استفادة من استثماراتك التسويقية"
              : "Complete AI-powered services to maximize your marketing investments and drive exceptional results"}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              className="group relative"
            >
              <Card
                className={`relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 overflow-hidden transition-all duration-500 ${
                  hoveredService === service.id
                    ? "shadow-2xl shadow-purple-500/25"
                    : "hover:border-white/30"
                } ${service.popular ? "ring-2 ring-purple-500/50" : ""}`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-4 py-1">
                      {translation.mostPopular}
                    </Badge>
                  </div>
                )}

                {/* Hover Gradient Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                />

                <CardContent className="p-8 relative z-10">
                  {/* Service Icon & Stats */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <div className="text-right">
                      <div className="flex items-center gap-2 text-yellow-400 mb-1">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-semibold">
                          {service.stats.rating}
                        </span>
                      </div>
                      <div className="text-xs text-gray-400">
                        {service.stats.users} users
                      </div>
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {language === "ar" ? service.titleAr : service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {language === "ar"
                      ? service.descriptionAr
                      : service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {(language === "ar" ? service.featuresAr : service.features)
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            delay: 0.6 + index * 0.1 + featureIndex * 0.05,
                          }}
                        >
                          <CheckCircle
                            className={`w-4 h-4 text-green-400 ${isRTL ? "ml-3" : "mr-3"} flex-shrink-0`}
                          />
                          {feature}
                        </motion.div>
                      ))}
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold text-white">
                          {formatPrice(service.price)}
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                          {formatPrice(service.originalPrice)}
                        </span>
                      </div>
                      <div className="text-xs text-gray-400">
                        {language === "ar" ? "/شهر" : "/month"}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-green-400 font-semibold">
                        +{service.stats.roi} ROI
                      </div>
                      <div className="text-xs text-gray-400">
                        {language === "ar" ? "متوسط العائد" : "avg return"}
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <span className="flex items-center justify-center">
                        {language === "ar"
                          ? "اختر هذه الخدمة"
                          : "Choose This Service"}
                        <ArrowRight
                          className={`w-5 h-5 ${isRTL ? "mr-2 rotate-180" : "ml-2"} group-hover:translate-x-1 transition-transform`}
                        />
                      </span>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-gray-300 mb-8 text-lg">
            {language === "ar"
              ? "هل تحتاج خدمة مخصصة؟ تحدث مع خبرائنا"
              : "Need a custom solution? Talk to our experts"}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-lg px-8 py-4 text-lg"
            >
              <Users className={`w-5 h-5 ${isRTL ? "ml-3" : "mr-3"}`} />
              {language === "ar" ? "استشارة مجانية" : "Free Consultation"}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Service Selection Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-white/20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {language === "ar" ? "اختيار ممتاز!" : "Great Choice!"}
              </h3>
              <p className="text-gray-300 mb-6">
                {language === "ar"
                  ? "سيتم توجيهك إلى صفحة الدفع لإكمال طلبك"
                  : "You will be redirected to the payment page to complete your order"}
              </p>
              <div className="flex gap-4">
                <Button
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500"
                  onClick={() => {
                    setSelectedService(null);
                    // Redirect to payment page
                    window.location.href = "/payment";
                  }}
                >
                  {language === "ar" ? "المتابعة للدفع" : "Continue to Payment"}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedService(null)}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  {language === "ar" ? "إلغاء" : "Cancel"}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
