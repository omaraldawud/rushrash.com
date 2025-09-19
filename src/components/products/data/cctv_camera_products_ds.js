// /src/assets/data/products/cctv_camera_products_ds.js
import hikVisionCamera from "../../../assets/images/brands/hikvision/security-camera-by-Hikvision.webp";
import dahuaCamera from "../../../assets/images/brands/dohua/security-camera-dohua.webp";
import boschCamera from "../../../assets/images/brands/bosch/security-camera-Bosch.webp";
import hanwhaCamera from "../../../assets/images/brands/hanwha/security-camera-Hanwha.webp";
import axisCamera from "../../../assets/images/brands/axis/security-camera-Axis.webp";
import honeywellCamera from "../../../assets/images/brands/honeywell/security-camera-Honeywell.webp";
import avigilonCamera from "../../../assets/images/brands/avigilon/avigilon-cctv-camera-Panoramic.avif";
import lorexCamera from "../../../assets/images/brands/lorex/lorex-4k-camera-system.jpg";
import flirCamera from "../../../assets/images/brands/flir/flir-cctv-cam.jfif";

export const cctv_camera_products_ds = [
  // Hikvision
  {
    id: "HIK-001",
    slug: "deepinview-network-camera",
    brand: "Hikvision",
    category: "cctv-cameras",
    product_category: "cctv",
    type: "CCTV - Network",
    title: "DeepinView Network Camera",
    description:
      "Advanced surveillance camera, suitable for commercial and residential security.",
    SKU: "HIK-DVC-001",
    technology: "IP / Network",
    housing: "Dome/Varies",
    resolution: "Varies",
    lens: "Varies",
    powerSupply: "12V DC",
    powerConsumption: "Max. 5 W",
    irRange: "Up to 100 ft",
    dimensions: "φ100 x 85 mm",
    weight: "0.9 lb (400 g)",
    services: ["cctv"],
    heroBullets: [
      { name: "4K Resolution", icon: "bi-camera-video" },
      { name: "Night Vision", icon: "bi-moon" },
      { name: "Remote Monitoring", icon: "bi-phone" },
    ],
    productImage: hikVisionCamera,
    product_banner_images: [
      {
        src: hikVisionCamera,
        alt: "DeepinView Camera",
        title: "DeepinView",
        caption: "Hikvision",
      },
      {
        src: hikVisionCamera,
        alt: "DeepinView Camera Side View",
        title: "DeepinView Side",
        caption: "Hikvision",
      },
      {
        src: hikVisionCamera,
        alt: "DeepinView in Action",
        title: "DeepinView Setup",
        caption: "Hikvision",
      },
    ],
  },

  {
    id: "HIK-002",
    slug: "turbo-hd-camera",
    brand: "Hikvision",
    category: "cctv-cameras",
    product_category: "cctv",
    type: "CCTV - HD",
    title: "Turbo HD Camera",
    description:
      "High-definition video camera ideal for monitoring retail and office environments.",
    SKU: "HIK-THC-002",
    technology: "HD-TVI",
    housing: "Bullet/Dome",
    resolution: "1080p",
    lens: "2.8mm",
    powerSupply: "12V DC",
    powerConsumption: "Max. 5 W",
    irRange: "Up to 80 ft",
    dimensions: "φ95 x 75 mm",
    weight: "0.8 lb (360 g)",
    services: ["cctv"],
    heroBullets: [
      { name: "Full HD 1080p", icon: "bi-camera-video" },
      { name: "Easy Installation", icon: "bi-tools" },
      { name: "Remote Monitoring", icon: "bi-phone" },
    ],
    productImage: hikVisionCamera,
    product_banner_images: [
      {
        src: hikVisionCamera,
        alt: "Turbo HD Camera",
        title: "Turbo HD",
        caption: "Hikvision",
      },
      {
        src: hikVisionCamera,
        alt: "Turbo HD Side View",
        title: "Turbo HD Side",
        caption: "Hikvision",
      },
      {
        src: hikVisionCamera,
        alt: "Turbo HD in Action",
        title: "Turbo HD Setup",
        caption: "Hikvision",
      },
    ],
  },

  // Dahua
  {
    id: "DAH-001",
    slug: "wizsense-series",
    brand: "DahuaTechnology",
    category: "cctv-cameras",
    product_category: "cctv",
    type: "CCTV - AI Network",
    title: "WizSense Series",
    description:
      "AI-enhanced camera series, ideal for smart security applications.",
    SKU: "DAH-WS-001",
    technology: "IP / Network",
    housing: "Varies",
    resolution: "Varies",
    lens: "Varies",
    powerSupply: "12V DC",
    powerConsumption: "Max. 5 W",
    irRange: "Up to 100 ft",
    services: ["cctv"],
    heroBullets: [
      { name: "AI Detection", icon: "bi-lightbulb" },
      { name: "Night Vision", icon: "bi-moon" },
      { name: "Remote Monitoring", icon: "bi-phone" },
    ],
    productImage: dahuaCamera,
    product_banner_images: [
      {
        src: dahuaCamera,
        alt: "WizSense Camera",
        title: "WizSense",
        caption: "Dahua",
      },
      {
        src: dahuaCamera,
        alt: "WizSense Side View",
        title: "WizSense Side",
        caption: "Dahua",
      },
      {
        src: dahuaCamera,
        alt: "WizSense in Action",
        title: "WizSense Setup",
        caption: "Dahua",
      },
    ],
  },

  {
    id: "DAH-002",
    slug: "xvr-series",
    brand: "DahuaTechnology",
    category: "cctv-cameras",
    product_category: "cctv",
    type: "CCTV - HD DVR",
    title: "XVR Series",
    description:
      "High-resolution DVR camera series for multiple site monitoring.",
    SKU: "DAH-XVR-002",
    technology: "HD-TVI",
    housing: "Varies",
    resolution: "1080p",
    lens: "2.8mm",
    powerSupply: "12V DC",
    powerConsumption: "Max. 5 W",
    irRange: "Up to 80 ft",
    services: ["cctv"],
    heroBullets: [
      { name: "HD Recording", icon: "bi-camera-video" },
      { name: "Multi-Channel", icon: "bi-grid-3x3-gap" },
      { name: "Remote Viewing", icon: "bi-phone" },
    ],
    productImage: dahuaCamera,
    product_banner_images: [
      {
        src: dahuaCamera,
        alt: "XVR Series Camera",
        title: "XVR Series",
        caption: "Dahua",
      },
      {
        src: dahuaCamera,
        alt: "XVR Side View",
        title: "XVR Side",
        caption: "Dahua",
      },
      {
        src: dahuaCamera,
        alt: "XVR in Action",
        title: "XVR Setup",
        caption: "Dahua",
      },
    ],
  },

  // Bosch
  {
    id: "BOS-001",
    slug: "mic-ip-fusion-9000i",
    brand: "BoschSecurity",
    category: "cctv-cameras",
    product_category: "cctv",
    type: "CCTV - Network",
    title: "MIC IP Fusion 9000i",
    description:
      "Outdoor surveillance camera with advanced imaging for low-light conditions.",
    SKU: "BOS-MIC9000i",
    technology: "IP / Network",
    housing: "Dome",
    resolution: "4K",
    lens: "Varies",
    powerSupply: "12V DC",
    powerConsumption: "Max. 5 W",
    irRange: "Up to 120 ft",
    services: ["cctv"],
    heroBullets: [
      { name: "Low-Light Performance", icon: "bi-moon" },
      { name: "4K Resolution", icon: "bi-camera-video" },
      { name: "Weatherproof", icon: "bi-cloud-sun" },
    ],
    productImage: boschCamera,
    product_banner_images: [
      {
        src: boschCamera,
        alt: "MIC IP Camera",
        title: "MIC IP",
        caption: "Bosch",
      },
      {
        src: boschCamera,
        alt: "MIC IP Side View",
        title: "MIC IP Side",
        caption: "Bosch",
      },
      {
        src: boschCamera,
        alt: "MIC IP in Action",
        title: "MIC IP Setup",
        caption: "Bosch",
      },
    ],
  },

  {
    id: "BOS-002",
    slug: "flexidome-ip-starlight-8000i",
    brand: "BoschSecurity",
    category: "cctv-cameras",
    product_category: "cctv",
    type: "CCTV - Dome",
    title: "FLEXIDOME IP Starlight 8000i",
    description:
      "High-performance dome camera for clear imaging in low-light settings.",
    SKU: "BOS-FLEX8000i",
    technology: "IP / Network",
    housing: "Dome",
    resolution: "4K",
    services: ["cctv"],
    heroBullets: [
      { name: "Starlight Imaging", icon: "bi-moon" },
      { name: "4K Resolution", icon: "bi-camera-video" },
      { name: "Durable Housing", icon: "bi-shield-lock" },
    ],
    productImage: boschCamera,
    product_banner_images: [
      {
        src: boschCamera,
        alt: "FLEXIDOME Camera",
        title: "FLEXIDOME",
        caption: "Bosch",
      },
      {
        src: boschCamera,
        alt: "FLEXIDOME Side View",
        title: "FLEXIDOME Side",
        caption: "Bosch",
      },
      {
        src: boschCamera,
        alt: "FLEXIDOME in Action",
        title: "FLEXIDOME Setup",
        caption: "Bosch",
      },
    ],
  },

  // Hanwha
  {
    id: "HAN-001",
    slug: "wisenet-x-series",
    brand: "HanwhaVision",
    category: "cctv-cameras",
    product_category: "cctv",
    type: "CCTV - Network",
    title: "Wisenet X Series",
    description: "Optimized for image clarity, AI-powered analytics.",
    SKU: "HAN-WX-001",
    services: ["cctv"],
    heroBullets: [
      { name: "AI Analytics", icon: "bi-lightbulb" },
      { name: "Low-Light Imaging", icon: "bi-moon" },
      { name: "Remote Management", icon: "bi-phone" },
    ],
    productImage: hanwhaCamera,
    product_banner_images: [
      {
        src: hanwhaCamera,
        alt: "Wisenet X",
        title: "Wisenet X",
        caption: "Hanwha",
      },
      {
        src: hanwhaCamera,
        alt: "Wisenet Side",
        title: "Wisenet Side",
        caption: "Hanwha",
      },
      {
        src: hanwhaCamera,
        alt: "Wisenet in Action",
        title: "Wisenet Setup",
        caption: "Hanwha",
      },
    ],
  },

  {
    id: "HAN-002",
    slug: "pnm-9084qz",
    brand: "HanwhaVision",
    category: "cctv-cameras",
    product_category: "cctv",
    type: "CCTV - PTZ",
    title: "PNM-9084QZ",
    description: "Camera designed for wide-area coverage with pan/tilt/zoom.",
    SKU: "HAN-PNM9084QZ",
    services: ["cctv"],
    heroBullets: [
      { name: "PTZ Control", icon: "bi-arrow-repeat" },
      { name: "High Range IR", icon: "bi-moon" },
      { name: "Pan/Tilt/Zoom", icon: "bi-arrows-fullscreen" },
    ],
    productImage: hanwhaCamera,
    product_banner_images: [
      {
        src: hanwhaCamera,
        alt: "PNM-9084QZ",
        title: "PNM-9084QZ",
        caption: "Hanwha",
      },
      {
        src: hanwhaCamera,
        alt: "PNM Side",
        title: "PNM Side",
        caption: "Hanwha",
      },
      {
        src: hanwhaCamera,
        alt: "PNM in Action",
        title: "PNM Setup",
        caption: "Hanwha",
      },
    ],
  },

  // Axis
  {
    id: "AXI-001",
    slug: "axis-p13-network-camera",
    brand: "AxisCommunications",
    category: "cctv-cameras",
    product_category: "cctv",
    type: "CCTV - Network",
    title: "AXIS P13 Network Camera",
    description: "High-resolution surveillance camera for professional use.",
    SKU: "AXI-P13-001",
    services: ["cctv"],
    heroBullets: [
      { name: "Professional Imaging", icon: "bi-camera-video" },
      { name: "Remote Monitoring", icon: "bi-phone" },
      { name: "Reliable Build", icon: "bi-shield-lock" },
    ],
    productImage: axisCamera,
    product_banner_images: [
      {
        src: axisCamera,
        alt: "AXIS P13",
        title: "AXIS P13",
        caption: "Axis",
      },
      {
        src: axisCamera,
        alt: "AXIS Side",
        title: "AXIS Side",
        caption: "Axis",
      },
      {
        src: axisCamera,
        alt: "AXIS in Action",
        title: "AXIS Setup",
        caption: "Axis",
      },
    ],
  },

  {
    id: "AXI-002",
    slug: "axis-companion-line",
    brand: "AxisCommunications",
    category: "cctv-cameras",
    product_category: "cctv",
    type: "CCTV - Network",
    title: "AXIS Companion Line",
    description: "Small-scale security camera system for offices and homes.",
    SKU: "AXI-COMP-002",
    services: ["cctv"],
    heroBullets: [
      { name: "Easy Setup", icon: "bi-tools" },
      { name: "Mobile App", icon: "bi-phone" },
      { name: "Reliable Performance", icon: "bi-shield-check" },
    ],
    productImage: axisCamera,
    product_banner_images: [
      {
        src: axisCamera,
        alt: "AXIS Companion",
        title: "AXIS Companion",
        caption: "Axis",
      },
      {
        src: axisCamera,
        alt: "AXIS Companion Side",
        title: "AXIS Companion Side",
        caption: "Axis",
      },
      {
        src: axisCamera,
        alt: "AXIS Companion Setup",
        title: "AXIS Companion Setup",
        caption: "Axis",
      },
    ],
  },

  // Honeywell
  {
    id: "HON-001",
    slug: "maxpro-nvr",
    brand: "Honeywell",
    category: "cctv-cameras",
    product_category: "cctv",
    type: "CCTV - NVR",
    title: "MAXPRO NVR",
    description: "Large-scale video recording for enterprise environments.",
    SKU: "HON-NVR-001",
    services: ["cctv"],
    heroBullets: [
      { name: "Enterprise Scale", icon: "bi-building" },
      { name: "High Capacity", icon: "bi-hdd-network" },
      { name: "Advanced Analytics", icon: "bi-lightbulb" },
    ],
    productImage: honeywellCamera,
    product_banner_images: [
      {
        src: honeywellCamera,
        alt: "MAXPRO NVR",
        title: "MAXPRO",
        caption: "Honeywell",
      },
      {
        src: honeywellCamera,
        alt: "MAXPRO Side",
        title: "MAXPRO Side",
        caption: "Honeywell",
      },
      {
        src: honeywellCamera,
        alt: "MAXPRO Setup",
        title: "MAXPRO Setup",
        caption: "Honeywell",
      },
    ],
  },

  {
    id: "HON-002",
    slug: "pro-watch-integrated-security-suite",
    brand: "Honeywell",
    category: "cctv-cameras",
    product_category: "cctv",
    type: "CCTV - Integrated",
    title: "Pro-Watch Integrated Security Suite",
    description: "Access control and video surveillance system in one.",
    SKU: "HON-PWS-002",
    services: ["cctv", "access_control"],
    heroBullets: [
      { name: "Integrated Security", icon: "bi-grid-3x3-gap" },
      { name: "Scalable", icon: "bi-bar-chart-line" },
      { name: "Enterprise Features", icon: "bi-gear" },
    ],
    productImage: honeywellCamera,
    product_banner_images: [
      {
        src: honeywellCamera,
        alt: "Pro-Watch Suite",
        title: "Pro-Watch",
        caption: "Honeywell",
      },
      {
        src: honeywellCamera,
        alt: "Pro-Watch Side",
        title: "Pro-Watch Side",
        caption: "Honeywell",
      },
      {
        src: honeywellCamera,
        alt: "Pro-Watch Setup",
        title: "Pro-Watch Setup",
        caption: "Honeywell",
      },
    ],
  },

  // Avigilon
  {
    id: "AVI-001",
    slug: "panoramic-cctv-by-avigilon",
    brand: "Avigilon",
    category: "cctv-cameras",
    product_category: "cctv",
    type: "CCTV - Panoramic",
    title: "Panoramic CCTV By Avigilon",
    description:
      "Wide-area coverage in stadiums, airports, and large open spaces.",
    SKU: "AVI-PANO-001",
    services: ["cctv"],
    heroBullets: [
      { name: "Panoramic Coverage", icon: "bi-aspect-ratio" },
      { name: "High Resolution", icon: "bi-camera-video" },
      { name: "Large Area Coverage", icon: "bi-geo-alt" },
    ],
    productImage: avigilonCamera,
    product_banner_images: [
      {
        src: avigilonCamera,
        alt: "Avigilon Panoramic",
        title: "Avigilon Panoramic",
        caption: "Avigilon",
      },
      {
        src: avigilonCamera,
        alt: "Avigilon Side",
        title: "Avigilon Side",
        caption: "Avigilon",
      },
      {
        src: avigilonCamera,
        alt: "Avigilon Setup",
        title: "Avigilon Setup",
        caption: "Avigilon",
      },
    ],
  },

  // Lorex
  {
    id: "LOR-001",
    slug: "lorex-4k-ultra-hd-wired-camera",
    brand: "Lorex",
    category: "cctv-cameras",
    product_category: "cctv",
    type: "CCTV - Wired",
    title: "Lorex 4K Ultra HD Wired Camera",
    description:
      "Crystal-clear detail in residential and small business security.",
    SKU: "LOR-4K-001",
    services: ["cctv"],
    heroBullets: [
      { name: "4K Clarity", icon: "bi-camera-video" },
      { name: "Easy Setup", icon: "bi-tools" },
      { name: "App Integration", icon: "bi-phone" },
    ],
    productImage: lorexCamera,
    product_banner_images: [
      {
        src: lorexCamera,
        alt: "Lorex 4K",
        title: "Lorex 4K",
        caption: "Lorex",
      },
      {
        src: lorexCamera,
        alt: "Lorex Side",
        title: "Lorex Side",
        caption: "Lorex",
      },
      {
        src: lorexCamera,
        alt: "Lorex Setup",
        title: "Lorex Setup",
        caption: "Lorex",
      },
    ],
  },

  {
    id: "LOR-002",
    slug: "lorex-smart-wifi-camera",
    brand: "Lorex",
    category: "cctv-cameras",
    product_category: "cctv",
    type: "CCTV - WiFi",
    title: "Lorex Smart Wi-Fi Camera",
    description: "Easy DIY installation with mobile app integration.",
    SKU: "LOR-WIFI-002",
    services: ["cctv", "it_services"],
    heroBullets: [
      { name: "Wi-Fi Ready", icon: "bi-wifi" },
      { name: "Mobile App", icon: "bi-phone" },
      { name: "Smart Alerts", icon: "bi-bell" },
    ],
    productImage: lorexCamera,
    product_banner_images: [
      {
        src: lorexCamera,
        alt: "Lorex WiFi",
        title: "Lorex WiFi",
        caption: "Lorex",
      },
      {
        src: lorexCamera,
        alt: "Lorex WiFi Side",
        title: "Lorex Side",
        caption: "Lorex",
      },
      {
        src: lorexCamera,
        alt: "Lorex WiFi Setup",
        title: "Lorex Setup",
        caption: "Lorex",
      },
    ],
  },

  // FLIR
  {
    id: "FLR-001",
    slug: "flir-thermal-security-camera",
    brand: "FLIRSystems",
    category: "cctv-cameras",
    product_category: "cctv",
    type: "CCTV - Thermal",
    title: "FLIR Thermal Security Camera",
    description: "Detection in total darkness and harsh environments.",
    SKU: "FLR-THERM-001",
    services: ["cctv"],
    heroBullets: [
      { name: "Thermal Detection", icon: "bi-fire" },
      { name: "All-weather", icon: "bi-cloud-sun" },
      { name: "Long Range", icon: "bi-binoculars" },
    ],
    productImage: flirCamera,
    product_banner_images: [
      {
        src: flirCamera,
        alt: "FLIR Thermal",
        title: "FLIR Thermal",
        caption: "FLIR",
      },
      {
        src: flirCamera,
        alt: "FLIR Side",
        title: "FLIR Side",
        caption: "FLIR",
      },
      {
        src: flirCamera,
        alt: "FLIR Setup",
        title: "FLIR Setup",
        caption: "FLIR",
      },
    ],
  },

  {
    id: "FLR-002",
    slug: "flir-visible-thermal-combo-camera",
    brand: "FLIRSystems",
    category: "cctv-cameras",
    product_category: "cctv",
    type: "CCTV - Combo",
    title: "FLIR Visible/Thermal Combo Camera",
    description: "Combination camera for visible and thermal imaging.",
    SKU: "FLR-COMBO-002",
    services: ["cctv"],
    heroBullets: [
      { name: "Dual Imaging", icon: "bi-image" },
      { name: "Thermal + Visible", icon: "bi-camera-video" },
      { name: "Robust Performance", icon: "bi-shield-lock" },
    ],
    productImage: flirCamera,
    product_banner_images: [
      {
        src: flirCamera,
        alt: "FLIR Combo",
        title: "FLIR Combo",
        caption: "FLIR",
      },
      {
        src: flirCamera,
        alt: "FLIR Combo Side",
        title: "FLIR Combo Side",
        caption: "FLIR",
      },
      {
        src: flirCamera,
        alt: "FLIR Combo Setup",
        title: "FLIR Combo Setup",
        caption: "FLIR",
      },
    ],
  },
];

export default cctv_camera_products_ds;
