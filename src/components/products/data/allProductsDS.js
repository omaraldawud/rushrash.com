//
//

import { access_control_products_ds } from "./access_control_products_ds";
import { recorder_products_ds } from "./recorder_products_ds";
import { cctv_camera_products_ds } from "./cctv_camera_products_ds";

export const allProducts = [
  ...cctv_camera_products_ds,
  ...recorder_products_ds,
  ...access_control_products_ds,
];
