import React, { useState } from 'react';
import { BlogCard } from '../components/BlogCard';

const tags = ['전체', '#오늘의목장', '#젖소이야기', '#생태순환', '#헤리티지', '#제품이야기'];

const blogPosts = [
  {
    slug: 'spring-rain-2026',
    title: '봄비가 내린 오늘의 무무목장 🌧️🐄',
    summary: '봄비가 내리는 목장의 풍경과 소들의 모습을 전해드려요. 비가 오면 더 싱그러운 목장의 이야기입니다.',
    date: '2026.3.20',
    tag: '#오늘의목장',
    imageUrl: 'https://lh3.googleusercontent.com/d/14OkjP0O7_u-oBD6NQGKsE5mdDPsgrBHU'
  },
  {
    slug: 'jersey-cow-introduction',
    title: '저지종 소를 소개할게요! 🐄',
    summary: '무무목장의 저지종 젖소들이 특별한 이유를 치즈가 자세히 알려드립니다. A2 우유의 비밀도 공개해요!',
    date: '2026.3.17',
    tag: '#젖소이야기',
    imageUrl: 'https://lh3.googleusercontent.com/d/1_oAs95u0Xrfp--l6kvipLh_IK3mVo2Ph',
    hasVideo: true
  },
  {
    slug: 'sustainable-farming',
    title: '순환하는 목장, 지속가능한 농업',
    summary: '자연과 함께하는 무무목장의 생태순환 농법을 소개합니다. 50년 전통의 지혜가 담겨있어요.',
    date: '2026.3.15',
    tag: '#생태순환',
    imageUrl: 'https://lh3.googleusercontent.com/d/1IdZjxnG3N4pgBDgUhvzBElD2Qm5vonoP'
  },
  {
    slug: 'heritage-story',
    title: '예수원 목장 50년의 역사',
    summary: '1970년대부터 시작된 예수원 목장의 이야기. 한국 낙농업의 역사와 함께한 우리의 여정입니다.',
    date: '2026.3.10',
    tag: '#헤리티지',
    imageUrl: 'https://lh3.googleusercontent.com/d/1etQjErXiZni_Zdd0dc0fROQOJ50hVXl4'
  },
  {
    slug: 'fresh-cheese-making',
    title: '목장에서 만드는 신선한 치즈',
    summary: '매일 아침 짜낸 우유로 만드는 치즈 제조 과정을 공개합니다. 신선함 그 자체!',
    date: '2026.3.5',
    tag: '#제품이야기',
    imageUrl: 'https://lh3.googleusercontent.com/d/1hEWltJ0cdPMknNnd9Qmy8TmL8P58Xl97',
    hasVideo: true
  },
  {
    slug: 'a2-milk-benefits',
    title: 'A2 우유가 특별한 이유',
    summary: '소화가 편한 A2 우유의 과학적 근거와 건강상 이점을 알기 쉽게 설명해드려요.',
    date: '2026.3.1',
    tag: '#제품이야기',
    imageUrl: 'https://lh3.googleusercontent.com/d/182aLJb-JEGxOD3CWEiAf1FcsQ6skBDRy'
  }
];

export function Blog() {
  const [selectedTag, setSelectedTag] = useState('전체');

  const filteredPosts = selectedTag === '전체' 
    ? blogPosts 
    : blogPosts.filter(post => post.tag === selectedTag);

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

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard
              key={post.slug}
              {...post}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
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
