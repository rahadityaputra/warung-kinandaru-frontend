// components/CheckIcon.js
export default function CheckIcon({ color = "#50de2c", size = 60 }) {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <polygon
        fill={color}
        points="434.8,49 174.2,309.7 76.8,212.3 0,289.2 174.1,463.3 196.6,440.9 196.6,440.9 511.7,125.8 434.8,49"
      />
    </svg>
  );
}
