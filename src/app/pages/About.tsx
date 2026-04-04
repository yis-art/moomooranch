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
      {/* ── 섹션 1: 예수원 목장의 시작 ── */}
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
          src="/images/예수원목장-초기간판.png"
          alt="예수원 목장 초기 간판"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.4)',
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
            JESUS ABBEY · 1965
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
            예수원 목장의 시작
          </h1>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.8)',
              fontStyle: 'italic',
            }}
          >
            Passing on the Gift
          </p>
        </div>
      </section>

      {/* 헤이퍼 이야기 */}
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
                fontStyle: 'italic',
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
            1953년, 한국전쟁이 끝나고 폐허가 된 땅에 미국 헤이퍼 인터내셔널(Heifer International)이
            897마리의 젖소를 보냈습니다. 굶주린 이들에게 가축을 나누고, 받은 선물을 다시 이웃에게
            전달하는 원칙으로 전 세계 빈곤 지역을 돕는 단체였습니다.
          </p>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '1rem',
              color: ds.brownMid,
              lineHeight: 2.2,
            }}
          >
            1965년, 헤이퍼 코리아와 시애틀 교회가 태백 삼수령 예수원에 젖소 2마리를 보냈습니다.
            그 작은 선물이 오늘 무무목장의 첫 씨앗이었습니다.
          </p>
        </div>
      </section>

      {/* ── 섹션 2: 두 명의 소명자 ── */}
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
            TWO CALLINGS
          </p>
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 400,
              color: ds.brown,
              marginBottom: '40px',
              lineHeight: 1.5,
            }}
          >
            두 명의 소명자
          </h2>

          <figure style={{ margin: '0 0 48px' }}>
            <img
              src="/images/대천덕-킹스베리.png"
              alt="대천덕 신부님과 킹스베리 선교사"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                display: 'block',
              }}
            />
            <figcaption
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.8125rem',
                color: ds.brownLight,
                textAlign: 'center',
                marginTop: '10px',
                fontStyle: 'italic',
              }}
            >
              대천덕(Archer Torrey) 신부님과 폴 킹스베리(Paul Kingsbury) 선교사
            </figcaption>
          </figure>

          {/* 대천덕 */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '3px 1fr',
              gap: '32px',
              marginBottom: '48px',
              alignItems: 'start',
            }}
          >
            <div style={{ backgroundColor: ds.green, alignSelf: 'stretch' }} />
            <div>
              <h3
                style={{
                  fontFamily: ds.fontHeading,
                  fontSize: '1.125rem',
                  fontWeight: 400,
                  color: ds.brown,
                  marginBottom: '4px',
                }}
              >
                대천덕 (Archer Torrey) 신부님
              </h3>
              <p
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '0.8125rem',
                  color: ds.green,
                  marginBottom: '16px',
                  letterSpacing: '0.05em',
                }}
              >
                예수원 설립자 · 미국 성공회 사제 · 하버드대 출신
              </p>
              <p
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '1rem',
                  color: ds.brownMid,
                  lineHeight: 2.2,
                  marginBottom: '20px',
                }}
              >
                1965년, 하버드대를 나온 미국인 성공회 사제 대천덕(Archer Torrey) 신부님이 태백
                삼수령에 예수원(Jesus Abbey)을 세웠습니다. 한국전쟁 때 한국에 오셔서, 평생을
                이 땅에 헌신하셨습니다.
              </p>
              <div
                style={{
                  backgroundColor: ds.ivory,
                  padding: '20px 24px',
                  borderRadius: '4px',
                }}
              >
                <p
                  style={{
                    fontFamily: ds.fontHeading,
                    fontSize: '0.9375rem',
                    color: ds.brown,
                    lineHeight: 1.8,
                    margin: '0 0 8px',
                  }}
                >
                  "통일을 위한 코이노니아 (Koinonia for Reunification)"
                </p>
                <p
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.8125rem',
                    color: ds.brownLight,
                    margin: 0,
                    fontStyle: 'italic',
                  }}
                >
                  Ora et Labora — 기도하며 일하라
                </p>
              </div>
            </div>
          </div>

          <img
            src="/images/예수원 상징.png"
            alt="예수원 상징"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              marginBottom: '48px',
            }}
          />

          {/* 킹스베리 */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '3px 1fr',
              gap: '32px',
              alignItems: 'start',
            }}
          >
            <div style={{ backgroundColor: ds.brownLight, alignSelf: 'stretch' }} />
            <div>
              <h3
                style={{
                  fontFamily: ds.fontHeading,
                  fontSize: '1.125rem',
                  fontWeight: 400,
                  color: ds.brown,
                  marginBottom: '4px',
                }}
              >
                킹스베리 (Paul A. Kingsbury) 선교사님
              </h3>
              <p
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '0.8125rem',
                  color: ds.green,
                  marginBottom: '16px',
                  letterSpacing: '0.05em',
                }}
              >
                헤이퍼 코리아 선교사 · 킹스베리 초지 조성
              </p>
              <p
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '1rem',
                  color: ds.brownMid,
                  lineHeight: 2.2,
                  marginBottom: '20px',
                }}
              >
                헤이퍼 코리아 소속 킹스베리(Paul A. Kingsbury, 김승배) 선교사님은 대천덕 신부님의
                목장 설립을 지원했습니다. 1969년 삼수령 해발 1,000m에 초지를 조성하고, 지금도
                "킹스베리 초지"라는 이름으로 남아 있습니다.
              </p>
              <div
                style={{
                  backgroundColor: ds.ivory,
                  padding: '20px 24px',
                  borderRadius: '4px',
                }}
              >
                <p
                  style={{
                    fontFamily: ds.fontHeading,
                    fontSize: '0.9375rem',
                    color: ds.brown,
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  "Passing on the Gift — 받은 선물을 다음 세대에 전달하라"
                </p>
              </div>
            </div>
          </div>

          <figure style={{ margin: '48px 0 0' }}>
            <img
              src="/images/킹스베리-양방목.png"
              alt="킹스베리 선교사의 양방목"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                display: 'block',
              }}
            />
            <figcaption
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.8125rem',
                color: ds.brownLight,
                textAlign: 'center',
                marginTop: '10px',
                fontStyle: 'italic',
              }}
            >
              킹스베리 선교사님이 조성한 삼수령 초지의 양방목
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── 섹션 3: 목장의 위기 ── */}
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
            CRISIS · 2020
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
            목장의 위기
          </h2>

          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '1rem',
              color: ds.brownMid,
              lineHeight: 2.2,
              marginBottom: '24px',
            }}
          >
            코로나19 시기, 전 세계 곡물 가격이 급등하면서 사료값이 폭등했습니다. 수십 년간 이어온
            한우 목장 운영은 계속된 적자로 한계에 다다랐습니다.
          </p>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '1rem',
              color: ds.brownMid,
              lineHeight: 2.2,
              marginBottom: '32px',
            }}
          >
            이 위기 속에서 북한 출신 수의사 박요셉 대표님이 합류했습니다. 건국대 수의과를 졸업하고
            사회적기업 요벨을 운영하며 "제3의 공간"을 꿈꾸던 분이었습니다. 한우 목장이 아닌,
            전혀 다른 길을 함께 모색했습니다.
          </p>

          <div style={{ display: 'flex', gap: '32px', marginBottom: '32px' }}>
            <div style={{ width: '2px', backgroundColor: ds.green, flexShrink: 0 }} />
            <p
              style={{
                fontFamily: ds.fontHeading,
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                fontWeight: 400,
                color: ds.brown,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              그때 30년 경력의 대동물 수의사 하현제 원장님이<br />
              저지소 2마리를 기증하셨습니다.
            </p>
          </div>

          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '1rem',
              color: ds.brownMid,
              lineHeight: 2.2,
            }}
          >
            그 2마리의 저지 젖소가 전환의 시작이었습니다. 한우 목장은 저지 젖소 목장으로 방향을
            바꾸었고, 무무목장이라는 이름으로 새롭게 태어났습니다.
          </p>
        </div>
      </section>

      {/* ── 섹션 4: 삼수령 무무목장의 시작 ── */}
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
              lineHeight: 1.5,
            }}
          >
            삼수령 무무목장의 시작
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              marginBottom: '40px',
            }}
          >
            <img
              src="/images/무지개초지_저지소01.png"
              alt="삼수령 무지개초지 저지소"
              style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '8px' }}
            />
            <img
              src="/images/무지개초지_저지소02.png"
              alt="삼수령 무지개초지 저지소"
              style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '8px' }}
            />
          </div>

          {/* 버니 스미스 인용 */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '3px 1fr',
              gap: '32px',
              marginBottom: '40px',
              alignItems: 'start',
            }}
          >
            <div style={{ backgroundColor: ds.green, alignSelf: 'stretch' }} />
            <div>
              <p
                style={{
                  fontFamily: ds.fontHeading,
                  fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                  fontWeight: 400,
                  color: ds.brown,
                  lineHeight: 1.8,
                  margin: '0 0 12px',
                  fontStyle: 'italic',
                }}
              >
                "무무목장을 목축업을 통한 NK 선교 준비의 전초기지로"
              </p>
              <p
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '0.8125rem',
                  color: ds.brownLight,
                  margin: '0 0 4px',
                }}
              >
                — 버니 스미스 (Barny Smith) 선교사님
              </p>
              <p
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '0.8125rem',
                  color: ds.green,
                  margin: 0,
                  letterSpacing: '0.05em',
                }}
              >
                1997~2019년 북한 농업 선교사 · 현 무무목장 국제 자문
              </p>
            </div>
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
            1997년부터 2019년까지 북한에서 농업 선교사로 활동한 버니 스미스(Barny Smith) 선교사님이
            합류했습니다. 헤이퍼 코리아와의 협력 아래, 삼수령 무무목장은 해발 1,000m에서 A2 저지
            목초우유를 생산하기 시작했습니다.
          </p>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '1rem',
              color: ds.brownMid,
              lineHeight: 2.2,
            }}
          >
            남한에서 북한 고지대와 가장 유사한 환경인 삼수령. 이곳에서 검증된 소규모 낙농 모델은,
            언젠가 북한에 이식될 씨앗입니다.
          </p>
        </div>
      </section>

      {/* ── 섹션 5: 함께하는 사람들 ── */}
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
            삼수령 무무목장과 함께하는 사람들
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              {
                name: '히스기야 (서수철)',
                role: '현장 운영 총괄',
                desc: '예수원 공동체 수도자. 매일 새벽부터 소들을 돌보며 기도와 노동의 삶을 실천합니다.',
              },
              {
                name: '박요셉',
                role: '목장 대표 · 모델 설계',
                desc: '북한 출신 수의사. 건국대 수의과 졸업, 사회적기업 요벨 운영. 통일 농업의 꿈을 품고 무무목장의 비즈니스 모델을 설계합니다.',
              },
              {
                name: '버니 스미스 (Barny Smith)',
                role: '국제 자문',
                desc: '1997~2019년 북한에서 농업 선교사로 활동. 무무목장의 NK 선교 전초기지 비전을 함께 이끌어 갑니다.',
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
                  &#128100;
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: ds.fontHeading,
                      fontSize: '1.0625rem',
                      fontWeight: 400,
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
                      letterSpacing: '0.05em',
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
          저지젖소 알아보기
        </Link>
      </section>
    </main>
  );
}
