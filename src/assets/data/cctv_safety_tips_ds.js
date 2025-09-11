export const safetyTips = [
  {
    id: 1,
    icon: "bi-exclamation-triangle text-danger", // Bootstrap icon + color
    title: "Monthly Inspection",
    tip: "Inspect your system monthly for wear or damage. Address issues before they become dangerous.",
    severity: "high", // optional for styling (high, medium, low)
    link: "/guides/inspection", // optional for deeper guide
  },
  {
    id: 2,
    icon: "bi-shield-check text-success",
    title: "Secure Your Cables",
    tip: "Ensure all wires are secured and not exposed to water or foot traffic.",
    severity: "medium",
  },
  {
    id: 3,
    icon: "bi-lightning-charge text-warning",
    title: "Power Safety",
    tip: "Use surge protectors for your CCTV and unplug during storms to prevent damage.",
    severity: "medium",
  },
];
