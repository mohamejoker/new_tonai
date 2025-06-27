'use client';

import { Target, DollarSign, TrendingUp, Users } from 'lucide-react';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { PlatformsSection } from '@/components/sections/platforms-section';
import { AnalyticsSection } from '@/components/sections/analytics-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { AIAssistantSection } from '@/components/sections/ai-assistant-section';

const stats = [
  { label: 'Active Campaigns', value: '15,847', icon: Target },
  { label: 'Total Revenue Generated', value: '$12.4M', icon: DollarSign },
  { label: 'Average ROAS', value: '4.2x', icon: TrendingUp },
  { label: 'Clients Worldwide', value: '2,340', icon: Users }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <HeroSection stats={stats} />
      <FeaturesSection />
      <PlatformsSection />
      <AnalyticsSection />
      <PricingSection />
      <TestimonialsSection />
      <AIAssistantSection />
      <Footer />
    </div>
  );
}