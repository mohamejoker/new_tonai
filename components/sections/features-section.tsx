'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Brain, 
  Target, 
  TrendingUp, 
  BarChart3, 
  Bot,
  Languages
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Optimization',
    description: 'Our advanced AI continuously learns and optimizes your campaigns for maximum ROI.'
  },
  {
    icon: Target,
    title: 'Smart Targeting',
    description: 'Precision audience targeting across all platforms using machine learning algorithms.'
  },
  {
    icon: TrendingUp,
    title: 'Organic Growth',
    description: 'Gain real, engaged followers on Instagram, TikTok, YouTube, and Twitter organically.'
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Comprehensive dashboard with live performance metrics and actionable insights.'
  },
  {
    icon: Bot,
    title: 'Smart Assistant',
    description: '24/7 AI chatbot provides marketing recommendations and tracks your orders.'
  },
  {
    icon: Languages,
    title: 'Multilingual Support',
    description: 'Full support for Arabic and English with localized marketing strategies.'
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powered by Advanced AI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our intelligent marketing platform uses cutting-edge AI to automate, optimize, and scale your digital marketing efforts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}