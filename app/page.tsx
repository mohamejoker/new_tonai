"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import { ModernHero } from "@/components/sections/modern-hero";
import { InteractiveServices } from "@/components/sections/interactive-services";
import { DynamicFeatures } from "@/components/sections/dynamic-features";
import { SmartPricing } from "@/components/sections/smart-pricing";

export default function ModernLandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950"
    >
      {/* Animated Background */}
      <motion.div className="fixed inset-0 z-0" style={{ y: backgroundY }}>
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-3xl"
              style={{
                width: `${200 + i * 20}px`,
                height: `${200 + i * 20}px`,
                background: `radial-gradient(circle, ${
                  ["#8B5CF6", "#06B6D4", "#10B981", "#F59E0B", "#EF4444"][i % 5]
                }20, transparent)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 100, -100, 0],
                y: [0, -100, 100, 0],
                scale: [1, 1.3, 0.7, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Interactive Particles */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-white to-purple-200"
              style={{
                width: `${2 + (i % 4)}px`,
                height: `${2 + (i % 4)}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: mousePosition.x * (5 + i * 0.1),
                y: mousePosition.y * (5 + i * 0.1),
                opacity: [0.1, 0.8, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                x: { duration: 2, ease: "easeOut" },
                y: { duration: 2, ease: "easeOut" },
                opacity: { duration: 3, repeat: Infinity },
                scale: { duration: 2, repeat: Infinity },
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-white/10"
              style={{
                width: `${50 + i * 30}px`,
                height: `${50 + i * 30}px`,
                left: `${10 + i * 12}%`,
                top: `${10 + i * 8}%`,
                borderRadius: i % 2 === 0 ? "50%" : "0%",
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />

        <AnimatePresence>
          {isLoaded && (
            <>
              <ModernHero />
              <InteractiveServices />
              <DynamicFeatures />
              <SmartPricing />
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-screen opacity-70"
        animate={{
          x:
            typeof window !== "undefined"
              ? mousePosition.x * window.innerWidth * 0.5 +
                window.innerWidth * 0.5 -
                12
              : 0,
          y:
            typeof window !== "undefined"
              ? mousePosition.y * window.innerHeight * -0.5 +
                window.innerHeight * 0.5 -
                12
              : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      {/* Loading Screen */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="fixed inset-0 z-50 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className="text-center">
              <motion.div
                className="relative w-24 h-24 mx-auto mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="absolute inset-0 border-4 border-purple-500 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-2 border-2 border-pink-500 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute inset-4 border border-blue-500 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
              <motion.h2
                className="text-3xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Town Media AI
              </motion.h2>
              <motion.p
                className="text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Loading Next-Gen Experience...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
