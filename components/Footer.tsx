import Link from 'next/link'
import { Globe, AtSign, Rss, Send } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-navy">
      <div className="max-w-[1280px] mx-auto px-6 pt-14 pb-12">
        <div className="grid gap-12 md:grid-cols-[1.6fr_0.8fr_0.8fr]">
          {/* Col 1 — Masthead */}
          <div>
            <div className="text-[28px] font-bold italic text-white leading-tight mb-4">
              Bharat Ke Anmol.
            </div>
            <p className="text-white/75 text-[13px] mb-4 leading-relaxed max-w-[340px]">
              A prestigious national award ceremony celebrating the real gems of India.
            </p>
            <p className="text-white/65 text-[12px] leading-relaxed max-w-[340px]">
              We identify people whose work strengthens society and give them the stage they truly deserve. From entrepreneurs to social leaders: recognized, honored, celebrated.
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-saffron mb-5">
              Quick Links
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/#about' },
                { label: 'Nominate', href: '/nominate' },
                { label: 'Partner', href: '/partner' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="gsap-hover !text-white text-[13px] hover:!text-white/75 transition-colors duration-200 inline-block"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 — Connect */}
          <div>
            <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-saffron mb-5">
              Connect
            </div>
            <div className="flex items-center gap-4">
              {[
                { Icon: AtSign, label: 'Instagram', href: '#' },
                { Icon: Send, label: 'Twitter', href: '#' },
                { Icon: Globe, label: 'LinkedIn', href: '#' },
                { Icon: Rss, label: 'YouTube', href: '#' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="gsap-hover text-saffron hover:text-amber transition-colors duration-200 inline-block"
                >
                  <Icon className="hover-icon" size={20} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between flex-wrap gap-2">
          <p className="text-white/55 text-[12px]">
            &copy; {new Date().getFullYear()} Bharat Ke Anmol. All rights reserved.
          </p>
          <p className="text-white/55 text-[12px] italic">
            Recognizing the real gems of India.
          </p>
        </div>
      </div>
    </footer>
  )
}
