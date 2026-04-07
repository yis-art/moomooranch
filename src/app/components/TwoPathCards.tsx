import { Link } from 'react-router';
import { motion } from 'motion/react';

export function TwoPathCards() {
  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* 순례길 카드 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/journey" className="block group">
              <div
                className="overflow-hidden mb-6"
                style={{ borderRadius: 'var(--radius-sm)' }}
              >
                <img
                  src="/images/moomoo-ranch-view.png"
                  alt="디지털 순례길"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3
                className="font-heading font-bold mb-2"
                style={{ fontSize: 'var(--text-h3)', color: 'var(--color-text-dark)' }}
              >
                순례길
              </h3>
              <p
                className="font-body mb-4"
                style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-medium)' }}
              >
                897마리의 흔적을 따라가세요
              </p>
              <span
                className="font-body font-medium"
                style={{ color: 'var(--color-primary)', fontSize: 'var(--text-body-sm)' }}
              >
                5분 소요 →
              </span>
            </Link>
          </motion.div>

          {/* 담벼락 카드 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link to="/blog" className="block group">
              <div
                className="overflow-hidden mb-6"
                style={{ borderRadius: 'var(--radius-sm)' }}
              >
                <img
                  src="/images/rainbow-jersey-02.png"
                  alt="치즈의 담벼락"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3
                className="font-heading font-bold mb-2"
                style={{ fontSize: 'var(--text-h3)', color: 'var(--color-text-dark)' }}
              >
                담벼락
              </h3>
              <p
                className="font-body mb-4"
                style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-medium)' }}
              >
                치즈의 일상을 들여다보세요
              </p>
              <span
                className="font-body font-medium"
                style={{ color: 'var(--color-primary)', fontSize: 'var(--text-body-sm)' }}
              >
                구경하기 →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
