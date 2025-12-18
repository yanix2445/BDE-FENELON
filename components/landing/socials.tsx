"use client";

import Link from "next/link";
import { Instagram, Linkedin, Facebook, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";

// Note: Lucide doesn't have TikTok or Discord by default in older versions,
// checking availability or using generic/svg if needed.
// For now using what's likely available or generic placeholders.
// I will use SVG paths for specific brand icons if Lucide is missing them.

const socials = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com",
    color: "hover:text-pink-500 hover:bg-pink-500/10",
  },
  {
    name: "TikTok",
    // Custom SVG for TikTok
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
    href: "https://tiktok.com",
    color: "hover:text-black dark:hover:text-white hover:bg-white/10",
  },
  {
    name: "Discord",
    // Custom SVG for Discord
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <circle cx="9" cy="12" r="1" />
        <circle cx="15" cy="12" r="1" />
        <path d="M7.5 7.2c.3-.4 1-.7 1.5-.9C10.5 5.8 12.5 5.5 15 6c.5.1 1.2.4 1.5.9 0 0 2.5 4.5 2.5 10 0 0-1.5 1.5-3.5 1.5-1 0-2-.5-2.5-1-.5.5-1.5 1-2.5 1-2 0-3.5-1.5-3.5-1.5 0-5.5 2.5-10 2.5-10z" />
      </svg>
    ),
    href: "https://discord.com",
    color: "hover:text-indigo-500 hover:bg-indigo-500/10",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
    color: "hover:text-blue-600 hover:bg-blue-600/10",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com",
    color: "hover:text-blue-500 hover:bg-blue-500/10",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle, // Using MessageCircle as generic chat/whatsapp
    href: "https://whatsapp.com",
    color: "hover:text-green-500 hover:bg-green-500/10",
  },
];

export function Socials() {
  return (
    <section className="px-6 py-12 mb-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold mb-6 text-white text-center"
      >
        Suivez-nous
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4"
      >
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={
                buttonVariants({ variant: "outline", size: "icon" }) +
                ` w-14 h-14 rounded-2xl border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:scale-110 ${social.color}`
              }
            >
              <Icon className="w-6 h-6" />
              <span className="sr-only">{social.name}</span>
            </Link>
          );
        })}
      </motion.div>
    </section>
  );
}
