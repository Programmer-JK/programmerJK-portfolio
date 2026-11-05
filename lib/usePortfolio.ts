"use client";

import { useEffect, useMemo, useState } from "react";
import { siteConfig } from "@/data/config";

// 경력 항목 id. Career.tsx에 항목을 추가하면 여기에도 id를 넣어 주세요.
export const CAREER_IDS = ["w1", "w2", "w3", "w4", "w5", "w6", "m1", "m2", "m3", "m4", "m5", "m6"];

// 사이드 프로젝트 id
//   archive: Our Little Archive, ar: 놀아조라, im: ImpacMatching, mr: 보존식 기록표
//   linky: 링키라운지, moim: 모임 성격 진단, ani: Aniwhere
export const PROJECT_IDS = ["archive", "ar", "im", "mr", "linky", "moim", "ani"];

// 작은 공용 팝업(SmallProjectModal)을 쓰는 프로젝트와 상단 라벨
const SMALL_MODAL_LABELS: Record<string, string> = {
  linky: "05 · 링키라운지 공식 홈페이지",
  moim: "06 · 모임 성격 진단 웹앱",
  ani: "07 · Aniwhere",
};

const IM_TABS = ["t0", "t1", "t2", "t3", "t4", "t5"];

type Fn = () => void;

export function usePortfolio() {
  const [dark, setDark] = useState<boolean>(siteConfig.darkByDefault);
  const [openRows, setOpenRows] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(siteConfig.initiallyOpenCareer.map((id) => [id, true]))
  );
  const [proj, setProj] = useState<string>("");
  const [imTab, setImTab] = useState<string>("t0");

  // Esc 키로 팝업 닫기
  useEffect(() => {
    if (!proj) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setProj("");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [proj]);

  return useMemo(() => {
    const open: Record<string, boolean> = {};
    const closed: Record<string, boolean> = {};
    const accCls: Record<string, string> = {};
    const toggle: Record<string, Fn> = {};
    for (const id of CAREER_IDS) {
      open[id] = !!openRows[id];
      closed[id] = !openRows[id];
      accCls[id] = openRows[id] ? "on" : "";
      toggle[id] = () => setOpenRows((s) => ({ ...s, [id]: !s[id] }));
    }

    const pick: Record<string, Fn> = {};
    const pv: Record<string, boolean> = {};
    for (const p of PROJECT_IDS) {
      pv[p] = proj === p;
      pick[p] = () => {
        setProj(p);
        setImTab("t0");
      };
    }
    const closeP = () => setProj("");

    const imShow: Record<string, boolean> = {};
    const imCls: Record<string, string> = {};
    const imPick: Record<string, Fn> = {};
    for (const t of IM_TABS) {
      imShow[t] = imTab === t;
      imCls[t] = imTab === t ? "on" : "";
      imPick[t] = () => setImTab(t);
    }

    return {
      accent: siteConfig.accent,
      themeClass: dark ? "t-dark" : "t-light",
      themeLabel: dark ? "Light" : "Dark",
      toggleTheme: () => setDark((d) => !d),

      open,
      closed,
      accCls,
      toggle,

      pick,
      pv,
      closeP,
      pmOpen: !!SMALL_MODAL_LABELS[proj],
      pmLabel: SMALL_MODAL_LABELS[proj] || "",
      pmWidth: proj === "archive" ? "1080px" : "900px",
      laOpen: proj === "archive",
      closeLa: closeP,
      arOpen: proj === "ar",
      closeAr: closeP,
      mrOpen: proj === "mr",
      closeMr: closeP,
      imOpen: proj === "im",
      closeIm: closeP,

      imShow,
      imCls,
      imPick,
    };
  }, [dark, openRows, proj, imTab]);
}

export type PortfolioState = ReturnType<typeof usePortfolio>;
