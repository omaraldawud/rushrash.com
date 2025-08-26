import securityBg from "../../assets/images/banners/security-cctv-top.jpg";

// Hero images imports
import heroHome2 from "../../assets/images/banners/commercial-building-cctv.jpg";
import heroHome3 from "../../assets/images/banners/security-lock-open.jpg";
import heroHome1 from "../../assets/images/banners/security-team.jfif";

const banners = {
  "/": {
    title: "Welcome to Rushrash Inc.",
    subtitle: "CCTV & Access Control Experts",
    ctaText: "Get a Free Quote",
    ctaLink: "/contact",
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
    bgImage: [securityBg],
  },

  "/residential-security": {
    title: "Residential Security Solutions",
    subtitle: "Protect Your Home with Smart Systems",
    ctaText: "Schedule a Consultation",
    ctaLink: "/contact",
    seo_brands_text: "Trusted residential security brands:",
    banner_brands: "Hikvision, Dahua, Ring, Nest",
    heroImages: [
      {
        src: heroHome1,
        alt: "Residential CCTV Camera",
        title: "Home CCTV Installation",
        caption: "Protecting Your Family",
      },
      {
        src: heroHome2,
        alt: "Smart Door Access",
        title: "Smart Door Security",
        caption: "Control Access Remotely",
      },
      {
        src: heroHome3,
        alt: "Home Security System Overview",
        title: "Integrated Security Solutions",
        caption: "Complete Peace of Mind",
      },
    ],
    bgImage: [securityBg],
  },
};

export default banners;
