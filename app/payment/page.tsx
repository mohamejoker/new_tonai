"use client";

import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { PaymentMethods } from "@/components/payment/payment-methods";
import { PaymentForm } from "@/components/payment/payment-form";
import { PaymentSecurity } from "@/components/payment/payment-security";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";

export default function PaymentPage() {
  const { translation } = useLanguage();

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {translation.securePayment || "Secure Payment"}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {translation.paymentDescription ||
                "Complete your purchase with our secure payment system"}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <PaymentMethods />
            <PaymentForm />
          </div>

          <PaymentSecurity />
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
