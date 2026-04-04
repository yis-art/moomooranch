import { useState } from 'react';

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

const faqs = [
  {
    category: '🥛 제품 문의',
    items: [
      {
        q: 'A2 우유가 뭔가요?',
        a: 'A2 우유는 A2 베타-카제인만 포함된 우유예요. 일반 우유(A1)는 소화 시 BCM-7 펩타이드가 생겨 불편함을 줄 수 있는데, A2 우유는 그렇지 않아요. 한국인 75%가 느끼는 우유 불편함, A2 우유로 해결해 보세요.',
      },
      {
        q: '왜 우유가 노란색인가요?',
        a: '착색이 아니라 100% 자연 그대로의 색이에요! 저지종은 베타카로틴을 우유로 잘 전달하고, 건초를 먹이면 베타카로틴이 더 풍부해져요. 유럽에서는 "Golden Milk"라고 부르는 프리미엄 우유의 특징입니다.',
      },
      {
        q: '유통기한은 얼마나 되나요?',
        a: '냉장 보관(0~5°C) 시 제조일로부터 10일이에요. 착유 당일 발송하니, 받으시면 최대한 신선할 때 드시는 걸 추천해요.',
      },
    ],
  },
  {
    category: '📦 배송/택배',
    items: [
      {
        q: '배송은 어떻게 되나요?',
        a: '착유 당일 또는 익일 신선 발송해요. 냉장 택배(아이스팩 동봉)로 보내드리고, 발송 시 택배 번호를 카카오톡으로 안내드려요.',
      },
      {
        q: '배송 중 파손되면 어떻게 하나요?',
        a: '수령 당일 파손 부분 사진과 함께 카카오톡으로 연락 주세요. 확인 후 즉시 재발송 또는 환불 처리해 드려요.',
      },
    ],
  },
  {
    category: '🔄 교환/환불',
    items: [
      {
        q: '환불은 어떻게 하나요?',
        a: '단순 변심은 수령 후 7일 이내 미개봉 제품만 가능해요. 제품 하자는 수령 당일 연락 주시면 바로 처리해 드려요.',
      },
      {
        q: '이물질이 있어요.',
        a: '정말 죄송합니다. 사진과 함께 즉시 카카오톡으로 연락 주세요. 확인 즉시 환불 처리해 드리고, 빠르게 대응할게요.',
      },
    ],
  },
  {
    category: '🐄 목장 방문',
    items: [
      {
        q: '목장 방문 가능한가요?',
        a: '네, 사전 예약제로 운영해요. 카카오톡이나 전화(033-552-0662)로 미리 예약해 주세요.',
      },
      {
        q: '주차 가능한가요?',
        a: '네, 무료 주차장이 있어요. 승용차 기준 10대 이상 주차 가능해요.',
      },
    ],
  },
];

export function Contact() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

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
            CONTACT
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
            문의 / 오시는 길
          </h1>
        </div>
      </section>

      {/* 연락처 카드 */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(60px, 10vh, 80px) 0' }}>
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '20px',
              marginBottom: '40px',
            }}
          >
            {/* 주소 */}
            <div style={{ backgroundColor: ds.white, padding: '24px', borderRadius: '8px' }}>
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.75rem', color: ds.brownLight, marginBottom: '8px' }}>
                📍 주소
              </p>
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.9375rem', color: ds.brown, lineHeight: 1.6 }}>
                강원특별자치도 태백시<br />
                매봉산길 61<br />
                삼수령 무무목장
              </p>
            </div>

            {/* 전화 */}
            <div style={{ backgroundColor: ds.white, padding: '24px', borderRadius: '8px' }}>
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.75rem', color: ds.brownLight, marginBottom: '8px' }}>
                📞 전화
              </p>
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.9375rem', color: ds.brown, lineHeight: 1.6 }}>
                033-552-0662<br />
                (평일 09:00 - 18:00)
              </p>
            </div>

            {/* 카카오 */}
            <div style={{ backgroundColor: ds.white, padding: '24px', borderRadius: '8px' }}>
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.75rem', color: ds.brownLight, marginBottom: '8px' }}>
                💬 카카오톡
              </p>
              <a
                href="https://pf.kakao.com/_xjVxkxjG"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
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

            {/* 스마트스토어 */}
            <div style={{ backgroundColor: ds.white, padding: '24px', borderRadius: '8px' }}>
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.75rem', color: ds.brownLight, marginBottom: '8px' }}>
                🛒 스마트스토어
              </p>
              <a
                href="https://smartstore.naver.com/moomooranch"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: '#03C75A',
                  fontFamily: ds.fontBody,
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '4px',
                }}
              >
                무무곳간
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 지도 & 교통편 */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(60px, 10vh, 80px) 0' }}>
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: '1.5rem',
              fontWeight: 400,
              color: ds.brown,
              marginBottom: '32px',
              textAlign: 'center',
            }}
          >
            오시는 길
          </h2>

          {/* 지도 */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '350px',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: ds.ivory,
              marginBottom: '16px',
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
          <div style={{ textAlign: 'right', marginBottom: '40px' }}>
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

          {/* 교통편 */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            <div style={{ backgroundColor: ds.ivory, padding: '24px', borderRadius: '8px' }}>
              <h3 style={{ fontFamily: ds.fontBody, fontSize: '1rem', fontWeight: 600, color: ds.brown, marginBottom: '16px' }}>
                🚗 자가용
              </h3>
              <ul style={{ fontFamily: ds.fontBody, fontSize: '0.875rem', color: ds.brownMid, lineHeight: 2, listStyle: 'none', padding: 0, margin: 0 }}>
                <li>• 서울 → 영동고속도로 → 중앙고속도로 → 태백IC</li>
                <li>• 태백IC에서 약 20분</li>
                <li>• 내비: "예수원" 또는 "무무목장" 검색</li>
                <li>• 무료 주차장 완비</li>
              </ul>
            </div>

            <div style={{ backgroundColor: ds.ivory, padding: '24px', borderRadius: '8px' }}>
              <h3 style={{ fontFamily: ds.fontBody, fontSize: '1rem', fontWeight: 600, color: ds.brown, marginBottom: '16px' }}>
                🚌 대중교통
              </h3>
              <ul style={{ fontFamily: ds.fontBody, fontSize: '0.875rem', color: ds.brownMid, lineHeight: 2, listStyle: 'none', padding: 0, margin: 0 }}>
                <li>• 태백시외버스터미널 하차</li>
                <li>• 혈동 방면 버스 탑승</li>
                <li>• 예수원 정류장 하차</li>
                <li>• 도보 5분</li>
              </ul>
            </div>
          </div>

          {/* 방문 안내 */}
          <div
            style={{
              backgroundColor: '#FFF9E6',
              padding: '24px',
              borderRadius: '8px',
              border: '1px solid #FFE082',
              marginTop: '32px',
            }}
          >
            <p style={{ fontFamily: ds.fontBody, fontSize: '0.9375rem', color: ds.brown, lineHeight: 1.8, margin: 0 }}>
              💡 <strong>방문 전 꼭 확인하세요!</strong><br />
              목장 체험은 사전 예약제로 운영됩니다. 카카오톡 또는 전화로 미리 예약해 주세요.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(60px, 10vh, 80px) 0' }}>
        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: '1.5rem',
              fontWeight: 400,
              color: ds.brown,
              marginBottom: '32px',
              textAlign: 'center',
            }}
          >
            자주 묻는 질문
          </h2>

          {faqs.map((category) => (
            <div key={category.category} style={{ marginBottom: '32px' }}>
              <h3
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: ds.brown,
                  marginBottom: '12px',
                  paddingBottom: '8px',
                  borderBottom: `2px solid ${ds.green}`,
                }}
              >
                {category.category}
              </h3>
              {category.items.map((item, i) => {
                const id = `${category.category}-${i}`;
                const isOpen = openIndex === id;
                return (
                  <div key={id} style={{ borderBottom: `1px solid ${ds.white}` }}>
                    <button
                      onClick={() => toggle(id)}
                      style={{
                        width: '100%',
                        padding: '16px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: '16px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span style={{ fontFamily: ds.fontBody, fontSize: '0.9375rem', fontWeight: 500, color: ds.brown, lineHeight: 1.5 }}>
                        {item.q}
                      </span>
                      <span
                        style={{
                          fontFamily: ds.fontBody,
                          fontSize: '1.25rem',
                          color: ds.brownLight,
                          transform: isOpen ? 'rotate(45deg)' : 'none',
                          transition: 'transform 0.2s',
                          flexShrink: 0,
                        }}
                      >
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div style={{ padding: '0 0 16px' }}>
                        <p
                          style={{
                            fontFamily: ds.fontBody,
                            fontSize: '0.9375rem',
                            color: ds.brownMid,
                            lineHeight: 1.9,
                            margin: 0,
                            backgroundColor: ds.white,
                            padding: '16px',
                            borderRadius: '8px',
                          }}
                        >
                          {item.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}

          {/* 추가 문의 */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <p style={{ fontFamily: ds.fontBody, fontSize: '0.9375rem', color: ds.brownMid, marginBottom: '16px' }}>
              찾으시는 답이 없으신가요? 치즈에게 편하게 물어보세요 🐄
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://pf.kakao.com/_xjVxkxjG"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '14px 28px',
                  fontFamily: ds.fontBody,
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: '#3C1E1E',
                  backgroundColor: '#FEE500',
                  textDecoration: 'none',
                  borderRadius: '4px',
                }}
              >
                💬 카카오톡 문의
              </a>
              <a
                href="tel:033-552-0662"
                style={{
                  display: 'inline-block',
                  padding: '14px 28px',
                  fontFamily: ds.fontBody,
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: ds.brown,
                  backgroundColor: ds.white,
                  textDecoration: 'none',
                  borderRadius: '4px',
                  border: `1px solid ${ds.brownLight}`,
                }}
              >
                📞 033-552-0662
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
