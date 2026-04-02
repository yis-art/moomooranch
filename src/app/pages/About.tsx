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

function TimelineItem({
  year,
  children,
}: {
  year: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'flex-start',
      }}
    >
      <div style={{ flexShrink: 0, textAlign: 'right', minWidth: '60px' }}>
        <span
          style={{
            fontFamily: ds.fontHeading,
            fontSize: '0.8125rem',
            color: ds.brownLight,
            letterSpacing: '0.05em',
          }}
        >
          {year}
        </span>
      </div>
      <div style={{ width: '1px', backgroundColor: ds.brownLight, flexShrink: 0, marginTop: '6px', alignSelf: 'stretch', minHeight: '40px' }} />
      <div style={{ paddingBottom: '24px' }}>
        <p
          style={{
            fontFamily: ds.fontBody,
            fontSize: '0.9375rem',
            color: ds.brownMid,
            lineHeight: 1.9,
            margin: 0,
          }}
        >
          {children}
        </p>
      </div>
    </div>
  );
}

function CTACard({
  title,
  desc,
  label,
  href,
  disabled = false,
}: {
  title: string;
  desc: string;
  label: string;
  href?: string;
  disabled?: boolean;
}) {
  return (
    <div
      style={{
        padding: '28px 32px',
        border: `1px solid rgba(138,122,104,0.25)`,
        backgroundColor: ds.white,
      }}
    >
      <p
        style={{
          fontFamily: ds.fontHeading,
          fontSize: '1rem',
          fontWeight: 400,
          color: ds.brown,
          margin: '0 0 8px',
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontFamily: ds.fontBody,
          fontSize: '0.875rem',
          color: ds.brownLight,
          lineHeight: 1.8,
          margin: '0 0 20px',
        }}
      >
        {desc}
      </p>
      {disabled ? (
        <span
          style={{
            fontFamily: ds.fontBody,
            fontSize: '0.8125rem',
            color: ds.brownLight,
            letterSpacing: '0.05em',
          }}
        >
          {label}
        </span>
      ) : (
        <a
          href={href}
          style={{
            fontFamily: ds.fontBody,
            fontSize: '0.8125rem',
            color: ds.brown,
            textDecoration: 'none',
            borderBottom: `1px solid ${ds.brown}`,
            paddingBottom: '2px',
            letterSpacing: '0.05em',
          }}
        >
          {label}
        </a>
      )}
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
          }}
        >
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.75rem',
              color: ds.brownLight,
              letterSpacing: '0.2em',
              margin: '0 0 32px',
            }}
          >
            무무목장에 오신 것을 환영합니다
          </p>
          <div style={{ display: 'flex', gap: '40px' }}>
            <div style={{ width: '2px', backgroundColor: ds.brownLight, flexShrink: 0 }} />
            <div>
              <p
                style={{
                  fontFamily: ds.fontHeading,
                  fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                  fontWeight: 400,
                  color: ds.brown,
                  lineHeight: 2,
                  margin: '0 0 24px',
                }}
              >
                60년 기도의 땅에서, 건강한 우유를 만듭니다.
              </p>
              <p
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '0.9375rem',
                  color: ds.brownMid,
                  lineHeight: 2,
                  margin: 0,
                }}
              >
                무무목장은 강원도 태백 삼수령 해발 1,000m에 자리한 낙농 공동체입니다.
                1965년부터 기도와 노동으로 땅을 지켜온 예수원 위에서,
                저지(Jersey)종 젖소들이 매일 신선한 A2 우유를 내어줍니다.
                그 우유로 만든 치즈 한 조각에 이 모든 이야기가 담겨 있습니다.
              </p>
            </div>
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
              1965년, 하버드대 출신의 미국인 성공회 사제 대천덕(Archer Torrey) 신부님이
              태백 삼수령에 예수원을 세웠습니다. '기도하며 일하라(Ora et Labora)'의 정신을 붙들고,
              깊은 산중에서 공동체 삶을 시작했습니다.
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
                margin: '32px 0 40px',
              }}
            >
              60년 동안 예수원의 하루는 한결같았습니다.
              새벽 기도로 문을 열고, 낙농과 농업과 게스트하우스 운영으로 낮을 채우고,
              저녁 기도로 하루를 닫았습니다.
              이 리듬이 쌓여 오늘의 땅이 되었습니다.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <TimelineItem year="1965">
                대천덕 신부님, 태백 삼수령에 예수원 설립.
                기도와 노동의 수도 공동체 시작.
              </TimelineItem>
              <TimelineItem year="~2020">
                60년간 새벽 기도 · 낙농 · 농업 · 게스트하우스 운영으로
                자급자족 공동체 생활 이어옴.
              </TimelineItem>
              <TimelineItem year="2020">
                저지(Jersey)종 젖소 도입, A2 우유 생산 시작.
                무무목장 브랜드 런칭.
              </TimelineItem>
            </div>
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
              박요셉 수의사는 북한 청진 출신입니다.
              수의학을 전공한 그는 2008년 탈북 후 여명학교에서 검정고시를 준비하며
              새 삶의 기초를 닦았고, 이후 대학에 진학했습니다.
              그 길 끝에 예수원과 인연을 맺었고,
              지금은 무무목장의 공동대표로서 소들의 건강과 목장의 모든 것을 책임지고 있습니다.
            </BodyText>
            <QuoteBlock>
              "북에서 온 사람, 남에서 온 사람이 함께 일하며 밥을 먹는 곳.<br />
              그런 공간이 통일을 준비하는 것 아닐까요."
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
              그에게 목장은 치즈를 만드는 곳 이상입니다.
              무무목장은 그가 꿈꾸는 '제3의 공간' — 이념의 경계를 넘어
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
              카페에서 시작된 이름들이 세대를 이어 한 가족을 이루었습니다.
              이 소들이 내어주는 우유로 치즈가 만들어집니다.
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
                  born: '',
                  personality: '듬직함',
                  desc: '목장에서 가장 크고 듬직한 소. 무리를 이끄는 대장으로, 묵묵히 앞에 섭니다.',
                },
                {
                  name: '밀크',
                  role: '치즈 엄마',
                  born: '',
                  personality: '온화함',
                  desc: '치즈의 엄마. 풍부한 젖으로 무무목장 치즈의 원료를 책임지는 목장의 중심입니다.',
                },
                {
                  name: '라떼',
                  role: '치즈 이모',
                  born: '',
                  personality: '다정함',
                  desc: '밀크의 가장 가까운 동료. 든든하고 다정한 이모 역할을 합니다.',
                },
                {
                  name: '커피',
                  role: '치즈 언니 · 카페의 딸',
                  born: '',
                  personality: '활발함',
                  desc: '카페의 딸로 태어나 언니로 자랐습니다. 목장에서 가장 활발하게 움직입니다.',
                },
                {
                  name: '치즈',
                  role: '막내 · 무무목장 마스코트',
                  born: '2026.01.06생',
                  personality: '호기심 많음',
                  desc: '밀크의 딸. 2026년 1월 6일, 겨울 아침에 태어났습니다. 호기심이 많아 항상 주변을 두리번거리는 온 목장의 보물.',
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
                        margin: '0 0 4px',
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
                    {cow.born && (
                      <p
                        style={{
                          fontFamily: ds.fontBody,
                          fontSize: '0.75rem',
                          color: ds.brownLight,
                          margin: '0 0 6px',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {cow.born} · {cow.personality}
                      </p>
                    )}
                    {!cow.born && cow.personality && (
                      <p
                        style={{
                          fontFamily: ds.fontBody,
                          fontSize: '0.75rem',
                          color: ds.brownLight,
                          margin: '0 0 6px',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {cow.personality}
                      </p>
                    )}
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
          <SectionBlock title="헤이퍼 인터내셔널과의 연결">
            <BodyText>
              1944년 미국에서 설립된 헤이퍼 인터내셔널(Heifer International)은
              가축을 통해 빈곤 가정을 돕는 비영리 단체입니다.
              1952년, 헤이퍼 프로젝트는 897마리의 젖소를 한국에 보냈습니다.
              전쟁 직후 폐허 위에서 젖소 한 마리가 한 가족을 살렸습니다.
            </BodyText>
            <QuoteBlock>
              "Passing on the Gift — 받은 것을 다시 전달하라"
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
              무무목장의 저지종 젖소들도 그 정신의 연장선 위에 있습니다.
              받은 것을 다음 세대에 넘겨주는 이 흐름이,
              태백 산중 1,000m에서 여전히 살아 숨 쉬고 있습니다.
            </p>
          </SectionBlock>
        </div>
      </section>

      {/* 함께해주세요 CTA */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '800px',
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
              margin: '0 0 12px',
            }}
          >
            함께해주세요
          </h2>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.9375rem',
              color: ds.brownMid,
              lineHeight: 2,
              margin: '0 0 48px',
            }}
          >
            무무목장의 이야기에 함께하는 방법은 여러 가지입니다.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '16px',
            }}
          >
            <CTACard
              title="치즈레터 구독"
              desc="목장 소식과 계절의 이야기를 메일로 받아보세요."
              label="구독하기 →"
              href="/contact"
            />
            <CTACard
              title="목장 방문"
              desc="태백 삼수령, 소들과 함께하는 하루를 경험해보세요."
              label="방문 안내 →"
              href="/visit"
            />
            <CTACard
              title="제품 구매"
              desc="무무목장의 치즈와 유제품을 만나보세요."
              label="스토어 가기 →"
              href="/shop"
            />
            <CTACard
              title="후원 / 서포터즈"
              desc="무무목장의 꿈을 함께 키워갈 서포터즈를 모십니다."
              label="준비중"
              disabled
            />
          </div>
        </div>
      </section>
    </main>
  );
}
