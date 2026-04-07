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

export function Taste() {
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
          src="/images/milk-jersey.png"
          alt="황금빛 무무밀크"
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
            TASTE
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
            맛의 차이
          </h1>
        </div>
      </section>

      {/* 트리플 프리미엄 인트로 */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '750px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 400,
              color: ds.brown,
              marginBottom: '24px',
            }}
          >
            트리플 프리미엄
          </h2>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '1rem',
              color: ds.brownMid,
              lineHeight: 2,
            }}
          >
            <strong>A2 단백질</strong> + <strong>저지(Jersey) 품종</strong> + <strong>건초(Hay) 급여</strong><br />
            세 가지가 만나 무무밀크의 차이를 만듭니다.
          </p>
        </div>
      </section>

      {/* A2 단백질 */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '750px',
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
            01 — A2 PROTEIN
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

            <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: ds.white, borderRadius: '8px' }}>
              <strong style={{ fontFamily: ds.fontBody, color: ds.brownMid }}>A1 베타-카제인 (일반 우유)</strong>
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.875rem', color: ds.brownMid, lineHeight: 1.8, margin: '8px 0 0' }}>
                소화 시 BCM-7 펩타이드 생성 → 장 불편함 유발 가능
              </p>
            </div>

            <div style={{ padding: '16px', backgroundColor: ds.white, borderRadius: '8px', border: `2px solid ${ds.green}` }}>
              <strong style={{ fontFamily: ds.fontBody, color: ds.green }}>A2 베타-카제인 (무무밀크)</strong>
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.875rem', color: ds.brownMid, lineHeight: 1.8, margin: '8px 0 0' }}>
                프롤린 구조로 BCM-7 생성 차단 → 소화가 편안함
              </p>
            </div>
          </div>

          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.9375rem',
              color: ds.brownMid,
              lineHeight: 2,
              marginBottom: '16px',
            }}
          >
            한국인 75%가 우유를 마시면 불편함을 느낀다고 해요. 대부분 유당불내증이 아니라 A1 카제인 때문입니다.
          </p>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.875rem',
              color: ds.brownLight,
              lineHeight: 1.8,
            }}
          >
            <em>참고: 서울대 분당병원 임상시험(2024) — A2 우유가 소화기 증상 개선, 장내 유익균 증가</em>
          </p>
        </div>
      </section>

      {/* 저지 품종 */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '750px',
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
            02 — JERSEY COW
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
            저지종, 영양의 농축
          </h2>

          <img
            src="/images/rainbow-jersey-05.png"
            alt="저지종 젖소"
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              borderRadius: '8px',
              marginBottom: '32px',
            }}
          />

          <h3
            style={{
              fontFamily: ds.fontBody,
              fontSize: '1rem',
              fontWeight: 600,
              color: ds.brown,
              marginBottom: '16px',
            }}
          >
            저지 vs 홀스타인 비교
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
              marginBottom: '32px',
            }}
          >
            {[
              { label: '유지방', jersey: '4.9~5.8%', holstein: '3.4~3.8%' },
              { label: '단백질', jersey: '3.7~4.2%', holstein: '3.1%' },
              { label: 'A2 유전자', jersey: '60~66%', holstein: '26~50%' },
              { label: '경제 수명', jersey: '12~15년', holstein: '5~6년' },
            ].map((row) => (
              <div
                key={row.label}
                style={{
                  backgroundColor: ds.white,
                  padding: '20px',
                  borderRadius: '8px',
                }}
              >
                <p style={{ fontFamily: ds.fontBody, fontSize: '0.75rem', color: ds.brownLight, marginBottom: '8px' }}>
                  {row.label}
                </p>
                <p style={{ fontFamily: ds.fontHeading, fontSize: '1.25rem', color: ds.green, marginBottom: '4px' }}>
                  {row.jersey}
                </p>
                <p style={{ fontFamily: ds.fontBody, fontSize: '0.75rem', color: ds.brownLight }}>
                  홀스타인 {row.holstein}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.9375rem',
              color: ds.brownMid,
              lineHeight: 2,
            }}
          >
            저지종은 영국 저지 섬 원산의 소형 젖소입니다. 1789년부터 219년간 외부 소 반입이 금지되어
            세계에서 가장 순수한 혈통을 유지하고 있어요. 추위에 강하고 사료 효율이 좋아 고지대에 적합합니다.
          </p>
        </div>
      </section>

      {/* 건초 급여 */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '750px',
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
            03 — HAY MILK
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
            건초우유, 사료가 우유를 결정한다
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px',
              marginBottom: '32px',
            }}
          >
            <div
              style={{
                backgroundColor: ds.ivory,
                padding: '24px',
                borderRadius: '8px',
                border: `2px solid ${ds.green}`,
              }}
            >
              <h4 style={{ fontFamily: ds.fontBody, fontSize: '1rem', fontWeight: 600, color: ds.green, marginBottom: '12px' }}>
                건초 (Hay)
              </h4>
              <ul
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '0.875rem',
                  color: ds.brownMid,
                  lineHeight: 1.9,
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                }}
              >
                <li>• 햇볕에 자연 건조</li>
                <li>• 맑고 향긋한 풍미</li>
                <li>• 베타카로틴 → 황금빛</li>
                <li>• 오메가6:3 비율 2:1 이하</li>
                <li>• EU TSG 인증 대상</li>
              </ul>
            </div>
            <div
              style={{
                backgroundColor: ds.ivory,
                padding: '24px',
                borderRadius: '8px',
              }}
            >
              <h4 style={{ fontFamily: ds.fontBody, fontSize: '1rem', fontWeight: 600, color: ds.brownLight, marginBottom: '12px' }}>
                사일리지 (Silage)
              </h4>
              <ul
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '0.875rem',
                  color: ds.brownLight,
                  lineHeight: 1.9,
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                }}
              >
                <li>• 밀봉 발효 방식</li>
                <li>• 발효 유래 묵직함</li>
                <li>• 상대적으로 흰색</li>
                <li>• 오메가6:3 비율 5.7:1 이상</li>
                <li>• 대량생산에 적합</li>
              </ul>
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
            건초 급여 시 오메가-3가 147% 증가하고, CLA(공액리놀레산)가 126% 증가합니다.
            한국의 장마철에 건초를 만드는 건 쉽지 않지만, 그만큼 가치 있는 차이를 만듭니다.
          </p>
        </div>
      </section>

      {/* Golden Milk */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '750px',
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

          <div
            style={{
              backgroundColor: '#FFF9E6',
              padding: '32px',
              borderRadius: '8px',
              marginBottom: '32px',
              border: '1px solid #FFE082',
            }}
          >
            <p
              style={{
                fontFamily: ds.fontBody,
                fontSize: '1rem',
                color: ds.brown,
                lineHeight: 2,
                textAlign: 'center',
              }}
            >
              착색이 아닙니다. 100% 자연 그대로의 색이에요!
            </p>
          </div>

          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.9375rem',
              color: ds.brownMid,
              lineHeight: 2.2,
              marginBottom: '24px',
            }}
          >
            저지종은 체내 베타카로틴을 우유로 더 잘 전달해요.
            건초에는 베타카로틴이 풍부하고요.
          </p>
          <p
            style={{
              fontFamily: ds.fontHeading,
              fontSize: '1.125rem',
              color: ds.brown,
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            저지 + 건초 = 자연스러운 황금빛
          </p>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.9375rem',
              color: ds.brownMid,
              lineHeight: 2,
            }}
          >
            유럽에서는 이런 우유를 "Golden Milk"라고 불러요.
            베타카로틴은 비타민 A의 전구체로, 눈 건강과 피부 건강에 좋습니다.
            노란 우유 = 건강한 우유의 증거예요.
          </p>
        </div>
      </section>

      {/* 착유→배송 */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(60px, 10vh, 80px) 0' }}>
        <div
          style={{
            maxWidth: '750px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: '1.25rem',
              fontWeight: 400,
              color: ds.brown,
              marginBottom: '32px',
            }}
          >
            착유에서 배송까지
          </h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            {['🌅 새벽 착유', '→', '🧴 당일 병입', '→', '📦 당일 발송', '→', '🏠 신선 배송'].map((step, i) => (
              <span
                key={i}
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: step === '→' ? '1rem' : '0.9375rem',
                  color: step === '→' ? ds.brownLight : ds.brownMid,
                }}
              >
                {step}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: ds.darkBrown, padding: 'clamp(60px, 10vh, 80px) 0', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: ds.fontBody,
            fontSize: '0.9375rem',
            color: 'rgba(255,255,255,0.75)',
            marginBottom: '16px',
          }}
        >
          무무밀크를 직접 맛보고 싶으신가요?
        </p>
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
