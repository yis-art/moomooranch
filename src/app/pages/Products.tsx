import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';

export function Products() {
  const categories = [
    { emoji: '🥛', label: '우유' },
    { emoji: '🧀', label: '치즈' },
    { emoji: '🥣', label: '요거트' },
    { emoji: '🍦', label: '디저트' },
  ];

  const products = [
    {
      name: '무무 A2 우유 1L',
      location: '우유 🥛',
      price: '6,500원',
      rating: '4.9',
      image: 'https://lh3.googleusercontent.com/d/1-JeADv9UmOS3-rbAoTC2PeAfphTCd82I',
      badge: '베스트셀러'
    },
    {
      name: '무무 A2 우유 200ml 4팩',
      location: '우유 🥛',
      price: '9,800원',
      rating: '5.0',
      image: 'https://lh3.googleusercontent.com/d/182aLJb-JEGxOD3CWEiAf1FcsQ6skBDRy',
      badge: '정기구독'
    },
    {
      name: '무무 자연치즈',
      location: '치즈 🧀',
      price: '12,000원',
      rating: '4.8',
      image: 'https://lh3.googleusercontent.com/d/1SAoZk-KY_hF_wG7ZgaBqumjMTQ9-E21C'
    },
    {
      name: '무무 스트링치즈',
      location: '치즈 🧀',
      price: '8,500원',
      rating: '4.7',
      image: 'https://lh3.googleusercontent.com/d/1nNAJeARX2bpBZW9VaaHL3ALYHpYckBkE'
    },
    {
      name: '무무 플레인 요거트',
      location: '요거트 🥣',
      price: '5,500원',
      rating: '4.9',
      image: 'https://lh3.googleusercontent.com/d/1UxeewuxSYiq2E8r8Ax5ihrJZjYia9GaS',
      badge: '정기구독'
    },
    {
      name: '무무 수제 아이스크림',
      location: '디저트 🍦',
      price: '4,500원',
      rating: '4.6',
      image: 'https://lh3.googleusercontent.com/d/1D6VqDsHD4Mx_MZTbXK4h5yqT-U2Spnts'
    },
    {
      name: '무무 A2 우유 세트 (1L×3)',
      location: '우유 🥛',
      price: '18,000원',
      rating: '5.0',
      image: 'https://lh3.googleusercontent.com/d/1UxeewuxSYiq2E8r8Ax5ihrJZjYia9GaS',
      badge: '베스트셀러'
    },
    {
      name: '무무 치즈 선물세트',
      location: '치즈 🧀',
      price: '25,000원',
      rating: '4.8',
      image: 'https://lh3.googleusercontent.com/d/1hEWltJ0cdPMknNnd9Qmy8TmL8P58Xl97'
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--cream)' }}>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://lh3.googleusercontent.com/d/1_oAs95u0Xrfp--l6kvipLh_IK3mVo2Ph"
            alt="무무목장 신선한 유제품 모음"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.6)' }}
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, rgba(0,188,212,0.3) 0%, rgba(0,0,0,0.5) 100%)'
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
                🛒 무무의 선물
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
              자연이 키운 건강함,<br />
              무무목장의 선물
            </h1>

            <p style={{
              fontFamily: 'var(--font-korean)',
              fontSize: 'clamp(16px, 2vw, 20px)',
              lineHeight: '1.6',
              color: 'rgba(255,255,255,0.95)',
              fontWeight: 400
            }}>
              저지종 젖소에서 갓 짜낸 신선한 A2 우유와 목장에서 직접 만든 수제 유제품을 만나보세요
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Icons */}
      <section className="py-12" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {categories.map((cat, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center gap-3 transition-transform hover:scale-110"
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{
                  backgroundColor: 'white',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(141, 110, 99, 0.08)'
                }}>
                  <span className="text-3xl">{cat.emoji}</span>
                </div>
                <span style={{
                  fontFamily: 'var(--font-korean)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--text-main)'
                }}>
                  {cat.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group rounded-3xl overflow-hidden transition-all hover:scale-[1.02]"
                style={{
                  backgroundColor: 'white',
                  border: '1px solid rgba(141, 110, 99, 0.08)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  cursor: 'pointer'
                }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {product.badge && (
                    <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full z-10" style={{
                      backgroundColor: product.badge === '베스트셀러' 
                        ? 'var(--soft-blue)' 
                        : 'var(--sage)',
                      fontFamily: 'var(--font-korean)',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'white'
                    }}>
                      {product.badge}
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span style={{
                      fontFamily: 'var(--font-korean)',
                      fontSize: '13px',
                      color: 'var(--text-light)'
                    }}>
                      {product.location}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-korean)',
                      fontSize: '13px',
                      color: 'var(--golden)',
                      fontWeight: 700
                    }}>
                      ⭐ {product.rating}
                    </span>
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-korean)',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: 'var(--text-main)',
                    marginBottom: '12px'
                  }}>
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <span style={{
                        fontFamily: 'var(--font-korean)',
                        fontSize: '13px',
                        color: 'var(--text-light)'
                      }}>
                        가격
                      </span>
                      <p style={{
                        fontFamily: 'var(--font-korean)',
                        fontWeight: 700,
                        fontSize: '20px',
                        color: 'var(--text-main)'
                      }}>
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <p style={{
              fontFamily: 'var(--font-korean)',
              fontSize: '15px',
              color: 'var(--text-light)',
              marginBottom: '16px'
            }}>
              무무목장의 더 많은 제품이 궁금하시다면
            </p>
            <button
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full transition-all hover:scale-105"
              style={{
                backgroundColor: 'var(--sage)',
                color: 'white',
                fontFamily: 'var(--font-korean)',
                fontWeight: 700,
                fontSize: '16px',
                boxShadow: '0 4px 20px rgba(165, 214, 167, 0.3)'
              }}
            >
              더 보기
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://lh3.googleusercontent.com/d/1IdZjxnG3N4pgBDgUhvzBElD2Qm5vonoP"
            alt="무무목장 수제 치즈와 유제품"
            loading="lazy"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.4)' }}
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
              신선한 무무목장 유제품을<br />
              집에서 만나보세요
            </h2>

            <p style={{
              fontFamily: 'var(--font-korean)',
              fontSize: 'clamp(15px, 2vw, 18px)',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '40px',
              maxWidth: '650px',
              margin: '0 auto 40px'
            }}>
              네이버 스마트스토어에서 정기구독과 새벽배송으로 편리하게 주문하세요.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
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
                스마트스토어 바로가기
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
