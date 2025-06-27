"use client";

import { motion } from "framer-motion";
import { SocialMediaIcons } from "@/components/ui/social-media-icons";
import { AnimatedSlider } from "@/components/ui/animated-slider";
import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Users,
  MessageSquare,
  Heart,
  Share2,
  BarChart3,
} from "lucide-react";

export function SocialMediaSection() {
  const { translation, language } = useLanguage();

  const socialSlides = [
    {
      id: 1,
      title: "Facebook & Instagram Marketing",
      titleAr: "تسويق فيسبوك وإنستجرام",
      description:
        "Reach billions of users with targeted ads and organic content strategies",
      descriptionAr:
        "اوصل إلى مليارات المستخدمين بإعلانات مستهدفة واستراتيجيات محتوى طبيعي",
      component: (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="bg-white/10 border-white/20 p-4 text-center">
            <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <p className="text-white text-sm">+250% Reach</p>
          </Card>
          <Card className="bg-white/10 border-white/20 p-4 text-center">
            <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-white text-sm">5M+ Followers</p>
          </Card>
          <Card className="bg-white/10 border-white/20 p-4 text-center">
            <Heart className="w-8 h-8 text-pink-400 mx-auto mb-2" />
            <p className="text-white text-sm">95% Engagement</p>
          </Card>
          <Card className="bg-white/10 border-white/20 p-4 text-center">
            <Share2 className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <p className="text-white text-sm">10K Shares/day</p>
          </Card>
        </div>
      ),
    },
    {
      id: 2,
      title: "YouTube & TikTok Growth",
      titleAr: "نمو يوتيوب وتيك توك",
      description:
        "Viral video strategies and audience engagement optimization",
      descriptionAr: "استراتيجيات فيديو فيروسية وتحسين تفاعل الجمهور",
      component: (
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-gradient-to-r from-red-500/20 to-red-600/20 border-red-500/30 p-6 text-center">
            <h4 className="text-white text-lg font-semibold mb-2">YouTube</h4>
            <p className="text-gray-300 text-sm">2M+ Subscribers Generated</p>
          </Card>
          <Card className="bg-gradient-to-r from-gray-800/20 to-gray-900/20 border-gray-700/30 p-6 text-center">
            <h4 className="text-white text-lg font-semibold mb-2">TikTok</h4>
            <p className="text-gray-300 text-sm">50M+ Views Per Month</p>
          </Card>
        </div>
      ),
    },
    {
      id: 3,
      title: "LinkedIn & Twitter Professional",
      titleAr: "لينكد إن وتويتر المهني",
      description: "B2B lead generation and professional network expansion",
      descriptionAr: "توليد عملاء محتملين للشركات وتوسيع الشبكة المهنية",
      component: (
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-3 mx-auto">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <p className="text-white text-sm">500% Lead Increase</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-sky-500 rounded-full flex items-center justify-center mb-3 mx-auto">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <p className="text-white text-sm">24/7 Engagement</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
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
              {language === "ar"
                ? "أدوات وسائل التواصل الاجتماعي"
                : "Social Media Tools"}
            </Badge>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {language === "ar"
              ? "تواصل مع جمهورك"
              : "Connect With Your Audience"}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {language === "ar"
              ? "أدر جميع منصات التواصل الاجتماعي من مكان واحد بتقنية الذكاء الاصطناعي المتقدمة"
              : "Manage all your social media platforms from one place with advanced AI technology"}
          </p>
        </motion.div>

        {/* Interactive Slider */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <AnimatedSlider
            slides={socialSlides}
            language={language}
            autoPlayInterval={6000}
            className="max-w-5xl mx-auto"
          />
        </motion.div>

        {/* Social Media Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            {language === "ar" ? "منصات مدعومة" : "Supported Platforms"}
          </h3>
          <SocialMediaIcons variant="default" showLabels={true} />
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          {[
            {
              title: language === "ar" ? "معدل النمو" : "Growth Rate",
              value: "+450%",
              description:
                language === "ar"
                  ? "زيادة في المتابعين"
                  : "Increase in followers",
              icon: TrendingUp,
              color: "from-green-500 to-emerald-500",
            },
            {
              title: language === "ar" ? "معدل التفاعل" : "Engagement Rate",
              value: "12.5%",
              description:
                language === "ar" ? "متوسط التفاعل" : "Average engagement",
              icon: Heart,
              color: "from-pink-500 to-rose-500",
            },
            {
              title: language === "ar" ? "توليد العملاء" : "Lead Generation",
              value: "+320%",
              description:
                language === "ar"
                  ? "زيادة في العملاء المحتملين"
                  : "Increase in leads",
              icon: Users,
              color: "from-blue-500 to-cyan-500",
            },
            {
              title: language === "ar" ? "المحتوى الفيروسي" : "Viral Content",
              value: "85%",
              description:
                language === "ar"
                  ? "معدل نجاح المحتوى"
                  : "Content success rate",
              icon: Share2,
              color: "from-purple-500 to-violet-500",
            },
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="bg-white/10 border-white/20 p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">
                  {metric.title}
                </h4>
                <div className="text-3xl font-bold text-white mb-2">
                  {metric.value}
                </div>
                <p className="text-gray-400 text-sm">{metric.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
