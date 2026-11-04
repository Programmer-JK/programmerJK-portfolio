// 01 About: 소개 문단과 일하는 원칙 3가지
import type { PortfolioState } from "@/lib/usePortfolio";

export default function About({ v }: { v: PortfolioState }) {
  return (
    <>

<section id="about" className="wrap">
<div className="sechead">
<span className="secnum">01</span>
<div><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>About me</p><h2>화면 하나를 고쳐도 서버까지 봅니다</h2></div>
</div>
<div style={{ display: "flex", flexWrap: "wrap", gap: "48px", paddingBlock: "48px" }}>
<div style={{ flex: "1 1 420px", minWidth: "0", fontSize: "18px", lineHeight: "1.8" }}>
<p style={{ margin: "0 0 20px" }}>2022년, 하루 1만 명이 쓰는 아모레퍼시픽 방문판매 앱을 운영하면서 일을 시작했습니다. 장애가 나면 한 시간 안에 원인을 찾아야 했고, 그러다 보니 화면만 봐서는 문제가 안 풀린다는 걸 일찍 알게 됐습니다.</p>
<p style={{ margin: "0 0 20px" }}>그 뒤로 캄보디아에서 은행 앱 전환을 맡았고, 지금은 소프트인에서 B2B 서비스와 AI HR 플랫폼, 은행 인사 시스템을 만들고 있습니다. 프론트엔드로 시작했지만 지금은 API, DB, AI 파이프라인까지 같이 다룹니다.</p>
<p style={{ margin: "0", color: "var(--muted)" }}>퇴근 후에는 주변에서 필요하다는 걸 만들어 봅니다. 급식센터 어르신들이 쓰는 기록 앱이나, 친구들과 하는 보드게임 사이트 같은 것들입니다.</p>
</div>
<ol style={{ flex: "1 1 420px", minWidth: "0", listStyle: "none", margin: "0", padding: "0", borderTop: "2px solid var(--line)" }}>
<li style={{ display: "flex", gap: "20px", padding: "24px 0", borderBottom: "2px solid var(--line)" }}><span className="mono" style={{ paddingTop: "6px" }}>P/01</span><div><p style={{ margin: "0", fontSize: "22px", fontWeight: "700" }}>쓰는 사람부터 봅니다.</p><p style={{ margin: "8px 0 0", color: "var(--muted)", lineHeight: "1.7" }}>보존식 기록 앱은 기능을 늘리는 대신 화면을 두 개로 줄였습니다. 쓰는 분들이 50~60대 조리사였기 때문입니다.</p></div></li>
<li style={{ display: "flex", gap: "20px", padding: "24px 0", borderBottom: "2px solid var(--line)" }}><span className="mono" style={{ paddingTop: "6px" }}>P/02</span><div><p style={{ margin: "0", fontSize: "22px", fontWeight: "700" }}>돌아가는 상태로 넘깁니다.</p><p style={{ margin: "8px 0 0", color: "var(--muted)", lineHeight: "1.7" }}>화면만 만들고 손을 떼지 않습니다. API, DB, 인증, 배포까지 붙여서 실제로 쓸 수 있는 상태로 넘깁니다.</p></div></li>
<li style={{ display: "flex", gap: "20px", padding: "24px 0", borderBottom: "2px solid var(--line)" }}><span className="mono" style={{ paddingTop: "6px" }}>P/03</span><div><p style={{ margin: "0", fontSize: "22px", fontWeight: "700" }}>운영까지 생각합니다.</p><p style={{ margin: "8px 0 0", color: "var(--muted)", lineHeight: "1.7" }}>우리은행 마이그레이션에서는 OOM과 DB 장애를 직접 추적해 해결했습니다. 처음 돌아가는 것만큼 오래 버티는 것도 중요하다고 생각합니다.</p></div></li>
</ol>
</div>
</section>


    </>
  );
}
