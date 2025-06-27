'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Bot, MessageCircle } from 'lucide-react';

export function AIAssistantSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Your AI Marketing Assistant
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get instant marketing recommendations, track your campaigns, and receive optimization suggestions 24/7 from our intelligent chatbot assistant.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">Instant campaign optimization suggestions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">Real-time performance alerts</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">Multilingual support (Arabic & English)</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <Card className="bg-white/10 border-white/20">
              <CardHeader className="flex flex-row items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <CardTitle className="text-white text-sm">AI Assistant</CardTitle>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-gray-400">Online</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white/5 p-3 rounded-lg">
                  <p className="text-gray-300 text-sm">Your Facebook campaign is performing 23% above average! Would you like me to increase the budget?</p>
                </div>
                <div className="bg-purple-500/20 p-3 rounded-lg ml-8">
                  <p className="text-white text-sm">Yes, increase by 20%</p>
                </div>
                <div className="bg-white/5 p-3 rounded-lg">
                  <p className="text-gray-300 text-sm">Done! I've also identified 3 new high-performing audience segments. Shall I create campaigns for them?</p>
                </div>
                <div className="flex items-center space-x-2 pt-2">
                  <div className="flex-1 bg-white/10 rounded-full px-3 py-2">
                    <span className="text-gray-400 text-sm">Type your message...</span>
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}