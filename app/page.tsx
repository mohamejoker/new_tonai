"use client";

import { Target, DollarSign, TrendingUp, Users } from "lucide-react";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { PlatformsSection } from "@/components/sections/platforms-section";
import { AnalyticsSection } from "@/components/sections/analytics-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { AIAssistantSection } from "@/components/sections/ai-assistant-section";
import { SocialMediaSection } from "@/components/sections/social-media-section";
import { motion } from "framer-motion";

const stats = [
  {
    label: "Active Campaigns",
    labelAr: "الحملات النشطة",
    value: "15,847",
    icon: Target,
  },
  {
    label: "Total Revenue Generated",
    labelAr: "إجمالي الإيرادات المُحققة",
    value: "$12.4M",
    icon: DollarSign,
  },
  {
    label: "Average ROAS",
    labelAr: "متوسط العائد على الاستثمار",
    value: "4.2x",
    icon: TrendingUp,
  },
  {
    label: "Clients Worldwide",
    labelAr: "العملاء حول العالم",
    value: "2,340",
    icon: Users,
  },
];

export default function Home() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navigation />
      <HeroSection stats={stats} />
      <SocialMediaSection />
      <FeaturesSection />
      <PlatformsSection />
      <AnalyticsSection />
      <PricingSection />
      <TestimonialsSection />
      <AIAssistantSection />
      <Footer />
    </motion.div>
  );
}
