//
//

//
import {
  pageSubTitleDS,
  defaultSubTitle,
} from "../assets/data/page_sub_title_ds";

export function getHeaderSubtitle(pathname = "") {
  for (const item of pageSubTitleDS) {
    if (
      (typeof item.match === "string" && pathname.includes(item.match)) ||
      (item.match instanceof RegExp && item.match.test(pathname))
    ) {
      return item.label;
    }
  }
  return defaultSubTitle;
}
