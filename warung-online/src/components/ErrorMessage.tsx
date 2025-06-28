import React from 'react';
import { Ghost } from 'lucide-react';

type ErrorMessageProps = {
  message: string;
  icon?: React.ReactNode;
  showRetryButton?: boolean;
  onRetry?: () => void;
}

const ErrorMessage = ({
  message,
  icon,
  showRetryButton = false,
  onRetry,
}: ErrorMessageProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-red-700 rounded-lg text-center mx-auto max-w-md my-8">
      <div className="mb-4">
        {icon ? (
          <div className="text-red-500 w-16 h-16 mx-auto mb-2">
            {icon}
          </div>
        ) : (
          <Ghost className="text-red-500 w-16 h-16 mx-auto mb-2" />
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2">Oops, Ada Masalah!</h3>
      <p className="text-gray-700 mb-4">{message}</p>
      <p className="text-sm text-gray-500">
        Mohon periksa kembali koneksi internet Anda atau coba lagi sebentar.
      </p>
      {showRetryButton && (
        <button
          onClick={onRetry}
          className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Coba Lagi
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
