"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { useCurrency } from "@/hooks/use-currency";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Check,
  Star,
  Zap,
  Crown,
  Rocket,
  ArrowRight,
  Shield,
  Users,
  BarChart3,
  Headphones,
  Globe,
  Database,
} from "lucide-react";

const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    nameAr: "المبتدئ",
    description: "Perfect for small businesses and startups",
    descriptionAr: "مثالي للشركات الصغيرة والناشئة",
    monthlyPrice: 97,
    yearlyPrice: 97 * 10, // 2 months free
    icon: Zap,
    color: "from-blue-500 to-cyan-600",
    popular: false,
    features: [
      "2 AI Marketing Campaigns",
      "Basic Analytics Dashboard",
      "Email & Chat Support",
      "5 Social Media Platforms",
      "10,000 Monthly Impressions",
      "Standard Templates",
      "Basic Automation",
      "Mobile App Access",
    ],
    featuresAr: [
      "حملتان للتسويق بالذكاء الاصطناعي",
      "لوحة تحليلات أساسية",
      "دعم البريد والدردشة",
      "5 منصات وسائل تواصل",
      "10,000 ظهور شهري",
      "قوالب قياسية",
      "أتمتة أساسية",
      "وصول تطبيق الهاتف",
    ],
    limits: ["2 Team Members", "Basic Reporting", "Standard Support"],
    limitsAr: ["عضوان في الفريق", "تقارير أساسية", "دعم قياسي"],
  },
  {
    id: "professional",
    name: "Professional",
    nameAr: "المحترف",
    description: "For growing businesses and marketing teams",
    descriptionAr: "للشركات النامية وفرق التسويق",
    monthlyPrice: 297,
    yearlyPrice: 297 * 10, // 2 months free
    icon: Crown,
    color: "from-purple-500 to-violet-600",
    popular: true,
    features: [
      "10 AI Marketing Campaigns",
      "Advanced Analytics & Insights",
      "Priority Support (24/7)",
      "All Social Media Platforms",
      "100,000 Monthly Impressions",
      "Premium Templates",
      "Advanced Automation",
      "Custom Integrations",
      "A/B Testing Suite",
      "Competitor Analysis",
      "White-label Options",
      "API Access",
    ],
    featuresAr: [
      "10 حملات تسويق بالذكاء الاصطناعي",
      "تحليلات ورؤى متقدمة",
      "دعم أول��ية (24/7)",
      "جميع منصات وسائل التواصل",
      "100,000 ظهور شهري",
      "قوالب مميزة",
      "أتمتة متقدمة",
      "تكاملات مخصصة",
      "مجموعة اختبار A/B",
      "تحليل المنافسين",
      "خيارات العلامة البيضاء",
      "وصول API",
    ],
    limits: ["10 Team Members", "Advanced Reporting", "Priority Support"],
    limitsAr: ["10 أعضاء في الفريق", "تقارير متقدمة", "دعم أولوية"],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    nameAr: "المؤسسات",
    description: "For large organizations and agencies",
    descriptionAr: "للمؤسسات الكبيرة والوكالات",
    monthlyPrice: 797,
    yearlyPrice: 797 * 10, // 2 months free
    icon: Rocket,
    color: "from-orange-500 to-red-600",
    popular: false,
    features: [
      "Unlimited AI Campaigns",
      "Enterprise Analytics Suite",
      "Dedicated Account Manager",
      "All Platforms + Custom",
      "Unlimited Impressions",
      "Custom Templates & Branding",
      "Full Automation Suite",
      "Custom Development",
      "Advanced A/B Testing",
      "Comprehensive Competitor Analysis",
      "Full White-label Solution",
      "Priority API Access",
      "Custom Training",
      "SLA Guarantee",
    ],
    featuresAr: [
      "حملات ذكاء اصطناعي غير محدودة",
      "مجموعة تحليلات المؤسسات",
      "مدير حساب مخصص",
      "جميع المنصات + مخصصة",
      "ظهورات غير محدودة",
      "قوالب مخصصة وعلامة تجارية",
      "مجموعة أتمتة كاملة",
      "تطوير مخصص",
      "اختبار A/B متقدم",
      "تحليل شامل للمنافسين",
      "حل علامة بيضاء كامل",
      "وصول API أولوية",
      "تدريب مخصص",
      "ضمان SLA",
    ],
    limits: [
      "Unlimited Team Members",
      "Enterprise Reporting",
      "Dedicated Support",
    ],
    limitsAr: ["أعضاء فريق غير محدودين", "تقارير المؤسسات", "دعم مخصص"],
  },
];

const additionalFeatures = [
  {
    icon: Shield,
    title: "99.9% Uptime SLA",
    titleAr: "ضمان وقت تشغيل 99.9%",
  },
  {
    icon: Database,
    title: "Advanced Data Security",
    titleAr: "أمان بيانات متقدم",
  },
  {
    icon: Globe,
    title: "Global CDN Network",
    titleAr: "شبكة CDN عالمية",
  },
  {
    icon: Users,
    title: "Expert Training Included",
    titleAr: "تدريب خبراء مشمول",
  },
];

export function SmartPricing() {
  const { language, translation, isRTL } = useLanguage();
  const { formatPrice } = useCurrency();
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const calculatePrice = (plan: (typeof pricingPlans)[0]) => {
    return isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  };

  const calculateSavings = (plan: (typeof pricingPlans)[0]) => {
    const monthlyTotal = plan.monthlyPrice * 12;
    const yearlySaving = monthlyTotal - plan.yearlyPrice;
    return yearlySaving;
  };

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
          className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge className="mb-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border-orange-500/30 text-lg px-6 py-2">
            <Star className="w-5 h-5 mr-2" />
            {language === "ar"
              ? "أسعار ذكية ومرنة"
              : "Smart & Flexible Pricing"}
          </Badge>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            {language === "ar" ? (
              <>
                <span className="block">خطط</span>
                <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  مثالية
                </span>
              </>
            ) : (
              <>
                <span className="block">PERFECT</span>
                <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  PLANS
                </span>
              </>
            )}
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
            {language === "ar"
              ? "اختر الخطة التي تناسب احتياجاتك وتنمو معك. جميع الخطط تشمل ضمان استرداد الأموال لمدة 30 يوماً"
              : "Choose the plan that fits your needs and grows with you. All plans include 30-day money-back guarantee"}
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span
              className={`text-lg font-medium ${!isYearly ? "text-white" : "text-gray-400"}`}
            >
              {language === "ar" ? "شهري" : "Monthly"}
            </span>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-green-500 data-[state=checked]:to-emerald-600"
              />
            </motion.div>
            <span
              className={`text-lg font-medium ${isYearly ? "text-white" : "text-gray-400"}`}
            >
              {language === "ar" ? "سنوي" : "Yearly"}
            </span>
            {isYearly && (
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30 ml-2">
                {language === "ar" ? "وفر شهرين" : "Save 2 Months"}
              </Badge>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredPlan(plan.id)}
              onHoverEnd={() => setHoveredPlan(null)}
              className="relative group"
            >
              <Card
                className={`relative h-full overflow-hidden transition-all duration-500 ${
                  plan.popular
                    ? "bg-gradient-to-br from-white/15 to-white/5 border-2 border-purple-500/50 shadow-2xl shadow-purple-500/25"
                    : "bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-white/30"
                } ${hoveredPlan === plan.id ? "shadow-2xl" : ""}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-6 py-2 shadow-lg">
                      {translation.mostPopular}
                    </Badge>
                  </div>
                )}

                {/* Background Gradient Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                />

                <CardContent className="p-8 relative z-10">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <motion.div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${plan.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <plan.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      {language === "ar" ? plan.nameAr : plan.name}
                    </h3>

                    <p className="text-gray-400 text-sm mb-6">
                      {language === "ar"
                        ? plan.descriptionAr
                        : plan.description}
                    </p>

                    {/* Pricing */}
                    <div className="mb-4">
                      <motion.div
                        className="text-4xl md:text-5xl font-black text-white"
                        key={isYearly ? "yearly" : "monthly"}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {formatPrice(calculatePrice(plan))}
                      </motion.div>
                      <div className="text-gray-400 text-sm">
                        {isYearly
                          ? language === "ar"
                            ? "/سنة"
                            : "/year"
                          : language === "ar"
                            ? "/شهر"
                            : "/month"}
                      </div>
                      {isYearly && plan.monthlyPrice > 0 && (
                        <div className="text-green-400 text-sm font-medium mt-1">
                          {language === "ar"
                            ? `وفر ${formatPrice(calculateSavings(plan))} سنوياً`
                            : `Save ${formatPrice(calculateSavings(plan))} yearly`}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {(language === "ar" ? plan.featuresAr : plan.features).map(
                      (feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-start text-sm text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            delay: 0.6 + index * 0.1 + featureIndex * 0.03,
                          }}
                        >
                          <Check
                            className={`w-4 h-4 text-green-400 ${isRTL ? "ml-3" : "mr-3"} flex-shrink-0 mt-0.5`}
                          />
                          <span>{feature}</span>
                        </motion.div>
                      ),
                    )}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className={`w-full font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl ${
                        plan.popular
                          ? `bg-gradient-to-r ${plan.color} hover:opacity-90 text-white`
                          : "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30"
                      }`}
                      onClick={() => {
                        setSelectedPlan(plan.id);
                        // Redirect to payment with selected plan
                        window.location.href = `/payment?plan=${plan.id}&billing=${isYearly ? "yearly" : "monthly"}`;
                      }}
                    >
                      <span className="flex items-center justify-center">
                        {language === "ar"
                          ? "اختر هذه الخطة"
                          : "Choose This Plan"}
                        <ArrowRight
                          className={`w-5 h-5 ${isRTL ? "mr-2 rotate-180" : "ml-2"} group-hover:translate-x-1 transition-transform`}
                        />
                      </span>
                    </Button>
                  </motion.div>

                  {/* Plan Limits */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="text-xs text-gray-500 space-y-1">
                      {(language === "ar" ? plan.limitsAr : plan.limits).map(
                        (limit, limitIndex) => (
                          <div key={limitIndex}>{limit}</div>
                        ),
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            {language === "ar"
              ? "مميزات إضافية مع جميع الخطط"
              : "Additional Features With All Plans"}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-white text-sm font-medium">
                  {language === "ar" ? feature.titleAr : feature.title}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-400 text-lg mb-8">
            {language === "ar"
              ? "لديك أسئلة؟ تحدث مع خبرائنا للحصول على استشارة مجانية"
              : "Have questions? Talk to our experts for a free consultation"}
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-lg px-8 py-4 text-lg"
            >
              <Headphones className={`w-5 h-5 ${isRTL ? "ml-3" : "mr-3"}`} />
              {language === "ar" ? "تحدث مع خبير" : "Talk to Expert"}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
