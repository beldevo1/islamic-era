import { Chapter } from "../data/articleData";

interface Props {
  chapter: Chapter;
  index: number;
}

export default function ChapterSection({ chapter, index }: Props) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={chapter.id}
      className={`scroll-mt-24 py-12 ${isEven ? "" : ""}`}
    >
      {/* Chapter header */}
      <div className="mb-10">
        <span className="font-tajawal text-sm font-bold text-gold-600 tracking-wider mb-2 block">
          {chapter.number}
        </span>
        <h2 className="chapter-heading font-amiri text-2xl md:text-3xl font-bold text-ink-950 leading-relaxed">
          {chapter.title}
        </h2>
      </div>

      {/* Chapter content */}
      <div className="article-body">
        {chapter.content.map((paragraph, pIndex) => (
          <p key={pIndex} className="text-ink-800 font-normal">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Chapter divider */}
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
  );
}
