"use client";

import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { APIOverview } from "@/components/api/api-overview";
import { APIEndpoints } from "@/components/api/api-endpoints";
import { APIAuthentication } from "@/components/api/api-authentication";
import { APIDocumentation } from "@/components/api/api-documentation";
import { APITesting } from "@/components/api/api-testing";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";

export default function APIProviderPage() {
  const { translation } = useLanguage();

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {translation.apiProvider || "API Provider"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {translation.apiDescription ||
                "Integrate our powerful AI marketing tools into your applications"}
            </p>
          </motion.div>

          <div className="space-y-16">
            <APIOverview />
            <APIAuthentication />
            <APIEndpoints />
            <APIDocumentation />
            <APITesting />
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
