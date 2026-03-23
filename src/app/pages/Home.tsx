import React from 'react';
import { Link } from 'react-router';
import { CheeseAvatar } from '../components/CheeseAvatar';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Award, Users, Clock } from 'lucide-react';

export function Home() {
  return (
    <div style={{ backgroundColor: 'var(--cream)' }}>
      {/* Hero Section - Full Screen with Floating Images */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/무무목장 전경.png"
            alt="강원도 태백 무무목장의 푸른 초원 전경"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.7)' }}
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4))'
          }} />
        </div>

        {/* Floating Images */}
        <motion.div
          initial={{ opacity: 0, y: -50, rotate: -8 }}
          animate={{ opacity: 1, y: 0, rotate: -8 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-20 left-[10%] w-64 h-48 rounded-3xl overflow-hidden shadow-2xl hidden lg:block"
        >
          <img
            src="/images/무지개초지_저지소01.png"
            alt="무무목장의 저지종 젖소 클로즈업"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 8 }}
          animate={{ opacity: 1, y: 0, rotate: 8 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute top-32 right-[8%] w-72 h-56 rounded-3xl overflow-hidden shadow-2xl hidden lg:block"
        >
          <img
            src="/images/무지개초지.png"
            alt="해 뜨는 무무목장 초원 풍경"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -5 }}
          animate={{ opacity: 1, x: 0, rotate: -5 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute bottom-32 left-[15%] w-56 h-44 rounded-3xl overflow-hidden shadow-2xl hidden lg:block"
        >
          <img
            src="/images/우유마시는 아이.png"
            alt="갓 짜낸 신선한 우유를 마시는 모습"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 6 }}
          animate={{ opacity: 1, x: 0, rotate: 6 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="absolute bottom-40 right-[12%] w-60 h-48 rounded-3xl overflow-hidden shadow-2xl hidden lg:block"
        >
          <img
            src="/images/무무목장 소개.png"
            alt="무무목장에서 직접 만든 수제 치즈"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontFamily: 'var(--font-korean)',
              fontWeight: 800,
              fontSize: 'clamp(48px, 8vw, 88px)',
              lineHeight: '1.2',
              color: 'white',
              marginBottom: '24px',
              letterSpacing: '-0.02em',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}
          >
            50년의 기도가 빚은<br />
            저지 우유
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              fontFamily: 'var(--font-korean)',
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              lineHeight: '1.6',
              color: 'rgba(255,255,255,0.95)',
              marginBottom: '48px',
              fontWeight: 400
            }}
          >
            강원도 태백 해발 1,000m, 예수원 공동체가 지켜온 땅에서<br />
            저지 젖소의 진한 우유가 만들어집니다
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link
              to="/letter"
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
              무무편지 구독하기
              <ArrowRight size={20} />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mt-20"
          >
            <div className="flex items-center gap-3">
              <Clock size={24} style={{ color: 'rgba(255,255,255,0.9)' }} />
              <span style={{
                fontFamily: 'var(--font-korean)',
                fontSize: '16px',
                color: 'rgba(255,255,255,0.9)',
                fontWeight: 500
              }}>
                1965년 설립 예수원 공동체
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Users size={24} style={{ color: 'rgba(255,255,255,0.9)' }} />
              <span style={{
                fontFamily: 'var(--font-korean)',
                fontSize: '16px',
                color: 'rgba(255,255,255,0.9)',
                fontWeight: 500
              }}>
                저지종 젖소 42마리 방목
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Award size={24} style={{ color: 'rgba(255,255,255,0.9)' }} />
              <span style={{
                fontFamily: 'var(--font-korean)',
                fontSize: '16px',
                color: 'rgba(255,255,255,0.9)',
                fontWeight: 500
              }}>
              A2 저지 우유
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section - 2 Column Layout */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
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
                  기도와 노동의 목장
                </span>
              </div>

              <h2 style={{
                fontFamily: 'var(--font-korean)',
                fontWeight: 800,
                fontSize: 'clamp(36px, 5vw, 56px)',
                lineHeight: '1.3',
                color: 'var(--text-main)',
                marginBottom: '24px',
                letterSpacing: '-0.02em'
              }}>
                1965년부터 이어온<br />
                예수원의 낙농 전통,<br />
                무무목장
              </h2>

              <p style={{
                fontFamily: 'var(--font-korean)',
                fontSize: '18px',
                lineHeight: '1.8',
                color: 'var(--text-light)',
                marginBottom: '32px'
              }}>
                1965년 대천덕 신부님이 세운 예수원 공동체가 이 땅을 지켜왔습니다. 매봉산 자락 해발 1,000m, 저지 젖소가 풀을 뜯고 착유한 신선한 우유로 정직하게 만듭니다.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full transition-transform hover:scale-105"
                style={{
                  backgroundColor: 'var(--sage)',
                  color: 'white',
                  fontFamily: 'var(--font-korean)',
                  fontWeight: 700,
                  fontSize: '16px',
                  boxShadow: '0 4px 20px rgba(165, 214, 167, 0.3)'
                }}
              >
                더 알아보기
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* Right - Images */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-3xl overflow-hidden aspect-[3/4]" style={{
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                }}>
                  <img
                    src="/images/무지개초지 설경.png"
                    alt="눈 덮인 무무목장 풍경"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden aspect-[3/4] mt-12" style={{
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                }}>
                  <img
                    src="/images/무지개초지_저지소02.png"
                    alt="갈색 저지종 젖소 초상"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="py-20" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-3xl overflow-hidden mb-6" style={{
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                <img
                  src="/images/무지개초지_저지소03.png"
                  alt="무무목장 초원의 저지소"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <h3 style={{
                fontFamily: 'var(--font-korean)',
                fontWeight: 700,
                fontSize: '20px',
                color: 'var(--text-main)',
                marginBottom: '8px'
              }}>
                자연 방목 목장
              </h3>
              <p style={{
                fontFamily: 'var(--font-korean)',
                fontSize: '15px',
                color: 'var(--text-light)',
                lineHeight: '1.6'
              }}>
                해발 1,000m 매봉산 초지에서 계절마다 자유롭게 방목합니다.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="rounded-3xl overflow-hidden mb-6" style={{
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                <img
                  src="/images/무지개초지_저지소04.png"
                  alt="목초지의 저지소들"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <h3 style={{
                fontFamily: 'var(--font-korean)',
                fontWeight: 700,
                fontSize: '20px',
                color: 'var(--text-main)',
                marginBottom: '8px'
              }}>
                해발 1,000m 초지
              </h3>
              <p style={{
                fontFamily: 'var(--font-korean)',
                fontSize: '15px',
                color: 'var(--text-light)',
                lineHeight: '1.6'
              }}>
                수입 건초 없이 자가 목초 90% 이상. 땅에서 시작하는 순환 농업.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="rounded-3xl overflow-hidden mb-6" style={{
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                <img
                  src="/images/우유_저지소.png"
                  alt="저지소 우유"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <h3 style={{
                fontFamily: 'var(--font-korean)',
                fontWeight: 700,
                fontSize: '20px',
                color: 'var(--text-main)',
                marginBottom: '8px'
              }}>
                신선한 A2 우유
              </h3>
              <p style={{
                fontFamily: 'var(--font-korean)',
                fontSize: '15px',
                color: 'var(--text-light)',
                lineHeight: '1.6'
              }}>
                A2 유전형 거의 100%. 지방구가 작아 소화가 쉽고 크림층이 풍부합니다.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="rounded-3xl overflow-hidden mb-6" style={{
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                <img
                  src="/images/무무목장 소개-특장점.png"
                  alt="무무목장 수제 요거트"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <h3 style={{
                fontFamily: 'var(--font-korean)',
                fontWeight: 700,
                fontSize: '20px',
                color: 'var(--text-main)',
                marginBottom: '8px'
              }}>
                수제 무무목장
              </h3>
              <p style={{
                fontFamily: 'var(--font-korean)',
                fontSize: '15px',
                color: 'var(--text-light)',
                lineHeight: '1.6'
              }}>
                목장과 가공이 같은 땅. 요거트, 치즈, 버터를 당일 생산합니다.
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p style={{
              fontFamily: 'var(--font-korean)',
              fontSize: '16px',
              color: 'var(--text-light)'
            }}>
              무무목장의 더 많은 제품을 만나보세요
            </p>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/letter"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full transition-transform hover:scale-105"
              style={{
                backgroundColor: 'var(--sage)',
                color: 'white',
                fontFamily: 'var(--font-korean)',
                fontWeight: 700,
                fontSize: '16px',
                boxShadow: '0 4px 20px rgba(165, 214, 167, 0.3)'
              }}
            >
              제품 보러가기
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Dark Section - Featured Destination */}
      <section className="relative py-32 md:py-40 overflow-hidden" style={{
        backgroundColor: '#1a1a1a'
      }}>
        {/* Background Images */}
        <div className="absolute inset-0 grid grid-cols-3 opacity-30">
          <div className="bg-cover bg-center" style={{
            backgroundImage: 'url(/images/운해.png)'
          }} />
          <div className="bg-cover bg-center" style={{
            backgroundImage: 'url(/images/축사 하늘사진.png)'
          }} />
          <div className="bg-cover bg-center" style={{
            backgroundImage: 'url(/images/무무목장 전경.png)'
          }} />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full" style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <span style={{
                fontFamily: 'var(--font-korean)',
                fontSize: '14px',
                fontWeight: 700,
                color: 'white',
                letterSpacing: '0.05em'
              }}>
                🐄 가장 사랑받는 저지종
              </span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-korean)',
              fontWeight: 800,
              fontSize: 'clamp(36px, 6vw, 64px)',
              lineHeight: '1.3',
              color: 'white',
              marginBottom: '48px',
              letterSpacing: '-0.02em'
            }}>
              무무목장이 자랑하는<br />
              특별한 저지종 젖소
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-md mx-auto rounded-3xl overflow-hidden"
              style={{
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
              }}
            >
              <div className="relative aspect-[3/4]">
                <img
                  src="/images/무지개초지_저지소05.png"
                  alt="저지종 젖소 클로즈업"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-6 transition-transform hover:scale-110"
                    style={{
                      backgroundColor: 'white',
                      color: 'var(--text-main)'
                    }}
                  >
                    <ArrowRight size={20} />
                  </a>
                  <h3 style={{
                    fontFamily: 'var(--font-korean)',
                    fontWeight: 700,
                    fontSize: '28px',
                    color: 'white',
                    marginBottom: '8px'
                  }}>
                    저지종
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-korean)',
                    fontSize: '16px',
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: '1.5'
                  }}>
                    영양가 높은 A2 우유를 만드는 특별한 품종
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Instagram-style Gallery */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full" style={{
              backgroundColor: 'rgba(255, 204, 128, 0.15)',
              border: '1px solid rgba(255, 204, 128, 0.3)'
            }}>
              <span style={{
                fontFamily: 'var(--font-korean)',
                fontSize: '14px',
                fontWeight: 700,
                color: 'var(--pale-orange)',
                letterSpacing: '0.05em'
              }}>
                📷 무무목장의 일상을 만나보세요
              </span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-korean)',
              fontWeight: 800,
              fontSize: 'clamp(36px, 5vw, 56px)',
              lineHeight: '1.3',
              color: 'var(--text-main)',
              marginBottom: '16px',
              letterSpacing: '-0.02em'
            }}>
              자연 속 무무목장 풍경
            </h2>
          </motion.div>

          {/* Horizontal Scroll Gallery */}
          <div className="overflow-x-auto pb-8 -mx-6 px-6">
            <div className="flex gap-6" style={{ width: 'max-content' }}>
              {[
                { src: '/images/무지개초지_저지소06.png', alt: '무무목장 저지소 풍경 1' },
                { src: '/images/무지개초지.png', alt: '무지개초지 전경' },
                { src: '/images/무지개초지_저지소03.png', alt: '무무목장 저지소 풍경 3' },
                { src: '/images/무지개초지_저지소01.png', alt: '무무목장 저지소 풍경 4' },
                { src: '/images/축사 하늘사진.png', alt: '축사와 하늘' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-3xl overflow-hidden"
                  style={{
                    width: '320px',
                    height: '420px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <p className="text-center mt-8" style={{
            fontFamily: 'var(--font-korean)',
            fontSize: '15px',
            color: 'var(--text-light)'
          }}>
            #무무목장 태그로 여러분의 목장 방문 이야기를 공유해 주세요.
          </p>
        </div>
      </section>

      {/* CTA Section - Full Width Image Background */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/운해.png"
            alt="햇살 비치는 무무목장 초원"
            loading="lazy"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.5)' }}
          />
        </div>

        <div className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{
              fontFamily: 'var(--font-korean)',
              fontWeight: 800,
              fontSize: 'clamp(36px, 6vw, 64px)',
              lineHeight: '1.3',
              color: 'white',
              marginBottom: '24px',
              letterSpacing: '-0.02em'
            }}>
              자연이 키운 건강한 맛,<br />
              무무목장에서 만나보세요
            </h2>

            <p style={{
              fontFamily: 'var(--font-korean)',
              fontSize: 'clamp(16px, 2vw, 20px)',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '40px',
              maxWidth: '700px',
              margin: '0 auto 40px'
            }}>
              50년 역사의 예수원 목장에서 저지종 젖소가 만든 신선한 무무목장을 경험해 보세요.
            </p>

            <Link
              to="/contact"
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
              제품 구경하기
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer Emoji Bar */}
      <section className="py-8" style={{ backgroundColor: 'var(--text-main)' }}>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-4 text-center">
            <span style={{ fontFamily: 'var(--font-korean)', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
              🥛 A2 우유 •
            </span>
            <span style={{ fontFamily: 'var(--font-korean)', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
              🧀 수제 치즈 •
            </span>
            <span style={{ fontFamily: 'var(--font-korean)', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
              🥣 플레인 요거트 •
            </span>
            <span style={{ fontFamily: 'var(--font-korean)', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
              🍦 수제 아이스크림 •
            </span>
            <span style={{ fontFamily: 'var(--font-korean)', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
              🐄 저지종 젖소 •
            </span>
            <span style={{ fontFamily: 'var(--font-korean)', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
              🌿 자연 방목 •
            </span>
            <span style={{ fontFamily: 'var(--font-korean)', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
              ❤️ 동물 복지 •
            </span>
            <span style={{ fontFamily: 'var(--font-korean)', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
              🏔️ 강원도 태백 •
            </span>
            <span style={{ fontFamily: 'var(--font-korean)', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
              📦 새벽배송
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
