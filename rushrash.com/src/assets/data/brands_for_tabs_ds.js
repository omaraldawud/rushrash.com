// src/assets/data/brands_for_tabs_ds.js

import HikvisionLogo from "../images/brands/hikvision-logo.png";
import AxisLogo from "../images/brands/axis-communications-log.png";
import DahuaLogo from "../images/brands/dahua-technology-logo.png";
import BoschLogo from "../images/brands/bosch-security-systems-logo.png";
import HanwhaLogo from "../images/brands/hanwha-vision-logo.png";
import AvigilonLogo from "../images/brands/avigilon-logo.jfif";
import UniViewLogo from "../images/brands/uniview-logo.jfif";
import HoneywellLogo from "../images/brands/honeywell-logo.jfif";
import LorexLogo from "../images/brands/lorex-logo.jfif";
import FlirLogo from "../images/brands/flir-systems-logo.png";
//
// Images
import hikVisionCamera from "../images/brands/hikvision/security-camera-by-Hikvision.webp";
import dahuaCamera from "../images/brands/dohua/security-camera-dohua.webp";
import boschCamera from "../images/brands/bosch/security-camera-Bosch.webp";
import hanwhaCamera from "../images/brands/hanwha/security-camera-Hanwha.webp";
import axisCamera from "../images/brands/axis/security-camera-Axis.webp";
import honeywellCamera from "../images/brands/honeywell/security-camera-Honeywell.webp";
import AvigilonCamera from "../images/brands/avigilon/avigilon-cctv-camera.avif";
import UniViewCamera from "../images/brands/uniview/owelview-camera-specs.jpg";
import LorexCamera from "../images/brands/lorex/lorex-security-cameras.webp";
import FlirCamera from "../images/brands/flir/flir-cctv-cams-teledyne-flir.jfif";

const brandsForTabsDS = [
  {
    heading: "Hikvision",
    icon: "bi-person-check", // Represents user ownership
    logo: HikvisionLogo,
    image: hikVisionCamera,
    items: [
      "Hikvision delivers advanced security solutions powered by AI and IoT for a diverse range of sectors. A prime example is their DS-2CD2147G2-LSU camera, a top-tier model widely deployed in retail and office environments.",
      "camera: DeepinView Network Camera, best_for: advanced surveillance",
      "camera: Turbo HD Camera, high-definition video needs",
    ],

    bgColor: "#88b3f9ff",
  },
  {
    heading: "Dahua Technology",
    icon: "bi-shield-lock", // Represents strict, top-down security
    logo: DahuaLogo,
    image: dahuaCamera,
    items: [
      "AI-powered, video-focused solutions, ideal for Smart city and enterprise systems",
      "camera: WizSense Series, best_for: AI-enhanced security",
      "camera: XVR Series, best_for: high-resolution video across multiple sites",
    ],
    bgColor: "#d8bd64ff",
  },
  {
    heading: "Bosch Security",
    icon: "bi-people", // Represents roles and groups
    logo: BoschLogo,
    image: boschCamera,
    items: [
      "Bosch Security Systems for reliable monitoring, Best for Sustainability.",
      "expertise in software, connectivity, and AI, offering solutions that support automation and sustainability across industries",
      "camera: MIC IP Fusion 9000i, best for: outdoor surveillance.",
      "camera: FLEXIDOME IP Starlight 8000i best for: clear imaging in low-light settings",
    ],
    bgColor: "#e8f5e9",
  },
  {
    heading: "Hanwha Vision",
    icon: "bi-tags", // Represents multiple attributes/tags
    logo: HanwhaLogo,
    image: hanwhaCamera,
    items: [
      "Hanwha Vision CCTV and access control products, Best for Cybersecurity.",
      "Hanwha focuses on image quality, optical design, and cybersecurity. They use AI and cloud-based analytics to enhance video surveillance, offering robust solutions.",
      "camera: Wisenet X Series, best for: optimized for image clarity.",
      "camera: PNM-9084QZ, best for: camera designed for wide-area coverage.",
    ],
    bgColor: "#fdf0f5",
  },
  {
    heading: "Axis Communications",
    icon: "bi-fingerprint", // Represents biometric authentication
    logo: AxisLogo,
    image: axisCamera,
    items: [
      "Network-based security with analytics with comprehensive business solutions",
      "Axis Communications professional security solutions, Best for Integrated Solutions",
      "camera: AXIS P13 Network Camera, best for: high-resolution surveillance.",
      "camera: AXIS Companion Line, best for: small-scale security setups.",
    ],
    bgColor: "#e0f7fa",
  },
  {
    heading: "Honeywell",
    icon: "bi-credit-card", // Represents keycards and credentials
    logo: HoneywellLogo,
    image: honeywellCamera,
    items: [
      "Honeywell security and automation systems, Best for Industrial Automation.",
      "specializes in network technology, offering video surveillance, access control, and audio solutions. Their systems integrate with intelligent analytics, making them versatile for both security and business enhancement.",
      "NVR: MAXPRO NVR, best for: large-scale video recording.",
      "NVR: Pro-Watch Integrated Security Suite, best for: access control.",
    ],
    bgColor: "#fce4ec",
  },
  {
    heading: "Avigilon",
    icon: "bi-credit-card", // Represents keycards and credentials
    logo: AvigilonLogo,
    image: AvigilonCamera,
    items: [
      "Avigilon high-definition IP security camera systems.",
      "Find video clips of interest in seconds, Classify people, vehicles & audio events, Proactive event flags and instant alerts",
      "License plate recognition systems",
      "camera: Dome security cameras, best for: low-profile monitoring solution.",
      "camera: Bullet and box security cameras, best for: long-range detail and AI-powered analytics.",
      "camera: Panoramic security cameras, best for: 360-degree views",
      "camera: PTZ security cameras, best for:  large sites with a single pan, tilt and zoom security camera that lets you get the level of details.",
    ],
    bgColor: "#fce4ec",
  },
  {
    heading: "Uniview",
    icon: "bi-credit-card", // Represents keycards and credentials
    logo: UniViewLogo,
    image: UniViewCamera,
    items: [
      "Uniview advanced video surveillance solutions.",
      "Powered by Wise-ISP 5th-Gen Nightview Tech Stunning Power, Stunning Price.",
      "camera: OwelView, 5th-Gen nightview image processing technology.",
      "camera: Multiview, OmniView, Tri-Guard, Solar Power Cameras.",
    ],
    bgColor: "#fce4ec",
    videoURL: "https://youtu.be/IoYtJweMghQ",
  },
  {
    heading: "Lorex",
    icon: "bi-credit-card", // Represents keycards and credentials
    logo: LorexLogo,
    image: LorexCamera,
    items: [
      "Lorex home and business security cameras.",
      "Exceptional video quality up to 4K.",
      "Wired or Wireless Digital IP Cameras",
      "offers Analog Cameras, Digital, Wi-Fi Cameras, Wire-Free cams.",
    ],
    bgColor: "#fce4ec",
  },
  {
    heading: "FLIR Systems",
    icon: "bi-credit-card", // Represents keycards and credentials
    logo: FlirLogo,
    image: FlirCamera,
    items: [
      "FLIR Systems thermal imaging security cameras.",
      "Bullet, Dome, Fixed, PTZ and Specialized Cameras.",
      "Video Management Systems.",
    ],
    bgColor: "#fce4ec",
  },
];

export default brandsForTabsDS;
