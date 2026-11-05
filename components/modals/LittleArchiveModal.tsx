// Our Little Archive 팝업
import type { PortfolioState } from "@/lib/usePortfolio";

export default function LittleArchiveModal({ v }: { v: PortfolioState }) {
  return (
    <>

      {v.laOpen && (<>
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="la-title">
          <button type="button" className="modal-bg" aria-label="닫기" onClick={v.closeLa}></button>
          <div className="modal-panel" style={{ maxWidth: v.pmWidth }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px", padding: "12px 20px", borderBottom: "2px solid var(--line)", background: "var(--ink)", color: "var(--bg)" }}>
              <span className="mono">01 · Our Little Archive</span>
              <button type="button" className="btn mono" onClick={v.closeLa} style={{ background: "var(--bg)", color: "var(--ink)" }}>닫기 ✕</button>
            </div>
            <div style={{ padding: "clamp(20px, 3vw, 40px)", display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px 32px" }}>
                <div><h2 className="mtitle">Our Little Archive</h2><p className="mono" style={{ margin: "8px 0 0", color: "var(--muted)", textTransform: "none" }}>우리의 작은 기록 보관함</p><p className="im-desc" style={{ margin: "14px 0 0", maxWidth: "620px" }}>둘이서만 쓰는 디지털 다이어리입니다. 추억을 남기고, 하고 싶은 것을 모으고, 서로 사진을 주고받습니다. 초대받은 두 계정만 들어올 수 있습니다.</p></div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}><a className="btn mono" href="https://p-littlearchive.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>사이트 ↗</a><a className="btn mono" href="https://github.com/Programmer-JK/P-littlearchive" target="_blank" rel="noopener noreferrer" style={{ background: "transparent", color: "var(--ink)", textDecoration: "none" }}>GitHub ↗</a></div>
              </div>
              <div className="tags" style={{ margin: "0" }}><span className="tag">Next.js 16</span><span className="tag">TypeScript strict</span><span className="tag">Tailwind CSS v4</span><span className="tag">Firebase Auth</span><span className="tag">Cloud Firestore</span><span className="tag">Firebase Storage</span><span className="tag">Vercel</span><span className="tag">pnpm</span></div>
              <div className="im-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))" }}>
                <div className="im-box im-feat"><figure className="phone-fig"><img src="/images/archive-screen-1.png" alt="홈 화면: 함께한 날 수와 다가오는 기념일 목록" width="160" height="328" /><figcaption className="mono">Fig. 01 — 홈</figcaption></figure><div className="im-feat-t"><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>01 · D-Day</p><h3>D-Day와 다가오는 날</h3><p className="im-desc">사귀기 시작한 날부터 오늘까지 자동으로 셉니다. 100일 단위나 기념일이 가까워지면 홈에서 바로 보입니다.</p><ul className="im-list"><li>100일, 200일 자동 계산</li><li>크리스마스, N주년 같은 기념일 추가</li><li>D-DAY, D-n 형태로 표시</li></ul></div></div>
                <div className="im-box im-feat"><figure className="phone-fig"><img src="/images/archive-screen-2.png" alt="사진첩: 월별 책이 꽂힌 책장과 펼친 목차 페이지" width="160" height="328" /><figcaption className="mono">Fig. 02 — 책장</figcaption></figure><div className="im-feat-t"><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>02 · 추억</p><h3>추억이 책으로 쌓여요</h3><p className="im-desc">함께한 날을 사진과 글로 남기면 월별로 한 권씩 책이 만들어지고, 페이지를 넘기듯 꺼내 볼 수 있습니다.</p><ul className="im-list"><li>월별 책 한 권이 책장에 꽂힘</li><li>사진, 날짜 도장, 후기</li><li>타임라인 보기로도 전환</li></ul></div></div>
                <div className="im-box im-feat"><figure className="phone-fig"><img src="/images/archive-screen-3.png" alt="하고 싶은 것: 티켓 모양의 계획 카드와 했어요, 날짜 정하기 버튼" width="160" height="328" /><figcaption className="mono">Fig. 03 — 티켓</figcaption></figure><div className="im-feat-t"><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>03 · 하고 싶은 것</p><h3>티켓으로 모아요</h3><p className="im-desc">가고 싶은 곳, 먹고 싶은 것을 티켓처럼 담아 둡니다. 날짜가 잡히면 계획 중으로, 다녀오면 도장을 찍습니다.</p><ul className="im-list"><li>하고 싶은 일 → 날짜 정하기 → 했어요</li><li>완료하면 다녀옴 도장</li><li>완료 후 추억 기록으로 바로 연결</li></ul></div></div>
                <div className="im-box im-feat"><figure className="phone-fig"><img src="/images/archive-screen-4.png" alt="우리의 규칙: 둘이 정한 약속 목록과 지키는 중 표시" width="160" height="328" /><figcaption className="mono">Fig. 04 — 규칙</figcaption></figure><div className="im-feat-t"><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>04 · 규칙</p><h3>우리만의 규칙</h3><p className="im-desc">둘이 정한 약속을 한곳에 모아 둡니다. 누가 제안했는지, 잘 지키고 있는지 같이 확인합니다.</p><ul className="im-list"><li>누구든 규칙 제안 가능</li><li>지키는 중 / 아직 표시</li><li>둘만 보는 약속</li></ul></div></div>
              </div>

              <div style={{ border: "2px solid var(--line)", background: "var(--panel)", padding: "clamp(18px, 2.4vw, 28px)", display: "flex", flexDirection: "column", gap: "18px" }}>
                <div><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>Design decisions</p><h3 style={{ margin: "6px 0 0", fontSize: "24px" }}>왜 이만큼만 만들었는지</h3></div>
                <p style={{ margin: "0", padding: "14px 18px", border: "2px solid var(--line)", background: "var(--accent)", color: "var(--on-accent)", fontSize: "16px", lineHeight: "1.7", fontWeight: "500" }}>AI가 만든 화면은 빈틈이 없고, 균일하고, 친절하다. 사람이 만든 화면에는 선택과 생략, 그리고 의도된 불균형이 있다.<span className="mono" style={{ display: "block", marginTop: "6px", fontSize: "11px", textTransform: "none" }}>design-guide.md</span></p>
                <p className="im-desc" style={{ margin: "0" }}>처음 만든 프로토타입은 폰트 5종에 테이프, 줄노트, 폴라로이드, 손글씨를 한 화면에 다 올렸고, D-Day 숫자는 82px였습니다. 감성 앱의 뻔한 모양을 그대로 따라가고 있었습니다. 그래서 디자인 가이드를 새로 쓰고 요소를 30% 줄이는 걸 목표로 빼는 리뷰를 했습니다.</p>
                <div className="im-grid">
                  <div className="im-box" style={{ background: "var(--bg)" }}><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>타이포</p><h3 style={{ margin: "6px 0 8px", fontSize: "18px" }}>폰트 5종에서 2종으로</h3><p className="im-desc" style={{ margin: "0" }}>Instrument Serif, Nanum Pen Script, mono를 지우고 Gowun Dodum과 Gowun Batang만 남겼습니다. 크기도 12 / 14 / 16 / 20 / 28 다섯 단계로 정리했습니다.</p></div>
                  <div className="im-box" style={{ background: "var(--bg)" }}><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>소품</p><h3 style={{ margin: "6px 0 8px", fontSize: "18px" }}>한 화면에 소품은 하나만</h3><p className="im-desc" style={{ margin: "0" }}>추억 상세에는 테이프 하나, 사진첩에는 폴라로이드 테두리만. 나머지 화면은 소품 없이 두었습니다.</p></div>
                  <div className="im-box" style={{ background: "var(--bg)" }}><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>문구</p><h3 style={{ margin: "6px 0 8px", fontSize: "18px" }}>안내 문구는 앱 전체에서 3개 이하</h3><p className="im-desc" style={{ margin: "0" }}>"우리의 첫 페이지" 같은 감성 부제는 전부 지웠습니다. 감성은 UI가 아니라 두 사람이 쓴 글에서 나온다고 봤습니다.</p></div>
                  <div className="im-box" style={{ background: "var(--bg)" }}><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>메타포</p><h3 style={{ margin: "6px 0 8px", fontSize: "18px" }}>다른 앱 대신 실물에서 빌려오기</h3><p className="im-desc" style={{ margin: "0" }}>사진첩은 책장의 책, 버킷리스트는 티켓. 필름 앨범, 도서관 대출 카드, 사진관 봉투에서 레이아웃 규칙을 한두 개씩만 가져왔습니다.</p></div>
                  <div className="im-box" style={{ background: "var(--bg)" }}><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>구조</p><h3 style={{ margin: "6px 0 8px", fontSize: "18px" }}>두 사람뿐이라는 제약</h3><p className="im-desc" style={{ margin: "0" }}>팔로우도, 공개 범위 설정도, 알림 설정도 없습니다. 쓰는 사람이 정확히 둘이라는 제약 덕분에 화면이 줄었습니다.</p></div>
                  <div className="im-box" style={{ background: "var(--bg)" }}><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>방법</p><h3 style={{ margin: "6px 0 8px", fontSize: "18px" }}>빼는 리뷰</h3><p className="im-desc" style={{ margin: "0" }}>요소마다 "이걸 지우면 곤란한가?"를 물어서 아니면 지웠습니다. 홈의 빠른 추가 버튼 2개, 82px D-Day 숫자, 따로 있던 타임라인 탭이 이렇게 빠졌습니다.</p></div>
                </div>
              </div>

              <div>
                <h4 className="mono" style={{ margin: "0 0 12px" }}>어떻게 만들었는지</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                  <div className="code" style={{ flex: "1 1 300px" }}><div className="code-h">보안 · 멤버 변경은 서버에서만</div><div className="pre">{`// Firestore 보안 규칙 핵심
allow update: if isMember(coupleId)
  && !diff.affectedKeys()
    .hasAny(['memberUids','invite']);`}</div></div>
                  <div className="code" style={{ flex: "1 1 300px" }}><div className="code-h">실시간 · onSnapshot 커스텀 훅</div><div className="pre">{`const { memories } = useMemories(coupleId);
const { items } = useWishlist(coupleId);
// onSnapshot 기반, 새로고침 없이 반영`}</div></div>
                  <div className="code" style={{ flex: "1 1 300px" }}><div className="code-h">3D CSS · 책 페이지 넘김</div><div className="pre">{`perspective: 1500px;
transform: rotateY(-180deg)
  translateZ(8px);  // 넘길 때 살짝 들어 올림
backface-visibility: hidden;`}</div></div>
                  <div className="code" style={{ flex: "1 1 300px" }}><div className="code-h">날짜 · UTC 하루 밀림 방지</div><div className="pre">{`// new Date('2025-03-14') → UTC로 해석됨
// parseLocalDate('2025-03-14')
const [y, m, d] = s.split('-');
return new Date(+y, +m - 1, +d);`}</div></div>
                </div>
                <ul className="im-list" style={{ marginTop: "16px" }}><li>초대 코드는 서버(Route Handler + Admin SDK)에서 만들고 Firestore에는 해시만 저장합니다. memberUids는 클라이언트가 바꿀 수 없습니다</li><li>사진은 올리기 전에 브라우저에서 1600px 원본과 400px 썸네일 JPEG로 줄여 저장 비용과 로딩 시간을 같이 줄였습니다</li><li>책 넘김은 멈춰 있을 때 3D를 꺼서 렌더링 품질을 유지합니다</li></ul>
              </div>

            </div>
          </div>
        </div>
      </>)}


    </>
  );
}
