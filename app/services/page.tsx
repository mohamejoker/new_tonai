"use client";

import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { ServicesHero } from "@/components/sections/services-hero";
import { ServicesList } from "@/components/sections/services-list";
import { ServiceRequestForm } from "@/components/sections/service-request-form";
import { ServiceProcess } from "@/components/sections/service-process";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navigation />
      <ServicesHero />
      <ServicesList />
      <ServiceProcess />
      <ServiceRequestForm />
      <Footer />
    </motion.div>
  );
}
