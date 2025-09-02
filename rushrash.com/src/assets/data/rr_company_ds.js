// src/data/companyInfo.js
const companyInfo = {
  companyName: "Rushrash Inc.",
  logo: "/images/logo.png",
  website: "https://rushrash.com",
  email: "info@rushrash.com",
  phoneNumbers: {
    local: "(630) 800-8077",
    tollFree: "1-630-800-8077",
  },
  address: {
    street: "24204 Champion Dr.",
    city: "Naperville",
    state: "IL",
    zipcode: "60564",
  },
  socialProfiles: [
    {
      name: "facebook",
      url: "https://facebook.com/rushrash",
      icon: "bi-facebook",
    },
    {
      name: "twitter",
      url: "https://twitter.com/rushrash",
      icon: "bi-twitter",
    },
    { name: "yelp", url: "https://yelp.com/biz/rushrash", icon: "bi-yelp" },
    {
      name: "MapQuest",
      url: "https://www.mapquest.com/us/illinois/rushrash-inc-345435157",
      icon: "bi-map",
    },

    {
      name: "Google",
      url: "https://share.google/io2fjs4V3XE6ZAQoZ",
      icon: "bi-google",
    },
  ],
};

export default companyInfo;
