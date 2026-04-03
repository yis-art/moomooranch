import { Outlet, useLocation } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div style={{ fontFamily: '"Noto Sans KR", sans-serif' }}>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* 홈에서는 Footer 숨김 (Contact 섹션이 Footer 역할) */}
      {!isHome && <Footer />}
    </div>
  );
}
