'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';

interface MarkdownRendererProps {
  content: string;
}

// Custom sanitize schema to allow inline styles
const customSchema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    '*': [...(defaultSchema.attributes?.['*'] || []), 'style', 'className'],
    div: [...(defaultSchema.attributes?.div || []), 'style'],
    a: [...(defaultSchema.attributes?.a || []), 'style'],
    h3: [...(defaultSchema.attributes?.h3 || []), 'style'],
    p: [...(defaultSchema.attributes?.p || []), 'style'],
  },
};

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, [rehypeSanitize, customSchema]]}
      components={{
        h1: ({ node, ...props }) => <h1 className="text-4xl font-bold text-neutral-900 mt-8 mb-4" {...props} />,
        h2: ({ node, children, ...props }) => {
          // Check if H2 contains a link (for CTA buttons)
          const hasLink = React.Children.toArray(children).some(
            (child: any) => child?.type === 'a' || child?.props?.node?.tagName === 'a'
          );
          if (hasLink) {
            return (
              <h2 className="text-center my-8" {...props}>
                <span className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-12 py-4 rounded-xl text-2xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200">
                  {children}
                </span>
              </h2>
            );
          }
          return <h2 className="text-3xl font-bold text-neutral-900 mt-8 mb-4" {...props} />;
        },
        h3: ({ node, ...props }) => <h3 className="text-2xl font-bold text-neutral-900 mt-6 mb-3" {...props} />,
        h4: ({ node, ...props }) => <h4 className="text-xl font-bold text-neutral-900 mt-6 mb-3" {...props} />,
        h5: ({ node, ...props }) => <h5 className="text-lg font-bold text-neutral-900 mt-4 mb-2" {...props} />,
        h6: ({ node, ...props }) => <h6 className="text-base font-bold text-neutral-900 mt-4 mb-2" {...props} />,
        p: ({ node, ...props }) => <p className="text-neutral-700 leading-relaxed mb-4" {...props} />,
        a: ({ node, ...props }) => (
          <a
            className="text-primary-600 hover:text-primary-700 underline font-medium"
            target={props.href?.startsWith('http') ? '_blank' : undefined}
            rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            {...props}
          />
        ),
        ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
        ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
        li: ({ node, ...props }) => <li className="text-neutral-700 ml-4" {...props} />,
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-primary-500 pl-4 italic text-neutral-600 my-4" {...props} />
        ),
        code: ({ node, inline, ...props }: any) =>
          inline ? (
            <code className="bg-neutral-100 px-2 py-1 rounded text-sm font-mono text-primary-600" {...props} />
          ) : (
            <code className="block bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto my-4 font-mono text-sm" {...props} />
          ),
        pre: ({ node, ...props }) => <pre className="my-4" {...props} />,
        img: ({ node, ...props }) => (
          <img className="rounded-lg shadow-md my-6 max-w-full h-auto" {...props} alt={props.alt || ''} />
        ),
        table: ({ node, ...props }) => (
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-neutral-300" {...props} />
          </div>
        ),
        thead: ({ node, ...props }) => <thead className="bg-primary-50" {...props} />,
        tbody: ({ node, ...props }) => <tbody {...props} />,
        tr: ({ node, ...props }) => <tr className="border-b border-neutral-200" {...props} />,
        th: ({ node, ...props }) => <th className="px-4 py-3 text-left font-semibold text-neutral-900 border border-neutral-300" {...props} />,
        td: ({ node, ...props }) => <td className="px-4 py-3 text-neutral-700 border border-neutral-300" {...props} />,
        hr: ({ node, ...props }) => <hr className="my-8 border-neutral-300" {...props} />,
        strong: ({ node, ...props }) => <strong className="font-bold text-neutral-900" {...props} />,
        em: ({ node, ...props }) => <em className="italic" {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
