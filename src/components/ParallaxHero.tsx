'use client'

import { useEffect, useRef } from 'react'

export default function ParallaxHero({ children }: { children: React.ReactNode }) {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return
      const scrollY = window.scrollY
      bgRef.current.style.transform = `translateY(${scrollY * 0.35}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={bgRef} className="absolute inset-0 z-0 scale-110 origin-top">
      {children}
    </div>
  )
}
