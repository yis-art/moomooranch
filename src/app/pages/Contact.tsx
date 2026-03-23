import React from 'react';
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';
import { CheeseAvatar } from '../components/CheeseAvatar';

export function Contact() {
  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="mb-4"
            style={{ 
              fontFamily: 'var(--font-korean)', 
              fontWeight: 700,
              color: 'var(--text-main)',
              fontSize: 'clamp(30px, 5vw, 48px)'
            }}
          >
            📍 오시는 길
          </h1>
          <p 
            style={{ 
              fontFamily: 'var(--font-korean)', 
              color: 'var(--text-light)',
              fontSize: '18px',
              lineHeight: '1.8'
            }}
          >
            무무목장에 놀러오세요!
          </p>
        </div>

        {/* Map Placeholder */}
        <div 
          className="rounded-3xl overflow-hidden mb-12"
          style={{ 
            height: '400px',
            backgroundColor: 'rgba(165, 214, 167, 0.2)',
            border: '2px solid rgba(165, 214, 167, 0.3)'
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} style={{ color: 'var(--sage)', margin: '0 auto 16px' }} />
              <p style={{ fontFamily: 'var(--font-korean)', color: 'var(--text-light)', fontSize: '16px' }}>
                지도 영역<br />
                (실제 구현 시 카카오맵 또는 네이버 지도 API 연동)
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Address */}
          <div 
            className="bg-white rounded-3xl p-8"
            style={{ border: '2px solid rgba(165, 214, 167, 0.2)' }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div 
                className="p-3 rounded-full"
                style={{ backgroundColor: 'rgba(165, 214, 167, 0.2)' }}
              >
                <MapPin size={24} style={{ color: 'var(--sage)' }} />
              </div>
              <div>
                <h3 
                  className="mb-2"
                  style={{ 
                    fontFamily: 'var(--font-korean)', 
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    fontSize: '20px'
                  }}
                >
                  주소
                </h3>
                <p 
                  style={{ 
                    fontFamily: 'var(--font-korean)', 
                    color: 'var(--text-light)',
                    fontSize: '16px',
                    lineHeight: '1.8'
                  }}
                >
                  강원도 삼척시 노곡면<br />
                  예수원로 188<br />
                  무무목장 (예수원)
                </p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div 
            className="bg-white rounded-3xl p-8"
            style={{ border: '2px solid rgba(255, 204, 128, 0.2)' }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div 
                className="p-3 rounded-full"
                style={{ backgroundColor: 'rgba(255, 204, 128, 0.2)' }}
              >
                <Clock size={24} style={{ color: 'var(--pale-orange)' }} />
              </div>
              <div>
                <h3 
                  className="mb-2"
                  style={{ 
                    fontFamily: 'var(--font-korean)', 
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    fontSize: '20px'
                  }}
                >
                  운영 시간
                </h3>
                <p 
                  style={{ 
                    fontFamily: 'var(--font-korean)', 
                    color: 'var(--text-light)',
                    fontSize: '16px',
                    lineHeight: '1.8'
                  }}
                >
                  평일: 오전 9시 - 오후 6시<br />
                  주말: 오전 10시 - 오후 5시<br />
                  공휴일: 휴무
                </p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div 
            className="bg-white rounded-3xl p-8"
            style={{ border: '2px solid rgba(144, 202, 249, 0.2)' }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div 
                className="p-3 rounded-full"
                style={{ backgroundColor: 'rgba(144, 202, 249, 0.2)' }}
              >
                <Phone size={24} style={{ color: 'var(--soft-blue)' }} />
              </div>
              <div>
                <h3 
                  className="mb-2"
                  style={{ 
                    fontFamily: 'var(--font-korean)', 
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    fontSize: '20px'
                  }}
                >
                  전화 문의
                </h3>
                <p 
                  style={{ 
                    fontFamily: 'var(--font-korean)', 
                    color: 'var(--text-light)',
                    fontSize: '16px',
                    lineHeight: '1.8'
                  }}
                >
                  033-XXX-XXXX<br />
                  (운영시간 내 상담 가능)
                </p>
              </div>
            </div>
          </div>

          {/* KakaoTalk */}
          <div 
            className="bg-white rounded-3xl p-8"
            style={{ border: '2px solid rgba(255, 213, 79, 0.3)' }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div 
                className="p-3 rounded-full"
                style={{ backgroundColor: 'rgba(255, 213, 79, 0.2)' }}
              >
                <MessageCircle size={24} style={{ color: 'var(--golden)' }} />
              </div>
              <div>
                <h3 
                  className="mb-2"
                  style={{ 
                    fontFamily: 'var(--font-korean)', 
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    fontSize: '20px'
                  }}
                >
                  카카오톡 문의
                </h3>
                <p 
                  className="mb-3"
                  style={{ 
                    fontFamily: 'var(--font-korean)', 
                    color: 'var(--text-light)',
                    fontSize: '16px',
                    lineHeight: '1.8'
                  }}
                >
                  치즈에게 언제든지<br />
                  편하게 물어보세요!
                </p>
                <a
                  href="https://pf.kakao.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 rounded-full transition-all hover:scale-105"
                  style={{
                    backgroundColor: 'var(--kakao-yellow)',
                    fontFamily: 'var(--font-korean)',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    fontSize: '14px'
                  }}
                >
                  💬 카톡 상담하기
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Directions */}
        <div 
          className="rounded-3xl p-8 md:p-12"
          style={{ 
            backgroundColor: 'rgba(165, 214, 167, 0.1)',
            border: '2px solid rgba(165, 214, 167, 0.2)'
          }}
        >
          <div className="flex items-center gap-4 mb-6">
            <CheeseAvatar size="lg" mood="running" />
            <h2 
              style={{ 
                fontFamily: 'var(--font-korean)', 
                fontWeight: 700,
                color: 'var(--text-main)',
                fontSize: 'clamp(24px, 3vw, 30px)'
              }}
            >
              찾아오시는 길
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 
                className="mb-3"
                style={{ 
                  fontFamily: 'var(--font-korean)', 
                  fontWeight: 700,
                  color: 'var(--text-main)',
                  fontSize: '18px'
                }}
              >
                🚗 자가용 이용 시
              </h3>
              <ul 
                className="space-y-2"
                style={{ 
                  fontFamily: 'var(--font-korean)', 
                  color: 'var(--text-light)',
                  fontSize: '16px',
                  lineHeight: '1.8'
                }}
              >
                <li>• 서울 방면: 영동고속도로 → 동해고속도로 → 삼척IC</li>
                <li>• 삼척IC에서 약 15분 소요</li>
                <li>• 내비게이션: "예수원" 또는 "무무목장" 검색</li>
                <li>• 주차장 완비</li>
              </ul>
            </div>

            <div>
              <h3 
                className="mb-3"
                style={{ 
                  fontFamily: 'var(--font-korean)', 
                  fontWeight: 700,
                  color: 'var(--text-main)',
                  fontSize: '18px'
                }}
              >
                🚌 대중교통 이용 시
              </h3>
              <ul 
                className="space-y-2"
                style={{ 
                  fontFamily: 'var(--font-korean)', 
                  color: 'var(--text-light)',
                  fontSize: '16px',
                  lineHeight: '1.8'
                }}
              >
                <li>• 삼척시외버스터미널 하차</li>
                <li>• 노곡면 방면 버스 탑승</li>
                <li>• 예수원 정류장 하차</li>
                <li>• 도보 5분</li>
              </ul>
            </div>
          </div>

          <div 
            className="mt-8 p-6 rounded-2xl"
            style={{ 
              backgroundColor: 'rgba(255, 213, 79, 0.2)',
              border: '1px solid rgba(255, 213, 79, 0.3)'
            }}
          >
            <p 
              style={{ 
                fontFamily: 'var(--font-korean)', 
                color: 'var(--text-main)',
                fontSize: '16px',
                lineHeight: '1.8'
              }}
            >
              💡 <strong>방문 전 꼭 확인하세요!</strong><br />
              목장 체험 프로그램은 사전 예약제로 운영됩니다. 
              카카오톡 또는 전화로 미리 예약해 주시면 치즈가 더 잘 준비할 수 있어요! 😊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
