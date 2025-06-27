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
import { TechShowcase } from "@/components/sections/tech-showcase";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

function FloatingShape() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#8B5CF6"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.4}
      />
    </Sphere>
  );
}

export default function ModernLandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

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
        {/* 3D Canvas Background */}
        <div className="absolute inset-0 opacity-30">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <FloatingShape />
          </Canvas>
        </div>

        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-96 h-96 rounded-full blur-3xl"
              style={{
                background: `radial-gradient(circle, ${
                  ["#8B5CF6", "#06B6D4", "#10B981", "#F59E0B", "#EF4444"][i % 5]
                }20, transparent)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 100, -100, 0],
                y: [0, -100, 100, 0],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Interactive Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: mousePosition.x * (10 + i * 0.5),
                y: mousePosition.y * (10 + i * 0.5),
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                x: { duration: 2, ease: "easeOut" },
                y: { duration: 2, ease: "easeOut" },
                opacity: { duration: 3, repeat: Infinity },
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
              <TechShowcase />
              <SmartPricing />
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x:
            mousePosition.x * window.innerWidth * 0.5 +
            window.innerWidth * 0.5 -
            16,
          y:
            mousePosition.y * window.innerHeight * -0.5 +
            window.innerHeight * 0.5 -
            16,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      {/* Loading Screen */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="fixed inset-0 z-50 bg-slate-950 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-center">
              <motion.div
                className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.h2
                className="text-2xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Loading Experience...
              </motion.h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
