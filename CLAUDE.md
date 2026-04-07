# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm i          # 의존성 설치
npm run dev    # 개발 서버 시작 (Vite, localhost:5173)
npm run build  # 프로덕션 빌드
```

테스트 프레임워크 없음. 빌드 후 Vercel에 배포.

## Architecture

**React 19 + Vite + Tailwind CSS v4** SPA. 라우팅은 `react-router` v7.

```
src/
  main.tsx                    # 진입점, <App /> 렌더
  app/
    App.tsx                   # <RouterProvider> 루트
    routes.tsx                # 전체 라우트 정의
    components/
      Layout.tsx              # Header + <Outlet /> + Footer 공통 레이아웃
      Header.tsx              # 반투명 sticky 네비게이션
      Footer.tsx              # 다크 배경 푸터
      ui/                     # shadcn/ui 기반 원시 컴포넌트 (직접 수정 X)
      CheeseAvatar.tsx        # 치즈 아바타 (SM/MD/LG/XL)
      ProductCard.tsx         # 상품 카드
      BlogCard.tsx            # 블로그 카드
      HeroSection.tsx         # 히어로 공통 패턴
      TwoPathCards.tsx        # 2열 경로 카드
    pages/                    # 라우트별 페이지 컴포넌트
  styles/
    theme.css                 # CSS 변수 정의 (색상·폰트)
  imports/pasted_text/
    moomoo-ranch-design-guide.md  # 색상·타이포·컴포넌트 레퍼런스
```

`@` alias → `./src`

### 라우트 구조

| URL | 컴포넌트 |
|-----|---------|
| `/` | Home |
| `/about` | About |
| `/journey` | Journey |
| `/journey/empty-barn` | EmptyBarn |
| `/taste` | Taste |
| `/blog` | Blog |
| `/blog/:slug` | BlogPost |
| `/shop` | Shop |
| `/products` | Products |
| `/visit` | Contact |

홈페이지(`/`)는 Footer 숨김 — Contact 섹션이 Footer 역할을 함.

## 디자인 시스템

CSS 변수는 `src/styles/theme.css`에 정의됨. 색상은 반드시 변수 사용:

| 변수 | HEX | 용도 |
|------|-----|------|
| `--cream` | #FFF8E1 | 밝은 배경 |
| `--dusty-rose` | #D4A0A0 | 주 액센트 |
| `--pale-orange` | #FFCC80 | CTA 버튼 |
| `--golden` | #FFD54F | hover 강조 |
| `--sage` | #A5D6A7 | 자연/목장 섹션 |
| `--soft-blue` | #90CAF9 | 정보 섹션 |
| `--text-main` | #4E342E | 본문 텍스트 |
| `--text-light` | #8D6E63 | 보조 텍스트 |
| `--kakao-yellow` | #FEE500 | 카카오 CTA |

폰트 변수: `--font-korean` (Noto Sans KR), `--font-english` (Playfair Display), `--font-body` (Inter)

### 핵심 UI 패턴

- 카드: `rounded-3xl`, 흰 배경, `1px solid rgba(141,110,99,0.08)` 보더
- CTA 버튼: `rounded-full` (pill), `hover:scale-105`
- 섹션 패딩: `py-24 md:py-32`
- 히어로: 풀스크린 배경 이미지 + `brightness(0.6~0.7)` + gradient 오버레이
- 다크 섹션: `#1a1a1a` 배경, 흰 텍스트
- 섹션 라벨: `rounded-full` pill 태그, `rgba(색상, 0.15)` 배경

### 애니메이션

Framer Motion (`motion/react`) 사용:
```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}  // 필수
transition={{ duration: 0.6 }}
```

## 콘텐츠 원칙

- **무무목장은 유제품 목장** (강원도 삼척 예수원 산하). 여행/투어 관련 문구 절대 사용 금지.
- 모든 한국어 문장은 자연스러워야 함. 깨진/의미불명 문장 즉시 수정.
- 시니어 타겟: 본문 최소 16px, 줄간격 1.8, 버튼 터치영역 48×48px 이상.
- 이미지: `loading="lazy"` (fold 아래), 구체적인 `alt` 텍스트, Unsplash `w=` 파라미터 (히어로: 1920, 카드: 800, 썸네일: 400).
- 스타일: Tailwind 클래스 우선, CSS 변수가 필요한 경우(color, fontFamily 등)만 인라인 스타일.

전체 가이드라인: `guidelines/Guidelines.md`
