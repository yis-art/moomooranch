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
        q: '왜 우유가 노란색인가요? 착색한 거 아닌가요?',
        a: '착색이 아니라 100% 자연 그대로의 색이에요! 저지종은 베타카로틴을 우유로 잘 전달하고, 건초를 먹이면 베타카로틴이 더 풍부해져요. 유럽에서는 "Golden Milk"라고 부르는 프리미엄 우유의 특징입니다.',
      },
      {
        q: '유통기한은 얼마나 되나요?',
        a: '냉장 보관(0~5°C) 시 제조일로부터 10일이에요. 착유 당일 발송하니, 받으시면 최대한 신선할 때 드시는 걸 추천해요.',
      },
      {
        q: '저지 우유는 일반 우유와 뭐가 달라요?',
        a: '저지종 우유는 유지방 5% (홀스타인 3.5%), 단백질 4% (홀스타인 3.1%), 칼슘 +15~20%로 영양이 더 농축되어 있어요. A2 유전자 비율도 60~66%로 홀스타인(26~50%)보다 높아 소화가 더 편해요.',
      },
      {
        q: '요거트 종류는 뭐가 있나요?',
        a: '현재 블루베리 요거트와 딸기 요거트를 판매하고 있어요. 둘 다 국산 유기농 과일을 사용하고, A2 저지 우유로 만들어서 소화가 편해요. 200mL, 500mL, 1L 용량으로 있어요.',
      },
    ],
  },
  {
    category: '📦 배송/택배',
    items: [
      {
        q: '배송은 어떻게 되나요?',
        a: '착유 당일 또는 익일 신선 발송해요. 냉장 택배(아이스팩 동봉)로 보내드리고, 주문량에 따라 발송일이 조정될 수 있어요. 발송 시 택배 번호를 카카오톡으로 안내드려요.',
      },
      {
        q: '배송 추적은 어떻게 하나요?',
        a: '발송 완료 시 카카오톡으로 운송장 번호를 보내드려요. 네이버 스마트스토어 주문내역에서도 확인하실 수 있어요.',
      },
      {
        q: '제주/도서산간 배송 가능한가요?',
        a: '네, 가능해요! 다만 추가 배송비가 발생하고, 신선도 유지를 위해 항공 택배로 발송해요. 도서산간 지역은 1~2일 더 소요될 수 있어요.',
      },
      {
        q: '배송 중 파손되면 어떻게 하나요?',
        a: '수령 당일 파손 부분 사진과 함께 카카오톡으로 연락 주세요. 확인 후 즉시 재발송 또는 환불 처리해 드려요. 사진이 있어야 택배사 클레임 처리가 빨라요.',
      },
    ],
  },
  {
    category: '🔄 교환/환불',
    items: [
      {
        q: '환불은 어떻게 하나요?',
        a: '단순 변심은 수령 후 7일 이내 미개봉 제품만 가능해요. 신선식품 특성상 개봉 후에는 교환/환불이 어려워요. 제품 하자는 수령 당일 연락 주시면 바로 처리해 드려요.',
      },
      {
        q: '제품이 상한 것 같아요.',
        a: '정말 죄송해요. 제품 상태 사진과 함께 카카오톡으로 바로 연락 주세요. 확인 후 즉시 재발송 또는 환불 처리해 드릴게요.',
      },
      {
        q: '주문한 제품과 다른 게 왔어요.',
        a: '불편을 드려 죄송해요. 받으신 제품 사진과 함께 주문번호를 카카오톡으로 보내주시면, 확인 후 바로 정확한 제품을 재발송해 드릴게요.',
      },
    ],
  },
  {
    category: '🛒 주문/결제',
    items: [
      {
        q: '어디서 주문하나요?',
        a: '네이버 스마트스토어 "무무곳간"에서 주문하실 수 있어요. 네이버페이, 카드결제, 무통장입금 모두 가능해요.',
      },
      {
        q: '정기구독 가능한가요?',
        a: '네! 네이버 스마트스토어에서 정기구독 설정하시면 원하시는 주기(1주/2주/4주)로 자동 배송받으실 수 있어요. 정기구독 고객님께는 별도 혜택도 드리고 있어요.',
      },
      {
        q: '정기구독 일시정지/해지는 어떻게 하나요?',
        a: '네이버 스마트스토어 > 마이페이지 > 정기구독 관리에서 직접 하실 수 있어요. 다음 결제일 3일 전까지 변경해 주셔야 적용돼요. 어려우시면 카카오톡으로 말씀해 주세요.',
      },
    ],
  },
  {
    category: '🐄 목장 방문',
    items: [
      {
        q: '목장 방문 가능한가요?',
        a: '네, 사전 예약제로 운영해요. 카카오톡이나 전화(033-552-0662)로 미리 예약해 주세요. 갑자기 방문하시면 목장 일정상 안내가 어려울 수 있어요.',
      },
      {
        q: '목장 체험 프로그램이 있나요?',
        a: '현재 정기 체험 프로그램은 준비 중이에요. 단체 방문이나 특별 체험은 별도로 문의해 주시면 조율해 드릴게요.',
      },
      {
        q: '목장 위치가 어디인가요?',
        a: '강원특별자치도 태백시 매봉산길 61, 해발 1,000m 삼수령에 있어요. 내비게이션에 "예수원" 또는 "무무목장"으로 검색하시면 돼요. 태백IC에서 약 20분 거리예요.',
      },
      {
        q: '주차 가능한가요?',
        a: '네, 무료 주차장이 있어요. 승용차 기준 10대 이상 주차 가능해요.',
      },
    ],
  },
  {
    category: '🏠 예수원/무무목장',
    items: [
      {
        q: '예수원과 무무목장은 어떤 관계인가요?',
        a: '무무목장은 예수원 공동체의 일부예요. 1965년 대천덕 신부님이 세운 예수원의 낙농 유산을 이어받아, 박요셉 목장주님과 히스기야 형제님이 저지종 젖소를 키우고 있어요.',
      },
      {
        q: '예수원 체류 프로그램도 있나요?',
        a: '예수원 체류 프로그램은 예수원에서 별도로 운영해요. jesusabbey.org에서 확인하실 수 있어요. 무무목장 방문과는 별개입니다.',
      },
      {
        q: '무무목장은 어떤 철학으로 운영되나요?',
        a: '"소를 소답게 키운다"가 무무목장의 철학이에요. 창조질서 안에서 동물복지를 실천하고, 자연의 계절 리듬을 따르며, 과잉 생산을 배제해요. 통일 농업의 씨앗이 되고자 해요.',
      },
    ],
  },
];

export function Visit() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const filteredFaqs = activeCategory
    ? faqs.filter((f) => f.category === activeCategory)
    : faqs;

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
          src="/images/barn-sky.png"
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
            VISIT & FAQ
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
            <div style={{ backgroundColor: ds.white, padding: '24px', borderRadius: '8px' }}>
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
            <div style={{ backgroundColor: ds.white, padding: '24px', borderRadius: '8px' }}>
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.75rem', color: ds.brownLight, marginBottom: '8px' }}>
                📞 전화
              </p>
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.9375rem', color: ds.brown, lineHeight: 1.6 }}>
                033-552-0662<br />
                (운영시간 내 상담)
              </p>
            </div>

            {/* 운영시간 */}
            <div style={{ backgroundColor: ds.white, padding: '24px', borderRadius: '8px' }}>
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.75rem', color: ds.brownLight, marginBottom: '8px' }}>
                🕐 운영시간
              </p>
              <p style={{ fontFamily: ds.fontBody, fontSize: '0.9375rem', color: ds.brown, lineHeight: 1.6 }}>
                평일 09:00 - 18:00<br />
                주말/공휴일 휴무
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
            <div style={{ backgroundColor: ds.white, padding: '24px', borderRadius: '8px' }}>
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

            <div style={{ backgroundColor: ds.white, padding: '24px', borderRadius: '8px' }}>
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

      {/* ── FAQ 섹션 ── */}
      <section
        style={{
          backgroundColor: ds.ivory,
          padding: 'clamp(60px, 10vh, 80px) 0 clamp(24px, 4vh, 40px)',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: ds.fontBody,
            fontSize: '0.75rem',
            color: ds.green,
            letterSpacing: '0.2em',
            marginBottom: '12px',
          }}
        >
          FAQ
        </p>
        <h2
          style={{
            fontFamily: ds.fontHeading,
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 400,
            color: ds.brown,
            margin: '0 0 8px',
          }}
        >
          자주 묻는 질문
        </h2>
        <p
          style={{
            fontFamily: ds.fontBody,
            fontSize: '0.9375rem',
            color: ds.brownMid,
          }}
        >
          궁금한 점이 있으시면 아래에서 찾아보세요
        </p>
      </section>

      {/* 카테고리 필터 */}
      <section style={{ backgroundColor: ds.white, padding: '24px 0', borderBottom: `1px solid ${ds.ivory}` }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={() => setActiveCategory(null)}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                backgroundColor: activeCategory === null ? ds.green : ds.ivory,
                border: 'none',
                fontFamily: ds.fontBody,
                fontSize: '0.8125rem',
                fontWeight: activeCategory === null ? 600 : 500,
                color: activeCategory === null ? '#fff' : ds.brownMid,
                cursor: 'pointer',
              }}
            >
              전체
            </button>
            {faqs.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  backgroundColor: activeCategory === cat.category ? ds.green : ds.ivory,
                  border: 'none',
                  fontFamily: ds.fontBody,
                  fontSize: '0.8125rem',
                  fontWeight: activeCategory === cat.category ? 600 : 500,
                  color: activeCategory === cat.category ? '#fff' : ds.brownMid,
                  cursor: 'pointer',
                }}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ 목록 */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(40px, 8vh, 60px) 0' }}>
        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          {filteredFaqs.map((category) => (
            <div key={category.category} style={{ marginBottom: '40px' }}>
              <h3
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: ds.brown,
                  marginBottom: '16px',
                  paddingBottom: '12px',
                  borderBottom: `2px solid ${ds.green}`,
                }}
              >
                {category.category}
              </h3>
              {category.items.map((item, i) => {
                const id = `${category.category}-${i}`;
                const isOpen = openIndex === id;
                return (
                  <div key={id} style={{ borderBottom: `1px solid ${ds.ivory}` }}>
                    <button
                      onClick={() => toggle(id)}
                      style={{
                        width: '100%',
                        padding: '20px 0',
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
                      <span
                        style={{
                          fontFamily: ds.fontBody,
                          fontSize: '0.9375rem',
                          fontWeight: 500,
                          color: ds.brown,
                          lineHeight: 1.5,
                        }}
                      >
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
                      <div style={{ padding: '0 0 20px' }}>
                        <p
                          style={{
                            fontFamily: ds.fontBody,
                            fontSize: '0.9375rem',
                            color: ds.brownMid,
                            lineHeight: 1.9,
                            margin: 0,
                            backgroundColor: ds.ivory,
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
        </div>
      </section>

      {/* 추가 문의 */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(40px, 8vh, 60px) 0', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: ds.fontBody,
            fontSize: '1rem',
            color: ds.brown,
            marginBottom: '8px',
          }}
        >
          찾으시는 답이 없으신가요?
        </p>
        <p
          style={{
            fontFamily: ds.fontBody,
            fontSize: '0.875rem',
            color: ds.brownMid,
            marginBottom: '24px',
          }}
        >
          치즈에게 편하게 물어보세요 🐄
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
      </section>
    </main>
  );
}
