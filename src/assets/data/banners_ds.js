//

import securityBg from "../images/banners/security-team.jfif";
import ContactBg from "../images/banners/aboutus/call-us-cctv-solutions.jpg";
import residentialBg from "../images/banners/residential/setup-residential-cctv-wireless-camera.jpg";
import commercialBG from "../images/site-wide/privacy-policy-security-lock.jpg";
import LegalBG from "../images/site-wide/data-privecy-security.jpeg";
import aboutUsBg from "../images/banners/aboutus/building-cctv.jpg";
import accessControlBg from "../images/access-control/access-control-system.jpg";
import ITServicesBG from "../images/it-services/vcables-image-must-use_bg.jpg";
import CCTVInstallationBG from "../images/banners/cctv-installation-technician.png";
import PoSBG from "../images/pos/point-of-sale-restaurants.jpeg";
import PASystemsBG from "../images/services/pa/pa-system-full.jpeg";
import ArticlesBG from "../images/articles/article-landing-preview.jpeg";
import ProductsBG from "../images/banners/e-security-banner.jfif";

////////////////////////// Hero images
//home
import heroHome2 from "../images/banners/security-lock-open.jpg";
import heroHome1 from "../images/banners/security-cctv-top-blue.jpg";
import heroHome3 from "../images/banners/residential/setup-residential-cctv-wireless-camera.jpg";

//contacts
import heroContacts1 from "../images/banners/security-lock-open.jpg";
import heroContacts2 from "../images/cctv-cams/cctv-control.webp";
import heroContacts3 from "../images/banners/security-cctv-top-blue.jpg";

//about
import heroAbout1 from "../images/banners/PluggedInCat5.jpg";
import heroAbout3 from "../images/banners/indoor-cct-installation.jpg";
import heroAbout2 from "../images/banners/aboutus/it-services-bg.jpg";

//rushrash-legal
import heroLegal1 from "../images/banners/PluggedInCat5.jpg";
import heroLegal2 from "../images/banners/security-team.jfif";
import heroLegal3 from "../images/pos/tablet-pos-system.jfif";

//residential
import heroResidential1 from "../images/banners/indoor-cct-installation.jpg";
import heroResidential2 from "../images/banners/cctv-cameras.jpg";
import heroResidential3 from "../images/banners/cctv-nvr-cableing.jpg";

//commercial
import heroCommercial1 from "../images/access-control/mac-military.jfif";
import heroCommercial2 from "../images/brands/pelco/pelco-panoramic-cameeras.avif";
import heroCommercial3 from "../images/banners/fiber-optic-system.jpg";

//services/it-services
import heroITServices1 from "../images/it-services/cat-cables-it-network-setup.jpeg";
import heroITServices2 from "../images/it-services/it-setup.webp";
import heroITServices3 from "../images/it-services/it-architecture.jpg";

//services/access-control
import heroAccessControl1 from "../images/access-control/access-control-pad.webp";
import heroAccessControl2 from "../images/access-control/security-lock-digits.jpg";
import heroAccessControl3 from "../images/access-control/aws-biometric-fingerprint.jfif";

//services/cctv-installation
import heroCCTVInstallation1 from "../images/cctv-cams/residential-CCTV.jfif";
import heroCCTVInstallation2 from "../images/cctv-cams/cctv-control.webp";
import heroCCTVInstallation3 from "../images/cctv-cams/camera-commercial-cctv.jpg";

//services/pos-installation
import heroPoS1 from "../images/pos/mobile-pos-phone.jfif";
import heroPoS2 from "../images/pos/cloud-based-pos-dashboard.jfif";
import heroPoS3 from "../images/pos/tablet-pos-system.jfif";

//services/pa-systems
import heroPA1 from "../images/services/pa/pa-microphone-installation.jpeg";
import heroPA2 from "../images/services/pa/pa-sound-communication-audio.jpg";
import heroPA3 from "../images/services/pa/pa-system-full.jpeg";

///security-insights
import heroArticles1 from "../images/services/pa/pa-microphone-installation.jpeg";
import heroArticles2 from "../images/services/pa/pa-microphone-installation.jpeg";
import heroArticles3 from "../images/services/pa/pa-microphone-installation.jpeg";

///security-products
import heroProducts1 from "../images/banners/aboutus/it-services-bg.jpg";
import heroProducts2 from "../images/brands/lorex-camera-logo.jfif";
import heroProducts3 from "../images/brands/uniview/owelview-series.png";

//single product
import heroSingleProd1 from "../images/brands/hikvision/security-camera-by-Hikvision.webp";
import heroSingleProd2 from "../images/brands/hikvision-logo.png";
import heroSingleProd3 from "../images/brands/hikvision/security-camera-by-Hikvision.webp";

//ds
import brands_ds from "./brands_ds.js";

//
export const banners = {
  "/": {
    bgImage: [securityBg],
    title: "CCTV & Access Control Solutions",
    subtitle:
      "Your trusted experts in residential and commercial security systems",
    ctaText: "FREE Site Survey",
    heroParagraph:
      "With over 17 years of expertise, we provide cutting-edge security solutions tailored to protect what matters most. Our systems combine advanced CCTV surveillance with access control technology—seamless protection for homes and businesses.",
    heroBullets: [
      {
        name: "24/7 Professional Monitoring",
        icon: "bi-shield-check",
      },
      {
        name: "Latest Technology Systems",
        icon: "bi-cpu",
      },
      {
        name: "Customized Security Solutions",
        icon: "bi-gear",
      },
    ],
    heroImages: [
      {
        src: heroHome1,
        alt: "Access Control Lock System",
        title: "Professional Access Control Installation",
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

  "/contact-rushrash-inc": {
    bgImage: [ContactBg],
    title: "Trusted Security Partner for Homes & Businesses",
    subtitle: "Your Sleepless Eye in CCTV & Access Control",
    ctaText: "FREE site survey",
    heroParagraph:
      "Get in touch with our security experts for personalized solutions. We provide comprehensive consultations, site assessments, and professional installations for all your CCTV and access control needs.",
    heroBullets: [
      {
        name: "Free Site Surveys",
        icon: "bi-clipboard-check",
      },
      {
        name: "Expert Consultations",
        icon: "bi-people",
      },
      {
        name: "Quick Response Times",
        icon: "bi-lightning",
      },
    ],

    heroImages: [
      {
        src: heroContacts1,
        alt: "Residential CCTV Camera",
        title: "Home CCTV Installation",
        caption: "CCTV Protecting Your Family",
      },
      {
        src: heroContacts2,
        alt: "Smart Door Access",
        title: "Smart Door Security",
        caption: "Control Access Remotely",
      },
      {
        src: heroContacts3,
        alt: "Home Security System Overview",
        title: "Integrated Security Solutions",
        caption: "Complete Peace of Mind",
      },
    ],
  },

  "/about-rushrash-inc": {
    bgImage: [aboutUsBg],
    title: "Trusted Security Partner for Homes & Businesses",
    subtitle: "Your Sleepless Eye in CCTV & Access Control",
    ctaText: "FREE site survey",
    heroParagraph:
      "Since 2007, Rushrash Inc. has been delivering exceptional security solutions across Illinois. Our team of certified professionals brings decades of combined experience in CCTV, access control, and IT security systems.",
    heroBullets: [
      {
        name: "17+ Years Experience",
        icon: "bi-award",
      },
      {
        name: "Certified Technicians",
        icon: "bi-patch-check",
      },
      {
        name: "Local Illinois Company",
        icon: "bi-geo-alt",
      },
    ],
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

  "/residential-cctv-security": {
    bgImage: [residentialBg],
    title: "Residential Security Solutions",
    subtitle: "Protect Your Home with Smart Systems",
    ctaText: "Schedule a FREE Site Visit",
    heroParagraph:
      "Secure your home and family with our comprehensive residential security solutions. We offer customized CCTV systems, smart access control, and integrated security packages designed specifically for residential properties.",
    heroBullets: [
      {
        name: "Home CCTV Systems",
        icon: "bi-camera",
      },
      {
        name: "Smart Door Access",
        icon: "bi-door-open",
      },
      {
        name: "Remote Monitoring",
        icon: "bi-phone",
      },
    ],
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
        caption: "Access Home Remotely",
      },
      {
        src: heroResidential3,
        alt: "CCTV Cables",
        title: "CCTV CAT6+ Cables",
        caption: "Cabling CCTV System",
      },
    ],
  },

  "/commercial-cctv-security": {
    icon: "bi bi-shop",
    bgImage: [commercialBG],
    title: "Commercial Security Solutions",
    subtitle:
      "Maintain Constant Vigilance with Professional-Grade Surveillance & Access Control Setup",
    ctaText: "Schedule a Consultation",
    heroParagraph:
      "Protect your business assets, employees, and customers with enterprise-grade security solutions. Our commercial systems include high-resolution CCTV monitoring, advanced access control, and integrated security management for businesses of all sizes.",
    heroBullets: [
      {
        name: "Enterprise CCTV",
        icon: "bi-camera-video",
      },
      {
        name: "Access Control",
        icon: "bi-shield-lock",
      },
      {
        name: "24/7 Monitoring",
        icon: "bi-record-circle",
      },
    ],
    heroImages: [
      {
        src: heroCommercial1,
        alt: "Military-Grade Access Control",
        title: "Enterprise Access Control Systems",
        caption: "Commercial Access Control",
      },
      {
        src: heroCommercial2,
        alt: "Panoramic Security Cameras",
        title: "360° Surveillance Solutions",
        caption: "Complete Coverage",
      },
      {
        src: heroCommercial3,
        alt: "Fiber Optic Security Infrastructure",
        title: "High-Speed Security Networks",
        caption: "Fiber Optic Systems",
      },
    ],
  },

  "/services/it-services": {
    icon: "bi bi-laptop",
    bgImage: [ITServicesBG],
    title: "Professional IT Services & Network Solutions",
    subtitle: "Reliable IT Infrastructure for Modern Businesses",
    ctaText: "Schedule an IT Consultation",
    heroParagraph:
      "Our comprehensive IT services include network setup, maintenance, cybersecurity, and system integration. We ensure your technology infrastructure supports your business operations securely and efficiently.",
    heroBullets: [
      {
        name: "Network Setup",
        icon: "bi-hdd-network",
      },
      {
        name: "Cybersecurity",
        icon: "bi-shield-check",
      },
      {
        name: "System Integration",
        icon: "bi-puzzle",
      },
    ],
    heroImages: [
      {
        src: heroITServices1,
        alt: "Network Cable Installation",
        title: "Structured Cabling Systems",
        caption: "Professional Wiring",
      },
      {
        src: heroITServices2,
        alt: "IT Network Setup",
        title: "Network Infrastructure Installation",
        caption: "IT System Setup",
      },
      {
        src: heroITServices3,
        alt: "Server Room Architecture",
        title: "Enterprise IT Solutions",
        caption: "Server Infrastructure",
      },
    ],
  },

  "/services/access-control": {
    icon: "bi bi-shield-lock",
    bgImage: [accessControlBg],
    title:
      "Advanced Access Control Systems for Secure & Efficient Entry Management",
    subtitle: "Control Every Entry with Enterprise-Grade Access Solutions.",
    ctaText: "Schedule an Access Control Site Survey",
    heroParagraph:
      "Secure your facilities with state-of-the-art access control systems. We provide biometric solutions, keycard systems, and integrated access management that gives you complete control over who enters your premises.",
    heroBullets: [
      {
        name: "Biometric Access",
        icon: "bi-fingerprint",
      },
      {
        name: "Keycard Systems",
        icon: "bi-key",
      },
      {
        name: "Cloud Management",
        icon: "bi-cloud",
      },
    ],
    heroImages: [
      {
        src: heroAccessControl1,
        alt: "Access Control Keypad",
        title: "Electronic Access Systems",
        caption: "Keypad Entry",
      },
      {
        src: heroAccessControl2,
        alt: "Digital Door Lock",
        title: "Smart Lock Solutions",
        caption: "Digital Security",
      },
      {
        src: heroAccessControl3,
        alt: "Biometric Fingerprint Scanner",
        title: "Biometric Access Control",
        caption: "Fingerprint Security",
      },
    ],
  },

  "/services/cctv-installation": {
    icon: "bi bi-camera-video",
    bgImage: [CCTVInstallationBG],
    title:
      "Professional CCTV Installation Services for Reliable Security Coverage",
    subtitle:
      "Protect Your Property with Expertly Designed Surveillance Solutions.",
    ctaText: "Book a Free CCTV Site Assessment",
    heroParagraph:
      "Our expert technicians design and install comprehensive CCTV systems tailored to your specific security needs. From residential monitoring to enterprise surveillance, we deliver crystal-clear video coverage and reliable recording solutions.",
    heroBullets: [
      {
        name: "HD Surveillance",
        icon: "bi-camera",
      },
      {
        name: "Remote Viewing",
        icon: "bi-phone",
      },
      {
        name: "Professional Installation",
        icon: "bi-tools",
      },
    ],
    heroImages: [
      {
        src: heroCCTVInstallation1,
        alt: "Residential CCTV Installation",
        title: "Home Surveillance Systems",
        caption: "Residential CCTV",
      },
      {
        src: heroCCTVInstallation2,
        alt: "CCTV Monitoring Station",
        title: "Professional Monitoring Solutions",
        caption: "24/7 Surveillance",
      },
      {
        src: heroCCTVInstallation3,
        alt: "Commercial CCTV Camera",
        title: "Business Security Systems",
        caption: "Commercial Surveillance",
      },
    ],
  },

  "/services/pos-installation": {
    icon: "bi bi-cash-register",
    bgImage: [PoSBG],
    title:
      "Point-of-Sale Installation Services for Seamless Business Operations",
    subtitle:
      "Enhance Checkout Speed, Accuracy, and Security with Modern POS Solutions.",
    ctaText: "Request a Free POS Consultation",
    heroParagraph:
      "Streamline your business operations with our professional POS system installation services. We provide complete point-of-sale solutions including hardware setup, software configuration, and payment processing integration.",
    heroBullets: [
      {
        name: "POS Hardware",
        icon: "bi-cash-coin",
      },
      {
        name: "Payment Processing",
        icon: "bi-credit-card",
      },
      {
        name: "Inventory Management",
        icon: "bi-clipboard-data",
      },
    ],
    heroImages: [
      {
        src: heroPoS1,
        alt: "Mobile POS System",
        title: "Mobile Payment Solutions",
        caption: "Portable POS",
      },
      {
        src: heroPoS2,
        alt: "Cloud-Based POS Dashboard",
        title: "Digital POS Management",
        caption: "Cloud POS Systems",
      },
      {
        src: heroPoS3,
        alt: "Tablet POS System",
        title: "Modern POS Technology",
        caption: "Tablet-Based POS",
      },
    ],
  },

  "/services/pa-systems": {
    icon: "bi-megaphone",
    bgImage: [PASystemsBG],
    title: "Professional PA System Installation & Audio Solutions",
    subtitle:
      "Crystal-Clear Sound for Announcements, Background Music & Emergency Communications",
    ctaText: "Request a Free PA System Consultation",
    heroParagraph:
      "Deliver clear audio throughout your facility with our professional PA system installation services. We design and install complete audio solutions for announcements, background music, emergency notifications, and conference room sound systems.",
    heroBullets: [
      {
        name: "PA System Installation",
        icon: "bi-megaphone",
      },
      {
        name: "Emergency Alerts",
        icon: "bi-bell",
      },
      {
        name: "Audio Conferencing",
        icon: "bi-mic",
      },
    ],
    heroImages: [
      {
        src: heroPA1,
        alt: "Commercial PA System Installation",
        title: "Commercial Public Address System Installation",
        caption: "Commercial PA Systems",
      },
      {
        src: heroPA2,
        alt: "Audio Conference Room System",
        title: "Conference Room Audio Solutions",
        caption: "Meeting Room Audio",
      },
      {
        src: heroPA3,
        alt: "Outdoor Weatherproof Speaker Installation",
        title: "Outdoor Weather-Resistant Speaker Systems",
        caption: "Outdoor Audio Solutions",
      },
    ],
  },

  "/rushrash-legal": {
    icon: "bi bi-file-earmark-text",
    bgImage: [LegalBG],
    title: "Legal & Compliance Solutions for Security Systems",
    subtitle:
      "Ensuring Regulatory Compliance and Data Protection for Your Security Infrastructure",
    ctaText: "Request a Security Compliance Consultation",
    heroParagraph:
      "Navigate the complex landscape of security system regulations and data protection requirements with our expert guidance. We ensure your CCTV, access control, and data systems comply with all relevant privacy laws and industry standards.",
    heroImages: [
      {
        src: heroLegal1,
        alt: "Network Security Compliance",
        title: "Security System Compliance",
        caption: "Regulatory Standards",
      },
      {
        src: heroLegal2,
        alt: "Security Team Consultation",
        title: "Professional Security Guidance",
        caption: "Expert Consultation",
      },
      {
        src: heroLegal3,
        alt: "Secure POS System",
        title: "Payment System Security",
        caption: "PCI Compliance",
      },
    ],
  },
  "/security-insights": {
    icon: "bi bi-shield",
    bgImage: [ArticlesBG],
    title: "Articles and Professional Security Insights",
    subtitle:
      "Covering: Access Control, Intercom, CCTV and Cyber Security articles.",
    ctaText: "Request a Security Compliance Consultation",
    heroParagraph:
      "Navigate the complex landscape of security system regulations and data protection requirements with our expert guidance. We ensure your CCTV, access control, and data systems comply with all relevant privacy laws and industry standards.",
    heroBullets: [
      {
        name: "CCTV & Access Control Guides",
        icon: "bi-camera-video",
      },
      {
        name: "Cybersecurity & Data Protection Tips",
        icon: "bi-shield-lock",
      },
      {
        name: "Industry Trends & Best Practices",
        icon: "bi-bar-chart-line",
      },
    ],
    heroImages: [
      {
        src: heroArticles3,
        alt: "Security Article 1",
        title: "Optimizing CCTV Installations",
        caption: "Tips and best practices for camera placement and setup.",
      },
      {
        src: heroArticles3,
        alt: "Security Article 2",
        title: "Access Control Trends",
        caption: "Latest innovations in secure access systems for businesses.",
      },
      {
        src: heroArticles3,
        alt: "Security Article 3",
        title: "Cyber Security Essentials",
        caption: "Protecting your systems from modern digital threats.",
      },
    ],
  },
  "/security-products": {
    icon: "bi bi-shield",
    bgImage: [ArticlesBG],
    title: "Comprehensive Security Products & Solutions",
    subtitle:
      "Featuring: CCTV Cameras, NVR/DVR Recorders, Access Control, and Smart Security Systems",
    ctaText: "Explore Security Products",
    heroParagraph:
      "Discover a wide range of professional-grade security products designed for residential and commercial installations. From surveillance cameras to access control systems, we provide reliable solutions to protect your people, assets, and data.",
    heroBullets: [
      {
        name: "High-Quality CCTV & Cameras",
        icon: "bi-camera-video",
      },
      {
        name: "Access Control & Smart Locks",
        icon: "bi-key",
      },
      {
        name: "Integrated Security Solutions",
        icon: "bi-diagram-3",
      },
    ],
    heroImages: [
      {
        src: heroProducts1,
        alt: "CCTV Cameras",
        title: "Professional CCTV Cameras",
        caption: "High-resolution cameras for monitoring homes and businesses.",
      },
      {
        src: heroProducts2,
        alt: "Access Control Systems",
        title: "Advanced Access Control",
        caption:
          "Secure your premises with smart access panels and biometric readers.",
      },
      {
        src: heroProducts3,
        alt: "Recorders & NVR",
        title: "Reliable Recording Solutions",
        caption:
          "NVR/DVR systems with remote monitoring and cloud integration.",
      },
    ],
  },
};

// Function to generate dynamic product banner
export function getProductBanner(product) {
  return {
    icon: "bi bi-box-seam",
    bgImage: ProductsBG,
    title: `${product.brand}: ${product.title}`,
    subtitle: `Commercial and residential ${
      product.categoryDescription || "cameras"
    }`,
    ctaText: `Shop ${product.brand} Cameras`,
    heroParagraph: product.description,
    heroBullets:
      product.heroBullets?.map((f) => ({
        name: f.name,
        icon: f.icon || "bi-camera-video",
      })) || [],
    heroImages: product.product_banner_images?.length
      ? product.product_banner_images
      : [
          {
            src: product.productImage,
            alt: product.title,
            title: product.title,
            caption: product.brand,
          },
        ],
  };
}

// Function to generate dynamic brand banner
export function getBrandBanner(brandName, bLogo, products) {
  // Filter products for this brand
  const brandProducts = products.filter(
    (p) => p.brand.toLowerCase() === brandName.toLowerCase()
  );

  return {
    icon: "bi bi-building",
    brandLogo: [bLogo],
    title: `${brandName} Security Products`,
    subtitle: `Explore our range of ${brandProducts.length} ${brandName} products`,
    ctaText: `Shop ${brandName} Products`,
    heroParagraph: `Discover professional-grade ${brandName} security solutions for home and business. Browse cameras, access control, and integrated systems designed for reliability and performance.`,
    heroBullets: [
      {
        name: "CCTV Cameras",
        icon: "bi-camera-video",
      },
      {
        name: "Access Control Systems",
        icon: "bi-key",
      },
      {
        name: "Complete Security Solutions",
        icon: "bi-diagram-3",
      },
    ],
    heroImages: brandProducts.slice(0, 3).map((p) => ({
      src: p.productImage,
      alt: p.title,
      title: p.title,
      caption: p.brand,
    })),
  };
}
