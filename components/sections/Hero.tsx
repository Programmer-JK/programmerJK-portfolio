// 첫 화면: 큰 헤드라인, 이름·경력·Focus 칸, 경력 흐름 바
import type { PortfolioState } from "@/lib/usePortfolio";

export default function Hero({ v }: { v: PortfolioState }) {
  return (
    <>

<section id="top" className="wrap" style={{ paddingBlock: "clamp(48px, 7vw, 104px) 56px" }}>
<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "8px 24px", marginBottom: "40px" }}>
<span className="mono" style={{ color: "var(--muted)" }}>Portfolio / 2026</span>
<span className="mono" style={{ color: "var(--muted)" }}>Full-stack Developer · AI Product Engineer</span>
</div>
<h1 style={{ margin: "0", fontSize: "clamp(48px, 8.6vw, 140px)", lineHeight: "1.04", fontWeight: "700", letterSpacing: "-.045em" }}><span className="ln"><span style={{ animationDelay: ".1s" }}>화면에서 시작해</span></span><br /><span className="ln"><span style={{ animationDelay: ".25s" }}>서버와 AI까지 만드는</span></span><br /><span className="ln"><span style={{ animationDelay: ".4s" }}><span className="sweep">풀스택</span> 개발자입니다.</span></span><span className="bit bit-hero" aria-hidden="true"><span className="bit-body"><span className="bit-eyes"><span className="bit-eye"></span><span className="bit-eye"></span></span></span></span></h1>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", marginTop: "64px", border: "2px solid var(--line)" }}>
<div style={{ padding: "20px", border: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: "8px" }}><span className="mono" style={{ color: "var(--muted)" }}>Name</span><span style={{ fontSize: "22px", fontWeight: "700" }}>박종권</span></div>
<div style={{ padding: "20px", border: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: "8px" }}><span className="mono" style={{ color: "var(--muted)" }}>Experience</span><span style={{ fontSize: "22px", fontWeight: "700" }}>약 3년 9개월</span></div>
<div style={{ padding: "20px", border: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: "8px" }}><span className="mono" style={{ color: "var(--muted)" }}>Focus</span><span style={{ fontSize: "17px", fontWeight: "500", lineHeight: "1.45" }}>Full-stack · AI Product Engineering</span></div>
</div>

{/* Path track */}
<div style={{ marginTop: "56px" }}>
<p className="mono" style={{ margin: "0 0 16px", color: "var(--muted)" }}>Career path</p>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "0" }}>
<div style={{ paddingRight: "16px" }}><div className="bar" style={{ animationDelay: ".8s" }}></div><p className="mono" style={{ margin: "14px 0 0", color: "var(--muted)" }}>2022.08 —</p><p className="wide" style={{ margin: "6px 0 0", fontSize: "26px", letterSpacing: "-.02em" }}>Frontend</p></div>
<div style={{ paddingRight: "16px" }}><div className="bar" style={{ animationDelay: "1.2s" }}></div><p className="mono" style={{ margin: "14px 0 0", color: "var(--muted)" }}>2025.05 —</p><p className="wide" style={{ margin: "6px 0 0", fontSize: "26px", letterSpacing: "-.02em" }}>Full-stack</p></div>
<div style={{ paddingRight: "16px" }}><div className="bar bar-now" style={{ animationDelay: "1.6s" }}></div><p className="mono" style={{ margin: "14px 0 0", color: "var(--muted)" }}>2025.10 — Now<span className="cursor" aria-hidden="true"></span></p><p className="wide" style={{ margin: "6px 0 0", fontSize: "26px", letterSpacing: "-.02em" }}>AI Product</p></div>
</div>
</div>
</section>


    </>
  );
}
