// 05 진로 방향, 연락처, 푸터
import type { PortfolioState } from "@/lib/usePortfolio";

export default function Contact({ v }: { v: PortfolioState }) {
  return (
    <>
      <section id="contact" style={{ marginTop: "120px", background: "var(--ink)", color: "var(--bg)" }}>
        <div className="wrap" style={{ paddingBlock: "96px 48px" }}>
          <p className="mono" style={{ margin: "0 0 24px" }}>05 · Career direction</p>
          <p style={{ margin: "0", fontSize: "clamp(36px, 6.4vw, 100px)", fontWeight: "700", letterSpacing: "-.045em" }}>모델보다는<br /><span className="mark">쓰는 사람</span> 쪽을 봅니다.</p>
          <p style={{ margin: "40px 0 0", maxWidth: "770px", fontSize: "18px", lineHeight: "1.8" }}>AI를 연구하는 쪽보다는, 이미 있는 제품에서 사람들이 막히는 지점을 AI로 푸는 일을 하고 싶습니다. SQL을 모르는 인사 담당자가 말로 데이터를 찾게 만드는 일처럼요. 그렇게 바뀐 경험이 결국 사업에도 도움이 된다고 생각합니다.</p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginTop: "40px" }}><span className="mono" style={{ border: "2px solid var(--bg)", padding: "10px 14px" }}>막히는 지점 찾기</span><span className="mono">→</span><span className="mono" style={{ border: "2px solid var(--bg)", padding: "10px 14px" }}>AI로 풀기</span><span className="mono">→</span><span className="mono" style={{ background: "var(--accent)", color: "var(--on-accent)", border: "2px solid var(--accent)", padding: "10px 14px" }}>새로운 경험과 비즈니스 가치</span></div>
          <p className="mono" style={{ margin: "20px 0 0", textTransform: "none", lineHeight: "1.7", opacity: ".75" }}>해 온 일: Softin AI Agent, Oxid HR AI Platform</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", marginTop: "96px", borderTop: "2px solid var(--bg)" }}>
            <a href="mailto:qkrwhd14@naver.com" style={{ color: "var(--bg)", textDecoration: "none", padding: "24px 16px 24px 0", borderBottom: "2px solid var(--bg)", display: "flex", flexDirection: "column", gap: "8px", minHeight: "44px" }}><span className="mono">Email</span><span style={{ fontSize: "20px", fontWeight: "700", overflowWrap: "anywhere" }}>qkrwhd14@naver.com ↗</span></a>
            <a href="https://github.com/Programmer-JK" target="_blank" rel="noopener noreferrer" style={{ color: "var(--bg)", textDecoration: "none", padding: "24px 16px 24px 0", borderBottom: "2px solid var(--bg)", display: "flex", flexDirection: "column", gap: "8px", minHeight: "44px" }}><span className="mono">GitHub</span><span style={{ fontSize: "20px", fontWeight: "700", overflowWrap: "anywhere" }}>github.com/Programmer-JK ↗</span></a>
            <a href="#contact" style={{ color: "var(--bg)", textDecoration: "none", padding: "24px 16px 24px 0", borderBottom: "2px solid var(--bg)", display: "flex", flexDirection: "column", gap: "8px", minHeight: "44px" }}><span className="mono">Blog</span><span style={{ fontSize: "20px", fontWeight: "700" }}>[기술 블로그 주소 입력] ↗</span></a>
            <a href="#contact" style={{ color: "var(--bg)", textDecoration: "none", padding: "24px 16px 24px 0", borderBottom: "2px solid var(--bg)", display: "flex", flexDirection: "column", gap: "8px", minHeight: "44px" }}><span className="mono">Portfolio</span><span style={{ fontSize: "20px", fontWeight: "700" }}>[포트폴리오 주소 입력] ↗</span></a>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginTop: "120px" }}>
            <span style={{ display: "inline-flex", alignItems: "flex-end" }}>
              <span className="wide pjk" style={{ fontSize: "clamp(80px, 18vw, 280px)", lineHeight: ".78", letterSpacing: "-.06em" }}><span>P</span><span style={{ transitionDelay: ".06s" }}>J</span><span style={{ transitionDelay: ".12s" }}>K</span></span>
              <span className="bit bit-foot" aria-hidden="true" style={{ fontSize: "clamp(44px, 9vw, 140px)" }}><span className="bit-body"><span className="bit-eyes"><span className="bit-eye"></span><span className="bit-eye"></span></span></span></span>
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-end" }}>
              <span className="mono">박종권 · Full-stack / AI Product Engineer</span>
              <a href="#top" className="mono" style={{ color: "var(--bg)", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>Back to top ↑</a>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
