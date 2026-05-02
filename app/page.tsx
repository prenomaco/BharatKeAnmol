'use client'

import { CSSProperties, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Briefcase,
  GraduationCap,
  Heart,
  Users,
  Zap,
  Palette,
  Star,
  Flame,
  Trophy,
  Check,
  Sparkles,
  MapPin,
} from 'lucide-react'
import { AnimatedSection } from '@/components/AnimatedSection'
import { WaveDivider } from '@/components/WaveDivider'
import { WAVE_ABOUT_BOTTOM, WAVE_WHY_BOTTOM, WAVE_CATS_TOP } from '@/components/waves'

const categories = [
  { name: 'Business & Entrepreneurship', Icon: Briefcase },
  { name: 'Education & Academia', Icon: GraduationCap },
  { name: 'Healthcare & Wellness', Icon: Heart },
  { name: 'Social Service & NGO', Icon: Users },
  { name: 'Innovation & Technology', Icon: Zap },
  { name: 'Arts, Culture & Entertainment', Icon: Palette },
  { name: 'Women Achievers', Icon: Star },
  { name: 'Youth Icons', Icon: Flame },
  { name: 'Leadership Excellence', Icon: Trophy },
]

const strengths = [
  'National-level recognition',
  'Prestigious award platform',
  'Honoring real talent and unsung heroes',
  'Networking with influential personalities',
  'Media and public recognition',
]

const marqueeIcons = [Trophy, Star, Sparkles, MapPin, Briefcase, GraduationCap, Heart, Users, Zap, Palette]

interface StatCounterProps {
  target: string
  label: string
}

function StatCounter({ target, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)
        if (!ref.current) return

        // Only animate if it's a number
        const num = parseInt(target)
        if (isNaN(num)) return

        const counter = { val: 0 }
        const el = ref.current
        gsap.to(counter, {
          val: num,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            once: true,
          },
          onUpdate() {
            el.textContent = Math.round(counter.val) + '+'
          },
        })
      })
    })
  }, [target])

  return (
    <div ref={ref} className="text-[42px] md:text-[56px] font-bold text-navy leading-none">
      {target}
    </div>
  )
}

function IconMarquee({ side = 'right' }: { side?: 'left' | 'right' }) {
  return (
    <div
      className={`icon-marquee-shell pointer-events-none absolute left-0 right-0 z-[1] h-8 overflow-hidden opacity-60 lg:top-8 lg:bottom-8 lg:h-auto lg:w-14 lg:opacity-100 ${side === 'left' ? 'top-5 lg:left-5 lg:right-auto' : 'bottom-20 lg:left-auto lg:right-5'}`}
      aria-hidden="true"
    >
      <div className={`icon-marquee-track ${side === 'left' ? 'marquee-reverse' : ''}`}>
        {[0, 1].map((setIndex) => (
          <div key={`${side}-set-${setIndex}`} className="icon-marquee-set">
            {marqueeIcons.map((Icon, index) => (
              <Icon
                key={`${side}-${setIndex}-${index}`}
                className="h-5 w-5 text-saffron/25 lg:h-8 lg:w-8 lg:text-saffron/30"
                strokeWidth={1.7}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HomePage() {
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const heroKickerRef = useRef<HTMLParagraphElement>(null)
  const heroCopyRef = useRef<HTMLParagraphElement>(null)
  const heroActionsRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const whyLeftRef = useRef<HTMLDivElement>(null)
  const whyRightRef = useRef<HTMLDivElement>(null)
  const founderPhotoRef = useRef<HTMLDivElement>(null)
  const categoryCardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.from(
          [heroKickerRef.current, h1Ref.current, heroCopyRef.current, heroActionsRef.current].filter(Boolean),
          {
            y: 28,
            opacity: 0,
            duration: 0.85,
            stagger: 0.09,
            ease: 'power4.out',
            clearProps: 'transform,opacity',
          }
        )

        // Hero photo
        if (photoRef.current) {
          gsap.from(photoRef.current, {
            y: 34,
            scale: 0.96,
            opacity: 0,
            rotate: -2,
            duration: 1,
            delay: 0.18,
            ease: 'power4.out',
            clearProps: 'transform,opacity',
          })
        }

        if (statsRef.current) {
          gsap.from(statsRef.current.querySelectorAll('.stat-item'), {
            y: 22,
            opacity: 0,
            duration: 0.75,
            stagger: 0.1,
            delay: 0.34,
            ease: 'power4.out',
            clearProps: 'transform,opacity',
          })
        }

        const hoverTargets = document.querySelectorAll<HTMLElement>('.gsap-hover')
        hoverTargets.forEach((target) => {
          const icon = target.querySelector<HTMLElement>('.hover-icon')
          const onEnter = () => {
            gsap.to(target, { y: -3, scale: 1.015, duration: 0.24, ease: 'power3.out' })
            if (icon) gsap.to(icon, { y: -2, rotate: 7, duration: 0.24, ease: 'power3.out' })
          }
          const onLeave = () => {
            gsap.to(target, { y: 0, scale: 1, duration: 0.28, ease: 'power3.out' })
            if (icon) gsap.to(icon, { y: 0, rotate: 0, duration: 0.28, ease: 'power3.out' })
          }
          target.addEventListener('mouseenter', onEnter)
          target.addEventListener('mouseleave', onLeave)
        })

        // Why BKA panels
        if (whyLeftRef.current) {
          gsap.from(whyLeftRef.current, {
            x: -40,
            opacity: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: whyLeftRef.current,
              start: 'top 85%',
              once: true,
            },
          })
        }

        if (whyRightRef.current) {
          gsap.from(whyRightRef.current, {
            x: 40,
            opacity: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: whyRightRef.current,
              start: 'top 85%',
              once: true,
            },
          })
        }

        // Founder photo
        if (founderPhotoRef.current) {
          gsap.from(founderPhotoRef.current, {
            scale: 0.97,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: founderPhotoRef.current,
              start: 'top 80%',
              once: true,
            },
          })
        }

        // Category cards stagger
        if (categoryCardsRef.current) {
          const cards = categoryCardsRef.current.querySelectorAll('.cat-card')
          gsap.from(cards, {
            y: 20,
            opacity: 0,
            stagger: 0.06,
            duration: 0.6,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: categoryCardsRef.current,
              start: 'top 85%',
              once: true,
            },
          })
        }
      })
    })
  }, [])

  return (
    <main className="bg-cream overflow-x-hidden">

      {/* ========== HERO ========== */}
      <section className="relative grain bg-cream min-h-[72vh] flex flex-col justify-center pt-3 pb-3">
        {/* Saffron radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at bottom right, rgba(217,119,6,0.10), transparent 58%)' }}
        />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full">
          <div className="grid md:grid-cols-[60%_40%] gap-10 items-center">

            {/* Left */}
            <div className="py-7 md:py-11">
              <p ref={heroKickerRef} className="text-saffron text-[11px] font-bold uppercase tracking-[0.18em] mb-5">
                CELEBRATING EXCELLENCE · HONORING TRUE HEROES
              </p>
              <h1
                ref={h1Ref}
                className="text-navy font-bold leading-[0.92] mb-6"
                style={{
                  fontSize: 'clamp(64px, 7vw, 100px)',
                }}
              >
                Bharat Ke Anmol
              </h1>
              <p ref={heroCopyRef} className="text-muted text-[18px] leading-[1.7] max-w-[560px] mb-8">
                A prestigious national award platform recognizing individuals who are making a real difference in society. From entrepreneurs to social leaders, from innovators to change-makers, we honor those who truly deserve to be called Bharat Ke Anmol.
              </p>
              <div ref={heroActionsRef} className="flex flex-wrap items-center gap-4">
                <Link
                  href="/nominate"
                  className="gsap-hover bg-saffron text-white font-bold px-7 py-3.5 rounded-full hover:bg-amber transition-colors duration-200 text-[15px]"
                >
                  Nominate Now
                </Link>
                <Link
                  href="/partner"
                  className="gsap-hover text-navy font-semibold text-[15px] hover:text-saffron transition-colors duration-200 flex items-center gap-1.5"
                >
                  Become a Partner <span className="hover-icon text-saffron">→</span>
                </Link>
              </div>
            </div>

            {/* Right — Logo with ambient glow */}
            <div ref={photoRef} className="relative flex flex-col items-center justify-center py-5 md:py-9">
              {/* Saffron/amber glow blob */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: '340px',
                  height: '340px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-56%, -54%)',
                  background: 'radial-gradient(circle, rgba(245,158,11,0.30), transparent 65%)',
                  filter: 'blur(40px)',
                }}
              />
              {/* Gold glow blob */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: '260px',
                  height: '260px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-42%, -46%)',
                  background: 'radial-gradient(circle, rgba(184,137,46,0.25), transparent 65%)',
                  filter: 'blur(48px)',
                }}
              />
              <div className="relative z-10 flex flex-col items-center gap-5">
                <Image
                  src="/media/BharatKeAnmolLogo.png"
                  alt="Bharat Ke Anmol"
                  width={260}
                  height={526}
                  priority
                  className="object-contain h-[170px] w-auto md:h-[210px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 bg-[#f5ede0] border-y border-gold/20 mt-0">
          <div
            ref={statsRef}
            className="max-w-[1040px] mx-auto px-6 py-8 md:py-10 grid grid-cols-1 sm:grid-cols-3 gap-7 text-center"
          >
            <div className="stat-item">
              <StatCounter target="100" label="Honorees" />
              <p className="text-[12px] text-muted uppercase tracking-[0.1em] mt-2">Honorees</p>
            </div>
            <div className="stat-item sm:border-x sm:border-gold/25 sm:px-7">
              <div className="text-[42px] md:text-[56px] font-bold text-navy leading-none">
                All India
              </div>
              <p className="text-[12px] text-muted uppercase tracking-[0.1em] mt-2">Reach</p>
            </div>
            <div className="stat-item">
              <div className="text-[42px] md:text-[56px] font-bold text-navy leading-none">
                Trusted
              </div>
              <p className="text-[12px] text-muted uppercase tracking-[0.1em] mt-2">Recognition</p>
            </div>
          </div>
        </div>

      </section>

      {/* ========== ABOUT BAND ========== */}
      <section className="relative overflow-hidden bg-navy" id="about">
        <IconMarquee side="left" />
        <IconMarquee side="right" />
        <AnimatedSection className="relative z-10 max-w-[900px] mx-auto px-10 py-24 lg:px-6">
          <p className="text-saffron text-[11px] font-bold uppercase tracking-[0.16em] mb-4">
            About Bharat Ke Anmol
          </p>
          <h2 className="text-white font-bold text-[clamp(32px,4vw,52px)] leading-[1.08] mb-10">
            Recognition built around<br />dignity, impact, and national pride.
          </h2>
          <div className="grid md:grid-cols-[3fr_2fr] gap-10 items-start">
            <p className="text-white/60 text-[17px] leading-[1.75]">
              Bharat Ke Anmol is one of India&apos;s most respected award platforms, created to bring forward inspiring stories that often go unnoticed. The purpose is simple: identify people whose work strengthens society and give them the stage they deserve.
            </p>
            <p className="text-gold text-[22px] italic leading-[1.5] font-medium">
              &ldquo;...give them the stage they deserve.&rdquo;
            </p>
          </div>
        </AnimatedSection>

        <WaveDivider path={WAVE_ABOUT_BOTTOM} fill="#f5ede0" className="wave-full h-20 -mb-px" />
      </section>

      {/* ========== WHY BKA + MISSION ========== */}
      <section className="relative overflow-hidden bg-[#f5ede0] px-6 pt-24 pb-0" id="why">
        {/* Ambient amber blob top-right */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.12), transparent 70%)', filter: 'blur(60px)' }} />
        <div className="relative z-10 max-w-[1280px] mx-auto">
          <div className="grid gap-8 items-stretch md:grid-cols-[minmax(0,3fr)_1px_minmax(0,2fr)] md:gap-0">

            {/* Left — Why BKA */}
            <div
              ref={whyLeftRef}
              className="gsap-hover bg-white border border-saffron/35 rounded-2xl p-10 mr-0 md:mr-10 shadow-[0_18px_45px_rgba(27,40,69,0.08)]"
            >
              <p className="text-saffron text-[11px] font-bold uppercase tracking-[0.16em] mb-4">
                Why Bharat Ke Anmol
              </p>
              <h3 className="text-navy font-bold text-[26px] leading-[1.2] mb-8">
                Built to carry credibility, not just attention.
              </h3>
              <ul className="flex flex-col gap-4">
                {strengths.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={17} className="hover-icon text-saffron shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-navy/80 text-[15px] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Center — Vertical gold line */}
            <div className="hidden md:block w-px bg-gold/40 self-stretch my-8" />

            {/* Right — Mission */}
            <div
              ref={whyRightRef}
              className="pl-0 md:pl-10 flex items-center py-6"
            >
              <p className="text-navy italic text-[22px] leading-[1.55] font-medium">
                To recognize outstanding individuals, inspire future generations, and connect achievers with leaders who can extend that impact.
              </p>
            </div>
          </div>
        </div>
        <WaveDivider path={WAVE_WHY_BOTTOM} fill="#ffffff" className="wave-full h-20 mt-16 -mb-px" />
      </section>

      {/* ========== FOUNDER ========== */}
      <section className="relative overflow-hidden bg-white px-6 pt-24 pb-14" id="founder">
        {/* Ambient saffron blob bottom-left */}
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(217,119,6,0.09), transparent 70%)', filter: 'blur(50px)' }} />
        <div className="relative z-10 max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left — Copy */}
            <AnimatedSection className="relative">
              {/* Background quote mark */}
              <span className="absolute -top-4 -left-2 text-[200px] leading-none text-navy/5 font-serif select-none pointer-events-none">
                &ldquo;
              </span>
              <div className="relative z-10">
                <p className="text-saffron text-[11px] font-bold uppercase tracking-[0.16em] mb-4">
                  About the Founder
                </p>
                <h3 className="text-navy font-bold text-[32px] leading-[1.15] mb-6">
                  Dr. Mohammad Nizamuddin
                </h3>
                <p className="text-muted text-[16px] leading-[1.75] mb-8">
                  A visionary leader, social reformer, and the driving force behind Bharat Ke Anmol. His mission is to identify, honor, and inspire excellence across India through a platform that celebrates real contribution to society.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Visionary Leader', 'Social Reformer', 'National Award Platform'].map((chip) => (
                    <span
                      key={chip}
                      className="gsap-hover text-[11px] font-semibold text-navy border border-saffron/60 px-3 py-1.5 rounded-full inline-block"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right — Photo, organic, no box */}
            <div ref={founderPhotoRef} className="relative">
              <Image
                src="/mandala/mandala_2.png"
                alt=""
                width={560}
                height={560}
                className="pointer-events-none absolute -right-16 -top-16 h-[360px] w-[360px] opacity-[0.07]"
                aria-hidden="true"
              />
              <div
                className="relative z-10 w-full h-[470px]"
                style={{
                  boxShadow: '0 20px 60px rgba(27,40,69,0.14), 0 4px 16px rgba(27,40,69,0.08)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/media/NizamImage.jpg"
                  alt="Dr. Mohammad Nizamuddin"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== AWARD CATEGORIES ========== */}
      <section className="relative overflow-hidden bg-cream py-24 px-6" id="categories">
        <IconMarquee side="left" />
        <IconMarquee side="right" />
        {/* Ambient navy blob top-right */}
        <div className="absolute top-10 right-0 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(27,40,69,0.07), transparent 70%)', filter: 'blur(50px)' }} />
        <div className="relative z-10 max-w-[1280px] mx-auto">
          <AnimatedSection className="mb-12">
            <p className="text-saffron text-[11px] font-bold uppercase tracking-[0.16em] mb-3">
              Award Categories
            </p>
            <h2 className="text-navy font-bold text-[clamp(28px,3.5vw,44px)] leading-[1.1] max-w-[640px]">
              A broad set of categories to honor diverse forms of impact.
            </h2>
          </AnimatedSection>

          {/* Asymmetric category grid */}
          <div
            ref={categoryCardsRef}
            className="award-grid grid gap-3"
          >
            {categories.map(({ name, Icon }, i) => {
              // Asymmetric spans: row1=[5,5,4], row2=[4,5,5], row3=[5,5,4]
              const spans = [5, 5, 4, 4, 5, 5, 5, 5, 4]
              const span = spans[i] ?? 5
              return (
                <article
                  key={name}
                  className="gsap-hover cat-card bg-off-white border border-gold/20 rounded-2xl p-5 cursor-default group hover:border-saffron hover:shadow-[0_14px_30px_rgba(27,40,69,0.08)] transition-[border-color,box-shadow] duration-200"
                  style={{
                    '--span': span,
                  } as CSSProperties}
                >
                  <Icon size={20} className="hover-icon text-saffron mb-3" strokeWidth={1.8} />
                  <p className="text-navy font-bold text-[13px] leading-snug">{name}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========== LEGACY / UPCOMING ========== */}
      <section className="px-6 pt-24 pb-0 bg-off-white" id="legacy">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">

            {/* Legacy panel — navy */}
            <AnimatedSection
              className="bg-navy rounded-3xl p-10 text-white"
              delay={0}
            >
              <p className="text-saffron text-[10px] font-bold uppercase tracking-[0.18em] mb-5">
                OUR LEGACY
              </p>
              <h3 className="text-white font-bold text-[26px] leading-[1.2] mb-5">
                Hundreds of achievers recognized across the nation.
              </h3>
              <p className="text-white/55 text-[15px] leading-[1.75]">
                Our events have become a symbol of credibility, inspiration, and celebration of true excellence.
              </p>
            </AnimatedSection>

            {/* Upcoming panel — cream, saffron top border */}
            <AnimatedSection
              className="bg-cream border-t-4 border-saffron rounded-3xl p-10"
              delay={0.1}
            >
              <p className="text-saffron text-[10px] font-bold uppercase tracking-[0.18em] mb-5">
                UPCOMING
              </p>
              <h3 className="text-navy font-bold text-[26px] leading-[1.2] mb-5">
                New categories. Esteemed jury. High-profile guests. Grand recognition ceremony.
              </h3>
              <p className="text-muted text-[15px] leading-[1.75]">
                We are preparing the next edition to be bigger, sharper, and more impactful.
              </p>
            </AnimatedSection>
          </div>
        </div>
        <WaveDivider path={WAVE_CATS_TOP} fill="#d97706" className="wave-full h-20 mt-16 -mb-px" />
      </section>

      {/* ========== CTA BAND ========== */}
      <section
        className="relative py-28 px-6 overflow-hidden text-center bg-saffron"
        id="forms"
      >
        <div className="relative z-10 max-w-[700px] mx-auto">
          <p className="text-white/80 text-[11px] font-bold uppercase tracking-[0.18em] mb-5">
            Are you the next Bharat Ke Anmol?
          </p>
          <h2 className="text-white font-bold text-[clamp(32px,4.5vw,56px)] leading-[1.1] mb-10">
            Step forward.<br />Share your story.<br />Get recognized.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/nominate"
              className="bg-white text-navy font-bold px-8 py-3.5 rounded-full text-[15px] hover:bg-cream transition-colors duration-200"
            >
              Nominate Now
            </Link>
            <Link
              href="/partner"
              className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full text-[15px] hover:bg-white/10 transition-colors duration-200"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
