//
//

import alarmImg1 from "/src/assets/images/access-control/access-control-key.jpeg";

export default {
  id: 4,
  slug: "alarm-testing-guide",
  content: "/content/articles/alarm-testing-guide.md",
  published: true,
  category: "alarm",
  mainEntityOfPage: "https://rushrash.com/articles/alarm-testing-guide",
  headline: "How to Test Your Alarm System Monthly",
  description:
    "Testing your alarm system every month ensures sensors and sirens work when you need them most.",
  image: alarmImg1,
  relatedArticles: ["pa-sound-tips", "access-control-small-business"],

  relatedProduct: {
    title: "CCTV Camera 1",
    link: "/products/cctv-maintenance-kit",
  },
  tags: ["alarm", "testing", "security", "maintenance"],
  datePublished: new Date("2024-03-12"),
  dateModified: new Date("2024-03-12"),
  readingTime: "4 min read",
  author: "Alarms & Monitoring Department",
  publisher: {
    type: "Organization",
    name: "Rushrash Security Systems",
    logo: {
      type: "ImageObject",
      url: "http://rushrash.com/assets/images/logo/rushrash-inc-new-logo-tr.png",
    },
  },
};
