// src/assets/data/brands_ds.js
//
// images
import HikvisionLogo from "../images/brands/hikvision-logo.png";

import AxisLogo from "../images/brands/axis-communications-log.png";
import DahuaLogo from "../images/brands/dahua-technology-logo.png";
import BoschLogo from "../images/brands/bosch-security-systems-logo.webp";

import HanwhaLogo from "../images/brands/hanwha-vision-logo.png";
import AvigilonLogo from "../images/brands/avigilon-logo.jfif";
import UniViewLogo from "../images/brands/uniview-logo.jfif";
import HoneywellLogo from "../images/brands/honeywell-logo.jfif";
import LorexLogo from "../images/brands/lorex-logo.jfif";
import FlirLogo from "../images/brands/flir-systems-logo.png";
// images
import hikVisionCamera from "../images/brands/hikvision/security-camera-by-Hikvision.webp";
import dahuaCamera from "../images/brands/dohua/security-camera-dohua.webp";
import boschCamera from "../images/brands/bosch/security-camera-Bosch.webp";
import hanwhaCamera from "../images/brands/hanwha/security-camera-Hanwha.webp";
import axisCamera from "../images/brands/axis/security-camera-Axis.webp";
import honeywellCamera from "../images/brands/honeywell/security-camera-Honeywell.webp";
import avigilonCamera from "../images/brands/avigilon/avigilon-cctv-camera-Panoramic.avif";
import flirCamera from "../images/brands/flir/flir-cctv-cam.jfif";
import lorexCamera from "../images/brands/lorex/lorex-4k-camera-system.jpg";

//
const brands_ds = [
  //Hikvision
  {
    name: "Hikvision",
    brandLogo: HikvisionLogo,
    brand_desc:
      "Hikvision delivers advanced security solutions powered by AI and IoT for a diverse range of sectors. A prime example is their DS-2CD2147G2-LSU camera, a top-tier model widely deployed in retail and office environments.",
    brand_seo_text:
      "Hikvision CCTV cameras for home and business security, Best for High-End Brands",
    cams: [
      {
        cam: "DeepinView Network Camera",
        best_for: "advanced surveillance",
        img: hikVisionCamera,
      },
      {
        cam: "Turbo HD Camera",
        best_for: "high-definition video needs",
        img: hikVisionCamera,
      },
    ],
  },
  //Dahua Technology
  {
    name: "Dahua Technology",
    brandLogo: DahuaLogo,
    brand_seo_text:
      "Dahua Technology surveillance and security systems, best for Innovation",
    brand_desc:
      "AI-powered, video-focused solutions, ideal for Smart city and enterprise systems",
    cams: [
      {
        cam: "WizSense Series",
        best_for: "AI-enhanced security",
        img: dahuaCamera,
      },
      {
        cam: "XVR Series",
        best_for: "high-resolution video across multiple sites",
        img: dahuaCamera,
      },
    ],
  },
  //Bosch Security
  {
    name: "Bosch Security",
    brandLogo: BoschLogo,
    brand_seo_text:
      "Bosch Security Systems for reliable monitoring, Best for Sustainability",
    brand_desc:
      "expertise in software, connectivity, and AI, offering solutions that support automation and sustainability across industries",
    cams: [
      {
        cam: "MIC IP Fusion 9000i",
        best_for: "outdoor surveillance",
        img: boschCamera,
      },
      {
        cam: "FLEXIDOME IP Starlight 8000i",
        best_for: "clear imaging in low-light settings",
        img: boschCamera,
      },
    ],
  },
  // Hanwha Vision
  {
    name: "Hanwha Vision",
    brandLogo: HanwhaLogo,
    brand_seo_text:
      "Hanwha Vision CCTV and access control products, Best for Cybersecurity",
    brand_desc:
      "Hanwha focuses on image quality, optical design, and cybersecurity. They use AI and cloud-based analytics to enhance video surveillance, offering robust solutions",
    cams: [
      {
        cam: "Wisenet X Series",
        best_for: "optimized for image clarity",
        img: hanwhaCamera,
      },
      {
        cam: "PNM-9084QZ",
        best_for: "camera designed for wide-area coverage",
        img: hanwhaCamera,
      },
    ],
  },
  //Axis Communications
  {
    name: "Axis Communications",
    brandLogo: AxisLogo,
    brand_seo_text:
      "Axis Communications professional security solutions, Best for Integrated Solutions",
    brand_desc:
      "specializes in network technology, offering video surveillance, access control, and audio solutions. Their systems integrate with intelligent analytics, making them versatile for both security and business enhancement.",
    cams: [
      {
        cam: "AXIS P13 Network Camera",
        best_for: "high-resolution surveillance",
        img: axisCamera,
      },
      {
        cam: "AXIS Companion Line",
        best_for: "small-scale security setups",
        img: axisCamera,
      },
    ],
  },
  //  ---------------------
  //Honeywell
  {
    name: "Honeywell",
    brandLogo: HoneywellLogo,
    brand_seo_text:
      "Honeywell security and automation systems, Best for Industrial Automation",
    brand_desc:
      "specializes in network technology, offering video surveillance, access control, and audio solutions. Their systems integrate with intelligent analytics, making them versatile for both security and business enhancement.",
    cams: [
      {
        cam: "MAXPRO NVR",
        best_for: "large-scale video recording",
        img: honeywellCamera,
      },
      {
        cam: "Pro-Watch Integrated Security Suite",
        best_for: "access control",
        img: honeywellCamera,
      },
    ],
  },
  //  ---------------------
  //Avigilon
  {
    name: "Avigilon",
    brandLogo: AvigilonLogo,
    brand_seo_text: "Avigilon Panoramic CCTV Camera",
    brand_seo_text: "Avigilon high-definition security cameras",
    brand_desc:
      "Avigilon high-definition (HD) security cameras are professional-grade surveillance solutions designed for environments where clarity, detail, and reliability are critical.",
    cams: [
      {
        cam: "Panoramic CCTV By Avigilon",
        img: avigilonCamera,
        best_for:
          "wide-area coverage in stadiums, airports, and large open spaces",
      },
    ],
  },
  //Lorex
  {
    name: "Lorex",
    brandLogo: LorexLogo,
    brand_seo_text:
      "Lorex home and business security cameras, Best for DIY and affordability",
    brand_desc:
      "Lorex provides affordable security solutions for homeowners and small businesses. Known for easy installation and reliable remote viewing, their cameras are a popular choice for DIY setups.",
    cams: [
      {
        cam: "Lorex 4K Ultra HD Wired Camera",
        img: lorexCamera,
        best_for:
          "crystal-clear detail in residential and small business security",
      },
      {
        cam: "Lorex Smart Wi-Fi Camera",
        img: lorexCamera,
        best_for: "easy DIY installation and mobile app integration",
      },
    ],
  },

  //FLIR
  {
    name: "FLIR Systems",
    brandLogo: FlirLogo,
    brand_seo_text:
      "FLIR Systems thermal imaging cameras, Best for challenging environments",
    brand_desc:
      "FLIR specializes in thermal imaging and infrared technology, making them a leader in monitoring critical infrastructure, industrial environments, and defense applications.",
    cams: [
      {
        cam: "FLIR Thermal Security Camera",
        img: flirCamera,
        best_for: "detection in total darkness and harsh conditions",
      },
      {
        cam: "FLIR Visible/Thermal Combo Camera",
        img: flirCamera,
        best_for: flirCamera,
      },
    ],
  },
];

export default brands_ds;
