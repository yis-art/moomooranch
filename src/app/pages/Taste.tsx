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

const SectionLabel = ({ children }: { children: string }) => (
  <p
    style={{
      fontFamily: ds.fontBody,
      fontSize: '0.6875rem',
      letterSpacing: '0.25em',
      color: ds.brownLight,
      margin: '0 0 20px',
      textTransform: 'uppercase',
    }}
  >
    {children}
  </p>
);

const SectionTitle = ({
  children,
  center,
}: {
  children: React.ReactNode;
  center?: boolean;
}) => (
  <h2
    style={{
      fontFamily: ds.fontHeading,
      fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
      fontWeight: 400,
      color: ds.brown,
      margin: '0 0 48px',
      lineHeight: 1.6,
      textAlign: center ? 'center' : 'left',
    }}
  >
    {children}
  </h2>
);

export function Taste() {
  return (
    <main>
      {/* ── Hero ── */}
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
          src="/images/우유_저지소.png"
          alt="맛의 차이"
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
            background:
              'linear-gradient(to top, rgba(45,37,24,0.5) 0%, transparent 50%)',
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
            TASTE
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
            맛의 차이
          </h1>
        </div>
      </section>

      {/* ── Intro ── */}
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
              무무목장 우유의 「안심」「건강」「맛」을<br />
              소개합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── A2 저지우유란? ── */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <SectionLabel>A2 JERSEY MILK</SectionLabel>
          <SectionTitle>A2 저지우유란?</SectionTitle>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              {
                icon: '◈',
                title: 'A2 베타-카제인만 포함',
                desc: '일반 우유(홀스타인)는 A1과 A2 카제인이 섞여 있습니다. 저지종은 A2 베타-카제인만 생성하여 몸이 더 자연스럽게 받아들입니다.',
              },
              {
                icon: '◈',
                title: '소화가 편합니다',
                desc: '우유를 마시면 배가 불편했던 분들도 무무목장 우유는 편하게 드실 수 있습니다. A1 카제인 부재가 소화 부담을 줄여줍니다.',
              },
              {
                icon: '◈',
                title: '황금빛 크림층',
                desc: '지방구가 작아 크림이 자연스럽게 분리되며, 저지종 특유의 베타카로틴이 우유에 은은한 황금빛을 더합니다.',
              },
              {
                icon: '◈',
                title: '높은 영양 밀도',
                desc: '일반 우유보다 단백질 함량 약 18%, 칼슘 함량 약 20% 높습니다. 같은 양으로 더 풍부한 영양을 섭취할 수 있습니다.',
              },
              {
                icon: '◈',
                title: '진하고 고소한 풍미',
                desc: '유지방 함량이 홀스타인의 1.5배 이상입니다. 한 모금에 느껴지는 고소함과 깊이가 다릅니다.',
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    fontFamily: ds.fontHeading,
                    fontSize: '0.875rem',
                    color: ds.brownLight,
                    flexShrink: 0,
                    paddingTop: '3px',
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: ds.fontHeading,
                      fontSize: '1rem',
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
                      fontSize: '0.9rem',
                      color: ds.brownMid,
                      lineHeight: 1.9,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 생태순환농업 ── */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <SectionLabel>ECOLOGICAL CYCLE FARMING</SectionLabel>
          <SectionTitle>생태순환농업</SectionTitle>

          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.9375rem',
              color: ds.brownMid,
              lineHeight: 2,
              margin: '0 0 56px',
            }}
          >
            해발 1,000m 삼수령의 청정 초지에서 무무목장의 순환은 시작됩니다.
            수입 건초 의존을 최소화하고, 화학비료 대신 유기 퇴비를 사용하며
            땅과 소, 우유가 하나의 고리로 이어집니다.
          </p>

          {/* Cycle flow */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
            }}
          >
            {[
              {
                node: '토양',
                desc: '유기 퇴비로 키운 삼수령 청정 초지\n화학비료 최소화, 해발 1,000m',
                arrow: true,
              },
              {
                node: '자가목초 (90%)',
                desc: '목장에서 직접 재배한 풀 · 건초\n수입 건초 의존 최소화',
                arrow: true,
              },
              {
                node: '사일리지',
                desc: '자가 목초를 발효시킨 영양 사료\n겨울철에도 신선한 영양 공급',
                arrow: true,
              },
              {
                node: '건강한 소',
                desc: '스트레스 없는 방목, 자연 리듬 존중\n저지종 특유의 온순함',
                arrow: true,
              },
              {
                node: '건강한 우유',
                desc: 'A2 단백질, 높은 유지방, 황금빛 크림\n진하고 고소한 무무목장의 맛',
                arrow: true,
              },
              {
                node: '유기 퇴비',
                desc: '소 분뇨를 발효시켜 토양으로 환원\n순환의 고리가 완성됩니다',
                arrow: false,
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'stretch', gap: '24px' }}>
                {/* Left: line + arrow */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '24px',
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: ds.brownLight,
                      flexShrink: 0,
                      marginTop: '6px',
                    }}
                  />
                  {item.arrow && (
                    <div
                      style={{
                        width: '1px',
                        flexGrow: 1,
                        backgroundColor: ds.brownLight,
                        opacity: 0.4,
                        margin: '6px 0',
                      }}
                    />
                  )}
                </div>

                {/* Right: content */}
                <div style={{ paddingBottom: item.arrow ? '32px' : 0 }}>
                  <div
                    style={{
                      fontFamily: ds.fontHeading,
                      fontSize: '1rem',
                      color: ds.brown,
                      marginBottom: '6px',
                      paddingTop: '2px',
                    }}
                  >
                    {item.node}
                  </div>
                  <p
                    style={{
                      fontFamily: ds.fontBody,
                      fontSize: '0.875rem',
                      color: ds.brownMid,
                      lineHeight: 1.9,
                      margin: 0,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Return arrow hint */}
          <div
            style={{
              marginTop: '24px',
              paddingLeft: '48px',
              fontFamily: ds.fontBody,
              fontSize: '0.8125rem',
              color: ds.brownLight,
              letterSpacing: '0.05em',
            }}
          >
            ↑ 다시 토양으로 — 순환이 계속됩니다
          </div>
        </div>
      </section>

      {/* ── 착유 → 배송 타임라인 ── */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <SectionLabel>FROM FARM TO TABLE</SectionLabel>
          <SectionTitle center>착유부터 고객 식탁까지</SectionTitle>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              {
                time: '새벽 5시',
                title: '첫 착유',
                desc: '파이프라인 밀커(폐쇄형 착유기)로 외부 공기 접촉 없이 위생적으로 착유합니다.',
                last: false,
              },
              {
                time: '착유 직후',
                title: '즉시 냉각',
                desc: '착유 완료 즉시 4℃로 냉각합니다. 냉각이 빠를수록 신선도가 유지됩니다.',
                last: false,
              },
              {
                time: '오전',
                title: '품질 검사',
                desc: '체세포 수·세균 수 검사로 품질을 확인합니다. 기준 미달 시 출하하지 않습니다.',
                last: false,
              },
              {
                time: '당일',
                title: '개별 포장',
                desc: '소량씩 개별 병입하여 신선도를 극대화합니다. 최소한의 공정, 최대한의 신선함.',
                last: false,
              },
              {
                time: '익일',
                title: '냉장 택배 출발',
                desc: '아이스팩과 함께 냉장 상태로 출발합니다. 고객의 식탁까지 차가운 고리가 끊기지 않습니다.',
                last: true,
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'clamp(80px, 12vw, 100px) 24px 1fr',
                  gap: '0 20px',
                  alignItems: 'start',
                }}
              >
                {/* Time label */}
                <div
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.75rem',
                    color: ds.brownLight,
                    letterSpacing: '0.05em',
                    textAlign: 'right',
                    paddingTop: '4px',
                    paddingBottom: item.last ? 0 : '40px',
                  }}
                >
                  {item.time}
                </div>

                {/* Dot + line */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: ds.brown,
                      flexShrink: 0,
                      marginTop: '5px',
                    }}
                  />
                  {!item.last && (
                    <div
                      style={{
                        width: '1px',
                        flexGrow: 1,
                        backgroundColor: ds.brownLight,
                        opacity: 0.3,
                        margin: '6px 0',
                        minHeight: '36px',
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div style={{ paddingBottom: item.last ? 0 : '40px' }}>
                  <h3
                    style={{
                      fontFamily: ds.fontHeading,
                      fontSize: '1rem',
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
                      lineHeight: 1.9,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 왜 저지종인가? ── */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <SectionLabel>WHY JERSEY?</SectionLabel>
          <SectionTitle>왜 저지종인가?</SectionTitle>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '32px',
            }}
          >
            {[
              {
                num: '01',
                title: '영국 저지섬 원산',
                desc: '영국 해협의 작은 섬, 저지섬에서 수백 년에 걸쳐 품종이 정착되었습니다.',
              },
              {
                num: '02',
                title: '전 세계 젖소의 5% 미만',
                desc: '홀스타인이 압도적으로 많은 현대 낙농업에서 저지종은 희귀한 존재입니다.',
              },
              {
                num: '03',
                title: '한국에는 극소수',
                desc: '국내에서 저지종을 전문적으로 기르는 목장은 손에 꼽을 정도입니다.',
              },
              {
                num: '04',
                title: '온순하고 사람을 따름',
                desc: '스트레스를 받지 않는 소가 더 좋은 우유를 만듭니다. 저지종은 특유의 순한 기질로 유명합니다.',
              },
            ].map((item) => (
              <div key={item.num}>
                <div
                  style={{
                    fontFamily: ds.fontHeading,
                    fontSize: '1.75rem',
                    color: ds.brownLight,
                    opacity: 0.5,
                    marginBottom: '16px',
                    lineHeight: 1,
                  }}
                >
                  {item.num}
                </div>
                <h3
                  style={{
                    fontFamily: ds.fontHeading,
                    fontSize: '1rem',
                    fontWeight: 400,
                    color: ds.brown,
                    margin: '0 0 10px',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.875rem',
                    color: ds.brownMid,
                    lineHeight: 1.9,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
