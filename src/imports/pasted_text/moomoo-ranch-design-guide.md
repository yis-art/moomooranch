# 🎨 무무목장 홈페이지 — Figma 디자인 가이드라인 AI 프롬프트

> 이 프롬프트를 Figma AI, Figma 플러그인, 또는 AI 디자인 도구에 입력하여 무무목장 홈페이지 디자인을 생성하세요.

---

## 📋 프로젝트 개요

**프로젝트명:** 무무목장 (MooMoo Ranch) 홈페이지  
**도메인:** moomooranch.net  
**컨셉:** "커뮤니티 비즈니스 × 프로세스 이코노미" — 송아지 캐릭터 '치즈'가 이야기를 들려주는, 따뜻하고 친근한 목장 웹사이트  
**타겟 사용자:** 40~70대 시니어 + 30대 건강맘 (시니어 친화 대형 텍스트, 높은 색상 대비 필수)  
**프레임워크:** Next.js + Tailwind CSS (반응형 웹)

---

## 🎨 색상 시스템 (Color Tokens)

### Primary Palette

| 토큰명 | HEX | 용도 |
|--------|-----|------|
| **Cream** | `#FFF8E1` | 전체 배경, 기본 배경색 |
| **Dusty Rose** | `#D4A0A0` | 주 액센트, 하이라이트 가격, hover 텍스트 |
| **Pale Orange** | `#FFCC80` | CTA 버튼 배경, 네비 하단선, 카드 보더 |
| **Golden** | `#FFD54F` | 강조, CTA hover 상태, 포커스 아웃라인, 치즈 아바타 배경 |
| **Sage** | `#A5D6A7` | 자연/목장 섹션 배경, 태그 배경 |
| **Soft Blue** | `#90CAF9` | 카톡풍 UI 섹션, 뉴스레터 섹션, 링크 |

### Text Colors

| 토큰명 | HEX | 용도 |
|--------|-----|------|
| **Text Main** | `#4E342E` | 본문 텍스트 (다크 브라운) |
| **Text Light** | `#8D6E63` | 보조 텍스트, 날짜, 설명 |

### Special Colors

| 토큰명 | HEX | 용도 |
|--------|-----|------|
| **Kakao Yellow** | `#FEE500` | 카카오톡 말풍선, 카카오 CTA 버튼 |
| **White** | `#FFFFFF` | 카드 배경, 카카오 답장 말풍선 |

### 색상 대비

- 본문 텍스트 `#4E342E` on 배경 `#FFF8E1` → 대비율 약 7.5:1 ✅ (WCAG AAA)
- 모든 텍스트는 최소 4.5:1 대비율 유지

---

## 🔤 타이포그래피 (Typography)

### 폰트 패밀리

| 용도 | 폰트 | Weight | 언어 |
|------|-------|--------|------|
| 한글 제목 | **Noto Sans KR** | Bold (700) | 한국어 |
| 한글 본문 | **Pretendard** (또는 Noto Sans KR 400) | Regular (400) | 한국어 |
| 치즈 말풍선 전용 | **강원교육모두체** (GangwonEdu) / 대체: Noto Sans KR Bold | Bold | 한국어 |
| 영문 제목 | **Playfair Display** | Bold (700) | English |
| 영문 본문 | **Inter** | Regular (400), Medium (500), SemiBold (600) | English |

### 타입 스케일

| 요소 | 모바일 | 데스크탑 | Line Height |
|------|--------|---------|-------------|
| H1 (페이지 제목) | 30px (text-3xl) | 48px (text-5xl) | 1.2 (tight) |
| H2 (섹션 제목) | 24px (text-2xl) | 30px (text-3xl) | 1.3 |
| H3 (카드 제목) | 18px (text-lg) | 20px (text-xl) | 1.4 (snug) |
| Body (본문) | 16px (text-base) | 18px (text-lg) | 1.8 (relaxed) |
| Small (날짜/태그) | 12px (text-xs) | 14px (text-sm) | 1.5 |
| CTA 버튼 | 18px (text-lg) | 18px (text-lg) | 1.5 |

### 중요 규칙
- 본문 최소 **16px** (시니어 타겟: 18px+ 권장)
- 줄 간격 **1.8** 이상
- 버튼/링크 터치 영역 최소 **48×48px**

---

## 📐 레이아웃 시스템 (Layout)

### 그리드

- **최대 너비:** 1200px (container)
- **좌우 패딩:** 모바일 20px / 데스크탑 40px
- **섹션 간격:** 모바일 64px (space-y-16) / 데스크탑 96px (space-y-24)

### 브레이크포인트

| 이름 | 너비 | 설명 |
|------|------|------|
| Mobile | < 768px | 1열 레이아웃 |
| Tablet | 768px ~ 1023px | 2열 그리드 시작 |
| Desktop | ≥ 1024px | 3열 그리드, 풀 레이아웃 |

### Border Radius (모서리)

| 요소 | Radius |
|------|--------|
| 대형 카드/섹션 | 24px (rounded-3xl) |
| 카드 내부 이미지 | 16px (rounded-2xl) |
| 버튼 (CTA) | 9999px (rounded-full) — 완전 둥근 pill 형태 |
| 손그림 보더 | 20px (rounded-blob) |
| 카카오 말풍선 (왼쪽) | 16px 16px 16px 4px |
| 카카오 말풍선 (오른쪽) | 16px 16px 4px 16px |

---

## 🎭 디자인 원칙 & 스타일

### 핵심 무드

> **"손그림 느낌의 따뜻한 파스텔 일러스트 인포그래픽"**
> 
> A hand-drawn conceptual infographic illustration. The style uses organic and flowing shapes as a background structure. Use a soft pastel color palette of cream, dusty rose, pale orange, golden yellow, sage green, and soft blue. Stylized characters and objects are depicted within overlapping colored patches. The lines are soft ink-like. The composition is a multi-panel layout. Include short, clear text labels for each scene. Low saturation and warm, inviting atmosphere.

### 스타일 가이드

| 원칙 | 구현 방식 |
|------|----------|
| **손그림 느낌** | 둥근 모서리 (20~24px), SVG 손그림 보더, 부드러운 잉크 라인 스타일 일러스트 |
| **유기적 형태** | Blob 모양 배경 (border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%), pill 버튼 |
| **파스텔 저채도** | 위 색상 토큰 기반, 배경에 10~30% opacity 사용 |
| **멀티패널** | 겹치는 색상 패치 배경, relative/absolute 레이어링 |
| **치즈 일관성** | 모든 섹션에 치즈 아바타 컴포넌트 반복 사용 |
| **카톡풍 UI** | 카카오톡 채팅방 스타일 메시지 레이아웃 |

### 그림자 & 효과

| 효과 | 값 |
|------|-----|
| 카드 기본 그림자 | 없음 (보더만 사용) |
| 카드 hover 그림자 | shadow-lg (0 10px 15px -3px rgba(0,0,0,0.1)) |
| 손그림 보더 그림자 | 2px 2px 0px #8D6E63 |
| 헤더 backdrop | backdrop-blur-sm (4px) + bg-cream/95 |

### 애니메이션

| 이름 | 설명 | 용도 |
|------|------|------|
| Float | 위아래 10px 떠다니기, 3초 주기 | 히어로 치즈 아바타 |
| Fade In Up | 아래에서 위로 20px 올라오며 나타남, 0.6초 | 페이지 진입, 모바일 메뉴 |

---

## 🐄 치즈 캐릭터 아바타 시스템

### 아바타 컴포넌트

원형 배경 (golden/30 + pale-orange 보더 2px) 안에 이모지/일러스트

| 사이즈 | 크기 | 아이콘 크기 |
|--------|------|-----------|
| SM | 32×32px | 18px |
| MD | 48×48px | 24px |
| LG | 64×64px | 30px |
| XL | 96×96px | 48px |

### 아바타 표정 (Mood)

| Mood | 이모지 (임시) | 일러스트 설명 (최종) |
|------|-------------|-------------------|
| happy | 🐄 | 기본 정면 인사, 미소 |
| writing | 📝 | 펜 들고 글쓰기 포즈 |
| chat | 💬 | 말풍선과 함께 수다 포즈 |
| sleepy | 😴 | 눈 감고 졸림 |
| excited | 🎉 | 뛰어다니며 기뻐함 |
| confused | 😅 | 고개 갸웃, 당황 |
| running | 🏃 | 달리는 포즈 (배송 안내) |
| camera | 📸 | 카메라 포즈 (영상 콘텐츠) |

### 일러스트 스타일 (최종 에셋 제작 시)

```
기본 형태: 저지종 송아지 (갈색 바탕 + 크림색 배)
표정: 동그란 큰 눈, 볼터치(#D4A0A0), 살짝 열린 입
스타일: 손그림 일러스트, 부드러운 잉크라인, 파스텔 톤
크기: 각 포즈별 SVG + PNG @2x 제작
```

---

## 📱 페이지별 디자인 명세

---

### 1. 공통 Header (Sticky)

**구조:**
```
┌────────────────────────────────────────────────────────────┐
│ 🐄 무무목장    홈  치즈의담벼락  목장소개  상품안내  오시는길  [💬 치즈에게 말걸기] │
└────────────────────────────────────────────────────────────┘
```

**스타일:**
- `sticky top-0 z-50`
- 배경: `cream/95` + `backdrop-blur-sm`
- 하단 보더: `pale-orange/30` 2px
- 높이: 모바일 64px / 데스크탑 80px
- 로고: 🐄 이모지 + "무무목장" 텍스트 (Noto Sans KR Bold, 20px, text-main)
- 메뉴 항목: 아이콘 + 라벨, hover 시 dusty-rose 색상
- CTA 버튼: `pale-orange` 배경, pill 형태, hover → `golden`

**모바일 햄버거 메뉴:**
- 3줄 아이콘 → X로 전환 애니메이션
- 드롭다운 패널: cream 배경, 각 항목 패딩 12px, 아이콘 20px + 라벨 18px
- 하단 CTA: 전체 너비 pill 버튼

---

### 2. 홈 페이지 (/)

#### 섹션 A: 히어로

```
┌─────────────────────────────────────┐
│  [blob 배경: sage/20]    [blob 배경: pale-orange/20]
│                                     │
│        🐄 (XL, float 애니메이션)     │
│                                     │
│     안녕하세요~                      │
│     무무목장의 치즈예요! 🎉          │
│                                     │
│  강원도 삼척, 50년 역사의 예수원 목장에서│
│  치즈가 들려주는 따뜻한 목장 이야기    │
│                                     │
│  [📝 치즈의 담벼락 보러가기]  [💬 치즈에게 말걸기] │
└─────────────────────────────────────┘
```

- **배경 장식:** 2개의 blob 모양 (absolute positioning), sage/20과 pale-orange/20
- **치즈 아바타:** XL 사이즈, "excited" mood, float 애니메이션
- **제목:** 30~48px, Bold, text-main, "치즈" 글자만 dusty-rose
- **부제:** 18~20px, text-light, 최대 너비 640px, 중앙 정렬
- **CTA 버튼 2개:**
  - Primary: pale-orange 배경, pill, shadow-md, hover → golden + scale(1.05)
  - Secondary: white/80 배경, pale-orange/50 보더 2px, hover → white + scale(1.05)
- **패딩:** 모바일 py-64px / 데스크탑 py-96px

#### 섹션 B: 치즈의 최신 소식 (카톡풍)

```
┌─ 💬 치즈의 최신 소식 ─────────────────┐
│  ┌─────────────────────────────────┐  │
│  │ [치즈 MD] 치즈의 담벼락 🐄       │  │  ← 채팅방 헤더
│  │─────────────────────────────────│  │
│  │ 🐄치즈  3월 20일                 │  │  ← 카카오 말풍선
│  │ ┌──────────────────┐            │  │
│  │ │ 봄비가 내렸어요~ │            │  │
│  │ └──────────────────┘            │  │
│  │   [링크 프리뷰 카드]             │  │
│  │                                 │  │
│  │ 🐄치즈  3월 17일                 │  │
│  │ ┌──────────────────┐            │  │
│  │ │ 저지소 소개할게요! │            │  │
│  │ └──────────────────┘            │  │
│  └─────────────────────────────────┘  │
│  [📝 담벼락 전체 보기 →]              │
└───────────────────────────────────────┘
```

- **컨테이너:** 최대 너비 512px, soft-blue/10 배경, rounded-3xl, soft-blue/20 보더 2px
- **채팅방 헤더:** 치즈 MD 아바타 + "치즈의 담벼락" Bold + "무무목장 소식방 🐄" 12px
- **말풍선:** 카카오톡 스타일
  - 배경: `#FEE500` (카카오 노랑)
  - 보더: radius 16px 16px 16px 4px (왼쪽 꼬리)
  - 패딩: 12px 16px
  - 최대 너비: 280px
- **링크 프리뷰:** rounded-2xl, 이미지 + 제목 + 태그
- **전체보기 버튼:** soft-blue/20 배경, pill, 14px

#### 섹션 C: 무무목장은요... (목장 소개)

```
┌─────────────────────────────────────┐
│  ┌──────────┬──────────────────────┐│
│  │ [목장    │  🐄 무무목장은요...   ││
│  │  전경    │  "50년 역사의 예수원   ││
│  │  이미지] │   목장이 모든 이에게   ││
│  │          │   열립니다"           ││
│  │          │  [자세히 보기 →]      ││
│  └──────────┴──────────────────────┘│
└─────────────────────────────────────┘
```

- **컨테이너:** sage/10 배경, rounded-3xl, sage/20 보더 2px
- **2열 그리드:** 이미지 (object-cover) | 텍스트 (패딩 32~48px)
- **제목:** 24~30px Bold, text-main
- **본문:** 18px, text-light, line-height 1.8
- **링크:** sage 색상, hover → text-main, Bold, 18px

#### 섹션 D: 무무의 선물 (상품 하이라이트)

```
┌─ 🎁 무무의 선물 ──────────────────────┐
│  [상품카드1]  [상품카드2]  [상품카드3]  │
│  [🛒 스마트스토어에서 만나기 →]        │
└────────────────────────────────────────┘
```

- **3열 그리드** (모바일 1열, 태블릿 2열, 데스크탑 3열), gap 24px
- **상품 카드:**
  - 흰 배경, rounded-3xl, pale-orange/20 보더 2px
  - 이미지 영역: 192px 높이, pale-orange/10 배경, 대형 이모지 (🧀 또는 🥛, 60px)
  - 패딩: 20px
  - 이름: Bold 18px, text-main, hover → dusty-rose
  - 설명: 14px, text-light
  - 가격: Bold 20px, dusty-rose
  - 정기구독 배지: golden/30 배경, pill, 12px Bold

#### 섹션 E: 치즈에게 말걸기 CTA

```
┌─────────────────────────────────────┐
│  🐄 (LG, chat mood)                 │
│  궁금한 거 있으면 치즈에게 물어보세요~ │
│  [💬 카카오톡으로 말걸기]             │
└─────────────────────────────────────┘
```

- **컨테이너:** golden/20 배경, rounded-3xl, golden/30 보더 2px, 중앙 정렬
- **CTA 버튼:** `#FEE500` (카카오 노랑), pill, Bold 18px, shadow-md, hover → scale(1.05)

#### 섹션 F: 뉴스레터 구독

```
┌─────────────────────────────────────┐
│  📧 치즈의 편지를 받아보세요          │
│  [이메일 입력 ___________] [구독하기] │
└─────────────────────────────────────┘
```

- **컨테이너:** soft-blue/10 배경, rounded-3xl, soft-blue/20 보더 2px
- **입력 필드:** white 배경, rounded-full, 보더 2px
- **구독 버튼:** pale-orange 배경, pill

---

### 3. 블로그 목록 페이지 (/blog)

```
┌─ 📝 치즈의 담벼락 ─────────────────────┐
│  "치즈가 들려주는 무무목장 이야기"       │
│                                         │
│  [전체] [#오늘의목장] [#젖소이야기]      │
│  [#생태순환] [#헤리티지] [#제품이야기]   │
│                                         │
│  ┌── BlogCard ─────────────────────┐   │
│  │ 🐄치즈 · 2026.3.20 · [#태그]    │   │
│  │ [커버 이미지 / 영상 썸네일 ▶️]    │   │
│  │ 제목 텍스트                      │   │
│  │ 요약 텍스트 2줄...               │   │
│  └──────────────────────────────────┘   │
│                                         │
│  ┌── BlogCard ─────────────────────┐   │
│  │ ...                              │   │
│  └──────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

**태그 필터:**
- pill 형태 버튼 행, 가로 스크롤 (모바일)
- 선택됨: golden 배경, text-main Bold
- 미선택: cream 배경, text-light

**BlogCard:**
- 흰 배경, rounded-3xl, pale-orange/10 보더 2px
- hover → pale-orange/40 보더 + shadow-lg
- 헤더: 치즈 SM 아바타 + "치즈" Bold + 날짜 + 태그 pill (sage/20)
- 이미지: rounded-2xl, mx-20px, 208px 높이, object-cover, hover → scale(1.05)
- 영상 표시: 반투명 오버레이 + ▶️ 원형 버튼
- 제목: Bold 18px, text-main, hover → dusty-rose
- 요약: 14px, text-light, 2줄 말줄임

---

### 4. 블로그 상세 페이지 (/blog/[slug])

```
┌─ [← 담벼락으로] ───────────────────────┐
│                                         │
│  [#태그] [#태그]                        │
│  봄비가 내린 오늘의 무무목장 🌧️🐄       │
│  🐄 치즈 · 2026년 3월 20일              │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │     [영상 임베드 / 커버 이미지]     │ │
│  └───────────────────────────────────┘ │
│                                         │
│  (Notion 본문 블록 렌더링)              │
│  텍스트, 이미지, 인용문, 리스트 등       │
│                                         │
│  ──────────────────────────────────── │
│  [카카오 공유 💬]  [링크 복사 🔗]       │
│                                         │
│  ← 이전 글      |      다음 글 →       │
└─────────────────────────────────────────┘
```

---

### 5. 상품 페이지 (/products)

```
┌─ 🛒 무무의 선물 ───────────────────────┐
│  저지종 젖소가 만든 특별한 A2 우유와 유제품 │
│                                         │
│  [상품카드]  [상품카드]  [상품카드]       │  ← 3열 그리드
│                                         │
│  ┌─ 📦 정기구독 안내 ─────────────────┐ │
│  │  sage/10 배경                       │ │
│  │  [주1회] [격주] [월1회] 옵션 카드    │ │
│  │  [🛒 스마트스토어에서 구독하기]      │ │
│  └──────────────────────────────────── │ │
│                                         │
│  ┌─ 🚚 배송 안내 ─────────────────────┐ │
│  │  soft-blue/10 배경                  │ │
│  │  [📦새벽배송] [💰무료배송] [❄️아이스팩]│ │
│  └──────────────────────────────────── │ │
└─────────────────────────────────────────┘
```

**상품 카드 (상세):**
- 흰 배경, rounded-3xl, pale-orange/20 보더 2px
- 이미지: 224px, pale-orange/10 배경, 대형 이모지 70px
- 이름: Bold 20px
- 가격: Bold 24px, dusty-rose
- 구매 버튼: 전체 너비, pale-orange, pill, min-height 48px

**정기구독 옵션 카드:**
- 흰 배경, rounded-2xl, sage/20 보더
- 이모지 30px + 제목 Bold + 설명

---

### 6. 공통 Footer

```
┌──────────────────────────────────────────┐
│  [text-main 다크 브라운 배경]              │
│                                          │
│  🐄 무무목장        바로가기       연락처  │
│  50년 역사의        📝 담벼락     📍 주소  │
│  예수원 목장...     🐄 목장소개   🕐 시간  │
│                    🛒 상품안내    💬 카카오 │
│                    📍 오시는길    🛒 스토어 │
│                                          │
│  ────────────────────────────────────── │
│  © 2026 무무목장 (MooMoo Ranch)          │
│  🐄 치즈가 사랑을 담아 만든 홈페이지예요~ 💛│
└──────────────────────────────────────────┘
```

- **배경:** text-main (`#4E342E`) 다크 브라운
- **텍스트:** cream/90 (밝은 크림)
- **3열 그리드:** 소개 | 바로가기 | 연락처
- **링크:** cream/70, hover → golden
- **저작권:** 상단 보더 cream/20, 중앙 정렬, 12px

---

## 📦 Figma 프레임 구성 제안

```
📁 무무목장 디자인 시스템
├── 📄 Page 1: 🎨 Design System
│   ├── Color Tokens (스와치 그리드)
│   ├── Typography Scale (각 크기/weight 샘플)
│   ├── Spacing Scale (4px 기본 단위)
│   ├── Border Radius 샘플
│   └── Shadow & Effect 샘플
│
├── 📄 Page 2: 🧩 Components
│   ├── CheeseAvatar (SM/MD/LG/XL × 8 moods)
│   ├── CheeseBubble (카카오 말풍선)
│   ├── Button (Primary/Secondary/Kakao/Ghost)
│   ├── BlogCard
│   ├── ProductCard
│   ├── TagFilter (선택됨/미선택)
│   ├── Header (Desktop/Mobile 펼침/접힘)
│   ├── Footer
│   └── Newsletter Form
│
├── 📄 Page 3: 🖥️ Desktop (1440px)
│   ├── 홈 페이지
│   ├── 블로그 목록
│   ├── 블로그 상세
│   ├── 상품 안내
│   ├── 목장 소개 — 헤리티지
│   ├── 오시는 길
│   └── 치즈에게 말걸기
│
├── 📄 Page 4: 📱 Mobile (375px)
│   ├── 홈 페이지
│   ├── 블로그 목록
│   ├── 블로그 상세
│   ├── 상품 안내
│   ├── 모바일 메뉴 펼침
│   └── 기타 페이지
│
└── 📄 Page 5: 🐄 치즈 캐릭터 에셋
    ├── 기본 포즈 (정면 인사)
    ├── 글쓰기 포즈
    ├── 수다 포즈
    ├── 졸림 포즈
    ├── 기쁨 포즈
    ├── 당황 포즈
    ├── 달리기 포즈
    └── 카메라 포즈
```

---

## 🤖 Figma AI 또는 디자인 AI에 바로 넣을 수 있는 원샷 프롬프트

### 프롬프트 (한국어)

```
무무목장(MooMoo Ranch) 홈페이지 디자인을 만들어주세요.

[컨셉] 강원도 삼척의 50년 역사 목장 홈페이지. 송아지 캐릭터 "치즈"가 스토리텔러로 등장. 손그림 일러스트 느낌의 따뜻하고 친근한 디자인.

[색상] 배경 #FFF8E1(크림), 액센트 #D4A0A0(더스티로즈), CTA #FFCC80(페일오렌지), 강조 #FFD54F(골든), 자연 #A5D6A7(세이지), 링크 #90CAF9(소프트블루), 텍스트 #4E342E(다크브라운), 보조텍스트 #8D6E63

[타이포] 한글: Noto Sans KR (제목 Bold, 본문 Regular), 영문: Playfair Display + Inter. 본문 최소 16px, 줄간격 1.8.

[레이아웃] 최대 1200px, 모든 카드 rounded-3xl(24px), 버튼은 pill(rounded-full). Blob 형태 배경 장식.

[페이지 구성]
1. 홈: 히어로(치즈 캐릭터 인사+CTA) → 최신소식(카카오톡 채팅방 UI) → 목장소개(이미지+텍스트 2열) → 상품(3열 카드) → 카카오 CTA → 뉴스레터
2. 블로그: SNS피드 스타일 카드, 태그 필터
3. 상품: 카드 그리드 + 정기구독 안내 + 배송 안내
4. 공통: 스티키 헤더(크림 반투명), 다크브라운 푸터

[타겟] 40~70대 시니어 + 30대 엄마. 터치영역 48px+, 큰 텍스트, 높은 대비.

[스타일 무드] 손그림 일러스트, 부드러운 파스텔, 유기적 형태, 카카오톡 UI 요소, 이모지 활용
```

### Prompt (English)

```
Create a website design for MooMoo Ranch (무무목장), a 50-year-old pastoral farm in Gangwon-do, South Korea.

[Concept] A warm, hand-drawn illustration style website featuring "Cheese" (치즈), a baby Jersey calf character who serves as the storyteller and mascot. The design should feel like a friendly, organic infographic with soft pastel colors.

[Colors] Background: #FFF8E1 (cream), Accent: #D4A0A0 (dusty rose), CTA: #FFCC80 (pale orange), Highlight: #FFD54F (golden), Nature: #A5D6A7 (sage), Links: #90CAF9 (soft blue), Text: #4E342E (dark brown), Secondary text: #8D6E63

[Typography] Korean: Noto Sans KR (headings Bold 700, body Regular 400). English: Playfair Display (headings) + Inter (body). Minimum body text 16px, line-height 1.8.

[Layout] Max-width 1200px. All cards: border-radius 24px. Buttons: pill-shaped (fully rounded). Blob-shaped background decorations. Cards have 2px soft borders in accent colors with 10-30% opacity.

[Pages]
1. HOME: Hero (Cheese avatar with greeting + 2 CTAs) → Latest News (KakaoTalk chat room style UI showing recent blog posts as chat bubbles) → Farm Intro (image + text 2-column) → Products (3-column cards) → Kakao CTA section → Newsletter signup
2. BLOG LIST: SNS-feed style vertical cards with avatar header, cover image, title, summary. Tag filter pills at top.
3. BLOG DETAIL: Article with video embed, Notion-rendered content, share buttons, prev/next navigation.
4. PRODUCTS: Product cards grid + Subscription plans + Delivery info.
5. COMMON: Sticky header (cream semi-transparent with blur), dark brown footer with 3-column layout.

[Target Users] 40-70 year old seniors + 30s moms. Large touch targets (48px+), big text, high contrast ratio (7.5:1).

[Style] Hand-drawn illustration feel, soft pastel palette, organic blob shapes, KakaoTalk messaging UI elements, emoji usage, warm and inviting atmosphere. Low saturation colors with ink-like soft lines.

[Character - Cheese] Baby Jersey calf with brown body + cream belly. Round big eyes, rosy cheeks (#D4A0A0), slightly open mouth. Available in 8 moods: happy, writing, chatting, sleepy, excited, confused, running, camera.
```

---

## ✅ 디자인 체크리스트

- [ ] Color Tokens 스와치 세트 생성
- [ ] Typography 스케일 정의
- [ ] CheeseAvatar 컴포넌트 (4사이즈 × 8표정)
- [ ] CheeseBubble (카카오 말풍선) 컴포넌트
- [ ] Button 컴포넌트 (Primary, Secondary, Kakao, Ghost)
- [ ] BlogCard 컴포넌트
- [ ] ProductCard 컴포넌트
- [ ] TagFilter 컴포넌트
- [ ] Header 컴포넌트 (Desktop + Mobile)
- [ ] Footer 컴포넌트
- [ ] 홈 페이지 (Desktop + Mobile)
- [ ] 블로그 목록 페이지
- [ ] 블로그 상세 페이지
- [ ] 상품 페이지
- [ ] 기타 페이지 (오시는길, 연락하기 등)
- [ ] 치즈 캐릭터 일러스트 에셋 세트
