import React from 'react';

type CheckmarkCircleIconProps = {
  className?: string;
  size?: number;
}

const CheckmarkCircleIcon = ({
  className = '',
  size = 64,
}: CheckmarkCircleIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`text-green-500 ${className}`}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
};

export default CheckmarkCircleIcon;
