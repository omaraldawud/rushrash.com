// /src/assets/data/products/access_control_products_ds.js
import accCtrlIMG from "../../../assets/images/access-control/access-control-card-sweep.jpg";
import heroSingleProd1 from "../../../assets/images/access-control/access-control-key.jpeg";
import heroSingleProd2 from "../../../assets/images/access-control/biometric-fingerprint.jfif";
import heroSingleProd3 from "../../../assets/images/access-control/aws-abac-attributes.png";

export const access_control_products_ds = [
  {
    id: "AC-Pro200",
    slug: "ac-pro200",
    brand: "Hikvision",
    category: "access-control",
    product_category: "access_control",
    title: "AC-Pro200 Access Control Panel",
    description:
      "Access control panel for small businesses, supports 2 doors, RFID cards, TCP/IP connection",
    SKU: "HIKAC-PRO200",
    type: "Access Control Panel",
    maxUsers: 200,
    readerType: "RFID",
    protocol: "TCP/IP",
    powerSupply: "12V DC",
    services: ["access-control"],
    heroBullets: [
      { name: "Supports 2 Doors", icon: "bi-door-open" },
      { name: "RFID Cards", icon: "bi-card-text" },
      { name: "TCP/IP Connection", icon: "bi-wifi" },
    ],
    productImage: accCtrlIMG,
    imgCaption: "Hikvision Access Control Panel",
    product_banner_images: [
      {
        src: heroSingleProd1,
        alt: "AC-Pro200 Front",
        title: "AC-Pro200",
        caption: "Hikvision",
      },
      {
        src: heroSingleProd2,
        alt: "AC-Pro200 Biometric",
        title: "AC-Pro200 Biometric",
        caption: "Hikvision",
      },
      {
        src: heroSingleProd3,
        alt: "AC-Pro200 Setup",
        title: "AC-Pro200 Setup",
        caption: "Hikvision",
      },
    ],
  },
  {
    id: "AC-Pro500",
    slug: "ac-pro500",
    brand: "LTS",
    category: "access-control",
    product_category: "access_control",
    title: "AC-Pro500 Access Control Panel",
    description:
      "Advanced access control system, supports 5 doors, multiple authentication methods",
    SKU: "LTSAC-PRO500",
    type: "Access Control - Pro500",
    maxUsers: 500,
    readerType: "RFID + Biometric",
    protocol: "TCP/IP + Wiegand",
    powerSupply: "12V DC",
    services: ["access-control"],
    heroBullets: [
      { name: "Supports 5 Doors", icon: "bi-door-open" },
      { name: "Multiple Readers", icon: "bi-card-text" },
      { name: "Network Enabled", icon: "bi-wifi" },
    ],
    productImage: accCtrlIMG,
    imgCaption: "LTS Access Control Panel",
    product_banner_images: [
      {
        src: heroSingleProd1,
        alt: "AC-Pro500 Front",
        title: "AC-Pro500",
        caption: "LTS",
      },
      {
        src: heroSingleProd2,
        alt: "AC-Pro500 Biometric",
        title: "AC-Pro500 Biometric",
        caption: "LTS",
      },
      {
        src: heroSingleProd3,
        alt: "AC-Pro500 Setup",
        title: "AC-Pro500 Setup",
        caption: "LTS",
      },
    ],
  },
];

export default access_control_products_ds;
