// 성과 숫자 카드 6개
import type { PortfolioState } from "@/lib/usePortfolio";

export default function Stats({ v }: { v: PortfolioState }) {
  return (
    <>

<section className="wrap" aria-label="주요 성과" style={{ paddingBlock: "24px 0" }}>
<div className="statgrid">
<div className="stat" style={{ background: "var(--accent)", color: "var(--on-accent)" }}><span className="mono">우리은행 · 마이그레이션</span><span className="statnum">1/10</span><span style={{ fontSize: "15px" }}>약 5GB 데이터 용량을 기존 대비 1/10 수준으로</span></div>
<div className="stat"><span className="mono" style={{ color: "var(--muted)" }}>우리은행 · 렌더링</span><span className="statnum">10×+</span><span style={{ fontSize: "15px" }}>콘텐츠 렌더링 성능 개선, OOM·DB 장애 해결</span></div>
<div className="stat"><span className="mono" style={{ color: "var(--muted)" }}>Oxid HR · FP8 양자화</span><span className="statnum">−46.7%</span><span style={{ fontSize: "15px" }}>모델 VRAM 사용량 절감</span></div>
<div className="stat"><span className="mono" style={{ color: "var(--muted)" }}>SmartBiz · 모바일</span><span className="statnum">−90%</span><span style={{ fontSize: "15px" }}>푸시 누락률 감소, 데이터 유실률 1% 미만</span></div>
<div className="stat"><span className="mono" style={{ color: "var(--muted)" }}>IRIS · AWS 이관</span><span className="statnum">−80%</span><span style={{ fontSize: "15px" }}>Go-live 2일 만에 문의 발생률 감소 (일 사용자 1만 명)</span></div>
<div className="stat" style={{ background: "var(--ink)", color: "var(--bg)" }}><span className="mono">Cambodia · PM / QA</span><span className="statnum">3주</span><span style={{ fontSize: "15px" }}>계획 대비 조기 완료, UAT 200건 이상 수행</span></div>
</div>
</section>


    </>
  );
}
