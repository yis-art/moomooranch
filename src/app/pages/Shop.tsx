import { Link } from 'react-router';

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

const products = [
  {
    img: '/images/우유_저지소.png',
    name: 'A2 저지 우유',
    subtitle: '매일의 건강한 선택',
    desc: '소화 편한 A2 베타-카제인, 저온살균(LTLT) 방식으로 영양소 보존',
    volume: '900ml',
    price: '5,500원',
    badge: '베스트',
  },
  {
    img: '/images/유제품_블루베리요거트.png',
    name: '블루베리 요거트',
    subtitle: '국산 블루베리의 진한 맛',
    desc: '무무목장 원유 100% + 국산 블루베리, 설탕 최소화',
    volume: '150ml × 4개입',
    price: '9,000원',
    badge: null,
  },
  {
    img: '/images/유제품_딸기요커트.png',
    name: '딸기 요거트',
    subtitle: '아이들이 좋아하는',
    desc: '무무목장 원유 100% + 국산 딸기, 첨가물 최소화',
    volume: '150ml × 4개입',
    price: '9,000원',
    badge: null,
  },
  {
    img: '/images/유제품 소개.png',
    name: '수제 치즈',
    subtitle: '목장에서 당일 생산',
    desc: '저지 우유로 만든 자연 치즈, 와인과 함께',
    volume: '200g',
    price: '15,000원',
    badge: '신상품',
  },
  {
    img: '/images/무무목장 소개-특장점.png',
    name: '플레인 요거트',
    subtitle: '담백하고 진한',
    desc: '설탕 무첨가, 저지 원유 본연의 맛',
    volume: '500g',
    price: '7,500원',
    badge: null,
  },
];

const badgeColor: Record<string, string> = {
  '베스트': ds.green,
  '신상품': '#b5622a',
};

export function Shop() {
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
            background: 'linear-gradient(to top, rgba(45,37,24,0.5) 0%, transparent 50%)',
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

      {/* Products */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(80px, 12vh, 120px) 0' }}>
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
            {products.map((product, i) => (
              <div key={i} style={{ position: 'relative' }}>
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
                    }}
                  />
                  {product.badge && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        backgroundColor: badgeColor[product.badge] ?? ds.brownMid,
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

                {/* 텍스트 */}
                <h3
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: ds.brown,
                    margin: '0 0 2px',
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
              </div>
            ))}
          </div>

          {/* 스마트스토어 링크 */}
          <div style={{ textAlign: 'center', marginTop: '64px' }}>
            <a
              href="https://smartstore.naver.com/moomooranch"
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
