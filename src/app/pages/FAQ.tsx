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
    category: '제품안내 — 우유',
    items: [
      {
        q: 'A2 우유가 뭔가요?',
        a: 'A2 우유는 A2 베타-카제인만 포함된 우유예요. 일반 우유(A1)는 소화 시 BCM-7 펩타이드가 생겨 불편함을 줄 수 있는데, A2 우유는 그렇지 않아요. 한국인 75%가 느끼는 우유 소화 불편함을 완화해 줍니다.',
      },
      {
        q: '균질화(호모게나이즈)를 하지 않는다고 하던데, 무슨 뜻인가요?',
        a: '균질화란 우유의 지방 입자를 작게 쪼개 균일하게 섞는 가공 과정이에요. 무무목장 우유는 이 과정을 거치지 않아 지방 구조가 자연 그대로 보존돼요. 덕분에 더욱 풍부하고 진한 맛을 느끼실 수 있어요.',
      },
      {
        q: '우유 위에 크림층이 뜨는데 정상인가요?',
        a: '네, 정상이에요! 균질화를 하지 않기 때문에 냉장 보관 시 유지방이 자연스럽게 위로 분리돼요. 드시기 전에 살짝 흔들어 주시면 됩니다. 오히려 신선함의 증거예요.',
      },
      {
        q: '소비기한은 얼마나 되나요?',
        a: '냉장 보관(0~5°C) 시 제조일로부터 7일이에요. 신선 원유 특성상 가능한 빨리 드시는 것을 권장드려요.',
      },
    ],
  },
  {
    category: '제품안내 — 요거트',
    items: [
      {
        q: '요거트는 어떤 종류가 있나요?',
        a: '플레인, 블루베리, 딸기 세 가지 맛이 있어요. 플레인은 첨가물 없이 저지 원유만으로 발효한 순수한 맛이고, 블루베리와 딸기는 과일 퓨레를 더해 달콤하게 즐기실 수 있어요.',
      },
      {
        q: '요거트 영양성분은 어떻게 되나요?',
        a: '저지종 원유 특성상 일반 홀스타인 우유보다 단백질과 유지방 함량이 높아요. 정확한 영양성분 정보는 제품 라벨 또는 스마트스토어 상품 페이지에서 확인하실 수 있어요.',
      },
    ],
  },
  {
    category: '배송 안내',
    items: [
      {
        q: '배송은 얼마나 걸리나요?',
        a: '주문 후 2~3일 내 냉장 택배로 발송해 드려요. 아이스팩과 단열 포장을 동봉해 신선함을 유지해요.',
      },
      {
        q: '배송비는 얼마인가요?',
        a: '기본 배송비는 4,500원이에요. 일정 금액 이상 구매 시 무료배송 혜택이 적용될 수 있어요 (스마트스토어 기준).',
      },
      {
        q: '제주도 및 도서산간 배송 가능한가요?',
        a: '네, 가능해요. 다만 계절과 날씨에 따라 배송 방법과 추가 비용이 달라질 수 있어요. 주문 전 카카오채널로 먼저 문의해 주시면 안내해 드릴게요.',
      },
      {
        q: '배송 조회는 어떻게 하나요?',
        a: '발송 완료 후 운송장 번호를 카카오톡 또는 스마트스토어 주문 내역으로 안내해 드려요. 해당 번호로 택배사 홈페이지에서 조회하시면 됩니다.',
      },
    ],
  },
  {
    category: '정기구독',
    items: [
      {
        q: '정기구독 혜택이 있나요?',
        a: '네! 정기구독 시 정가 대비 15% 할인 혜택이 있어요. 네이버 스마트스토어에서 구독 신청하실 수 있어요.',
      },
      {
        q: '특정 달에 배송을 건너뛸 수 있나요?',
        a: '네, 가능해요. 다음 배송일 3일 전까지 카카오채널 또는 전화로 말씀해 주시면 해당 회차를 건너뛸 수 있어요.',
      },
      {
        q: '구독 주기나 수량 변경, 취소는 어떻게 하나요?',
        a: '언제든 카카오채널(https://pf.kakao.com/_xjVxkxjG) 또는 전화(033-553-3395)로 말씀해 주시면 처리해 드려요. 다음 배송일 3일 전까지 요청하셔야 해요.',
      },
    ],
  },
  {
    category: '방문 & 체험',
    items: [
      {
        q: '목장 주소가 어디인가요?',
        a: '강원특별자치도 태백시 매봉산길 61이에요. 네이버 지도 또는 카카오맵에서 "무무목장"으로 검색하시면 바로 찾으실 수 있어요.',
      },
      {
        q: '운영 시간은 어떻게 되나요?',
        a: '토요일, 일요일, 공휴일 오전 10시 ~ 오후 4시에 운영해요. 평일에는 방문이 어렵습니다.',
      },
      {
        q: '사전 예약이 꼭 필요한가요?',
        a: '네, 예약 없이는 입장이 어려워요. 방문 전 카카오채널(https://pf.kakao.com/_xjVxkxjG) 또는 전화(033-553-3395)로 꼭 예약해 주세요.',
      },
      {
        q: '반려동물 동반 가능한가요?',
        a: '아쉽게도 반려동물 동반은 불가해요. 젖소의 스트레스와 위생 관리를 위한 조치이니 양해 부탁드려요.',
      },
    ],
  },
  {
    category: '교환 & 환불',
    items: [
      {
        q: '제품에 문제가 있을 때 어떻게 하나요?',
        a: '신선식품 특성상 수령 당일 내로 연락 주셔야 해요. 사진과 함께 카카오채널(https://pf.kakao.com/_xjVxkxjG) 또는 전화(033-553-3395)로 문의해 주시면 교환 또는 환불 처리해 드려요.',
      },
      {
        q: '단순 변심으로 반품/환불이 가능한가요?',
        a: '신선식품 특성상 미개봉 상태라도 수령 후 반품은 어려워요. 구매 전 충분히 고민해 주시고, 궁금한 점은 먼저 문의해 주세요.',
      },
    ],
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <main>
      {/* Hero */}
      <section
        style={{
          backgroundColor: ds.ivory,
          padding: 'clamp(100px, 15vh, 140px) 0 clamp(40px, 6vh, 60px)',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: ds.fontBody,
            fontSize: '0.75rem',
            color: ds.green,
            letterSpacing: '0.2em',
            marginBottom: '16px',
          }}
        >
          FAQ
        </p>
        <h1
          style={{
            fontFamily: ds.fontHeading,
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 400,
            color: ds.brown,
            margin: 0,
          }}
        >
          자주 묻는 질문
        </h1>
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
          {faqs.map((category) => (
            <div key={category.category} style={{ marginBottom: '48px' }}>
              <h2
                style={{
                  fontFamily: ds.fontBody,
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: ds.green,
                  marginBottom: '16px',
                  paddingBottom: '8px',
                  borderBottom: `1px solid ${ds.ivory}`,
                }}
              >
                {category.category}
              </h2>
              {category.items.map((item, i) => {
                const id = `${category.category}-${i}`;
                const isOpen = openIndex === id;
                return (
                  <div
                    key={id}
                    style={{
                      borderBottom: `1px solid ${ds.ivory}`,
                    }}
                  >
                    <button
                      onClick={() => toggle(id)}
                      style={{
                        width: '100%',
                        padding: '20px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: ds.fontBody,
                          fontSize: '1rem',
                          fontWeight: 500,
                          color: ds.brown,
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
                          marginLeft: '16px',
                        }}
                      >
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: '0 0 20px',
                        }}
                      >
                        <p
                          style={{
                            fontFamily: ds.fontBody,
                            fontSize: '0.9375rem',
                            color: ds.brownMid,
                            lineHeight: 1.9,
                            margin: 0,
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
            fontFamily: ds.fontHeading,
            fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
            fontWeight: 400,
            color: ds.brown,
            marginBottom: '8px',
          }}
        >
          찾으시는 답이 없으신가요?
        </p>
        <p
          style={{
            fontFamily: ds.fontBody,
            fontSize: '0.9375rem',
            color: ds.brownMid,
            marginBottom: '28px',
          }}
        >
          전화나 카카오채널로 편하게 문의해 주세요.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="tel:033-553-3395"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              fontFamily: ds.fontBody,
              fontSize: '0.875rem',
              fontWeight: 600,
              color: ds.white,
              backgroundColor: ds.brown,
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            033-553-3395
          </a>
          <a
            href="https://pf.kakao.com/_xjVxkxjG"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              fontFamily: ds.fontBody,
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#3C1E1E',
              backgroundColor: '#FEE500',
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            카카오채널 문의
          </a>
          <a
            href="https://smartstore.naver.com/moomooranch"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              fontFamily: ds.fontBody,
              fontSize: '0.875rem',
              fontWeight: 600,
              color: ds.white,
              backgroundColor: '#03C75A',
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            스마트스토어 방문
          </a>
        </div>
      </section>
    </main>
  );
}
