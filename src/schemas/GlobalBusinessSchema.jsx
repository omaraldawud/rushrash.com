// src/components/SchemaMarkup.jsx
// used for global business info (address, hours, contact):
export function GlobalBusinessSchema({
  businessName = "Rushrash Inc a CCTV Security Company",
  businessType = "Service", // or "Service" if no address
  businessUrl = "https://rushrash.com",
  logoUrl = "/images/logo.png",
  phone = "+1-630-800-8077",
  address = {
    street: "123 Main St",
    city: "Naperville",
    state: "IL",
    zip: "60540",
    country: "US",
  },
  geoLocation = { latitude: "41.7858", longitude: "-88.1470" },
  serviceRadius = "80467", // 50 miles in meters
  hours = {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "17:00",
  },
  services = [],

  socialProfiles = [
    "https://www.yelp.com/biz/rushrash-inc-hickory-hills",
    "https://www.bbb.org/us/il/hickory-hills/profile/security-cameras/rush-rash-inc-0654-88432642",
  ],
  searchAction = false,
}) {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": businessType,
            "@id": `${businessUrl}/#business`,
            name: businessName,
            image: `${businessUrl}${logoUrl}`,
            url: businessUrl,
            telephone: phone,
            ...(address && {
              address: {
                "@type": "PostalAddress",
                streetAddress: address.street,
                addressLocality: address.city,
                addressRegion: address.state,
                postalCode: address.zip,
                addressCountry: address.country,
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: geoLocation.latitude,
                longitude: geoLocation.longitude,
              },
            }),
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: hours.days,
              opens: hours.opens,
              closes: hours.closes,
            },
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: geoLocation.latitude,
                longitude: geoLocation.longitude,
              },
              geoRadius: serviceRadius,
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: `${businessName} Services`,
              itemListElement: services.map((service) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: service.name,
                  description: service.description,
                },
              })),
            },
            sameAs: socialProfiles,
          },
          {
            "@type": "WebSite",
            "@id": `${businessUrl}/#website`,
            url: businessUrl,
            name: businessName,
            ...(searchAction && {
              potentialAction: {
                "@type": "SearchAction",
                target: `${businessUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          },
        ],
      })}
    </script>
  );
}
