"use client";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function LegalContent({ content }) {
  return (
    <div className="prose prose-slate max-w-none
      prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight
      prose-h1:text-3xl prose-h1:sm:text-4xl prose-h1:mb-8 prose-h1:leading-tight
      prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-slate-200
      prose-h3:text-xl prose-h3:sm:text-2xl prose-h3:mt-10 prose-h3:mb-4
      prose-h4:text-lg prose-h4:sm:text-xl prose-h4:mt-6 prose-h4:mb-3 prose-h4:font-semibold
      prose-p:text-brand-primaryText prose-p:leading-relaxed prose-p:mb-5 prose-p:text-base prose-p:sm:text-lg
      prose-strong:text-brand-primaryText prose-strong:font-semibold
      prose-ul:my-5 prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
      prose-ol:my-5 prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
      prose-li:text-brand-primaryText prose-li:leading-relaxed prose-li:text-base
      prose-a:text-aether-cyan prose-a:hover:text-aether-cyan/80 prose-a:transition-colors prose-a:underline
      prose-code:text-brand-accentPrimary prose-code:bg-brand-utility prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
      prose-table:w-full prose-table:border-collapse prose-table:my-8 prose-table:text-sm prose-table:sm:text-base
      prose-thead:bg-brand-utility
      prose-th:border prose-th:border-slate-300 prose-th:bg-brand-utility prose-th:p-3 prose-th:sm:p-4 prose-th:text-left prose-th:font-semibold prose-th:text-brand-primaryText
      prose-td:border prose-td:border-slate-300 prose-td:p-3 prose-td:sm:p-4 prose-td:text-brand-primaryText
      prose-blockquote:border-l-4 prose-blockquote:border-brand-accentPrimary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:my-6 prose-blockquote:text-brand-secondaryText
      prose-hr:my-12 prose-hr:border-slate-200
    ">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}