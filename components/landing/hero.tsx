"use client";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, PartyPopper, Ticket, Trophy } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-4 pt-24 pb-12 overflow-hidden text-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-blue-600/20 rounded-full blur-[100px] will-change-transform transform-gpu"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-orange-500/20 rounded-full blur-[100px] will-change-transform transform-gpu"
        />
      </div>

      <div className="z-10 flex flex-col items-center max-w-4xl mx-auto space-y-8">
        {/* Floating Elements (Mobile First Decorative) */}
        <div className="relative w-full h-20 mb-4 sm:h-0 sm:mb-0">
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -20 }}
            animate={{ opacity: 1, x: 0, rotate: -12 }}
            transition={{ delay: 0.5 }}
            className="absolute left-4 sm:left-[-40px] top-0 sm:top-20 p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl"
          >
            <Ticket className="w-6 h-6 text-orange-400" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 20 }}
            animate={{ opacity: 1, x: 0, rotate: 12 }}
            transition={{ delay: 0.6 }}
            className="absolute right-4 sm:right-[-40px] top-4 sm:top-10 p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl"
          >
            <PartyPopper className="w-6 h-6 text-blue-400" />
          </motion.div>
        </div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Badge
            variant="outline"
            className="px-4 py-1.5 text-sm border-blue-500/30 bg-blue-500/10 backdrop-blur-md text-blue-200 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.2)]"
          >
            <span className="flex items-center gap-2">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-orange-400"></span>
                <span className="relative inline-flex w-2 h-2 rounded-full bg-orange-500"></span>
              </span>
              L&apos;app étudiante #1
            </span>
          </Badge>
        </motion.div>

        {/* Main Title */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center justify-center text-6xl font-black tracking-tighter text-transparent sm:text-8xl md:text-9xl"
          >
            <span className="text-white drop-shadow-xl">BDE</span>
            <span className="relative inline-block mt-[-10px] sm:mt-[-20px] transform -rotate-2 hover:rotate-0 transition-transform duration-300 cursor-default">
              <span
                className="absolute inset-0 translate-x-1 translate-y-1 text-blue-600/20 blur-sm select-none"
                aria-hidden="true"
              >
                FENELON
              </span>
              <span className="relative bg-clip-text text-transparent bg-[linear-gradient(to_right,#1e3a8a_0%,#2563eb_40%,#7c3aed_55%,#db2777_65%,#ea580c_80%)] drop-shadow-2xl">
                FENELON
              </span>
            </span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-md mx-auto text-lg font-medium leading-relaxed text-zinc-400 sm:text-xl"
        >
          L&apos;asso qui fait{" "}
          <span className="text-orange-400 font-bold">bouger</span> ton campus.
          <br />
          Soirées, voyages, et bons plans dans ta poche.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col w-full gap-4 sm:flex-row sm:justify-center sm:w-auto"
        >
          <Link
            href="/billetterie"
            className={buttonVariants({
              size: "lg",
              className:
                "w-full h-12 text-base font-bold text-white shadow-lg sm:w-auto rounded-xl bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-blue-500/25",
            })}
          >
            <Ticket className="w-5 h-5 mr-2" />
            Billetterie
          </Link>
          <Link
            href="/actualites"
            className={buttonVariants({
              size: "lg",
              variant: "outline",
              className:
                "w-full h-12 text-base font-bold border-white/10 bg-white/5 hover:bg-white/10 text-white sm:w-auto rounded-xl backdrop-blur-sm",
            })}
          >
            <Trophy className="w-5 h-5 mr-2" />
            Découvrir
            <ArrowRight className="w-4 h-4 ml-2 opacity-50" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
