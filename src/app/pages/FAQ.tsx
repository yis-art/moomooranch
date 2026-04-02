import { useState } from 'react';

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

const faqs = [
  {
    category: '제품',
    items: [
      {
        q: 'A2 우유가 일반 우유와 뭐가 다른가요?',
        a: 'A2 베타-카제인만 포함되어 소화가 훨씬 편합니다. 우유 마시면 배가 아프거나 더부룩했던 분들도 편하게 드실 수 있어요. 저지종은 A2 유전자 비율이 거의 100%입니다.',
      },
      {
        q: '왜 황금빛인가요?',
        a: '저지종 젖소의 우유는 베타카로틴이 풍부해서 자연스럽게 황금빛을 띱니다. 착색료가 아닌 자연 그대로의 색깔이에요.',
      },
      {
        q: '유통기한은 얼마나 되나요?',
        a: '제조일로부터 10일입니다. 저온살균(LTLT) 방식으로 영양소를 최대한 보존하면서 신선하게 드실 수 있습니다.',
      },
      {
        q: '우유 위에 노란 크림층이 생기는데 괜찮은 건가요?',
        a: '네, 정상입니다! 저지 우유는 지방구가 작아서 자연스럽게 크림층이 분리됩니다. 흔들어서 드시거나, 떠서 버터처럼 사용하셔도 좋아요.',
      },
    ],
  },
  {
    category: '배송',
    items: [
      {
        q: '배송은 얼마나 걸리나요?',
        a: '착유 당일 또는 익일 발송하며, 보통 발송 후 1~2일 내 도착합니다. 신선도 유지를 위해 아이스팩과 함께 냉장 택배로 보내드립니다.',
      },
      {
        q: '배송비는 얼마인가요?',
        a: '기본 배송비 3,500원이며, 50,000원 이상 구매 시 무료배송입니다. 제주/도서산간은 추가 배송비가 발생합니다.',
      },
      {
        q: '배송 중 파손되면 어떻게 하나요?',
        a: '사진과 함께 카카오채널로 연락주시면 100% 교환 또는 환불해드립니다.',
      },
    ],
  },
  {
    category: '목장',
    items: [
      {
        q: '목장 방문이 가능한가요?',
        a: '네, 사전 예약 시 방문 가능합니다. 카카오채널로 희망 날짜를 말씀해주시면 일정을 조율해드려요. 단, 동물 복지를 위해 하루 방문객 수를 제한하고 있습니다.',
      },
      {
        q: '예수원과 무무목장은 무슨 관계인가요?',
        a: '무무목장은 예수원 공동체의 낙농 사업입니다. 1965년부터 60년간 기도와 노동으로 가꿔온 삼수령 땅에서 저지 젖소를 키우고 있습니다.',
      },
      {
        q: '치즈는 누구인가요?',
        a: '2026년 1월 6일 무무목장에서 태어난 저지 송아지예요. 밀크의 딸이고, 치즈의 담벼락과 치즈레터의 마스코트입니다 🐄',
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
          backgroundColor: ds.darkBrown,
          padding: 'clamp(120px, 18vh, 180px) 0 clamp(60px, 10vh, 80px)',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: ds.fontBody,
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.6)',
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
            color: '#fff',
            margin: 0,
          }}
        >
          자주 묻는 질문
        </h1>
      </section>

      {/* FAQ List */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(60px, 10vh, 80px) 0' }}>
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          {faqs.map((category, ci) => (
            <div key={ci} style={{ marginBottom: ci < faqs.length - 1 ? '60px' : 0 }}>
              <h2
                style={{
                  fontFamily: ds.fontHeading,
                  fontSize: '1.125rem',
                  fontWeight: 400,
                  color: ds.brown,
                  margin: '0 0 24px',
                  paddingBottom: '12px',
                  borderBottom: `1px solid ${ds.brownLight}`,
                }}
              >
                {category.category}
              </h2>

              {category.items.map((item, i) => {
                const id = `${ci}-${i}`;
                const isOpen = openIndex === id;

                return (
                  <div
                    key={i}
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
                          fontSize: '0.9375rem',
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
                        }}
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        style={{
                          padding: '0 0 20px 20px',
                          borderLeft: `2px solid ${ds.brownLight}`,
                          marginLeft: '0',
                        }}
                      >
                        <p
                          style={{
                            fontFamily: ds.fontBody,
                            fontSize: '0.875rem',
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

      {/* Contact CTA */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(60px, 10vh, 80px) 0', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: ds.fontBody,
            fontSize: '0.75rem',
            color: ds.brownLight,
            letterSpacing: '0.15em',
            marginBottom: '16px',
          }}
        >
          CONTACT
        </p>
        <h2
          style={{
            fontFamily: ds.fontHeading,
            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
            fontWeight: 400,
            color: ds.brown,
            margin: '0 0 12px',
          }}
        >
          더 궁금한 점이 있으신가요?
        </h2>
        <p
          style={{
            fontFamily: ds.fontBody,
            fontSize: '0.9rem',
            color: ds.brownMid,
            marginBottom: '32px',
            lineHeight: 1.8,
          }}
        >
          목록에 없는 질문이 있다면 카카오채널로 편하게 물어보세요.<br />
          평일 9:00–18:00 운영합니다.
        </p>
        <a
          href="https://pf.kakao.com/_xjVxkxjG"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            backgroundColor: '#FEE500',
            color: '#3C1E1E',
            fontFamily: ds.fontBody,
            fontSize: '0.9375rem',
            fontWeight: 700,
            padding: '14px 36px',
            borderRadius: '4px',
            textDecoration: 'none',
            letterSpacing: '0.03em',
          }}
        >
          카카오채널로 문의하기
        </a>
      </section>
    </main>
  );
}
