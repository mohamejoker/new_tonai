'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Facebook,
  Instagram,
  Youtube,
  Globe,
  Play,
  Camera,
  ChevronRight
} from 'lucide-react';

const platforms = [
  { name: 'Facebook', icon: Facebook, color: 'bg-blue-500', users: '2.9B+' },
  { name: 'Instagram', icon: Instagram, color: 'bg-pink-500', users: '2B+' },
  { name: 'Google Ads', icon: Globe, color: 'bg-green-500', users: '4B+' },
  { name: 'TikTok', icon: Play, color: 'bg-black', users: '1B+' },
  { name: 'YouTube', icon: Youtube, color: 'bg-red-500', users: '2.7B+' },
  { name: 'Snapchat', icon: Camera, color: 'bg-yellow-400', users: '750M+' }
];

export function PlatformsSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            All Major Platforms
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Reach billions of users across the world's most popular social media and advertising platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <Card key={index} className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105 cursor-pointer">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${platform.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl">{platform.name}</CardTitle>
                <CardDescription className="text-gray-300">
                  {platform.users} active users
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="ghost" className="text-purple-400 hover:text-purple-300 hover:bg-white/10">
                  Learn More
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}