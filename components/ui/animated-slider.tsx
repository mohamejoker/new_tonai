"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SlideContent {
  id: number;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  image?: string;
  component?: React.ReactNode;
}

interface AnimatedSliderProps {
  slides: SlideContent[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  language?: "en" | "ar";
}

export function AnimatedSlider({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  className = "",
  language = "en",
}: AnimatedSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm p-8 min-h-[400px] flex items-center"
        >
          <div className="w-full">
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              {language === "ar"
                ? slides[currentSlide].titleAr
                : slides[currentSlide].title}
            </motion.h3>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-300 mb-6 max-w-2xl"
            >
              {language === "ar"
                ? slides[currentSlide].descriptionAr
                : slides[currentSlide].description}
            </motion.p>
            {slides[currentSlide].component && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {slides[currentSlide].component}
              </motion.div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 left-4 flex items-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={prevSlide}
          className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={nextSlide}
          className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
