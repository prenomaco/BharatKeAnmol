'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  fromY?: number
}

export function AnimatedSection({ children, className, delay = 0, fromY = 24 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let gsapModule: typeof import('gsap') | null = null
    let ScrollTriggerModule: typeof import('gsap/ScrollTrigger').ScrollTrigger | null = null

    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)
        gsapModule = { gsap } as unknown as typeof import('gsap')
        ScrollTriggerModule = ScrollTrigger

        if (!ref.current) return
        gsap.from(ref.current, {
          y: fromY,
          opacity: 0,
          duration: 0.7,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 88%',
            once: true,
          },
        })
      })
    })

    return () => {
      if (ScrollTriggerModule) ScrollTriggerModule.getAll().forEach((t) => t.kill())
    }
  }, [delay, fromY])

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  )
}
