
import React from 'react';

interface EmptyProductStateProps {
  message?: string; // Opsional, default akan diberikan di komponen
  icon?: string;    // Opsional, default akan diberikan di komponen
  ctaText?: string; // Opsional, hanya jika tombol CTA ada
  onCtaClick?: () => void; // Opsional, fungsi tanpa argumen dan tanpa return value
  className?: string; // Opsional, untuk CSS tambahan
}

const EmptyProductState: React.FC<EmptyProductStateProps> = ({
  message = "Tidak ada produk yang ditemukan.",
  icon = "📦",
  ctaText,
  onCtaClick,
  className = ""
}) => {
  return (
    <div
      className={`
        flex flex-col items-center justify-center p-8 text-center
        border border-dashed border-gray-300 rounded-lg
        text-gray-500 bg-gray-50 min-h-screen
        ${className}
      `}
    >
      <div className="text-6xl mb-4" role="img" aria-label="Empty Box">
        {icon}
      </div>
      <p className="text-xl font-semibold mb-4">
        {message}
      </p>

      {ctaText && onCtaClick && ( // Pastikan keduanya ada untuk merender tombol
        <button
          onClick={onCtaClick}
          className="
            mt-4 px-6 py-3 bg-blue-600 text-white font-bold
            rounded-md hover:bg-blue-700 transition-colors
          "
        >
          {ctaText}
        </button>
      )}
    </div>
  );
};

export default EmptyProductState;
