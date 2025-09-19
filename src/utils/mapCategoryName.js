//
// Adding new categories - add key-value pairs.

//
export function mapCategoryName(cat = "") {
  const normalized = cat.toLowerCase().replace(/[\s-_]/g, "");

  const map = {
    pa: "PA Systems",
    accesscontrol: "Access Control",
    it: "Information Technology (IT)",
    cctv: "CCTV",
    alarm: "Alarm",
  };

  return map[normalized] || "Security";
}
