// 놀아조라 ARCADE 팝업
import type { PortfolioState } from "@/lib/usePortfolio";

export default function ArcadeModal({ v }: { v: PortfolioState }) {
  return (
    <>

      {v.arOpen && (<>
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="ar-title">
          <button type="button" className="modal-bg" aria-label="서비스 설명 닫기" onClick={v.closeAr}></button>
          <div className="modal-panel">
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px", padding: "12px 20px", borderBottom: "2px solid var(--line)", background: "var(--ink)", color: "var(--bg)" }}>
              <span className="mono">02 · 놀아조라 ARCADE · Service overview</span>
              <button type="button" className="btn mono" onClick={v.closeAr} style={{ background: "var(--bg)", color: "var(--ink)" }}>닫기 ✕</button>
            </div>
            <div style={{ padding: "clamp(20px, 3vw, 40px)", display: "flex", flexDirection: "column", gap: "28px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px 32px" }}>
                <div><img src="/images/arcade-logo.png" alt="놀아조라 로고" width="72" height="72" style={{ display: "block", width: "72px", height: "72px", marginBottom: "14px", border: "2px solid var(--line)" }} /><h2 id="ar-title" style={{ margin: "0", fontSize: "clamp(32px, 4.4vw, 56px)", letterSpacing: "-.03em", lineHeight: "1.1", fontWeight: "700" }}>놀아조라 <span className="wide" style={{ fontWeight: "800" }}>ARCADE</span></h2><p style={{ margin: "14px 0 0", maxWidth: "620px", fontSize: "16px", lineHeight: "1.7", color: "var(--muted)" }}>설치 없이 브라우저에서 바로. 닉네임만 입력하고, 방 코드를 공유해서 친구들과 함께 즐기는 보드게임 아케이드.</p></div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}><a className="btn mono" href="https://nola-zora.vercel.app/lobby" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>사이트 ↗</a><a className="btn mono" href="https://github.com/Programmer-JK/nola-zora" target="_blank" rel="noopener noreferrer" style={{ background: "transparent", color: "var(--ink)", textDecoration: "none" }}>GitHub ↗</a></div>
              </div>
              <div className="tags" style={{ margin: "0" }}><span className="tag">Next.js 15</span><span className="tag">TypeScript</span><span className="tag">Tailwind CSS v4</span><span className="tag">Firebase Anonymous Auth</span><span className="tag">Realtime DB</span><span className="tag">Three.js</span><span className="tag">Howler.js</span><span className="tag">qrcode.react</span><span className="tag">Vercel</span></div>
              <div className="chips"><span className="mono" style={{ marginRight: "8px", color: "var(--muted)" }}>입장 흐름</span><span className="tag" style={{ background: "var(--bg)" }}>닉네임 입력</span><span className="mono">→</span><span className="tag" style={{ background: "var(--ink)", color: "var(--bg)" }}>INSERT COIN</span><span className="mono">→</span><span className="tag" style={{ background: "var(--bg)" }}>게임 고르기</span><span className="mono">→</span><span className="tag" style={{ background: "var(--bg)" }}>방 코드 · QR 보내기</span><span className="mono">→</span><span className="tag" style={{ background: "var(--accent)", color: "var(--on-accent)" }}>시작</span><span className="mono" style={{ marginLeft: "auto", color: "var(--muted)" }}>회원가입, 앱 설치 없음</span></div>
              <div>
                <h4 className="mono" style={{ margin: "0 0 12px" }}>게임 화면</h4>
                <div className="gallery">
                  <figure><img src="/images/arcade-game-yacht.png" alt="야추 게임 화면: 주사위 5개와 족보 선택" width="132" height="260" /><figcaption className="mono">야추</figcaption></figure>
                  <figure><img src="/images/arcade-game-lasvegas.png" alt="라스베가스 게임 화면: 카지노 6곳과 배팅 버튼" width="132" height="260" /><figcaption className="mono">라스베가스</figcaption></figure>
                  <figure><img src="/images/arcade-game-liar.png" alt="라이어 게임 화면: 제시어와 참여자 투표 상태" width="132" height="260" /><figcaption className="mono">라이어 게임</figcaption></figure>
                  <figure><img src="/images/arcade-game-ghost.png" alt="유령의 장례식 화면: 사건 정보와 용의자 고발" width="132" height="260" /><figcaption className="mono">유령의 장례식</figcaption></figure>
                </div>
              </div>
              <div>
                <h4 className="mono" style={{ margin: "0 0 12px" }}>게임 9종</h4>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 170px), 1fr))", gap: "8px" }}>
                  <div style={{ border: "2px solid var(--line)", padding: "12px", display: "flex", flexDirection: "column", gap: "4px", background: "var(--accent)", color: "var(--on-accent)" }}><b style={{ fontSize: "15px" }}>저주받은 경매장</b><span className="mono" style={{ fontSize: "10px" }}>Cursed Auction</span><span className="mono" style={{ fontSize: "10px" }}>New</span></div>
                  <div style={{ border: "2px solid var(--line)", padding: "12px", display: "flex", flexDirection: "column", gap: "4px", background: "var(--panel)" }}><b style={{ fontSize: "15px" }}>라이어 게임</b><span className="mono" style={{ fontSize: "10px", color: "var(--muted)" }}>3–8인 · 소셜 디덕션</span><span className="mono" style={{ fontSize: "10px" }}>로컬 / 온라인</span></div>
                  <div style={{ border: "2px solid var(--line)", padding: "12px", display: "flex", flexDirection: "column", gap: "4px", background: "var(--panel)" }}><b style={{ fontSize: "15px" }}>요트</b><span className="mono" style={{ fontSize: "10px", color: "var(--muted)" }}>1–6인 · 주사위 족보</span><span className="mono" style={{ fontSize: "10px" }}>로컬 / 온라인</span></div>
                  <div style={{ border: "2px solid var(--line)", padding: "12px", display: "flex", flexDirection: "column", gap: "4px", background: "var(--panel)" }}><b style={{ fontSize: "15px" }}>라스베가스</b><span className="mono" style={{ fontSize: "10px", color: "var(--muted)" }}>2–6인 · 주사위 전략</span><span className="mono" style={{ fontSize: "10px" }}>로컬 / 온라인</span></div>
                  <div style={{ border: "2px solid var(--line)", padding: "12px", display: "flex", flexDirection: "column", gap: "4px", background: "var(--panel)" }}><b style={{ fontSize: "15px" }}>캐릭터 카드</b><span className="mono" style={{ fontSize: "10px", color: "var(--muted)" }}>2인+ · 파티 카드</span><span className="mono" style={{ fontSize: "10px" }}>로컬 / 온라인</span></div>
                  <div style={{ border: "2px solid var(--line)", padding: "12px", display: "flex", flexDirection: "column", gap: "4px", background: "var(--panel)" }}><b style={{ fontSize: "15px" }}>나는 누구?</b><span className="mono" style={{ fontSize: "10px", color: "var(--muted)" }}>2–8인 · 소셜 추리</span><span className="mono" style={{ fontSize: "10px" }}>온라인</span></div>
                  <div style={{ border: "2px solid var(--line)", padding: "12px", display: "flex", flexDirection: "column", gap: "4px", background: "var(--panel)" }}><b style={{ fontSize: "15px" }}>아브라카왓</b><span className="mono" style={{ fontSize: "10px", color: "var(--muted)" }}>2–6인 · 마법 블러핑</span><span className="mono" style={{ fontSize: "10px" }}>온라인</span></div>
                  <div style={{ border: "2px solid var(--line)", padding: "12px", display: "flex", flexDirection: "column", gap: "4px", background: "var(--panel)" }}><b style={{ fontSize: "15px" }}>유령의 장례식</b><span className="mono" style={{ fontSize: "10px", color: "var(--muted)" }}>4–8인 · 추리</span><span className="mono" style={{ fontSize: "10px" }}>온라인</span></div>
                  <div style={{ border: "2px solid var(--line)", padding: "12px", display: "flex", flexDirection: "column", gap: "4px", background: "var(--panel)" }}><b style={{ fontSize: "15px" }}>구룡투</b><span className="mono" style={{ fontSize: "10px", color: "var(--muted)" }}>2인 · 1v1 전략</span><span className="mono" style={{ fontSize: "10px" }}>온라인</span></div>
                </div>
                <p className="im-desc" style={{ margin: "14px 0 0" }}>게임마다 규칙과 점수 계산을 직접 짰습니다. 아브라카왓의 주문 콤보, 요트의 족보, 나는 누구?의 오답 대기 시간, 구룡투의 3판 2선승 같은 것들입니다. 한 기기를 돌려 가며 하는 로컬 모드도 있습니다.</p>
              </div>
              <div className="im-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))" }}>
                <div className="im-box im-feat"><figure className="phone-fig"><img src="/images/arcade-screen-1.png" alt="아케이드 스타일 첫 화면: 닉네임 입력과 INSERT COIN 버튼" width="160" height="328" /><figcaption className="mono">Fig. 01 — 입장</figcaption></figure><div className="im-feat-t"><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>01 · Auth</p><h3>닉네임만 넣고 입장</h3><p className="im-desc">Firebase Anonymous Auth로 계정 없이 uid를 발급해 세션을 유지합니다. 같은 기기로 다시 들어오면 상태가 그대로 돌아옵니다.</p><ul className="im-list"><li>Anonymous Auth로 uid 발급</li><li>AuthContext로 닉네임과 uid 전역 관리</li><li>모바일, 태블릿, PC 반응형</li></ul></div></div>
                <div className="im-box im-feat"><figure className="phone-fig"><img src="/images/arcade-screen-2.png" alt="게임 선택 로비: 아케이드 캐비닛 스타일의 게임 카드 목록" width="160" height="328" /><figcaption className="mono">Fig. 02 — 로비</figcaption></figure><div className="im-feat-t"><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>02 · Lobby</p><h3>9가지 게임, 한 로비에서</h3><p className="im-desc">입장하면 아케이드 캐비닛 같은 로비로 넘어갑니다. 게임을 고르면 그 게임의 방 만들기 화면으로 이어집니다.</p><ul className="im-list"><li>게임마다 고유 색상, 아이콘, 태그</li><li>로컬 / 온라인 모드 선택</li><li>방 만들기 또는 6자리 코드로 참가</li></ul></div></div>
                <div className="im-box im-feat"><figure className="phone-fig"><img src="/images/arcade-screen-3.png" alt="게임별로 분리된 app, lib, context 디렉터리 구조" width="160" height="328" /><figcaption className="mono">Fig. 03 — 모듈 구조</figcaption></figure><div className="im-feat-t"><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>03 · Architecture</p><h3>게임마다 같은 틀</h3><p className="im-desc">게임마다 app · lib · components를 나누고, 방 생성·입장·종료는 공통 패턴을 다시 씁니다. 새 게임을 추가할 때 같은 코드를 반복하지 않습니다.</p><ul className="im-list"><li>게임별 app / lib / components 분리</li><li>공통 방 코드 시스템 재사용</li><li>Next.js Dynamic Route [code]</li></ul></div></div>
                <div className="im-box im-feat"><figure className="phone-fig"><img src="/images/arcade-screen-4.png" alt="라이어 게임 대기실: 6자리 방 코드, QR 코드, 참여자 목록" width="160" height="328" /><figcaption className="mono">Fig. 04 — 대기실</figcaption></figure><div className="im-feat-t"><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>04 · Room</p><h3>방 코드가 곧 DB 경로</h3><p className="im-desc">6자리 방 코드를 그대로 Realtime DB 경로로 씁니다. rooms/{'{'}code{'}'}/ 아래에 플레이어, 상태, 게임 데이터가 모입니다.</p><ul className="im-list"><li>방 코드 하나가 DB 노드 하나</li><li>onValue 리스너로 단방향 데이터 흐름</li><li>QR은 qrcode.react로 브라우저에서 생성</li></ul></div></div>
                <div className="im-box im-feat"><figure className="phone-fig"><img src="/images/arcade-screen-5.png" alt="라이어 게임 진행 화면: 나의 단어, 타이머, 참여자, 지목 버튼" width="160" height="328" /><figcaption className="mono">Fig. 05 — 게임 진행</figcaption></figure><div className="im-feat-t"><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>05 · Realtime</p><h3>서버 없이 실시간 동기화</h3><p className="im-desc">클라이언트가 Firebase에 직접 읽고 씁니다. 게임 단계를 상태 머신(대기 → 진행 → 결과)으로 만들어 모든 플레이어가 같은 순간에 넘어갑니다.</p><ul className="im-list"><li>서버 없이 클라이언트끼리 맞추는 구조</li><li>대기 → 진행 → 결과 상태 머신</li><li>Howler.js BGM, Three.js 카드 이펙트</li></ul></div></div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                <div className="code" style={{ flex: "1 1 300px" }}><div className="code-h">05 · Firebase Realtime DB — 게임 흐름이 곧 스키마</div><div className="pre">{`rooms/
└─ {code}/
   ├─ status: "waiting"
   ├─ gameType: "liar"
   ├─ hostId: "{uid}"
   ├─ players/
   │  └─ {uid}/
   │     nickname: "재현"
   │     isReady: true
   └─ gameData/
      round: 2
      keyword: "한강"
      liarId: "{uid}"
      votes/
        {uid}: "{targetUid}"`}</div></div>
                <div className="code" style={{ flex: "999 1 420px" }}><div className="code-h">hooks/useGameSync.ts</div><div className="pre">{`useEffect(() => {
  const roomRef = ref(db, \`rooms/\${code}\`)
  const unsub = onValue(roomRef, (snap) => {
    if (!snap.exists()) return
    setGameState(snap.val() as GameState)
  })
  return () => off(roomRef)
}, [code])

// 투표 — DB 직접 쓰기
const vote = (targetId: string) =>
  set(ref(db, \`rooms/\${code}/votes/\${uid}\`), targetId)`}</div></div>
              </div>
              <ul className="im-list" style={{ marginTop: "-12px" }}><li>players/{'{'}uid{'}'}/ — 접속자 실시간 추적</li><li>gameData/ — 라운드 · 키워드 · 라이어 ID</li><li>votes/{'{'}uid{'}'} — 투표 집계, 과반 자동 처리</li></ul>
              <div>
                <h4 className="mono" style={{ margin: "0 0 12px" }}>06 · 기술 스택</h4>
                <div className="arch">
                  <div className="arch-n"><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>Frontend</p><p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.7" }}>Next.js 15 — App Router<br />TypeScript — 타입 안전성<br />Tailwind CSS v4</p></div>
                  <div className="arch-n" style={{ background: "var(--accent)", color: "var(--on-accent)" }}><p className="mono" style={{ margin: "0" }}>Backend</p><p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.7" }}>Firebase — Realtime DB · Auth<br />Vercel — 배포 · 호스팅</p></div>
                  <div className="arch-n"><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>Libraries</p><p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.7" }}>Howler.js · Three.js<br />qrcode.react · Lucide React</p></div>
                </div>
                <p className="im-desc" style={{ margin: "16px 0 0" }}>기획·설계·구현·배포까지 1인 개발. 실시간 멀티플레이 아키텍처와 모듈 설계를 직접 풀어본 사이드 프로젝트입니다.</p>
              </div>
            </div>
          </div>
        </div>
      </>)}


    </>
  );
}
