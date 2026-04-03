import { Link } from 'react-router';

// Contact는 FAQ로 리다이렉트
export function Contact() {
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
          문의 페이지로 이동합니다
        </p>
        <Link
          to="/faq"
          style={{
            fontFamily: '"Noto Sans KR", sans-serif',
            fontSize: '0.875rem',
            color: '#7a8469',
            textDecoration: 'underline',
          }}
        >
          자주 묻는 질문 →
        </Link>
      </div>
    </main>
  );
}
