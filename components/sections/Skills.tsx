// 04 기술 스택, 핵심 역량, What I bring
import type { PortfolioState } from "@/lib/usePortfolio";

export default function Skills({ v }: { v: PortfolioState }) {
  return (
    <>

<section id="skills" className="wrap">
<div className="sechead">
<span className="secnum">04</span>
<div><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>Technologies I work with</p><h2>기술 스택</h2></div>
</div>
<div style={{ display: "flex", flexWrap: "wrap", gap: "48px", paddingBlock: "32px 0" }}>
<div style={{ flex: "999 1 560px", minWidth: "0" }}>
<div className="skillrow"><span className="mono" style={{ width: "160px", paddingTop: "6px" }}>Frontend</span><div className="tags" style={{ margin: "0", flex: "1" }}><span className="tag">React</span><span className="tag">Next.js</span><span className="tag">TypeScript</span><span className="tag">Vue.js</span><span className="tag">Angular</span><span className="tag">JavaScript</span></div></div>
<div className="skillrow"><span className="mono" style={{ width: "160px", paddingTop: "6px" }}>Backend</span><div className="tags" style={{ margin: "0", flex: "1" }}><span className="tag">Java</span><span className="tag">Spring Boot</span><span className="tag">Python</span><span className="tag">FastAPI</span><span className="tag">MyBatis</span></div></div>
<div className="skillrow"><span className="mono" style={{ width: "160px", paddingTop: "6px" }}>AI Engineering</span><div className="tags" style={{ margin: "0", flex: "1" }}><span className="tag">LangChain</span><span className="tag">LangGraph</span><span className="tag">RAG</span><span className="tag">NL2SQL</span><span className="tag">vLLM</span><span className="tag">LoRA</span><span className="tag">QLoRA</span></div></div>
<div className="skillrow"><span className="mono" style={{ width: "160px", paddingTop: "6px" }}>Database</span><div className="tags" style={{ margin: "0", flex: "1" }}><span className="tag">Oracle</span><span className="tag">PostgreSQL</span><span className="tag">MySQL</span><span className="tag">Qdrant</span></div></div>
<div className="skillrow"><span className="mono" style={{ width: "160px", paddingTop: "6px" }}>Infrastructure</span><div className="tags" style={{ margin: "0", flex: "1" }}><span className="tag">Docker</span><span className="tag">Docker Compose</span><span className="tag">Nginx</span><span className="tag">AWS</span><span className="tag">Vercel</span></div></div>
<div className="skillrow"><span className="mono" style={{ width: "160px", paddingTop: "6px" }}>Testing</span><div className="tags" style={{ margin: "0", flex: "1" }}><span className="tag">Playwright</span><span className="tag">E2E Testing</span><span className="tag">Unit Testing</span></div></div>
<div className="skillrow"><span className="mono" style={{ width: "160px", paddingTop: "6px" }}>Others</span><div className="tags" style={{ margin: "0", flex: "1" }}><span className="tag">GitHub Actions</span><span className="tag">MLflow</span><span className="tag">Ionic</span><span className="tag">Kotlin</span><span className="tag">Swift</span></div></div>
</div>
<div style={{ flex: "1 1 320px", minWidth: "0", border: "2px solid var(--line)", background: "var(--panel)", padding: "24px" }}>
<p className="mono" style={{ margin: "0 0 16px" }}>Core competencies</p>
<ol style={{ margin: "0", paddingLeft: "22px", fontSize: "16px", lineHeight: "2" }}>
<li>Full-stack Web Application</li><li>AI Application Architecture</li><li>LLM Integration &amp; RAG Pipeline</li><li>Natural Language to SQL</li><li>Enterprise System Integration</li><li>Authentication &amp; Authorization</li><li>Performance Optimization</li><li>Testing &amp; QA</li>
</ol>
</div>
</div>

{/* What I bring */}
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "0", marginTop: "72px", borderTop: "2px solid var(--line)" }}>
<div style={{ padding: "28px 24px 28px 0", borderBottom: "2px solid var(--line)" }}><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>Product development</p><p style={{ margin: "12px 0 0", fontSize: "16px", lineHeight: "1.7" }}>기획서를 받으면 화면, API, DB를 한 번에 붙여서 동작하는 상태로 만듭니다.</p></div>
<div style={{ padding: "28px 24px 28px 0", borderBottom: "2px solid var(--line)" }}><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>AI product engineering</p><p style={{ margin: "12px 0 0", fontSize: "16px", lineHeight: "1.7" }}>RAG, NL2SQL, vLLM 서빙을 실제 업무 기능에 붙여 봤습니다. 모델 자체보다 그걸 쓰는 화면과 흐름에 더 관심이 많습니다.</p></div>
<div style={{ padding: "28px 24px 28px 0", borderBottom: "2px solid var(--line)" }}><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>Enterprise systems</p><p style={{ margin: "12px 0 0", fontSize: "16px", lineHeight: "1.7" }}>은행과 대기업 사내 시스템에서 마이그레이션, 권한 관리, 장애 대응을 해 왔습니다.</p></div>
<div style={{ padding: "28px 24px 28px 0", borderBottom: "2px solid var(--line)" }}><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>Independent execution</p><p style={{ margin: "12px 0 0", fontSize: "16px", lineHeight: "1.7" }}>놀아조라와 보존식 기록표는 기획부터 배포까지 혼자 맡아서 만들었습니다.</p></div>
</div>
</section>


    </>
  );
}
