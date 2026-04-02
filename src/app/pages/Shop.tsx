import { useState } from 'react';

const ds = {
  white: '#ffffff',
  ivory: '#f8f6f2',
  brown: '#2d2518',
  brownMid: '#5c4d3a',
  brownLight: '#8a7a68',
  darkBrown: '#3d3020',
  green: '#7a8469',
  fontHeading: '"Noto Serif KR", serif',
  fontBody: '"Noto Sans KR", sans-serif',
};

const badgeStyles: Record<string, { bg: string; label: string }> = {
  '베스트셀러': { bg: ds.green, label: '베스트셀러' },
  '입문추천':   { bg: '#b5622a', label: '입문추천' },
  '베스트리뷰': { bg: '#6b8fa3', label: '베스트리뷰' },
  '인기세트':   { bg: '#9b6fa8', label: '인기세트' },
};

type Category = '전체' | '우유' | '요거트' | '세트';

const categories: { label: Category; emoji: string }[] = [
  { label: '전체', emoji: '🛒' },
  { label: '우유', emoji: '🥛' },
  { label: '요거트', emoji: '🫐' },
  { label: '세트', emoji: '🎁' },
];

const products = [
  {
    img: '/images/유제품목록.png',
    name: '[진짜우유] A2 저지 목초우유 1L × 2개',
    subtitle: '가장 인기 있는 사이즈',
    desc: '소화 편한 A2 베타-카제인, 저온살균(LTLT) 방식으로 영양소 보존',
    volume: '1L × 2개',
    price: '15,000원',
    badge: '베스트셀러',
    category: '우유' as Category,
  },
  {
    img: '/images/유제품목록.png',
    name: '[진짜우유] A2 저지 목초우유 500mL',
    subtitle: '처음 만나는 무무목장 우유',
    desc: '첫 주문이라면 500mL로 먼저 경험해보세요',
    volume: '500mL',
    price: '6,000원',
    badge: '입문추천',
    category: '우유' as Category,
  },
  {
    img: '/images/유제품_블루베리요거트.png',
    name: 'A2 저지 오가닉 블루베리 요거트 200mL',
    subtitle: '한 끼 간식용 소용량',
    desc: '무무목장 원유 100% + 국산 블루베리, 설탕 최소화',
    volume: '200mL',
    price: '2,500원',
    badge: null,
    category: '요거트' as Category,
  },
  {
    img: '/images/유제품_블루베리요거트.png',
    name: 'A2 저지 오가닉 블루베리 요거트 290mL',
    subtitle: '딱 좋은 1인분',
    desc: '무무목장 원유 100% + 국산 블루베리, 설탕 최소화',
    volume: '290mL',
    price: '3,000원',
    badge: null,
    category: '요거트' as Category,
  },
  {
    img: '/images/유제품_블루베리요거트.png',
    name: 'A2 저지 오가닉 블루베리 요거트 500mL',
    subtitle: '가장 많이 선택하는 사이즈',
    desc: '진한 블루베리 과육, 달지 않고 자연스러운 단맛',
    volume: '500mL',
    price: '7,500원',
    badge: '베스트리뷰',
    category: '요거트' as Category,
  },
  {
    img: '/images/유제품_블루베리요거트.png',
    name: 'A2 저지 오가닉 블루베리 요거트 1L',
    subtitle: '가족이 함께',
    desc: '넉넉한 용량으로 온 가족이 즐기는 요거트',
    volume: '1L',
    price: '15,000원',
    badge: null,
    category: '요거트' as Category,
  },
  {
    img: '/images/유제품 소개.png',
    name: 'A2 저지 목초우유 + 오가닉 요거트 세트',
    subtitle: '무무목장 대표 구성',
    desc: '신선한 목초우유와 블루베리 요거트를 함께 경험하세요',
    volume: '세트 구성',
    price: '15,000원',
    badge: '인기세트',
    category: '세트' as Category,
  },
  {
    img: '/images/유제품_블루베리요거트.png',
    name: 'A2 저지 오가닉 블루베리 요거트 세트',
    subtitle: '요거트 선물용으로 딱',
    desc: '다양한 용량의 블루베리 요거트를 한번에',
    volume: '세트 구성',
    price: '12,000원',
    badge: null,
    category: '세트' as Category,
  },
  {
    img: '/images/유제품_블루베리요거트.png',
    name: 'A2 저지 오가닉 요거트 소용량 세트',
    subtitle: '처음 맛보는 분께',
    desc: '소용량으로 구성된 입문용 요거트 세트',
    volume: '소용량 세트',
    price: '6,000원',
    badge: null,
    category: '세트' as Category,
  },
];

const STORE_URL = 'https://smartstore.naver.com/moomooranch';

export function Shop() {
  const [activeCategory, setActiveCategory] = useState<Category>('전체');

  const filtered = activeCategory === '전체'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <main>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          height: '60vh',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src="/images/유제품목록.png"
          alt="상품안내"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(45,37,24,0.55) 0%, transparent 50%)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.7)',
              letterSpacing: '0.2em',
              marginBottom: '16px',
            }}
          >
            SHOP
          </p>
          <h1
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 400,
              color: '#fff',
              margin: 0,
            }}
          >
            상품안내
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
            display: 'flex',
            gap: '40px',
          }}
        >
          <div style={{ width: '2px', backgroundColor: ds.brownLight, flexShrink: 0 }} />
          <div>
            <p
              style={{
                fontFamily: ds.fontHeading,
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                fontWeight: 400,
                color: ds.brown,
                lineHeight: 2,
                margin: 0,
              }}
            >
              착유 당일 신선하게 발송합니다.<br />
              무무목장의 정직한 제품들입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ backgroundColor: ds.white, paddingTop: 'clamp(60px, 10vh, 80px)', paddingBottom: '40px' }}>
        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 24px',
                  fontFamily: ds.fontBody,
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#fff' : ds.brownMid,
                  backgroundColor: isActive ? ds.green : 'transparent',
                  border: `1.5px solid ${isActive ? ds.green : ds.brownLight}`,
                  borderRadius: '100px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.02em',
                }}
              >
                <span>{cat.emoji}</span>
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Products Grid */}
      <section style={{ backgroundColor: ds.white, paddingBottom: 'clamp(80px, 12vh, 120px)' }}>
        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '48px 36px',
            }}
          >
            {filtered.map((product, i) => (
              <a
                key={`${product.name}-${i}`}
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'relative',
                  textDecoration: 'none',
                  display: 'block',
                  color: 'inherit',
                }}
              >
                {/* 이미지 + 배지 */}
                <div style={{ position: 'relative', marginBottom: '16px' }}>
                  <img
                    src={product.img}
                    alt={product.name}
                    style={{
                      width: '100%',
                      aspectRatio: '1',
                      objectFit: 'cover',
                      borderRadius: '4px',
                      display: 'block',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.03)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                  />
                  {product.badge && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        backgroundColor: badgeStyles[product.badge]?.bg ?? ds.brownMid,
                        color: '#fff',
                        fontFamily: ds.fontBody,
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                        padding: '3px 8px',
                        borderRadius: '2px',
                      }}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* 카테고리 태그 */}
                <p
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.6875rem',
                    color: ds.green,
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    margin: '0 0 4px',
                  }}
                >
                  {product.category === '우유' ? '🥛 우유'
                    : product.category === '요거트' ? '🫐 요거트'
                    : '🎁 세트'}
                </p>

                {/* 텍스트 */}
                <h3
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: ds.brown,
                    margin: '0 0 2px',
                    lineHeight: 1.4,
                  }}
                >
                  {product.name}
                </h3>
                <p
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.8125rem',
                    color: ds.green,
                    margin: '0 0 8px',
                    fontWeight: 500,
                  }}
                >
                  {product.subtitle}
                </p>
                <p
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.8125rem',
                    color: ds.brownMid,
                    margin: '0 0 10px',
                    lineHeight: 1.6,
                  }}
                >
                  {product.desc}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span
                    style={{
                      fontFamily: ds.fontBody,
                      fontSize: '0.75rem',
                      color: ds.brownLight,
                    }}
                  >
                    {product.volume}
                  </span>
                  <span
                    style={{
                      fontFamily: ds.fontBody,
                      fontSize: '0.9375rem',
                      fontWeight: 700,
                      color: ds.brown,
                    }}
                  >
                    {product.price}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* 스마트스토어 링크 */}
          <div style={{ textAlign: 'center', marginTop: '64px' }}>
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '14px 40px',
                fontFamily: ds.fontBody,
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#fff',
                backgroundColor: ds.green,
                textDecoration: 'none',
                borderRadius: '4px',
                letterSpacing: '0.04em',
              }}
            >
              네이버 스마트스토어에서 구매하기
            </a>
          </div>
        </div>
      </section>

      {/* 정기구독 안내 */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(60px, 10vh, 100px) 0' }}>
        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              color: ds.brownLight,
              marginBottom: '16px',
            }}
          >
            SUBSCRIPTION
          </p>
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
              fontWeight: 400,
              color: ds.brown,
              margin: '0 0 16px',
            }}
          >
            정기 구독 준비중
          </h2>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.9375rem',
              color: ds.brownMid,
              lineHeight: 1.8,
              margin: '0 0 36px',
            }}
          >
            치즈레터를 구독하시면<br />
            정기 구독 오픈 시 가장 먼저 알려드립니다.
          </p>
          <a
            href="https://moomooranch.stibee.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              fontFamily: ds.fontBody,
              fontSize: '0.875rem',
              fontWeight: 500,
              color: ds.brown,
              border: `1.5px solid ${ds.brownLight}`,
              textDecoration: 'none',
              borderRadius: '4px',
              letterSpacing: '0.04em',
            }}
          >
            치즈레터 구독하기
          </a>
        </div>
      </section>

      {/* Shipping Info */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(60px, 10vh, 80px) 0' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: '1.125rem',
              fontWeight: 400,
              color: ds.brown,
              margin: '0 0 24px',
            }}
          >
            배송 안내
          </h2>
          <ul
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.875rem',
              color: ds.brownMid,
              lineHeight: 2,
              margin: 0,
              paddingLeft: '20px',
            }}
          >
            <li>착유 당일 또는 익일 발송</li>
            <li>냉장 택배 (아이스팩 동봉)</li>
            <li>제주/도서산간 지역 추가 배송비 발생</li>
            <li>배송 중 파손 시 100% 교환/환불</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
