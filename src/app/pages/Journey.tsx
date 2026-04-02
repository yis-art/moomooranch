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

      {/* Intro */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
            display: 'flex',
            gap: '40px',
          }}
        >
          <div style={{ width: '2px', backgroundColor: ds.brownLight, flexShrink: 0 }} />
          <div>
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
              60년 역사를 따라 걷는 무무목장 이야기.<br />
              예수원 공동체의 기도와 노동,<br />
              그 땅에서 태어난 치즈를 만나보세요.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          {[
            { year: '1965', title: '예수원 설립', desc: '대천덕 신부님이 태백 삼수령에 예수원 공동체를 세웁니다.' },
            { year: '1970s', title: '낙농 시작', desc: '기도와 노동의 공동체, 젖소를 키우기 시작합니다.' },
            { year: '2020', title: '저지종 도입', desc: 'A2 우유를 생산하는 저지종 젖소를 들여옵니다.' },
            { year: '2026', title: '치즈 탄생', desc: '898번째 송아지 치즈가 태어납니다.' },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: '40px',
                marginBottom: i < 3 ? '60px' : 0,
              }}
            >
              <div
                style={{
                  fontFamily: ds.fontHeading,
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  color: ds.brownLight,
                  minWidth: '80px',
                }}
              >
                {item.year}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: ds.fontHeading,
                    fontSize: '1.125rem',
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
            인터랙티브 스토리
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
                    margin: 0,
                    lineHeight: 1.7,
                  }}
                >
                  897마리의 흔적을 따라서
                </p>
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

      {/* CTA */}
      <section style={{ backgroundColor: ds.darkBrown, padding: 'clamp(60px, 10vh, 80px) 0', textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: ds.fontHeading,
            fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
            fontWeight: 400,
            color: '#fff',
            margin: '0 0 24px',
          }}
        >
          순례를 마치고
        </h2>
        <Link
          to="/blog"
          style={{
            display: 'inline-block',
            padding: '12px 32px',
            fontFamily: ds.fontBody,
            fontSize: '0.875rem',
            fontWeight: 500,
            color: ds.darkBrown,
            backgroundColor: '#fff',
            textDecoration: 'none',
            borderRadius: '4px',
          }}
        >
          치즈의 담벼락 가기
        </Link>
      </section>
    </main>
  );
}
