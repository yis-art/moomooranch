import React from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

const ds = {
  ivory: '#faf7f0',
  border: '#e8dcc8',
  brown: '#9c7a52',
};

export function EmptyBarn() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      {/* Header bar */}
      <div
        style={{
          height: '60px',
          minHeight: '60px',
          backgroundColor: ds.ivory,
          borderBottom: `1px solid ${ds.border}`,
          display: 'flex',
          alignItems: 'center',
          padding: '0 1.5rem',
        }}
      >
        <Link
          to="/journey"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.375rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            color: ds.brown,
            textDecoration: 'none',
          }}
        >
          <ArrowLeft size={14} /> 순례길로 돌아가기
        </Link>
      </div>

      {/* Game iframe */}
      <iframe
        src="https://empty-barn.vercel.app"
        style={{
          width: '100%',
          height: 'calc(100vh - 60px)',
          border: 'none',
          display: 'block',
        }}
        title="EMPTY BARN"
        allow="fullscreen"
      />
    </div>
  );
}
