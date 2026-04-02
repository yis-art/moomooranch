import React, { useState } from 'react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: '홈' },
    { path: '/journey', label: '순례길' },
    { path: '/blog', label: '담벼락' },
    { path: '/about', label: '목장소개' },
    { path: '/taste', label: '맛의차이' },
    { path: '/shop', label: '상품안내' },
    { path: '/faq', label: '문의FAQ' },
    { path: '/visit', label: '오시는길' },
  ];

  return (
    <header 
      className="sticky top-0 z-50"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 1.0)',
        borderBottom: '1px solid rgba(141, 110, 99, 0.08)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-2xl">🐄</span>
            <span style={{ 
              fontFamily: 'var(--font-korean)', 
              fontWeight: 800, 
              color: 'var(--text-main)',
              fontSize: '20px',
              letterSpacing: '-0.01em'
            }}>
              무무목장
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="transition-colors hover:opacity-70"
                style={{ 
                  fontFamily: 'var(--font-korean)', 
                  color: 'var(--text-main)',
                  fontSize: '15px',
                  fontWeight: 600
                }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://pf.kakao.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full transition-all hover:scale-105"
              style={{
                backgroundColor: 'var(--sage)',
                fontFamily: 'var(--font-korean)',
                fontWeight: 700,
                color: 'white',
                fontSize: '14px',
                boxShadow: '0 2px 8px rgba(165, 214, 167, 0.3)'
              }}
            >
              💬 문의하기
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            style={{ color: 'var(--text-main)' }}
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in-up">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors"
                style={{ 
                  fontFamily: 'var(--font-korean)', 
                  color: 'var(--text-main)',
                  fontSize: '16px',
                  fontWeight: 600
                }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://pf.kakao.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="block mx-4 mt-4 px-6 py-3 rounded-full text-center"
              style={{
                backgroundColor: 'var(--sage)',
                fontFamily: 'var(--font-korean)',
                fontWeight: 700,
                color: 'white',
                fontSize: '16px'
              }}
            >
              💬 문의하기
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
