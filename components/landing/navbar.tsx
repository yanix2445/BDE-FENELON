"use client";

import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/5 backdrop-blur-2xl border-b border-white/5 supports-backdrop-filter:bg-white/5"
    >
      <div className="flex items-center gap-3">
        <Avatar className="w-9 h-9 rounded-2xl shadow-lg shadow-blue-500/20">
          <AvatarImage src="/logo.png" alt="BDE Fénelon" />
          <AvatarFallback className="bg-linear-to-br from-blue-600 to-orange-500 text-white font-bold text-xs tracking-widest">
            BF
          </AvatarFallback>
        </Avatar>
        <span className="text-lg font-bold tracking-tight text-white">
          BDE FENELON
        </span>
      </div>

      <Sheet>
        <SheetTrigger
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "rounded-full hover:bg-white/10 text-white"
          )}
        >
          <Menu className="w-6 h-6" />
          <span className="sr-only">Menu</span>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[300px] bg-black/95 backdrop-blur-xl border-l border-white/10 text-white"
        >
          <SheetHeader>
            <SheetTitle className="text-left text-white">Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 mt-8">
            <Link
              href="/billetterie"
              className="text-lg font-medium hover:text-blue-400 transition-colors"
            >
              Billetterie
            </Link>
            <Link
              href="/actualites"
              className="text-lg font-medium hover:text-purple-400 transition-colors"
            >
              Actualités
            </Link>
            <Link
              href="/dons"
              className="text-lg font-medium hover:text-pink-400 transition-colors"
            >
              Dons
            </Link>
            <Link
              href="/carte"
              className="text-lg font-medium hover:text-emerald-400 transition-colors"
            >
              Carte Étudiante
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </motion.nav>
  );
}
