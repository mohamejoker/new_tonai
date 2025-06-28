"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/use-language";
import {
  Sparkles,
  ArrowRight,
  Play,
  Zap,
  Bot,
  Rocket,
  Stars,
  Cpu,
  Database,
  Shield,
  Brain,
  Globe,
  Target,
  TrendingUp,
} from "lucide-react";

export function ModernHero() {
  const { translation, language, isRTL } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const features = [
    {
      icon: Bot,
      title: "AI-Powered",
      titleAr: "مدعوم بالذكاء الاصطناعي",
      description: "Advanced AI algorithms",
      descriptionAr: "خوارزميات ذكاء اصطناعي متطورة",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      titleAr: "سريع البرق",
      description: "Instant processing",
      descriptionAr: "معالجة فورية",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      titleAr: "أمان المؤسسات",
      description: "Bank-level encryption",
      descriptionAr: "تشفير مستوى البنوك",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Database,
      title: "Real-time Analytics",
      titleAr: "تحليلات فورية",
      description: "Live data insights",
      descriptionAr: "رؤى البيانات المباشرة",
      color: "from-blue-500 to-cyan-600",
    },
  ];

  const stats = [
    {
      value: "250K+",
      label: "Active Users",
      labelAr: "مستخدم نشط",
      icon: Target,
    },
    {
      value: "500%",
      label: "ROI Average",
      labelAr: "متوسط العائد",
      icon: TrendingUp,
    },
    { value: "99.9%", label: "Uptime", labelAr: "وقت التشغيل", icon: Shield },
    { value: "24/7", label: "AI Support", labelAr: "دعم ذكي", icon: Bot },
  ];

  return (
    <motion.section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Modern CSS Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Floating Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-xl opacity-20"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              background: `radial-gradient(circle, ${
                [
                  "#8B5CF6",
                  "#06B6D4",
                  "#10B981",
                  "#F59E0B",
                  "#EF4444",
                  "#EC4899",
                ][i]
              }, transparent)`,
              left: `${15 + i * 15}%`,
              top: `${10 + i * 12}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Geometric Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-12 w-full h-full">
            {[...Array(144)].map((_, i) => (
              <motion.div
                key={i}
                className="border border-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.01,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Hero Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge className="mb-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30 text-lg px-8 py-3 backdrop-blur-lg">
            <Sparkles className="w-5 h-5 mr-3" />
            {language === "ar"
              ? "الجيل القادم من التسويق الذكي"
              : "Next-Gen AI Marketing Platform"}
            <Stars className="w-5 h-5 ml-3" />
          </Badge>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 mb-8 leading-tight">
            {language === "ar" ? (
              <>
                <span className="block">الذكاء</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text">
                  الاصطناعي
                </span>
                <span className="block">للتسويق</span>
              </>
            ) : (
              <>
                <span className="block">SMART</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text">
                  MARKETING
                </span>
                <span className="block">REVOLUTION</span>
              </>
            )}
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {language === "ar"
            ? "منصة ثورية تجمع بين الذكاء الاصطناعي والتسويق الرقمي لتحقيق نتائج استثنائية وقابلة للقياس"
            : "Revolutionary platform combining AI and digital marketing for exceptional, measurable results"}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xl px-12 py-6 rounded-2xl shadow-2xl border-0 overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                <Rocket
                  className={`w-6 h-6 ${isRTL ? "ml-3" : "mr-3"} transition-transform group-hover:rotate-12`}
                />
                {language === "ar" ? "ابدأ رحلتك الآن" : "Start Your Journey"}
                <ArrowRight
                  className={`w-6 h-6 ${isRTL ? "mr-3 rotate-180" : "ml-3"} transition-transform group-hover:translate-x-1`}
                />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                initial={{ x: "-100%" }}
                animate={isHovered ? { x: "0%" } : { x: "-100%" }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/20 text-white hover:bg-white/10 text-xl px-12 py-6 rounded-2xl backdrop-blur-lg"
            >
              <Play className={`w-6 h-6 ${isRTL ? "ml-3" : "mr-3"}`} />
              {language === "ar" ? "شاهد العرض التوضيحي" : "Watch Demo"}
            </Button>
          </motion.div>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:rotate-12 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {language === "ar" ? feature.titleAr : feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {language === "ar"
                  ? feature.descriptionAr
                  : feature.description}
              </p>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0.3, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
