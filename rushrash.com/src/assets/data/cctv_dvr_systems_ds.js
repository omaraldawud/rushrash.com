//
// src/assets/data/ctv_dvr_systems_ds .js
import imgDVR from "../images/dvrs/cctv-nvr-installation.jfif";
import imgPoENVR from "../images/dvrs/cctv-nvr-installation.jfif";
import imgWirelessNVR from "../images/dvrs/cctv-nvr-installation.jfif";
import imgStandaloneNVR from "../images/dvrs/cctv-nvr-installation.jfif";
import imgSoftwareNVR from "../images/dvrs/cctv-nvr-installation.jfif";

const cctvDvrSystemsDS = [
  {
    heading: "DVR (Digital Video Recorder)",
    icon: "bi-hdd",
    image: imgDVR,
    items: [
      "Cameras: Uses analog cameras that capture and send raw analog footage.",
      "Cabling: Connects to cameras via coaxial cables, each with separate power cables.",
      "Processing: Built-in analog-to-digital converter processes footage for recording and viewing.",
      "System Type: Standalone device with self-contained operation and separate power source.",
    ],
    bgColor: "#f3f6fb",
  },
  {
    heading: "NVR (Network Video Recorder) – PoE",
    icon: "bi-hdd-network",
    image: imgPoENVR,
    items: [
      "Cameras: Works with IP cameras that process video data on the camera.",
      "Cabling: Ethernet cable provides both data and power (PoE).",
      "Processing: Camera encodes video digitally before sending to NVR.",
      "System Type: Convenient, scalable solution for wired IP systems.",
    ],
    bgColor: "#fff8e1",
  },
  {
    heading: "NVR – Wireless",
    icon: "bi-wifi",
    image: imgWirelessNVR,
    items: [
      "Cameras: IP cameras connected via Wi-Fi.",
      "Cabling: Typically separate power per camera; no Ethernet needed.",
      "Processing: Digital processing occurs in camera, then streamed to NVR.",
      "System Type: Flexible placement; ideal for locations without Ethernet wiring.",
    ],
    bgColor: "#e8f5e9",
  },
  {
    heading: "Standalone NVR",
    icon: "bi-server",
    image: imgStandaloneNVR,
    items: [
      "Dedicated hardware device for recording and managing IP camera feeds.",
      "Simpler setup with self-contained system.",
      "Supports multiple cameras, may include RAID and backup features.",
    ],
    bgColor: "#fdf0f5",
  },
  {
    heading: "Software-Based NVR",
    icon: "bi-laptop",
    image: imgSoftwareNVR,
    items: [
      "NVR software installed on a computer or server.",
      "Flexible and scalable with advanced features like AI integration and remote access.",
      "Can manage IP cameras across multiple locations.",
    ],
    bgColor: "#e0f7fa",
  },
];

export default cctvDvrSystemsDS;
