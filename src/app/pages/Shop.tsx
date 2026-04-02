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
    name: '[진짜우유] A2 저지 목초우유 1L × 2개',
    category: '우유 🥛',
    price: '15,000원',
    rating: '4.97',
    image: '/images/우유_저지소.png',
    badge: '베스트셀러',
    storeUrl: 'https://smartstore.naver.com/moomooranch/products/10950636846',
  },
  {
    name: '[진짜우유] A2 저지 목초우유 500mL',
    category: '우유 🥛',
    price: '6,000원',
    rating: '5.0',
    image: '/images/유제품 소개.png',
    badge: '입문추천',
    storeUrl: 'https://smartstore.naver.com/moomooranch',
  },
  {
    name: 'A2 저지 오가닉 블루베리 요거트 500mL',
    category: '요거트 🫐',
    price: '7,500원',
    rating: '5.0',
    image: '/images/유제품_블루베리요거트.png',
    badge: '베스트리뷰',
    storeUrl: 'https://smartstore.naver.com/moomooranch',
  },
  {
    name: 'A2 저지 목초우유 + 오가닉 요거트 세트',
    category: '세트 🎁',
    price: '15,000원',
    rating: '5.0',
    image: '/images/유제품 소개.png',
    badge: '인기세트',
    storeUrl: 'https://smartstore.naver.com/moomooranch',
  },
];

const categories = [
  { emoji: '🥛', label: '우유' },
  { emoji: '🫐', label: '요거트' },
  { emoji: '🎁', label: '세트' },
];

export function Shop() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src="/images/유제품 소개.png"
          alt="무무목장 신선한 유제품 모음"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.55)',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(122,132,105,0.3) 0%, rgba(0,0,0,0.5) 100%)' }} />

        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px', maxWidth: '800px' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              marginBottom: '24px',
              borderRadius: '20px',
              backgroundColor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              fontFamily: ds.fontBody,
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: '#fff',
            }}
          >
            🛒 무무의 선물
          </span>

          <h1
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 400,
              color: '#fff',
              margin: '0 0 24px',
              lineHeight: 1.2,
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            자연이 키운 건강함,<br />무무목장의 선물
          </h1>

          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: 'clamp(0.9375rem, 1.8vw, 1.125rem)',
              color: 'rgba(255,255,255,0.95)',
              lineHeight: 1.7,
            }}
          >
            저지종 젖소에서 갓 짜낸 신선한 A2 목초우유와<br />
            목장에서 직접 만든 수제 유제품을 만나보세요
          </p>
        </div>
      </section>

      {/* Category Icons */}
      <section style={{ backgroundColor: ds.white, padding: '40px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <div key={cat.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    backgroundColor: ds.ivory,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                  }}
                >
                  <span style={{ fontSize: '2rem' }}>{cat.emoji}</span>
                </div>
                <span style={{ fontFamily: ds.fontBody, fontSize: '0.875rem', fontWeight: 600, color: ds.brown }}>
                  {cat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(60px, 10vh, 80px) 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 60px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {products.map((product) => (
              <a
                key={product.name}
                href={product.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: ds.white,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                  {product.badge && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        backgroundColor: product.badge === '베스트셀러' ? '#5a7a8a' : ds.green,
                        fontFamily: ds.fontBody,
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: '#fff',
                        zIndex: 10,
                      }}
                    >
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontFamily: ds.fontBody, fontSize: '0.8125rem', color: ds.brownLight }}>
                      {product.category}
                    </span>
                    <span style={{ fontFamily: ds.fontBody, fontSize: '0.8125rem', color: '#9a8a5a', fontWeight: 600 }}>
                      ⭐ {product.rating}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: ds.fontBody, fontSize: '1rem', fontWeight: 600, color: ds.brown, margin: '0 0 12px', lineHeight: 1.4 }}>
                    {product.name}
                  </h3>
                  <div>
                    <span style={{ fontFamily: ds.fontBody, fontSize: '0.75rem', color: ds.brownLight }}>
                      가격
                    </span>
                    <p style={{ fontFamily: ds.fontBody, fontSize: '1.25rem', fontWeight: 700, color: ds.brown, margin: 0 }}>
                      {product.price}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p style={{ fontFamily: ds.fontBody, fontSize: '0.9375rem', color: ds.brownLight, marginBottom: '16px' }}>
              무무목장의 더 많은 제품이 궁금하시다면
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
                backgroundColor: ds.green,
                textDecoration: 'none',
                borderRadius: '4px',
              }}
            >
              스마트스토어에서 전체 보기 →
            </a>
          </div>
        </div>
      </section>

      {/* Why MooMoo Section */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 60px)' }}>
          <h2 style={{ fontFamily: ds.fontHeading, fontSize: '1.5rem', fontWeight: 400, color: ds.brown, textAlign: 'center', margin: '0 0 48px' }}>
            왜 무무밀크인가요?
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            {[
              {
                icon: '🐄',
                title: '저지종 젖소',
                desc: '유지방 5%, 홀스타인 대비 1.5배. 진하고 고소한 맛의 비결입니다.',
              },
              {
                icon: '🧬',
                title: 'A2 베타-카제인',
                desc: '소화가 편한 A2 단백질만 함유. 우유 마시면 속이 불편했던 분들께 추천해요.',
              },
              {
                icon: '🌿',
                title: '100% 건초 급여',
                desc: '발효사료(TMR) 없이 건초만. 베타카로틴이 풍부한 황금빛 우유입니다.',
              },
              {
                icon: '🏔️',
                title: '해발 1,000m',
                desc: '삼수령 청정 고원에서 스트레스 없이 자란 건강한 젖소들.',
              },
            ].map((item) => (
              <div key={item.title} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontFamily: ds.fontBody, fontSize: '1rem', fontWeight: 600, color: ds.brown, margin: '0 0 8px' }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: ds.fontBody, fontSize: '0.875rem', color: ds.brownMid, lineHeight: 1.7, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(60px, 10vh, 80px) 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 60px)' }}>
          <h2 style={{ fontFamily: ds.fontHeading, fontSize: '1.25rem', fontWeight: 400, color: ds.brown, textAlign: 'center', margin: '0 0 32px' }}>
            배송 안내
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            {[
              { title: '착유 당일/익일 발송', desc: '주문 확인 후 가장 신선한 상태로 보내드려요' },
              { title: '냉장 택배', desc: '아이스팩과 함께 냉장 상태 유지' },
              { title: '보관 온도', desc: '냉장 0~5°C, 개봉 후 3일 이내 드세요' },
              { title: '정기구독 할인', desc: '스마트스토어에서 정기구독 시 10% 할인' },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: ds.white,
                  borderRadius: '8px',
                  padding: '24px',
                  textAlign: 'center',
                }}
              >
                <h3 style={{ fontFamily: ds.fontBody, fontSize: '0.9375rem', fontWeight: 600, color: ds.brown, margin: '0 0 8px' }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: ds.fontBody, fontSize: '0.8125rem', color: ds.brownMid, lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          position: 'relative',
          padding: 'clamp(100px, 15vh, 140px) 0',
          overflow: 'hidden',
        }}
      >
        <img
          src="/images/무지개초지.png"
          alt="무무목장 수제 치즈와 유제품"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4)' }}
        />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '700px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 60px)', textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
              fontWeight: 400,
              color: '#fff',
              margin: '0 0 24px',
              lineHeight: 1.3,
            }}
          >
            신선한 무무목장 유제품을<br />집에서 만나보세요
          </h2>

          <p style={{ fontFamily: ds.fontBody, fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.9)', marginBottom: '40px' }}>
            네이버 스마트스토어에서 정기구독과 새벽배송으로 편리하게 주문하세요.
          </p>

          <a
            href="https://smartstore.naver.com/moomooranch"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '18px 40px',
              fontFamily: ds.fontBody,
              fontSize: '1rem',
              fontWeight: 600,
              color: ds.brown,
              backgroundColor: '#fff',
              textDecoration: 'none',
              borderRadius: '4px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
            }}
          >
            스마트스토어 바로가기 →
          </a>
        </div>
      </section>
    </main>
  );
}
