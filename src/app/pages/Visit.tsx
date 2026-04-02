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
            VISIT
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
            오시는 길
          </h1>
        </div>
      </section>

      {/* Address */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <p style={sectionLabel}>ADDRESS</p>
          <div style={{ display: 'flex', gap: '40px' }}>
            <div style={{ width: '2px', backgroundColor: ds.brownLight, flexShrink: 0 }} />
            <div>
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
                강원특별자치도 태백시 매봉산길 61
              </p>
              <p
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '0.9375rem',
                  color: ds.brownMid,
                  marginTop: '12px',
                  marginBottom: '24px',
                }}
              >
                해발 1,000m 삼수령 · 예수원 공동체
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' as const }}>
                <a
                  href="https://map.naver.com/v5/search/강원특별자치도 태백시 매봉산길 61"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.8125rem',
                    color: ds.green,
                    border: `1px solid ${ds.green}`,
                    padding: '8px 20px',
                    borderRadius: '2px',
                    textDecoration: 'none',
                    letterSpacing: '0.05em',
                  }}
                >
                  네이버지도
                </a>
                <a
                  href="https://map.kakao.com/link/search/태백시 매봉산길 61"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.8125rem',
                    color: ds.brownMid,
                    border: `1px solid ${ds.brownLight}`,
                    padding: '8px 20px',
                    borderRadius: '2px',
                    textDecoration: 'none',
                    letterSpacing: '0.05em',
                  }}
                >
                  카카오맵
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section style={{ backgroundColor: ds.white }}>
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: 'clamp(40px, 8vh, 60px) clamp(24px, 6vw, 60px)',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '400px',
              backgroundColor: ds.ivory,
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '0.875rem',
                  color: ds.brownLight,
                  marginBottom: '8px',
                }}
              >
                강원특별자치도 태백시 매봉산길 61
              </p>
              <p
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '0.8125rem',
                  color: ds.brownLight,
                  marginBottom: '20px',
                }}
              >
                (예수원 · 무무목장)
              </p>
              <a
                href="https://map.naver.com/v5/search/강원특별자치도 태백시 매봉산길 61"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '0.875rem',
                  color: ds.green,
                  textDecoration: 'underline',
                }}
              >
                네이버 지도에서 크게 보기 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section style={{ backgroundColor: ds.white, padding: '0 0 clamp(80px, 12vh, 120px)' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <p style={sectionLabel}>DIRECTIONS</p>
          <h2 style={sectionTitle}>교통편</h2>

          <div style={{ display: 'grid', gap: '40px' }}>
            {/* 자가용 */}
            <div>
              <h3 style={itemTitle}>자가용</h3>
              <div style={itemBody}>
                <p style={{ margin: '0 0 6px' }}>서울 → 영동고속도로 → 중앙고속도로 → 태백 &nbsp;<span style={{ color: ds.brownLight }}>약 3시간</span></p>
                <p style={{ margin: '0 0 6px' }}>부산 → 경부고속도로 → 중앙고속도로 → 태백 &nbsp;<span style={{ color: ds.brownLight }}>약 4시간</span></p>
                <p style={{ margin: '0 0 12px' }}>대전 → 중부고속도로 → 중앙고속도로 → 태백 &nbsp;<span style={{ color: ds.brownLight }}>약 2시간 30분</span></p>
                <p style={{ margin: 0, fontSize: '0.8125rem', color: ds.brownLight }}>
                  내비게이션에 <strong style={{ color: ds.brownMid }}>'예수원'</strong> 또는 <strong style={{ color: ds.brownMid }}>'무무목장'</strong> 검색
                </p>
              </div>
            </div>

            {/* 대중교통 */}
            <div>
              <h3 style={itemTitle}>버스</h3>
              <div style={itemBody}>
                <p style={{ margin: '0 0 6px' }}>동서울터미널 → 태백터미널 &nbsp;<span style={{ color: ds.brownLight }}>약 3시간</span></p>
                <p style={{ margin: 0, fontSize: '0.8125rem', color: ds.brownLight }}>
                  태백터미널 → 택시 약 20분 (약 15,000원)
                </p>
              </div>
            </div>

            {/* 기차 */}
            <div>
              <h3 style={itemTitle}>기차</h3>
              <div style={itemBody}>
                <p style={{ margin: '0 0 6px' }}>청량리역 → 태백역 &nbsp;<span style={{ color: ds.brownLight }}>무궁화호 약 4시간</span></p>
                <p style={{ margin: 0, fontSize: '0.8125rem', color: ds.brownLight }}>
                  태백역 → 택시 약 20분 (약 15,000원)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(80px, 12vh, 120px) 0' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <p style={sectionLabel}>CONTACT</p>
          <h2 style={sectionTitle}>연락처</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            <div>
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.75rem', color: ds.brownLight, letterSpacing: '0.1em', margin: '0 0 8px' }}>손님부</p>
              <p style={{ fontFamily: ds.fontHeading, fontSize: '1.25rem', color: ds.brown, margin: 0 }}>033-552-0662</p>
            </div>
            <div>
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.75rem', color: ds.brownLight, letterSpacing: '0.1em', margin: '0 0 8px' }}>사무부</p>
              <p style={{ fontFamily: ds.fontHeading, fontSize: '1.25rem', color: ds.brown, margin: 0 }}>033-552-0633</p>
            </div>
            <div>
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.75rem', color: ds.brownLight, letterSpacing: '0.1em', margin: '0 0 8px' }}>카카오채널</p>
              <p style={{ fontFamily: ds.fontHeading, fontSize: '1.25rem', color: ds.brown, margin: 0 }}>무무목장</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Guide */}
      <section style={{ backgroundColor: ds.darkBrown, padding: 'clamp(60px, 10vh, 80px) 0' }}>
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
              margin: '0 0 32px',
            }}
          >
            방문 안내
          </h2>

          <div style={{ display: 'grid', gap: '20px' }}>
            {[
              { label: '사전 예약', text: '카카오채널 또는 전화로 사전 예약 필수' },
              { label: '방문객 수', text: '동물 복지를 위해 하루 방문객 수를 제한합니다' },
              { label: '운영 시간', text: '09:00 ~ 17:00' },
              { label: '정기 휴무', text: '매주 일요일 (예배 및 공동체 휴식일)' },
            ].map(({ label, text }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  gap: '24px',
                  paddingBottom: '20px',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <span
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.8125rem',
                    color: 'rgba(255,255,255,0.45)',
                    minWidth: '72px',
                    flexShrink: 0,
                    paddingTop: '2px',
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.9375rem',
                    color: 'rgba(255,255,255,0.85)',
                    lineHeight: 1.7,
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.8125rem',
              color: 'rgba(255,255,255,0.4)',
              marginTop: '32px',
              lineHeight: 1.8,
            }}
          >
            무무목장은 예수원 수도공동체 안에 있습니다.<br />
            공동체 일정에 따라 방문이 제한될 수 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
