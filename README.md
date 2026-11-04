# PJK Portfolio

박종권 포트폴리오 사이트 (Next.js 15 App Router + TypeScript).

## 실행

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 배포용 빌드 확인
```

Vercel에 저장소를 연결하면 별도 설정 없이 바로 배포됩니다.

## 어디를 고치면 되나요

| 고치고 싶은 것 | 파일 |
|---|---|
| 강조색, 처음 다크 모드 여부, 처음 펼쳐 둘 경력 | `data/config.ts` |
| 상단 메뉴, 다크 모드 버튼 | `components/sections/Header.tsx` |
| 첫 화면 헤드라인, 이름·경력·Focus 칸, 경력 흐름 바 | `components/sections/Hero.tsx` |
| 흐르는 기술 스택 띠 | `components/sections/Ticker.tsx` |
| 01 About, 일하는 원칙 | `components/sections/About.tsx` |
| 성과 숫자 카드 6개 | `components/sections/Stats.tsx` |
| 02 경력 (소프트인, 모빌씨앤씨) | `components/sections/Career.tsx` |
| 03 사이드 프로젝트 카드 | `components/sections/SideProjects.tsx` |
| 04 기술 스택, What I bring | `components/sections/Skills.tsx` |
| 05 진로 방향, 연락처, 푸터 | `components/sections/Contact.tsx` |
| ImpacMatching 팝업 | `components/sections/ImpacModal.tsx` |
| 놀아조라 팝업 | `components/sections/ArcadeModal.tsx` |
| 보존식 기록표 팝업 | `components/sections/MealModal.tsx` |
| Our Little Archive · 링키라운지 · 모임 진단 · Aniwhere 팝업 | `components/sections/SmallProjectModal.tsx` |
| 색, 여백, 애니메이션 등 스타일 | `app/globals.css` |
| 탭 제목, 메타 설명 | `app/layout.tsx` |
| 화면 이미지 | `public/images/` |

글자는 각 파일에서 그대로 찾아 바꾸면 됩니다.

## 동작 방식

화면 상태(다크 모드, 경력 펼침, 열린 팝업, ImpacMatching 탭)는 `lib/usePortfolio.ts` 하나에서 관리하고,
각 섹션 컴포넌트는 그 값을 `v`로 받아 씁니다.

- 경력 항목 펼치기: `onClick={v.toggle.w1}`, 펼친 상태 클래스 `v.accCls.w1`
- 사이드 프로젝트 팝업 열기: `onClick={v.pick.ar}` (id는 `archive`, `ar`, `im`, `mr`, `linky`, `moim`, `ani`)
- 팝업은 닫기 버튼, 바깥 영역 클릭, Esc 키로 닫힙니다.

### 경력 항목을 추가하려면

1. `Career.tsx`에서 기존 `<div className="row">...</div>` 블록 하나를 복사합니다.
2. 안의 `w1` 같은 id를 새 id(예: `w7`)로 모두 바꿉니다.
3. `lib/usePortfolio.ts`의 `CAREER_IDS` 배열에 새 id를 추가합니다.

### 사이드 프로젝트를 추가하려면

1. `SideProjects.tsx`에서 `<button className="card pcard" ...>` 카드 하나를 복사하고 내용을 바꿉니다.
2. `lib/usePortfolio.ts`의 `PROJECT_IDS`에 새 id를, `SMALL_MODAL_LABELS`에 팝업 상단 라벨을 추가합니다.
3. `SmallProjectModal.tsx`에 `{v.pv.새id && (<>...</>)}` 블록을 추가해 팝업 내용을 넣습니다.

## 참고

- 화면 폭 1024px 이상에서는 `app/globals.css`의 `.root{zoom:.9}`로 전체를 90% 크기로 그립니다. 크기를 바꾸려면 이 값을 조절하세요.
- `public/images/`의 휴대폰 화면 이미지는 각 프로젝트 설명 HTML의 목업을 렌더링한 것입니다. 실제 스크린샷이 생기면 같은 파일 이름으로 덮어쓰면 됩니다.
- 기기에서 '동작 줄이기'를 켜면 애니메이션이 꺼집니다.
