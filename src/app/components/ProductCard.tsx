import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  emoji: string;
  subscription?: boolean;
}

export function ProductCard({ name, description, price, emoji, subscription = false }: ProductCardProps) {
  return (
    <div 
      className="bg-white rounded-3xl p-5 transition-all hover:shadow-lg"
      style={{ border: '2px solid rgba(255, 204, 128, 0.2)' }}
    >
      {/* Image Area */}
      <div 
        className="rounded-2xl flex items-center justify-center mb-4"
        style={{ 
          height: '192px',
          backgroundColor: 'rgba(255, 204, 128, 0.1)'
        }}
      >
        <span className="text-6xl">{emoji}</span>
      </div>

      {/* Content */}
      <div>
        <div className="flex items-start justify-between mb-2">
          <h3 
            className="transition-colors hover:opacity-70"
            style={{ 
              fontFamily: 'var(--font-korean)', 
              fontWeight: 700, 
              color: 'var(--text-main)',
              fontSize: '18px'
            }}
          >
            {name}
          </h3>
          {subscription && (
            <span 
              className="px-2 py-1 rounded-full text-xs"
              style={{ 
                backgroundColor: 'rgba(255, 213, 79, 0.3)',
                fontFamily: 'var(--font-korean)',
                fontWeight: 700,
                color: 'var(--text-main)',
                fontSize: '12px'
              }}
            >
              정기구독
            </span>
          )}
        </div>
        
        <p 
          className="mb-3"
          style={{ 
            fontFamily: 'var(--font-korean)', 
            color: 'var(--text-light)',
            fontSize: '14px',
            lineHeight: '1.6'
          }}
        >
          {description}
        </p>
        
        <p 
          className="mb-4"
          style={{ 
            fontFamily: 'var(--font-korean)', 
            fontWeight: 700, 
            color: 'var(--dusty-rose)',
            fontSize: '20px'
          }}
        >
          {price}
        </p>

        <button
          className="w-full rounded-full py-3 transition-all hover:scale-105"
          style={{
            backgroundColor: 'var(--pale-orange)',
            fontFamily: 'var(--font-korean)',
            fontWeight: 700,
            color: 'var(--text-main)',
            fontSize: '16px',
            minHeight: '48px'
          }}
        >
          자세히 보기
        </button>
      </div>
    </div>
  );
}
