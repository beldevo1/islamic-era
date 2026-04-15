import { articleMeta, timelineEvents } from "../data/articleData";

export default function HeroSection() {
  return (
    <header className="hero-pattern relative overflow-hidden">
      {/* Decorative geometric patterns */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="islamic-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="#c8ae84" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="15" fill="none" stroke="#c8ae84" strokeWidth="0.3" />
              <circle cx="40" cy="40" r="8" fill="none" stroke="#c8ae84" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
        {/* Scholarly article badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-gold-500/30 bg-gold-500/10">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span className="font-tajawal text-sm text-gold-300">دراسة تاريخية تحليلية</span>
        </div>

        {/* Title */}
        <h1 className="font-amiri text-4xl md:text-5xl lg:text-6xl font-bold text-parchment-100 leading-tight mb-6">
          {articleMeta.title}
        </h1>

        {/* Ornamental divider */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-gradient-to-l from-gold-500/60 to-transparent" />
          <span className="text-gold-400 text-2xl">✦</span>
          <div className="h-px w-16 bg-gradient-to-r from-gold-500/60 to-transparent" />
        </div>

        {/* Subtitle */}
        <h2 className="font-amiri text-xl md:text-2xl text-gold-300 mb-10 leading-relaxed">
          {articleMeta.subtitle}
        </h2>

        {/* Meta info */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-parchment-400 font-tajawal text-sm">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{articleMeta.period}</span>
            <span className="text-gold-500/40 mx-1">|</span>
            <span>{articleMeta.periodHijri}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{articleMeta.readingTime} قراءة</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>{articleMeta.wordCount} كلمة</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto text-gold-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Timeline strip */}
      <div className="relative bg-ink-950/80 border-t border-gold-500/20 overflow-x-auto">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-start gap-0 min-w-max">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex items-start">
                <div className="flex flex-col items-center text-center min-w-[120px] px-2">
                  <div className="timeline-dot mb-2 shrink-0" />
                  <span className="font-tajawal text-xs font-bold text-gold-400 mb-1">
                    {event.year} م
                  </span>
                  <span className="font-tajawal text-[10px] text-parchment-500 leading-tight max-w-[110px]">
                    {event.event}
                  </span>
                </div>
                {index < timelineEvents.length - 1 && (
                  <div className="h-px w-8 bg-gold-500/30 mt-[7px] shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
