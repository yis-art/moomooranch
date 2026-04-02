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

export function Journey() {
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
            JOURNEY
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
            디지털 순례길
          </h1>
        </div>
      </section>

      {/* 디지털 순례길이란? */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(80px, 12vh, 120px) 0' }}>
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
              color: ds.brownLight,
              letterSpacing: '0.2em',
              margin: '0 0 12px',
            }}
          >
            WHAT IS THIS?
          </p>
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 400,
              color: ds.brown,
              margin: '0 0 40px',
            }}
          >
            디지털 순례길이란?
          </h2>

          <div
            style={{
              display: 'flex',
              gap: '40px',
              marginBottom: '48px',
            }}
          >
            <div style={{ width: '2px', backgroundColor: ds.brownLight, flexShrink: 0 }} />
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
              집에서도 무무목장의 60년 역사를 체험할 수 있는<br />
              인터랙티브 스토리입니다.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
            }}
          >
            {[
              { icon: '🏡', text: '실제 목장에 오시기 전, 미리 이야기를 만나보세요' },
              { icon: '📖', text: '다녀가신 후에도 기억을 되새기며 다시 걸어보세요' },
              { icon: '⏱️', text: '약 5~10분이면 하나의 이야기를 완주할 수 있어요' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: ds.white,
                  border: '1px solid #e8e2d8',
                  borderRadius: '4px',
                  padding: '24px 20px',
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                }}
              >
                <span style={{ fontSize: '1.25rem', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                <p
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.875rem',
                    color: ds.brownMid,
                    margin: 0,
                    lineHeight: 1.8,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 어떻게 체험하나요? */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(80px, 12vh, 120px) 0' }}>
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
              color: ds.brownLight,
              letterSpacing: '0.2em',
              margin: '0 0 12px',
            }}
          >
            HOW TO PLAY
          </p>
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 400,
              color: ds.brown,
              margin: '0 0 48px',
            }}
          >
            어떻게 체험하나요?
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              {
                step: '01',
                title: '이야기를 선택하세요',
                desc: '아래 게임 목록에서 마음에 드는 이야기를 고르세요. 지금은 EMPTY BARN 하나를 체험할 수 있어요.',
              },
              {
                step: '02',
                title: '화면의 안내를 따라가세요',
                desc: '선택지를 고르고, 사진을 보고, 이야기를 읽어가며 자연스럽게 순례길을 걸어보세요.',
              },
              {
                step: '03',
                title: '완주 후 치즈레터를 구독하세요',
                desc: '새 이야기가 추가되면 가장 먼저 알려드려요. 구독은 언제든지 취소할 수 있어요.',
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: '32px',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    fontFamily: ds.fontHeading,
                    fontSize: '1.75rem',
                    fontWeight: 400,
                    color: '#e8dfd0',
                    minWidth: '48px',
                    lineHeight: 1,
                    paddingTop: '2px',
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: ds.fontHeading,
                      fontSize: '1.0625rem',
                      fontWeight: 400,
                      color: ds.brown,
                      margin: '0 0 8px',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: ds.fontBody,
                      fontSize: '0.875rem',
                      color: ds.brownMid,
                      margin: 0,
                      lineHeight: 1.8,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Stories */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(80px, 12vh, 120px) 0' }}>
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
              color: ds.brownLight,
              letterSpacing: '0.2em',
              margin: '0 0 12px',
            }}
          >
            INTERACTIVE STORY
          </p>
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 400,
              color: ds.brown,
              margin: '0 0 48px',
            }}
          >
            지금 걸을 수 있는 길
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
            }}
          >
            {/* EMPTY BARN — 출시 */}
            <Link
              to="/journey/empty-barn"
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  backgroundColor: ds.brown,
                  padding: '32px 28px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  height: '100%',
                  boxSizing: 'border-box',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '24px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: ds.fontBody,
                      fontSize: '0.625rem',
                      fontWeight: 500,
                      color: ds.brown,
                      backgroundColor: '#e8dfd0',
                      padding: '3px 8px',
                      borderRadius: '2px',
                      letterSpacing: '0.1em',
                    }}
                  >
                    출시
                  </span>
                  <span
                    style={{
                      fontFamily: ds.fontBody,
                      fontSize: '0.75rem',
                      color: 'rgba(255,255,255,0.4)',
                    }}
                  >
                    5분
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: ds.fontHeading,
                    fontSize: '1.25rem',
                    fontWeight: 400,
                    color: '#fff',
                    margin: '0 0 8px',
                    letterSpacing: '0.05em',
                  }}
                >
                  EMPTY BARN
                </h3>
                <p
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.8125rem',
                    color: 'rgba(255,255,255,0.6)',
                    margin: '0 0 12px',
                    lineHeight: 1.7,
                  }}
                >
                  897마리의 흔적 — 헤이퍼 프로젝트의 역사를 따라가는 5분 체험
                </p>
                <span
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.35)',
                    letterSpacing: '0.1em',
                  }}
                >
                  지금 시작하기 →
                </span>
              </div>
            </Link>

            {/* 대천덕 신부의 길 — 준비중 */}
            <div
              style={{
                backgroundColor: ds.white,
                border: `1px solid #e8e2d8`,
                padding: '32px 28px',
                borderRadius: '4px',
                opacity: 0.6,
                cursor: 'default',
                height: '100%',
                boxSizing: 'border-box',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '24px',
                }}
              >
                <span
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.625rem',
                    fontWeight: 500,
                    color: ds.brownLight,
                    backgroundColor: '#f0ece4',
                    padding: '3px 8px',
                    borderRadius: '2px',
                    letterSpacing: '0.1em',
                  }}
                >
                  준비중
                </span>
              </div>
              <h3
                style={{
                  fontFamily: ds.fontHeading,
                  fontSize: '1.125rem',
                  fontWeight: 400,
                  color: ds.brown,
                  margin: '0 0 8px',
                }}
              >
                대천덕 신부의 길
              </h3>
              <p
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '0.8125rem',
                  color: ds.brownMid,
                  margin: 0,
                  lineHeight: 1.7,
                }}
              >
                1965년, 한 미국인 신부가...
              </p>
            </div>

            {/* 치즈의 첫 걸음 — 준비중 */}
            <div
              style={{
                backgroundColor: ds.white,
                border: `1px solid #e8e2d8`,
                padding: '32px 28px',
                borderRadius: '4px',
                opacity: 0.6,
                cursor: 'default',
                height: '100%',
                boxSizing: 'border-box',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '24px',
                }}
              >
                <span
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.625rem',
                    fontWeight: 500,
                    color: ds.brownLight,
                    backgroundColor: '#f0ece4',
                    padding: '3px 8px',
                    borderRadius: '2px',
                    letterSpacing: '0.1em',
                  }}
                >
                  준비중
                </span>
              </div>
              <h3
                style={{
                  fontFamily: ds.fontHeading,
                  fontSize: '1.125rem',
                  fontWeight: 400,
                  color: ds.brown,
                  margin: '0 0 8px',
                }}
              >
                치즈의 첫 걸음
              </h3>
              <p
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '0.8125rem',
                  color: ds.brownMid,
                  margin: 0,
                  lineHeight: 1.7,
                }}
              >
                2026년 1월 6일, 치즈가 태어났다
              </p>
            </div>

            {/* 네번째 강 — 준비중 */}
            <div
              style={{
                backgroundColor: ds.white,
                border: `1px solid #e8e2d8`,
                padding: '32px 28px',
                borderRadius: '4px',
                opacity: 0.6,
                cursor: 'default',
                height: '100%',
                boxSizing: 'border-box',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '24px',
                }}
              >
                <span
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.625rem',
                    fontWeight: 500,
                    color: ds.brownLight,
                    backgroundColor: '#f0ece4',
                    padding: '3px 8px',
                    borderRadius: '2px',
                    letterSpacing: '0.1em',
                  }}
                >
                  준비중
                </span>
              </div>
              <h3
                style={{
                  fontFamily: ds.fontHeading,
                  fontSize: '1.125rem',
                  fontWeight: 400,
                  color: ds.brown,
                  margin: '0 0 8px',
                }}
              >
                네번째 강
              </h3>
              <p
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '0.8125rem',
                  color: ds.brownMid,
                  margin: 0,
                  lineHeight: 1.7,
                }}
              >
                삼수령의 세 강, 그리고 북쪽으로
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 완주 후에는 */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(80px, 12vh, 120px) 0' }}>
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
              color: ds.brownLight,
              letterSpacing: '0.2em',
              margin: '0 0 12px',
            }}
          >
            AFTER YOUR JOURNEY
          </p>
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 400,
              color: ds.brown,
              margin: '0 0 48px',
            }}
          >
            완주 후에는
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
            }}
          >
            {[
              {
                label: 'VISIT',
                title: '목장에 직접 방문해보세요',
                desc: '이야기 속 그 공간에서 실제로 숨을 쉬어보세요.',
                href: '/visit',
                linkText: '방문 안내 →',
              },
              {
                label: 'BLOG',
                title: '치즈의 일상 구경하기',
                desc: '898번째 송아지 치즈의 하루를 담은 이야기들.',
                href: '/blog',
                linkText: '담벼락 가기 →',
              },
              {
                label: 'SHOP',
                title: '건강한 우유 맛보기',
                desc: 'A2 저지 건초우유, 집에서도 만날 수 있어요.',
                href: '/shop',
                linkText: '구매하러 가기 →',
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: ds.ivory,
                  borderRadius: '4px',
                  padding: '28px 24px',
                }}
              >
                <p
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.625rem',
                    color: ds.brownLight,
                    letterSpacing: '0.2em',
                    margin: '0 0 12px',
                  }}
                >
                  {item.label}
                </p>
                <h3
                  style={{
                    fontFamily: ds.fontHeading,
                    fontSize: '1rem',
                    fontWeight: 400,
                    color: ds.brown,
                    margin: '0 0 8px',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.8125rem',
                    color: ds.brownMid,
                    margin: '0 0 20px',
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
                <Link
                  to={item.href}
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.8125rem',
                    color: ds.brown,
                    textDecoration: 'none',
                    borderBottom: `1px solid ${ds.brownLight}`,
                    paddingBottom: '1px',
                  }}
                >
                  {item.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 피드백 */}
      <section style={{ backgroundColor: ds.darkBrown, padding: 'clamp(60px, 10vh, 80px) 0' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              fontWeight: 400,
              color: '#fff',
              margin: '0 0 12px',
            }}
          >
            이 순례길이 마음에 드셨나요?
          </h2>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.875rem',
              color: 'rgba(255,255,255,0.5)',
              margin: '0 0 32px',
              lineHeight: 1.8,
            }}
          >
            어떤 이야기가 좋았는지, 어떤 이야기를 더 보고 싶은지<br />
            작은 의견 하나하나가 다음 순례길을 만드는 데 큰 힘이 됩니다.
          </p>
          <a
            href="https://pf.kakao.com/_moomoo"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              fontFamily: ds.fontBody,
              fontSize: '0.875rem',
              fontWeight: 500,
              color: ds.darkBrown,
              backgroundColor: '#FEE500',
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            카카오채널로 의견 남기기
          </a>
        </div>
      </section>
    </main>
  );
}
