"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Music,
} from "lucide-react";

interface SocialMediaIconsProps {
  variant?: "default" | "floating";
  showLabels?: boolean;
}

const socialPlatforms = [
  {
    name: "Facebook",
    nameAr: "فيسبوك",
    icon: Facebook,
    color: "from-blue-500 to-blue-600",
    hoverColor: "hover:from-blue-400 hover:to-blue-500",
  },
  {
    name: "Instagram",
    nameAr: "إنستجرام",
    icon: Instagram,
    color: "from-pink-500 to-purple-600",
    hoverColor: "hover:from-pink-400 hover:to-purple-500",
  },
  {
    name: "Twitter",
    nameAr: "تويتر",
    icon: Twitter,
    color: "from-sky-400 to-sky-500",
    hoverColor: "hover:from-sky-300 hover:to-sky-400",
  },
  {
    name: "LinkedIn",
    nameAr: "لينكد إن",
    icon: Linkedin,
    color: "from-blue-600 to-blue-700",
    hoverColor: "hover:from-blue-500 hover:to-blue-600",
  },
  {
    name: "YouTube",
    nameAr: "يو��يوب",
    icon: Youtube,
    color: "from-red-500 to-red-600",
    hoverColor: "hover:from-red-400 hover:to-red-500",
  },
  {
    name: "TikTok",
    nameAr: "تيك توك",
    icon: Music,
    color: "from-gray-800 to-gray-900",
    hoverColor: "hover:from-gray-700 hover:to-gray-800",
  },
];

export function SocialMediaIcons({
  variant = "default",
  showLabels = true,
}: SocialMediaIconsProps) {
  if (variant === "floating") {
    return (
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 space-y-4 z-40">
        {socialPlatforms.map((platform, index) => (
          <motion.div
            key={platform.name}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1, x: -5 }}
            className="group"
          >
            <div
              className={`p-3 rounded-full bg-gradient-to-r ${platform.color} ${platform.hoverColor} transition-all duration-300 cursor-pointer shadow-lg`}
            >
              <platform.icon className="w-5 h-5 text-white" />
            </div>
            {showLabels && (
              <motion.div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {platform.name}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {socialPlatforms.map((platform, index) => (
        <motion.div
          key={platform.name}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5, scale: 1.05 }}
          className="text-center group cursor-pointer"
        >
          <div
            className={`p-4 rounded-2xl bg-gradient-to-r ${platform.color} ${platform.hoverColor} transition-all duration-300 mb-3 shadow-lg group-hover:shadow-2xl`}
          >
            <platform.icon className="w-8 h-8 text-white mx-auto" />
          </div>
          {showLabels && (
            <span className="text-white text-sm font-medium">
              {platform.name}
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}
