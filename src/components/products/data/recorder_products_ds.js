//
//

//nvr images
import nvrIMG1 from "../../../assets/images/brands/lts/products/nvrs/8-channel-nvr-ip-recorder.png";

//dvr images
import dvrIMG1 from "../../../assets/images/brands/lts/products/dvrs/TVI-DVR-16-Channel-ltd8316d.png";

//
export const recorder_products_ds = [
  {
    id: "DVR-8CH-1080P",
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
    productImage: nvrIMG1,
    imgCaption: "4-Channel 4k NVR",
  },
];
