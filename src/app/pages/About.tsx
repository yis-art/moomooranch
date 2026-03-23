import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Award, Heart, Leaf } from 'lucide-react';

export function About() {
  return (
    <div style={{ backgroundColor: 'var(--cream)' }}>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/img_12sq1XDyEAczW93xmc9yWHXjQK5xIZW_2.jpg"
            alt="공중에서 바라본 무무목장 전경"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.6)' }}
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))'
          }} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full" style={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <span style={{
                fontFamily: 'var(--font-korean)',
                fontSize: '14px',
                fontWeight: 700,
                color: 'white',
                letterSpacing: '0.05em'
              }}>
                목장 이야기
              </span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-korean)',
              fontWeight: 800,
              fontSize: 'clamp(40px, 7vw, 72px)',
              lineHeight: '1.2',
              color: 'white',
              marginBottom: '24px',
              letterSpacing: '-0.02em',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}>
              자연과 함께하는<br />
              50년 역사의 목장
            </h1>

            <p style={{
              fontFamily: 'var(--font-korean)',
              fontSize: 'clamp(16px, 2vw, 20px)',
              lineHeight: '1.6',
              color: 'rgba(255,255,255,0.95)',
              marginBottom: '40px',
              fontWeight: 400
            }}>
              강원도 삼척 예수원 목장에서 시작된<br />
              무무목장의 특별한 이야기를 소개합니다
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Story Section - 2 Column */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-3xl overflow-hidden" style={{
                boxShadow: '0 20px 60px rgba(0,0,0,0.12)'
              }}>
                <img
                  src="/images/img_1vNJ5X4Y1BytZna2ZJUgnkbiOZbGBj4m_.jpg"
                  alt="해 뜨는 무무목장 초원"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>

            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full" style={{
                backgroundColor: 'rgba(165, 214, 167, 0.15)',
                border: '1px solid rgba(165, 214, 167, 0.3)'
              }}>
                <span style={{
                  fontFamily: 'var(--font-korean)',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: 'var(--sage)',
                  letterSpacing: '0.05em'
                }}>
                  우리의 시작
                </span>
              </div>

              <h2 style={{
                fontFamily: 'var(--font-korean)',
                fontWeight: 800,
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: '1.3',
                color: 'var(--text-main)',
                marginBottom: '24px',
                letterSpacing: '-0.02em'
              }}>
                예수원에서 시작된<br />
                무무목장
              </h2>

              <div style={{
                fontFamily: 'var(--font-korean)',
                fontSize: '17px',
                lineHeight: '1.8',
                color: 'var(--text-main)',
                marginBottom: '32px'
              }}>
                <p className="mb-4">
                  1965년 강원도 삼척에 설립된 예수원은 신앙 공동체이자 자급자족을 실천하는 농촌 공동체입니다.
                </p>
                <p className="mb-4">
                  1970년대부터 낙농업을 시작하여 50년 넘게 자연과 조화를 이루며 건강한 목축업을 이어왔습니다.
                </p>
                <p>
                  무무목장은 이러한 예수원의 정신을 계승하여, 자연 방목과 생태순환 농법으로 건강하고 맛있는 유제품을 만들고 있습니다.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Reverse Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full" style={{
                backgroundColor: 'rgba(144, 202, 249, 0.15)',
                border: '1px solid rgba(144, 202, 249, 0.3)'
              }}>
                <span style={{
                  fontFamily: 'var(--font-korean)',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: 'var(--soft-blue)',
                  letterSpacing: '0.05em'
                }}>
                  저지종 A2 우유
                </span>
              </div>

              <h2 style={{
                fontFamily: 'var(--font-korean)',
                fontWeight: 800,
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: '1.3',
                color: 'var(--text-main)',
                marginBottom: '24px',
                letterSpacing: '-0.02em'
              }}>
                특별한 저지종<br />
                젖소를 키웁니다
              </h2>

              <div style={{
                fontFamily: 'var(--font-korean)',
                fontSize: '17px',
                lineHeight: '1.8',
                color: 'var(--text-main)',
                marginBottom: '32px'
              }}>
                <p className="mb-4">
                  저지종은 영국 저지섬 원산의 소형 젖소 품종으로, 일반 홀스타인보다 우유 생산량은 적지만 영양가가 매우 높습니다.
                </p>
                <p className="mb-4">
                  특히 <strong style={{ color: 'var(--soft-blue)', fontWeight: 700 }}>A2 베타카제인</strong> 단백질이 풍부하여 소화가 편하고, 단백질과 칼슘 함량이 높아 건강에 좋습니다.
                </p>
                <p>
                  42마리의 건강한 저지종 젖소들이 넓은 초원에서 자유롭게 풀을 뜯으며 자라고 있습니다.
                </p>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="rounded-3xl overflow-hidden" style={{
                boxShadow: '0 20px 60px rgba(0,0,0,0.12)'
              }}>
                <img
                  src="/images/img_11UtK5lUyKQuCtJ54gppd5Kh-Y2n5H1F9.jpg"
                  alt="무무목장 저지종 젖소 클로즈업"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - 3 Cards */}
      <section className="py-20" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 style={{
              fontFamily: 'var(--font-korean)',
              fontWeight: 800,
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: 'var(--text-main)',
              marginBottom: '16px',
              letterSpacing: '-0.02em'
            }}>
              우리가 지키는 가치
            </h2>
            <p style={{
              fontFamily: 'var(--font-korean)',
              fontSize: '18px',
              color: 'var(--text-light)',
              lineHeight: '1.6'
            }}>
              자연, 동물, 사람이 함께 행복한 목장
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl p-10 transition-all hover:scale-[1.02]"
              style={{
                backgroundColor: 'white',
                border: '1px solid rgba(141, 110, 99, 0.08)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
              }}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{
                backgroundColor: 'rgba(165, 214, 167, 0.15)'
              }}>
                <Leaf size={32} style={{ color: 'var(--sage)' }} />
              </div>
              <h3 style={{
                fontFamily: 'var(--font-korean)',
                fontWeight: 700,
                fontSize: '24px',
                color: 'var(--text-main)',
                marginBottom: '12px'
              }}>
                자연과 공존
              </h3>
              <p style={{
                fontFamily: 'var(--font-korean)',
                fontSize: '16px',
                color: 'var(--text-light)',
                lineHeight: '1.7'
              }}>
                자연 방목과 생태순환 농법으로 환경을 지키며 건강한 축산을 실천합니다
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl p-10 transition-all hover:scale-[1.02]"
              style={{
                backgroundColor: 'white',
                border: '1px solid rgba(141, 110, 99, 0.08)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
              }}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{
                backgroundColor: 'rgba(255, 179, 171, 0.15)'
              }}>
                <Heart size={32} style={{ color: 'var(--dusty-rose)' }} />
              </div>
              <h3 style={{
                fontFamily: 'var(--font-korean)',
                fontWeight: 700,
                fontSize: '24px',
                color: 'var(--text-main)',
                marginBottom: '12px'
              }}>
                동물 복지
              </h3>
              <p style={{
                fontFamily: 'var(--font-korean)',
                fontSize: '16px',
                color: 'var(--text-light)',
                lineHeight: '1.7'
              }}>
                소들이 스트레스 없이 행복하게 지낼 수 있는 환경을 만듭니다
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl p-10 transition-all hover:scale-[1.02]"
              style={{
                backgroundColor: 'white',
                border: '1px solid rgba(141, 110, 99, 0.08)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
              }}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{
                backgroundColor: 'rgba(255, 204, 128, 0.15)'
              }}>
                <Award size={32} style={{ color: 'var(--golden)' }} />
              </div>
              <h3 style={{
                fontFamily: 'var(--font-korean)',
                fontWeight: 700,
                fontSize: '24px',
                color: 'var(--text-main)',
                marginBottom: '12px'
              }}>
                품질 최우선
              </h3>
              <p style={{
                fontFamily: 'var(--font-korean)',
                fontSize: '16px',
                color: 'var(--text-light)',
                lineHeight: '1.7'
              }}>
                매일 신선한 우유로 최고 품질의 유제품을 정성껏 만듭니다
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/img_13JENdGwbWZWwh0-l9b9XOA0ErQsVGIAt.jpg"
            alt="이슬 맺힌 아침 무무목장 풍경"
            loading="lazy"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.5)' }}
          />
        </div>

        <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{
              fontFamily: 'var(--font-korean)',
              fontWeight: 800,
              fontSize: 'clamp(32px, 6vw, 56px)',
              lineHeight: '1.3',
              color: 'white',
              marginBottom: '24px',
              letterSpacing: '-0.02em'
            }}>
              무무목장의 특별한 제품을<br />
              만나보세요
            </h2>

            <p style={{
              fontFamily: 'var(--font-korean)',
              fontSize: 'clamp(16px, 2vw, 20px)',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '40px'
            }}>
              50년 역사와 자연이 만든 건강한 맛
            </p>

            <a
              href="/products"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full transition-transform hover:scale-105"
              style={{
                backgroundColor: 'white',
                color: 'var(--text-main)',
                fontFamily: 'var(--font-korean)',
                fontWeight: 700,
                fontSize: '18px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
              }}
            >
              제품 보러가기
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
