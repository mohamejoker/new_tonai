"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SocialMediaIcons } from "@/components/ui/social-media-icons";
import { AnimatedSlider } from "@/components/ui/animated-slider";
import {
  Brain,
  ArrowRight,
  Play,
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Globe,
  Bot,
  Target,
  DollarSign,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";

interface HeroSectionProps {
  stats: Array<{
    label: string;
    labelAr: string;
    value: string;
    icon: any;
    color: string;
  }>;
}

export function HeroSection({ stats }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { translation, language, isRTL } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const heroSlides = [
    {
      id: 1,
      title: "AI-Powered Campaign Optimization",
      titleAr: "تحسين الحملات بالذكاء الاصطناعي",
      description:
        "Our AI agents automatically optimize your campaigns for maximum ROI across all platforms",
      descriptionAr:
        "وكلاؤنا الذكيون يحسنون حملاتك تلقائياً لأقصى عائد استثمار عبر جميع المنصات",
      component: (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-4 text-center">
            <Bot className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <p className="text-white text-sm">AI Agents</p>
          </div>
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 text-center">
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-white text-sm">+300% ROI</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-xl p-4 text-center">
            <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <p className="text-white text-sm">Real-time</p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Multi-Platform Management",
      titleAr: "إدارة متعددة المنصات",
      description:
        "Manage all your social media platforms from one powerful AI-driven dashboard",
      descriptionAr:
        "أدر جميع منصات التواصل الاجتماعي من لوحة تحكم واحدة مدعومة بالذكاء الاصطناعي",
      component: <SocialMediaIcons variant="default" showLabels={false} />,
    },
    {
      id: 3,
      title: "Global Reach & Analytics",
      titleAr: "الوصول العالمي والتحليلات",
      description:
        "Scale your business globally with AI-powered insights and 24/7 monitoring",
      descriptionAr:
        "قم بتوسيع عملك عا��مياً برؤى الذكاء الاصطناعي والمراقبة على مدار الساعة",
      component: (
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-xl p-4 text-center">
            <Globe className="w-8 h-8 text-orange-400 mx-auto mb-2" />
            <p className="text-white text-sm">45+ Countries</p>
          </div>
          <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-xl p-4 text-center">
            <Shield className="w-8 h-8 text-pink-400 mx-auto mb-2" />
            <p className="text-white text-sm">99.9% Uptime</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            rotate: [360, 180, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl"
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 200,
            }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30 animate-pulse-soft text-lg px-6 py-2">
              <Sparkles className="w-5 h-5 mr-2" />
              {translation.aiPoweredRevolution}
            </Badge>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {translation.automateMarketing}
            <br />
            <motion.span
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient"
              style={{ backgroundSize: "400% 400%" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              {translation.digitalMarketing}
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-10 max-w-5xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {translation.heroDescription}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-xl px-12 py-6 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                {translation.startFreeTrial}
                <ArrowRight
                  className={`${isRTL ? "mr-3 rotate-180" : "ml-3"} w-6 h-6`}
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-xl px-12 py-6 backdrop-blur-sm"
              >
                {translation.watchDemo}
                <Play className={`${isRTL ? "mr-3" : "ml-3"} w-6 h-6`} />
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 mb-16 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>{language === "ar" ? "آمن 100%" : "100% Secure"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span>{language === "ar" ? "دعم 24/7" : "24/7 Support"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-400" />
              <span>{language === "ar" ? "+8000 عميل" : "8000+ Clients"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>{language === "ar" ? "إعداد فوري" : "Instant Setup"}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Interactive Demo Slider */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <AnimatedSlider
            slides={heroSlides}
            language={language}
            className="max-w-5xl mx-auto"
            autoPlayInterval={6000}
          />
        </motion.div>

        {/* Enhanced Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group cursor-pointer"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 1.6 + index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ y: -15, scale: 1.1 }}
            >
              <motion.div
                className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${stat.color} rounded-3xl mb-4 group-hover:shadow-2xl transition-all duration-300 shadow-lg`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
              </motion.div>
              <motion.div
                className="text-3xl md:text-4xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.8 + index * 0.1,
                  type: "spring",
                  stiffness: 300,
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors">
                {language === "ar" ? stat.labelAr : stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating Social Media Icons */}
      <SocialMediaIcons variant="floating" showLabels={true} />
    </section>
  );
}
