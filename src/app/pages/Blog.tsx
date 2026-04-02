import { useState, useEffect, useMemo } from 'react';
import { Play, MessageCircle } from 'lucide-react';

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

interface NotionPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  videoUrl: string | null;
  tags: string[];
  order: number;
  createdAt: string;
}

/* YouTube helpers */
function extractYouTubeId(url: string): string | null {
  const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortsMatch) return shortsMatch[1];
  const standardMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (standardMatch) return standardMatch[1];
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortMatch) return shortMatch[1];
  return null;
}

function isShorts(url: string): boolean {
  return url.includes('/shorts/');
}

function getYouTubeThumbnail(url: string): string | null {
  const ytId = extractYouTubeId(url);
  if (!ytId) return null;
  return `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
}

/* Tag 색상 */
const tagColors: Record<string, string> = {
  '#오늘의목장': ds.green,
  '#젖소이야기': '#5a7a8a',
  '#생태순환': '#8a6a5a',
  '#헤리티지': '#9a8a5a',
  '#제품이야기': '#8a5a6a',
};

/* 폴백 데이터 */
const fallbackPosts: NotionPost[] = [
  {
    id: 'cheese-born',
    title: '치즈가 태어났습니다 🐄',
    summary: '1월 6일, 밀크가 새끼를 낳았습니다. 우리는 그 아이를 치즈라 불렀습니다.',
    content: '1월 6일. 밀크가 새끼를 낳았습니다.\n우리는 그 아이를 \'치즈\'라 불렀습니다.\n그날은 요셉의 막내아들 생일이기도 했습니다.\n\n치즈는 아직 작습니다. 귀가 크고, 눈이 맑습니다.\n무무목장도 그렇습니다. 이제 막 시작했습니다.',
    videoUrl: 'https://youtube.com/shorts/A4zxyXdr064',
    tags: ['#오늘의목장'],
    order: 1,
    createdAt: '2026-01-06T12:00:00.000Z',
  },
  {
    id: 'high-five',
    title: '오늘도 화이팅! 하이파이브!!',
    summary: 'A2 저지종은 사람을 친근하게 여기고 머리로 하이파이브를 해줍니다.',
    content: 'A2 저지종은 다른 소들과는 달리 사람을 참 친근하게 여겨요.\n가까이 다가오면 머리로 톡— 하고 \'힘내!\' 하이파이브를 해준답니다.\n\n오늘도 화이팅!',
    videoUrl: 'https://youtube.com/shorts/7GJfYZaj3TY',
    tags: ['#오늘의목장'],
    order: 2,
    createdAt: '2026-02-15T12:00:00.000Z',
  },
  {
    id: 'cheese-sniff',
    title: '수줍은 치즈의 \'킁킁\'',
    summary: '낯가리지만 호기심 많은 송아지 치즈가 조심스럽게 다가와 인사합니다.',
    content: '송아지 \'치즈\'는 아직 낯을 많이 가려요.\n처음 보는 사람은 멀찍이서 눈으로만 살피고,\n사슴처럼 뛰어 다니다가 조금만 소리가 나도 엄마 뒤로 쏙 숨곤 해요.\n\n그래도 호기심이 많아서요.\n손에 든 건 뭐인지, 무슨 냄새가 나는지 궁금해져서\n잠깐 멈춰 서 있다가… 수줍게 한 걸음, 또 한 걸음 다가와요.',
    videoUrl: 'https://youtube.com/shorts/JU8Bkd2Kr1o',
    tags: ['#오늘의목장'],
    order: 3,
    createdAt: '2026-03-01T12:00:00.000Z',
  },
  {
    id: 'mom-and-cheese',
    title: '엄마와 치즈',
    summary: '밀크와 치즈의 평화로운 아침 목초지 산책',
    content: '오늘 아침 목초지에 나가보니 밀크랑 치즈가 나란히 풀을 뜯고 있었어요.\n이슬 맺힌 풀밭 위를 천천히 걸어가는 모습이 정말 평화롭더라고요.',
    videoUrl: 'https://youtube.com/shorts/x7fwgOMFFbM',
    tags: ['#오늘의목장'],
    order: 4,
    createdAt: '2026-03-20T12:00:00.000Z',
  },
];

const allTags = ['전체', '#오늘의목장', '#젖소이야기', '#생태순환', '#헤리티지', '#제품이야기'];

export function Blog() {
  const [posts, setPosts] = useState<NotionPost[]>(fallbackPosts);
  const [selectedTag, setSelectedTag] = useState('전체');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/notion-posts')
      .then(res => res.json())
      .then(data => {
        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts);
        }
      })
      .catch(() => { /* use fallback */ })
      .finally(() => setIsLoading(false));
  }, []);

  const featuredPost = useMemo(() =>
    posts.find(p => p.videoUrl) || posts[0],
    [posts]
  );

  const activePost = useMemo(() =>
    selectedPostId ? posts.find(p => p.id === selectedPostId) || featuredPost : featuredPost,
    [selectedPostId, posts, featuredPost]
  );

  const filteredPosts = useMemo(() => {
    const others = posts.filter(p => p.id !== activePost?.id);
    if (selectedTag === '전체') return others;
    return others.filter(p => p.tags.includes(selectedTag));
  }, [posts, selectedTag, activePost]);

  const renderVideo = (post: NotionPost) => {
    if (!post.videoUrl) return null;
    const ytId = extractYouTubeId(post.videoUrl);
    if (!ytId) return null;
    const shorts = isShorts(post.videoUrl);

    return (
      <div style={{ width: '100%', maxWidth: shorts ? '300px' : '100%', margin: '0 auto', aspectRatio: shorts ? '9/16' : '16/9' }}>
        <iframe
          src={`https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&loop=1&playlist=${ytId}`}
          style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={post.title}
        />
      </div>
    );
  };

  return (
    <main style={{ backgroundColor: ds.ivory }}>
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
          src="/images/무지개초지_저지소02.png"
          alt="치즈의 담벼락"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)' }}
        />
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <p style={{ fontFamily: ds.fontBody, fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.2em', marginBottom: '12px' }}>
            🐄 BLOG
          </p>
          <h1 style={{ fontFamily: ds.fontHeading, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 400, color: '#fff', margin: 0 }}>
            치즈의 담벼락
          </h1>
        </div>
      </section>

      {/* Featured Post */}
      {activePost && (
        <section style={{ backgroundColor: ds.white, padding: 'clamp(40px, 8vh, 60px) 0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 60px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: activePost.videoUrl ? 'minmax(200px, 1fr) 1fr' : '1fr', gap: '40px', alignItems: 'center' }}>
              {/* Video */}
              {activePost.videoUrl && (
                <div style={{ backgroundColor: '#111', borderRadius: '8px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {renderVideo(activePost)}
                </div>
              )}
              
              {/* Content */}
              <div>
                {activePost.tags.length > 0 && (
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    {activePost.tags.map(tag => (
                      <span key={tag} style={{
                        padding: '4px 12px',
                        borderRadius: '20px',
                        backgroundColor: tagColors[tag] || ds.green,
                        fontFamily: ds.fontBody,
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: '#fff',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <h2 style={{ fontFamily: ds.fontHeading, fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 400, color: ds.brown, margin: '0 0 16px', lineHeight: 1.4 }}>
                  {activePost.title}
                </h2>

                <div style={{ fontFamily: ds.fontBody, fontSize: '0.9375rem', lineHeight: 2, color: ds.brownMid, whiteSpace: 'pre-line', marginBottom: '24px' }}>
                  {activePost.content}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '16px', borderTop: `1px solid ${ds.ivory}` }}>
                  <span style={{ fontFamily: ds.fontBody, fontSize: '0.8125rem', color: ds.brownLight }}>
                    {new Date(activePost.createdAt).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <a
                    href="https://pf.kakao.com/_xjVxkxjG"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginLeft: 'auto',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      backgroundColor: '#FEE500',
                      fontFamily: ds.fontBody,
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: '#3C1E1E',
                      textDecoration: 'none',
                    }}
                  >
                    <MessageCircle size={14} />
                    치즈에게 말걸기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tag Filter */}
      <section style={{ backgroundColor: ds.ivory, padding: '32px 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 60px)' }}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '20px',
                  backgroundColor: selectedTag === tag ? (tagColors[tag] || ds.green) : ds.white,
                  border: selectedTag === tag ? 'none' : `1px solid ${ds.brownLight}`,
                  fontFamily: ds.fontBody,
                  fontSize: '0.8125rem',
                  fontWeight: selectedTag === tag ? 600 : 500,
                  color: selectedTag === tag ? '#fff' : ds.brownMid,
                  cursor: 'pointer',
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section style={{ backgroundColor: ds.ivory, padding: '0 0 clamp(60px, 10vh, 80px)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 60px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => {
                  setSelectedPostId(post.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  backgroundColor: ds.white,
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                }}
              >
                {/* Thumbnail */}
                <div style={{ position: 'relative', height: '160px', backgroundColor: '#111' }}>
                  {post.videoUrl ? (
                    <>
                      <img
                        src={getYouTubeThumbnail(post.videoUrl) || ''}
                        alt={post.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85)' }}
                      />
                      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(255,255,255,0.9)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                          <Play size={20} style={{ color: '#e53935', marginLeft: '2px' }} fill="#e53935" />
                        </div>
                      </div>
                      {isShorts(post.videoUrl) && (
                        <div style={{
                          position: 'absolute',
                          top: '8px',
                          right: '8px',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          backgroundColor: '#ff0000',
                          fontSize: '0.625rem',
                          fontWeight: 700,
                          color: '#fff',
                        }}>
                          Shorts
                        </div>
                      )}
                    </>
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: ds.ivory }}>
                      <span style={{ fontSize: '3rem' }}>🐄</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap' }}>
                    {post.tags.map(tag => (
                      <span key={tag} style={{
                        padding: '2px 8px',
                        borderRadius: '12px',
                        backgroundColor: `${tagColors[tag] || ds.green}20`,
                        fontFamily: ds.fontBody,
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        color: tagColors[tag] || ds.green,
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 style={{ fontFamily: ds.fontBody, fontSize: '1rem', fontWeight: 600, color: ds.brown, margin: '0 0 8px', lineHeight: 1.4 }}>
                    {post.title}
                  </h3>

                  <p style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.875rem',
                    color: ds.brownLight,
                    lineHeight: 1.6,
                    margin: '0 0 12px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical' as const,
                    overflow: 'hidden',
                  }}>
                    {post.summary}
                  </p>

                  <p style={{ fontFamily: ds.fontBody, fontSize: '0.75rem', color: ds.brownLight, margin: 0 }}>
                    {new Date(post.createdAt).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && !isLoading && (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <p style={{ fontFamily: ds.fontBody, fontSize: '1rem', color: ds.brownLight }}>
                아직 이 카테고리의 글이 없어요 🐄
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 치즈 가족 소개 */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(60px, 10vh, 80px) 0' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 60px)' }}>
          <h2
            style={{
              fontFamily: ds.fontHeading,
              fontSize: '1.25rem',
              fontWeight: 400,
              color: ds.brown,
              margin: '0 0 8px',
              textAlign: 'center',
            }}
          >
            치즈의 가족
          </h2>
          <p
            style={{
              fontFamily: ds.fontBody,
              fontSize: '0.875rem',
              color: ds.brownLight,
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            무무목장에 함께 사는 저지소 다섯 식구를 소개합니다
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '24px',
              textAlign: 'center',
            }}
          >
            {[
              { name: '카페', role: '무리 대장, 커피 엄마' },
              { name: '밀크', role: '치즈 엄마' },
              { name: '라떼', role: '치즈 이모' },
              { name: '커피', role: '치즈 언니' },
              { name: '치즈', role: '막내, 나! 🐄' },
            ].map((cow) => (
              <div key={cow.name}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: ds.ivory,
                    margin: '0 auto 12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                  }}
                >
                  🐄
                </div>
                <h3
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: ds.brown,
                    margin: '0 0 4px',
                  }}
                >
                  {cow.name}
                </h3>
                <p
                  style={{
                    fontFamily: ds.fontBody,
                    fontSize: '0.75rem',
                    color: ds.brownLight,
                    margin: 0,
                  }}
                >
                  {cow.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{ backgroundColor: ds.darkBrown, padding: 'clamp(60px, 10vh, 80px) 0' }}>
        <div style={{ maxWidth: '500px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 60px)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: ds.fontHeading, fontSize: '1.25rem', fontWeight: 400, color: '#fff', margin: '0 0 16px' }}>
            치즈레터 구독하기
          </h2>
          <p style={{ fontFamily: ds.fontBody, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.75)', margin: '0 0 32px', lineHeight: 1.8 }}>
            매주 목요일, 목장 소식과 이야기를 보내드려요.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="이메일 주소"
              style={{
                padding: '14px 20px',
                fontFamily: ds.fontBody,
                fontSize: '0.9375rem',
                border: 'none',
                borderRadius: '4px',
                width: '240px',
                maxWidth: '100%',
              }}
            />
            <button
              style={{
                padding: '14px 28px',
                fontFamily: ds.fontBody,
                fontSize: '0.9375rem',
                fontWeight: 600,
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
        </div>
      </section>
    </main>
  );
}
