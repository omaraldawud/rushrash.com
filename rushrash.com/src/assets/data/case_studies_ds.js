//
// Images
import imgChicagoCaseStudy from "../../assets/images/commercial/chicago-22-story-building.jpg";
import imgHickoryHills from "../../assets/images/security-locks/home-access-control.jpg";
import imgAccessControlOffice from "../../assets/images/access-control/tools-lock-access-control.jpg";
import imgITNetworkSetup from "../../assets/images/it-services/cat-cables-it-network-setup.jpeg";
import imgHickoryHillsLake from "../../assets/images/success-stories/osprey-nest-solar-cctv-camera.jpg";
import imgPoS from "../../assets/images/pos/point-of-sale-restaurants.jpeg";

const caseStudies = [
  {
    studyType: "featured",
    isFeatured: true,
    image: imgHickoryHillsLake,
    altText:
      "Solar-powered CCTV system monitoring ospreys at Hickory Hills Lake",
    category: {
      name: "Solar Powered CCTV - Environmental Security",
      icon: "bi-camera-video",
    },
    title: "Hickory Hills Lake Osprey CCTV Monitoring",
    stats: [
      { value: "1", label: "Solar Panel CCTV Post" },
      { value: "24/7", label: "Wildlife Monitoring" },
    ],
    overview:
      "In partnership with Cook County, Rushrash Inc. engineered and deployed a solar-powered CCTV system on a lake post at Hickory Hills. The project was designed to provide reliable, eco-friendly monitoring of a pair of ospreys during their mating season, ensuring wildlife researchers had uninterrupted observation without disturbing the natural habitat.",
    services: [
      "Custom Solar-Powered CCTV Design",
      "Weatherproof Camera Installation",
      "Remote Monitoring Integration - Eco-Security",
      "Wildlife Observation Support",
    ],
    results: [
      "Continuous live monitoring throughout the mating season",
      "Zero environmental disruption during installation",
      "Valuable data collected for local wildlife research",
      "Demonstrated feasibility of solar-powered CCTV in remote areas",
    ],
  },

  {
    image: imgChicagoCaseStudy,
    studyType: "commercial",
    altText: "32-camera IP NVR system installation at Chicago high-rise",
    category: {
      name: "Commercial Security",
      icon: "bi-building",
    },
    title: "Chicago High-Rise Complex",
    stats: [
      { value: "32", label: "HD Cameras" },
      { value: "24/7", label: "Monitoring" },
    ],
    overview:
      "A comprehensive security overhaul for a prestigious downtown Chicago high-rise, requiring complete coverage of all entry points, common areas, and perimeter.",
    services: [
      "System Design",
      "Structured Cabling",
      "NVR Installation",
      "Camera Deployment",
      "Remote Access Setup",
    ],
    results: [
      "100% property coverage with zero blind spots",
      "Reduced security incidents by 78% in first 3 months",
      "Remote monitoring access for property management",
      "Future-proof system with expansion capabilities",
    ],
    isFeatured: true,
  },
  {
    studyType: "residential",
    isFeatured: true,
    image: imgHickoryHills,
    altText: "8-camera DVR system with access control in Hickory Hills home",
    category: {
      name: "Residential Security",
      icon: "bi-house",
    },
    title: "Hickory Hills Family Home",
    stats: [
      { value: "8", label: "HD Cameras" },
      { value: "Full", label: "Automation" },
    ],
    overview:
      "Complete home security transformation featuring 8-camera DVR surveillance, smart access control, and full home automation integration for comprehensive family protection.",
    services: [
      "CCTV System Design",
      "Access Control Installation",
      "Home Automation",
      "Network Integration",
      "Mobile App Setup",
    ],
    results: [
      "Complete perimeter coverage with motion-activated alerts",
      "Keyless entry with remote access control",
      "Seamless integration with smart home devices",
      "Mobile app control from anywhere",
      "Peace of mind for the entire family",
    ],
  },
  {
    studyType: "Access Control",
    image: imgAccessControlOffice,
    altText: "Advanced access control system for corporate office",
    category: {
      name: "Access Control",
      icon: "bi-door-closed",
    },
    title: "Corporate Office Access Control",
    stats: [
      { value: "15", label: "Doors Secured" },
      { value: "Biometric", label: "Entry Points" },
    ],
    overview:
      "Implementation of a multi-level access control system for a corporate office to enhance security, monitor staff access, and secure restricted zones.",
    services: [
      "Access Control Design",
      "Biometric Reader Installation",
      "RFID Card System Setup",
      "Centralized Management Software",
    ],
    results: [
      "All sensitive areas secured with biometric authentication",
      "Centralized logging of all access activity",
      "Reduced unauthorized entry incidents to zero",
      "Scalable system ready for future expansion",
    ],
    isFeatured: false,
  },
  {
    studyType: "it",
    image: imgITNetworkSetup,
    altText: "Office IT and network configuration for mid-size company",
    category: {
      name: "IT & Network",
      icon: "bi-laptop",
    },
    title: "Office IT & Network Configuration",
    stats: [
      { value: "50+", label: "Connected Devices" },
      { value: "1Gbps", label: "Network Speed" },
    ],
    overview:
      "Full IT and network setup for a growing company, including wired/wireless infrastructure, secure network configuration, and optimized performance for all office systems.",
    services: [
      "Network Design & Cabling",
      "Server Setup",
      "Firewall & Security Configuration",
      "Workstation Deployment",
      "Wi-Fi Optimization",
    ],
    results: [
      "High-speed, secure network for all employees",
      "Reduced network downtime and latency",
      "Centralized IT management and monitoring",
      "Future-ready infrastructure supporting remote work",
    ],
    isFeatured: false,
  },
  {
    studyType: "pos",
    image: imgPoS,
    altText: "Professional POS system installation in a retail environment",
    category: {
      name: "Point of Sale System Installation",
      icon: "bi-cash-register",
    },
    title: "Retail Store POS System Upgrade",
    stats: [
      { value: "4", label: "POS Terminals Installed" },
      { value: "30%", label: "Checkout Efficiency Improvement" },
    ],
    overview:
      "Rushrash Inc. designed and implemented a complete POS system upgrade for a mid-sized retail store, replacing outdated equipment with modern touchscreen terminals, barcode scanners, and receipt printers. The system integrated with inventory management and customer loyalty programs.",
    services: [
      "POS Hardware Installation",
      "Payment Processing Integration",
      "Inventory Management System Setup",
      "Staff Training & Documentation",
    ],
    results: [
      "Reduced checkout time by 30%",
      "Improved inventory accuracy to 99.8%",
      "Enabled seamless loyalty program integration",
      "Increased customer satisfaction scores",
    ],
    isFeatured: false,
  },
];

export default caseStudies;
