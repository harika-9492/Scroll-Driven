import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useHeroAnimation(sectionRef, visualRef) {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const revealTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=700',
          scrub: 1.2,
        },
      })
      revealTimeline
        .fromTo('.eyebrow', { y: 45, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power2.out' })
        .fromTo('.headline-line', { y: 95, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, stagger: 0.28, ease: 'power2.out' }, '-=0.45')
        .fromTo('.hero-copy', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power2.out' }, '-=0.45')
        .fromTo('.stat-card', { y: 45, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.22, ease: 'power2.out' }, '-=0.35')

      gsap.fromTo(visualRef.current,
        { x: 0, y: 0, rotate: 0, scale: 1 },
        {
          x: -260,
          y: 420,
          rotate: -18,
          scale: 0.48,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        },
      )
      gsap.to('.reveal-layer', {
        opacity: 0.22,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=500',
          scrub: 1.2,
        },
      })
    }, sectionRef)

    return () => context.revert()
  }, [sectionRef, visualRef])
}
