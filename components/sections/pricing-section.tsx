"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { useCurrency } from "@/hooks/use-currency";

const pricingPlans = [
  {
    name: "Free",
    nameAr: "مجاني",
    price: 0,
    description: "Get started with basic AI marketing tools",
    descriptionAr: "ابدأ بأدوات التسويق الأساسية بالذكاء الاصطناعي",
    features: [
      "Basic campaign optimization",
      "Up to 2 social platforms",
      "1,000 monthly ad impressions",
      "Email support",
      "Basic analytics dashboard",
    ],
    featuresAr: [
      "تحسين الحملات الأساسي",
      "حتى منصتين اجتماعيتين",
      "1,000 ظهور إعلاني شهرياً",
      "دعم البريد الإلكتروني",
      "لوحة تحليلات أساسية",
    ],
    buttonText: "Start Free",
    buttonTextAr: "ابدأ مجاناً",
    popular: false,
  },
  {
    name: "Premium",
    nameAr: "مميز",
    price: 97,
    description: "Perfect for growing businesses and influencers",
    descriptionAr: "مثالي للشركات النامية والمؤثرين",
    features: [
      "Advanced AI optimization",
      "All 6 advertising platforms",
      "50,000 monthly impressions",
      "Organic growth tools",
      "Priority chat support",
      "Advanced analytics",
      "A/B testing automation",
      "Custom audience creation",
    ],
    featuresAr: [
      "تحسين متقدم بالذكاء الاصطناعي",
      "جميع المنصات الإعلانية الستة",
      "50,000 ظهور شهرياً",
      "أدوات النمو الطبيعي",
      "دعم دردشة أولوية",
      "تحليلات متقدمة",
      "أتمتة اختبار A/B",
      "إنشاء جمهور مخصص",
    ],
    buttonText: "Get Premium",
    buttonTextAr: "احصل على المميز",
    popular: true,
  },
  {
    name: "Enterprise",
    nameAr: "للمؤسسات",
    price: 297,
    description: "For agencies and large-scale operations",
    descriptionAr: "للوكالات والعمليات واسعة النطاق",
    features: [
      "Full AI automation suite",
      "Unlimited platforms & impressions",
      "White-label dashboard",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom integrations",
      "Multi-client management",
      "Advanced reporting & API access",
    ],
    featuresAr: [
      "مجموعة الأتمتة الكاملة بالذكاء الاصطناعي",
      "منصات وظهورات غير محدودة",
      "لوحة تحكم بعلامة بيضاء",
      "مدير حساب مخصص",
      "دعم هاتفي 24/7",
      "تكاملات مخصصة",
      "إدارة عملاء متعددين",
      "تقارير متقدمة والوصول لـ API",
    ],
    buttonText: "Contact Sales",
    buttonTextAr: "اتصل بالمبيعات",
    popular: false,
  },
];

export function PricingSection() {
  const { translation, language, isRTL } = useLanguage();
  const { formatPrice } = useCurrency();

  return (
    <section
      id="pricing"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {translation.choosePlan}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {translation.pricingDescription}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative"
            >
              <Card
                className={`relative h-full ${
                  plan.popular
                    ? "bg-gradient-to-b from-purple-500/20 to-pink-500/20 border-purple-500/50 shadow-2xl shadow-purple-500/25"
                    : "bg-white/10 border-white/20"
                } backdrop-blur-sm transition-all duration-300 hover:shadow-2xl`}
              >
                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
                      {translation.mostPopular}
                    </Badge>
                  </motion.div>
                )}

                <CardHeader className="text-center">
                  <CardTitle className="text-white text-2xl mb-2">
                    {language === "ar" ? plan.nameAr : plan.name}
                  </CardTitle>
                  <motion.div
                    className="text-4xl md:text-5xl font-bold text-white mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}
                  >
                    {plan.price === 0
                      ? language === "ar"
                        ? "مجاناً"
                        : "Free"
                      : formatPrice(plan.price)}
                    {plan.price > 0 && (
                      <span className="text-lg text-gray-400 font-normal">
                        {translation.month}
                      </span>
                    )}
                  </motion.div>
                  <CardDescription className="text-gray-300">
                    {language === "ar" ? plan.descriptionAr : plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {(language === "ar" ? plan.featuresAr : plan.features).map(
                      (feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-center text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.5 + featureIndex * 0.05,
                          }}
                          viewport={{ once: true }}
                        >
                          <Check
                            className={`w-5 h-5 text-green-400 ${isRTL ? "ml-3" : "mr-3"} flex-shrink-0`}
                          />
                          <span className="text-sm md:text-base">
                            {feature}
                          </span>
                        </motion.li>
                      ),
                    )}
                  </ul>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl"
                          : "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30"
                      } transition-all duration-300`}
                    >
                      {language === "ar" ? plan.buttonTextAr : plan.buttonText}
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            {language === "ar"
              ? "جميع الخطط تشمل ضمان استرداد الأموال لمدة 30 يوماً"
              : "All plans include 30-day money-back guarantee"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
