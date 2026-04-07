import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';

const ds = {
  white: '#ffffff',
  brown: '#2d2518',
  brownLight: '#8a7a68',
  green: '#7a8469',
  fontHeading: '"Noto Serif KR", serif',
  fontBody: '"Noto Sans KR", sans-serif',
};

const navItems = [
  { path: '/about', label: '목장소개' },
  { path: '/journey', label: '디지털순례길' },
  { path: '/taste', label: '저지젖소' },
  { path: '/blog', label: '치즈의담벼락' },
  { path: '/shop', label: '상품안내' },
  { path: '/visit', label: '문의/오시는길' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showSolid = !isHome || scrolled || isMenuOpen;

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: showSolid ? ds.white : 'transparent',
        borderBottom: showSolid ? '1px solid rgba(0,0,0,0.08)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px clamp(20px, 5vw, 40px)',
        }}
      >
        {/* 로고 */}
        <Link
          to="/"
          style={{
            fontFamily: ds.fontHeading,
            fontSize: '1.125rem',
            fontWeight: 500,
            color: showSolid ? ds.brown : '#fff',
            textDecoration: 'none',
            letterSpacing: '0.02em',
            transition: 'color 0.3s',
          }}
        >
          무무목장
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav
          className="hidden md:flex"
          style={{
            alignItems: 'center',
            gap: '32px',
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              aria-current={location.pathname.startsWith(item.path) ? 'page' : undefined}
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.9375rem',
                fontWeight: 500,
                color: location.pathname.startsWith(item.path)
                  ? (showSolid ? ds.brown : '#fff')
                  : (showSolid ? ds.brownLight : 'rgba(255,255,255,0.8)'),
                textDecoration: 'none',
                transition: 'color 0.3s',
                borderBottom: location.pathname.startsWith(item.path)
                  ? `2px solid ${showSolid ? ds.green : '#fff'}`
                  : '2px solid transparent',
                paddingBottom: '4px',
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: showSolid ? ds.brown : '#fff',
            padding: '8px',
          }}
          aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div style={{ backgroundColor: ds.white, borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: 'block',
                padding: '16px 24px',
                fontFamily: ds.fontBody,
                fontSize: '1rem',
                fontWeight: 500,
                color: ds.brown,
                textDecoration: 'none',
                borderBottom: '1px solid rgba(0,0,0,0.05)',
                backgroundColor: location.pathname.startsWith(item.path) ? 'rgba(122,132,105,0.08)' : 'transparent',
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
