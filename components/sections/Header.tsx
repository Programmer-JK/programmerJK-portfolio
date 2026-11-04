// 상단 바: 로고, 섹션 메뉴, 라이트/다크 버튼
import type { PortfolioState } from "@/lib/usePortfolio";

export default function Header({ v }: { v: PortfolioState }) {
  return (
    <>

<header className="wrap" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px", paddingBlock: "20px", borderBottom: "2px solid var(--line)" }}>
<a href="#top" className="wide" style={{ textDecoration: "none", fontSize: "22px", letterSpacing: "-.02em", border: "2px solid var(--line)", padding: "6px 10px", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>PJK</a>
<nav aria-label="섹션" style={{ display: "flex", flexWrap: "wrap", gap: "2px" }}>
<a className="navlink mono" href="#about"><span style={{ color: "var(--muted)" }}>01</span>About</a>
<a className="navlink mono" href="#career"><span style={{ color: "var(--muted)" }}>02</span>Career</a>
<a className="navlink mono" href="#side"><span style={{ color: "var(--muted)" }}>03</span>Side</a>
<a className="navlink mono" href="#skills"><span style={{ color: "var(--muted)" }}>04</span>Skills</a>
<a className="navlink mono" href="#contact"><span style={{ color: "var(--muted)" }}>05</span>Contact</a>
</nav>
<button type="button" className="btn mono" onClick={v.toggleTheme} aria-label="라이트/다크 모드 전환">
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="8" cy="8" r="6.2"></circle><path d="M8 1.8v12.4"></path><path d="M8 1.8a6.2 6.2 0 0 1 0 12.4z" fill="currentColor"></path></svg>
{v.themeLabel}
</button>
</header>


    </>
  );
}
