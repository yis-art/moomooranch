import { Link } from 'react-router';

// Products는 Shop으로 리다이렉트
export function Products() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f6f2',
      }}
    >
      <div style={{ textAlign: 'center', padding: '24px' }}>
        <p
          style={{
            fontFamily: '"Noto Sans KR", sans-serif',
            fontSize: '0.9375rem',
            color: '#5c4d3a',
            marginBottom: '16px',
          }}
        >
          상품 페이지로 이동합니다
        </p>
        <Link
          to="/shop"
          style={{
            fontFamily: '"Noto Sans KR", sans-serif',
            fontSize: '0.875rem',
            color: '#7a8469',
            textDecoration: 'underline',
          }}
        >
          상품안내 →
        </Link>
      </div>
    </main>
  );
}
