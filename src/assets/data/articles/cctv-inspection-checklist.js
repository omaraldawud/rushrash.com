// /src/assets/data/articles/cctv-inspection-checklist.js
//

import cctvImg from "../../images/cctv-cams/cctv-component.jfif";

export default {
  id: 1,
  slug: "cctv-inspection-checklist",
  content: "/content/articles/cctv-inspection-checklist.md",
  published: true,
  category: "cctv",
  mainEntityOfPage: "https://rushrash.com/articles/cctv-inspection-checklist",
  headline: "CCTV Inspection Checklist: Keep Your System Reliable",
  description:
    "A monthly CCTV inspection can save you costly downtime. Learn what to check for reliability and safety.",
  image: cctvImg,
  relatedArticles: ["alarm-testing-guide"],
  relatedProduct: {
    title: "CCTV Camera 1",
    link: "/products/cctv-maintenance-kit",
  },
  tags: ["cctv", "inspection", "maintenance", "safety"],
  datePublished: "2023-11-15",
  dateModified: "2023-11-15",
  readingTime: "5 min read",
  author: "CCTV Department",
  publisher: {
    type: "Organization",
    name: "Rushrash Security Systems",
    logo: {
      type: "ImageObject",
      url: "http://rushrash.com/assets/images/logo/rushrash-inc-new-logo-tr.png",
    },
  },
};
