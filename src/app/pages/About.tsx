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

export function About() {
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
          src="/images/예수원 소개.png"
          alt="예수원 전경"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.5)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px' }}>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.7)',
              letterSpacing: '0.2em',
              marginBottom: '16px',
            }}
          >
            ABOUT
          </p>
          <h1
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 400,
              color: '#fff',
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            60년 역사의 땅에서<br />
            시작된 이야기
          </h1>
        </div>
      </section>

      {/* 예수원 이야기 */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <div style={{ display: 'flex', gap: '32px', marginBottom: '48px' }}>
            <div style={{ width: '2px', backgroundColor: ds.brownLight, flexShrink: 0 }} />
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
                JESUS ABBEY · 1965
              </p>
              <h2
                style={{
                  fontFamily: ds.fontHeading,
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                  fontWeight: 400,
                  color: ds.brown,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                "읽고, 걷고, 침묵합니다."
              </h2>
            </div>
          </div>

          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '1rem',
              color: ds.brownMid,
              lineHeight: 2.2,
              marginBottom: '32px',
            }}
          >
            1965년, 미국인 성공회 사제 대천덕(Archer Torrey) 신부님이 태백 삼수령에 예수원을 세웠습니다.
            기도와 노동의 공동체로 60년을 이어온 이 땅에서, 무무목장은 새로운 장을 열고 있습니다.
          </p>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '1rem',
              color: ds.brownMid,
              lineHeight: 2.2,
            }}
          >
            헤이퍼 인터내셔널의 "받은 선물을 다음 사람에게 전달하라(Passing on the Gift)" 정신으로
            시작된 예수원의 낙농. 그 유산을 무무목장이 이어갑니다.
          </p>
        </div>
      </section>

      {/* 무무목장 */}
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
              color: ds.green,
              letterSpacing: '0.15em',
              marginBottom: '16px',
            }}
          >
            MOOMOO RANCH
          </p>
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 400,
              color: ds.brown,
              marginBottom: '32px',
            }}
          >
            삼수령 무무목장
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
              marginBottom: '48px',
            }}
          >
            <img
              src="/images/무지개초지.png"
              alt="무지개초지"
              style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '8px' }}
            />
            <img
              src="/images/축사.png"
              alt="축사"
              style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h3
              style={{
                fontFamily: ds.fontBody,
                fontSize: '1rem',
                fontWeight: 600,
                color: ds.brown,
                marginBottom: '12px',
              }}
            >
              해발 1,000m
            </h3>
            <p
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.9375rem',
                color: ds.brownMid,
                lineHeight: 2,
              }}
            >
              태백 삼수령은 남한에서 북한 고지대와 가장 유사한 환경입니다.
              이곳에서 검증된 소규모 낙농 모델은, 언젠가 북한 고지대에 전달될 씨앗입니다.
            </p>
          </div>

          <div>
            <h3
              style={{
                fontFamily: ds.fontBody,
                fontSize: '1rem',
                fontWeight: 600,
                color: ds.brown,
                marginBottom: '12px',
              }}
            >
              함께 이끄는 사람들
            </h3>
            <ul
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.9375rem',
                color: ds.brownMid,
                lineHeight: 2.2,
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}
            >
              <li>• <strong>박요셉</strong> — 목장주. 북한 출신 수의사, 통일 농업의 꿈</li>
              <li>• <strong>히스기야</strong> — 현장 운영. 예수원 공동체 수도자</li>
              <li>• <strong>하현제</strong> — 저지소 기증. 30년 경력 대동물 수의사</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 저지종 */}
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
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 400,
              color: ds.brown,
              marginBottom: '32px',
            }}
          >
            왜 저지종인가?
          </h2>

          <img
            src="/images/무지개초지_저지소04.png"
            alt="저지종 젖소"
            style={{
              width: '100%',
              maxWidth: '500px',
              height: 'auto',
              borderRadius: '8px',
              marginBottom: '32px',
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '24px',
              marginBottom: '32px',
            }}
          >
            <div
              style={{
                backgroundColor: ds.white,
                padding: '24px',
                borderRadius: '8px',
              }}
            >
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.8125rem', color: ds.brownLight, marginBottom: '4px' }}>
                체구
              </p>
              <p style={{ fontFamily: ds.fontHeading, fontSize: '1.5rem', color: ds.brown, marginBottom: '4px' }}>
                400~450kg
              </p>
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.75rem', color: ds.brownLight }}>
                사료 효율이 높은 소형 품종
              </p>
            </div>
            <div
              style={{
                backgroundColor: ds.white,
                padding: '24px',
                borderRadius: '8px',
              }}
            >
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.8125rem', color: ds.brownLight, marginBottom: '4px' }}>
                유지방
              </p>
              <p style={{ fontFamily: ds.fontHeading, fontSize: '1.5rem', color: ds.brown, marginBottom: '4px' }}>
                5%
              </p>
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.75rem', color: ds.brownLight }}>
                홀스타인(3.5%) 대비 1.5배
              </p>
            </div>
            <div
              style={{
                backgroundColor: ds.white,
                padding: '24px',
                borderRadius: '8px',
              }}
            >
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.8125rem', color: ds.brownLight, marginBottom: '4px' }}>
                A2 유전형
              </p>
              <p style={{ fontFamily: ds.fontHeading, fontSize: '1.5rem', color: ds.brown, marginBottom: '4px' }}>
                60~66%
              </p>
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.75rem', color: ds.brownLight }}>
                홀스타인(26~50%) 대비 높음
              </p>
            </div>
            <div
              style={{
                backgroundColor: ds.white,
                padding: '24px',
                borderRadius: '8px',
              }}
            >
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.8125rem', color: ds.brownLight, marginBottom: '4px' }}>
                경제 수명
              </p>
              <p style={{ fontFamily: ds.fontHeading, fontSize: '1.5rem', color: ds.brown, marginBottom: '4px' }}>
                12~15년
              </p>
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.75rem', color: ds.brownLight }}>
                홀스타인 대비 2배 이상
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
              marginBottom: '32px',
            }}
          >
            <div>
              <img
                src="/images/저지소-교감.jpg"
                alt="저지 소와 교감하는 모습"
                style={{
                  width: '100%',
                  aspectRatio: '4/3',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '12px',
                }}
              />
              <p
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '0.8125rem',
                  color: ds.brownLight,
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                저지종은 온순한 성격으로 사람과 쉽게 교감합니다.
                산 가득한 삼수령에서, 사람 곁에 자연스레 다가오는 소들이에요.
              </p>
            </div>
          </div>

          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.9375rem',
              color: ds.brownMid,
              lineHeight: 2,
            }}
          >
            저지종은 영국 저지 섬 원산의 소형 젖소입니다.
            추위에 강하고 사료 효율이 좋아, 북한 고지대처럼 자원이 제한된 환경에 적합합니다.
            무엇보다, A2 베타-카제인만 생산하는 비율이 높아 소화가 편한 우유를 만들어요.
          </p>
        </div>
      </section>

      {/* A2 우유 */}
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
              color: ds.green,
              letterSpacing: '0.15em',
              marginBottom: '16px',
            }}
          >
            A2 MILK
          </p>
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 400,
              color: ds.brown,
              marginBottom: '32px',
            }}
          >
            소화가 편한 A2 우유
          </h2>

          <div
            style={{
              backgroundColor: ds.ivory,
              padding: '32px',
              borderRadius: '8px',
              marginBottom: '32px',
            }}
          >
            <p
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.9375rem',
                color: ds.brownMid,
                lineHeight: 2.2,
                marginBottom: '24px',
              }}
            >
              우유 단백질의 80%는 카제인이에요. 그 중 베타-카제인에 A1과 A2 두 가지 타입이 있습니다.
            </p>

            <div style={{ marginBottom: '16px' }}>
              <strong style={{ fontFamily: ds.fontBody, color: ds.brown }}>A1 베타-카제인 (일반 우유)</strong>
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.875rem', color: ds.brownMid, lineHeight: 1.8, margin: '8px 0 0' }}>
                소화 시 BCM-7 펩타이드 생성 → 장 불편함 유발 가능
              </p>
            </div>

            <div>
              <strong style={{ fontFamily: ds.fontBody, color: ds.green }}>A2 베타-카제인 (무무밀크)</strong>
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.875rem', color: ds.brownMid, lineHeight: 1.8, margin: '8px 0 0' }}>
                BCM-7 미생성 → 소화가 편안함
              </p>
            </div>
          </div>

          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.9375rem',
              color: ds.brownMid,
              lineHeight: 2,
            }}
          >
            한국인 75%가 우유를 마시면 불편함을 느낀다고 해요.
            대부분 A1 카제인 때문입니다. 서울대 분당병원 임상시험(2024년)에서도
            A2 우유가 소화기 증상을 개선한다는 결과가 나왔어요.
          </p>
        </div>
      </section>

      {/* 황금빛 우유 */}
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
              color: ds.green,
              letterSpacing: '0.15em',
              marginBottom: '16px',
            }}
          >
            GOLDEN MILK
          </p>
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 400,
              color: ds.brown,
              marginBottom: '32px',
            }}
          >
            왜 우유가 노란색인가요?
          </h2>

          <img
            src="/images/우유_저지소.png"
            alt="황금빛 무무밀크"
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              borderRadius: '8px',
              marginBottom: '32px',
            }}
          />

          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.9375rem',
              color: ds.brownMid,
              lineHeight: 2.2,
              marginBottom: '24px',
            }}
          >
            착색한 거 아니에요! 자연 그대로의 색입니다.
          </p>

          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.9375rem',
              color: ds.brownMid,
              lineHeight: 2.2,
            }}
          >
            저지종은 체내 베타카로틴을 우유로 잘 전달해요.
            건초를 먹인 우유에는 베타카로틴이 더 풍부하고요.
            저지 + 건초 = 자연스러운 황금빛.
            유럽에서는 이런 우유를 "Golden Milk"라고 불러요.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: ds.darkBrown, padding: 'clamp(60px, 10vh, 80px) 0', textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: ds.fontHeading,
            fontSize: '1.25rem',
            fontWeight: 400,
            color: '#fff',
            margin: '0 0 16px',
          }}
        >
          무무목장의 제품을 만나보세요
        </h2>
        <Link
          to="/shop"
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
          무무곳간 가기
        </Link>
      </section>
    </main>
  );
}
