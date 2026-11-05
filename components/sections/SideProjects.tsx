// 03 사이드 프로젝트 카드. 카드를 누르면 v.pick.<id> 로 팝업이 열립니다
import type { PortfolioState } from "@/lib/usePortfolio";

export default function SideProjects({ v }: { v: PortfolioState }) {
  return (
    <>

      <section id="side" className="wrap">
        <div className="sechead">
          <span className="secnum">03</span>
          <div><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>Side projects</p><h2>회사 밖에서 만든 것들</h2></div>
        </div>
        <p style={{ margin: "16px 0 0", color: "var(--muted)", fontSize: "15px" }}>카드를 누르면 자세한 내용과 화면을 볼 수 있어요.</p>
        <div className="pgrid">

          <button type="button" className="card pcard pc-wide" onClick={v.pick.archive}>
            <span className="peek" aria-hidden="true"><span className="bit bit-peek"><span className="bit-body"><span className="bit-eyes"><span className="bit-eye"></span><span className="bit-eye"></span></span></span></span></span>
            <span className="pc-top" style={{ background: "var(--ink)", color: "var(--bg)" }}><span className="mono">01 · 진행 중</span><span className="mono">2026.10 –</span></span>
            <span className="pc-body">
              <span className="pc-title">Our Little Archive</span>
              <span className="pc-sub">둘이서만 쓰는 커플 기록 앱입니다. 하고 싶은 일을 모아 두고, 다녀온 날은 사진과 글로 남깁니다. 처음 만든 화면이 너무 AI 같아서, 요소를 30% 덜어내는 리뷰를 거쳐 다시 다듬었습니다.</span>
              <span className="tags"><span className="tag">Next.js 16</span><span className="tag">Firebase</span><span className="tag">Firestore Rules</span><span className="tag">Tailwind v4</span></span>
              <span className="pc-more mono">자세히 보기 +</span>
            </span>
          </button>

          <button type="button" className="card pcard" onClick={v.pick.ar}>
            <span className="peek" aria-hidden="true"><span className="bit bit-peek"><span className="bit-body"><span className="bit-eyes"><span className="bit-eye"></span><span className="bit-eye"></span></span></span></span></span>
            <span className="pc-top" style={{ background: "var(--accent)", color: "var(--on-accent)" }}><span className="mono">02 · 진행 중</span><span className="mono">2026.04 –</span></span>
            <span className="pc-body">
              <span className="pc-title">놀아조라 ARCADE</span>
              <span className="pc-sub">친구들이랑 하려고 만든 보드게임 사이트입니다. 닉네임만 넣고 방 코드를 보내면 설치 없이 바로 같이 할 수 있어요. 게임은 아홉 가지.</span>
              <span className="tags"><span className="tag">Next.js 15</span><span className="tag">Realtime DB</span><span className="tag">Three.js</span><span className="tag">Howler.js</span></span>
              <span className="pc-more mono">자세히 보기 +</span>
            </span>
          </button>

          <button type="button" className="card pcard" onClick={v.pick.im}>
            <span className="peek" aria-hidden="true"><span className="bit bit-peek"><span className="bit-body"><span className="bit-eyes"><span className="bit-eye"></span><span className="bit-eye"></span></span></span></span></span>
            <span className="pc-top"><span className="mono">03</span><span className="mono" style={{ color: "var(--muted)" }}>2025.07 – 2026.01</span></span>
            <span className="pc-body">
              <span className="pc-title">ImpacMatching</span>
              <span className="pc-sub">행사장에서 기업과 투자자의 미팅 시간을 잡아 주는 서비스입니다. 관리자, 기업, 바이어 세 역할로 나눴고, 사람이 몰리는 시간대는 대기열로 받습니다.</span>
              <span className="tags"><span className="tag">Next.js 16</span><span className="tag">Prisma</span><span className="tag">PostgreSQL</span><span className="tag">NextAuth</span></span>
              <span className="pc-more mono">자세히 보기 +</span>
            </span>
          </button>

          <button type="button" className="card pcard pc-wide3" onClick={v.pick.mr}>
            <span className="peek" aria-hidden="true"><span className="bit bit-peek"><span className="bit-body"><span className="bit-eyes"><span className="bit-eye"></span><span className="bit-eye"></span></span></span></span></span>
            <span className="pc-top"><span className="mono">04 · 납품</span><span className="mono" style={{ color: "var(--muted)" }}>2026.06</span></span>
            <span className="pc-body">
              <span className="pc-title">보존식 기록 관리 시스템</span>
              <span className="pc-sub">급식센터 조리사 어르신들이 쓰는 보존식 기록 앱입니다. 본문 글씨는 23px로 키우고, 화면은 로그인과 기록 목록 두 개만 남겼습니다.</span>
              <span className="tags"><span className="tag">React 18</span><span className="tag">Vite</span><span className="tag">Vercel Serverless</span><span className="tag">Neon</span></span>
              <span className="pc-more mono">자세히 보기 +</span>
            </span>
          </button>

          <button type="button" className="card pcard" onClick={v.pick.linky}>
            <span className="peek" aria-hidden="true"><span className="bit bit-peek"><span className="bit-body"><span className="bit-eyes"><span className="bit-eye"></span><span className="bit-eye"></span></span></span></span></span>
            <span className="pc-top"><span className="mono">05</span><span className="mono" style={{ color: "var(--muted)" }}>2026.01 – 2026.05</span></span>
            <span className="pc-body">
              <span className="pc-title">링키라운지 공식 홈페이지</span>
              <span className="pc-sub">링키라운지 공식 홈페이지입니다. 토스페이먼츠 결제를 붙이고, 화면 전환은 Framer Motion으로 다듬었습니다.</span>
              <span className="tags"><span className="tag">Next.js</span><span className="tag">TypeScript</span><span className="tag">Toss Payments</span></span>
              <span className="pc-more mono">자세히 보기 +</span>
            </span>
          </button>

          <button type="button" className="card pcard" onClick={v.pick.moim}>
            <span className="peek" aria-hidden="true"><span className="bit bit-peek"><span className="bit-body"><span className="bit-eyes"><span className="bit-eye"></span><span className="bit-eye"></span></span></span></span></span>
            <span className="pc-top"><span className="mono">06</span><span className="mono" style={{ color: "var(--muted)" }}>2025.03 – 2026.03</span></span>
            <span className="pc-body">
              <span className="pc-title">모임 성격 진단 웹앱</span>
              <span className="pc-sub">질문 다섯 개에 답하면 모임 성격을 네 가지 유형 중 하나로 알려 줍니다. 응답은 구글 시트로 모입니다.</span>
              <span className="tags"><span className="tag">Next.js</span><span className="tag">Framer Motion</span><span className="tag">Google Sheets API</span></span>
              <span className="pc-more mono">자세히 보기 +</span>
            </span>
          </button>

          <button type="button" className="card pcard" onClick={v.pick.ani}>
            <span className="peek" aria-hidden="true"><span className="bit bit-peek"><span className="bit-body"><span className="bit-eyes"><span className="bit-eye"></span><span className="bit-eye"></span></span></span></span></span>
            <span className="pc-top"><span className="mono">07</span><span className="mono" style={{ color: "var(--muted)" }}>2024.10 – 2025.12</span></span>
            <span className="pc-body">
              <span className="pc-title">Aniwhere</span>
              <span className="pc-sub">애니메이션 리뷰 사이트입니다. 프론트는 Next.js App Router, 백엔드는 Spring Boot로 만들고 Husky로 커밋 전 검사를 돌렸습니다.</span>
              <span className="tags"><span className="tag">Next.js</span><span className="tag">Spring Boot</span><span className="tag">MySQL</span></span>
              <span className="pc-more mono">자세히 보기 +</span>
            </span>
          </button>




        </div>
      </section>


    </>
  );
}
