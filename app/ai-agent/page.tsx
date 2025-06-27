"use client";

import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { AIAgentHero } from "@/components/sections/ai-agent-hero";
import { AICapabilities } from "@/components/sections/ai-capabilities";
import { AIAgentTypes } from "@/components/sections/ai-agent-types";
import { AIIntegrations } from "@/components/sections/ai-integrations";
import { AIAgentPricing } from "@/components/sections/ai-agent-pricing";
import { motion } from "framer-motion";

export default function AIAgentPage() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navigation />
      <AIAgentHero />
      <AICapabilities />
      <AIAgentTypes />
      <AIIntegrations />
      <AIAgentPricing />
      <Footer />
    </motion.div>
  );
}
