// src/assets/data/pos_systems_ds.js
import imgTraditionalPOS from "../images/pos/traditionalPOS.jfif";
import imgTabletPOS from "../images/pos/tablet-pos-system.jfif";
import imgMobilePOS from "../images/pos/mobile-pos-phone.jfif";
import imgSelfServiceKiosk from "../images/pos/self-service-kiosk.jfif";
import imgCloudBasedPOS from "../images/pos/cloud-based-pos-dashboard.jfif";

const posSystemsDS = [
  {
    heading: "Traditional Terminal / Countertop PoS",
    icon: "bi-cash-register",
    image: imgTraditionalPOS,
    items: [
      "Hardware: All-in-one terminal with screen, card reader, and cash drawer.",
      "Deployment: Stationary setup, typically at a fixed checkout counter.",
      "Functionality: Robust and reliable, handles high-volume transactions and integrated peripherals like barcode scanners.",
      "Ideal For: Retail stores, supermarkets, and restaurants with dedicated checkout stations.",
    ],
    bgColor: "#f3f6fb",
  },
  {
    heading: "Tablet-Based PoS System",
    icon: "bi-tablet",
    image: imgTabletPOS,
    items: [
      "Hardware: PoS software runs on a tablet (iPad, Android) with connected peripherals.",
      "Deployment: Semi-stationary; can be mounted on a stand or used on a counter.",
      "Functionality: Modern interface, compact footprint, and more affordable than traditional terminals.",
      "Ideal For: Cafés, pop-up shops, small boutiques, and quick-service restaurants.",
    ],
    bgColor: "#fff8e1",
  },
  {
    heading: "Mobile PoS (mPoS)",
    icon: "bi-phone",
    image: imgMobilePOS,
    items: [
      "Hardware: PoS software on a smartphone or small mobile device, often with a portable card reader.",
      "Deployment: Fully mobile. Staff can take payments anywhere on the sales floor or on delivery.",
      "Functionality: Maximizes customer service by eliminating checkout lines.",
      "Ideal For: Trade shows, food trucks, delivery services, and retailers offering line-busting.",
    ],
    bgColor: "#e8f5e9",
  },
  {
    heading: "Self-Service Kiosk",
    icon: "bi-display",
    image: imgSelfServiceKiosk,
    items: [
      "Hardware: Standalone kiosk with touchscreen, payment terminal, and often a card reader.",
      "Deployment: Fixed, customer-facing stations for autonomous ordering and payment.",
      "Functionality: Reduces labor costs, improves order accuracy, and speeds up service.",
      "Ideal For: Fast-food restaurants, cinemas, airports, and large retail stores.",
    ],
    bgColor: "#fdf0f5",
  },
  {
    heading: "Cloud-Based PoS",
    icon: "bi-cloud",
    image: imgCloudBasedPOS,
    items: [
      "Software: Data is stored and processed online, accessible from any internet-connected device.",
      "Benefits: Real-time analytics, remote management, automatic updates, and easy integration with other tools.",
      "Functionality: Offers subscription-based pricing. Data is secure and backed up off-site.",
      "Ideal For: Multi-location businesses, businesses that need remote access, and those wanting low upfront costs.",
    ],
    bgColor: "#e0f7fa",
  },
];

export default posSystemsDS;
