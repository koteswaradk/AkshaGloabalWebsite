import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'

const baseUrl: string = import.meta.env.BASE_URL || '/'

const slides = [
  {
    image: `${baseUrl}slider-images/slide1.png`,
    imageWebp: `${baseUrl}slider-images/slide1.webp`,
    title: 'Solving Real Problems with AI & Robust Solutions',
    alt: 'AI-powered solutions with robotics and mobile apps',
    link: '/products',
    cta: 'Explore Products',
  },
  {
    image: `${baseUrl}slider-images/slide2.png`,
    imageWebp: `${baseUrl}slider-images/slide2.webp`,
    title: 'Master the Latest Technologies',
    alt: 'Professional developer training programs in Android, iOS, GenAI & KMP',
    link: '/training',
    cta: 'View Training Tracks',
  },
  {
    image: `${baseUrl}slider-images/slide3.png`,
    imageWebp: `${baseUrl}slider-images/slide3.webp`,
    title: 'Bringing Stories to Life',
    alt: 'Aksha Globals Studios audio, video, and animation production',
    link: '/studio',
    cta: 'Discover Studio',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const total = slides.length

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return
      setIsAnimating(true)
      setCurrent((index + total) % total)
      setTimeout(() => setIsAnimating(false), 450)
    },
    [isAnimating, total],
  )

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next, isPaused])

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true)
    touchStartX.current = e.targetTouches[0].clientX
    touchEndX.current = null
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    setIsPaused(false)
    if (touchStartX.current === null || touchEndX.current === null) return
    const diff = touchStartX.current - touchEndX.current
    if (diff > 45) {
      next()
    } else if (diff < -45) {
      prev()
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <section
      className="relative w-full aspect-[16/9] min-h-[220px] sm:min-h-[320px] md:min-h-[420px] max-h-[720px] overflow-hidden bg-slate-950 select-none group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero slider"
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((s, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Ambient Blurred Background (Prevents ugly black letterbox margins on mismatched ratios) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <picture>
                <source srcSet={s.imageWebp} type="image/webp" />
                <img
                  src={s.image}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover blur-2xl opacity-35 scale-110 transform-gpu"
                />
              </picture>
              <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
            </div>

            {/* Main Crisp Slide Image — object-contain ensures 100% of graphics, text, and logos fit cleanly */}
            <div className="relative w-full h-full flex items-center justify-center p-0.5 sm:p-2">
              <Link
                to={s.link}
                className="w-full h-full flex items-center justify-center group/slide cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                tabIndex={idx === current ? 0 : -1}
                aria-label={`${s.title} - ${s.cta}`}
              >
                <picture className="w-full h-full flex items-center justify-center">
                  <source srcSet={s.imageWebp} type="image/webp" />
                  <img
                    src={s.image}
                    alt={s.alt}
                    className="max-w-full max-h-full w-auto h-auto object-contain mx-auto drop-shadow-2xl transition-transform duration-500 group-hover/slide:scale-[1.01]"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    fetchPriority={idx === 0 ? 'high' : 'auto'}
                    decoding="async"
                  />
                </picture>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-3 sm:bottom-5 left-0 right-0 flex items-center justify-center gap-2 sm:gap-3 z-20">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}: ${s.title}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              i === current
                ? 'w-7 sm:w-9 h-2.5 sm:h-3 bg-white shadow-md shadow-white/50'
                : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/40 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Responsive Arrow Buttons */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-black/45 hover:bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-200 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-black/45 hover:bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-200 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Progress Bar */}
      {!isPaused && (
        <div className="absolute bottom-0 left-0 h-1 bg-white/25 w-full z-20">
          <div
            key={current}
            className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]"
            style={{ animation: 'progressBar 5s linear' }}
          />
        </div>
      )}

      <style>{`
        @keyframes progressBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  )
}
