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
          height: '70vh',
          minHeight: '450px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
            filter: 'brightness(0.45)',
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
              margin: '0 0 16px',
              lineHeight: 1.4,
            }}
          >
            선물을 전달하라
          </h1>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.85)',
              fontStyle: 'italic',
            }}
          >
            Passing on the Gift
          </p>
        </div>
      </section>

      {/* 헤이퍼 인터내셔널 */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '750px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <div style={{ display: 'flex', gap: '32px', marginBottom: '32px' }}>
            <div style={{ width: '2px', backgroundColor: ds.green, flexShrink: 0 }} />
            <p
              style={{
                fontFamily: ds.fontHeading,
                fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                fontWeight: 400,
                color: ds.brown,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              "받은 선물을 다음 사람에게 전달하라"
            </p>
          </div>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '1rem',
              color: ds.brownMid,
              lineHeight: 2.2,
              marginBottom: '24px',
            }}
          >
            헤이퍼 인터내셔널(Heifer International)은 이 원칙으로 전 세계 빈곤 지역에 가축을 보급해왔습니다.
            1965년, 시애틀 교회가 예수원에 보낸 젖소 두 마리도 같은 정신이었습니다.
          </p>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '1rem',
              color: ds.brownMid,
              lineHeight: 2.2,
            }}
          >
            60년이 지난 지금, 무무목장은 그 선물을 북한 고지대에 전달하기 위한 실험을 합니다.
          </p>
        </div>
      </section>

      {/* 예수원 1965 */}
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
            JESUS ABBEY · 1965
          </p>
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 400,
              color: ds.brown,
              marginBottom: '32px',
              lineHeight: 1.5,
            }}
          >
            "읽고, 걷고, 침묵합니다."
          </h2>

          <img
            src="/images/예수원 소개.png"
            alt="예수원 전경"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              marginBottom: '32px',
            }}
          />

          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '1rem',
              color: ds.brownMid,
              lineHeight: 2.2,
              marginBottom: '24px',
            }}
          >
            1965년, 미국인 성공회 사제 대천덕(Archer Torrey) 신부님이 태백 삼수령에 예수원을 세웠습니다.
            기도와 노동의 공동체로 60년을 이어온 수도원입니다.
          </p>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '1rem',
              color: ds.brownMid,
              lineHeight: 2.2,
            }}
          >
            헤이퍼 인터내셔널 소속 Paul A. Kingsbury(김승배) 선교사가 대천덕 신부의 목장 설립을 지원했습니다.
            1975년 해발 1,000m 매봉산 자락으로 확장하며 "Jesus Abbey The Watershed Grange"로 불렸습니다.
          </p>
        </div>
      </section>

      {/* 킹스베리 초지 */}
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
            KINGSBURY MEADOW · 1969
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
            킹스베리 초지
          </h2>

          <img
            src="/images/무지개초지.png"
            alt="킹스베리 초지 (무지개초지)"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              marginBottom: '32px',
            }}
          />

          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '1rem',
              color: ds.brownMid,
              lineHeight: 2.2,
              marginBottom: '24px',
            }}
          >
            1969년 초지조성지구로 고시된 삼수령의 초지.
            김승배(Paul Kingsbury) 선교사의 이름을 따 "킹스베리 초지"라 불립니다.
            지금은 "무지개초지"라는 이름으로도 불려요.
          </p>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '1rem',
              color: ds.brownMid,
              lineHeight: 2.2,
            }}
          >
            해발 1,000m — 남한에서 북한 고지대와 가장 유사한 환경.
            이곳에서 검증된 소규모 낙농 모델은, 언젠가 북한에 이식될 씨앗입니다.
          </p>
        </div>
      </section>

      {/* 무무목장 2024 */}
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
            MOOMOO RANCH · 2024
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
              gap: '16px',
              marginBottom: '32px',
            }}
          >
            <img
              src="/images/축사셀카.jpg"
              alt="축사에서 저지소와 함께"
              style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '8px' }}
            />
            <img
              src="/images/아이와저지소.jpg"
              alt="아이와 저지소"
              style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '8px' }}
            />
          </div>

          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '1rem',
              color: ds.brownMid,
              lineHeight: 2.2,
              marginBottom: '24px',
            }}
          >
            2020년, 30년 경력 대동물 수의사 하현제 원장님이 저지소 2마리를 기증했습니다.
            A2 우유를 생산하는 저지종 젖소의 시작이었습니다.
          </p>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '1rem',
              color: ds.brownMid,
              lineHeight: 2.2,
            }}
          >
            2024년, 북한 출신 수의사 박요셉 목장주님이 합류하며 "무무목장"이라는 이름으로 브랜드를 시작했습니다.
            통일 농업의 씨앗, 서포터즈 1,000명과 함께 성장하는 "제3의 공간"을 꿈꿉니다.
          </p>
        </div>
      </section>

      {/* 함께 이끄는 사람들 */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '750px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 400,
              color: ds.brown,
              marginBottom: '40px',
              textAlign: 'center',
            }}
          >
            함께 이끄는 사람들
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              {
                name: '대천덕 (Archer Torrey)',
                role: '예수원 설립자',
                desc: '1965년 삼수령에 예수원을 세운 미국인 성공회 사제. 한국전쟁 때 한국에 오셔서 평생을 이 땅에서 보내셨습니다.',
              },
              {
                name: '박요셉',
                role: '무무목장 목장주',
                desc: '북한 출신 수의사. 건국대 수의과 졸업, 사회적기업 요벨 운영. 통일 농업의 꿈을 품고 있습니다.',
              },
              {
                name: '히스기야 (서수철)',
                role: '현장 운영',
                desc: '예수원 공동체 수도자. 매일 새벽부터 소들을 돌보며, 기도와 노동의 삶을 실천합니다.',
              },
              {
                name: '하현제',
                role: '저지소 기증',
                desc: '30년 경력 대동물 수의사. 2020년 저지소 2마리를 기증하며 무무목장의 씨앗을 뿌렸습니다.',
              },
            ].map((person) => (
              <div
                key={person.name}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '24px',
                  alignItems: 'start',
                }}
              >
                <div
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    backgroundColor: ds.white,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                  }}
                >
                  👤
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: ds.fontBody,
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: ds.brown,
                      margin: '0 0 4px',
                    }}
                  >
                    {person.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: ds.fontBody,
                      fontSize: '0.8125rem',
                      color: ds.green,
                      margin: '0 0 8px',
                    }}
                  >
                    {person.role}
                  </p>
                  <p
                    style={{
                      fontFamily: ds.fontBody,
                      fontSize: '0.9375rem',
                      color: ds.brownMid,
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {person.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 성경 인용 */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(60px, 10vh, 80px) 0' }}>
        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
              fontStyle: 'italic',
              color: ds.brownMid,
              lineHeight: 1.8,
              marginBottom: '16px',
            }}
          >
            "이는 하나님이 계획하시고 세우신<br />
            터가 있는 성을 바라고 있었음이라"
          </p>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.875rem',
              color: ds.brownLight,
            }}
          >
            — 히브리서 11:10
          </p>
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
          무무밀크가 특별한 이유가 궁금하신가요?
        </p>
        <Link
          to="/taste"
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
          맛의 차이 알아보기
        </Link>
      </section>
    </main>
  );
}
