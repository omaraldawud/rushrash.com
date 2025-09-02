import React from "react";

const RushrashLogo = ({
  mainColor = "#dc3545", // Default red color
  width = 120,
  height = 40,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield Icon */}
      <path
        d="M10 5C10 2.23858 12.2386 0 15 0H25C27.7614 0 30 2.23858 30 5V12.5C30 15.2614 27.7614 17.5 25 17.5H15C12.2386 17.5 10 15.2614 10 12.5V5Z"
        fill={mainColor}
      />

      {/* Shield Detail */}
      <path
        d="M15 2.5L17.5 5L22.5 0"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Camera Icon */}
      <rect x="12" y="7" width="6" height="4" rx="1" fill="white" />
      <circle cx="15" cy="9" r="1" fill={mainColor} />

      {/* Company Name - Bold */}
      <text
        x="38"
        y="15"
        fill={mainColor}
        fontSize="16"
        fontWeight="800"
        fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        letterSpacing="1.2"
        textTransform="uppercase"
      >
        RUSHRASH
      </text>

      {/* Tagline - Subtle */}
      <text
        x="38"
        y="28"
        fill="#6c757d"
        fontSize="9"
        fontWeight="500"
        fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        letterSpacing="0.8"
      >
        CCTV • ACCESS • POS
      </text>
    </svg>
  );
};

export default RushrashLogo;
