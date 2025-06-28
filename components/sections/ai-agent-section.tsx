"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  Brain,
  Zap,
  Clock,
  TrendingUp,
  MessageSquare,
  ArrowRight,
  Play,
  CheckCircle,
} from "lucide-react";

const aiAgents = [
  {
    id: 1,
    name: "Campaign Optimizer",
    nameAr: "محسن الحملات",
    description: "Automatically optimizes ad campaigns for maximum ROI",
    descriptionAr: "يحسن الحملات الإعلانية تلقائياً لأقصى عائد استثمار",
    icon: TrendingUp,
    capabilities: [
      "Real-time optimization",
      "Budget management",
      "Performance tracking",
    ],
    capabilitiesAr: ["تحسين في الوقت الفعلي", "إدارة الميزانية", "تتبع الأداء"],
    status: "Active",
    efficiency: "98%",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 2,
    name: "Content Creator",
    nameAr: "منشئ المحتوى",
    description: "Generates engaging content across all social platforms",
    descriptionAr: "ينشئ محتوى جذاب عبر جميع منصات التواصل الاجتماعي",
    icon: MessageSquare,
    capabilities: [
      "Content generation",
      "Multi-platform posting",
      "Trend analysis",
    ],
    capabilitiesAr: ["إنشاء المحتوى", "النشر متعدد المنصات", "تحليل الاتجاهات"],
    status: "Active",
    efficiency: "94%",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 3,
    name: "Audience Analyzer",
    nameAr: "محلل الجمهور",
    description:
      "Analyzes audience behavior and preferences for better targeting",
    descriptionAr: "يحلل سلوك الجمهور وتفضيلاته لاستهداف أفضل",
    icon: Brain,
    capabilities: ["Behavioral analysis", "Preference mapping", "Segmentation"],
    capabilitiesAr: ["تحليل السلوك", "رسم التفضيلات", "التقسيم"],
    status: "Active",
    efficiency: "96%",
    color: "from-purple-500 to-violet-600",
  },
  {
    id: 4,
    name: "Response Bot",
    nameAr: "بوت الردود",
    description: "Handles customer inquiries and engagement 24/7",
    descriptionAr: "يتعامل مع استفسارات العملاء والتفاعل على مدار الساعة",
    icon: Bot,
    capabilities: [
      "24/7 availability",
      "Multi-language support",
      "Smart responses",
    ],
    capabilitiesAr: ["متاح 24/7", "دعم متعدد اللغات", "ردود ذكية"],
    status: "Active",
    efficiency: "99%",
    color: "from-orange-500 to-amber-600",
  },
];

const agentStats = [
  {
    label: "AI Agents Active",
    labelAr: "وكلاء الذكاء الاصطناعي النشطون",
    value: "1,250",
    icon: Bot,
    change: "+15%",
    color: "text-green-400",
  },
  {
    label: "Tasks Automated Daily",
    labelAr: "المهام المؤتمتة يومياً",
    value: "45,000",
    icon: Zap,
    change: "+28%",
    color: "text-blue-400",
  },
  {
    label: "Average Response Time",
    labelAr: "متوسط و��ت الاستجابة",
    value: "0.3s",
    icon: Clock,
    change: "-12%",
    color: "text-purple-400",
  },
  {
    label: "Success Rate",
    labelAr: "معدل النجاح",
    value: "97.5%",
    icon: CheckCircle,
    change: "+3%",
    color: "text-emerald-400",
  },
];

export function AIAgentSection() {
  const { translation, language, isRTL } = useLanguage();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            rotate: [360, 180, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
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
            <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
              <Bot className="w-4 h-4 mr-2" />
              {translation.aiAgentTitle}
            </Badge>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {translation.aiAgentDescription}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {language === "ar"
              ? "وكلاء ذكاء اصطناعي متقدمون يعملون على تحسين حملاتك التسويقية تلقائياً"
              : "Advanced AI agents that automatically optimize your marketing campaigns"}
          </p>
        </motion.div>

        {/* AI Agent Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {agentStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="bg-white/5 border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm mb-2">
                    {language === "ar" ? stat.labelAr : stat.label}
                  </div>
                  <div className={`text-sm font-medium ${stat.color}`}>
                    {stat.change}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Agents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {aiAgents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden">
                {/* Status Indicator */}
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${agent.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <agent.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg mb-2">
                    {language === "ar" ? agent.nameAr : agent.name}
                  </CardTitle>
                  <p className="text-gray-300 text-sm">
                    {language === "ar"
                      ? agent.descriptionAr
                      : agent.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-2 mb-4">
                    {(language === "ar"
                      ? agent.capabilitiesAr
                      : agent.capabilities
                    ).map((capability, capIndex) => (
                      <div
                        key={capIndex}
                        className="flex items-center text-gray-300 text-sm"
                      >
                        <CheckCircle
                          className={`w-4 h-4 text-green-400 ${isRTL ? "ml-2" : "mr-2"} flex-shrink-0`}
                        />
                        {capability}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">
                      {language === "ar" ? "الكفاءة" : "Efficiency"}
                    </span>
                    <span className="text-green-400 font-semibold">
                      {agent.efficiency}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Demo Section */}
        <motion.div
          className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm border border-white/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {language === "ar"
              ? "شاهد وكلاء الذكاء الاصطناعي في العمل"
              : "See AI Agents in Action"}
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            {language === "ar"
              ? "احجز عرضاً توضيحياً مجانياً لترى كيف يمكن لوكلائنا الذكيين تحويل عملك"
              : "Book a free demo to see how our AI agents can transform your business"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              >
                <Play className={`w-5 h-5 ${isRTL ? "ml-2" : "mr-2"}`} />
                {language === "ar" ? "احجز عرضاً توضيحياً" : "Book Demo"}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                {language === "ar" ? "تعرف على المزيد" : "Learn More"}
                <ArrowRight
                  className={`w-5 h-5 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`}
                />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
