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

export function Home() {
  return (
    <main>
      {/* Hero - 풀스크린 */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src="/images/무무목장 전경.png"
          alt="해발 1,000m 삼수령 무무목장 전경"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.6)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4))',
          }}
        />
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px' }}>
          <h1
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: 400,
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: '24px',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            자연이 준 가장<br />
            정직한 선물
          </h1>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '40px',
              lineHeight: 1.7,
            }}
          >
            해발 1,000m 삼수령, 저지종 젖소가 만드는<br />
            소화 편한 A2 목초우유
          </p>
          <Link
            to="/shop"
            style={{
              display: 'inline-block',
              padding: '16px 40px',
              fontFamily: ds.fontBody,
              fontSize: '1rem',
              fontWeight: 600,
              color: ds.brown,
              backgroundColor: '#fff',
              textDecoration: 'none',
              borderRadius: '4px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            }}
          >
            제품 보러가기
          </Link>
        </div>
      </section>

      {/* 소개 섹션 */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.75rem',
                color: ds.green,
                letterSpacing: '0.15em',
                marginBottom: '16px',
              }}
            >
              ABOUT
            </p>
            <h2
              style={{
                fontFamily: ds.fontHeading,
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 400,
                color: ds.brown,
                lineHeight: 1.5,
                marginBottom: '24px',
              }}
            >
              60년 역사의 예수원,<br />
              그 땅에서 시작된 목장
            </h2>
            <p
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.9375rem',
                color: ds.brownMid,
                lineHeight: 2,
                marginBottom: '24px',
              }}
            >
              1965년 대천덕 신부님이 세운 예수원 공동체.<br />
              기도와 노동의 삶을 실천하며 60년을 이어온 이 땅에서,<br />
              무무목장은 저지종 젖소를 키우며 새로운 이야기를 씁니다.
            </p>
            <Link
              to="/about"
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.875rem',
                color: ds.brown,
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
              }}
            >
              자세히 보기 →
            </Link>
          </div>
          <div>
            <img
              src="/images/예수원 소개.png"
              alt="예수원 전경"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
          </div>
        </div>
      </section>

      {/* 축사 셀카 - 친근한 목장 분위기 */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(60px, 10vh, 80px) 0' }}>
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          <div>
            <img
              src="/images/축사-셀카.jpg"
              alt="축사 안에서 저지 송아지와 함께 찍은 셀카"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              }}
            />
          </div>
          <div>
            <p
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.75rem',
                color: ds.green,
                letterSpacing: '0.15em',
                marginBottom: '16px',
              }}
            >
              FARM LIFE
            </p>
            <h2
              style={{
                fontFamily: ds.fontHeading,
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 400,
                color: ds.brown,
                lineHeight: 1.5,
                marginBottom: '24px',
              }}
            >
              송아지와 나누는<br />
              따뜻한 하루
            </h2>
            <p
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.9375rem',
                color: ds.brownMid,
                lineHeight: 2,
              }}
            >
              축사 안에서 저지 송아지와 눈을 맞추는 순간,<br />
              이곳의 생명들이 얼마나 사랑받고 자라는지<br />
              느낄 수 있어요.
            </p>
          </div>
        </div>
      </section>

      {/* 저지종 소개 */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.75rem',
              color: ds.green,
              letterSpacing: '0.15em',
              marginBottom: '16px',
            }}
          >
            JERSEY COW
          </p>
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 400,
              color: ds.brown,
              marginBottom: '16px',
            }}
          >
            왜 저지종인가요?
          </h2>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.9375rem',
              color: ds.brownMid,
              lineHeight: 2,
              marginBottom: '48px',
              maxWidth: '600px',
              margin: '0 auto 48px',
            }}
          >
            저지종은 A2 베타-카제인만 생산하는 젖소예요.<br />
            일반 우유(A1)와 달리 소화 시 불편함을 일으키는 BCM-7이 생기지 않아요.<br />
            한국인 75%가 느끼는 우유 불편함, 저지 우유로 해결할 수 있어요.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
            }}
          >
            <img
              src="/images/무지개초지_저지소01.png"
              alt="저지소 1"
              style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: '8px' }}
            />
            <img
              src="/images/무지개초지_저지소02.png"
              alt="저지소 2"
              style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: '8px' }}
            />
            <img
              src="/images/무지개초지_저지소03.png"
              alt="저지소 3"
              style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: '8px' }}
            />
          </div>
        </div>
      </section>

      {/* 제품 미리보기 */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.75rem',
                color: ds.green,
                letterSpacing: '0.15em',
                marginBottom: '16px',
              }}
            >
              PRODUCTS
            </p>
            <h2
              style={{
                fontFamily: ds.fontHeading,
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 400,
                color: ds.brown,
                marginBottom: '16px',
              }}
            >
              무무곳간의 유제품
            </h2>
            <p
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.9375rem',
                color: ds.brownMid,
                lineHeight: 1.8,
              }}
            >
              착유 당일 신선 발송, 냉장 택배로 안전하게
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
              marginBottom: '40px',
            }}
          >
            {/* 우유 */}
            <div
              style={{
                backgroundColor: ds.white,
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              <img
                src="/images/우유_저지소.png"
                alt="A2 저지 목초우유"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }}
              />
              <div style={{ padding: '20px' }}>
                <h3
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: ds.brown,
                    marginBottom: '8px',
                  }}
                >
                  A2 저지 목초우유
                </h3>
                <p
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.8125rem',
                    color: ds.brownLight,
                  }}
                >
                  소화 편한 황금빛 우유
                </p>
              </div>
            </div>

            {/* 요거트 */}
            <div
              style={{
                backgroundColor: ds.white,
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              <img
                src="/images/유제품_블루베리요거트.png"
                alt="블루베리 요거트"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }}
              />
              <div style={{ padding: '20px' }}>
                <h3
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: ds.brown,
                    marginBottom: '8px',
                  }}
                >
                  오가닉 블루베리 요거트
                </h3>
                <p
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.8125rem',
                    color: ds.brownLight,
                  }}
                >
                  국산 유기농 블루베리
                </p>
              </div>
            </div>

            {/* 딸기 요거트 */}
            <div
              style={{
                backgroundColor: ds.white,
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              <img
                src="/images/유제품_딸기요커트.png"
                alt="딸기 요거트"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }}
              />
              <div style={{ padding: '20px' }}>
                <h3
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: ds.brown,
                    marginBottom: '8px',
                  }}
                >
                  오가닉 딸기 요거트
                </h3>
                <p
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.8125rem',
                    color: ds.brownLight,
                  }}
                >
                  국산 유기농 딸기
                </p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              to="/shop"
              style={{
                display: 'inline-block',
                padding: '14px 36px',
                fontFamily: ds.fontBody,
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: '#fff',
                backgroundColor: ds.green,
                textDecoration: 'none',
                borderRadius: '4px',
              }}
            >
              전체 제품 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 성경 인용 */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(60px, 10vh, 80px) 0' }}>
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
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              fontStyle: 'italic',
              color: ds.brownMid,
              lineHeight: 1.8,
              marginBottom: '16px',
            }}
          >
            "여호와는 나의 목자시니<br />
            내게 부족함이 없으리로다"
          </p>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.875rem',
              color: ds.brownLight,
            }}
          >
            — 시편 23:1
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          position: 'relative',
          padding: 'clamp(100px, 15vh, 160px) 0',
        }}
      >
        <img
          src="/images/운해.png"
          alt="삼수령 운해"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.4)',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '700px',
            margin: '0 auto',
            padding: '0 24px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 400,
              color: '#fff',
              marginBottom: '24px',
              lineHeight: 1.4,
            }}
          >
            무무목장의 이야기를<br />
            함께 써나가요
          </h2>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '32px',
              lineHeight: 1.8,
            }}
          >
            치즈레터를 구독하시면 목장 소식과<br />
            구독자 전용 혜택을 보내드려요
          </p>
          <Link
            to="/blog"
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
            치즈레터 구독하기
          </Link>
        </div>
      </section>
    </main>
  );
}
