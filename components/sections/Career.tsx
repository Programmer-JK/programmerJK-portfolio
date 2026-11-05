// 02 경력: 회사별 프로젝트 (펼치기/접기). 새 항목을 추가하면 lib/usePortfolio.ts 의 CAREER_IDS 에도 id를 넣어 주세요
import type { PortfolioState } from "@/lib/usePortfolio";

export default function Career({ v }: { v: PortfolioState }) {
  return (
    <>
      <section id="career" className="wrap">
        <div className="sechead">
          <span className="secnum">02</span>
          <div><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>Professional experience</p><h2>경력</h2></div>
        </div>

        {/* Softin */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px 24px", padding: "40px 0 16px", borderBottom: "2px solid var(--line)" }}>
          <h3 className="wide" style={{ margin: "0", fontSize: "clamp(32px, 4vw, 56px)", letterSpacing: "-.03em", lineHeight: "1" }}>소프트인 <span style={{ fontWeight: "500" }}>Softin</span></h3>
          <span className="mono">2025.02 – 현재 · 약 1년 9개월 · Developer</span>
        </div>
        <p style={{ margin: "16px 0 0", color: "var(--muted)", fontSize: "15px" }}>은행 인사 시스템부터 사내 AI Agent까지 만들고 있습니다. 항목을 누르면 자세히 볼 수 있어요.</p>

        <div className="row">
          <button type="button" className="rowbtn" onClick={v.toggle.w1} aria-expanded={v.open.w1}>
            <span className="mono idx">S/01</span><span className="rowtitle">우리은행 인사·조직 시스템 고도화</span><span className="mono period">2026.07 – 2026.10</span>
            <span className="sign" aria-hidden="true">{v.open.w1 && (<>−</>)}{v.closed.w1 && (<>+</>)}</span>
          </button>
          <div className={`acc ${v.accCls.w1}`}><div className="acc-in">
            <div className="rowbody">
              <div><h4 className="mono">Overview</h4><p style={{ margin: "0" }}>기존 인사·조직 시스템의 콘텐츠 및 데이터 마이그레이션과 화면 기능 고도화.</p><div className="tags"><span className="tag">Java</span><span className="tag">JSP</span><span className="tag">Oracle</span><span className="tag">IBMap</span><span className="tag">SQL</span><span className="tag">PL/SQL</span></div></div>
              <div><h4 className="mono">Key contributions</h4><ul><li>Confluence HTML·이미지 데이터 마이그레이션</li><li>대용량 처리 중 메모리·DB 장애 분석</li><li>DBMS_LOB 리소스 관리, 임시 LOB 해제 처리</li><li>마이그레이션용 UI 개발</li><li>Summernote 확장 및 IBMap 연계</li><li>SQL·PL/SQL 데이터 처리</li></ul></div>
              <div><h4 className="mono">Result</h4><ul className="res"><li>데이터 용량 약 5GB → 약 1/10 수준</li><li>콘텐츠 렌더링 성능 10배 이상 개선</li><li>OOM 및 DB 장애 해결</li></ul></div>
            </div>
          </div></div>
        </div>

        <div className="row">
          <button type="button" className="rowbtn" onClick={v.toggle.w2} aria-expanded={v.open.w2}>
            <span className="mono idx">S/02</span><span className="rowtitle">Oxid HR AI Platform</span><span className="mono period">2026.04 – 2026.07</span>
            <span className="sign" aria-hidden="true">{v.open.w2 && (<>−</>)}{v.closed.w2 && (<>+</>)}</span>
          </button>
          <div className={`acc ${v.accCls.w2}`}><div className="acc-in">
            <div className="rowbody">
              <div><h4 className="mono">Overview</h4><p style={{ margin: "0" }}>기업 인사 업무를 지원하는 AI 기반 HR 플랫폼. 자연어 질의, HR 데이터 검색, 문서 기반 질의응답을 지원합니다.</p><div className="tags"><span className="tag">Next.js</span><span className="tag">FastAPI</span><span className="tag">Python</span><span className="tag">Qwen</span><span className="tag">vLLM</span><span className="tag">Docker</span><span className="tag">Playwright</span></div></div>
              <div><h4 className="mono">Key contributions</h4><ul><li>Inquiry 모듈 단독 설계, 프론트·백엔드 구현</li><li>HR 질의응답 API 연동</li><li>권한별 접근 제어 및 민감정보 마스킹</li><li>Playwright E2E 테스트 작성</li><li>AI 응답·서비스 흐름 안정성 개선</li><li>FP8 양자화로 모델 메모리 최적화</li></ul></div>
              <div><h4 className="mono">Result</h4><ul className="res"><li>Inquiry 프론트엔드 구현률 99.8%</li><li>Inquiry 백엔드 구현률 84.3%</li><li>단위 테스트 89개 작성</li><li>E2E 테스트 48개 중 46개 통과</li><li>VRAM 사용량 46.7% 절감</li></ul></div>
            </div>
          </div></div>
        </div>

        <div className="row">
          <button type="button" className="rowbtn" onClick={v.toggle.w3} aria-expanded={v.open.w3}>
            <span className="mono idx">S/03</span><span className="rowtitle">Softin AI Agent <span className="tag" style={{ verticalAlign: "middle", marginLeft: "8px" }}>Flow diagram</span></span><span className="mono period">2026.01 – 2026.03</span>
            <span className="sign" aria-hidden="true">{v.open.w3 && (<>−</>)}{v.closed.w3 && (<>+</>)}</span>
          </button>
          <div className={`acc ${v.accCls.w3}`}><div className="acc-in">
            <div className="rowbody" style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
              <div style={{ flex: "999 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "32px" }}>
                <div><h4 className="mono">Overview</h4><p style={{ margin: "0" }}>자연어로 기업 데이터를 조회하고 활용하는 AI Agent 시스템.</p><div className="tags"><span className="tag">Python</span><span className="tag">FastAPI</span><span className="tag">LangChain</span><span className="tag">RAG</span><span className="tag">NL2SQL</span><span className="tag">vLLM</span><span className="tag">MLflow</span><span className="tag">Docker</span></div></div>
                <div><h4 className="mono">Key contributions</h4><ul><li>NL2SQL 및 하이브리드 RAG 파이프라인</li><li>수집 → 전처리 → 학습 → 평가 → 서빙 흐름 구성</li><li>LoRA/QLoRA 파인튜닝, MLflow 실험 관리</li><li>vLLM 서빙 환경 구성</li><li>Intent Classifier 및 Agent 라우팅</li><li>Docker Compose·Nginx 실행 환경</li></ul></div>
                <div><h4 className="mono">Technical focus</h4><p style={{ margin: "0" }}>질문이 들어오면 먼저 의도를 분류하고, DB를 조회해야 하면 NL2SQL로, 문서를 찾아야 하면 RAG로 보냅니다. LLM 한 번 호출로 모든 걸 처리하려 하지 않은 게 핵심이었습니다.</p></div>
              </div>
              <div style={{ flex: "1 1 400px", minWidth: "0" }}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "8px 24px", marginBottom: "12px" }}><h4 className="mono" style={{ margin: "0" }}>Request flow</h4><span className="mono" style={{ color: "var(--muted)" }}>Intent → Route → Serve</span></div>
                <div className="flow-scroll">
                  <div className="flow" role="img" aria-label="자연어 질의가 Intent Classifier를 거쳐 NL2SQL 또는 Hybrid RAG로 분기한 뒤 vLLM 서빙을 거쳐 응답으로 이어지는 흐름">
                    <svg width="360" height="604" viewBox="0 0 360 604" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ color: "var(--line)" }}><path d="M180 32 V240 H85 V380 H180 V572"></path><path d="M180 240 H275 V380 H180"></path></svg>
                    <span className="pk pk-top" aria-hidden="true"><span className="pk-eyes"><span></span><span></span></span></span>
                    <span className="pk pk-bot" aria-hidden="true"><span className="pk-eyes"><span></span><span></span></span></span>
                    <div className="node" style={{ left: "80px", top: "0", width: "200px", height: "64px", background: "var(--ink)", color: "var(--bg)" }}><b>자연어 질의</b><span className="mono">Input</span></div>
                    <div className="node fl-b" style={{ left: "60px", top: "120px", width: "240px", height: "84px" }}><b>Intent Classifier</b><span className="mono">의도 분류 · 라우팅</span></div>
                    <div className="node fl-c1" style={{ left: "10px", top: "280px", width: "150px", height: "64px" }}><b>NL2SQL</b><span className="mono">DB 조회</span></div>
                    <div className="node fl-c2" style={{ left: "200px", top: "280px", width: "150px", height: "64px" }}><b>Hybrid RAG</b><span className="mono">문서 검색</span></div>
                    <div className="node fl-d" style={{ left: "80px", top: "420px", width: "200px", height: "64px" }}><b>vLLM</b><span className="mono">모델 서빙</span></div>
                    <div className="node fl-e" style={{ left: "100px", top: "540px", width: "160px", height: "64px" }}><b>응답</b><span className="mono">Output</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div></div>
        </div>

        <div className="row">
          <button type="button" className="rowbtn" onClick={v.toggle.w4} aria-expanded={v.open.w4}>
            <span className="mono idx">S/04</span><span className="rowtitle">AI Solution POC</span><span className="mono period">2025.10 – 2025.12</span>
            <span className="sign" aria-hidden="true">{v.open.w4 && (<>−</>)}{v.closed.w4 && (<>+</>)}</span>
          </button>
          <div className={`acc ${v.accCls.w4}`}><div className="acc-in">
            <div className="rowbody">
              <div><h4 className="mono">Overview</h4><p style={{ margin: "0" }}>기업 업무에 AI를 적용하기 위한 기술 검증 프로젝트.</p><div className="tags"><span className="tag">Python</span><span className="tag">FastAPI</span><span className="tag">LangChain</span><span className="tag">RAG</span><span className="tag">NL2SQL</span><span className="tag">VectorDB</span><span className="tag">vLLM</span></div></div>
              <div><h4 className="mono">Key contributions</h4><ul><li>RAG·NL2SQL 기반 질의응답 구조 검증</li><li>VectorDB 5종 비교 및 적합성 분석</li><li>4개 처리 경로 기반 챗봇 아키텍처 설계</li><li>FastAPI + vLLM 프로토타입 구현</li></ul></div>
            </div>
          </div></div>
        </div>

        <div className="row">
          <button type="button" className="rowbtn" onClick={v.toggle.w5} aria-expanded={v.open.w5}>
            <span className="mono idx">S/05</span><span className="rowtitle">Runique</span><span className="mono period">2025.05 – 2025.09</span>
            <span className="sign" aria-hidden="true">{v.open.w5 && (<>−</>)}{v.closed.w5 && (<>+</>)}</span>
          </button>
          <div className={`acc ${v.accCls.w5}`}><div className="acc-in">
            <div className="rowbody">
              <div><h4 className="mono">Overview</h4><p style={{ margin: "0" }}>기업 고객과 일반 사용자를 연결하는 B2B 서비스.</p><div className="tags"><span className="tag">Next.js</span><span className="tag">TypeScript</span><span className="tag">Spring Boot</span><span className="tag">Java</span><span className="tag">PostgreSQL</span><span className="tag">JWT</span><span className="tag">Prisma</span></div></div>
              <div><h4 className="mono">Key contributions</h4><ul><li>Next.js + Spring Boot 풀스택 개발</li><li>서비스 홈페이지 및 백오피스</li><li>JWT·Spring Security 인증·인가</li><li>할인 정책·라이선스 관리</li><li>B2B 사용자·서비스 관리</li><li>API 구조 설계 및 연동</li></ul></div>
              <div><h4 className="mono">Result</h4><ul className="res"><li>홈페이지 구현률 98.6%</li><li>백엔드 구현률 85.9%</li><li>백오피스 구현률 88.5%</li><li>테스트 항목 100% 수행</li></ul></div>
            </div>
          </div></div>
        </div>

        <div className="row">
          <button type="button" className="rowbtn" onClick={v.toggle.w6} aria-expanded={v.open.w6}>
            <span className="mono idx">S/06</span><span className="rowtitle">IBDashBuilder</span><span className="mono period">2025.02 – 2025.09</span>
            <span className="sign" aria-hidden="true">{v.open.w6 && (<>−</>)}{v.closed.w6 && (<>+</>)}</span>
          </button>
          <div className={`acc ${v.accCls.w6}`}><div className="acc-in">
            <div className="rowbody">
              <div><h4 className="mono">Overview</h4><p style={{ margin: "0" }}>데이터를 위젯 형태로 구성하고 관리하는 대시보드 빌더.</p><div className="tags"><span className="tag">React</span><span className="tag">TypeScript</span><span className="tag">JavaScript</span><span className="tag">Playwright</span></div></div>
              <div><h4 className="mono">Key contributions</h4><ul><li>React·TypeScript 대시보드 기능 개발</li><li>위젯 13종 구현</li><li>위젯 편집·구성 인터페이스</li><li>i18n 및 다크 모드</li><li>PNG 다운로드</li><li>Playwright 기능 테스트</li></ul></div>
            </div>
          </div></div>
        </div>

        {/* Mobile C&C */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px 24px", padding: "72px 0 16px", borderBottom: "2px solid var(--line)" }}>
          <h3 className="wide" style={{ margin: "0", fontSize: "clamp(32px, 4vw, 56px)", letterSpacing: "-.03em", lineHeight: "1" }}>모빌씨앤씨 <span style={{ fontWeight: "500" }}>Mobile C&amp;C</span></h3>
          <span className="mono">2022.08 – 2024.08 · 약 2년</span>
        </div>
        <p style={{ margin: "16px 0 0", color: "var(--muted)", fontSize: "15px" }}>한국 법인에서 아모레퍼시픽 서비스를 운영했고, 캄보디아 법인으로 옮겨 현지 은행 앱 전환과 QA를 맡았습니다.</p>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: "8px 24px", padding: "40px 0 12px", borderBottom: "2px solid var(--line)" }}><span style={{ fontSize: "20px", fontWeight: "700" }}>Cambodia — PM / QA Group Manager</span><span className="mono" style={{ color: "var(--muted)" }}>2024.01 – 2024.08 · 7개월</span></div>

        <div className="row">
          <button type="button" className="rowbtn" onClick={v.toggle.m1} aria-expanded={v.open.m1}>
            <span className="mono idx">M/01</span><span className="rowtitle">Native 기능 테스트 앱 구축</span><span className="mono period">2024.06 – 2024.08</span>
            <span className="sign" aria-hidden="true">{v.open.m1 && (<>−</>)}{v.closed.m1 && (<>+</>)}</span>
          </button>
          <div className={`acc ${v.accCls.m1}`}><div className="acc-in">
            <div className="rowbody">
              <div><h4 className="mono">Overview</h4><p style={{ margin: "0" }}>플랫폼의 네이티브 기능을 검증하기 위한 통합 테스트 앱.</p><div className="tags"><span className="tag">Vue 3</span><span className="tag">Ionic</span><span className="tag">Kotlin</span><span className="tag">Swift</span><span className="tag">GitLab</span></div></div>
              <div><h4 className="mono">Key contributions</h4><ul><li>카메라·위치·푸시 알림 등 핵심 네이티브 기능 구현</li><li>플러그인 버전 관리 및 단위 테스트 체계 구축</li><li>다양한 디바이스·OS를 위한 적응형 UI 설계</li></ul></div>
              <div><h4 className="mono">Result</h4><ul className="res"><li>네이티브 기능 테스트 효율 향상</li><li>개발 프로세스 개선</li></ul></div>
            </div>
          </div></div>
        </div>

        <div className="row">
          <button type="button" className="rowbtn" onClick={v.toggle.m2} aria-expanded={v.open.m2}>
            <span className="mono idx">M/02</span><span className="rowtitle">SmartBiz 해외 은행 모바일 플랫폼 전환</span><span className="mono period">2024.03 – 2024.05</span>
            <span className="sign" aria-hidden="true">{v.open.m2 && (<>−</>)}{v.closed.m2 && (<>+</>)}</span>
          </button>
          <div className={`acc ${v.accCls.m2}`}><div className="acc-in">
            <div className="rowbody">
              <div><h4 className="mono">Overview</h4><p style={{ margin: "0" }}>캄보디아 은행 서비스의 모바일 플랫폼 전환 프로젝트.</p><div className="tags"><span className="tag">Angular</span><span className="tag">Vue 3</span><span className="tag">Java</span><span className="tag">GitLab</span><span className="tag">Redmine</span></div></div>
              <div><h4 className="mono">Key contributions</h4><ul><li>Native와 Frontend 분리로 시스템 확장성 개선</li><li>QR 코드, 계좌 거래 내역 조회 등 필수 기능 개발</li><li>iOS 생체인증, autofocus 등 플랫폼 특화 이슈 해결</li><li>푸시 알림 시스템 재설계</li><li>데이터 마이그레이션 및 로컬스토리지 관리</li><li>코드 컨벤션 작성·도입, UAT 시나리오 작성 가이드 제작</li></ul></div>
              <div><h4 className="mono">Result</h4><ul className="res"><li>푸시 알림 누락률 90% 감소</li><li>데이터 유실률 1% 미만</li><li>코드 품질 30% 향상</li><li>200개 이상 테스트 케이스로 에러 검출</li><li>계획 대비 3주 앞당겨 완료</li></ul></div>
            </div>
          </div></div>
        </div>

        <div className="row">
          <button type="button" className="rowbtn" onClick={v.toggle.m3} aria-expanded={v.open.m3}>
            <span className="mono idx">M/03</span><span className="rowtitle">캄보디아 개발자 가이드 사이트</span><span className="mono period">2024.03 – 2024.05</span>
            <span className="sign" aria-hidden="true">{v.open.m3 && (<>−</>)}{v.closed.m3 && (<>+</>)}</span>
          </button>
          <div className={`acc ${v.accCls.m3}`}><div className="acc-in">
            <div className="rowbody">
              <div><h4 className="mono">Overview</h4><p style={{ margin: "0" }}>현지 개발자를 위한 다국어 기술 문서 사이트.</p><div className="tags"><span className="tag">React</span><span className="tag">Docusaurus</span><span className="tag">GitLab</span></div></div>
              <div><h4 className="mono">Key contributions</h4><ul><li>Docusaurus 기반 다국어 개발자 가이드 플랫폼 구축</li><li>정적 사이트 생성으로 빠른 로딩 확보</li><li>기존 한글 가이드를 영어로 번역·문서화</li></ul></div>
              <div><h4 className="mono">Result</h4><ul className="res"><li>현지 개발자 교육 효율 증대</li><li>사내 플랫폼 이해도 향상</li></ul></div>
            </div>
          </div></div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: "8px 24px", padding: "40px 0 12px", borderBottom: "2px solid var(--line)" }}><span style={{ fontSize: "20px", fontWeight: "700" }}>Korea — Frontend Developer</span><span className="mono" style={{ color: "var(--muted)" }}>2022.08 – 2024.01 · 1년 5개월</span></div>

        <div className="row">
          <button type="button" className="rowbtn" onClick={v.toggle.m4} aria-expanded={v.open.m4}>
            <span className="mono idx">M/04</span><span className="rowtitle">YUGA · 사내 개발자 유틸 관리 사이트</span><span className="mono period">2023.01 – 2024.01</span>
            <span className="sign" aria-hidden="true">{v.open.m4 && (<>−</>)}{v.closed.m4 && (<>+</>)}</span>
          </button>
          <div className={`acc ${v.accCls.m4}`}><div className="acc-in">
            <div className="rowbody">
              <div><h4 className="mono">Overview</h4><p style={{ margin: "0" }}>사내 개발자 유틸리티 관리 사이트 유지보수.</p><div className="tags"><span className="tag">Vue 2</span><span className="tag">SVN</span></div></div>
              <div><h4 className="mono">Key contributions</h4><ul><li>Legacy 코드 분석, 추가 기능 개발 및 QA</li><li>파트장 권한 추가 및 필터링 수정</li><li>PM 권한, TBN/Outsourcing 등급 null 처리</li><li>개발환경 세팅 프로세스 개선, 리팩토링</li></ul></div>
              <div><h4 className="mono">Result</h4><ul className="res"><li>개발 환경 개선</li><li>코드 품질 향상</li></ul></div>
            </div>
          </div></div>
        </div>

        <div className="row">
          <button type="button" className="rowbtn" onClick={v.toggle.m5} aria-expanded={v.open.m5}>
            <span className="mono idx">M/05</span><span className="rowtitle">사내 자산 관리 시스템 개발</span><span className="mono period">2023.10 – 2023.12</span>
            <span className="sign" aria-hidden="true">{v.open.m5 && (<>−</>)}{v.closed.m5 && (<>+</>)}</span>
          </button>
          <div className={`acc ${v.accCls.m5}`}><div className="acc-in">
            <div className="rowbody">
              <div><h4 className="mono">Overview</h4><p style={{ margin: "0" }}>수작업이던 사내 자산 관리 업무를 디지털화한 시스템.</p><div className="tags"><span className="tag">Vue.js</span><span className="tag">Vuetify</span><span className="tag">Spring</span><span className="tag">Postman</span></div></div>
              <div><h4 className="mono">Key contributions</h4><ul><li>직원관리, 코드관리, 히스토리 조회 등 핵심 기능 구현</li><li>Vuetify 컴포넌트로 UI/UX 개선</li><li>데이터 시각화로 자산 현황 대시보드 구축</li></ul></div>
              <div><h4 className="mono">Result</h4><ul className="res"><li>자산 관리 프로세스 디지털화</li><li>실시간 자산 현황 파악, 재무 투명성 향상</li></ul></div>
            </div>
          </div></div>
        </div>

        <div className="row">
          <button type="button" className="rowbtn" onClick={v.toggle.m6} aria-expanded={v.open.m6}>
            <span className="mono idx">M/06</span><span className="rowtitle">IRIS · 대규모 B2B 방문판매 앱 · AWS 이관</span><span className="mono period">2023.01 – 2023.12</span>
            <span className="sign" aria-hidden="true">{v.open.m6 && (<>−</>)}{v.closed.m6 && (<>+</>)}</span>
          </button>
          <div className={`acc ${v.accCls.m6}`}><div className="acc-in">
            <div className="rowbody">
              <div><h4 className="mono">Overview</h4><p style={{ margin: "0" }}>아모레퍼시픽 B2B 방문판매 모바일 앱의 유지보수·개선과 서버 이관.</p><div className="tags"><span className="tag">JavaScript</span><span className="tag">jQuery</span><span className="tag">Java</span><span className="tag">AWS CloudWatch</span><span className="tag">InterMax</span><span className="tag">JIRA</span></div></div>
              <div><h4 className="mono">Key contributions</h4><ul><li>CloudWatch·InterMax 실시간 모니터링, API 장애 대응</li><li>카운셀러 CI 정보 수집, NICE 본인인증 로직 개선</li><li>무중단 배포, 앱·관리자 웹 매뉴얼 작성</li><li>AWS 이관 프론트엔드 개발 — 디바이스 인증 로직 개선, 서버팀과 통합 테스트</li></ul></div>
              <div><h4 className="mono">Result</h4><ul className="res"><li>일 사용자 1만 명, 동시접속 1천 명 규모 운영</li><li>API 장애 1시간 이내 해결</li><li>Go-live 2일 만에 문의 발생률 80% 감소</li></ul></div>
            </div>
          </div></div>
        </div>
      </section>
    </>
  );
}
