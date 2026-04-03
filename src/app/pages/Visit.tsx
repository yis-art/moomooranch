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

export function Visit() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          height: '50vh',
          minHeight: '350px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src="/images/축사 하늘사진.png"
          alt="무무목장 축사"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.5)',
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

      {/* 기본 정보 */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(60px, 10vh, 80px) 0' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
              marginBottom: '40px',
            }}
          >
            {/* 주소 */}
            <div
              style={{
                backgroundColor: ds.white,
                padding: '24px',
                borderRadius: '8px',
              }}
            >
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.75rem', color: ds.brownLight, marginBottom: '8px' }}>
                📍 주소
              </p>
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.9375rem', color: ds.brown, lineHeight: 1.6 }}>
                강원특별자치도 태백시<br />
                매봉산길 61 (황지동)<br />
                삼수령 무무목장
              </p>
            </div>

            {/* 전화 */}
            <div
              style={{
                backgroundColor: ds.white,
                padding: '24px',
                borderRadius: '8px',
              }}
            >
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.75rem', color: ds.brownLight, marginBottom: '8px' }}>
                📞 전화
              </p>
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.9375rem', color: ds.brown, lineHeight: 1.6 }}>
                033-552-0662<br />
                (운영시간 내 상담)
              </p>
            </div>

            {/* 운영시간 */}
            <div
              style={{
                backgroundColor: ds.white,
                padding: '24px',
                borderRadius: '8px',
              }}
            >
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.75rem', color: ds.brownLight, marginBottom: '8px' }}>
                🕐 운영시간
              </p>
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.9375rem', color: ds.brown, lineHeight: 1.6 }}>
                평일 09:00 - 18:00<br />
                주말/공휴일 휴무
              </p>
            </div>

            {/* 카카오 */}
            <div
              style={{
                backgroundColor: ds.white,
                padding: '24px',
                borderRadius: '8px',
              }}
            >
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.75rem', color: ds.brownLight, marginBottom: '8px' }}>
                💬 카카오톡
              </p>
              <a
                href="https://pf.kakao.com/_xjVxkxjG"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  backgroundColor: '#FEE500',
                  fontFamily: ds.fontBody,
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#3C1E1E',
                  textDecoration: 'none',
                  borderRadius: '4px',
                }}
              >
                채널 추가하기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 지도 */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(40px, 8vh, 60px) 0' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '400px',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: ds.ivory,
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.5!2d128.9535!3d37.0945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3561a3c1e1e1e1e1%3A0x1234567890abcdef!2z7JiI7IiY7JuQ!5e0!3m2!1sko!2skr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="무무목장 위치"
            />
          </div>
          <div style={{ marginTop: '16px', textAlign: 'right' }}>
            <a
              href="https://map.naver.com/p/search/%EA%B0%95%EC%9B%90%EB%8F%84%20%ED%83%9C%EB%B0%B1%EC%8B%9C%20%ED%98%88%EB%8F%99%20%EC%82%BC%EC%88%98%EB%A0%B9%EA%B8%B8%20168"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.875rem',
                color: ds.green,
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
              }}
            >
              네이버 지도에서 보기 →
            </a>
          </div>
        </div>
      </section>

      {/* 교통편 */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(60px, 10vh, 80px) 0' }}>
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
              marginBottom: '32px',
            }}
          >
            찾아오시는 길
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {/* 자가용 */}
            <div
              style={{
                backgroundColor: ds.white,
                padding: '24px',
                borderRadius: '8px',
              }}
            >
              <h3 style={{ fontFamily: ds.fontBody, fontSize: '1rem', fontWeight: 600, color: ds.brown, marginBottom: '16px' }}>
                🚗 자가용
              </h3>
              <ul
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '0.875rem',
                  color: ds.brownMid,
                  lineHeight: 2,
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                }}
              >
                <li>• 서울 → 영동고속도로 → 중앙고속도로 → 태백IC</li>
                <li>• 태백IC에서 약 20분</li>
                <li>• 내비: "예수원" 또는 "무무목장" 검색</li>
                <li>• 주차장 완비</li>
              </ul>
            </div>

            {/* 대중교통 */}
            <div
              style={{
                backgroundColor: ds.white,
                padding: '24px',
                borderRadius: '8px',
              }}
            >
              <h3 style={{ fontFamily: ds.fontBody, fontSize: '1rem', fontWeight: 600, color: ds.brown, marginBottom: '16px' }}>
                🚌 대중교통
              </h3>
              <ul
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '0.875rem',
                  color: ds.brownMid,
                  lineHeight: 2,
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                }}
              >
                <li>• 태백시외버스터미널 하차</li>
                <li>• 혈동 방면 버스 탑승</li>
                <li>• 예수원 정류장 하차</li>
                <li>• 도보 5분</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 방문 안내 */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(40px, 8vh, 60px) 0' }}>
        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFF9E6',
              padding: '24px',
              borderRadius: '8px',
              border: '1px solid #FFE082',
            }}
          >
            <p
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.9375rem',
                color: ds.brown,
                lineHeight: 1.8,
              }}
            >
              💡 <strong>방문 전 꼭 확인하세요!</strong><br />
              목장 체험은 사전 예약제로 운영됩니다.<br />
              카카오톡 또는 전화로 미리 예약해 주세요.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
