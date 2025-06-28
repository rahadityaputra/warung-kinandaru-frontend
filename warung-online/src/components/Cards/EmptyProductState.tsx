
import Link from 'next/link';
import React from 'react';

type EmptyProductStateProps = {
  message?: string;
  icon?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  ctaHref?: string,
  className?: string;
}

const EmptyProductState = ({
  message = "Tidak ada produk yang ditemukan.",
  icon = "📦",
  ctaText,
  onCtaClick,
  ctaHref,
  className = ""
}: EmptyProductStateProps) => {
  return (
    <div
      className={`
        flex flex-col items-center justify-center p-8 text-center
        border border-dashed border-gray-300 rounded-lg
        text-gray-500 bg-gray-50
        h-[calc(100vh-120px)]
        ${className}
      `}
    >
      <div className="text-6xl mb-4" role="img" aria-label="Empty Box">
        {icon}
      </div>
      <p className="text-xl font-semibold mb-4">
        {message}
      </p>

      {ctaText && (
        ctaHref ?
          <Link href={ctaHref}>
            <button
              onClick={onCtaClick}
              className="
            mt-4 px-6 py-3 bg-green-600 text-white font-bold
            rounded-md hover:bg-green-700 transition-colors
          cursor-pointer"
            >
              {ctaText}
            </button>
          </Link> :
          <button
            onClick={onCtaClick}
            className="
            mt-4 px-6 py-3 bg-green-600 text-white font-bold
            rounded-md hover:bg-green-700 transition-colors
          cursor-pointer"
          >
            {ctaText}
          </button>
      )}
    </div>
  );
};

export default EmptyProductState;
