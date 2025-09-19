// /src/assets/data/products/recorder_products_ds.js
// nvr images
import nvrIMG1 from "../../../assets/images/brands/lts/products/nvrs/8-channel-nvr-ip-recorder.png";
// dvr images
import dvrIMG1 from "../../../assets/images/brands/lts/products/dvrs/TVI-DVR-16-Channel-ltd8316d.png";

export const recorder_products_ds = [
  {
    id: "DVR-8CH-1080P000",
    SKU: "LTDVR8-1080P",
    slug: "dvr-8ch-1080p",
    brand: "LTS",
    category: "recorders",
    product_category: "cctv",
    type: "DVR",
    title: "8-Channel 1080p DVR",
    description:
      "8-channel 1080p DVR with remote viewing, motion detection, and H.264 compression",
    channels: 8,
    recordingRate: "1080p @ 30fps",
    storageCapacity: "2TB HDD",
    poe: false,
    powerSupply: "12V DC",
    services: ["cctv"],
    heroBullets: [
      { name: "1080p Recording", icon: "bi-camera-video" },
      { name: "Motion Detection", icon: "bi-lightning" },
      { name: "Remote Monitoring", icon: "bi-phone" },
    ],
    product_banner_images: [
      {
        src: dvrIMG1,
        alt: "8-Channel DVR",
        title: "8CH DVR",
        caption: "LTS",
      },
      {
        src: dvrIMG1,
        alt: "8-Channel DVR Side",
        title: "8CH DVR Side",
        caption: "LTS",
      },
      {
        src: dvrIMG1,
        alt: "8-Channel DVR Setup",
        title: "8CH DVR Setup",
        caption: "LTS",
      },
    ],
    productImage: dvrIMG1,
    imgCaption: "1080 8 Ports DVR",
  },

  {
    id: "DVR-16CH-4K",
    slug: "dvr-16ch-4k",
    brand: "Hikvision",
    category: "recorders",
    product_category: "cctv",
    type: "DVR",
    title: "16-Channel 4K DVR",
    description: "High-end 16-channel 4K DVR with AI motion detection",
    SKU: "HIKDVR16-4K",
    channels: 16,
    recordingRate: "4K @ 30fps",
    storageCapacity: "4TB HDD",
    poe: false,
    powerSupply: "12V DC",
    services: ["cctv"],
    heroBullets: [
      { name: "4K Recording", icon: "bi-camera-video" },
      { name: "AI Motion", icon: "bi-lightbulb" },
      { name: "High Capacity", icon: "bi-hdd-network" },
    ],
    product_banner_images: [
      {
        src: dvrIMG1,
        alt: "16-Channel DVR",
        title: "16CH DVR",
        caption: "Hikvision",
      },
      {
        src: dvrIMG1,
        alt: "16-Channel DVR Side",
        title: "16CH DVR Side",
        caption: "Hikvision",
      },
      {
        src: dvrIMG1,
        alt: "16-Channel DVR Setup",
        title: "16CH DVR Setup",
        caption: "Hikvision",
      },
    ],
    productImage: dvrIMG1,
    imgCaption: "16 Ports DVR",
  },

  {
    id: "NVR-4CH-1080P",
    slug: "nvr-4ch-1080p",
    brand: "LTS",
    category: "recorders",
    product_category: "cctv",
    type: "NVR",
    title: "4-Channel 1080p NVR",
    description:
      "Network Video Recorder supporting 4 IP cameras, remote monitoring via mobile app",
    SKU: "LTNVR4-1080P",
    channels: 4,
    recordingRate: "1080p @ 30fps",
    storageCapacity: "2TB HDD",
    poe: true,
    powerSupply: "12V DC",
    services: ["cctv", "it_services"],
    heroBullets: [
      { name: "PoE Support", icon: "bi-plug" },
      { name: "Mobile Monitoring", icon: "bi-phone" },
      { name: "Reliable Storage", icon: "bi-hdd-network" },
    ],
    product_banner_images: [
      {
        src: nvrIMG1,
        alt: "4CH NVR",
        title: "4CH NVR",
        caption: "LTS",
      },
      {
        src: nvrIMG1,
        alt: "4CH NVR Side",
        title: "4CH NVR Side",
        caption: "LTS",
      },
      {
        src: nvrIMG1,
        alt: "4CH NVR Setup",
        title: "4CH NVR Setup",
        caption: "LTS",
      },
    ],
    productImage: nvrIMG1,
    imgCaption: "1080p 4 Channel Network NVR",
  },

  {
    id: "NVR-8CH-4K",
    slug: "nvr-8ch-4k",
    brand: "Hikvision",
    category: "recorders",
    product_category: "cctv",
    type: "NVR",
    title: "8-Channel 4K NVR",
    description: "8-channel 4K NVR with PoE ports and cloud support",
    SKU: "HIKNVR8-4K",
    channels: 8,
    recordingRate: "4K @ 30fps",
    storageCapacity: "4TB HDD",
    poe: true,
    powerSupply: "12V DC",
    services: ["cctv", "it_services"],
    heroBullets: [
      { name: "4K Ready", icon: "bi-camera-video" },
      { name: "PoE Ports", icon: "bi-plug" },
      { name: "Cloud Support", icon: "bi-cloud" },
    ],
    product_banner_images: [
      {
        src: nvrIMG1,
        alt: "8CH NVR",
        title: "8CH NVR",
        caption: "Hikvision",
      },
      {
        src: nvrIMG1,
        alt: "8CH NVR Side",
        title: "8CH NVR Side",
        caption: "Hikvision",
      },
      {
        src: nvrIMG1,
        alt: "8CH NVR Setup",
        title: "8CH NVR Setup",
        caption: "Hikvision",
      },
    ],
    productImage: nvrIMG1,
    imgCaption: "4-Channel 4k NVR",
  },
];

export default recorder_products_ds;
