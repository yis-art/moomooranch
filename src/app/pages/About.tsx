import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

const teamMembers = [
  {
    name: '히스기야',
    role: '현장 운영',
    origin: '남한 · 예수원 공동체',
    desc: '예수원 공동체 소속 목장 책임자. 해발 1,000m 고지대에서 저지 소의 사계절을 총괄합니다.',
    img: '/images/무지개초지_저지소02.png',
  },
  {
    name: '박요셉',
    role: '모델 설계',
    origin: '북한 출신',
    desc: '건국대 수의과대학 졸업. 북한 환경에 적용 가능한 융복합 농촌 복원 모델을 설계합니다.',
    img: '/images/무지개초지_저지소04.png',
  },
  {
    name: '바니 스미스',
    role: '국제 자문',
    origin: '미국',
    desc: '미국 수의사. 1997~2019년 북한 현지에서 농업 선교사로 활동한 경험을 바탕으로 자문합니다.',
    img: '/images/무지개초지_저지소05.png',
  },
];

const jerseyStats = [
  { label: '평균 체중', jersey: '400~450kg', holstein: '600~700kg' },
  { label: '유지방 함량', jersey: '4.8~5.2%', holstein: '3.5~3.7%' },
  { label: 'A2 유전형', jersey: '거의 100%', holstein: '혼합형' },
  { label: '경제 수명', jersey: '12~15년', holstein: '5~7년' },
  { label: '내한성', jersey: '우수', holstein: '보통' },
  { label: '분만 난이도', jersey: '낮음', holstein: '상대적으로 높음' },
];

export function About() {
  return (
    <div style={{ backgroundColor: 'var(--cream)' }}>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/무무목장 전경.png"
            alt="해발 1,000m 삼수령 무무목장 전경"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.55)' }}
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.55))'
          }} />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p style={{
              fontFamily: 'var(--font-korean)', fontSize: '14px', fontWeight: 700,
              color: 'rgba(255,255,255,0.8)', letterSpacing: '0.1em', marginBottom: '16px'
            }}>
              PASSING ON THE GIFT
            </p>
            <h1 style={{
              fontFamily: 'var(--font-korean)', fontWeight: 800,
              fontSize: 'clamp(40px, 7vw, 72px)', lineHeight: '1.2',
              color: 'white', marginBottom: '24px', letterSpacing: '-0.02em',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}>
              삼수령 무무목장
            </h1>
            <p style={{
              fontFamily: 'var(--font-korean)', fontSize: 'clamp(16px, 2vw, 20px)',
              lineHeight: '1.7', color: 'rgba(255,255,255,0.92)', fontWeight: 400
            }}>
              해발 1,000m에서 검증된 낙농 모델을<br />
              북한 고지대에 전달하기 위한 프로젝트
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1. 선물을 전달하라 */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="rounded-3xl overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
                <img src="/images/예수원 기념품.png" alt="예수원에서 만든 기도의자와 공예품" loading="lazy" className="w-full aspect-[4/3] object-cover" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p style={{ fontFamily: 'var(--font-korean)', fontSize: '13px', fontWeight: 700, color: 'var(--sage)', letterSpacing: '0.1em', marginBottom: '12px' }}>01</p>
              <h2 style={{ fontFamily: 'var(--font-korean)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: '1.3', color: 'var(--text-main)', marginBottom: '24px', letterSpacing: '-0.02em' }}>
                선물을 전달하라
              </h2>
              <p style={{ fontFamily: 'var(--font-korean)', fontSize: '17px', lineHeight: '1.9', color: 'var(--text-light)', marginBottom: '20px' }}>
                헤이퍼 인터내셔널(Heifer International)은 "받은 선물을 다음 사람에게 전달하라"는 원칙으로 전 세계 빈곤 지역에 가축을 보급해왔습니다.
              </p>
              <p style={{ fontFamily: 'var(--font-korean)', fontSize: '17px', lineHeight: '1.9', color: 'var(--text-light)', marginBottom: '20px' }}>
                1965년, 시애틀 교회가 예수원에 보낸 젖소 두 마리도 같은 정신이었습니다. 60년이 지난 지금, 무무목장은 그 선물을 북한 고지대에 전달하기 위한 실험을 합니다.
              </p>
              <p style={{ fontFamily: 'var(--font-korean)', fontSize: '17px', lineHeight: '1.9', color: 'var(--text-light)' }}>
                해발 1,000m 태백 삼수령 — 남한에서 북한 고지대와 가장 유사한 환경. 이곳에서 검증된 소규모 낙농 모델은, 그 날이 오면 최소한의 수정만으로 북한에 이식할 수 있도록 설계되었습니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. 60년의 뿌리 */}
      <section className="py-24" style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p style={{ fontFamily: 'var(--font-korean)', fontSize: '13px', fontWeight: 700, color: 'var(--sage)', letterSpacing: '0.1em', marginBottom: '12px' }}>02</p>
              <h2 style={{ fontFamily: 'var(--font-korean)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: '1.3', color: 'var(--text-main)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                60년의 뿌리
              </h2>
              <p style={{ fontFamily: 'var(--font-korean)', fontSize: '15px', color: 'var(--text-light)', marginBottom: '24px' }}>
                The Watershed Grange, 1965–현재
              </p>
              <p style={{ fontFamily: 'var(--font-korean)', fontSize: '17px', lineHeight: '1.9', color: 'var(--text-light)', marginBottom: '20px' }}>
                1965년 덕항산 기슭에서 시작된 예수원의 낙농. 1975년 해발 1,000m 매봉산 자락으로 확장하며 "Jesus Abbey The Watershed Grange"로 불렸습니다.
              </p>
              <p style={{ fontFamily: 'var(--font-korean)', fontSize: '17px', lineHeight: '1.9', color: 'var(--text-light)' }}>
                헤이퍼 인터내셔널 소속 Paul A. Kingsbury(김승배) 선교사가 대천덕 신부의 목장 설립을 지원했습니다. 삼수령 무무목장은 예수원의 수도회적 유산과 한국 낙농업 역사를 함께 품고 있습니다.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="rounded-3xl overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
                <img src="/images/축사.png" alt="위에서 내려다본 무무목장 축사 전경" loading="lazy" className="w-full aspect-[4/3] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. 팀 소개 */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <p style={{ fontFamily: 'var(--font-korean)', fontSize: '13px', fontWeight: 700, color: 'var(--sage)', letterSpacing: '0.1em', marginBottom: '12px' }}>03</p>
            <h2 style={{ fontFamily: 'var(--font-korean)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: '1.3', color: 'var(--text-main)', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              함께 이끄는 사람들
            </h2>
            <p style={{ fontFamily: 'var(--font-korean)', fontSize: '17px', color: 'var(--text-light)', lineHeight: '1.7' }}>
              한국, 북한, 미국 — 서로 다른 삶의 궤적이 만나 하나의 비전을 이끕니다.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <div className="rounded-3xl p-8 h-full" style={{ backgroundColor: 'white', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', border: '1px solid rgba(141,110,99,0.08)' }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: 'rgba(165,214,167,0.15)' }}>
                    <span style={{ fontSize: '28px' }}>🐄</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-korean)', fontSize: '12px', fontWeight: 700, color: 'var(--sage)', letterSpacing: '0.08em', marginBottom: '6px' }}>{member.origin}</p>
                  <h3 style={{ fontFamily: 'var(--font-korean)', fontWeight: 800, fontSize: '22px', color: 'var(--text-main)', marginBottom: '4px' }}>{member.name}</h3>
                  <p style={{ fontFamily: 'var(--font-korean)', fontSize: '14px', fontWeight: 600, color: 'var(--sage)', marginBottom: '14px', paddingBottom: '14px', borderBottom: '1px solid rgba(141,110,99,0.1)' }}>{member.role}</p>
                  <p style={{ fontFamily: 'var(--font-korean)', fontSize: '15px', color: 'var(--text-light)', lineHeight: '1.8' }}>{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-10 rounded-3xl overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
            <img src="/images/무지개초지.png" alt="삼수령 무무목장 초지 전경" loading="lazy" className="w-full" style={{ maxHeight: '400px', objectFit: 'cover' }} />
          </motion.div>
        </div>
      </section>

      {/* 4. 왜 저지인가 */}
      <section className="py-24" style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p style={{ fontFamily: 'var(--font-korean)', fontSize: '13px', fontWeight: 700, color: 'var(--sage)', letterSpacing: '0.1em', marginBottom: '12px' }}>04</p>
              <h2 style={{ fontFamily: 'var(--font-korean)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: '1.3', color: 'var(--text-main)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                왜 저지(Jersey)인가
              </h2>
              <p style={{ fontFamily: 'var(--font-korean)', fontSize: '15px', color: 'var(--text-light)', marginBottom: '24px' }}>고지대를 위한 전략적 선택</p>
              <p style={{ fontFamily: 'var(--font-korean)', fontSize: '17px', lineHeight: '1.9', color: 'var(--text-light)', marginBottom: '16px' }}>
                작은 체구(400~450kg), 높은 유지방(5%), 거의 100% A2 유전형, 12~15년의 긴 경제 수명. 사료가 부족한 고지대에서 저지는 홀스타인보다 훨씬 효율적입니다.
              </p>
              <p style={{ fontFamily: 'var(--font-korean)', fontSize: '17px', lineHeight: '1.9', color: 'var(--text-light)' }}>
                낮은 분만 난이도와 뛰어난 내한성. 북한 고지대의 5~7개월 혹한기를 견딜 수 있는 품종입니다.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(141,110,99,0.12)' }}>
                <div className="grid grid-cols-3 text-center" style={{ backgroundColor: 'var(--sage)', padding: '14px 0' }}>
                  <span style={{ fontFamily: 'var(--font-korean)', fontWeight: 700, fontSize: '14px', color: 'white' }}>항목</span>
                  <span style={{ fontFamily: 'var(--font-korean)', fontWeight: 700, fontSize: '14px', color: 'white' }}>저지 🐄</span>
                  <span style={{ fontFamily: 'var(--font-korean)', fontWeight: 700, fontSize: '14px', color: 'white' }}>홀스타인</span>
                </div>
                {jerseyStats.map((row, i) => (
                  <div key={row.label} className="grid grid-cols-3 text-center" style={{ padding: '14px 0', backgroundColor: i % 2 === 0 ? 'white' : 'rgba(165,214,167,0.06)', borderTop: '1px solid rgba(141,110,99,0.08)' }}>
                    <span style={{ fontFamily: 'var(--font-korean)', fontSize: '14px', color: 'var(--text-light)' }}>{row.label}</span>
                    <span style={{ fontFamily: 'var(--font-korean)', fontSize: '14px', fontWeight: 700, color: 'var(--sage)' }}>{row.jersey}</span>
                    <span style={{ fontFamily: 'var(--font-korean)', fontSize: '14px', color: 'var(--text-light)' }}>{row.holstein}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-3xl overflow-hidden" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <img src="/images/무지개초지_저지소01.png" alt="저지종 젖소" loading="lazy" className="w-full aspect-[16/9] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. 창조질서의 회복 */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="rounded-3xl overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
                <img src="/images/예수원 체류 프로그램.png" alt="예수원 공동체 일과 - 노동과 기도" loading="lazy" className="w-full aspect-[4/3] object-cover" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p style={{ fontFamily: 'var(--font-korean)', fontSize: '13px', fontWeight: 700, color: 'var(--sage)', letterSpacing: '0.1em', marginBottom: '12px' }}>05</p>
              <h2 style={{ fontFamily: 'var(--font-korean)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: '1.3', color: 'var(--text-main)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                창조질서의 회복
              </h2>
              <p style={{ fontFamily: 'var(--font-korean)', fontSize: '15px', color: 'var(--text-light)', marginBottom: '24px' }}>생태신학의 실천</p>
              <blockquote style={{ fontFamily: 'var(--font-korean)', fontSize: '20px', fontWeight: 700, color: 'var(--text-main)', borderLeft: '3px solid var(--sage)', paddingLeft: '20px', marginBottom: '24px', lineHeight: '1.6' }}>
                "소를 소답게 키운다."
              </blockquote>
              <p style={{ fontFamily: 'var(--font-korean)', fontSize: '17px', lineHeight: '1.9', color: 'var(--text-light)', marginBottom: '16px' }}>
                토양 생태계를 보전하고, 가축의 본성을 존중하며, 자연의 계절 리듬을 따릅니다.
              </p>
              <p style={{ fontFamily: 'var(--font-korean)', fontSize: '17px', lineHeight: '1.9', color: 'var(--text-light)' }}>
                과잉 생산을 배제하고, 기도와 노동이 하나 되는 예수원의 전통을 잇습니다. 단기적 이익이 아닌 창조질서 안에서의 지속 가능성을 추구합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. 태백에서 북한으로 */}
      <section className="py-24" style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <p style={{ fontFamily: 'var(--font-korean)', fontSize: '13px', fontWeight: 700, color: 'var(--sage)', letterSpacing: '0.1em', marginBottom: '12px' }}>06</p>
            <h2 style={{ fontFamily: 'var(--font-korean)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: '1.3', color: 'var(--text-main)', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              태백에서 북한으로
            </h2>
            <p style={{ fontFamily: 'var(--font-korean)', fontSize: '17px', color: 'var(--text-light)', lineHeight: '1.7', maxWidth: '700px', margin: '0 auto' }}>
              강원도 태백은 남한에서 북한 고지대와 가장 유사한 기후와 지형을 갖추고 있습니다. 삼수령에서 검증된 모든 것은 북한을 위한 것입니다.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="rounded-3xl p-8" style={{ backgroundColor: 'rgba(255,204,128,0.15)', border: '1px solid rgba(255,204,128,0.3)' }}>
              <h3 style={{ fontFamily: 'var(--font-korean)', fontWeight: 700, fontSize: '18px', color: 'var(--text-main)', marginBottom: '16px' }}>북한 고지대의 현실</h3>
              {['5~7개월 이상의 혹한기', '극도로 제한된 경작지', '취약한 물류 및 유통망', '외부 농업 투입재 확보 불가'].map(item => (
                <p key={item} style={{ fontFamily: 'var(--font-korean)', fontSize: '15px', color: 'var(--text-light)', lineHeight: '1.8', paddingLeft: '16px', borderLeft: '2px solid rgba(255,204,128,0.6)', marginBottom: '8px' }}>
                  {item}
                </p>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl p-8" style={{ backgroundColor: 'rgba(165,214,167,0.1)', border: '1px solid rgba(165,214,167,0.3)' }}>
              <h3 style={{ fontFamily: 'var(--font-korean)', fontWeight: 700, fontSize: '18px', color: 'var(--text-main)', marginBottom: '16px' }}>무무목장 모델의 해법</h3>
              {['고가 자동화 장비 불필요', '통신 인프라 의존도 제로', '현지 사료 자급 시스템', '자연 교배 중심 번식', '도제식 기술 전수'].map(item => (
                <p key={item} style={{ fontFamily: 'var(--font-korean)', fontSize: '15px', color: 'var(--text-light)', lineHeight: '1.8', paddingLeft: '16px', borderLeft: '2px solid rgba(165,214,167,0.6)', marginBottom: '8px' }}>
                  {item}
                </p>
              ))}
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 rounded-3xl p-8 text-center" style={{ backgroundColor: 'white', border: '1px solid rgba(141,110,99,0.1)', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
            <p style={{ fontFamily: 'var(--font-korean)', fontSize: '16px', color: 'var(--text-light)', marginBottom: '8px' }}>암송아지 자가 증식 계획</p>
            <div className="flex justify-center gap-12 mt-4">
              {[{ n: '5', label: '현재 (두)' }, { n: '10', label: '2년 후 목표' }, { n: '20', label: '4년 후 목표' }].map(({ n, label }) => (
                <div key={label}>
                  <p style={{ fontFamily: 'var(--font-korean)', fontWeight: 800, fontSize: '36px', color: 'var(--sage)' }}>{n}</p>
                  <p style={{ fontFamily: 'var(--font-korean)', fontSize: '13px', color: 'var(--text-light)' }}>{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/축사 하늘사진.png" alt="하늘에서 본 무무목장" className="w-full h-full object-cover" style={{ filter: 'brightness(0.4)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))' }} />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <blockquote style={{ fontFamily: 'serif', fontSize: 'clamp(16px, 2.5vw, 22px)', color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', marginBottom: '12px' }}>
              "For he was looking forward to the city with foundations,<br />whose architect and builder is God."
            </blockquote>
            <p style={{ fontFamily: 'var(--font-korean)', fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '40px' }}>히브리서 11:10</p>
            <Link to="/letter" className="inline-flex items-center gap-3 px-10 py-5 rounded-full transition-transform hover:scale-105"
              style={{ backgroundColor: 'white', color: 'var(--text-main)', fontFamily: 'var(--font-korean)', fontWeight: 700, fontSize: '17px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}>
              무무편지 구독하기
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
