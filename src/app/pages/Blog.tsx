import React, { useState, useEffect } from 'react';
import { BlogCard } from '../components/BlogCard';
import { fetchBlogPosts, BlogPost } from '../../lib/notion';

const tags = ['전체', '#오늘의목장', '#젖소이야기', '#생태순환', '#헤리티지', '#제품이야기'];

// 폴백 더미 데이터 (Notion 연결 전 또는 실패 시)
const fallbackPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'spring-rain-2026',
    title: '봄비가 내린 오늘의 무무목장 🌧️🐄',
    summary: '봄비가 내리는 목장의 풍경과 소들의 모습을 전해드려요.',
    date: '2026.3.20',
    tag: '#오늘의목장',
    imageUrl: '/images/무지개초지 설경.png',
    status: '발행완료',
  },
  {
    id: '2',
    slug: 'jersey-cow-introduction',
    title: '저지종 소를 소개할게요! 🐄',
    summary: '무무목장의 저지종 젖소들이 특별한 이유를 치즈가 자세히 알려드립니다.',
    date: '2026.3.17',
    tag: '#젖소이야기',
    imageUrl: '/images/무지개초지_저지소01.png',
    hasVideo: true,
    status: '발행완료',
  },
  {
    id: '3',
    slug: 'sustainable-farming',
    title: '순환하는 목장, 지속가능한 농업',
    summary: '자연과 함께하는 무무목장의 생태순환 농법을 소개합니다. 50년 전통의 지혜가 담겨있어요.',
    date: '2026.3.15',
    tag: '#생태순환',
    imageUrl: '/images/무지개초지.png',
    status: '발행완료',
  },
  {
    id: '4',
    slug: 'heritage-story',
    title: '예수원 목장 50년의 역사',
    summary: '1970년대부터 시작된 예수원 목장의 이야기. 한국 낙농업의 역사와 함께한 우리의 여정입니다.',
    date: '2026.3.10',
    tag: '#헤리티지',
    imageUrl: '/images/예수원 소개.png',
    status: '발행완료',
  },
  {
    id: '5',
    slug: 'fresh-cheese-making',
    title: '목장에서 만드는 신선한 치즈',
    summary: '매일 아침 짜낸 우유로 만드는 치즈 제조 과정을 공개합니다. 신선함 그 자체!',
    date: '2026.3.5',
    tag: '#제품이야기',
    imageUrl: '/images/유제품 소개.png',
    hasVideo: true,
    status: '발행완료',
  },
  {
    id: '6',
    slug: 'a2-milk-benefits',
    title: 'A2 우유가 특별한 이유',
    summary: '소화가 편한 A2 우유의 과학적 근거와 건강상 이점을 알기 쉽게 설명해드려요.',
    date: '2026.3.1',
    tag: '#제품이야기',
    imageUrl: '/images/우유_저지소.png',
    status: '발행완료',
  },
];

export function Blog() {
  const [selectedTag, setSelectedTag] = useState('전체');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await fetchBlogPosts();
        setPosts(data.length > 0 ? data : fallbackPosts);
      } catch {
        setPosts(fallbackPosts);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  const filteredPosts = selectedTag === '전체'
    ? posts
    : posts.filter(post => post.tag === selectedTag);

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="mb-4"
            style={{
              fontFamily: 'var(--font-korean)',
              fontWeight: 700,
              color: 'var(--text-main)',
              fontSize: 'clamp(30px, 5vw, 48px)'
            }}
          >
            📝 치즈의 담벼락
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-korean)',
              color: 'var(--text-light)',
              fontSize: '18px',
              lineHeight: '1.8'
            }}
          >
            치즈가 들려주는 무무목장 이야기
          </p>
        </div>

        {/* Tag Filter */}
        <div className="mb-12 overflow-x-auto pb-4">
          <div className="flex gap-3 min-w-max md:justify-center">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className="px-5 py-2 rounded-full transition-all whitespace-nowrap"
                style={{
                  backgroundColor: selectedTag === tag ? 'var(--golden)' : 'var(--cream)',
                  border: `2px solid ${selectedTag === tag ? 'var(--golden)' : 'rgba(141, 110, 99, 0.2)'}`,
                  fontFamily: 'var(--font-korean)',
                  fontWeight: selectedTag === tag ? 700 : 400,
                  color: 'var(--text-main)',
                  fontSize: '14px'
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-16">
            <p style={{ fontFamily: 'var(--font-korean)', color: 'var(--text-light)', fontSize: '18px' }}>
              🐄 치즈가 이야기를 가져오고 있어요...
            </p>
          </div>
        )}

        {/* Blog Cards Grid */}
        {!loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                {...post}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p style={{ fontFamily: 'var(--font-korean)', color: 'var(--text-light)', fontSize: '18px' }}>
              아직 이 카테고리의 글이 없어요 😅
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
