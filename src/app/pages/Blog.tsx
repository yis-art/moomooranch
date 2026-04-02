import { Link } from 'react-router';

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

// 블로그 포스트 데이터 (노션 콘텐츠 DB 기반)
const posts = [
  {
    slug: 'mom-and-cheese',
    title: '엄마와 치즈',
    excerpt: '별이랑 구름이가 나란히 풀을 뜯는 아침이었어. 엄마 밀크 옆에 딱 붙어서 나도 같이.',
    date: '2026.03.21',
    image: '/images/무지개초지_저지소01.png',
    tags: [{ label: '#오늘의목장', color: '#4a7c59' }],
  },
  {
    slug: 'rainy-day-farm',
    title: '봄비가 내린 오늘의 무무목장',
    excerpt: '비 오는 날 우리는 외양간에서 졸았어. 빗소리가 자장가 같았거든.',
    date: '2026.03.14',
    image: '/images/무지개초지.png',
    tags: [{ label: '#오늘의목장', color: '#4a7c59' }],
  },
  {
    slug: 'manure-to-compost',
    title: '소똥이 퇴비가 되기까지',
    excerpt: '내가 싼 소똥이 어떻게 땅으로 돌아가는지 아니? 요셉 삼촌이 알려줬어.',
    date: '2026.02.28',
    image: '/images/무지개초지_저지소02.png',
    tags: [{ label: '#생태순환', color: '#7a5c3a' }],
  },
];

export function Blog() {
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
          src="/images/무지개초지_저지소02.png"
          alt="치즈의 담벼락"
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
            BLOG
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
            치즈의 담벼락
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
                margin: '0 0 24px',
              }}
            >
              안녕, 나는 치즈야. 2026년 1월 6일에 태어났어.<br />
              여기는 내 담벼락이야. 목장에서 있었던 일들,<br />
              엄마 밀크 이야기, 언니들 이야기...<br />
              가끔은 요셉 삼촌이 찍어준 영상도 올려.<br />
              천천히 구경해줘!
            </p>
            <p
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.8125rem',
                color: ds.brownLight,
                margin: 0,
                letterSpacing: '0.05em',
              }}
            >
              — 치즈 (Cheese), 무무목장 898번째 저지
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(80px, 12vh, 120px) 0' }}>
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
              gap: '60px',
            }}
          >
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1.5fr',
                  gap: '40px',
                  textDecoration: 'none',
                  alignItems: 'center',
                }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  style={{
                    width: '100%',
                    aspectRatio: '4/3',
                    objectFit: 'cover',
                    borderRadius: '4px',
                  }}
                />
                <div>
                  <div
                    style={{
                      display: 'flex',
                      gap: '8px',
                      flexWrap: 'wrap',
                      marginBottom: '12px',
                    }}
                  >
                    {post.tags.map((tag) => (
                      <span
                        key={tag.label}
                        style={{
                          fontFamily: ds.fontBody,
                          fontSize: '0.6875rem',
                          color: tag.color,
                          border: `1px solid ${tag.color}`,
                          borderRadius: '2px',
                          padding: '2px 8px',
                          letterSpacing: '0.03em',
                        }}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  <h2
                    style={{
                      fontFamily: ds.fontHeading,
                      fontSize: '1.25rem',
                      fontWeight: 400,
                      color: ds.brown,
                      margin: '0 0 12px',
                    }}
                  >
                    {post.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: ds.fontBody,
                      fontSize: '0.9375rem',
                      color: ds.brownMid,
                      lineHeight: 1.8,
                      margin: '0 0 16px',
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <p
                    style={{
                      fontFamily: ds.fontBody,
                      fontSize: '0.75rem',
                      color: ds.brownLight,
                      margin: 0,
                    }}
                  >
                    {post.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* More Stories */}
      <section style={{ backgroundColor: ds.ivory, padding: 'clamp(60px, 10vh, 80px) 0', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: ds.fontBody,
            fontSize: '0.75rem',
            color: ds.brownLight,
            letterSpacing: '0.15em',
            margin: '0 0 20px',
          }}
        >
          MORE STORIES
        </p>
        <h2
          style={{
            fontFamily: ds.fontHeading,
            fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
            fontWeight: 400,
            color: ds.brown,
            margin: '0 0 12px',
          }}
        >
          더 많은 이야기 보기
        </h2>
        <p
          style={{
            fontFamily: ds.fontBody,
            fontSize: '0.875rem',
            color: ds.brownMid,
            margin: '0 0 32px',
            lineHeight: 1.8,
          }}
        >
          치즈의 담벼락에는 더 많은 이야기들이 쌓여가고 있어.
        </p>
        <Link
          to="/blog"
          style={{
            display: 'inline-block',
            fontFamily: ds.fontBody,
            fontSize: '0.875rem',
            color: ds.brown,
            textDecoration: 'none',
            border: `1px solid ${ds.brownLight}`,
            borderRadius: '2px',
            padding: '12px 32px',
            letterSpacing: '0.05em',
          }}
        >
          전체 글 보기
        </Link>
      </section>

      {/* Newsletter CTA */}
      <section style={{ backgroundColor: ds.darkBrown, padding: 'clamp(60px, 10vh, 80px) 0', textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: ds.fontHeading,
            fontSize: '1.125rem',
            fontWeight: 400,
            color: '#fff',
            margin: '0 0 16px',
          }}
        >
          치즈레터 구독하기
        </h2>
        <p
          style={{
            fontFamily: ds.fontBody,
            fontSize: '0.875rem',
            color: 'rgba(255,255,255,0.7)',
            margin: '0 0 24px',
          }}
        >
          무무목장 소식을 이메일로 받아보세요
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            padding: '0 24px',
          }}
        >
          <input
            type="email"
            placeholder="이메일 주소"
            style={{
              padding: '12px 16px',
              fontFamily: ds.fontBody,
              fontSize: '0.875rem',
              border: 'none',
              borderRadius: '4px',
              width: '240px',
              maxWidth: '100%',
            }}
          />
          <button
            style={{
              padding: '12px 24px',
              fontFamily: ds.fontBody,
              fontSize: '0.875rem',
              fontWeight: 500,
              color: ds.darkBrown,
              backgroundColor: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            구독하기
          </button>
        </div>
      </section>
    </main>
  );
}
