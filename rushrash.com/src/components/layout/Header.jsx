//
import { useLocation } from "react-router-dom";

//components
import MainMenu from "../cta-forms/MainMenu";
import companyInfo from "../../assets/data/rr_company_ds";
import TopbarMenu from "../cta-forms/TopbarMenu";

//css
import "../../assets/css/Header.css";
import logo from "../../assets/images/logo/rushrash-inc-logo-350-tr.png";

//
export default function Header() {
  const { pathname } = useLocation(); // ✅ clean destructure

  // Pick subtitle based on current path
  let header_subtitle = "CCTV & Access Control Systems"; // default
  if (pathname.includes("/residential-cctv-security")) {
    header_subtitle = "Residential CCTV & Smart Security";
  } else if (pathname.includes("/commercial-cctv-security")) {
    header_subtitle = "Business CCTV & Access Control";
  } else if (pathname.includes("/contact-rushrash-inc")) {
    header_subtitle = "Get in Touch With Us";
  } else if (pathname.includes("/about-rushrash-inc")) {
    header_subtitle = "Chicago's Premier Security & Surveillance Experts";
  }

  return (
    <header className="header-sec shadow-sm">
      <div className="container">
        {/* --- Top Utility Bar --- */}
        <TopbarMenu />

        {/* --- Main Row: Logo + Menu --- */}
        <div className="d-flex justify-content-between align-items-center py-4">
          {/* Left: Logo + Company Name */}
          <div className="d-flex align-items-center">
            <img
              src={logo}
              alt="Rushrash Inc. Logo"
              className="logo-img me-3"
            />

            {/* <RushrashLogo width={350} height={150} /> */}

            <div className="brand-content">
              <h1 className="company-title mb-0 text-danger">
                {companyInfo.companyName}
              </h1>
              <p className="company-subtitle mb-0 text-light">
                {header_subtitle}
              </p>
            </div>
          </div>

          {/* Main Menu */}
          <div className="d-none d-md-block" style={{ zIndex: 2000 }}>
            <MainMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
