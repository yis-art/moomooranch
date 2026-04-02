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
  const teamMembers = [
    {
      name: '히스기야',
      role: '현장 운영',
      desc: '예수원 공동체 소속 목장 책임자. 해발 1,000m 고지대에서 저지 소의 사계절을 총괄합니다.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.png-AvG53E1ea7IAcBwPlC0H0SAk65cQQ0.jpeg',
    },
    {
      name: '박요셉',
      role: '모델 설계',
      desc: '북한 환경에 적용 가능한 융복합 농촌 복원 모델을 설계합니다.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.png-ahO39itOmMwjoH6DSeGYaEP9QFz9CS.jpeg',
    },
    {
      name: '바니 스미스 선교사',
      role: '국제 자문',
      desc: '미국 수의사. 1997~2019년 북한 현지에서 농업 선교사로 활동한 경험을 바탕으로 자문합니다.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.png-5BJVRE5dFO0v4QVxBdrc5v1xRFgFdg.jpeg',
    },
  ];

  const jerseyFeatures = [
    { label: '체구', value: '400~450kg', desc: '사료 효율이 높은 소형 품종' },
    { label: '유지방', value: '5%', desc: '홀스타인 대비 약 1.5배' },
    { label: 'A2 유전형', value: '거의 100%', desc: '소화가 편한 A2 베타카제인' },
    { label: '경제 수명', value: '12~15년', desc: '홀스타인 대비 2배 이상' },
  ];

  return (
    <main>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src="/images/운해.png"
          alt="삼수령 무무목장 전경"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.5)',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))' }} />

        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px', maxWidth: '900px' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              marginBottom: '24px',
              borderRadius: '20px',
              backgroundColor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              fontFamily: ds.fontBody,
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: '#fff',
              letterSpacing: '0.05em',
            }}
          >
            Passing on the Gift
          </span>

          <h1
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 400,
              color: '#fff',
              margin: '0 0 24px',
              lineHeight: 1.2,
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            삼수령 무무목장
          </h1>

          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
              color: 'rgba(255,255,255,0.95)',
              lineHeight: 1.7,
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            해발 1,000m에서 검증된 낙농 모델을<br />
            북한 고지대에 전달하기 위한 프로젝트
          </p>
        </div>
      </section>

      {/* Section 1: 선물을 전달하라 */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 60px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%8B%E1%85%A8%E1%84%89%E1%85%AE%E1%84%8B%E1%85%AF%E1%86%AB%20%E1%84%87%E1%85%A9%E1%86%AB%E1%84%80%E1%85%AA%E1%86%AB%20%E1%84%80%E1%85%A5%E1%86%AB%E1%84%86%E1%85%AE%E1%86%AF-wRMF9jSGrO8KoZEYSEKVYl4KCdfgXs.jpg"
                alt="예수원 본관 건물"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }}
              />
            </div>

            <div>
              <span
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  marginBottom: '16px',
                  borderRadius: '20px',
                  backgroundColor: 'rgba(122,132,105,0.15)',
                  border: '1px solid rgba(122,132,105,0.3)',
                  fontFamily: ds.fontBody,
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: ds.green,
                }}
              >
                01 — 선물을 전달하라
              </span>

              <h2
                style={{
                  fontFamily: ds.fontHeading,
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: 400,
                  color: ds.brown,
                  margin: '0 0 24px',
                  lineHeight: 1.3,
                }}
              >
                Passing on the Gift
              </h2>

              <div style={{ fontFamily: ds.fontBody, fontSize: '1rem', lineHeight: 2, color: ds.brownMid }}>
                <p style={{ marginBottom: '16px' }}>
                  헤이퍼 인터내셔널(Heifer International)은 <strong>"받은 선물을 다음 사람에게 전달하라"</strong>는 원칙으로 전 세계 빈곤 지역에 가축을 보급해왔습니다.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  1965년, 시애틀 교회가 예수원에 보낸 젖소 두 마리도 같은 정신이었습니다. 60년이 지난 지금, 무무목장은 그 선물을 북한 고지대에 전달하기 위한 실험을 합니다.
                </p>
                <p>
                  해발 1,000m 태백 삼수령 — 남한에서 북한 고지대와 가장 유사한 환경. 이곳에서 검증된 소규모 낙농 모델은, 그 날이 오면 최소한의 수정만으로 북한에 이식할 수 있도록 설계되었습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 60년의 뿌리 */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 60px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div style={{ order: 2 }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  marginBottom: '16px',
                  borderRadius: '20px',
                  backgroundColor: 'rgba(90,122,138,0.15)',
                  border: '1px solid rgba(90,122,138,0.3)',
                  fontFamily: ds.fontBody,
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: '#5a7a8a',
                }}
              >
                02 — 60년의 뿌리
              </span>

              <h2
                style={{
                  fontFamily: ds.fontHeading,
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: 400,
                  color: ds.brown,
                  margin: '0 0 24px',
                  lineHeight: 1.3,
                }}
              >
                The Watershed Grange
                <br />
                <span style={{ fontSize: '0.6em', fontWeight: 400, color: ds.brownLight }}>1965 – 현재</span>
              </h2>

              <div style={{ fontFamily: ds.fontBody, fontSize: '1rem', lineHeight: 2, color: ds.brownMid }}>
                <p style={{ marginBottom: '16px' }}>
                  1965년 덕항산 기슭에서 시작된 예수원의 낙농. 1975년 해발 1,000m 매봉산 자락으로 확장하며 <strong>"Jesus Abbey The Watershed Grange"</strong>로 불렸습니다.
                </p>
                <p>
                  헤이퍼 인터내셔널 소속 Paul A. Kingsbury(김승배) 선교사가 대천덕 신부의 목장 설립을 지원했습니다. 삼수령 무무목장은 예수원의 수도회적 유산과 한국 낙농업 역사를 함께 품고 있습니다.
                </p>
              </div>
            </div>

            <div style={{ order: 1, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%89%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%E1%84%85%E1%85%A7%E1%86%BC%E1%84%86%E1%85%AE%E1%84%86%E1%85%AE%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8C%E1%85%A1%E1%86%BC%201975-AohqSCL4ef6FWCOSXEJl0uZYdTTiX4.jpg"
                alt="삼수령무무목장 1975년 전경"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }}
              />
              <p style={{ textAlign: 'center', padding: '12px', fontFamily: ds.fontBody, fontSize: '0.8125rem', color: ds.brownLight }}>
                삼수령 무무목장, 1975
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 함께 이끄는 사람들 */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 60px)' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '4px 12px',
                marginBottom: '16px',
                borderRadius: '20px',
                backgroundColor: 'rgba(138,90,106,0.15)',
                border: '1px solid rgba(138,90,106,0.3)',
                fontFamily: ds.fontBody,
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: '#8a5a6a',
              }}
            >
              03 — 함께 이끄는 사람들
            </span>
            <h2
              style={{
                fontFamily: ds.fontHeading,
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: 400,
                color: ds.brown,
                margin: '0 0 12px',
              }}
            >
              한국, 북한, 미국
            </h2>
            <p style={{ fontFamily: ds.fontBody, fontSize: '1rem', color: ds.brownMid }}>
              서로 다른 삶의 궤적이 만나 하나의 비전을 이끕니다
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {teamMembers.map((member) => (
              <div
                key={member.name}
                style={{
                  backgroundColor: ds.white,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                }}
              >
                <div style={{ aspectRatio: '1', overflow: 'hidden' }}>
                  <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontFamily: ds.fontBody, fontSize: '1.25rem', fontWeight: 600, color: ds.brown, margin: '0 0 4px' }}>
                    {member.name}
                  </h3>
                  <p style={{ fontFamily: ds.fontBody, fontSize: '0.8125rem', fontWeight: 600, color: ds.green, margin: '0 0 12px' }}>
                    {member.role}
                  </p>
                  <p style={{ fontFamily: ds.fontBody, fontSize: '0.9375rem', color: ds.brownMid, lineHeight: 1.7, margin: 0 }}>
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: 왜 저지(Jersey)인가 */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 60px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
              <img src="/images/무지개초지_저지소01.png" alt="삼수령 무무목장 저지 젖소" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }} />
            </div>

            <div>
              <span
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  marginBottom: '16px',
                  borderRadius: '20px',
                  backgroundColor: 'rgba(154,138,90,0.15)',
                  border: '1px solid rgba(154,138,90,0.3)',
                  fontFamily: ds.fontBody,
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: '#9a8a5a',
                }}
              >
                04 — 왜 저지(Jersey)인가
              </span>

              <h2
                style={{
                  fontFamily: ds.fontHeading,
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: 400,
                  color: ds.brown,
                  margin: '0 0 24px',
                  lineHeight: 1.3,
                }}
              >
                고지대를 위한<br />전략적 선택
              </h2>

              <p style={{ fontFamily: ds.fontBody, fontSize: '1rem', lineHeight: 2, color: ds.brownMid, marginBottom: '24px' }}>
                낮은 분만 난이도와 뛰어난 내한성. 사료가 부족한 고지대에서 저지는 홀스타인보다 훨씬 효율적입니다. 북한 고지대의 5~7개월 혹한기를 견딜 수 있는 품종입니다.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                {jerseyFeatures.map((feat) => (
                  <div key={feat.label} style={{ backgroundColor: ds.ivory, borderRadius: '8px', padding: '16px' }}>
                    <p style={{ fontFamily: ds.fontBody, fontSize: '0.8125rem', color: ds.brownLight, margin: '0 0 4px' }}>
                      {feat.label}
                    </p>
                    <p style={{ fontFamily: ds.fontBody, fontSize: '1.5rem', fontWeight: 700, color: ds.brown, margin: '0 0 4px' }}>
                      {feat.value}
                    </p>
                    <p style={{ fontFamily: ds.fontBody, fontSize: '0.75rem', color: ds.brownLight, margin: 0 }}>
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: 창조질서의 회복 */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 60px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div style={{ order: 2 }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  marginBottom: '16px',
                  borderRadius: '20px',
                  backgroundColor: 'rgba(122,132,105,0.15)',
                  border: '1px solid rgba(122,132,105,0.3)',
                  fontFamily: ds.fontBody,
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: ds.green,
                }}
              >
                05 — 창조질서의 회복
              </span>

              <h2
                style={{
                  fontFamily: ds.fontHeading,
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: 400,
                  color: ds.brown,
                  margin: '0 0 24px',
                  lineHeight: 1.3,
                }}
              >
                소를 소답게 키운다
              </h2>

              <div style={{ fontFamily: ds.fontBody, fontSize: '1rem', lineHeight: 2, color: ds.brownMid }}>
                <p style={{ marginBottom: '16px' }}>
                  무무목장의 철학입니다. 토양 생태계를 보전하고, 가축의 본성을 존중하며, 자연의 계절 리듬을 따릅니다.
                </p>
                <p>
                  과잉 생산을 배제하고, 기도와 노동이 하나 되는 예수원의 전통을 잇습니다. 단기적 이익이 아닌 <strong>창조질서 안에서의 지속 가능성</strong>을 추구합니다.
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '24px' }}>
                {['자연 방목', '생태순환 농법', '계절 리듬 존중', '과잉 생산 배제'].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '20px',
                      backgroundColor: 'rgba(122,132,105,0.12)',
                      fontFamily: ds.fontBody,
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: ds.green,
                      border: '1px solid rgba(122,132,105,0.25)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ order: 1, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
              <img src="/images/무지개초지 설경.png" alt="무무목장 초원 풍경" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          position: 'relative',
          padding: 'clamp(100px, 15vh, 140px) 0',
          overflow: 'hidden',
        }}
      >
        <img
          src="/images/운해.png"
          alt="삼수령 운해"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.35)' }}
        />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 60px)', textAlign: 'center' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              marginBottom: '24px',
              borderRadius: '20px',
              backgroundColor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              fontFamily: ds.fontBody,
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: '#fff',
            }}
          >
            06 — 태백에서 북한으로
          </span>

          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 400,
              color: '#fff',
              margin: '0 0 24px',
              lineHeight: 1.3,
            }}
          >
            Passing on the Gift<br />to North Korea
          </h2>

          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '40px',
            }}
          >
            강원도 태백은 남한에서 북한 고지대와 가장 유사한 기후와 지형을 갖추고 있습니다.
            해발 1,000m, 겨울 5~6개월 결빙, 제한적 경작지 —
            삼수령에서 검증된 모든 것은 북한을 위한 것입니다.
          </p>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '48px', maxWidth: '450px', margin: '0 auto 48px' }}>
            {[
              { value: '5두', label: '현재 저지 소' },
              { value: '10두', label: '1차 목표' },
              { value: '20두', label: '4년 후 목표' },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: ds.fontBody, fontSize: '2rem', fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>
                  {stat.value}
                </p>
                <p style={{ fontFamily: ds.fontBody, fontSize: '0.8125rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link
              to="/shop"
              style={{
                display: 'inline-block',
                padding: '16px 36px',
                fontFamily: ds.fontBody,
                fontSize: '1rem',
                fontWeight: 600,
                color: ds.brown,
                backgroundColor: '#fff',
                textDecoration: 'none',
                borderRadius: '4px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
              }}
            >
              무무곳간 방문하기 →
            </Link>
            <a
              href="https://www.jesusabbey.org/identity/moomoo-grange"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '16px 36px',
                fontFamily: ds.fontBody,
                fontSize: '1rem',
                fontWeight: 600,
                color: '#fff',
                backgroundColor: 'transparent',
                textDecoration: 'none',
                borderRadius: '4px',
                border: '2px solid rgba(255,255,255,0.5)',
              }}
            >
              자세히 알아보기 →
            </a>
          </div>
        </div>
      </section>

      {/* Bible Quote */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(60px, 10vh, 80px) 0' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 60px)', textAlign: 'center' }}>
          <p
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: 1.8,
              color: ds.brownLight,
              fontStyle: 'italic',
              margin: '0 0 16px',
            }}
          >
            "이는 하나님이 계획하시고 세우신 터가 있는 성을 바라고 있었음이라"
          </p>
          <p style={{ fontFamily: ds.fontBody, fontSize: '0.9375rem', color: ds.brownLight, fontWeight: 500, margin: 0 }}>
            — 히브리서 11:10
          </p>
        </div>
      </section>
    </main>
  );
}
