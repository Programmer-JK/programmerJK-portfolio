"use client";

import type { CSSProperties } from "react";
import { usePortfolio } from "@/lib/usePortfolio";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Career from "@/components/sections/Career";
import SideProjects from "@/components/sections/SideProjects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import ImpacModal from "@/components/modals/ImpacModal";
import SmallProjectModal from "@/components/modals/SmallProjectModal";
import ArcadeModal from "@/components/modals/ArcadeModal";
import MealModal from "@/components/modals/MealModal";
import LittleArchiveModal from "@/components/modals/LittleArchiveModal";

export default function Page() {
  const v = usePortfolio();
  return (
    <div className={`root ${v.themeClass}`} style={{ "--accent": v.accent } as CSSProperties}>
      <Header v={v} />
      <Hero v={v} />
      <Ticker v={v} />
      <About v={v} />
      <Stats v={v} />
      <Career v={v} />
      <SideProjects v={v} />
      <Skills v={v} />
      <Contact v={v} />
      <ImpacModal v={v} />
      <LittleArchiveModal v={v} />
      <SmallProjectModal v={v} />
      <ArcadeModal v={v} />
      <MealModal v={v} />
    </div>
  );
}
