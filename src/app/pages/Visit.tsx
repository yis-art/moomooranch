const ds = {
  white: '#ffffff',
  ivory: '#f8f6f2',
  brown: '#2d2518',
  brownMid: '#5c4d3a',
  brownLight: '#8a7a68',
  darkBrown: '#3d3020',
  green: '#7a8469',
  greenDark: '#2f4a3a',
  gold: '#d4983c',
  fontHeading: '"Noto Serif KR", serif',
  fontBody: '"Noto Sans KR", sans-serif',
};

const sectionLabel: React.CSSProperties = {
  fontFamily: ds.fontBody,
  fontSize: '0.6875rem',
  letterSpacing: '0.2em',
  color: ds.brownLight,
  textTransform: 'uppercase' as const,
  marginBottom: '20px',
};

const sectionTitle: React.CSSProperties = {
  fontFamily: ds.fontHeading,
  fontSize: '1.125rem',
  fontWeight: 400,
  color: ds.brown,
  margin: '0 0 32px',
};

const itemTitle: React.CSSProperties = {
  fontFamily: ds.fontBody,
  fontSize: '0.9375rem',
  fontWeight: 600,
  color: ds.brown,
  margin: '0 0 12px',
};

const itemBody: React.CSSProperties = {
  fontFamily: ds.fontBody,
  fontSize: '0.875rem',
  color: ds.brownMid,
  lineHeight: 1.9,
  margin: 0,
  paddingLeft: '16px',
  borderLeft: `2px solid ${ds.brownLight}`,
};

const INFO_CARDS = [
  {
    icon: '📍',
    label: 'ADDRESS',
    title: '주소',
    lines: ['강원특별자치도 태백시', '매봉산길 61 (황지동)', '삼수령 무무목장'],
  },
  {
    icon: '🕘',
    label: 'HOURS',
    title: '운영시간',
    lines: ['평일 · 토요일 09:00 – 17:00', '일요일 휴무 (예배일)'],
  },
  {
    icon: '📞',
    label: 'PHONE',
    title: '전화',
    lines: ['033-552-0662'],
    href: 'tel:033-552-0662',
  },
  {
    icon: '💬',
    label: 'KAKAO',
    title: '카카오채널',
    lines: ['무무목장'],
    href: 'https://pf.kakao.com/_xjVxkxjG',
  },
];

const DIRECTIONS = [
  {
    title: '자가용',
    icon: '🚗',
    items: [
      { route: '서울 → 영동고속도로 → 중앙고속도로 → 태백', time: '약 3시간' },
      { route: '부산 → 경부고속도로 → 중앙고속도로 → 태백', time: '약 4시간' },
      { route: '대전 → 중부고속도로 → 중앙고속도로 → 태백', time: '약 2시간 30분' },
    ],
    note: '내비게이션에 \'예수원\' 또는 \'무무목장\' 검색',
  },
  {
    title: '버스',
    icon: '🚌',
    items: [
      { route: '동서울터미널 → 태백터미널', time: '약 3시간' },
    ],
    note: '태백터미널 → 택시 약 20분 (약 15,000원)',
  },
  {
    title: '기차',
    icon: '🚂',
    items: [
      { route: '청량리역 → 태백역 (무궁화호)', time: '약 4시간' },
    ],
    note: '태백역 → 택시 약 20분 (약 15,000원)',
  },
];

const NOTICES = [
  {
    icon: '📋',
    title: '사전 예약 필수',
    text: '카카오채널 또는 전화로 반드시 사전 예약해 주세요. 예약 없이 방문하시면 입장이 어려울 수 있습니다.',
  },
  {
    icon: '👥',
    title: '방문객 수 제한',
    text: '동물 복지와 쾌적한 관람을 위해 하루 방문 인원을 제한합니다. 단체 방문은 사전 문의 바랍니다.',
  },
  {
    icon: '🐄',
    title: '동물 배려',
    text: '소와 염소에게 지정된 먹이만 제공해 주세요. 큰 소리나 갑작스러운 행동은 동물에게 스트레스를 줄 수 있습니다.',
  },
  {
    icon: '⛪',
    title: '공동체 공간 존중',
    text: '무무목장은 예수원 수도공동체 안에 있습니다. 공동체 일정에 따라 방문이 제한될 수 있으며, 예배 공간은 조용히 이용해 주세요.',
  },
];

export function Visit() {
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
          src="/images/축사 하늘사진.png"
          alt="오시는 길"
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
            background: 'linear-gradient(to top, rgba(45,37,24,0.6) 0%, transparent 55%)',
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
            VISIT
          </p>
          <h1
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 400,
              color: '#fff',
              margin: '0 0 12px',
            }}
          >
            오시는 길
          </h1>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.9375rem',
              color: 'rgba(255,255,255,0.65)',
              margin: 0,
              letterSpacing: '0.03em',
            }}
          >
            강원특별자치도 태백시 삼수령 · 해발 1,000m
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(60px, 10vh, 100px) 0' }}>
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <p style={sectionLabel}>INFORMATION</p>
          <h2 style={sectionTitle}>기본 정보</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
            }}
          >
            {INFO_CARDS.map(({ icon, label, title, lines, href }) => (
              <div
                key={label}
                style={{
                  backgroundColor: ds.white,
                  borderRadius: '4px',
                  border: `1px solid rgba(138,122,104,0.18)`,
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <span style={{ fontSize: '1.375rem' }}>{icon}</span>
                <p
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.6875rem',
                    letterSpacing: '0.15em',
                    color: ds.brownLight,
                    margin: 0,
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontFamily: ds.fontHeading,
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: ds.brown,
                    margin: 0,
                  }}
                >
                  {title}
                </p>
                <div>
                  {lines.map((line, i) =>
                    href && i === 0 ? (
                      <a
                        key={i}
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        style={{
                          fontFamily: ds.fontBody,
                          fontSize: '0.875rem',
                          color: ds.green,
                          textDecoration: 'none',
                          display: 'block',
                          lineHeight: 1.7,
                        }}
                      >
                        {line}
                      </a>
                    ) : (
                      <p
                        key={i}
                        style={{
                          fontFamily: ds.fontBody,
                          fontSize: '0.875rem',
                          color: ds.brownMid,
                          margin: 0,
                          lineHeight: 1.7,
                        }}
                      >
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(60px, 10vh, 100px) 0' }}>
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <p style={sectionLabel}>MAP</p>
          <h2 style={sectionTitle}>지도</h2>

          <div
            style={{
              width: '100%',
              height: '420px',
              borderRadius: '4px',
              overflow: 'hidden',
              border: `1px solid rgba(138,122,104,0.18)`,
              marginBottom: '20px',
            }}
          >
            <iframe
              src="https://maps.google.com/maps?q=강원특별자치도+태백시+매봉산길+61&z=15&output=embed"
              title="무무목장 위치"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' as const }}>
            <a
              href="https://map.naver.com/v5/search/강원특별자치도 태백시 매봉산길 61"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.8125rem',
                color: ds.white,
                backgroundColor: ds.greenDark,
                padding: '10px 22px',
                borderRadius: '2px',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}
            >
              네이버지도에서 보기
            </a>
            <a
              href="https://map.kakao.com/?q=강원특별자치도+태백시+매봉산길+61"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.8125rem',
                color: ds.brownMid,
                border: `1px solid ${ds.brownLight}`,
                padding: '10px 22px',
                borderRadius: '2px',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}
            >
              카카오맵에서 보기
            </a>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(60px, 10vh, 100px) 0' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <p style={sectionLabel}>DIRECTIONS</p>
          <h2 style={sectionTitle}>찾아오시는 방법</h2>

          <div style={{ display: 'grid', gap: '40px' }}>
            {DIRECTIONS.map(({ title, icon, items, note }) => (
              <div key={title}>
                <h3 style={{ ...itemTitle, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>{icon}</span> {title}
                </h3>
                <div style={itemBody}>
                  {items.map(({ route, time }, i) => (
                    <p key={i} style={{ margin: '0 0 6px' }}>
                      {route}&nbsp;&nbsp;
                      <span style={{ color: ds.brownLight }}>{time}</span>
                    </p>
                  ))}
                  <p style={{ margin: '8px 0 0', fontSize: '0.8125rem', color: ds.brownLight }}>
                    {note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice */}
      <section style={{ backgroundColor: ds.darkBrown, padding: 'clamp(60px, 10vh, 100px) 0' }}>
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
              fontSize: '0.6875rem',
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.4)',
              textTransform: 'uppercase' as const,
              marginBottom: '20px',
            }}
          >
            VISITOR GUIDE
          </p>
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: '1.125rem',
              fontWeight: 400,
              color: '#fff',
              margin: '0 0 36px',
            }}
          >
            방문 유의사항
          </h2>

          <div style={{ display: 'grid', gap: '0' }}>
            {NOTICES.map(({ icon, title, text }, i) => (
              <div
                key={title}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '40px 1fr',
                  gap: '20px',
                  padding: '24px 0',
                  borderBottom:
                    i < NOTICES.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  alignItems: 'start',
                }}
              >
                <span
                  style={{
                    fontSize: '1.25rem',
                    lineHeight: 1,
                    paddingTop: '2px',
                  }}
                >
                  {icon}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: ds.fontBody,
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.9)',
                      margin: '0 0 6px',
                    }}
                  >
                    {title}
                  </p>
                  <p
                    style={{
                      fontFamily: ds.fontBody,
                      fontSize: '0.875rem',
                      color: 'rgba(255,255,255,0.55)',
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: '48px',
              padding: '28px 32px',
              backgroundColor: 'rgba(255,255,255,0.06)',
              borderRadius: '4px',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              flexWrap: 'wrap' as const,
              gap: '16px',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: ds.fontHeading,
                  fontSize: '1rem',
                  color: '#fff',
                  margin: '0 0 4px',
                }}
              >
                예약 문의
              </p>
              <p
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '0.8125rem',
                  color: 'rgba(255,255,255,0.45)',
                  margin: 0,
                }}
              >
                방문 전 반드시 예약해 주세요
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' as const }}>
              <a
                href="tel:033-552-0662"
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '0.875rem',
                  color: ds.white,
                  backgroundColor: ds.green,
                  padding: '10px 24px',
                  borderRadius: '2px',
                  textDecoration: 'none',
                  letterSpacing: '0.03em',
                }}
              >
                033-552-0662
              </a>
              <a
                href="https://pf.kakao.com/_xjVxkxjG"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '0.875rem',
                  color: ds.brown,
                  backgroundColor: '#FAE300',
                  padding: '10px 24px',
                  borderRadius: '2px',
                  textDecoration: 'none',
                  letterSpacing: '0.03em',
                }}
              >
                카카오 채널
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
