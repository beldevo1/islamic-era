import { useState, useEffect } from "react";
import { chapters } from "../data/articleData";

export default function TableOfContents() {
  const [activeId, setActiveId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const allSections = [
    { id: "introduction", label: "المقدمة" },
    ...chapters.map((ch) => ({ id: ch.id, label: ch.title })),
    { id: "references", label: "المصادر والمراجع" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );

    allSections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="xl:hidden fixed bottom-6 left-6 z-50 bg-ink-950 text-parchment-100 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:bg-gold-700 transition-colors"
        aria-label="فهرس المحتويات"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`
          fixed top-0 right-0 h-full w-80 bg-parchment-50 border-l border-parchment-300 
          shadow-xl z-40 transform transition-transform duration-300 overflow-y-auto
          xl:sticky xl:top-24 xl:h-fit xl:max-h-[calc(100vh-8rem)] xl:w-full xl:shadow-none 
          xl:border-l-0 xl:border xl:border-parchment-300 xl:rounded-xl xl:transform-none xl:z-10
          ${isOpen ? "translate-x-0" : "translate-x-full xl:translate-x-0"}
        `}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-tajawal font-bold text-lg text-ink-950">
              فهرس المحتويات
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="xl:hidden text-ink-500 hover:text-ink-950"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="geometric-border mb-6" />
          <ul className="space-y-1">
            {allSections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollTo(section.id)}
                  className={`toc-link block w-full text-right py-2.5 px-3 rounded-lg text-sm leading-relaxed transition-all ${
                    activeId === section.id
                      ? "active bg-gold-50"
                      : "text-ink-700 hover:text-gold-600"
                  }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
