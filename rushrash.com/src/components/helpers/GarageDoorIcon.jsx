export default function GarageDoorIcon({
  size = 24,
  color = "currentColor",
  remoteColor = "red",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Garage outline */}
      <rect
        x="4"
        y="6"
        width="16"
        height="14"
        rx="1"
        stroke={color}
        strokeWidth="2"
      />

      {/* Horizontal door panels */}
      <line x1="4" y1="10" x2="20" y2="10" stroke={color} strokeWidth="2" />
      <line x1="4" y1="14" x2="20" y2="14" stroke={color} strokeWidth="2" />

      {/* Remote control */}
      <rect x="9" y="2" width="6" height="4" rx="1" fill={remoteColor} />
      <circle cx="12" cy="4" r="1" fill="white" />
    </svg>
  );
}
