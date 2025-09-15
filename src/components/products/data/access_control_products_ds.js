//
//
import accCtrlIMG from "../../../assets/images/access-control/access-control-card-sweep.jpg";

//ds
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
    productImage: accCtrlIMG,
    imgCaption: "Hikvision Access Control Panel",
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
    productImage: accCtrlIMG,
  },
];
