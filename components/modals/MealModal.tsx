// 보존식 기록표 팝업
import type { PortfolioState } from "@/lib/usePortfolio";

export default function MealModal({ v }: { v: PortfolioState }) {
  return (
    <>

      {v.mrOpen && (<>
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="mr-title">
          <button type="button" className="modal-bg" aria-label="서비스 설명 닫기" onClick={v.closeMr}></button>
          <div className="modal-panel">
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px", padding: "12px 20px", borderBottom: "2px solid var(--line)", background: "var(--ink)", color: "var(--bg)" }}>
              <span className="mono">04 · 보존식 기록표 · Service overview</span>
              <button type="button" className="btn mono" onClick={v.closeMr} style={{ background: "var(--bg)", color: "var(--ink)" }}>닫기 ✕</button>
            </div>
            <div style={{ padding: "clamp(20px, 3vw, 40px)", display: "flex", flexDirection: "column", gap: "28px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px 32px" }}>
                <div><h2 id="mr-title" style={{ margin: "0", fontSize: "clamp(32px, 4.4vw, 56px)", letterSpacing: "-.03em", lineHeight: "1.1", fontWeight: "700" }}>보존식 기록표</h2><p className="mono" style={{ margin: "8px 0 0", color: "var(--muted)", textTransform: "none" }}>Meal Retention Record</p><p style={{ margin: "14px 0 0", maxWidth: "620px", fontSize: "16px", lineHeight: "1.7", color: "var(--muted)" }}>어린이급식관리지원센터 조리사 어르신들이 쉽게 쓸 수 있도록 설계한 보존식 관리 웹앱. 큰 글씨, 큰 버튼, 꼭 필요한 기능만 담았습니다.</p></div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}><a className="btn mono" href="https://meal-retention-record.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>사이트 ↗</a><a className="btn mono" href="https://github.com/Programmer-JK/Meal-Retention-Record" target="_blank" rel="noopener noreferrer" style={{ background: "transparent", color: "var(--ink)", textDecoration: "none" }}>GitHub ↗</a></div>
              </div>
              <div style={{ border: "2px solid var(--line)", background: "var(--accent)", color: "var(--on-accent)" }}>
                <p className="mono" style={{ margin: "0", padding: "12px 16px", borderBottom: "2px solid var(--line)" }}>사용자는 50~60대 조리사 어르신</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 160px), 1fr))" }}>
                  <div style={{ padding: "16px", borderRight: "2px solid var(--line)", marginRight: "-2px" }}><span className="statnum" style={{ fontSize: "clamp(40px, 4.4vw, 60px)" }}>23px</span><p style={{ margin: "6px 0 0", fontSize: "14px" }}>본문 글씨. 보통 웹은 14~16px</p></div>
                  <div style={{ padding: "16px", borderRight: "2px solid var(--line)", marginRight: "-2px" }}><span className="statnum" style={{ fontSize: "clamp(40px, 4.4vw, 60px)" }}>22px</span><p style={{ margin: "6px 0 0", fontSize: "14px" }}>버튼 글씨, 터치 영역도 넉넉하게</p></div>
                  <div style={{ padding: "16px", borderRight: "2px solid var(--line)", marginRight: "-2px" }}><span className="statnum" style={{ fontSize: "clamp(40px, 4.4vw, 60px)" }}>2</span><p style={{ margin: "6px 0 0", fontSize: "14px" }}>화면 수. 로그인과 기록 목록</p></div>
                  <div style={{ padding: "16px" }}><span className="statnum" style={{ fontSize: "clamp(40px, 4.4vw, 60px)" }}>4</span><p style={{ margin: "6px 0 0", fontSize: "14px" }}>단계면 하루 기록이 끝남</p></div>
                </div>
              </div>
              <div className="tags" style={{ margin: "0" }}><span className="tag">React 18</span><span className="tag">Vite 5</span><span className="tag">Vercel Serverless</span><span className="tag">Neon PostgreSQL</span><span className="tag">ExcelJS</span><span className="tag">Web Crypto</span></div>
              <div className="im-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))" }}>
                <div className="im-box im-feat"><figure className="phone-fig"><img src="/images/meal-screen-1.png" alt="일반 웹과 이 앱의 글씨·버튼·입력창 크기 비교" width="160" height="328" /><figcaption className="mono">Fig. 01 — 크기 비교</figcaption></figure><div className="im-feat-t"><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>01 · Accessibility</p><h3>큰 글씨, 큰 버튼</h3><p className="im-desc">사용자가 50~60대 조리사 어르신이라는 점에 맞췄습니다. 돋보기 없이도 편하게 쓸 수 있는 크기입니다.</p><ul className="im-list"><li>본문 23px · 버튼 22px · 헤더 30px+</li><li>입력 필드 padding 16px — 넉넉한 터치 영역</li><li>고대비 녹색 테마 — 시인성 우선</li></ul></div></div>
                <div className="im-box im-feat"><figure className="phone-fig"><img src="/images/meal-screen-2.png" alt="로그인, 입력, 저장, 인쇄 4단계 워크플로우" width="160" height="328" /><figcaption className="mono">Fig. 02 — 워크플로우</figcaption></figure><div className="im-feat-t"><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>02 · Simplicity</p><h3>꼭 필요한 것만, 4단계</h3><p className="im-desc">복잡한 메뉴, 설정, 대시보드 없이 로그인 → 입력 → 저장 → 인쇄로 끝납니다.</p><ul className="im-list"><li>화면 2개 — 로그인 · 기록 목록</li><li>폐기일 자동 계산 — 사용자가 할 일 최소화</li><li>낮 기록 / 석식 분리 — 한 번에 한 가지만</li></ul></div></div>
                <div className="im-box im-feat"><figure className="phone-fig"><img src="/images/meal-screen-3.png" alt="모바일 기록 목록: 빠른 필터, 큰 입력 버튼, 수정·삭제 버튼이 있는 기록 카드" width="160" height="328" /><figcaption className="mono">Fig. 03 — 기록 목록</figcaption></figure><div className="im-feat-t"><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>03 · Responsive</p><h3>모바일에서도 같은 크기</h3><p className="im-desc">데스크톱에서는 테이블, 모바일에서는 카드형 리스트로 자동 전환됩니다. 글씨와 버튼 크기는 어디서나 동일합니다.</p><ul className="im-list"><li>데스크톱 테이블 ↔ 모바일 카드 자동 전환</li><li>당일·일주일·한달·3달 빠른 필터</li><li>수정·삭제 버튼도 큼직하게</li></ul></div></div>
                <div className="im-box im-feat"><figure className="phone-fig"><img src="/images/meal-screen-4.png" alt="현장 서식과 같은 인쇄용 보존식 카드와 엑셀 내보내기 미리보기" width="160" height="328" /><figcaption className="mono">Fig. 04 — 인쇄 · 엑셀</figcaption></figure><div className="im-feat-t"><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>04 · Output</p><h3>인쇄 카드 &amp; 엑셀</h3><p className="im-desc">실제 현장 서식과 같은 인쇄 카드를 A4에 8장씩 자동 배치합니다. 엑셀로도 한 번에 내보낼 수 있습니다.</p><ul className="im-list"><li>@media print — A4 2열×4행 자동 배치</li><li>체크박스로 선택 인쇄</li><li>ExcelJS — 스타일 포함 .xlsx 내보내기</li></ul></div></div>
              </div>
              <div>
                <h4 className="mono" style={{ margin: "0 0 12px" }}>05 · 서버리스 풀스택 구조</h4>
                <div className="arch">
                  <div className="arch-n"><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>Frontend</p><p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.7" }}>React 18 — SPA<br />Vite 5 — 빌드 · HMR<br />JavaScript — ES Modules</p></div>
                  <div className="arch-n" style={{ background: "var(--accent)", color: "var(--on-accent)" }}><p className="mono" style={{ margin: "0" }}>Backend</p><p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.7" }}>Vercel Serverless Functions — /api<br />Neon Serverless PostgreSQL<br />@neondatabase/serverless 드라이버</p></div>
                  <div className="arch-n"><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>Libraries</p><p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.7" }}>ExcelJS<br />Web Crypto<br />Express</p></div>
                </div>
                <p className="im-desc" style={{ margin: "16px 0 0" }}>서버 관리 없이 배포만으로 운영됩니다. 기획·설계·구현·배포까지 1인 개발.</p>
              </div>
            </div>
          </div>
        </div>
      </>)}


    </>
  );
}
