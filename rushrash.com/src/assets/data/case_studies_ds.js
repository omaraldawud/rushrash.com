//
// Images
import imgChicagoCaseStudy from "../../assets/images/commercial/chicago-22-story-building.jpg";
import imgHickoryHills from "../../assets/images/security-locks/home-access-control.jpg";

const caseStudies = [
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
    isFeatured: false,
  },
];

export default caseStudies;
