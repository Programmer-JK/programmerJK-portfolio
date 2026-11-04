// 흐르는 기술 스택 띠 (같은 목록이 두 번 반복되어야 끊김 없이 흐릅니다)
import type { PortfolioState } from "@/lib/usePortfolio";

export default function Ticker({ v }: { v: PortfolioState }) {
  return (
    <>

<div className="ticker mono" aria-hidden="true">
<div className="ticker-track">
<span>React</span><span>Next.js</span><span>TypeScript</span><span>Java</span><span>Spring Boot</span><span>Python</span><span>FastAPI</span><span>RAG</span><span>NL2SQL</span><span>LangChain</span><span>vLLM</span><span>LoRA / QLoRA</span><span>Docker</span><span>Playwright</span>
<span>React</span><span>Next.js</span><span>TypeScript</span><span>Java</span><span>Spring Boot</span><span>Python</span><span>FastAPI</span><span>RAG</span><span>NL2SQL</span><span>LangChain</span><span>vLLM</span><span>LoRA / QLoRA</span><span>Docker</span><span>Playwright</span>
</div>
</div>



    </>
  );
}
