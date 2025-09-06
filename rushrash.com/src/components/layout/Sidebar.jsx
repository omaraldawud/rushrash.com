import "../../assets/css/SideBar.css";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import SidebarCard from "./SidebarCard"; // default import
import AccessControlComponents from "./AccessControlComponents";
import CCTVSystemComponents from "./CCTVSystemComponents";
import rr_company_ds from "../../assets/data/rr_company_ds";

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
      title: "Licensed, Bonded & Insured",
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

  if (location.pathname === "/") {
    pageType = "home";
  } else if (location.pathname.includes("/contact")) {
    pageType = "contact";
  } else if (location.pathname.includes("/about")) {
    pageType = "about";
  }

  const cardsToShow = sidebarCardsData[pageType] || [];

  return (
    <aside className="custom-sidebar">
      {/* Success Stories */}
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
      <hr className="sidebar-divider" />
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
      {/* Page-dependent sidebar cards */}
      {cardsToShow.map((card, idx) => (
        <SidebarCard
          key={idx}
          icon={card.icon}
          title={card.title}
          text={card.text}
        />
      ))}{" "}
      {/* CCTV System Components */}
      <CCTVSystemComponents />
      {/* Access Control System Components */}
      <AccessControlComponents />
    </aside>
  );
}

export default Sidebar;
