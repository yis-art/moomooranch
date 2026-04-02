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
          src="/images/무지개초지 설경.png"
          alt="삼수령 무지개초지 설경"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.5)',
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

      {/* 인트로 */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
            display: 'flex',
            gap: '32px',
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
            60년 역사를 따라 걷는 무무목장 이야기.<br />
            예수원 공동체의 기도와 노동,<br />
            그 땅에서 태어난 치즈를 만나보세요.
          </p>
        </div>
      </section>

      {/* EMPTY BARN 게임 */}
      <section style={{ backgroundColor: ds.darkBrown, padding: 'clamp(60px, 10vh, 80px) 0' }}>
        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '3rem', marginBottom: '24px' }}>🎮</div>
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 400,
              color: '#fff',
              margin: '0 0 16px',
            }}
          >
            EMPTY BARN
          </h2>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.8)',
              fontStyle: 'italic',
              margin: '0 0 32px',
            }}
          >
            "1952년 897마리 흔적, 898번째를 찾아라"
          </p>
          <Link
            to="/journey/empty-barn"
            style={{
              display: 'inline-block',
              padding: '14px 36px',
              fontFamily: ds.fontBody,
              fontSize: '0.9375rem',
              fontWeight: 600,
              color: ds.darkBrown,
              backgroundColor: '#fff',
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            게임 시작하기
          </Link>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.5)',
              marginTop: '16px',
            }}
          >
            플레이 시간: 약 10~15분
          </p>
        </div>
      </section>

      {/* 연대기 */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: '1.25rem',
              fontWeight: 400,
              color: ds.brown,
              margin: '0 0 48px',
              textAlign: 'center',
            }}
          >
            무무목장 연대기
          </h2>

          {[
            { year: '1965', title: '예수원 설립', desc: '대천덕 신부님이 태백 삼수령에 예수원 설립' },
            { year: '1969', title: '킹스베리 초지', desc: '초지조성지구 고시, 김승배 선교사 이름을 따 "킹스베리 초지"로 명명' },
            { year: '1975', title: 'Watershed Grange', desc: '해발 1,000m 매봉산 자락으로 목장 확장' },
            { year: '2020', title: '저지종 도입', desc: '하현제 원장님이 저지소 2마리 기증' },
            { year: '2024', title: '무무목장 브랜드', desc: '박요셉 목장주 합류, 무무목장 브랜드 런칭' },
            { year: '2026.1.6', title: '치즈 탄생', desc: '898번째 송아지 치즈 탄생. 밀크의 딸.' },
          ].map((item, i, arr) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: '24px',
                paddingBottom: i < arr.length - 1 ? '32px' : 0,
                marginBottom: i < arr.length - 1 ? '32px' : 0,
                borderBottom: i < arr.length - 1 ? `1px solid ${ds.ivory}` : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: ds.fontHeading,
                  fontSize: '1rem',
                  color: ds.brownLight,
                }}
              >
                {item.year}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: ds.brown,
                    margin: '0 0 8px',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.9375rem',
                    color: ds.brownMid,
                    margin: 0,
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(40px, 8vh, 60px) 0', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: ds.fontBody,
            fontSize: '0.9375rem',
            color: ds.brownMid,
            marginBottom: '24px',
          }}
        >
          치즈와 무무목장 친구들의 일상이 궁금하신가요?
        </p>
        <Link
          to="/blog"
          style={{
            display: 'inline-block',
            padding: '12px 28px',
            fontFamily: ds.fontBody,
            fontSize: '0.875rem',
            fontWeight: 600,
            color: '#fff',
            backgroundColor: ds.green,
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
