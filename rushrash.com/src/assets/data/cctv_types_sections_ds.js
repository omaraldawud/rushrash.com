import imgFormFactor from "../images/cctv-cams/security-camera.png";
import imgTechnology from "../images/cctv-cams/cameras-lit90e.gif";
import imgSpecialFeatures from "../images/security-locks/home-access-control.jpg";
import imgResidential from "../images/cctv-cams/cctv-cameras.jpg";
import imgCommercial from "../images/commercial/commercial-cctv-cam.jpg";
import imgOutdoor from "../images/cctv-cams/commercial-cctv-180.jpg";

const cctvCameraTypeSections = [
  {
    heading: "By Form Factor (Shape & Design)",
    icon: "bi-camera-video",
    image: imgFormFactor,
    items: [
      "Bullet Cameras: Cylindrical, often for outdoor visible deterrence",
      "Dome Cameras: Discreet dome housing",
      "Turret Cameras: Eyeball design, easy to mount",
      "PTZ Cameras: Pan, tilt, zoom controlled remotely",
      "Fisheye Cameras: 360° panoramic coverage",
      "C-Mount Cameras: Interchangeable lenses for flexible use",
    ],
  },
  {
    heading: "By Technology",
    icon: "bi-hdd-network",
    image: imgTechnology,
    items: [
      "IP Cameras: Digital, network-ready, high resolution",
      "Analog Cameras: Traditional coaxial signal to DVR",
      "Wireless Cameras: Transmit via Wi-Fi for flexible placement",
      "Wired Cameras: Reliable hardwired connection",
      "NVR Systems: Network Video Recorder for IP cameras",
      "DVR Systems: Digital Video Recorder for analog cameras",
    ],
  },
  {
    heading: "By Special Features",
    icon: "bi-lightning",
    image: imgSpecialFeatures,
    items: [
      "Infrared/Night Vision: 24/7 surveillance in darkness",
      "Motion Sensing: Alerts triggered by movement",
      "Thermal Cameras: Detect heat in fog, smoke, or dark",
      "With Audio: Capture sound along with video",
    ],
  },
  {
    heading: "Residential CCTV Cameras",
    icon: "bi-house",
    image: imgResidential,
    items: [
      "Designed for homes and apartments",
      "Compact, discreet designs",
      "Smartphone viewing & alerts",
      "Night vision and indoor/outdoor options",
    ],
  },
  {
    heading: "Commercial CCTV Cameras",
    icon: "bi-building",
    image: imgCommercial,
    items: [
      "High-resolution for shops, offices, warehouses",
      "Integration with access control and alarms",
      "Remote monitoring across multiple sites",
      "Scalable NVR/DVR storage solutions",
    ],
  },
  {
    heading: "Indoor & Outdoor Use",
    icon: "bi-geo-alt",
    image: imgOutdoor,
    items: [
      "Weatherproof outdoor models",
      "Discreet indoor cameras",
      "Flexible mounting and angles",
      "Adjustable field of view for coverage needs",
    ],
  },
];

export default cctvCameraTypeSections;
