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
  Target,
  DollarSign,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";

interface HeroSectionProps {
  stats: Array<{
    label: string;
    labelAr: string;
    value: string;
    icon: any;
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
      title: "AI-Powered Automation",
      titleAr: "الأتمتة بالذكاء الاصطناعي",
      description:
        "Let our AI handle your campaigns while you focus on growing your business",
      descriptionAr: "دع الذكاء الاصطناعي يتولى حملاتك بينما تركز على نمو عملك",
      component: <SocialMediaIcons variant="default" showLabels={false} />,
    },
    {
      id: 2,
      title: "Multi-Platform Management",
      titleAr: "إدارة متعددة المنصات",
      description:
        "Manage all your social media platforms from one powerful dashboard",
      descriptionAr: "أدر جميع منصات التواصل الاجتماعي من لوحة تحكم واحدة قوية",
    },
    {
      id: 3,
      title: "Real-Time Analytics",
      titleAr: "التحليلات في الوقت الفعلي",
      description:
        "Get instant insights and optimize your campaigns for maximum ROI",
      descriptionAr: "احصل على رؤى فورية وحسّن حملاتك لأقصى عائد استثمار",
    },
  ];

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
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
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30 animate-pulse-soft">
              <Sparkles className="w-4 h-4 mr-2" />
              {translation.aiPoweredRevolution}
            </Badge>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {translation.automateMarketing}
            <motion.span
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient"
              style={{ backgroundSize: "400% 400%" }}
            >
              {" "}
              {translation.digitalMarketing}
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {translation.heroDescription}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-4 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {translation.startFreeTrial}
                <ArrowRight
                  className={`${isRTL ? "mr-2 rotate-180" : "ml-2"} w-5 h-5`}
                />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4"
              >
                {translation.watchDemo}
                <Play className={`${isRTL ? "mr-2" : "ml-2"} w-5 h-5`} />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Interactive Slider */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <AnimatedSlider
            slides={heroSlides}
            language={language}
            className="max-w-4xl mx-auto"
          />
        </motion.div>

        {/* Enhanced Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl mb-4 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </motion.div>
              <motion.div
                className="text-3xl md:text-4xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.6 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400 text-sm md:text-base">
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
