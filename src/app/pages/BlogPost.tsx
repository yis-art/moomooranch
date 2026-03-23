import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { CheeseAvatar } from '../components/CheeseAvatar';

interface PostDetail {
  id: string;
  title: string;
  summary: string;
  date: string;
  tag: string;
  imageUrl?: string;
  content?: string;
}

const TAG_DEFAULT_IMAGES: Record<string, string> = {
  '#오늘의목장': '/images/무지개초지.png',
  '#젖소이야기': '/images/무지개초지_저지소01.png',
  '#생태순환': '/images/무지개초지_저지소03.png',
  '#헤리티지': '/images/예수원 상징.png',
  '#제품이야기': '/images/우유_저지소.png',
  '#이벤트': '/images/우유마시는 아이.png',
};

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/posts');
        const posts: PostDetail[] = await res.json();
        const found = posts.find(p => p.id === slug || p.slug === slug);
        setPost(found || null);
      } catch {
        setPost(null);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug]);

  if (loading) {
    return (
      <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }} className="flex items-center justify-center">
        <p style={{ fontFamily: 'var(--font-korean)', color: 'var(--text-light)', fontSize: '18px' }}>
          🐄 치즈가 글을 가져오고 있어요...
        </p>
      </div>
    );
  }

  if (!post) {
    return (
      <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }} className="flex flex-col items-center justify-center gap-6">
        <p style={{ fontFamily: 'var(--font-korean)', color: 'var(--text-light)', fontSize: '18px' }}>
          글을 찾을 수 없어요 😅
        </p>
        <Link to="/blog" style={{ fontFamily: 'var(--font-korean)', color: 'var(--sage)', fontWeight: 700 }}>
          ← 목록으로
        </Link>
      </div>
    );
  }

  const displayImage = post.imageUrl || TAG_DEFAULT_IMAGES[post.tag] || '/images/무무목장 전경.png';

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      {/* 히어로 이미지 */}
      <div className="relative w-full" style={{ height: '400px' }}>
        <img
          src={displayImage}
          alt={post.title}
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.75)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.5))' }} />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-[800px] mx-auto">
          <span className="inline-block px-3 py-1 rounded-full mb-3"
            style={{ backgroundColor: 'rgba(165,214,167,0.85)', fontFamily: 'var(--font-korean)', fontSize: '13px', fontWeight: 700, color: 'white' }}>
            {post.tag}
          </span>
          <h1 style={{ fontFamily: 'var(--font-korean)', fontWeight: 800, fontSize: 'clamp(24px, 5vw, 40px)', color: 'white', lineHeight: '1.3', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
            {post.title}
          </h1>
        </div>
      </div>

      {/* 본문 */}
      <div className="max-w-[800px] mx-auto px-6 py-12">
        {/* 작성자 */}
        <div className="flex items-center gap-3 mb-8 pb-8" style={{ borderBottom: '1px solid rgba(141,110,99,0.12)' }}>
          <CheeseAvatar size="md" mood="writing" />
          <div>
            <p style={{ fontFamily: 'var(--font-korean)', fontWeight: 700, fontSize: '16px', color: 'var(--text-main)' }}>치즈</p>
            <p style={{ fontFamily: 'var(--font-korean)', fontSize: '13px', color: 'var(--text-light)' }}>{post.date} · 무무목장</p>
          </div>
          <Link to="/blog" className="ml-auto flex items-center gap-2"
            style={{ fontFamily: 'var(--font-korean)', fontSize: '14px', color: 'var(--text-light)' }}>
            <ArrowLeft size={16} />
            목록으로
          </Link>
        </div>

        {/* 본문 내용 */}
        <div style={{ fontFamily: 'var(--font-korean)', fontSize: '18px', lineHeight: '2', color: 'var(--text-main)' }}>
          {post.content
            ? post.content.split('\n').map((line, i) =>
                line.trim() === ''
                  ? <br key={i} />
                  : <p key={i} style={{ marginBottom: '8px' }}>{line}</p>
              )
            : <p style={{ color: 'var(--text-light)' }}>{post.summary}</p>
          }
        </div>

        {/* 하단 */}
        <div className="mt-16 pt-8 text-center" style={{ borderTop: '1px solid rgba(141,110,99,0.12)' }}>
          <p style={{ fontFamily: 'var(--font-korean)', fontSize: '15px', color: 'var(--text-light)', marginBottom: '16px' }}>
            이 이야기가 좋으셨나요? 무무편지를 구독하면 매주 목장 소식이 도착해요 🌿
          </p>
          <Link to="/letter" className="inline-flex items-center gap-2 px-8 py-3 rounded-full transition-transform hover:scale-105"
            style={{ backgroundColor: 'var(--sage)', color: 'white', fontFamily: 'var(--font-korean)', fontWeight: 700, fontSize: '15px' }}>
            무무편지 구독하기
          </Link>
        </div>
      </div>
    </div>
  );
}
