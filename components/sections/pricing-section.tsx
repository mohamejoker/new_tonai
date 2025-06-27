'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Get started with basic AI marketing tools',
    features: [
      'Basic campaign optimization',
      'Up to 2 social platforms',
      '1,000 monthly ad impressions',
      'Email support',
      'Basic analytics dashboard'
    ],
    buttonText: 'Start Free',
    popular: false
  },
  {
    name: 'Premium',
    price: '$97',
    period: '/month',
    description: 'Perfect for growing businesses and influencers',
    features: [
      'Advanced AI optimization',
      'All 6 advertising platforms',
      '50,000 monthly impressions',
      'Organic growth tools',
      'Priority chat support',
      'Advanced analytics',
      'A/B testing automation',
      'Custom audience creation'
    ],
    buttonText: 'Get Premium',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$297',
    period: '/month',
    description: 'For agencies and large-scale operations',
    features: [
      'Full AI automation suite',
      'Unlimited platforms & impressions',
      'White-label dashboard',
      'Dedicated account manager',
      '24/7 phone support',
      'Custom integrations',
      'Multi-client management',
      'Advanced reporting & API access'
    ],
    buttonText: 'Contact Sales',
    popular: false
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start free and scale as you grow. All plans include our AI optimization technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'bg-gradient-to-b from-purple-500/20 to-pink-500/20 border-purple-500/50 scale-105' : 'bg-white/10 border-white/20'} hover:scale-105 transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-white">
                  {plan.price}
                  <span className="text-lg text-gray-400">{plan.period}</span>
                </div>
                <CardDescription className="text-gray-300">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}