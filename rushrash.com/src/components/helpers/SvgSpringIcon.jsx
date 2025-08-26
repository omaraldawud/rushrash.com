import React from "react";

const SvgSpringIcon = ({
  width = 24,
  height = 24,
  color = "currentColor",
  className = "",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Main spring coil */}
      <path
        d="M12 4C8 4 6 8 6 12C6 16 8 20 12 20C16 20 18 16 18 12C18 8 16 4 12 4Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Inner spiral detail */}
      <path
        d="M12 6C9.5 6 8 8.5 8 12C8 15.5 9.5 18 12 18C14.5 18 16 15.5 16 12C16 8.5 14.5 6 12 6Z"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.8"
      />

      {/* Additional spiral detail */}
      <path
        d="M12 8C10.5 8 9.5 10 9.5 12C9.5 14 10.5 16 12 16C13.5 16 14.5 14 14.5 12C14.5 10 13.5 8 12 8Z"
        stroke={color}
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
      />

      {/* Mounting brackets */}
      <line
        x1="12"
        y1="2"
        x2="12"
        y2="4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="12"
        y1="20"
        x2="12"
        y2="22"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Side mounting points */}
      <circle cx="6" cy="12" r="1" fill={color} />
      <circle cx="18" cy="12" r="1" fill={color} />
    </svg>
  );
};

export default SvgSpringIcon;
