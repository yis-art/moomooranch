import { Link } from 'react-router';

const milestones = [
  { year: '1953', title: '897마리의 젖소', desc: '헤이퍼 인터내셔널이 전후 한국에 젖소를 보냅니다.' },
  { year: '1965', title: '예수원 시작', desc: '대천덕 신부님과 공동체가 삼수령에서 삶의 리듬을 세웁니다.' },
  { year: '2020', title: '목장의 전환', desc: '한우 중심 구조에서 저지 젖소 기반 낙농으로 방향을 바꿉니다.' },
  { year: '2024', title: '무무목장 출발', desc: 'A2 저지 우유와 유제품 중심의 새로운 목장 모델을 시작합니다.' },
];

const products = [
  { name: 'A2 저지 목초우유', note: '소화 편한 황금빛 우유', image: '/images/milk-jersey.png' },
  { name: '오가닉 블루베리 요거트', note: '국산 유기농 블루베리', image: '/images/dairy-blueberry-yogurt.png' },
  { name: '오가닉 딸기 요거트', note: '국산 유기농 딸기', image: '/images/dairy-strawberry-yogurt.png' },
];

export function HomeRedesignConcept() {
  return (
    <main className="bg-[#0f1411] text-[#f9f2e6]">
      <section className="relative min-h-[92svh] overflow-hidden border-b border-[#bda47b33]">
        <img
          src="/images/moomoo-ranch-view.png"
          alt="삼수령 고지대 무무목장 전경"
          className="absolute inset-0 h-full w-full object-cover opacity-65"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,200,130,0.26),transparent_46%),linear-gradient(180deg,rgba(8,12,10,0.25),rgba(8,12,10,0.88))]" />

        <div className="relative z-10 mx-auto flex min-h-[92svh] w-full max-w-[1260px] flex-col justify-between px-6 pb-10 pt-24 md:px-12 md:pb-16">
          <div className="max-w-4xl">
            <p className="mb-4 inline-flex rounded-full border border-[#f9f2e652] bg-[#f9f2e614] px-4 py-2 font-body text-[12px] tracking-[0.15em]">
              MOO MOO RANCH ARCHIVE EDITION
            </p>
            <h1 className="font-heading text-[clamp(2.25rem,7vw,6rem)] leading-[1.04] tracking-[-0.02em] text-[#fff8ec]">
              897마리의 기억에서
              <br />
              오늘의 우유까지
            </h1>
            <p className="mt-6 max-w-2xl font-body text-[clamp(1rem,1.6vw,1.22rem)] leading-[1.95] text-[#f9f2e6d1]">
              해발 1,000m 삼수령의 느린 계절을 따라,
              <br className="hidden md:block" />
              A2 저지 젖소가 만드는 건강한 유제품의 이야기를 기록합니다.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { k: 'A2', v: '소화 부담 완화' },
                { k: '1,000m', v: '고지대 사육 환경' },
                { k: '60년+', v: '예수원 헤리티지' },
              ].map((item) => (
                <div key={item.k} className="rounded-2xl border border-[#e2c89b42] bg-[#f9f2e60f] p-4 backdrop-blur">
                  <p className="font-brand text-2xl text-[#ecc882]">{item.k}</p>
                  <p className="mt-2 font-body text-[14px] text-[#f9f2e6c4]">{item.v}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="inline-flex min-h-12 items-center rounded-full bg-[#ecc882] px-7 font-body text-[15px] font-semibold text-[#1f160a] transition-all hover:-translate-y-0.5 hover:bg-[#f4dca8]"
              >
                제품 보러가기
              </Link>
              <Link
                to="/about"
                className="inline-flex min-h-12 items-center rounded-full border border-[#f9f2e67d] px-7 font-body text-[15px] font-medium text-[#fff7ea] transition-colors hover:bg-[#f9f2e616]"
              >
                예수원 이야기
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7f0e3] px-6 py-24 text-[#2e200f] md:px-12 md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(to_right,rgba(46,32,15,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(46,32,15,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="relative mx-auto w-full max-w-[1220px]">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="font-body text-[12px] tracking-[0.15em] text-[#7a5830]">TIMELINE</p>
              <h2 className="mt-3 font-heading text-[clamp(1.7rem,3.4vw,2.9rem)] leading-[1.2]">
                삼수령 목장의 변곡점
              </h2>
            </div>
            <Link to="/about" className="font-body text-[15px] font-semibold text-[#5c4122] underline underline-offset-4">
              전체 역사 보기
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {milestones.map((item) => (
              <article key={item.year} className="rounded-2xl border border-[#d8cdb2] bg-white p-6 shadow-[0_8px_24px_rgba(46,32,15,0.08)]">
                <p className="font-brand text-3xl text-[#a86c1e]">{item.year}</p>
                <h3 className="mt-3 font-heading text-[1.2rem] leading-[1.3] text-[#2e200f]">{item.title}</h3>
                <p className="mt-3 font-body text-[15px] leading-[1.8] text-[#5c4122]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#171f1a] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid w-full max-w-[1220px] gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-[28px] border border-[#ecc88242] bg-[#111a14] p-8 md:p-10">
            <p className="font-body text-[12px] tracking-[0.14em] text-[#ecc882]">TASTE ARCHITECTURE</p>
            <h2 className="mt-4 font-heading text-[clamp(1.7rem,3.2vw,2.8rem)] leading-[1.2] text-[#fff7ea]">
              A2 + Jersey + Hay
              <br />
              트리플 프리미엄 구조
            </h2>
            <div className="mt-8 space-y-5">
              {[
                ['A2 단백질', 'BCM-7 생성 가능성을 낮춰 우유 섭취 후 부담을 줄입니다.'],
                ['저지 품종', '일반 젖소 대비 유지방과 풍미 밀도가 높아 맛이 진합니다.'],
                ['건초 급여', '목초 기반 사양관리로 계절별 향미와 균형감을 지킵니다.'],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-[#f9f2e620] bg-[#f9f2e60a] p-4">
                  <p className="font-heading text-[1.08rem] text-[#fff3dc]">{title}</p>
                  <p className="mt-2 font-body text-[15px] leading-[1.8] text-[#f9f2e6b8]">{desc}</p>
                </div>
              ))}
            </div>
            <Link
              to="/taste"
              className="mt-8 inline-flex min-h-12 items-center rounded-full border border-[#ecc88299] px-6 font-body text-[15px] font-semibold text-[#fff3dc] transition-colors hover:bg-[#ecc88222]"
            >
              맛의 차이 더 보기
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <img
              src="/images/rainbow-jersey-01.png"
              alt="무지개초지 저지 젖소"
              className="h-full max-h-[260px] w-full rounded-[24px] object-cover"
              loading="lazy"
            />
            <img
              src="/images/rainbow-jersey-02.png"
              alt="삼수령 저지 젖소"
              className="h-full max-h-[260px] w-full rounded-[24px] object-cover"
              loading="lazy"
            />
            <img
              src="/images/rainbow-jersey-03.png"
              alt="방목 중인 저지 젖소"
              className="h-full max-h-[260px] w-full rounded-[24px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f5ecdc] px-6 py-24 text-[#2e200f] md:px-12 md:py-28">
        <div className="mx-auto w-full max-w-[1220px]">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-body text-[12px] tracking-[0.15em] text-[#7a5830]">PRODUCTS</p>
              <h2 className="mt-3 font-heading text-[clamp(1.7rem,3.2vw,2.7rem)] leading-[1.2]">무무곳간 셀렉션</h2>
            </div>
            <Link
              to="/shop"
              className="inline-flex min-h-12 items-center rounded-full bg-[#2f4a3a] px-7 font-body text-[15px] font-semibold text-[#fff7ea] transition-colors hover:bg-[#1e3028]"
            >
              전체 제품 보기
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="group overflow-hidden rounded-[24px] border border-[#d8cdb2] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(46,32,15,0.14)]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="font-heading text-[1.2rem] text-[#2e200f]">{product.name}</h3>
                  <p className="mt-2 font-body text-[15px] leading-[1.8] text-[#5c4122]">{product.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-[#f9f2e629] px-6 py-28 md:px-12 md:py-36">
        <img
          src="/images/sea-of-clouds.png"
          alt="삼수령 운해"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121b15cc] to-[#0d130fee]" />
        <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
          <p className="font-body text-[12px] tracking-[0.14em] text-[#ecc882]">LETTER FROM THE RANCH</p>
          <h2 className="mt-4 font-heading text-[clamp(1.8rem,4.3vw,3.4rem)] leading-[1.18] text-[#fff8eb]">
            목장의 리듬을
            <br />
            매주 받아보세요
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-body text-[16px] leading-[1.9] text-[#f9f2e6c4]">
            치즈레터로 계절 소식, 생산 이야기, 구독자 전용 혜택을 전해드립니다.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/blog"
              className="inline-flex min-h-12 items-center rounded-full bg-[#ecc882] px-8 font-body text-[15px] font-semibold text-[#1f160a] transition-all hover:-translate-y-0.5 hover:bg-[#f4dca8]"
            >
              치즈레터 보러가기
            </Link>
            <Link
              to="/visit"
              className="inline-flex min-h-12 items-center rounded-full border border-[#f9f2e682] px-8 font-body text-[15px] font-medium text-[#fff8ec] transition-colors hover:bg-[#f9f2e61a]"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
