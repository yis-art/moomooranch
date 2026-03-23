import React from 'react';
import { Link } from 'react-router';
import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a1a1a' }}>
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🐄</span>
              <h3 style={{ 
                fontFamily: 'var(--font-korean)', 
                fontWeight: 800, 
                color: 'white',
                fontSize: '20px'
              }}>
                무무목장
              </h3>
            </div>
            <p style={{ 
              fontFamily: 'var(--font-korean)', 
              color: 'rgba(255,255,255,0.6)', 
              fontSize: '14px', 
              lineHeight: '1.8',
              marginBottom: '24px'
            }}>
              강원도 삼척에서<br />
              50년 역사의 자연과 함께<br />
              건강한 유제품을 만듭니다
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-white/20"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                <Instagram size={18} style={{ color: 'white' }} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-white/20"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                <Facebook size={18} style={{ color: 'white' }} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-white/20"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                <Youtube size={18} style={{ color: 'white' }} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-white/20"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                <Twitter size={18} style={{ color: 'white' }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ 
              fontFamily: 'var(--font-korean)', 
              fontWeight: 700, 
              color: 'white', 
              fontSize: '16px',
              marginBottom: '16px'
            }}>
              바로가기
            </h4>
            <div className="space-y-3">
              {[
                { label: '홈', path: '/' },
                { label: '치즈의담벼락', path: '/blog' },
                { label: '목장소개', path: '/about' },
                { label: '상품안내', path: '/products' },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block transition-colors hover:text-white"
                  style={{ 
                    fontFamily: 'var(--font-korean)', 
                    color: 'rgba(255,255,255,0.6)', 
                    fontSize: '14px' 
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Shop Info */}
          <div>
            <h4 style={{ 
              fontFamily: 'var(--font-korean)', 
              fontWeight: 700, 
              color: 'white', 
              fontSize: '16px',
              marginBottom: '16px'
            }}>
              쇼핑 안내
            </h4>
            <div className="space-y-3">
              {[
                '네이버 스마트스토어',
                '정기구독',
                '배송 안내',
                '교환/반품',
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block transition-colors hover:text-white"
                  style={{ 
                    fontFamily: 'var(--font-korean)', 
                    color: 'rgba(255,255,255,0.6)', 
                    fontSize: '14px' 
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ 
              fontFamily: 'var(--font-korean)', 
              fontWeight: 700, 
              color: 'white', 
              fontSize: '16px',
              marginBottom: '16px'
            }}>
              연락처
            </h4>
            <div style={{ 
              fontFamily: 'var(--font-korean)', 
              color: 'rgba(255,255,255,0.6)', 
              fontSize: '14px', 
              lineHeight: '1.8' 
            }}>
              <p className="mb-2">강원도 태백시 매봉산길 61</p>
              <p className="mb-2">오전 9시 - 오후 6시</p>
              <a 
                href="https://pf.kakao.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 rounded-full transition-all hover:scale-105"
                style={{
                  backgroundColor: 'var(--kakao-yellow)',
                  color: 'var(--text-main)',
                  fontWeight: 700,
                  fontSize: '13px'
                }}
              >
                💬 카카오톡 문의
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '24px',
          marginTop: '24px'
        }}>
          {/* Business Info */}
          <div className="mb-6" style={{ 
            fontFamily: 'var(--font-korean)', 
            color: 'rgba(255,255,255,0.4)', 
            fontSize: '12px',
            lineHeight: '1.8'
          }}>
            <p>사업자등록번호: 123-45-67890 | 대표: 무무목장 | 통신판매업신고: 제2026-강원삼척-00001호</p>
            <p className="mt-1">이메일: info@moomooranch.kr | 전화: 033-553-3395</p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p style={{ 
              fontFamily: 'var(--font-korean)', 
              color: 'rgba(255,255,255,0.4)', 
              fontSize: '13px' 
            }}>
              © 2026 MooMoo Ranch. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['이용약관', '개인정보처리방침'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="transition-colors hover:text-white"
                  style={{ 
                    fontFamily: 'var(--font-korean)', 
                    color: 'rgba(255,255,255,0.4)', 
                    fontSize: '13px',
                    fontWeight: item === '개인정보처리방침' ? 700 : 400
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
