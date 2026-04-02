const ds = {
  white: '#ffffff',
  ivory: '#f8f6f2',
  brown: '#2d2518',
  brownMid: '#5c4d3a',
  brownLight: '#8a7a68',
  darkBrown: '#3d3020',
  fontHeading: '"Noto Serif KR", serif',
  fontBody: '"Noto Sans KR", sans-serif',
};

function SectionBlock({
  title,
  children,
  last = false,
}: {
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div style={{ marginBottom: last ? 0 : '80px' }}>
      <h2
        style={{
          fontFamily: ds.fontHeading,
          fontSize: '1.25rem',
          fontWeight: 400,
          color: ds.brown,
          margin: '0 0 24px',
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: ds.fontBody,
        fontSize: '0.9375rem',
        color: ds.brownMid,
        lineHeight: 2,
        margin: 0,
      }}
    >
      {children}
    </p>
  );
}

function QuoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '24px',
        margin: '32px 0 0',
      }}
    >
      <div style={{ width: '2px', backgroundColor: ds.brownLight, flexShrink: 0 }} />
      <p
        style={{
          fontFamily: ds.fontHeading,
          fontSize: '0.9375rem',
          fontWeight: 400,
          color: ds.brown,
          lineHeight: 2,
          margin: 0,
          fontStyle: 'italic',
        }}
      >
        {children}
      </p>
    </div>
  );
}

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
          alt="무무목장 소개"
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
            ABOUT
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
            목장소개
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
              강원도 태백 삼수령, 해발 1,000m.<br />
              1965년 대천덕 신부님이 세운 예수원 공동체가<br />
              60년 동안 기도와 노동으로 지켜온 땅입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 예수원 60년 */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <SectionBlock title="예수원 60년">
            <BodyText>
              1965년, 미국인 성공회 사제 대천덕(Archer Torrey) 신부님이 태백 삼수령에 예수원을 세웠습니다.
              해발 1,000m 깊은 산중에서 '기도하며 일하라(Ora et Labora)'의 정신으로
              60년을 이어온 기도와 노동의 수도공동체입니다.
            </BodyText>
            <QuoteBlock>
              "Ora et Labora — 기도하며 일하라"
            </QuoteBlock>
            <p
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.9375rem',
                color: ds.brownMid,
                lineHeight: 2,
                margin: '24px 0 0',
              }}
            >
              2020년, 예수원은 저지(Jersey)종 젖소를 처음 들여와 낙농을 시작했습니다.
              땅에서 나는 것으로 자급자족하는 공동체의 오랜 삶 위에 무무목장이 태어났습니다.
            </p>
          </SectionBlock>
        </div>
      </section>

      {/* Image divider */}
      <section>
        <img
          src="/images/무지개초지.png"
          alt="무무목장 전경"
          style={{
            width: '100%',
            height: '50vh',
            objectFit: 'cover',
          }}
        />
      </section>

      {/* 박요셉 스토리 */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <SectionBlock title="공동대표 박요셉 수의사">
            <BodyText>
              박요셉 수의사는 북한 출신입니다. 탈북 후 여명학교에서 공부하며 새 삶의 기초를 닦았고,
              그 길 끝에 예수원과 인연을 맺었습니다. 지금은 무무목장의 공동대표로서
              소들의 건강과 목장의 모든 것을 책임지고 있습니다.
            </BodyText>
            <QuoteBlock>
              "무무목장은 제3의 공간입니다.<br />
              남과 북이 함께 일하고, 함께 먹고, 함께 꿈을 꿀 수 있는 곳."
            </QuoteBlock>
            <p
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.9375rem',
                color: ds.brownMid,
                lineHeight: 2,
                margin: '24px 0 0',
              }}
            >
              그에게 목장은 치즈를 만드는 곳 이상입니다. 이념의 경계를 넘어
              사람과 사람이 땅을 함께 일구는 이야기가 이곳에서 조용히 쓰이고 있습니다.
            </p>
          </SectionBlock>
        </div>
      </section>

      {/* 치즈 가족 소개 */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <SectionBlock title="치즈 가족을 소개합니다">
            <BodyText>
              무무목장의 저지종 젖소들은 모두 이름이 있습니다.
              카페에서 시작된 이름들이 한 가족을 이루었습니다.
            </BodyText>
            <div
              style={{
                marginTop: '40px',
                display: 'grid',
                gap: '24px',
              }}
            >
              {[
                {
                  name: '카페',
                  role: '무리의 대장',
                  desc: '목장에서 가장 크고 듬직한 소. 무리를 이끄는 대장입니다.',
                },
                {
                  name: '밀크',
                  role: '치즈 엄마',
                  desc: '치즈의 엄마. 풍부한 젖으로 무무목장 치즈의 원료를 책임집니다.',
                },
                {
                  name: '라떼',
                  role: '치즈 이모',
                  desc: '밀크의 가장 가까운 동료. 든든한 이모 역할을 합니다.',
                },
                {
                  name: '커피',
                  role: '치즈 언니, 카페의 딸',
                  desc: '카페의 딸로 태어나 언니로 자랐습니다.',
                },
                {
                  name: '치즈',
                  role: '막내, 2026년 1월 6일생',
                  desc: '밀크의 딸. 무무목장의 막내로, 치즈라는 이름처럼 온 목장의 보물입니다.',
                },
              ].map((cow) => (
                <div
                  key={cow.name}
                  style={{
                    display: 'flex',
                    gap: '24px',
                    alignItems: 'flex-start',
                  }}
                >
                  <div style={{ width: '2px', backgroundColor: ds.brownLight, flexShrink: 0, marginTop: '6px', height: 'auto', alignSelf: 'stretch' }} />
                  <div>
                    <p
                      style={{
                        fontFamily: ds.fontHeading,
                        fontSize: '1rem',
                        fontWeight: 400,
                        color: ds.brown,
                        margin: '0 0 6px',
                      }}
                    >
                      {cow.name}
                      <span
                        style={{
                          fontFamily: ds.fontBody,
                          fontSize: '0.8125rem',
                          color: ds.brownLight,
                          marginLeft: '12px',
                          fontWeight: 400,
                        }}
                      >
                        {cow.role}
                      </span>
                    </p>
                    <p
                      style={{
                        fontFamily: ds.fontBody,
                        fontSize: '0.875rem',
                        color: ds.brownMid,
                        lineHeight: 1.8,
                        margin: 0,
                      }}
                    >
                      {cow.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SectionBlock>
        </div>
      </section>

      {/* 헤이퍼 인터내셔널 */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <SectionBlock title="헤이퍼 인터내셔널과의 연결" last>
            <BodyText>
              1952년, 헤이퍼 프로젝트(Heifer International)는 897마리의 젖소를 한국에 보냈습니다.
              전쟁 직후 폐허 위에서 젖소 한 마리가 한 가족을 살렸습니다.
              그 역사의 씨앗이 세대를 건너 이어져 오늘의 저지종 젖소로 닿아 있습니다.
            </BodyText>
            <QuoteBlock>
              "Passing on the Gift — 선물을 전달하라"
            </QuoteBlock>
            <p
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.9375rem',
                color: ds.brownMid,
                lineHeight: 2,
                margin: '24px 0 0',
              }}
            >
              무무목장은 단순히 치즈를 만드는 곳이 아닙니다.
              받은 것을 다음 세대에 넘겨주는 이 정신이,
              태백 산중 1,000m에서 여전히 살아 숨 쉬고 있습니다.
            </p>
          </SectionBlock>
        </div>
      </section>
    </main>
  );
}
