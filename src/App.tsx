import ReadingProgress from "./components/ReadingProgress";
import HeroSection from "./components/HeroSection";
import TableOfContents from "./components/TableOfContents";
import ChapterSection from "./components/ChapterSection";
import ReferencesSection from "./components/ReferencesSection";
import { introduction, chapters, articleMeta } from "./data/articleData";

function App() {
  return (
    <div className="min-h-screen bg-parchment-50" dir="rtl">
      <ReadingProgress />
      <HeroSection />

      {/* Keywords bar */}
      <div className="bg-parchment-100 border-b border-parchment-300">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-tajawal text-xs font-bold text-ink-500 ml-2">الكلمات المفتاحية:</span>
            {articleMeta.keywords.map((keyword, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 rounded-full bg-parchment-200 text-ink-700 font-tajawal text-xs border border-parchment-300 hover:bg-gold-100 hover:border-gold-300 transition-colors cursor-default"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="flex flex-col xl:flex-row gap-10">
          {/* Article content */}
          <article className="flex-1 min-w-0">
            {/* Introduction */}
            <section id="introduction" className="scroll-mt-24 mb-12">
              <div className="mb-10">
                <span className="font-tajawal text-sm font-bold text-gold-600 tracking-wider mb-2 block">
                  تمهيد
                </span>
                <h2 className="chapter-heading font-amiri text-2xl md:text-3xl font-bold text-ink-950 leading-relaxed">
                  مقدمة
                </h2>
              </div>

              {/* Drop cap first paragraph */}
              <div className="article-body">
                <div className="relative mb-8">
                  <span className="float-right text-7xl font-amiri font-bold text-gold-500 leading-none mr-0 ml-3 mt-1 select-none">
                    ح
                  </span>
                  <p className="text-ink-800 !text-indent-0" style={{ textIndent: 0 }}>
                    {"ين أغمض النبي محمد عينيه للمرة الأخيرة في حجرة عائشة بنت أبي بكر يوم الاثنين الثاني عشر من ربيع الأول سنة إحدى عشرة للهجرة، الموافق لشهر يونيو من سنة 632 ميلادية، لم يكن قد ترك وراءه نصا صريحا لا لبس فيه يحدد من يخلفه في قيادة الجماعة التي أسسها على مدار ثلاثة وعشرين عاما من الدعوة والحرب والسياسة وبناء الدولة. هذا الغياب، أو على الأقل هذا الغموض في مسألة الخلافة، سيصبح الشرارة التي أشعلت أول أزمة سياسية كبرى في تاريخ الإسلام، وسيمتد أثرها عبر القرون حتى يومنا هذا."}
                  </p>
                </div>
                {introduction.slice(1).map((paragraph, index) => (
                  <p key={index} className="text-ink-800">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Intro divider */}
              <div className="mt-12 flex items-center justify-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-l from-parchment-300 to-transparent" />
                <div className="flex gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-200" />
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-parchment-300 to-transparent" />
              </div>
            </section>

            {/* Chapters */}
            {chapters.map((chapter, index) => (
              <ChapterSection key={chapter.id} chapter={chapter} index={index} />
            ))}

            {/* References */}
            <ReferencesSection />
          </article>

          {/* Sidebar TOC */}
          <aside className="xl:w-72 shrink-0">
            <TableOfContents />
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-ink-950 text-parchment-400 border-t border-gold-500/20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center">
            {/* Decorative element */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-20 bg-gradient-to-l from-gold-500/40 to-transparent" />
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gold-500/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <div className="h-px w-20 bg-gradient-to-r from-gold-500/40 to-transparent" />
            </div>

            <h3 className="font-amiri text-xl text-parchment-200 mb-3">
              {articleMeta.title}
            </h3>
            <p className="font-amiri text-sm text-gold-500/60 mb-6">
              {articleMeta.subtitle}
            </p>

            <div className="geometric-border mb-6 max-w-xs mx-auto" />

            <p className="font-tajawal text-xs text-parchment-600 leading-relaxed max-w-lg mx-auto">
              هذه الدراسة التاريخية التحليلية تهدف إلى تقديم رواية موضوعية للأحداث السياسية في صدر الإسلام استنادًا إلى المصادر التاريخية الكلاسيكية والدراسات الأكاديمية الحديثة. التاريخ يُروى كما هو، بوصفه سلسلة من القرارات البشرية في ظروف معينة.
            </p>

            <div className="mt-8 pt-6 border-t border-parchment-800/30">
              <p className="font-tajawal text-xs text-parchment-700">
                الفترة المدروسة: {articleMeta.period} ({articleMeta.periodHijri})
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <BackToTop />
    </div>
  );
}

function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-30 bg-gold-600 hover:bg-gold-700 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:shadow-xl"
      aria-label="العودة إلى الأعلى"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}

export default App;
