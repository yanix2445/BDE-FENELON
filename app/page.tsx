import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { QuickAccess } from "@/components/landing/quick-access";
import { Socials } from "@/components/landing/socials";

export default function Home() {
  return (
    <main className="min-h-dvh w-full overflow-x-hidden bg-background text-foreground selection:bg-blue-500/30 relative">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-900/40 via-background to-background pointer-events-none" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent pointer-events-none" />
      <Navbar />
      <Hero />
      <QuickAccess />
      <Socials />
    </main>
  );
}
