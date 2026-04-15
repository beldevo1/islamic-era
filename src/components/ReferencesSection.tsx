import { references } from "../data/articleData";

export default function ReferencesSection() {
  const arabicRefs = references.filter((r) => r.isArabic);
  const englishRefs = references.filter((r) => !r.isArabic);

  return (
    <section id="references" className="scroll-mt-24 py-12">
      <div className="mb-10">
        <span className="font-tajawal text-sm font-bold text-gold-600 tracking-wider mb-2 block">
          المصادر والمراجع
        </span>
        <h2 className="chapter-heading font-amiri text-2xl md:text-3xl font-bold text-ink-950 leading-relaxed">
          قائمة المصادر والمراجع المعتمدة
        </h2>
      </div>

      {/* Arabic references */}
      <div className="mb-10">
        <h3 className="font-tajawal font-bold text-lg text-ink-800 mb-5 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          المصادر العربية
        </h3>
        <ol className="space-y-3">
          {arabicRefs.map((ref, index) => (
            <li key={index} className="ref-item rounded-lg bg-parchment-100/50">
              <span className="font-tajawal text-sm text-gold-700 font-bold ml-2">
                [{index + 1}]
              </span>
              <span className="text-ink-700 text-sm leading-relaxed">{ref.text}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* English references */}
      <div>
        <h3 className="font-tajawal font-bold text-lg text-ink-800 mb-5 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          المراجع الأجنبية
        </h3>
        <ol className="space-y-3" dir="ltr">
          {englishRefs.map((ref, index) => (
            <li key={index} className="ref-item rounded-lg bg-parchment-100/50 text-left">
              <span className="font-tajawal text-sm text-gold-700 font-bold mr-2">
                [{arabicRefs.length + index + 1}]
              </span>
              <span className="text-ink-700 text-sm leading-relaxed font-sans">{ref.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
