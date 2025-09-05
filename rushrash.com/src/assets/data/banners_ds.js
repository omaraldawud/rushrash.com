import securityBg from "../../assets/images/banners/security-cctv-top.jpg";
import aboutUsBg from "../../assets/images/banners/aboutus/call-us-cctv-solutions.jpg";
import residentialBg from "../../assets/images/banners/residential/setup-residential-cctv-wireless-camera.jpg";
import accessControlBg from "../../assets/images/access-control/access-control-system.jpg";
import ITServicesBG from "../../assets/images/it-services/it-architecture.jpg";
import CCTVInstallationBG from "../../assets/images/banners/cctv-installation-technician.png";
import PoSBG from "../../assets/images/pos/point-of-sale-restaurants.jpeg";
import LegalBG from "../../assets/images/site-wide/data-privecy-security.jpeg";
import ContactBg from "../../assets/images/banners/aboutus/building-cctv.jpg";

////////////////////////// Hero images
//home
import heroHome1 from "../../assets/images/banners/security-lock-open.jpg";
import heroHome2 from "../../assets/images/banners/security-cctv-top-blue.jpg";
import heroHome3 from "../../assets/images/banners/commercial-building-cctv.jpg";

//contacts
import heroContacts1 from "../../assets/images/banners/security-lock-open.jpg";
import heroContacts2 from "../../assets/images/cctv-cams/cctv-control.webp";
import heroContacts3 from "../../assets/images/banners/security-cctv-top-blue.jpg";

//about
import heroAbout1 from "../../assets/images/banners/PluggedInCat5.jpg";
import heroAbout3 from "../../assets/images/banners/indoor-cct-installation.jpg";
import heroAbout2 from "../../assets/images/banners/aboutus/it-services-bg.jpg";

//residential
import heroResidential1 from "../../assets/images/banners/indoor-cct-installation.jpg";
import heroResidential2 from "../../assets/images/banners/cctv-cameras.jpg";
import heroResidential3 from "../../assets/images/banners/cctv-nvr-cableing.jpg";

//commercial
import heroCommercial1 from "../../assets/images/access-control/mac-military.jfif";
import heroCommercial2 from "../../assets/images/brands/pelco/pelco-panoramic-cameeras.avif";
import heroCommercial3 from "../../assets/images/banners/fiber-optic-system.jpg";

//services/it-services
import heroITServices1 from "../../assets/images/it-services/cat-cables-it-network-setup.jpeg";
import heroITServices2 from "../../assets/images/it-services/it-setup.webp";
import heroITServices3 from "../../assets/images/it-services/it-architecture.jpg";

//services/access-control
import heroAccessControl1 from "../../assets/images/access-control/access-control-pad.webp";
import heroAccessControl2 from "../../assets/images/access-control/drone-access-control.jpg";
import heroAccessControl3 from "../../assets/images/access-control/aws-biometric-fingerprint.jfif";

//services/access-control
import heroCCTVInstallation1 from "../../assets/images/cctv-cams/residential-CCTV.jfif";
import heroCCTVInstallation2 from "../../assets/images/cctv-cams/cctv-control.webp";
import heroCCTVInstallation3 from "../../assets/images/cctv-cams/camera-commercial-cctv.jpg";

//services/access-control
import heroPoS1 from "../../assets/images/pos/mobile-pos-phone.jfif";
import heroPoS2 from "../../assets/images/pos/cloud-based-pos-dashboard.jfif";
import heroPoS3 from "../../assets/images/pos/tablet-pos-system.jfif";

//rushrash-legal
import heroLegal1 from "../../assets/images/banners/PluggedInCat5.jpg";
import heroLegal2 from "../../assets/images/banners/security-team.jfif";
import heroLegal3 from "../../assets/images/pos/tablet-pos-system.jfif";

//
// local data structre
const banners = {
  "/": {
    bgImage: [securityBg],
    title: "Rushrash Inc. – Professional CCTV & Access Control Solutions",
    subtitle:
      "Your trusted experts in residential and commercial security systems",

    ctaText: "FREE Site Survey",
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
  //contacts
  "/contact-rushrash-inc": {
    bgImage: [ContactBg],
    title: "Trusted Security Partner for Homes & Businesses",
    subtitle: "Your Sleepless Eye in CCTV & Access Control",

    ctaText: "FREE site survey",
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
    ctaText: "Schedule a FREE Site Visit",
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
    bgImage: [ITServicesBG],
    title: "IT Services",
    subtitle: "Control Every Entry with Enterprise-Grade Access Solutions.",
    ctaText: "Schedule an IT Consultation",
    heroImages: [
      {
        src: heroITServices1,
        alt: "Residential CCTV Camera",
        title: "Indoor Home CCTV Installation",
        caption: "Indoor CCTV",
      },
      {
        src: heroITServices2,
        alt: "Smart Door Access",
        title: "Smart Door Security",
        caption: "Access Home  Remotely",
      },
      {
        src: heroITServices3,
        alt: "Home Security System Overview",
        title: "Integrated Security Solutions",
        caption: "Quality CCTV Cams",
      },
    ],
  },
  // services/access-control
  "/services/access-control": {
    icon: "bi bi-shop",
    bgImage: [accessControlBg],
    title:
      "Advanced Access Control Systems for Secure & Efficient Entry Management",
    subtitle: "Control Every Entry with Enterprise-Grade Access Solutions.",
    ctaText: "Schedule an Access Control Site Survey",
    heroImages: [
      {
        src: heroAccessControl1,
        alt: "Residential CCTV Camera",
        title: "Indoor Home CCTV Installation",
        caption: "Indoor CCTV",
      },
      {
        src: heroAccessControl2,
        alt: "Smart Door Access",
        title: "Smart Door Security",
        caption: "Access Home  Remotely",
      },
      {
        src: heroAccessControl3,
        alt: "Home Security System Overview",
        title: "Integrated Security Solutions",
        caption: "Quality CCTV Cams",
      },
    ],
  },
  ///services/cctv-installation
  "/services/cctv-installation": {
    icon: "bi bi-shop",
    bgImage: [CCTVInstallationBG],
    title:
      "Professional CCTV Installation Services for Reliable Security Coverage",
    subtitle:
      "Protect Your Property with Expertly Designed Surveillance Solutions.",
    ctaText: "Book a Free CCTV Site Assessment",
    heroImages: [
      {
        src: heroCCTVInstallation1,
        alt: "Residential CCTV Camera",
        title: "Indoor Home CCTV Installation",
        caption: "Indoor CCTV",
      },
      {
        src: heroCCTVInstallation2,
        alt: "Smart Door Access",
        title: "Smart Door Security",
        caption: "Access Home  Remotely",
      },
      {
        src: heroCCTVInstallation3,
        alt: "Home Security System Overview",
        title: "Integrated Security Solutions",
        caption: "Quality CCTV Cams",
      },
    ],
  },
  ///services/pos-installation
  "/services/pos-installation": {
    icon: "bi bi-shop",
    bgImage: [PoSBG],
    title:
      "Point-of-Sale Installation Services for Seamless Business Operations",
    subtitle:
      "Enhance Checkout Speed, Accuracy, and Security with Modern POS Solutions.",
    ctaText: "Request a Free POS Consultation",
    heroImages: [
      {
        src: heroPoS1,
        alt: "Residential CCTV Camera",
        title: "Indoor Home CCTV Installation",
        caption: "Indoor CCTV",
      },
      {
        src: heroPoS2,
        alt: "Smart Door Access",
        title: "Smart Door Security",
        caption: "Access Home  Remotely",
      },
      {
        src: heroPoS3,
        alt: "Home Security System Overview",
        title: "Integrated Security Solutions",
        caption: "Quality CCTV Cams",
      },
    ],
  },
  // /rushrash-legal
  "/rushrash-legal": {
    icon: "bi bi-shop",
    bgImage: [LegalBG],
    title: "Secure Surveillance & IT Solutions for Your Business",
    subtitle:
      "Protect Your Premises, Streamline Access, and Optimize Operations with CCTV, Access Control, PoS, and IT Services.",
    ctaText: "Request a Free Security & IT Consultation",
    heroImages: [
      {
        src: heroLegal1,
        alt: "Residential CCTV Camera",
        title: "Indoor Home CCTV Installation",
        caption: "Indoor CCTV",
      },
      {
        src: heroLegal2,
        alt: "Smart Door Access",
        title: "Smart Door Security",
        caption: "Access Home  Remotely",
      },
      {
        src: heroLegal3,
        alt: "Home Security System Overview",
        title: "Integrated Security Solutions",
        caption: "Quality CCTV Cams",
      },
    ],
  },
};

export default banners;
