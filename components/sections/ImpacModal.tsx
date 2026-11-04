// ImpacMatching 팝업 (탭 6개)
import type { PortfolioState } from "@/lib/usePortfolio";

export default function ImpacModal({ v }: { v: PortfolioState }) {
  return (
    <>

{v.imOpen && (<>
<div className="modal" role="dialog" aria-modal="true" aria-labelledby="im-title">
<button type="button" className="modal-bg" aria-label="서비스 설명 닫기" onClick={v.closeIm}></button>
<div className="modal-panel">
<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px", padding: "12px 20px", borderBottom: "2px solid var(--line)", background: "var(--ink)", color: "var(--bg)" }}>
<span className="mono">03 · ImpacMatching · Service overview</span>
<button type="button" className="btn mono" onClick={v.closeIm} style={{ background: "var(--bg)", color: "var(--ink)" }}>닫기 ✕</button>
</div>
<div style={{ padding: "clamp(20px, 3vw, 40px)", display: "flex", flexDirection: "column", gap: "28px" }}>
<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px 32px" }}>
<div><h2 id="im-title" className="wide" style={{ margin: "0", fontSize: "clamp(32px, 4.4vw, 60px)", letterSpacing: "-.03em", lineHeight: "1" }}>ImpacMatching</h2><p style={{ margin: "12px 0 0", fontSize: "16px", lineHeight: "1.7", color: "var(--muted)" }}>스마트 B2B 미팅 매칭 플랫폼 — 기업과 바이어를 연결하고, 시간대 관리부터 매칭·알림까지 한 곳에서.</p></div>
<a className="btn mono" href="https://github.com/Programmer-JK/ImpacMatchingVercel" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>GitHub ↗</a>
</div>
<div role="group" aria-label="설명 섹션" style={{ display: "flex", flexWrap: "wrap", gap: "6px", borderBottom: "2px solid var(--line)", paddingBottom: "16px" }}>
<button type="button" className={`tabbtn ${v.imCls.t0}`} aria-pressed={v.imShow.t0} onClick={v.imPick.t0}>00 개요</button>
<button type="button" className={`tabbtn ${v.imCls.t1}`} aria-pressed={v.imShow.t1} onClick={v.imPick.t1}>01 주요 기능</button>
<button type="button" className={`tabbtn ${v.imCls.t2}`} aria-pressed={v.imShow.t2} onClick={v.imPick.t2}>02 DB 스키마</button>
<button type="button" className={`tabbtn ${v.imCls.t3}`} aria-pressed={v.imShow.t3} onClick={v.imPick.t3}>03 API · 인증</button>
<button type="button" className={`tabbtn ${v.imCls.t4}`} aria-pressed={v.imShow.t4} onClick={v.imPick.t4}>04 프로젝트 구조</button>
<button type="button" className={`tabbtn ${v.imCls.t5}`} aria-pressed={v.imShow.t5} onClick={v.imPick.t5}>05 아키텍처 · 흐름</button>
</div>

{/* TAB 0: overview */}
{v.imShow.t0 && (<>
<div style={{ display: "flex", flexDirection: "column", gap: "20px", animation: "fadeup .35s ease both" }}>
<div className="tags" style={{ margin: "0" }}><span className="tag">Next.js 16</span><span className="tag">TypeScript</span><span className="tag">Prisma</span><span className="tag">PostgreSQL (Neon)</span><span className="tag">NextAuth</span><span className="tag">Zustand</span><span className="tag">React Hook Form + Zod</span><span className="tag">shadcn/ui</span><span className="tag">Vercel · Blob</span></div>
<div className="chips"><span className="mono" style={{ marginRight: "8px", color: "var(--muted)" }}>미팅 흐름</span><span className="tag" style={{ background: "var(--bg)" }}>기업이 시간대 등록</span><span className="mono">→</span><span className="tag" style={{ background: "var(--bg)" }}>바이어가 신청</span><span className="mono">→</span><span className="tag" style={{ background: "var(--bg)" }}>대기열 (PENDING)</span><span className="mono">→</span><span className="tag" style={{ background: "var(--bg)" }}>기업이 승인 / 거절</span><span className="mono">→</span><span className="tag" style={{ background: "var(--accent)", color: "var(--on-accent)" }}>SELECTED</span><span className="mono">→</span><span className="tag" style={{ background: "var(--bg)" }}>알림</span></div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "8px" }}>
<div style={{ border: "2px solid var(--line)", padding: "14px", background: "var(--ink)", color: "var(--bg)", display: "flex", flexDirection: "column", gap: "6px" }}><b className="mono" style={{ fontSize: "13px" }}>ADMIN</b><span style={{ fontSize: "14px", lineHeight: "1.6" }}>사용자 관리, 엑셀 일괄 등록, 행사 설정, 전체 미팅 현황과 통계</span></div>
<div style={{ border: "2px solid var(--line)", padding: "14px", background: "var(--panel)", display: "flex", flexDirection: "column", gap: "6px" }}><b className="mono" style={{ fontSize: "13px" }}>COMPANY</b><span style={{ fontSize: "14px", lineHeight: "1.6" }}>미팅 가능한 시간대 등록, 신청 승인과 거절, 일정 캘린더</span></div>
<div style={{ border: "2px solid var(--line)", padding: "14px", background: "var(--panel)", display: "flex", flexDirection: "column", gap: "6px" }}><b className="mono" style={{ fontSize: "13px" }}>BUYER</b><span style={{ fontSize: "14px", lineHeight: "1.6" }}>기업 검색, 미팅 신청·취소·재신청, 시간대 대기열</span></div>
</div>
<div className="im-grid">
<div className="im-box"><h3 style={{ marginTop: "0" }}>만든 것</h3><ul className="im-list"><li>행사마다 미팅 길이, 운영 시간, 점심시간을 정하면 시간대가 자동으로 만들어집니다</li><li>미팅 신청, 승인, 거절, 취소와 시간대별 대기열</li><li>상태가 바뀌면 상대방에게 알림이 갑니다 (5종)</li><li>역할마다 다른 대시보드와 통계</li><li>기업·바이어 엑셀 일괄 등록, 행사 헤더 이미지 업로드</li></ul></div>
<div className="im-box"><h3 style={{ marginTop: "0" }}>데이터와 권한</h3><ul className="im-list"><li>User, Event, TimeSlot, Meeting 네 모델로 Prisma 스키마 설계</li><li>신청이 들어오면 대기열 순서를 계산하고, 중복 신청과 겹치는 슬롯을 막습니다</li><li>NextAuth JWT에 role을 넣고 Middleware에서 페이지 접근을 막았습니다</li><li>비밀번호는 bcrypt, 입력값은 Zod로 검사합니다</li></ul></div>
</div>
<p className="im-desc" style={{ margin: "0" }}>인기 있는 기업은 한 시간대에 신청이 몰리기 때문에, 신청을 대기열로 쌓아 두고 기업이 그중에서 고르는 방식으로 만들었습니다.</p>
</div>
</>)}

{/* TAB 1: features */}
{v.imShow.t1 && (<>
<div className="im-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))" }}>
<div className="im-box im-feat"><figure className="phone-fig"><img src="/images/im-screen-1.png" alt="바이어 화면: 참여 기업 목록과 미팅 신청 버튼" width="160" height="320" /><figcaption className="mono">Fig. 01 — 참여 기업</figcaption></figure><div className="im-feat-t"><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>01 · Buyer</p><h3>기업과 바이어를 연결</h3><p className="im-desc">행사에 참여하는 기업을 한눈에 탐색하고, 원하는 기업에 미팅을 신청합니다. 승인되면 일정이 자동으로 확정됩니다.</p><ul className="im-list"><li>참여 기업 검색과 상세 정보 확인</li><li>원클릭 미팅 신청 → 승인·거절 알림</li><li>대기열 시스템으로 인기 슬롯 관리</li></ul></div></div>
<div className="im-box im-feat"><figure className="phone-fig"><img src="/images/im-screen-2.png" alt="기업 화면: 확정·대기·가능 상태로 나뉜 시간대 목록" width="160" height="320" /><figcaption className="mono">Fig. 02 — 시간대 관리</figcaption></figure><div className="im-feat-t"><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>02 · Company</p><h3>유연한 시간대 관리</h3><p className="im-desc">기업이 가능한 시간대를 직접 등록합니다. 미팅 시간과 점심시간을 설정하면 슬롯이 자동으로 만들어집니다.</p><ul className="im-list"><li>기업별 가용 시간대 등록</li><li>미팅·휴식 시간 자동 계산</li><li>확정·대기·가능 상태 실시간 반영</li></ul></div></div>
<div className="im-box im-feat"><figure className="phone-fig"><img src="/images/im-screen-3.png" alt="바이어 화면: 내 미팅 현황과 승인·접수·거절 알림" width="160" height="320" /><figcaption className="mono">Fig. 03 — 미팅 현황</figcaption></figure><div className="im-feat-t"><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>03 · Buyer</p><h3>미팅 현황을 한눈에</h3><p className="im-desc">신청한 미팅의 상태가 바로 반영되고, 바뀔 때마다 알림으로 안내합니다.</p><ul className="im-list"><li>승인·대기·거절 상태 확인</li><li>미팅 변경 시 즉시 알림</li><li>담당자 연락처·메시지 확인</li></ul></div></div>
<div className="im-box im-feat"><figure className="phone-fig"><img src="/images/im-screen-4.png" alt="관리자 화면: 기업·바이어·미팅 통계와 시간대별 막대 차트" width="160" height="320" /><figcaption className="mono">Fig. 04 — 관리자 대시보드</figcaption></figure><div className="im-feat-t"><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>04 · Admin</p><h3>관리자 도구</h3><p className="im-desc">행사 전체 현황을 대시보드에서 관리합니다. 사용자 등록부터 미팅 모니터링, 엑셀 일괄 업로드까지 지원합니다.</p><ul className="im-list"><li>기업·바이어·미팅 통계 대시보드</li><li>엑셀 업로드로 사용자 일괄 등록</li><li>행사 설정·헤더 커스터마이징</li></ul></div></div>
</div>
</>)}

{/* TAB 2: schema */}
{v.imShow.t2 && (<>
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
<p className="mono" style={{ margin: "0", color: "var(--muted)" }}>Prisma ORM + PostgreSQL (Neon) · 4개 핵심 모델</p>
<div className="im-grid">
<div className="erd"><div className="erd-h"><span>User</span><span className="mono" style={{ color: "var(--muted)" }}>사용자</span></div><div className="erd-b">
<div className="erd-r"><span>id</span><span>String</span><b>PK</b></div>
<div className="erd-r"><span>email</span><span>@unique</span><b></b></div>
<div className="erd-r"><span>password</span><span>bcrypt</span><b></b></div>
<div className="erd-r"><span>name</span><span>String</span><b></b></div>
<div className="erd-r"><span>role</span><span>UserRole</span><b></b></div>
<div className="erd-r"><span>website</span><span>String?</span><b></b></div>
<div className="erd-r"><span>description</span><span>String?</span><b></b></div>
<div className="erd-r"><span>hasNewEvent</span><span>Boolean</span><b></b></div>
<div className="tags"><span className="tag">ADMIN</span><span className="tag">COMPANY</span><span className="tag">BUYER</span></div>
</div></div>
<div className="erd"><div className="erd-h"><span>Event</span><span className="mono" style={{ color: "var(--muted)" }}>행사</span></div><div className="erd-b">
<div className="erd-r"><span>id</span><span>String</span><b>PK</b></div>
<div className="erd-r"><span>name</span><span>String</span><b></b></div>
<div className="erd-r"><span>startDate</span><span>DateTime</span><b></b></div>
<div className="erd-r"><span>endDate</span><span>DateTime</span><b></b></div>
<div className="erd-r"><span>meetingDuration</span><span>Int (분)</span><b></b></div>
<div className="erd-r"><span>operatingHours</span><span>Json</span><b></b></div>
<div className="erd-r"><span>lunchBreak</span><span>Json</span><b></b></div>
<div className="erd-r"><span>headerImage</span><span>String?</span><b></b></div>
<div className="tags"><span className="tag">UPCOMING</span><span className="tag">ACTIVE</span><span className="tag">ENDED</span></div>
</div></div>
<div className="erd"><div className="erd-h"><span>Meeting</span><span className="mono" style={{ color: "var(--muted)" }}>미팅</span></div><div className="erd-b">
<div className="erd-r"><span>id</span><span>String</span><b>PK</b></div>
<div className="erd-r"><span>companyId</span><span>String</span><b>FK</b></div>
<div className="erd-r"><span>buyerId</span><span>String</span><b>FK</b></div>
<div className="erd-r"><span>timeSlotId</span><span>String</span><b>FK</b></div>
<div className="erd-r"><span>status</span><span>MeetingStatus</span><b></b></div>
<div className="erd-r"><span>queuePosition</span><span>Int</span><b></b></div>
<div className="erd-r"><span>message</span><span>String?</span><b></b></div>
<div className="tags"><span className="tag">PENDING</span><span className="tag" style={{ background: "var(--accent)", color: "var(--on-accent)" }}>SELECTED</span><span className="tag">REJECTED</span></div>
</div></div>
<div className="erd"><div className="erd-h"><span>TimeSlot</span><span className="mono" style={{ color: "var(--muted)" }}>시간대</span></div><div className="erd-b">
<div className="erd-r"><span>id</span><span>String</span><b>PK</b></div>
<div className="erd-r"><span>userId</span><span>String</span><b>FK</b></div>
<div className="erd-r"><span>startTime</span><span>DateTime</span><b></b></div>
<div className="erd-r"><span>endTime</span><span>DateTime</span><b></b></div>
<div className="erd-r"><span>isBooked</span><span>Boolean</span><b></b></div>
<p className="mono" style={{ margin: "12px 0 0", fontSize: "11px", color: "var(--muted)", textTransform: "none" }}>@@unique([userId, startTime])</p>
</div></div>
</div>
<div style={{ display: "flex", flexDirection: "column", border: "2px solid var(--line)" }}>
<div style={{ display: "flex", flexWrap: "wrap", gap: "4px 24px", padding: "12px 16px", borderBottom: "1px dashed var(--soft)" }}><span className="mono" style={{ minWidth: "220px", textTransform: "none" }}>User 1 ← N TimeSlot</span><span style={{ fontSize: "14px", color: "var(--muted)" }}>기업이 가용 시간대를 등록</span></div>
<div style={{ display: "flex", flexWrap: "wrap", gap: "4px 24px", padding: "12px 16px", borderBottom: "1px dashed var(--soft)" }}><span className="mono" style={{ minWidth: "220px", textTransform: "none" }}>User 1 ← N Meeting</span><span style={{ fontSize: "14px", color: "var(--muted)" }}>Company·Buyer 각각 연결 (onDelete: Cascade)</span></div>
<div style={{ display: "flex", flexWrap: "wrap", gap: "4px 24px", padding: "12px 16px" }}><span className="mono" style={{ minWidth: "220px", textTransform: "none" }}>TimeSlot 1 ← N Meeting</span><span style={{ fontSize: "14px", color: "var(--muted)" }}>하나의 슬롯에 대기열(Queue) 형태로 미팅 요청</span></div>
</div>
</div>
</>)}

{/* TAB 3: API & auth */}
{v.imShow.t3 && (<>
<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
<p className="mono" style={{ margin: "0", color: "var(--muted)" }}>Next.js App Router API Routes + NextAuth JWT 인증</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
<div className="im-box" style={{ flex: "1 1 280px" }}><h3 style={{ marginTop: "0" }}>인증 설계</h3><ul className="im-list"><li>CredentialsProvider + bcrypt.compare로 로그인 검증</li><li>JWT 세션 1시간, 토큰 7일</li><li>jwt·session 콜백에서 role을 토큰과 세션에 주입</li><li>Middleware에서 role 기반 라우트 보호 (RBAC)</li></ul></div>
<div className="code" style={{ flex: "999 1 460px" }}><div className="code-h">lib/config/auth.ts — NextAuth 설정</div><div className="pre">{`export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      authorize: async (credentials) => {
        const user = await prisma.user.findUnique({ ... })
        const valid = await bcrypt.compare(password, user.password)
        return valid ? { id, email, name, role } : null
      }
    })
  ],
  session: { strategy: "jwt", maxAge: 3600 },  // 1시간
  jwt:     { maxAge: 604800 },                 // 7일
  callbacks: {
    jwt({ token, user }) {          // role을 토큰에 주입
      if (user) { token.role = user.role; token.id = user.id }
      return token
    },
    session({ session, token }) {   // 세션에 role 전달
      session.user.role = token.role
      return session
    }
  }
}`}</div></div>
</div>
<h4 className="mono" style={{ margin: "8px 0 0" }}>주요 API 엔드포인트</h4>
<div className="im-grid">
<div className="im-box"><span className="method m-post">POST</span><p className="mono" style={{ margin: "0 0 6px", textTransform: "none" }}>/api/meetings</p><p className="im-desc" style={{ margin: "0" }}>미팅 신청 — 대기열 위치 자동 계산, 중복 체크, Zod 검증</p></div>
<div className="im-box"><span className="method m-patch">PATCH</span><p className="mono" style={{ margin: "0 0 6px", textTransform: "none" }}>/api/meetings/[id]</p><p className="im-desc" style={{ margin: "0" }}>미팅 상태 변경 — SELECTED / REJECTED, 알림 플래그 갱신</p></div>
<div className="im-box"><span className="method m-get">GET</span><p className="mono" style={{ margin: "0 0 6px", textTransform: "none" }}>/api/companies</p><p className="im-desc" style={{ margin: "0" }}>기업 목록 — 검색, 페이지네이션, 미팅 수 집계</p></div>
<div className="im-box"><span className="method m-post">POST</span><p className="mono" style={{ margin: "0 0 6px", textTransform: "none" }}>/api/timeslots</p><p className="im-desc" style={{ margin: "0" }}>시간대 등록 — 15~120분 검증, 중복 슬롯 감지</p></div>
<div className="im-box"><span className="method m-post">POST</span><p className="mono" style={{ margin: "0 0 6px", textTransform: "none" }}>/api/admin/upload-excel</p><p className="im-desc" style={{ margin: "0" }}>엑셀 일괄 등록 — XLSX 파싱, 행별 Zod 검증, 중복 이메일 감지</p></div>
<div className="im-box"><span className="method m-get">GET</span><p className="mono" style={{ margin: "0 0 6px", textTransform: "none" }}>/api/admin/dashboard/stats</p><p className="im-desc" style={{ margin: "0" }}>통계 대시보드 — 기업·바이어·미팅·시간대별 집계</p></div>
</div>
<div className="code"><div className="code-h">Zod 스키마 — 런타임 유효성 검증</div><div className="pre">{`// 시간대 생성
const createTimeSlotSchema = z.object({
  startTime: z.string().datetime(),
  endTime:   z.string().datetime(),
})

// 사용자 생성
const userCreateSchema = z.object({
  name:     z.string().min(1),
  email:    z.string().email(),
  password: z.string().min(6),
  role:     z.enum(['COMPANY', 'BUYER']),
})

// 엑셀 행 검증 (한글 필드명)
const excelRowSchema = z.object({
  이름:     z.string().min(1),
  이메일:   z.string().email(),
  비밀번호: z.string().min(8),
})`}</div></div>
</div>
</>)}

{/* TAB 4: structure */}
{v.imShow.t4 && (<>
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
<p className="mono" style={{ margin: "0", color: "var(--muted)" }}>Next.js App Router 기반 · Feature-oriented 구조</p>
<div className="im-grid">
<div className="im-box" style={{ padding: "0" }}><div className="erd-h">app/ <span className="mono" style={{ color: "var(--muted)" }}>라우트 &amp; API</span></div><div className="pre">{`app/
├── (auth)/login/       로그인
├── admin/
│   ├── dashboard/      통계 대시보드
│   ├── meetings/       리스트·타임테이블
│   ├── companies/      기업 관리
│   ├── buyers/         바이어 관리
│   └── events/         행사 설정
├── dashboard/
│   ├── company/        기업 대시보드
│   └── buyer/          바이어 대시보드
└── api/
    ├── auth/[...nextauth]
    ├── meetings/       CRUD + 상태 관리
    ├── timeslots/      슬롯 CRUD + 큐
    ├── companies/      기업 조회
    └── admin/          관리자 전용`}</div></div>
<div className="im-box" style={{ padding: "0" }}><div className="erd-h">shared/ &amp; lib/ <span className="mono" style={{ color: "var(--muted)" }}>핵심 모듈</span></div><div className="pre">{`shared/
├── components/
│   ├── ui/             Radix+shadcn 35개+
│   ├── layout/         Header, Footer
│   ├── admin/          관리자 컴포넌트
│   └── meeting/        미팅 컴포넌트
├── types/
│   ├── core/           User, Meeting, Event
│   └── api/            응답 타입
└── constants/

lib/
├── config/
│   ├── auth.ts         NextAuth 설정
│   └── db.ts           Prisma 싱글턴
└── utils/
    ├── excel-utils.ts  XLSX 파싱
    ├── meeting-utils.ts
    └── timetable-utils.ts`}</div></div>
<div className="im-box" style={{ padding: "0" }}><div className="erd-h">hooks/ <span className="mono" style={{ color: "var(--muted)" }}>커스텀 훅 10개</span></div><div className="pre">{`hooks/
├── use-companies.ts       기업 + 페이지네이션
├── use-meetings-data.ts   미팅 데이터 페칭
├── use-meeting.tsx        미팅 CRUD 액션
├── use-buyer-meetings.ts  바이어 미팅
├── use-meeting-filters.ts 필터 로직
├── use-buyers.ts          바이어 목록
├── use-event-status.ts    알림 상태
├── use-pagination.ts      페이지네이션
├── use-mobile.tsx         반응형 감지
└── use-toast.ts           토스트 알림`}</div></div>
<div className="im-box" style={{ padding: "0" }}><div className="erd-h">store/ &amp; config <span className="mono" style={{ color: "var(--muted)" }}>상태 · 설정</span></div><div className="pre">{`store/
└── auth-store.ts       Zustand + persist
    ├── useAuthStore    사용자 상태
    └── useAppStore     앱 전역 상태

config/
├── prisma/schema.prisma  DB 스키마
├── middleware.ts         라우트 보호
├── tailwind.config.js    테마 확장
├── components.json       shadcn/ui 설정
└── next.config.mjs       Next.js 설정`}</div></div>
</div>
</div>
</>)}

{/* TAB 5: architecture */}
{v.imShow.t5 && (<>
<div style={{ display: "flex", flexDirection: "column", gap: "24px", animation: "fadeup .35s ease both" }}>
<div className="arch">
<div className="arch-n"><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>Frontend</p><p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.7" }}>Next.js 16 · React 19<br />Tailwind · shadcn/ui<br />Zustand · React Hook Form</p></div>
<div className="arch-n" style={{ background: "var(--accent)", color: "var(--on-accent)" }}><p className="mono" style={{ margin: "0" }}>API Layer</p><p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.7" }}>App Router API Routes<br />NextAuth JWT · Zod<br />Middleware RBAC</p></div>
<div className="arch-n"><p className="mono" style={{ margin: "0", color: "var(--muted)" }}>Database</p><p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.7" }}>PostgreSQL (Neon)<br />Prisma ORM<br />Connection Pool: 10</p></div>
</div>
<div><h4 className="mono" style={{ margin: "0 0 6px" }}>미팅 매칭 플로우</h4><p className="im-desc">바이어가 기업에 미팅을 신청하는 전체 흐름</p>
<ol className="steps">
<li><b>기업 · 시간대 등록</b><p className="im-desc" style={{ margin: "4px 0 6px" }}>15~120분 범위를 검증한 뒤 슬롯을 생성합니다.</p><span className="tag">POST /api/timeslots → Zod datetime 검증</span></li>
<li><b>바이어 · 미팅 신청</b><p className="im-desc" style={{ margin: "4px 0 6px" }}>원하는 슬롯에 신청하면 대기열 위치가 자동으로 계산됩니다.</p><span className="tag">POST /api/meetings → queuePosition 할당</span></li>
<li><b>기업 · 승인 / 거절</b><p className="im-desc" style={{ margin: "4px 0 6px" }}>승인하면 SELECTED로 전환되고 hasNewEvent 플래그가 갱신됩니다.</p><span className="tag">PATCH /api/meetings/[id] → status: SELECTED</span></li>
<li style={{ paddingBottom: "0" }}><b>미팅 확정 · 알림</b><p className="im-desc" style={{ margin: "4px 0 6px" }}>양쪽 대시보드에 확정 미팅이 반영되고 바이어에게 알림이 갑니다.</p><span className="tag">GET /api/buyer/meetings → 상태별 필터링</span></li>
</ol></div>
<div className="tags" style={{ margin: "0" }}><span className="tag">인증 · NextAuth.js</span><span className="tag">상태 · Zustand</span><span className="tag">배포 · Vercel</span><span className="tag">파일 · Vercel Blob</span><span className="tag">검증 · Zod</span><span className="tag">UI · Radix + shadcn</span><span className="tag">XLSX</span></div>
</div>
</>)}

</div>
</div>
</div>
</>)}


    </>
  );
}
