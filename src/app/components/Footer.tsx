import { Link } from 'react-router';

const ds = {
  olive: '#7a8469',
  cream: '#faf8f3',
  brown: '#3d3428',
  brownLight: '#8a8279',
  fontHeading: '"Noto Serif KR", serif',
  fontBody: '"Noto Sans KR", sans-serif',
};

export function Footer() {
  return (
    <footer style={{ backgroundColor: ds.cream }}>
      {/* 상단 */}
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '40px clamp(20px, 5vw, 40px)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '24px',
          borderTop: `1px solid ${ds.olive}`,
        }}
      >
        {/* 로고 */}
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              display: 'block',
              fontFamily: ds.fontBody,
              fontSize: '0.625rem',
              color: ds.brownLight,
              letterSpacing: '0.1em',
              marginBottom: '2px',
            }}
          >
            강원 태백
          </span>
          <span
            style={{
              fontFamily: ds.fontHeading,
              fontSize: '1rem',
              fontWeight: 500,
              color: ds.brown,
            }}
          >
            무무목장
          </span>
        </Link>

        {/* 네비게이션 */}
        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 24px' }}>
          {[
            { to: '/journey', label: '순례길' },
            { to: '/blog', label: '담벼락' },
            { to: '/about', label: '목장소개' },
            { to: '/taste', label: '맛의차이' },
            { to: '/shop', label: '상품안내' },
            { to: '/faq', label: '문의' },
            { to: '/visit', label: '오시는길' },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.75rem',
                color: ds.brownLight,
                textDecoration: 'none',
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* 하단 — 올리브 배경 */}
      <div
        style={{
          backgroundColor: ds.olive,
          padding: '16px clamp(20px, 5vw, 40px)',
        }}
      >
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '8px',
            fontFamily: ds.fontBody,
            fontSize: '0.6875rem',
            color: 'rgba(255,255,255,0.65)',
          }}
        >
          <p style={{ margin: 0 }}>
            강원특별자치도 태백시 매봉산길 61 · 전화 033-552-0662
          </p>
          <p style={{ margin: 0 }}>
            © 2026 무무목장
          </p>
        </div>
      </div>
    </footer>
  );
}
