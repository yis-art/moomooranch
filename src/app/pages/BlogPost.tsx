import { useParams, Link } from 'react-router';

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

// 블로그 포스트 데이터 (실제로는 노션 API에서 가져옴)
const postsData: Record<string, {
  title: string;
  date: string;
  category: string;
  image: string;
  content: string[];
}> = {
  'cheese-born': {
    title: '치즈가 태어났습니다 🐄',
    date: '2026-01-06',
    category: '#오늘의목장',
    image: '/images/무지개초지_저지소01.png',
    content: [
      '2026년 1월 6일, 해발 1,000m 삼수령에 새 생명이 태어났습니다.',
      '898번째 송아지. 밀크의 딸. 이름은 치즈입니다.',
      '그날은 요셉의 막내아들 생일이기도 했어요.',
      '치즈는 아직 작습니다. 귀가 크고, 눈이 맑습니다.',
      '무무목장도 그렇습니다. 이제 막 시작했습니다.',
      '앞으로 담벼락에서 목장의 일상을 전할게요. 많이 놀러 와주세요!',
    ],
  },
  'high-five': {
    title: '오늘도 화이팅! 하이파이브!!',
    date: '2026-02-15',
    category: '#오늘의목장',
    image: '/images/무지개초지_저지소02.png',
    content: [
      'A2 저지종은 다른 소들과는 달리 사람을 참 친근하게 여겨요.',
      '가까이 다가오면 머리로 톡— 하고 \'힘내!\' 하이파이브를 해준답니다.',
      '오늘도 화이팅!',
    ],
  },
  'cheese-sniff': {
    title: '수줍은 치즈의 \'킁킁\'',
    date: '2026-03-01',
    category: '#오늘의목장',
    image: '/images/무지개초지_저지소03.png',
    content: [
      '송아지 \'치즈\'는 아직 낯을 많이 가려요.',
      '처음 보는 사람은 멀찍이서 눈으로만 살피고,',
      '사슴처럼 뛰어 다니다가 조금만 소리가 나도 엄마 뒤로 쏙 숨곤 해요.',
      '그래도 호기심이 많아서요.',
      '손에 든 건 뭐인지, 무슨 냄새가 나는지 궁금해져서',
      '잠깐 멈춰 서 있다가… 수줍게 한 걸음, 또 한 걸음 다가와요.',
      '그리고는 코끝으로 \'킁킁\'— 인사하듯 조심스럽게 냄새를 맡지요.',
    ],
  },
  'mom-and-cheese': {
    title: '엄마와 치즈',
    date: '2026-03-20',
    category: '#오늘의목장',
    image: '/images/무지개초지_저지소04.png',
    content: [
      '오늘 아침 목초지에 나가보니 밀크랑 치즈가 나란히 풀을 뜯고 있었어요.',
      '이슬 맺힌 풀밭 위를 천천히 걸어가는 모습이 정말 평화롭더라고요.',
      '밀크는 항상 치즈 옆에 딱 붙어서 다녀요.',
      '목장 아침은 이렇게 고요하고 따뜻한 시간으로 시작됩니다.',
    ],
  },
};

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? postsData[slug] : null;

  if (!post) {
    return (
      <main style={{ backgroundColor: ds.ivory, minHeight: '100vh', padding: '160px 24px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: ds.fontHeading, fontSize: '1.5rem', color: ds.brown, margin: '0 0 16px' }}>
          글을 찾을 수 없어요
        </h1>
        <Link to="/blog" style={{ fontFamily: ds.fontBody, color: ds.green }}>
          담벼락으로 돌아가기
        </Link>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          height: '50vh',
          minHeight: '350px',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <img
          src={post.image}
          alt={post.title}
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
            background: 'linear-gradient(to top, rgba(45,37,24,0.7) 0%, transparent 60%)',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '700px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px) 48px',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
            <span
              style={{
                fontFamily: ds.fontBody,
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#fff',
                backgroundColor: ds.green,
                padding: '4px 10px',
                borderRadius: '4px',
              }}
            >
              {post.category}
            </span>
            <span style={{ fontFamily: ds.fontBody, fontSize: '0.8125rem', color: 'rgba(255,255,255,0.7)' }}>
              {post.date}
            </span>
          </div>
          <h1
            style={{
              fontFamily: ds.fontHeading,
              fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
              fontWeight: 400,
              color: '#fff',
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: ds.white, padding: 'clamp(60px, 10vh, 80px) 0' }}>
        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '0 clamp(24px, 6vw, 60px)',
          }}
        >
          {post.content.map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: ds.fontBody,
                fontSize: '1rem',
                color: ds.brownMid,
                lineHeight: 2.2,
                margin: '0 0 24px',
              }}
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Back Link */}
      <section style={{ backgroundColor: ds.ivory, padding: '40px 0', textAlign: 'center' }}>
        <Link
          to="/blog"
          style={{
            fontFamily: ds.fontBody,
            fontSize: '0.875rem',
            color: ds.brown,
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
          }}
        >
          ← 담벼락으로 돌아가기
        </Link>
      </section>
    </main>
  );
}
