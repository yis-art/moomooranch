import React from 'react';
import { Link } from 'react-router';
import { CheeseAvatar } from './CheeseAvatar';

interface BlogCardProps {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tag: string;
  imageUrl?: string;
  hasVideo?: boolean;
}

export function BlogCard({ slug, title, summary, date, tag, imageUrl, hasVideo = false }: BlogCardProps) {
  return (
    <Link 
      to={`/blog/${slug}`}
      className="block bg-white rounded-3xl transition-all hover:shadow-lg group"
      style={{ 
        border: '2px solid rgba(255, 204, 128, 0.1)',
        overflow: 'hidden'
      }}
    >
      {/* Header */}
      <div className="px-5 pt-5 flex items-center gap-3">
        <CheeseAvatar size="sm" mood="writing" />
        <span style={{ fontFamily: 'var(--font-korean)', fontWeight: 700, color: 'var(--text-main)', fontSize: '14px' }}>
          치즈
        </span>
        <span style={{ fontFamily: 'var(--font-korean)', color: 'var(--text-light)', fontSize: '12px' }}>
          {date}
        </span>
        <span 
          className="px-3 py-1 rounded-full ml-auto"
          style={{ 
            backgroundColor: 'rgba(165, 214, 167, 0.2)',
            fontFamily: 'var(--font-korean)',
            color: 'var(--text-main)',
            fontSize: '12px'
          }}
        >
          {tag}
        </span>
      </div>

      {/* Image */}
      {imageUrl && (
        <div className="mx-5 mt-4 rounded-2xl overflow-hidden relative" style={{ height: '208px' }}>
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {hasVideo && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div 
                className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center"
              >
                <span className="text-2xl">▶️</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <h3 
          className="mb-2 transition-colors group-hover:opacity-70"
          style={{ 
            fontFamily: 'var(--font-korean)', 
            fontWeight: 700, 
            color: 'var(--text-main)',
            fontSize: '18px',
            lineHeight: '1.4'
          }}
        >
          {title}
        </h3>
        <p 
          className="line-clamp-2"
          style={{ 
            fontFamily: 'var(--font-korean)', 
            color: 'var(--text-light)',
            fontSize: '14px',
            lineHeight: '1.6'
          }}
        >
          {summary}
        </p>
      </div>
    </Link>
  );
}
