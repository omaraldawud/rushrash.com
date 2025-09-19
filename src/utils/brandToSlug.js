//

export default function brandToSlug(brand) {
  return brand.toLowerCase().replace(/\s+/g, "-");
}
