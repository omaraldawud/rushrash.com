// src/assets/data/brands_ds.js
//

// images
// import hikVisionCamera from "../images/brands/hikvision/security-camera-by-Hikvision.webp";
// import dahuaCamera from "../images/brands/dohua/security-camera-dohua.webp";
// import boschCamera from "../images/brands/bosch/security-camera-Bosch.webp";
// import hanwhaCamera from "../images/brands/hanwha/security-camera-Hanwha.webp";
// import axisCamera from "../images/brands/axis/security-camera-Axis.webp";
// import honeywellCamera from "../images/brands/honeywell/security-camera-Honeywell.webp";
// import avigilonCamera from "../images/brands/avigilon/avigilon-cctv-camera-Panoramic.avif";
// import flirCamera from "../images/brands/flir/flir-cctv-cam.jfif";
// import lorexCamera from "../images/brands/lorex/lorex-4k-camera-system.jpg";
//
//
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

import ltsLogo from "../images/brands/ltsLogo.png";

//
const brands_ds = [
  {
    name: "LTS",
    brandLogo: ltsLogo,
    brand_desc:
      "LTS provides reliable surveillance and security solutions, offering cameras and recorders for both commercial and residential applications.",
    brand_seo_text:
      "LTS CCTV cameras and DVR recorders for business and home security",
  },

  //Hikvision
  {
    name: "Hikvision",
    brandLogo: HikvisionLogo,
    brandSlug: "hikvision",
    brand_desc:
      "Hikvision delivers advanced security solutions powered by AI and IoT for a diverse range of sectors. A prime example is their DS-2CD2147G2-LSU camera, a top-tier model widely deployed in retail and office environments.",
    brand_seo_text:
      "Hikvision CCTV cameras for home and business security, Best for High-End Brands",
  },
  //Dahua Technology
  {
    name: "DahuaTechnology",
    brandLogo: DahuaLogo,
    brand_slug: "dahua-technology",
    brand_seo_text:
      "Dahua Technology surveillance and security systems, best for Innovation",
    brand_desc:
      "AI-powered, video-focused solutions, ideal for Smart city and enterprise systems",
  },
  //Bosch Security
  {
    name: "BoschSecurity",
    brandLogo: BoschLogo,
    brand_slug: "bosch-security",
    brand_seo_text:
      "Bosch Security Systems for reliable monitoring, Best for Sustainability",
    brand_desc:
      "expertise in software, connectivity, and AI, offering solutions that support automation and sustainability across industries",
  },
  // Hanwha Vision
  {
    name: "HanwhaVision",
    brandLogo: HanwhaLogo,
    brand_slug: "hanwha-vision",
    brand_seo_text:
      "Hanwha Vision CCTV and access control products, Best for Cybersecurity",
    brand_desc:
      "Hanwha focuses on image quality, optical design, and cybersecurity. They use AI and cloud-based analytics to enhance video surveillance, offering robust solutions",
  },
  //Axis Communications
  {
    name: "AxisCommunications",
    brandLogo: AxisLogo,
    brand_slug: "axis-communications",
    brand_seo_text:
      "Axis Communications professional security solutions, Best for Integrated Solutions",
    brand_desc:
      "specializes in network technology, offering video surveillance, access control, and audio solutions. Their systems integrate with intelligent analytics, making them versatile for both security and business enhancement.",
  },
  //  ---------------------
  //Honeywell
  {
    name: "Honeywell",
    brandLogo: HoneywellLogo,
    brand_slug: "honeywell",
    brand_seo_text:
      "Honeywell security and automation systems, Best for Industrial Automation",
    brand_desc:
      "specializes in network technology, offering video surveillance, access control, and audio solutions. Their systems integrate with intelligent analytics, making them versatile for both security and business enhancement.",
  },
  //  ---------------------
  //Avigilon
  {
    name: "Avigilon",
    brandLogo: AvigilonLogo,
    brand_slug: "avigilon",
    brand_seo_text: "Avigilon Panoramic CCTV Camera",
    brand_seo_text: "Avigilon high-definition security cameras",
    brand_desc:
      "Avigilon high-definition (HD) security cameras are professional-grade surveillance solutions designed for environments where clarity, detail, and reliability are critical.",
  },
  //Lorex
  {
    name: "Lorex",
    brandLogo: LorexLogo,
    brand_slug: "lorex",
    brand_seo_text:
      "Lorex home and business security cameras, Best for DIY and affordability",
    brand_desc:
      "Lorex provides affordable security solutions for homeowners and small businesses. Known for easy installation and reliable remote viewing, their cameras are a popular choice for DIY setups.",
  },

  //FLIR
  {
    name: "FLIRSystems",
    brandLogo: FlirLogo,
    brand_slug: "FLir Systems",
    brand_seo_text:
      "FLIR Systems thermal imaging cameras, Best for challenging environments",
    brand_desc:
      "FLIR specializes in thermal imaging and infrared technology, making them a leader in monitoring critical infrastructure, industrial environments, and defense applications.",
  },

  //UniView
  {
    name: "UniView Systems",
    brandLogo: UniViewLogo,
    brand_slug: "uniview",
    brand_seo_text: "UniView S...",
    brand_desc: "UniView ...",
  },
];

export default brands_ds;
