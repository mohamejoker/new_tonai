"use client";

import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ServicesSection } from "@/components/sections/services-section";
import { PlatformsSection } from "@/components/sections/platforms-section";
import { AnalyticsSection } from "@/components/sections/analytics-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { AIAgentSection } from "@/components/sections/ai-agent-section";
import { CTASection } from "@/components/sections/cta-section";
import { SocialMediaSection } from "@/components/sections/social-media-section";
import { motion } from "framer-motion";
import {
  Target,
  DollarSign,
  TrendingUp,
  Users,
  Bot,
  Zap,
  Globe,
  Shield,
} from "lucide-react";

const stats = [
  {
    label: "Active Campaigns",
    labelAr: "الحملات النشطة",
    value: "25,847",
    icon: Target,
    color: "from-blue-500 to-cyan-500",
  },
  {
    label: "Revenue Generated",
    labelAr: "الإيرادات المُحققة",
    value: "$18.7M",
    icon: DollarSign,
    color: "from-green-500 to-emerald-500",
  },
  {
    label: "AI Agents Active",
    labelAr: "وكلاء الذكاء الاصطناعي النشطون",
    value: "1,250",
    icon: Bot,
    color: "from-purple-500 to-violet-500",
  },
  {
    label: "Global Clients",
    labelAr: "العملاء العالميون",
    value: "8,940",
    icon: Users,
    color: "from-pink-500 to-rose-500",
  },
  {
    label: "Average ROAS",
    labelAr: "متوسط العائد على الاستثمار",
    value: "4.8x",
    icon: TrendingUp,
    color: "from-orange-500 to-amber-500",
  },
  {
    label: "API Calls Daily",
    labelAr: "استدعاءات API يومياً",
    value: "2.1M",
    icon: Zap,
    color: "from-indigo-500 to-blue-500",
  },
  {
    label: "Countries Served",
    labelAr: "البلدان المخدومة",
    value: "45+",
    icon: Globe,
    color: "from-teal-500 to-cyan-500",
  },
  {
    label: "Uptime Guarantee",
    labelAr: "ضمان وقت التشغيل",
    value: "99.9%",
    icon: Shield,
    color: "from-red-500 to-orange-500",
  },
];

export default function Home() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse-soft"></div>
      </div>

      <div className="relative z-10">
        <Navigation />
        <HeroSection stats={stats} />
        <ServicesSection />
        <AIAgentSection />
        <SocialMediaSection />
        <FeaturesSection />
        <PlatformsSection />
        <AnalyticsSection />
        <PricingSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </div>
    </motion.div>
  );
}
