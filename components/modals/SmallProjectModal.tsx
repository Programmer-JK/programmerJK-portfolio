// Our Little Archive 팝업
import type { PortfolioState } from "@/lib/usePortfolio";

export default function SmallProjectModal({ v }: { v: PortfolioState }) {
  return (
    <>

      {v.pmOpen && (<>
        <div className="modal" role="dialog" aria-modal="true" aria-label={v.pmLabel}>
          <button type="button" className="modal-bg" aria-label="닫기" onClick={v.closeP}></button>
          <div className="modal-panel" style={{ maxWidth: v.pmWidth }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px", padding: "12px 20px", borderBottom: "2px solid var(--line)", background: "var(--ink)", color: "var(--bg)" }}>
              <span className="mono">{v.pmLabel}</span>
              <button type="button" className="btn mono" onClick={v.closeP} style={{ background: "var(--bg)", color: "var(--ink)" }}>닫기 ✕</button>
            </div>
            <div style={{ padding: "clamp(20px, 3vw, 40px)", display: "flex", flexDirection: "column", gap: "24px" }}>

              {v.pv.linky && (<>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px 32px" }}><div><h2 className="mtitle">링키라운지 공식 홈페이지</h2><p className="im-desc" style={{ margin: "12px 0 0" }}>링키라운지의 공식 홈페이지입니다. 서비스 소개와 결제까지 한 사이트에서 이어지도록 만들었습니다.</p></div><a className="btn mono" href="https://www.linkylounge.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>사이트 ↗</a></div>
                <div className="tags" style={{ margin: "0" }}><span className="tag">Next.js</span><span className="tag">TypeScript</span><span className="tag">Toss Payments</span><span className="tag">Framer Motion</span><span className="tag">Radix UI</span><span className="tag">Recharts</span><span className="tag">Vercel Analytics</span></div>
                <div className="im-box"><h3 style={{ marginTop: "0" }}>만든 것</h3><ul className="im-list"><li>Next.js와 TypeScript로 홈페이지 전체 구현</li><li>토스페이먼츠 결제 연동</li><li>Framer Motion으로 스크롤과 화면 전환 인터랙션</li><li>Radix UI로 컴포넌트를 구성하고, Recharts로 데이터 차트 표시</li><li>Vercel Analytics로 방문 데이터 확인</li></ul></div>
              </>)}

              {v.pv.moim && (<>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px 32px" }}><div><h2 className="mtitle">모임 성격 진단 웹앱</h2><p className="im-desc" style={{ margin: "12px 0 0" }}>질문 다섯 개에 답하면 우리 모임이 어떤 성격인지 네 가지 유형 중 하나로 알려 주는 웹앱입니다. 끝까지 답하게 만드는 흐름을 가장 많이 고민했습니다.</p></div><a className="btn mono" href="https://linky-intro.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>사이트 ↗</a></div>
                <div className="tags" style={{ margin: "0" }}><span className="tag">Next.js</span><span className="tag">Framer Motion</span><span className="tag">Google Sheets API</span></div>
                <div className="im-grid">
                  <div className="im-box"><h3 style={{ marginTop: "0" }}>흐름 설계</h3><ul className="im-list"><li>한 화면에 질문 하나만 — 고르는 데 망설이지 않도록</li><li>다섯 문항이면 충분하다고 판단해 짧고 가볍게 끝나는 경험을 우선함</li><li>질문 사이 전환에 Framer Motion을 넣어 스스로 질문에 답하는 듯한 감각 부여</li></ul></div>
                  <div className="im-box"><h3 style={{ marginTop: "0" }}>결과 화면</h3><ul className="im-list"><li>유형 이름과 한 줄 설명만 크게 — 결과를 받아드는 순간의 인상에 집중</li><li>어느 단계에서 이탈하는지 추적해 질문 문구와 순서를 다듬는 데 활용</li><li>응답은 Google Sheets API로 저장해 별도 어드민 없이 바로 확인</li></ul></div>
                </div>
              </>)}

              {v.pv.ani && (<>
                <div><h2 className="mtitle">Aniwhere</h2><p className="im-desc" style={{ margin: "12px 0 0" }}>애니메이션 리뷰 사이트입니다. 팀으로 진행하면서 코드 스타일과 커밋 규칙을 먼저 맞춰 두는 데 신경을 썼습니다.</p></div>
                <div className="tags" style={{ margin: "0" }}><span className="tag">Next.js</span><span className="tag">TypeScript</span><span className="tag">Tailwind CSS</span><span className="tag">Spring</span><span className="tag">MySQL</span><span className="tag">Swagger</span><span className="tag">AWS</span></div>
                <div className="im-grid">
                  <div className="im-box"><h3 style={{ marginTop: "0" }}>만든 것</h3><ul className="im-list"><li>App Router로 페이지 구성, Parallel Routes로 모달 구현</li><li>회원가입, 로그인 등 인증 기능</li><li>Button, Input, Checkbox, DatePicker 같은 공통 컴포넌트</li><li>반응형 화면</li></ul></div>
                  <div className="im-box"><h3 style={{ marginTop: "0" }}>협업 방식</h3><ul className="im-list"><li>ESLint, Prettier로 코드 스타일 통일</li><li>Husky로 커밋 전에 검사가 자동으로 돌도록 설정</li><li>코드 컨벤션을 정해서 문서로 공유</li></ul></div>
                </div>
              </>)}

            </div>
          </div>
        </div>
      </>)}


    </>
  );
}
