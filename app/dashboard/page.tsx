"use client";

import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { UserStats } from "@/components/dashboard/user-stats";
import { UserProjects } from "@/components/dashboard/user-projects";
import { UserProfile } from "@/components/dashboard/user-profile";
import { UserBilling } from "@/components/dashboard/user-billing";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";

export default function UserDashboard() {
  const { translation } = useLanguage();

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-white mb-2">
              {translation.welcomeBack || "Welcome Back"}
            </h1>
            <p className="text-gray-300">
              {translation.dashboardSubtitle ||
                "Manage your campaigns and track performance"}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <UserStats />
              <UserProjects />
            </div>
            <div className="space-y-8">
              <UserProfile />
              <UserBilling />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
