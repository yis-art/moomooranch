import { Link } from 'react-router';
import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/무무목장 전경.png"
          alt="삼수령 무무목장"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(10, 26, 17, 0.45)' }}
        />
      </div>

      {/* Content — 좌측 하단 정렬 (예수원 스타일) */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* 메인 카피 — 스토리형 */}
          <h1
            className="font-heading font-bold leading-tight"
            style={{
              fontSize: 'var(--text-display)',
              color: 'var(--mm-white)',
              marginBottom: 'var(--space-6)',
              letterSpacing: '-0.02em',
            }}
          >
            897마리가 이 땅에 왔습니다<br />
            그리고 치즈가 태어났습니다
          </h1>

          {/* 부제 */}
          <p
            className="font-body max-w-xl"
            style={{
              fontSize: 'var(--text-body-lg)',
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: 'var(--leading-relaxed)',
              marginBottom: 'var(--space-10)',
            }}
          >
            강원도 태백 삼수령, 예수원 공동체가 지켜온 땅에서<br />
            A2 저지 젖소의 진한 우유가 만들어집니다
          </p>

          {/* CTA 버튼 */}
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/journey"
              className="inline-flex items-center px-8 py-4 font-body font-semibold transition-all hover:opacity-90"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--mm-white)',
                borderRadius: 'var(--radius-sm)',
                fontSize: 'var(--text-body)',
              }}
            >
              순례길 시작하기
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-4 font-body font-semibold transition-all hover:bg-white/10"
              style={{
                backgroundColor: 'transparent',
                color: 'var(--mm-white)',
                border: '2px solid var(--mm-white)',
                borderRadius: 'var(--radius-sm)',
                fontSize: 'var(--text-body)',
              }}
            >
              치즈 만나러 가기
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
