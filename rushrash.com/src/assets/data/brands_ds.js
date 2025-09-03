// src/assets/data/brands_ds.js
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

//
const brands_ds = [
  {
    name: "Hikvision",
    img: HikvisionLogo,
    brand_desc:
      "Hikvision delivers advanced security solutions powered by AI and IoT for a diverse range of sectors. A prime example is their DS-2CD2147G2-LSU camera, a top-tier model widely deployed in retail and office environments.",
    brand_seo_text:
      "Hikvision CCTV cameras for home and business security, Best for High-End Brands",
    cams: [
      {
        cam: "DeepinView Network Camera",
        best_for: "advanced surveillance",
        img: { hikVisionCamera },
      },
      {
        cam: "Turbo HD Camera",
        best_for: "high-definition video needs",
        img: { hikVisionCamera },
      },
    ],
  },
  {
    name: "Dahua Technology",
    img: DahuaLogo,
    brand_seo_text:
      "Dahua Technology surveillance and security systems, best for Innovation",
    brand_desc:
      "AI-powered, video-focused solutions, ideal for Smart city and enterprise systems",
    cams: [
      {
        cam: "WizSense Series",
        best_for: "AI-enhanced security",
        img: { dahuaCamera },
      },
      {
        cam: "XVR Series",
        best_for: "high-resolution video across multiple sites",
        img: { dahuaCamera },
      },
    ],
  },
  {
    name: "Bosch Security",
    img: BoschLogo,
    brand_seo_text:
      "Bosch Security Systems for reliable monitoring, Best for Sustainability",
    brand_desc:
      "expertise in software, connectivity, and AI, offering solutions that support automation and sustainability across industries",
    cams: [
      {
        cam: "MIC IP Fusion 9000i",
        best_for: "outdoor surveillance",
        img: { boschCamera },
      },
      {
        cam: "FLEXIDOME IP Starlight 8000i",
        best_for: "clear imaging in low-light settings",
        img: { boschCamera },
      },
    ],
  },
  {
    name: "Hanwha Vision",
    img: HanwhaLogo,
    brand_seo_text:
      "Hanwha Vision CCTV and access control products, Best for Cybersecurity",
    brand_desc:
      "Hanwha focuses on image quality, optical design, and cybersecurity. They use AI and cloud-based analytics to enhance video surveillance, offering robust solutions",
    cams: [
      {
        cam: "Wisenet X Series",
        best_for: "optimized for image clarity",
        img: { hanwhaCamera },
      },
      {
        cam: "PNM-9084QZ",
        best_for: "camera designed for wide-area coverage",
        img: { hanwhaCamera },
      },
    ],
  },
  {
    name: "Axis Communications",
    img: AxisLogo,
    brand_seo_text:
      "Axis Communications professional security solutions, Best for Integrated Solutions",
    brand_desc:
      "specializes in network technology, offering video surveillance, access control, and audio solutions. Their systems integrate with intelligent analytics, making them versatile for both security and business enhancement.",
    cams: [
      {
        cam: "AXIS P13 Network Camera",
        best_for: "high-resolution surveillance",
        img: { axisCamera },
      },
      {
        cam: "AXIS Companion Line",
        best_for: "small-scale security setups",
        img: { axisCamera },
      },
    ],
  },

  {
    name: "Honeywell",
    img: HoneywellLogo,
    brand_seo_text:
      "Honeywell security and automation systems, Best for Industrial Automation",
    brand_desc:
      "specializes in network technology, offering video surveillance, access control, and audio solutions. Their systems integrate with intelligent analytics, making them versatile for both security and business enhancement.",
    cams: [
      {
        cam: "MAXPRO NVR",
        best_for: "large-scale video recording",
        img: { honeywellCamera },
      },
      {
        cam: "Pro-Watch Integrated Security Suite",
        best_for: "access control",
        img: { honeywellCamera },
      },
    ],
  },
  {
    name: "Avigilon",
    img: AvigilonLogo,
    brand_seo_text: "Avigilon high-definition security cameras",
  },
  {
    name: "Uniview",
    img: UniViewLogo,
    brand_seo_text: "Uniview advanced video surveillance solutions",
  },

  {
    name: "Lorex",
    img: LorexLogo,
    brand_seo_text: "Lorex home and business security cameras",
  },
  {
    name: "FLIR Systems",
    img: FlirLogo,
    brand_seo_text: "FLIR Systems thermal imaging security cameras",
  },
];

export default brands_ds;
