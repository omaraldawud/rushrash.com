//
import { useLocation } from "react-router-dom";

//components
import MainMenu from "../cta-forms/MainMenu";
import companyInfo from "../../assets/data/rr_company_ds";
import TopbarMenu from "../cta-forms/TopbarMenu";
import Logo from "../layout/Logo";

//css
import "../../assets/css/Header.css";

//
export default function Header() {
  const { pathname } = useLocation(); // ✅ clean destructure

  // Pick subtitle based on current path
  let header_subtitle = "CCTV & Access Control Solutions"; // default
  if (pathname.includes("/residential-cctv-security")) {
    header_subtitle = "Residential CCTV & Smart Security";
  } else if (pathname.includes("/commercial-cctv-security")) {
    header_subtitle = "Business CCTV & Access Control";
  } else if (pathname.includes("/contact-rushrash-inc")) {
    header_subtitle =
      "Call or Send us a note about your cctv and security needs";
  } else if (pathname.includes("/about-rushrash-inc")) {
    header_subtitle = "Chicago's Premier Security & Surveillance Experts";
  }

  return (
    <header className="header-sec shadow-sm">
      <div className="container">
        {/* --- Top Utility Bar --- */}
        <TopbarMenu />

        {/* --- Logo + Menu --- */}
        <div className="d-flex justify-content-between align-items-end me-5 py-4">
          {/* Left: Logo + Company Name */}
          {/* Desktop Version */}
          <div className="d-none d-md-flex align-items-center mt-5">
            <Logo logoWidth="200px" />
            <div className="ms-5 d-flex flex-column">
              <h1 className="company-title mb-1">
                <span className="company-name">{companyInfo.companyName}</span>
                <span className="company-subtitle d-block">
                  {header_subtitle}
                </span>
              </h1>
            </div>
          </div>

          {/* Mobile Version */}
          <div
            className="d-flex d-md-none flex-column align-items-start"
            style={{ marginTop: "60px" }}
          >
            {/* Row 1: Logo + Company Name */}
            <div className="d-flex align-items-center">
              <Logo logoWidth="150px" />
              <span className="company-title mb-0 ms-3">
                <span className="company-name">{companyInfo.companyName}</span>
              </span>
            </div>

            {/* Row 2: Subtitle (still inside <h1> for SEO) */}
            <h1 className="company-subtitle mt-2 mb-0">{header_subtitle}</h1>
          </div>

          {/* Main Menu */}
          <div className="d-none d-md-block me-3" style={{ zIndex: 2000 }}>
            <MainMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
