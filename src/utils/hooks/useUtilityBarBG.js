// /src/utils/useUtilityBarBG.js
import { useLocation } from "react-router-dom";

export function useUtilityBarBG() {
  const location = useLocation();

  switch (location.pathname) {
    case "/services/access-control":
      return "linear-gradient(90deg, #0e0e0e, #2a8bfa)";
    case "/services/cctv-installation":
      return "linear-gradient(90deg, #000000, #ff0000)";
    case "/services/it-services":
      return "linear-gradient(90deg, #000000, orange)";
    case "/services/pa-systems":
      return "linear-gradient(90deg, #000000, #006cffdb)";
    default:
      return "#1b5c9d"; // fallback
  }
}
