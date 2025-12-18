"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CreditCard,
  Heart,
  Newspaper,
  Ticket,
} from "lucide-react";
import Link from "next/link";

const items = [
  {
    title: "BILLETTERIE",
    icon: Ticket,
    href: "/billetterie",
    gradient: "from-blue-600 to-indigo-600",
    shadow: "shadow-blue-500/20",
    colSpan: "col-span-2",
    variants: {
      hidden: { opacity: 0, y: -50 },
      show: { opacity: 1, y: 0 },
    },
  },
  {
    title: "ACTUS",
    icon: Newspaper,
    href: "/actualites",
    gradient: "from-purple-600 to-pink-600",
    shadow: "shadow-pink-500/20",
    colSpan: "col-span-1",
    variants: {
      hidden: { opacity: 0, x: 50 },
      show: { opacity: 1, x: 0 },
    },
  },
  {
    title: "DONS",
    icon: Heart,
    href: "/dons",
    gradient: "from-indigo-600 to-purple-600",
    shadow: "shadow-indigo-500/20",
    colSpan: "col-span-1",
    variants: {
      hidden: { opacity: 0, x: -50 },
      show: { opacity: 1, x: 0 },
    },
  },
  {
    title: "CARTE ÉTUDIANTE",
    icon: CreditCard,
    href: "/carte",
    gradient: "from-orange-500 to-red-500",
    shadow: "shadow-orange-500/20",
    colSpan: "col-span-2",
    variants: {
      hidden: { opacity: 0, y: 50 },
      show: { opacity: 1, y: 0 },
    },
  },
];

export function QuickAccess() {
  return (
    <section className="px-4 py-8 max-w-4xl mx-auto">
      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <motion.div
            key={item.title}
            variants={item.variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className={`${item.colSpan} group relative`}
          >
            <Link href={item.href} className="block h-full">
              <div
                className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`}
              />
              <Card className="h-full border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden hover:border-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-[1.02]">
                <CardContent className="p-6 h-full flex flex-col justify-between min-h-[140px] sm:min-h-[180px]">
                  <div className="flex justify-between items-start">
                    <div
                      className={`p-3 rounded-2xl bg-linear-to-br ${item.gradient} text-white shadow-lg ${item.shadow}`}
                    >
                      <item.icon className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
                  </div>

                  <div>
                    <h3 className="text-xl font-black tracking-tighter text-white mt-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                      {item.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
