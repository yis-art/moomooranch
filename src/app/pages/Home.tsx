import { Link } from 'react-router';
import { useState } from 'react';

/**
 * 예수원 + 사고타니 하이브리드 디자인 시스템
 *
 * 핵심 원칙:
 * 1. 극도의 절제 — 명조체의 힘
 * 2. 여백이 곧 디자인
 * 3. 세로선 구분
 * 4. 첫 방문자를 위한 친절한 안내
 */

const ds = {
  // Colors (예수원 기반)
  white: '#ffffff',
  ivory: '#f8f6f2',
  brown: '#2d2518',
  brownMid: '#5c4d3a',
  brownLight: '#8a7a68',
  darkBrown: '#3d3020',
  green: '#7a8469',
  
  // Typography
  fontHeading: '"Noto Serif KR", serif',
  fontBody: '"Noto Sans KR", sans-serif',
};

export function Home() {
  return (
    <main>
      {/* ═══════════════════════════════════════════
          HERO — 풀스크린, 중앙 명조 카피 (예수원 스타일)
          ═══════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          height: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src="/images/무무목장 전경.png"
          alt="삼수령 무무목장"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        
        {/* 카피 — 중앙 정렬 (예수원처럼) */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            padding: '0 24px',
          }}
        >
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.8125rem',
              color: 'rgba(255,255,255,0.7)',
              letterSpacing: '0.15em',
              marginBottom: '20px',
            }}
          >
            강원도 태백 삼수령 · 예수원 공동체
          </p>
          <h1
            style={{
              fontFamily: ds.fontHeading,
              fontWeight: 400,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: 1.5,
              color: '#fff',
              margin: 0,
              letterSpacing: '0.02em',
            }}
          >
            해발 1,000m<br />
            60년 기도의 우유
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INTRO — 세로선 + 한 문장 (예수원 스타일)
          ═══════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: ds.ivory,
          padding: 'clamp(100px, 15vh, 150px) 0',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
            display: 'flex',
            gap: '40px',
          }}
        >
          {/* 세로선 */}
          <div
            style={{
              width: '2px',
              backgroundColor: ds.brownLight,
              flexShrink: 0,
            }}
          />
          
          {/* 텍스트 */}
          <div>
            <p
              style={{
                fontFamily: ds.fontHeading,
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                fontWeight: 400,
                color: ds.brown,
                lineHeight: 2,
                margin: 0,
                wordBreak: 'keep-all',
              }}
            >
              1965년, 대천덕 신부님이 세운 예수원 공동체가<br />
              이 땅을 60년 동안 기도와 노동으로 지켜왔습니다.<br />
              저지 젖소가 풀을 뜯고, 우유가 만들어집니다.
            </p>
            
            <p
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.875rem',
                color: ds.brownMid,
                marginTop: '32px',
                lineHeight: 1.8,
              }}
            >
              A2 베타-카제인 · 자가 목초 90% · 착유 당일 발송
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FIRST VISIT — 처음 오셨나요? (3 카드)
          ═══════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: ds.white,
          padding: 'clamp(80px, 12vh, 120px) 0',
          borderTop: `1px solid rgba(138,122,104,0.15)`,
        }}
      >
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.75rem',
              fontWeight: 600,
              color: ds.brownLight,
              letterSpacing: '0.15em',
              marginBottom: '12px',
            }}
          >
            WELCOME
          </p>
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)',
              fontWeight: 400,
              color: ds.brown,
              margin: '0 0 48px',
              lineHeight: 1.5,
            }}
          >
            처음 오셨나요?
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                emoji: '🥛',
                title: 'A2 저지우유가 뭔가요?',
                desc: '일반 우유와 뭐가 다른지 궁금하시다면',
                to: '/taste',
                cta: '우유 이야기 읽기',
              },
              {
                emoji: '🐄',
                title: '치즈를 만나보세요',
                desc: '2026년 1월 6일 태어난 막내 송아지',
                to: '/blog',
                cta: '목장 소식 보기',
              },
              {
                emoji: '📍',
                title: '목장에 오시려면',
                desc: '서울에서 3시간, 사전예약 필수',
                to: '/visit',
                cta: '오시는 길 확인',
              },
            ].map((card) => (
              <Link
                key={card.to}
                to={card.to}
                style={{
                  display: 'block',
                  padding: '36px 32px',
                  backgroundColor: ds.ivory,
                  border: `1px solid rgba(138,122,104,0.2)`,
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'border-color 0.25s, transform 0.25s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = ds.brownLight;
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(138,122,104,0.2)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '20px' }}>
                  {card.emoji}
                </span>
                <h3
                  style={{
                    fontFamily: ds.fontHeading,
                    fontSize: '1.0625rem',
                    fontWeight: 400,
                    color: ds.brown,
                    margin: '0 0 10px',
                    lineHeight: 1.5,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.875rem',
                    color: ds.brownMid,
                    margin: '0 0 24px',
                    lineHeight: 1.7,
                  }}
                >
                  {card.desc}
                </p>
                <span
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                    color: ds.green,
                    borderBottom: `1px solid ${ds.green}`,
                    paddingBottom: '2px',
                  }}
                >
                  {card.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TWO PATHS — 순례길 / 담벼락 (큰 이미지 2분할)
          ═══════════════════════════════════════════ */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        {/* 순례길 */}
        <Link
          to="/journey"
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-end',
            minHeight: '70vh',
            padding: 'clamp(40px, 6vw, 60px)',
            textDecoration: 'none',
            overflow: 'hidden',
          }}
        >
          <img
            src="/images/운해.png"
            alt="디지털 순례길"
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
              background: 'linear-gradient(to top, rgba(45,37,24,0.7) 0%, transparent 50%)',
            }}
          />
          <div style={{ position: 'relative', zIndex: 10 }}>
            <span
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.6875rem',
                color: 'rgba(255,255,255,0.6)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              Journey
            </span>
            <h2
              style={{
                fontFamily: ds.fontHeading,
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: 400,
                color: '#fff',
                margin: '8px 0 0',
              }}
            >
              디지털 순례길
            </h2>
            <p
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.75)',
                marginTop: '12px',
              }}
            >
              60년 역사를 따라 걷는 무무목장 이야기
            </p>
          </div>
        </Link>

        {/* 담벼락 */}
        <Link
          to="/blog"
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-end',
            minHeight: '70vh',
            padding: 'clamp(40px, 6vw, 60px)',
            textDecoration: 'none',
            overflow: 'hidden',
          }}
        >
          <img
            src="/images/무지개초지_저지소01.png"
            alt="치즈의 담벼락"
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
              background: 'linear-gradient(to top, rgba(45,37,24,0.7) 0%, transparent 50%)',
            }}
          />
          <div style={{ position: 'relative', zIndex: 10 }}>
            <span
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.6875rem',
                color: 'rgba(255,255,255,0.6)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              Blog
            </span>
            <h2
              style={{
                fontFamily: ds.fontHeading,
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: 400,
                color: '#fff',
                margin: '8px 0 0',
              }}
            >
              치즈의 담벼락
            </h2>
            <p
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.75)',
                marginTop: '12px',
              }}
            >
              목장의 일상과 치즈가 전하는 소식
            </p>
          </div>
        </Link>
      </section>

      {/* ═══════════════════════════════════════════
          FOR WHOM — 이런 분께 추천해요
          ═══════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: ds.ivory,
          padding: 'clamp(80px, 12vh, 120px) 0',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '40px',
            }}
          >
            {/* 세로선 */}
            <div
              style={{
                width: '2px',
                backgroundColor: ds.brownLight,
                flexShrink: 0,
              }}
            />
            <div>
              <h2
                style={{
                  fontFamily: ds.fontHeading,
                  fontSize: 'clamp(1.25rem, 2vw, 1.625rem)',
                  fontWeight: 400,
                  color: ds.brown,
                  margin: '0 0 36px',
                  lineHeight: 1.5,
                }}
              >
                이런 분께 추천해요
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  '우유를 마시면 배가 불편했던 분',
                  '아이에게 건강한 우유를 주고 싶은 부모님',
                  '첨가물 없는 자연식품을 찾는 분',
                  '특별한 선물을 찾는 분',
                  '예수원의 정신에 공감하시는 분',
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '14px',
                    }}
                  >
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        backgroundColor: ds.green,
                        flexShrink: 0,
                        marginTop: '2px',
                        display: 'inline-block',
                      }}
                    />
                    <p
                      style={{
                        fontFamily: ds.fontBody,
                        fontSize: '1rem',
                        color: ds.brownMid,
                        margin: 0,
                        lineHeight: 1.7,
                        wordBreak: 'keep-all',
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                to="/taste"
                style={{
                  display: 'inline-block',
                  marginTop: '40px',
                  fontFamily: ds.fontBody,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: ds.green,
                  textDecoration: 'none',
                  borderBottom: `1px solid ${ds.green}`,
                  paddingBottom: '2px',
                }}
              >
                A2 우유에 대해 더 알아보기 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY — 무무목장이 특별한 이유
          ═══════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: ds.white,
          padding: 'clamp(80px, 12vh, 120px) 0',
        }}
      >
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.75rem',
              fontWeight: 600,
              color: ds.brownLight,
              letterSpacing: '0.15em',
              marginBottom: '12px',
            }}
          >
            WHY MOOMOO
          </p>
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)',
              fontWeight: 400,
              color: ds.brown,
              margin: '0 0 52px',
              lineHeight: 1.5,
            }}
          >
            무무목장이 특별한 이유
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '0',
              borderTop: `1px solid rgba(138,122,104,0.2)`,
            }}
          >
            {[
              {
                label: '해발 1,000m',
                title: '삼수령 청정 고원에서 방목',
                desc: '강원도 태백 삼수령. 미세먼지 없는 하늘 아래 소들이 자유롭게 풀을 뜯습니다.',
              },
              {
                label: 'A2 저지종',
                title: '소화 편한 프리미엄 우유',
                desc: '일반 홀스타인과 달리 A2 베타-카제인만 함유. 우유 소화가 불편했던 분도 편하게 드실 수 있습니다.',
              },
              {
                label: '자가목초 90%',
                title: '수입 건초 의존 최소화',
                desc: '목장 자체 목초지에서 키운 풀을 먹입니다. 먹는 것이 달라지면 우유 맛도 달라집니다.',
              },
              {
                label: '착유 당일 발송',
                title: '신선함 그대로',
                desc: '착유 당일 또는 익일 발송. 냉장 새벽배송으로 가장 신선한 상태로 도착합니다.',
              },
              {
                label: '60년 예수원 공동체',
                title: '기도와 노동의 땅',
                desc: '1965년부터 이 땅을 지켜온 예수원 공동체. 단순한 농장이 아니라 삶의 방식입니다.',
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  padding: '36px 0 36px',
                  borderBottom: `1px solid rgba(138,122,104,0.2)`,
                  display: 'grid',
                  gridTemplateColumns: '140px 1fr',
                  gap: '24px',
                  alignItems: 'start',
                }}
              >
                <span
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: ds.green,
                    paddingTop: '4px',
                  }}
                >
                  {item.label}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: ds.fontHeading,
                      fontSize: '1rem',
                      fontWeight: 400,
                      color: ds.brown,
                      margin: '0 0 8px',
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontFamily: ds.fontBody,
                      fontSize: '0.875rem',
                      color: ds.brownMid,
                      margin: 0,
                      lineHeight: 1.7,
                      wordBreak: 'keep-all',
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link
              to="/shop"
              style={{
                display: 'inline-block',
                padding: '14px 40px',
                fontFamily: ds.fontBody,
                fontSize: '0.9375rem',
                fontWeight: 500,
                color: '#fff',
                backgroundColor: ds.green,
                textDecoration: 'none',
                borderRadius: '4px',
              }}
            >
              제품 보기
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ TOP 3 — 자주 묻는 질문
          ═══════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: ds.ivory,
          padding: 'clamp(80px, 12vh, 120px) 0',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.75rem',
              fontWeight: 600,
              color: ds.brownLight,
              letterSpacing: '0.15em',
              marginBottom: '12px',
            }}
          >
            FAQ
          </p>
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)',
              fontWeight: 400,
              color: ds.brown,
              margin: '0 0 48px',
              lineHeight: 1.5,
            }}
          >
            자주 묻는 질문 TOP 3
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              {
                q: '배송은 얼마나 걸리나요?',
                a: '착유 당일 또는 익일 발송합니다. 냉장 새벽배송으로 주문 후 1~2일 이내 도착합니다.',
              },
              {
                q: '유통기한은 얼마나 되나요?',
                a: '제조일로부터 10일입니다. 무첨가 자연 우유이므로 빠르게 드시는 것을 권장합니다.',
              },
              {
                q: '목장 방문이 가능한가요?',
                a: '네, 방문 가능합니다. 다만 목장 특성상 사전예약이 필수입니다. 카카오채널 "무무목장"으로 문의해주세요.',
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '32px 0',
                  borderTop: `1px solid rgba(138,122,104,0.2)`,
                }}
              >
                <p
                  style={{
                    fontFamily: ds.fontHeading,
                    fontSize: '1rem',
                    fontWeight: 400,
                    color: ds.brown,
                    margin: '0 0 12px',
                    lineHeight: 1.6,
                  }}
                >
                  Q. {item.q}
                </p>
                <p
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.9375rem',
                    color: ds.brownMid,
                    margin: 0,
                    lineHeight: 1.8,
                    wordBreak: 'keep-all',
                    paddingLeft: '16px',
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
            <div style={{ borderTop: `1px solid rgba(138,122,104,0.2)`, paddingTop: '32px' }}>
              <Link
                to="/faq"
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: ds.green,
                  textDecoration: 'none',
                  borderBottom: `1px solid ${ds.green}`,
                  paddingBottom: '2px',
                }}
              >
                더 많은 질문 보기 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          NEWSLETTER — 치즈레터 구독
          ═══════════════════════════════════════════ */}
      <NewsletterSection ds={ds} />

      {/* ═══════════════════════════════════════════
          CONTACT — 다크 브라운 (예수원 스타일)
          ═══════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: ds.darkBrown,
          padding: 'clamp(60px, 10vh, 100px) 0',
        }}
      >
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
          }}
        >
          {/* 문의 */}
          <div>
            <h3
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '0.1em',
                margin: '0 0 16px',
              }}
            >
              문의
            </h3>
            <p
              style={{
                fontFamily: ds.fontBody,
                fontSize: '1.125rem',
                fontWeight: 600,
                color: '#fff',
                margin: 0,
              }}
            >
              033-552-0662
            </p>
            <p
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.8125rem',
                color: 'rgba(255,255,255,0.6)',
                marginTop: '8px',
              }}
            >
              카카오채널 "무무목장"
            </p>
          </div>

          {/* 주소 */}
          <div>
            <h3
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '0.1em',
                margin: '0 0 16px',
              }}
            >
              주소
            </h3>
            <p
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.7)',
                margin: 0,
                lineHeight: 1.7,
              }}
            >
              강원특별자치도 태백시<br />
              매봉산길 61
            </p>
          </div>

          {/* 링크 */}
          <div>
            <h3
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '0.1em',
                margin: '0 0 16px',
              }}
            >
              바로가기
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { to: '/about', label: '목장소개' },
                { to: '/faq', label: '자주 묻는 질문' },
                { to: '/visit', label: '오시는 길' },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ─────────────────────────────────────────────
   치즈레터 구독 섹션 (별도 컴포넌트 — useState 필요)
   ───────────────────────────────────────────── */
type DsType = {
  white: string;
  ivory: string;
  brown: string;
  brownMid: string;
  brownLight: string;
  darkBrown: string;
  green: string;
  fontHeading: string;
  fontBody: string;
};

function NewsletterSection({ ds }: { ds: DsType }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      style={{
        backgroundColor: ds.brown,
        padding: 'clamp(80px, 12vh, 120px) 0',
      }}
    >
      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          padding: '0 clamp(24px, 6vw, 60px)',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: ds.fontBody,
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.45)',
            letterSpacing: '0.15em',
            marginBottom: '16px',
          }}
        >
          NEWSLETTER
        </p>
        <h2
          style={{
            fontFamily: ds.fontHeading,
            fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)',
            fontWeight: 400,
            color: '#fff',
            margin: '0 0 16px',
            lineHeight: 1.5,
          }}
        >
          치즈레터 구독하기
        </h2>
        <p
          style={{
            fontFamily: ds.fontBody,
            fontSize: '0.9375rem',
            color: 'rgba(255,255,255,0.65)',
            margin: '0 0 40px',
            lineHeight: 1.8,
            wordBreak: 'keep-all',
          }}
        >
          치즈와 목장의 소식을 가장 먼저 받아보세요
        </p>

        {/* 혜택 목록 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px 24px',
            marginBottom: '40px',
            textAlign: 'left',
          }}
        >
          {[
            '치즈의 일상 소식',
            '신제품 출시 알림',
            '구독자 전용 할인',
            '목장 방문 우선 예약',
          ].map((benefit) => (
            <div
              key={benefit}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <span
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: ds.brownLight,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                {benefit}
              </span>
            </div>
          ))}
        </div>

        {submitted ? (
          <div
            style={{
              padding: '20px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <p
              style={{
                fontFamily: ds.fontHeading,
                fontSize: '1rem',
                color: '#fff',
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              구독해 주셔서 감사합니다 🙏
            </p>
            <p
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.6)',
                marginTop: '8px',
              }}
            >
              목장 소식을 곧 보내드릴게요.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              gap: '0',
              maxWidth: '480px',
              margin: '0 auto',
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일 주소를 입력해 주세요"
              required
              style={{
                flex: 1,
                padding: '14px 20px',
                fontFamily: ds.fontBody,
                fontSize: '0.9375rem',
                color: ds.brown,
                backgroundColor: '#fff',
                border: 'none',
                borderRadius: '4px 0 0 4px',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '14px 24px',
                fontFamily: ds.fontBody,
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#fff',
                backgroundColor: ds.green,
                border: 'none',
                borderRadius: '0 4px 4px 0',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              구독하기
            </button>
          </form>
        )}

        <p
          style={{
            fontFamily: ds.fontBody,
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.35)',
            marginTop: '16px',
          }}
        >
          언제든지 수신 거부할 수 있습니다.
        </p>
      </div>
    </section>
  );
}
