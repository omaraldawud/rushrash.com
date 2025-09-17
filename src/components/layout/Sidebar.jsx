import "../../assets/css/SideBar.css";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import SidebarCard from "./SidebarCard";
import AccessControlComponents from "./AccessControlComponents";
import CCTVSystemComponents from "./CCTVSystemComponents";
import rr_company_ds from "../../assets/data/rr_company_ds";

// Import products and articles
import { allProducts } from "../products/data/allProductsDS";
import allArticles from "../../assets/data/articles";

//
const sidebarCardsData = {
  home: [
    {
      icon: "bi-key",
      title: "Local Access Control",
      text: "Secure your home or business with expert access control solutions, smart card entry, and biometric authentication.",
    },
    {
      icon: "bi-bullseye",
      title: "Mission Statement",
      text: "Delivering professional CCTV installation and monitoring services with reliability and security across Chicagoland.",
    },
    {
      icon: "bi-shield-check",
      title: "Licensed, Bonded, Insured",
      text: "Fully licensed, bonded, and insured CCTV company providing trusted security solutions for residential and commercial properties.",
    },
    {
      icon: "bi-eye-fill",
      title: "Local CCTV Company",
      text: "Serving Naperville, Aurora, Plainfield, and the greater Chicago area with professional CCTV installations.",
    },
  ],
  contact: [
    {
      icon: "bi-eye-fill",
      title: "Local CCTV Company",
      text: "Serving Naperville, Aurora, Plainfield, and the greater Chicago area with professional CCTV installations.",
    },
    {
      icon: "bi-key",
      title: "Local Access Control",
      text: "Secure your home or business with expert access control solutions, smart card entry, and biometric authentication.",
    },
  ],
  about: [
    {
      icon: "bi-bullseye",
      title: "Mission Statement",
      text: "Delivering professional CCTV installation and monitoring services with reliability and security across Chicagoland.",
    },
    {
      icon: "bi-shield-check",
      title: "Licensed, Bonded & Insured",
      text: "Fully licensed, bonded, and insured CCTV company providing trusted security solutions for residential and commercial properties.",
    },
  ],
};

function Sidebar() {
  const location = useLocation();

  let pageType = null;
  let serviceCategory = null;

  // Determine page type or service category
  if (location.pathname === "/") {
    pageType = "home";
  } else if (location.pathname.includes("/contact")) {
    pageType = "contact";
  } else if (location.pathname.includes("/about")) {
    pageType = "about";
  } else if (location.pathname.includes("/services/")) {
    // Extract service category from URL
    const segments = location.pathname.split("/");
    serviceCategory = segments[2]; // e.g. "access-control"
  }

  // Default cards (home, contact, about)
  let cardsToShow = sidebarCardsData[pageType] || [];

  // Service page: separate products and articles
  let productCards = [];
  let articleCards = [];

  function getOtherComponents() {
    if (location.pathname.includes("access-control")) return "access";
    else if (location.pathname.includes("cctv")) return "cctv";
    else return "all";
  }

  function getActiveProdCat(serviceCategory) {
    switch (serviceCategory) {
      case "cctv-installation":
        return ["cctv-cameras", "recorders"];
      case "access-control":
      case "access":
        return ["access-control"];
      case "it-services":
        return ["it-services"]; // adjust if needed
      case "pa-systems":
        return ["pa-systems"]; // adjust if needed
      default:
        return [];
    }
  }

  //map to article cats used in records.
  function getActiveArticleCat(serviceCategory) {
    switch (serviceCategory) {
      case "cctv-installation":
        return ["cctv"];
      case "access-control":
      case "access":
        return ["access_control"];
      case "it-services":
        return ["it"];
      case "pa-systems":
        return ["pa"];
      default:
        return [];
    }
  }

  if (serviceCategory) {
    // 🔹 Products
    const activeProdCategories = getActiveProdCat(serviceCategory);
    productCards = allProducts
      .filter((p) => activeProdCategories.includes(p.category))
      .map((p) => ({
        icon: "bi-box-seam",
        title: p.title,
        text: p.description,
        link: `/products/${p.brand}/${p.slug}`, // ✅ add product link
      }));
    // 🔹 Articles
    const activeArticleCategories = getActiveArticleCat(serviceCategory);
    articleCards = allArticles
      .filter(
        (a) => activeArticleCategories.includes(a.category) && a.published
      )
      .map((a) => ({
        icon: "bi-journal-text",
        title: a.slug.replace(/-/g, " "),
        text: "Read our article about: " + a.slug.replace(/-/g, " "),
        link: `/articles/${a.slug}`, // ✅ add article link
      }));

    console.log("Final productCards:", productCards);
    console.log("Final articleCards:", articleCards);
  }

  return (
    <aside className="custom-sidebar">
      {/* Success Stories Hash Link*/}
      <div className="mb-4">
        <HashLink
          smooth
          to="/contact-rushrash-inc#case-studies"
          className="d-flex align-items-center bg-light text-success shadow-sm rounded px-3 py-2 text-decoration-none border-start border-4 border-success"
        >
          <i className="bi bi-book me-2 fs-5"></i>
          <span className="fw-bold">Success Stories</span>
        </HashLink>
        <p className="small text-muted mt-1 ms-4">
          Access Control, Chicago High Rise, Osprey, Residential CCTV
        </p>
      </div>
      <hr className="sidebar-divider" />
      {/* Request a Free Consultation */}
      <div className="sidebar-card">
        <div className="card-header bg-info text-white">
          <i className="bi bi-telephone me-2"></i> Contact Us
        </div>
        <div className="card-body">
          <a
            href={rr_company_ds.phoneNumbers.tel630}
            className="text-success mt-2"
          >
            Request a Free Consultation
          </a>
        </div>
      </div>
      {/* Default cards (home, about, contact) */}
      {cardsToShow.map((card, idx) => (
        <SidebarCard
          key={idx}
          icon={card.icon}
          title={card.title}
          text={card.text}
        />
      ))}
      {/* Products Section */}
      {productCards.length > 0 && (
        <>
          <hr className="sidebar-divider" />
          <h5 className="px-3 py-2 mt-4 mb-3 text-white bg-gradient-primary rounded shadow-sm border-bottom border-primary">
            Related Products
          </h5>
          {productCards.map((card, idx) => (
            <SidebarCard
              key={`product-${idx}`}
              icon={card.icon}
              title={card.title}
              text={card.text}
              link={card.link}
            />
          ))}
        </>
      )}
      {/* Articles Section */}
      {articleCards.length > 0 && (
        <>
          <hr className="sidebar-divider" />
          <h5 className="px-3 py-2 mt-4 mb-3 text-white bg-gradient-primary rounded shadow-sm border-bottom border-primary">
            Related Articles
          </h5>
          {articleCards.map((card, idx) => (
            <SidebarCard
              key={`article-${idx}`}
              icon={card.icon}
              title={card.title}
              text={card.text}
              link={card.link}
              cardHeaderBgColorClass="bg-danger"
            />
          ))}
        </>
      )}
      {/* Other  components */}

      {/* Mount components based on slug */}
      {getOtherComponents() === "access" && <AccessControlComponents />}
      {getOtherComponents() === "cctv" && <CCTVSystemComponents />}
      {getOtherComponents() === "all" && (
        <>
          <AccessControlComponents />
          <CCTVSystemComponents />
        </>
      )}
    </aside>
  );
}

export default Sidebar;
