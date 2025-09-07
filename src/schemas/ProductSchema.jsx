export function ProductSchema({ name, brand, description, offers }) {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name,
        brand: { "@type": "Brand", name: brand },
        description,
        offers: {
          "@type": "Offer",
          ...offers,
        },
      })}
    </script>
  );
}
