import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  contentSelector: string; // コンテンツを含む要素のセレクタ
}

export default function TableOfContents({ contentSelector }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    // コンテンツ内のすべてのH2とH3を取得
    const contentElement = document.querySelector(contentSelector);
    if (!contentElement) return;

    const headingElements = Array.from(
      contentElement.querySelectorAll('h2, h3')
    ) as HTMLElement[];

    const extractedHeadings: Heading[] = headingElements.map((el, index) => {
      // IDがなければ生成
      if (!el.id) {
        el.id = `heading-${index}`;
      }

      return {
        id: el.id,
        text: el.textContent || '',
        level: parseInt(el.tagName[1]),
      };
    });

    setHeadings(extractedHeadings);
  }, [contentSelector]);

  if (headings.length === 0) return null;

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 w-full text-left"
      >
        <h3 className="text-xl font-bold text-gray-900">目次</h3>
        <ChevronDown
          size={20}
          className={`text-gray-600 transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isExpanded && (
        <nav className="mt-4 space-y-2">
          {headings.map((heading) => (
            <button
              key={heading.id}
              onClick={() => handleClick(heading.id)}
              className={`block w-full text-left py-1 px-2 rounded transition-colors hover:bg-blue-100 ${
                heading.level === 2
                  ? 'text-gray-900 font-medium'
                  : 'text-gray-700 ml-4'
              }`}
            >
              {heading.text}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}
