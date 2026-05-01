'use client'

import { useEffect, useRef } from 'react'
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
} from 'lucide-react'
import { WaveDivider } from '@/components/WaveDivider'
import { AnimatedSection } from '@/components/AnimatedSection'
import { WAVE_HERO, WAVE_ABOUT_TOP, WAVE_ABOUT_BOTTOM, WAVE_WHY_BOTTOM, WAVE_CATS_TOP } from '@/components/waves'

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
    <div ref={ref} className="text-[56px] md:text-[64px] font-bold text-navy leading-none">
      {target}
    </div>
  )
}

export default function HomePage() {
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)
  const whyLeftRef = useRef<HTMLDivElement>(null)
  const whyRightRef = useRef<HTMLDivElement>(null)
  const founderPhotoRef = useRef<HTMLDivElement>(null)
  const categoryCardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)

        // Hero H1 clip-path reveal
        if (h1Ref.current) {
          gsap.from(h1Ref.current, {
            clipPath: 'inset(0 100% 0 0)',
            duration: 0.9,
            ease: 'power3.out',
            delay: 0.1,
          })
        }

        // Hero photo
        if (photoRef.current) {
          gsap.from(photoRef.current, {
            scale: 0.94,
            opacity: 0,
            duration: 0.8,
            delay: 0.4,
            ease: 'power2.out',
          })
        }

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
      <section className="relative grain bg-cream min-h-[88vh] flex flex-col justify-center pt-10 pb-0">
        {/* Saffron radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(217,119,6,0.12), transparent 60%)' }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full">
          <div className="grid md:grid-cols-[60%_40%] gap-10 items-center">

            {/* Left */}
            <div className="py-12 md:py-20">
              <p className="text-saffron text-[11px] font-bold uppercase tracking-[0.18em] mb-5">
                CELEBRATING EXCELLENCE · HONORING TRUE HEROES
              </p>
              <h1
                ref={h1Ref}
                className="text-navy font-bold leading-[0.92] mb-6"
                style={{
                  fontSize: 'clamp(64px, 7vw, 100px)',
                  clipPath: 'inset(0 0% 0 0)',
                }}
              >
                Bharat Ke Anmol
              </h1>
              <div className="w-16 h-[3px] bg-gold mb-6" />
              <p className="text-muted text-[18px] leading-[1.7] max-w-[520px] mb-8">
                A prestigious national award platform recognizing individuals who are making a real difference in society. From entrepreneurs to social leaders, from innovators to change-makers, we honor those who truly deserve to be called Bharat Ke Anmol.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/nominate"
                  className="bg-saffron text-white font-bold px-7 py-3.5 rounded-full hover:bg-amber transition-colors duration-200 text-[15px]"
                >
                  Nominate Now
                </Link>
                <Link
                  href="/partner"
                  className="text-navy font-semibold text-[15px] hover:text-saffron transition-colors duration-200 flex items-center gap-1.5"
                >
                  Become a Partner <span className="text-saffron">→</span>
                </Link>
              </div>
            </div>

            {/* Right — Logo with ambient glow */}
            <div ref={photoRef} className="relative flex flex-col items-center justify-center py-12 md:py-20">
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
                  width={300}
                  height={300}
                  priority
                  className="object-contain w-[220px] h-[220px] md:w-[300px] md:h-[300px]"
                />
                <p className="text-muted text-[13px] italic text-center">
                  A national award ceremony
                </p>
              </div>
            </div>
          </div>

          {/* Stats row — NO boxes, pure type */}
          <div className="flex flex-wrap items-center gap-0 pb-10 mt-6 md:mt-0">
            <div className="pr-10">
              <StatCounter target="100" label="Honorees" />
              <p className="text-[12px] text-muted uppercase tracking-[0.1em] mt-1">Honorees</p>
            </div>
            <div className="w-px h-12 bg-gold/30 mr-10 hidden sm:block" />
            <div className="pr-10">
              <div className="text-[56px] md:text-[64px] font-bold text-navy leading-none">
                All India
              </div>
              <p className="text-[12px] text-muted uppercase tracking-[0.1em] mt-1">Reach</p>
            </div>
            <div className="w-px h-12 bg-gold/30 mr-10 hidden sm:block" />
            <div>
              <div className="text-[56px] md:text-[64px] font-bold text-navy leading-none">
                Trusted
              </div>
              <p className="text-[12px] text-muted uppercase tracking-[0.1em] mt-1">Recognition</p>
            </div>
          </div>
        </div>

        <WaveDivider path={WAVE_HERO} fill="#1b2845" className="h-[95px] mt-4" />
      </section>

      {/* ========== ABOUT BAND ========== */}
      <section className="relative bg-navy" id="about">
        <WaveDivider path={WAVE_ABOUT_TOP} fill="#fffaf0" className="h-[95px] rotate-180 -mt-[2px]" />

        <AnimatedSection className="max-w-[900px] mx-auto px-6 py-20">
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

        <WaveDivider path={WAVE_ABOUT_BOTTOM} fill="#f5ede0" className="h-[70px]" />
      </section>

      {/* ========== WHY BKA + MISSION ========== */}
      <section className="relative overflow-hidden bg-[#f5ede0] py-24 px-6" id="why">
        {/* Ambient amber blob top-right */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.12), transparent 70%)', filter: 'blur(60px)' }} />
        <div className="max-w-[1280px] mx-auto">
          <div className="grid gap-0 items-stretch" style={{ gridTemplateColumns: 'minmax(0,3fr) 1px minmax(0,2fr)' }}>

            {/* Left — Why BKA */}
            <div
              ref={whyLeftRef}
              className="bg-white border-l-4 border-saffron rounded-2xl p-10 mr-0 md:mr-10"
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
                    <Check size={17} className="text-saffron shrink-0 mt-0.5" strokeWidth={2.5} />
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
        <WaveDivider path={WAVE_WHY_BOTTOM} fill="#ffffff" className="h-[80px] -mt-[1px]" />
      </section>

      {/* ========== FOUNDER ========== */}
      <section className="relative overflow-hidden bg-white py-24 px-6" id="founder">
        {/* Ambient saffron blob bottom-left */}
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(217,119,6,0.09), transparent 70%)', filter: 'blur(50px)' }} />
        <div className="max-w-[1280px] mx-auto">
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
                      className="text-[11px] font-semibold text-navy border border-saffron/60 px-3 py-1.5 rounded-full"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right — Photo, organic, no box */}
            <div ref={founderPhotoRef} className="relative">
              <div
                className="relative w-full h-[520px]"
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
        {/* Ambient navy blob top-right */}
        <div className="absolute top-10 right-0 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(27,40,69,0.07), transparent 70%)', filter: 'blur(50px)' }} />
        <div className="max-w-[1280px] mx-auto">
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
            className="grid gap-3"
            style={{ gridTemplateColumns: 'repeat(14, 1fr)' }}
          >
            {categories.map(({ name, Icon }, i) => {
              // Asymmetric spans: row1=[5,5,4], row2=[4,5,5], row3=[5,5,4]
              const spans = [5, 5, 4, 4, 5, 5, 5, 5, 4]
              const span = spans[i] ?? 5
              return (
                <article
                  key={name}
                  className="cat-card bg-off-white border border-gold/20 rounded-2xl p-5 cursor-default group hover:-translate-y-1 hover:border-saffron transition-[transform,border-color] duration-200"
                  style={{
                    gridColumn: `span ${span}`,
                  }}
                >
                  <Icon size={20} className="text-saffron mb-3" strokeWidth={1.8} />
                  <p className="text-navy font-bold text-[13px] leading-snug">{name}</p>
                </article>
              )
            })}
          </div>
        </div>
        <WaveDivider path={WAVE_CATS_TOP} fill="#f5ede0" className="h-[80px] mt-8" />
      </section>

      {/* ========== LEGACY / UPCOMING ========== */}
      <section className="py-24 px-6 bg-off-white" id="legacy">
        <div className="max-w-[1280px] mx-auto">
          {/* Thin saffron rule */}
          <div className="w-full h-[1px] bg-saffron/20 mb-16" />

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
      </section>

      {/* ========== CTA BAND ========== */}
      <section
        className="relative grain py-28 px-6 overflow-hidden text-center"
        style={{ background: 'linear-gradient(135deg, #d97706, #f59e0b)' }}
        id="forms"
      >
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            opacity: 0.08,
          }}
        />

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
