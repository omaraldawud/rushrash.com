import securityBg from "../../assets/images/banners/security-cctv-top.jpg";
import aboutUsBg from "../../assets/images/banners/aboutus/security-experts.jpg";
import residentialBg from "../../assets/images/banners/residential/setup-residential-cctv-wireless-camera.jpg";
import accessControlBg from "../../assets/images/access-control/access-control-card-sweep.jpg";

////////////////////////// Hero images
//home
import heroHome2 from "../../assets/images/banners/commercial-building-cctv.jpg";
import heroHome3 from "../../assets/images/banners/security-lock-open.jpg";
import heroHome1 from "../../assets/images/banners/security-team.jfif";
//about
import heroAbout1 from "../../assets/images/banners/cctv-installation-technician.png";
import heroAbout2 from "../../assets/images/banners/aboutus/it-services-bg.jpg";
import heroAbout3 from "../../assets/images/banners/aboutus/call-us-cctv-solutions.jpg";
//residential
import heroResidential1 from "../../assets/images/banners/indoor-cct-installation.jpg";
import heroResidential2 from "../../assets/images/banners/cctv-cameras.jpg";
import heroResidential3 from "../../assets/images/banners/cctv-nvr-cableing.jpg";
//commercial
import heroCommercial1 from "../../assets/images/access-control/mac-military.jfif";
import heroCommercial2 from "../../assets/images/brands/pelco/pelco-panoramic-cameeras.avif";
import heroCommercial3 from "../../assets/images/banners/fiber-optic-system.jpg";
//services/it-services

const banners = {
  "/": {
    bgImage: [securityBg],
    title: "Welcome to Rushrash Inc.",
    subtitle: "CCTV & Access Control Experts",
    ctaText: "Get a FREE site survey",
    seo_brands_text: "We work with all major CCTV & Access Control brands:",
    banner_brands: "Hikvision, Dahua, Bosch, Axis, Honeywell",
    heroImages: [
      {
        src: heroHome1,
        alt: "CCTV Cameras and Access Control Systems",
        title: "Professional CCTV & Access Control Installation",
        caption: "Securing Homes & Businesses",
      },
      {
        src: heroHome2,
        alt: "Smart Security Cameras",
        title: "Residential CCTV Solutions",
        caption: "Safe & Connected Homes",
      },
      {
        src: heroHome3,
        alt: "Security Professionals Team",
        title: "Certified Security Experts",
        caption: "Reliable & Experienced",
      },
    ],
  },
  "/about-rushrash-inc": {
    bgImage: [aboutUsBg],
    title: "Trusted Security Partner for Homes & Businesses",
    subtitle: "Your Sleepless Eye",
    seo_brands_text:
      "At Rushrash Inc., we believe security is more than technology—it’s peace of mind. For over a decade, our certified technicians have delivered reliable CCTV and access control solutions for homeowners, retail shops, offices, and large-scale facilities. We combine cutting-edge surveillance systems with expert installation and ongoing support to ensure your property is always protected.",
    banner_brands: "Hikvision, Dahua, Bosch, Axis, Honeywell and more ...",
    heroImages: [
      {
        src: heroAbout1,
        alt: "Residential CCTV Camera",
        title: "Home CCTV Installation",
        caption: "CCTV Protecting Your Family",
      },
      {
        src: heroAbout2,
        alt: "Smart Door Access",
        title: "Smart Door Security",
        caption: "Control Access Remotely",
      },
      {
        src: heroAbout3,
        alt: "Home Security System Overview",
        title: "Integrated Security Solutions",
        caption: "Complete Peace of Mind",
      },
    ],
  },
  // Residential
  "/residential-cctv-security": {
    bgImage: [residentialBg],
    title: "Residential Security Solutions",
    subtitle: "Protect Your Home with Smart Systems",
    ctaText: "Schedule a FREE Site Visit & Consultation",

    seo_brands_text: "Trusted residential security brands:",
    banner_brands: "Hikvision, Dahua, Ring, Nest",
    heroImages: [
      {
        src: heroResidential1,
        alt: "Residential CCTV Camera",
        title: "Indoor Home CCTV Installation",
        caption: "Indoor CCTV",
      },
      {
        src: heroResidential2,
        alt: "Smart Door Access",
        title: "Smart Door Security",
        caption: "Access Home  Remotely",
      },
      {
        src: heroResidential3,
        alt: "CCTV Cables",
        title: "CCTV CAT6+ Cables",
        caption: "Cabeling CCTV System",
      },
    ],
  },
  // Commercial
  "/commercial-cctv-security": {
    icon: "bi bi-shop",
    bgImage: [securityBg],
    title: "Commercial Security Solutions",
    subtitle:
      "Maintain Constant Vigilance with Professional-Grade Surveillance",
    ctaText: "Schedule a Consultation",
    seo_brands_text: "reliable business security cameras:",
    banner_brands: "Hikvision, Dahua, Ring, Nest",
    heroImages: [
      {
        src: heroCommercial1,
        alt: "Residential CCTV Camera",
        title: "Indoor Home CCTV Installation",
        caption: "Indoor CCTV",
      },
      {
        src: heroCommercial2,
        alt: "Smart Door Access",
        title: "Smart Door Security",
        caption: "Access Home  Remotely",
      },
      {
        src: heroCommercial3,
        alt: "Home Security System Overview",
        title: "Integrated Security Solutions",
        caption: "Quality CCTV Cams",
      },
    ],
  },
  // services/it-services
  "/services/it-services": {
    icon: "bi bi-shop",
    bgImage: [accessControlBg],
    title: "IT Services",
    subtitle: "Control Every Entry with Enterprise-Grade Access Solutions.",
    ctaText: "Schedule an IT Consultation",
    seo_brands_text:
      "Secure Critical Assets with Uncompromising Access Control",
    banner_brands:
      "IT for Businesses & Organizations, Critical Infrastructure, Data Management and Security",
    heroImages: [],
  },
};

export default banners;
