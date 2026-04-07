import { Link } from 'react-router';

export function HomeRedesignV2() {
  return (
    <main className="rr2">
      <style>{`
        .rr2, .rr2 * { box-sizing: border-box; }
        .rr2 {
          --bg: #0f1411;
          --bg-soft: #f6efe2;
          --text-light: #fff8ec;
          --text-muted: rgba(255, 248, 236, 0.82);
          --text-dark: #2d2010;
          --text-body: #5c4122;
          --gold: #ecc882;
          --gold-soft: #f4dca8;
          --green: #2f4a3a;
          --green-deep: #1e3028;
          --line: rgba(216, 205, 178, 0.78);
          font-family: "Noto Sans KR", "Apple SD Gothic Neo", sans-serif;
          color: var(--text-light);
          background: var(--bg);
          line-height: 1.6;
        }
        .rr2 .container {
          width: min(1240px, calc(100% - 48px));
          margin: 0 auto;
        }
        .rr2 .hero {
          position: relative;
          min-height: 100svh;
          overflow: hidden;
          border-bottom: 1px solid rgba(236, 200, 130, 0.25);
        }
        .rr2 .hero img {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; opacity: 0.65;
        }
        .rr2 .hero-overlay {
          position: absolute; inset: 0;
          background:
            radial-gradient(circle at 20% 25%, rgba(236,200,130,0.3), transparent 45%),
            linear-gradient(180deg, rgba(9,14,11,0.28), rgba(9,14,11,0.9));
        }
        .rr2 .hero-inner {
          position: relative; z-index: 1;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 96px 0 64px;
        }
        .rr2 .eyebrow {
          display: inline-flex;
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,248,236,0.3);
          background: rgba(255,248,236,0.08);
          font-size: 12px;
          letter-spacing: 0.14em;
        }
        .rr2 h1, .rr2 h2, .rr2 h3, .rr2 p { margin: 0; }
        .rr2 h1 {
          margin-top: 16px;
          font-family: "Noto Serif KR", serif;
          font-size: clamp(2.2rem, 6vw, 5.8rem);
          line-height: 1.06;
          letter-spacing: -0.02em;
          color: var(--text-light);
        }
        .rr2 .hero-lead {
          margin-top: 22px;
          max-width: 760px;
          font-size: clamp(1rem, 1.5vw, 1.2rem);
          line-height: 1.9;
          color: var(--text-muted);
        }
        .rr2 .hero-bottom {
          margin-top: 38px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 18px;
          align-items: end;
        }
        .rr2 .metrics {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }
        .rr2 .metric {
          border: 1px solid rgba(236,200,130,0.28);
          background: rgba(255,248,236,0.08);
          border-radius: 16px;
          padding: 16px;
          backdrop-filter: blur(2px);
        }
        .rr2 .metric strong {
          display: block;
          font-family: "Playfair Display", "Noto Serif KR", serif;
          font-size: 1.7rem;
          color: var(--gold);
        }
        .rr2 .metric span {
          display: block;
          margin-top: 6px;
          font-size: 14px;
          color: var(--text-muted);
        }
        .rr2 .btns { display: flex; gap: 10px; flex-wrap: wrap; }
        .rr2 .btn {
          min-height: 48px;
          padding: 0 26px;
          border-radius: 999px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          font-size: 15px;
          font-weight: 700;
          transition: 0.25s ease;
        }
        .rr2 .btn-primary { background: var(--gold); color: #1f160a; }
        .rr2 .btn-primary:hover { background: var(--gold-soft); transform: translateY(-1px); }
        .rr2 .btn-ghost {
          color: var(--text-light);
          border: 1px solid rgba(255,248,236,0.5);
          background: transparent;
        }
        .rr2 .btn-ghost:hover { background: rgba(255,248,236,0.1); }

        .rr2 .section {
          padding: 96px 0;
        }
        .rr2 .light { background: var(--bg-soft); color: var(--text-dark); }
        .rr2 .light p { color: var(--text-body); }

        .rr2 .section-head small {
          display: inline-block;
          font-size: 12px;
          letter-spacing: 0.15em;
          color: #7a5830;
        }
        .rr2 .section-head h2 {
          margin-top: 12px;
          font-family: "Noto Serif KR", serif;
          font-size: clamp(1.7rem, 3vw, 2.9rem);
          line-height: 1.2;
          color: var(--text-dark);
        }

        .rr2 .timeline-grid {
          margin-top: 30px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }
        .rr2 .timeline-card {
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 22px;
          box-shadow: 0 8px 24px rgba(46, 32, 15, 0.08);
        }
        .rr2 .timeline-card .year {
          font-family: "Playfair Display", serif;
          font-size: 2rem;
          color: #a86c1e;
        }
        .rr2 .timeline-card h3 {
          margin-top: 8px;
          font-family: "Noto Serif KR", serif;
          font-size: 1.2rem;
          color: var(--text-dark);
        }
        .rr2 .timeline-card p {
          margin-top: 8px;
          font-size: 15px;
          line-height: 1.8;
        }

        .rr2 .taste {
          background: #171f1a;
          color: var(--text-light);
        }
        .rr2 .taste .wrap {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 22px;
        }
        .rr2 .taste-panel {
          border: 1px solid rgba(236, 200, 130, 0.3);
          background: #111a14;
          border-radius: 26px;
          padding: 36px;
        }
        .rr2 .taste-panel small {
          font-size: 12px;
          letter-spacing: 0.14em;
          color: var(--gold);
        }
        .rr2 .taste-panel h2 {
          margin-top: 12px;
          font-family: "Noto Serif KR", serif;
          font-size: clamp(1.7rem, 2.8vw, 2.8rem);
          line-height: 1.2;
          color: var(--text-light);
        }
        .rr2 .fact {
          margin-top: 12px;
          border: 1px solid rgba(255,248,236,0.16);
          background: rgba(255,248,236,0.06);
          border-radius: 14px;
          padding: 14px;
        }
        .rr2 .fact h3 {
          font-family: "Noto Serif KR", serif;
          font-size: 1.08rem;
          color: #fff2db;
        }
        .rr2 .fact p {
          margin-top: 6px;
          font-size: 15px;
          line-height: 1.8;
          color: rgba(255,248,236,0.8);
        }
        .rr2 .taste-images {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }
        .rr2 .taste-images img {
          width: 100%;
          height: 100%;
          max-height: 260px;
          object-fit: cover;
          border-radius: 20px;
        }
        .rr2 .taste-images img:nth-child(3) {
          grid-column: 1 / -1;
          max-height: 230px;
        }

        .rr2 .products-grid {
          margin-top: 24px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }
        .rr2 .product {
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 20px;
          overflow: hidden;
          transition: transform .28s ease, box-shadow .28s ease;
        }
        .rr2 .product:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(46,32,15,0.16); }
        .rr2 .product img { width: 100%; aspect-ratio: 4/3; object-fit: cover; display: block; }
        .rr2 .product .body { padding: 18px; }
        .rr2 .product h3 {
          font-family: "Noto Serif KR", serif;
          font-size: 1.16rem;
          color: var(--text-dark);
        }
        .rr2 .product p { margin-top: 6px; font-size: 15px; color: var(--text-body); line-height: 1.8; }

        .rr2 .cta {
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255,248,236,0.16);
        }
        .rr2 .cta img {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; opacity: 0.58;
        }
        .rr2 .cta-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(18,27,21,0.8), rgba(13,19,15,0.94));
        }
        .rr2 .cta-inner {
          position: relative; z-index: 1; text-align: center;
          padding: 120px 0;
        }
        .rr2 .cta h2 {
          margin-top: 12px;
          font-family: "Noto Serif KR", serif;
          font-size: clamp(1.9rem, 4.1vw, 3.4rem);
          line-height: 1.2;
          color: var(--text-light);
        }
        .rr2 .cta p {
          max-width: 700px;
          margin: 16px auto 0;
          font-size: 16px;
          line-height: 1.9;
          color: rgba(255,248,236,0.78);
        }

        @media (max-width: 1100px) {
          .rr2 .timeline-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .rr2 .taste .wrap { grid-template-columns: 1fr; }
        }
        @media (max-width: 860px) {
          .rr2 .hero-bottom { grid-template-columns: 1fr; }
          .rr2 .metrics { grid-template-columns: 1fr; }
          .rr2 .products-grid { grid-template-columns: 1fr; }
          .rr2 .timeline-grid { grid-template-columns: 1fr; }
          .rr2 .section { padding: 72px 0; }
          .rr2 .cta-inner { padding: 96px 0; }
          .rr2 .container { width: min(1240px, calc(100% - 28px)); }
        }
      `}</style>

      <section className="hero">
        <img src="/images/moomoo-ranch-view.png" alt="삼수령 고지대 무무목장 전경" loading="eager" />
        <div className="hero-overlay" />
        <div className="container hero-inner">
          <div>
            <span className="eyebrow">MOO MOO RANCH · ARCHIVE EDITION</span>
            <h1>
              897마리의 기억에서
              <br />
              오늘의 우유까지
            </h1>
            <p className="hero-lead">
              해발 1,000m 삼수령의 느린 계절을 따라, A2 저지 젖소가 만드는 건강한 유제품의 이야기를
              기록합니다.
            </p>
          </div>
          <div className="hero-bottom">
            <div className="metrics">
              <div className="metric"><strong>A2</strong><span>소화 부담 완화 설계</span></div>
              <div className="metric"><strong>1,000m</strong><span>고지대 사육 환경</span></div>
              <div className="metric"><strong>60년+</strong><span>예수원 헤리티지</span></div>
            </div>
            <div className="btns">
              <Link to="/shop" className="btn btn-primary">제품 보러가기</Link>
              <Link to="/about" className="btn btn-ghost">예수원 이야기</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <div className="section-head">
            <small>TIMELINE</small>
            <h2>삼수령 목장의 변곡점</h2>
          </div>
          <div className="timeline-grid">
            {[
              ['1953', '897마리의 젖소', '헤이퍼 인터내셔널이 전후 한국에 젖소를 보냅니다.'],
              ['1965', '예수원 시작', '대천덕 신부님과 공동체가 삼수령에서 삶의 리듬을 세웁니다.'],
              ['2020', '목장의 전환', '한우 중심 구조에서 저지 젖소 기반 낙농으로 방향을 바꿉니다.'],
              ['2024', '무무목장 출발', 'A2 저지 우유와 유제품 중심의 새로운 목장 모델을 시작합니다.'],
            ].map(([year, title, desc]) => (
              <article key={year} className="timeline-card">
                <div className="year">{year}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section taste">
        <div className="container wrap">
          <article className="taste-panel">
            <small>TASTE ARCHITECTURE</small>
            <h2>A2 + Jersey + Hay 트리플 프리미엄 구조</h2>
            <div className="fact">
              <h3>A2 단백질</h3>
              <p>BCM-7 생성 가능성을 낮춰 우유 섭취 후 부담을 줄입니다.</p>
            </div>
            <div className="fact">
              <h3>저지 품종</h3>
              <p>유지방과 풍미 밀도가 높아 우유 본연의 진한 맛이 살아납니다.</p>
            </div>
            <div className="fact">
              <h3>건초 급여</h3>
              <p>목초 기반 사양관리로 계절별 향미의 균형을 안정적으로 지킵니다.</p>
            </div>
            <div style={{ marginTop: 18 }}>
              <Link to="/taste" className="btn btn-ghost">맛의 차이 더 보기</Link>
            </div>
          </article>
          <div className="taste-images">
            <img src="/images/rainbow-jersey-01.png" alt="무지개초지 저지 젖소" loading="lazy" />
            <img src="/images/rainbow-jersey-02.png" alt="삼수령 저지 젖소" loading="lazy" />
            <img src="/images/rainbow-jersey-03.png" alt="방목 중인 저지 젖소" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <div className="section-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 12 }}>
            <div>
              <small>PRODUCTS</small>
              <h2>무무곳간 셀렉션</h2>
            </div>
            <Link to="/shop" className="btn" style={{ background: '#2f4a3a', color: '#fff8ec' }}>전체 제품 보기</Link>
          </div>
          <div className="products-grid">
            {[
              ['/images/milk-jersey.png', 'A2 저지 목초우유', '소화 편한 황금빛 우유'],
              ['/images/dairy-blueberry-yogurt.png', '오가닉 블루베리 요거트', '국산 유기농 블루베리'],
              ['/images/dairy-strawberry-yogurt.png', '오가닉 딸기 요거트', '국산 유기농 딸기'],
            ].map(([src, name, note]) => (
              <article key={name} className="product">
                <img src={src} alt={name} loading="lazy" />
                <div className="body">
                  <h3>{name}</h3>
                  <p>{note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <img src="/images/sea-of-clouds.png" alt="삼수령 운해" loading="lazy" />
        <div className="cta-overlay" />
        <div className="container cta-inner">
          <small className="eyebrow" style={{ borderColor: 'rgba(236,200,130,0.45)', background: 'rgba(236,200,130,0.12)' }}>
            LETTER FROM THE RANCH
          </small>
          <h2>
            목장의 리듬을
            <br />
            매주 받아보세요
          </h2>
          <p>치즈레터로 계절 소식, 생산 이야기, 구독자 전용 혜택을 전해드립니다.</p>
          <div className="btns" style={{ justifyContent: 'center', marginTop: 20 }}>
            <Link to="/blog" className="btn btn-primary">치즈레터 보러가기</Link>
            <Link to="/visit" className="btn btn-ghost">문의하기</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
