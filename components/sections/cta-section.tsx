"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Clock,
  CheckCircle,
  Star,
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Instant Setup",
    titleAr: "إعداد فوري",
    description: "Get started in minutes, not hours",
    descriptionAr: "ابدأ في دقائق، وليس ساعات",
  },
  {
    icon: Shield,
    title: "99.9% Uptime",
    titleAr: "99.9% وقت التشغيل",
    description: "Reliable service you can count on",
    descriptionAr: "خدمة موثوقة يمكنك الاعتماد عليها",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    titleAr: "دعم 24/7",
    description: "Expert help whenever you need it",
    descriptionAr: "مساعدة خبراء متى احتجتها",
  },
  {
    icon: Star,
    title: "Proven Results",
    titleAr: "نتائج مثبتة",
    description: "Thousands of successful campaigns",
    descriptionAr: "آلاف الحملات الناجحة",
  },
];

const testimonialHighlights = [
  {
    text: "Increased our ROI by 300% in just 3 months",
    textAr: "زاد عائد الاستثمار لدينا بنسبة 300% في 3 أشهر فقط",
    author: "Sarah Johnson, CEO",
  },
  {
    text: "The AI agents saved us 40 hours per week",
    textAr: "وكلاء الذكاء الاصطناعي وفروا لنا 40 ساعة أسبوعياً",
    author: "Ahmed Al-Rashid, CMO",
  },
  {
    text: "Best marketing investment we've ever made",
    textAr: "أفضل استثمار تسويقي قمنا به على الإطلاق",
    author: "Maria Garcia, Founder",
  },
];

export function CTASection() {
  const { translation, language, isRTL } = useLanguage();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/5 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main CTA */}
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 animate-pulse-soft">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {language === "ar"
              ? "جاهز لتحويل تسويقك؟"
              : "Ready to Transform Your Marketing?"}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            {language === "ar"
              ? "انضم إلى آلاف الشركات التي تستخدم الذكاء الاصطناعي لتنمية أعمالها"
              : "Join thousands of businesses using AI to grow their revenue"}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-12 py-4 shadow-2xl hover:shadow-purple-500/25"
              >
                {translation.startFreeTrial}
                <ArrowRight
                  className={`w-6 h-6 ${isRTL ? "mr-3 rotate-180" : "ml-3"}`}
                />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-lg px-12 py-4"
              >
                {translation.watchDemo}
              </Button>
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm">
                {language === "ar" ? "نسخة تجريبية مجانية" : "Free trial"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm">
                {language === "ar" ? "بدون التزام" : "No commitment"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm">
                {language === "ar" ? "إعداد في دقائق" : "Setup in minutes"}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="bg-white/5 border-white/10 text-center hover:bg-white/10 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {language === "ar" ? benefit.titleAr : benefit.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {language === "ar"
                      ? benefit.descriptionAr
                      : benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Highlights */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {testimonialHighlights.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <blockquote className="text-white italic mb-4">
                    "{language === "ar" ? testimonial.textAr : testimonial.text}
                    "
                  </blockquote>
                  <cite className="text-gray-400 text-sm">
                    {testimonial.author}
                  </cite>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
