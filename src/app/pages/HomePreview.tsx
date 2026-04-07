import { Link } from 'react-router';

export function HomePreview() {
  return (
    <main className="bg-mm-cream-50 text-mm-brown-950">
      <section className="relative min-h-screen overflow-hidden" style={{ minHeight: '100svh' }}>
        <img
          src="/images/moomoo-ranch-view.png"
          alt="해발 1,000m 삼수령 무무목장 전경"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/65" />
        <div
          className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1200px] items-end px-6 pb-24 md:px-12 md:pb-32"
          style={{ minHeight: '100svh' }}
        >
          <div className="max-w-3xl">
            <span className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 font-body text-[13px] tracking-[0.12em] text-white/85">
              SAMSU-RYEONG DAIRY · A2 JERSEY
            </span>
            <h1 className="mb-6 font-heading text-[var(--text-display)] leading-[1.15] tracking-[-0.02em] text-white">
              좋은 땅과 좋은 풀로 빚는
              <br />
              건강한 A2 무무우유
            </h1>
            <p className="max-w-2xl font-body text-[var(--text-body-lg)] leading-[1.8] text-white/85">
              해발 1,000m 삼수령 예수원에서 자란 저지 젖소의 우유를
              <br className="hidden md:block" />
              착유 당일 신선하게 보내드립니다.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/shop"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-mm-gold-300 px-8 font-body text-base font-semibold text-mm-brown-900 transition-all duration-300 hover:scale-[1.02] hover:bg-mm-gold-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mm-gold-200"
              >
                제품 보러가기
              </Link>
              <Link
                to="/about"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/50 bg-transparent px-8 font-body text-base font-medium text-white transition-colors duration-300 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                무무목장 이야기
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid w-full max-w-[1100px] gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="mb-4 inline-flex rounded-full bg-mm-green-100 px-4 py-1.5 font-body text-[12px] font-semibold tracking-[0.12em] text-mm-green-900">
              ABOUT
            </span>
            <h2 className="mb-6 font-heading text-[var(--text-h2)] leading-[1.35] text-mm-brown-950">
              60년 역사의 예수원,
              <br />
              그 땅에서 시작된 목장
            </h2>
            <p className="mb-6 max-w-xl font-body text-base leading-[1.9] text-mm-brown-600">
              1965년 대천덕 신부님이 세운 예수원 공동체는 기도와 노동의 삶을 실천해 왔습니다. 무무목장은
              그 시간을 이어 저지종 젖소를 키우며 건강한 유제품을 만듭니다.
            </p>
            <Link
              to="/about"
              className="inline-flex min-h-12 items-center rounded-full border border-mm-brown-200 bg-white px-6 font-body text-[15px] font-semibold text-mm-brown-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-mm-brown-400"
            >
              자세히 보기
            </Link>
          </div>
          <img
            src="/images/child-with-jersey.jpg"
            alt="아이가 저지소와 교감하는 모습"
            className="h-full w-full rounded-3xl object-cover shadow-card"
            loading="lazy"
          />
        </div>
      </section>

      <section className="border-y border-mm-cream-300 bg-white px-6 py-24 md:px-12 md:py-28">
        <div className="mx-auto grid w-full max-w-[1100px] gap-10 md:grid-cols-3">
          {[
            { title: 'A2 단백질', desc: '소화 부담을 낮춘 저지 우유 단백질', value: '100%' },
            { title: '사육 환경', desc: '해발 1,000m 삼수령 자연 방목 중심', value: '1,000m' },
            { title: '신선도', desc: '착유 당일 냉장 발송으로 신선하게', value: '당일발송' },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-mm-cream-300 bg-mm-cream-50 p-6">
              <p className="mb-3 font-brand text-2xl text-mm-green-800">{item.value}</p>
              <h3 className="mb-2 font-heading text-[var(--text-h5)] text-mm-brown-950">{item.title}</h3>
              <p className="font-body text-[15px] leading-[1.8] text-mm-brown-600">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-mm-cream-100 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="mb-4 inline-flex rounded-full bg-mm-gold-100 px-4 py-1.5 font-body text-[12px] font-semibold tracking-[0.1em] text-mm-gold-900">
                PRODUCTS
              </span>
              <h2 className="font-heading text-[var(--text-h2)] leading-[1.35] text-mm-brown-950">무무곳간의 유제품</h2>
              <p className="mt-3 font-body text-base leading-[1.8] text-mm-brown-600">
                착유 당일 신선 발송, 냉장 택배로 안전하게 보내드립니다.
              </p>
            </div>
            <Link
              to="/shop"
              className="inline-flex min-h-12 items-center rounded-full bg-mm-green-800 px-7 font-body text-[15px] font-semibold text-white transition-all duration-300 hover:bg-mm-green-700"
            >
              전체 제품 보기
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { image: '/images/milk-jersey.png', title: 'A2 저지 목초우유', desc: '소화 편한 황금빛 우유' },
              { image: '/images/dairy-blueberry-yogurt.png', title: '오가닉 블루베리 요거트', desc: '국산 유기농 블루베리' },
              { image: '/images/dairy-strawberry-yogurt.png', title: '오가닉 딸기 요거트', desc: '국산 유기농 딸기' },
            ].map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-3xl border border-mm-cream-300 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-hover"
              >
                <img src={item.image} alt={item.title} className="aspect-[4/3] w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="mb-2 font-heading text-[var(--text-h6)] text-mm-brown-950">{item.title}</h3>
                  <p className="font-body text-[15px] leading-[1.8] text-mm-brown-600">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-center md:px-12">
        <p className="mx-auto max-w-2xl font-heading text-[var(--text-h4)] leading-[1.8] text-mm-brown-600">
          "여호와는 나의 목자시니
          <br />
          내게 부족함이 없으리로다"
        </p>
        <p className="mt-4 font-body text-[15px] text-mm-brown-400">— 시편 23:1</p>
      </section>

      <section className="relative overflow-hidden px-6 py-28 md:px-12 md:py-36">
        <img
          src="/images/sea-of-clouds.png"
          alt="삼수령 운해"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-mm-green-950/65" />
        <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
          <h2 className="font-heading text-[var(--text-h1)] leading-[1.25] text-white">
            무무목장의 이야기를
            <br />
            함께 받아보세요
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-body text-base leading-[1.9] text-white/85">
            치즈레터로 목장 소식, 계절별 우유 이야기, 구독자 전용 혜택을 전해드립니다.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/blog"
              className="inline-flex min-h-12 items-center rounded-full bg-white px-8 font-body text-base font-semibold text-mm-green-900 transition-colors duration-300 hover:bg-mm-cream-100"
            >
              치즈레터 구독하기
            </Link>
            <Link
              to="/visit"
              className="inline-flex min-h-12 items-center rounded-full border border-white/50 bg-transparent px-8 font-body text-base font-medium text-white transition-colors duration-300 hover:bg-white/10"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
