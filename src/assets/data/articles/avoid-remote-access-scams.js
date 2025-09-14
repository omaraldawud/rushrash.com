//
//

import itImg1 from "/src/assets/images/it-services/it-services-ram-board.jpg";

export default {
  id: 6,
  slug: "avoid-remote-access-scams",
  content: "/content/articles/avoid-remote-access-scams.md",
  published: true,
  category: "it",
  mainEntityOfPage: "https://rushrash.com/articles/avoid-remote-access-scams",
  headline: "Beware of Remote Access Scams: Don’t Give Strangers Control",
  description:
    "Learn how scammers trick users into giving remote access to their PCs and how to protect yourself from these attacks.",
  image: itImg1,
  relatedArticles: [
    "cctv-inspection-checklist",
    "access-control-small-business",
  ],

  relatedProduct: {
    title: "CCTV Camera 1",
    link: "/products/cctv-maintenance-kit",
  },
  tags: ["cybersecurity", "scams", "remote access", "phishing"],
  datePublished: new Date("2024-02-10"),
  dateModified: new Date("2024-02-10"),
  readingTime: "6 min read",
  author: "Cybersecurity Team",
  publisher: {
    type: "Organization",
    name: "Rushrash Security Systems",
    logo: {
      type: "ImageObject",
      url: "http://rushrash.com/assets/images/logo/rushrash-inc-new-logo-tr.png",
    },
  },
};
