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
    name: 'A2 저지 목초우유 1L × 2개',
    category: '우유',
    price: '15,000원',
    image: '/images/우유_저지소.png',
    badge: '베스트',
  },
  {
    name: 'A2 저지 목초우유 500mL',
    category: '우유',
    price: '6,000원',
    image: '/images/우유_저지소.png',
    badge: '입문추천',
  },
  {
    name: '오가닉 블루베리 요거트 500mL',
    category: '요거트',
    price: '7,500원',
    image: '/images/유제품_블루베리요거트.png',
    badge: '인기',
  },
  {
    name: '오가닉 블루베리 요거트 200mL',
    category: '요거트',
    price: '2,500원',
    image: '/images/유제품_블루베리요거트.png',
  },
  {
    name: '오가닉 딸기 요거트 500mL',
    category: '요거트',
    price: '7,500원',
    image: '/images/유제품_딸기요커트.png',
  },
  {
    name: '우유 + 요거트 세트',
    category: '세트',
    price: '15,000원',
    image: '/images/유제품 소개.png',
    badge: '선물용',
  },
];

export function Shop() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          height: '50vh',
          minHeight: '350px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src="/images/유제품 소개-특장점.png"
          alt="무무곳간 유제품"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.5)',
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
            무무곳간
          </h1>
        </div>
      </section>

      {/* 안내 */}
      <section style={{ backgroundColor: ds.ivory, padding: '40px 0' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.9375rem',
              color: ds.brownMid,
              lineHeight: 1.8,
            }}
          >
            착유 당일 신선 발송 · 냉장 택배 (아이스팩 동봉) · 보관 0~5°C
          </p>
        </div>
      </section>

      {/* 제품 목록 */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(60px, 10vh, 80px) 0' }}>
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {products.map((product, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: ds.ivory,
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'relative' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }}
                  />
                  {product.badge && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        padding: '4px 12px',
                        backgroundColor: ds.green,
                        color: '#fff',
                        fontFamily: ds.fontBody,
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        borderRadius: '4px',
                      }}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>
                <div style={{ padding: '20px' }}>
                  <p
                    style={{
                      fontFamily: ds.fontBody,
                      fontSize: '0.75rem',
                      color: ds.brownLight,
                      marginBottom: '8px',
                    }}
                  >
                    {product.category}
                  </p>
                  <h3
                    style={{
                      fontFamily: ds.fontBody,
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: ds.brown,
                      marginBottom: '12px',
                      lineHeight: 1.4,
                    }}
                  >
                    {product.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: ds.fontBody,
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      color: ds.brown,
                    }}
                  >
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 스마트스토어 CTA */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(60px, 10vh, 80px) 0', textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: ds.fontHeading,
            fontSize: '1.25rem',
            fontWeight: 400,
            color: ds.brown,
            margin: '0 0 16px',
          }}
        >
          주문은 네이버 스마트스토어에서
        </h2>
        <p
          style={{
            fontFamily: ds.fontBody,
            fontSize: '0.9375rem',
            color: ds.brownMid,
            margin: '0 0 32px',
            lineHeight: 1.8,
          }}
        >
          정기구독, 새벽배송, 네이버페이 결제 가능
        </p>
        <a
          href="https://smartstore.naver.com/moomooranch"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '14px 36px',
            fontFamily: ds.fontBody,
            fontSize: '0.9375rem',
            fontWeight: 600,
            color: '#fff',
            backgroundColor: '#03C75A',
            textDecoration: 'none',
            borderRadius: '4px',
          }}
        >
          스마트스토어 바로가기
        </a>
      </section>

      {/* 리뷰 */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(60px, 10vh, 80px) 0' }}>
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: '1.25rem',
              fontWeight: 400,
              color: ds.brown,
              textAlign: 'center',
              margin: '0 0 40px',
            }}
          >
            고객님들의 후기
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <img
                key={n}
                src={`/images/유제품_리뷰${n}.png`}
                alt={`고객 리뷰 ${n}`}
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ 링크 */}
      <section style={{ backgroundColor: ds.ivory, padding: '40px 0', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: ds.fontBody,
            fontSize: '0.9375rem',
            color: ds.brownMid,
            marginBottom: '16px',
          }}
        >
          배송, 환불, 보관 관련 궁금한 점이 있으신가요?
        </p>
        <Link
          to="/faq"
          style={{
            fontFamily: ds.fontBody,
            fontSize: '0.875rem',
            color: ds.brown,
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
          }}
        >
          자주 묻는 질문 보기 →
        </Link>
      </section>
    </main>
  );
}
