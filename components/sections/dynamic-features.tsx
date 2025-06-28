"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Zap,
  Shield,
  Globe,
  BarChart3,
  Users,
  Clock,
  Target,
  Cpu,
  Database,
  Rocket,
  Star,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Advanced AI Engine",
    titleAr: "محرك ذكاء اصطناعي متطور",
    description:
      "Our proprietary AI algorithms learn and adapt to your business needs in real-time",
    descriptionAr:
      "خوارزميات الذكاء الاصطناعي المملوكة لنا تتعلم وتتكيف مع احتياجات عملك في الوقت الفعلي",
    icon: Brain,
    color: "from-purple-500 to-violet-600",
    stats: "99.9% Accuracy",
    statsAr: "99.9% دقة",
    benefits: [
      "Machine learning optimization",
      "Real-time decision making",
      "Predictive analytics",
      "Automated insights",
    ],
    benefitsAr: [
      "تحسين التعلم الآلي",
      "اتخاذ قرارات في الوقت الفعلي",
      "تحليلات تنبؤية",
      "رؤى تلقائية",
    ],
  },
  {
    id: 2,
    title: "Lightning Performance",
    titleAr: "أداء سريع البرق",
    description:
      "Ultra-fast processing with global CDN and edge computing for instant results",
    descriptionAr:
      "معالجة فائقة السرعة مع شبكة توصيل المحتوى العالمية والحوسبة الطرفية للنتائج الفورية",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
    stats: "<100ms Response",
    statsAr: "<100ms استجابة",
    benefits: [
      "Global edge servers",
      "Optimized algorithms",
      "Real-time processing",
      "Instant updates",
    ],
    benefitsAr: [
      "خوادم طرفية عالمية",
      "خوارزميات محسنة",
      "معالجة في الوقت الفعلي",
      "تحديثات فورية",
    ],
  },
  {
    id: 3,
    title: "Enterprise Security",
    titleAr: "أمان المؤسسات",
    description:
      "Bank-grade security with end-to-end encryption and compliance certifications",
    descriptionAr: "أمان على مستوى البنوك مع تشفير شامل وشهادات امتثال",
    icon: Shield,
    color: "from-green-500 to-emerald-600",
    stats: "SOC 2 Certified",
    statsAr: "معتمد SOC 2",
    benefits: [
      "End-to-end encryption",
      "GDPR compliant",
      "Regular audits",
      "Multi-factor auth",
    ],
    benefitsAr: [
      "تشفير شامل",
      "متوافق مع GDPR",
      "مراجعات دورية",
      "مصادقة متعددة العوامل",
    ],
  },
  {
    id: 4,
    title: "Global Scale",
    titleAr: "نطاق عالمي",
    description:
      "Worldwide infrastructure supporting millions of campaigns across 50+ countries",
    descriptionAr: "بنية تحتية عالمية تدعم ملايين الحملات عبر أكثر من 50 دولة",
    icon: Globe,
    color: "from-blue-500 to-cyan-600",
    stats: "50+ Countries",
    statsAr: "+50 دولة",
    benefits: [
      "Multi-region deployment",
      "Local data centers",
      "Cultural adaptation",
      "24/7 global support",
    ],
    benefitsAr: [
      "نشر متعدد المناطق",
      "مراكز بيانات محلية",
      "تكيف ثقافي",
      "دعم عالمي 24/7",
    ],
  },
  {
    id: 5,
    title: "Smart Analytics",
    titleAr: "تحليلات ذكية",
    description:
      "Advanced data analytics with AI-powered insights and predictive modeling",
    descriptionAr:
      "تحليلات بيانات متقدمة مع رؤى مدعومة بالذكاء الاصطناعي ونمذجة تنبؤية",
    icon: BarChart3,
    color: "from-indigo-500 to-purple-600",
    stats: "1B+ Data Points",
    statsAr: "+مليار نقطة بيانات",
    benefits: [
      "Real-time dashboards",
      "Custom reporting",
      "Predictive analytics",
      "Data visualization",
    ],
    benefitsAr: [
      "لوحات في الوقت الفعلي",
      "تقارير مخصصة",
      "تحليلات تنبؤية",
      "تصور البيانات",
    ],
  },
  {
    id: 6,
    title: "Team Collaboration",
    titleAr: "تعاون الفريق",
    description:
      "Advanced team management with role-based access and collaboration tools",
    descriptionAr: "إدارة فريق متقدمة مع وصول قائم على الأدوار وأدوات تعاون",
    icon: Users,
    color: "from-pink-500 to-rose-600",
    stats: "Unlimited Teams",
    statsAr: "فرق غير محدودة",
    benefits: [
      "Role-based permissions",
      "Real-time collaboration",
      "Activity tracking",
      "Team analytics",
    ],
    benefitsAr: [
      "أذونات قائمة على الأدوار",
      "تعاون في الوقت الفعلي",
      "تتبع النشاط",
      "تحليلات الفريق",
    ],
  },
];

export function DynamicFeatures() {
  const { language, isRTL } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={sectionRef}
      className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-40 left-10 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
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
          <Badge className="mb-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 border-green-500/30 text-lg px-6 py-2">
            <Cpu className="w-5 h-5 mr-2" />
            {language === "ar" ? "تقنية متطورة" : "Advanced Technology"}
          </Badge>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            {language === "ar" ? (
              <>
                <span className="block">قوة</span>
                <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  التكنولوجيا
                </span>
              </>
            ) : (
              <>
                <span className="block">POWERED BY</span>
                <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  TECHNOLOGY
                </span>
              </>
            )}
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            {language === "ar"
              ? "تقنيات متقدمة وحلول ذكية مصممة لتحقيق أفضل النتائج في التسويق الرقمي"
              : "Advanced technologies and smart solutions designed to deliver exceptional digital marketing results"}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`group p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  activeFeature === feature.id
                    ? "bg-gradient-to-r from-white/10 to-white/5 border-white/30 shadow-2xl"
                    : "bg-white/5 border-white/10 hover:border-white/20"
                }`}
                onClick={() => setActiveFeature(feature.id)}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} flex-shrink-0`}
                    animate={
                      activeFeature === feature.id
                        ? { scale: 1.1, rotate: 360 }
                        : { scale: 1, rotate: 0 }
                    }
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3
                        className={`text-xl font-bold transition-colors duration-300 ${
                          activeFeature === feature.id
                            ? "text-white"
                            : "text-gray-300"
                        }`}
                      >
                        {language === "ar" ? feature.titleAr : feature.title}
                      </h3>

                      <Badge
                        className={`text-xs ${
                          activeFeature === feature.id
                            ? "bg-white/20 text-white"
                            : "bg-white/10 text-gray-400"
                        }`}
                      >
                        {language === "ar" ? feature.statsAr : feature.stats}
                      </Badge>
                    </div>

                    <p
                      className={`text-sm mb-4 transition-colors duration-300 ${
                        activeFeature === feature.id
                          ? "text-gray-300"
                          : "text-gray-400"
                      }`}
                    >
                      {language === "ar"
                        ? feature.descriptionAr
                        : feature.description}
                    </p>

                    {/* Benefits (shown only for active feature) */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={
                        activeFeature === feature.id
                          ? { opacity: 1, height: "auto" }
                          : { opacity: 0, height: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        {(language === "ar"
                          ? feature.benefitsAr
                          : feature.benefits
                        ).map((benefit, benefitIndex) => (
                          <motion.div
                            key={benefitIndex}
                            className="flex items-center text-xs text-green-400"
                            initial={{ opacity: 0, x: -10 }}
                            animate={
                              activeFeature === feature.id
                                ? { opacity: 1, x: 0 }
                                : {}
                            }
                            transition={{ delay: benefitIndex * 0.1 }}
                          >
                            <CheckCircle
                              className={`w-3 h-3 ${isRTL ? "ml-2" : "mr-2"} flex-shrink-0`}
                            />
                            {benefit}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Showcase */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 h-96 overflow-hidden">
              {/* Dynamic Content Based on Active Feature */}
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="h-full flex flex-col justify-center items-center text-center"
              >
                {(() => {
                  const currentFeature = features.find(
                    (f) => f.id === activeFeature,
                  );
                  if (!currentFeature) return null;

                  return (
                    <>
                      <motion.div
                        className={`p-6 rounded-3xl bg-gradient-to-r ${currentFeature.color} mb-6`}
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <currentFeature.icon className="w-12 h-12 text-white" />
                      </motion.div>

                      <h3 className="text-2xl font-bold text-white mb-4">
                        {language === "ar"
                          ? currentFeature.titleAr
                          : currentFeature.title}
                      </h3>

                      <p className="text-gray-300 mb-6">
                        {language === "ar"
                          ? currentFeature.descriptionAr
                          : currentFeature.description}
                      </p>

                      <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">
                            {language === "ar"
                              ? currentFeature.statsAr
                              : currentFeature.stats}
                          </div>
                          <div className="text-xs text-gray-400">
                            {language === "ar" ? "الأداء" : "Performance"}
                          </div>
                        </div>
                        <div className="w-px h-8 bg-white/20"></div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-400">
                            99.9%
                          </div>
                          <div className="text-xs text-gray-400">
                            {language === "ar" ? "الموثوقية" : "Reliability"}
                          </div>
                        </div>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          className={`bg-gradient-to-r ${currentFeature.color} hover:opacity-90 text-white px-6 py-2`}
                        >
                          {language === "ar" ? "اكتشف المزيد" : "Learn More"}
                          <ArrowRight
                            className={`w-4 h-4 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`}
                          />
                        </Button>
                      </motion.div>
                    </>
                  );
                })()}
              </motion.div>

              {/* Background Decorations */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
              animate={{
                y: [0, 10, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            {language === "ar"
              ? "جاهز لتجربة القوة الحقيقية؟"
              : "Ready to Experience the Power?"}
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {language === "ar"
              ? "ابدأ رحلتك مع أحدث التقنيات في التسويق الرقمي واحصل على نتائج استثنائية"
              : "Start your journey with cutting-edge digital marketing technology and get exceptional results"}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg"
            >
              <Rocket className={`w-5 h-5 ${isRTL ? "ml-3" : "mr-3"}`} />
              {language === "ar" ? "ابدأ الآن" : "Get Started Now"}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
