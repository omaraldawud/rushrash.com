import MainMenu from "../cta-forms/MainMenu";
import companyInfo from "../../assets/data/rr_company_ds";

//✅ import logo & CSS from assets
import "../../assets/css/Header.css";
import logo from "../../assets/images/logo/rushrash-inc-logo-350-tr.png";

export default function Header() {
  const header_subtitle = "CCTV & Access Control Systems";

  return (
    <header className="header-sec shadow-sm" style={{ position: "relative" }}>
      <div className="container">
        {/* --- Top Utility Bar --- */}
        <div className="d-flex justify-content-between align-items-center py-1 utility-bar">
          <div className="text-light small">
            <i className="bi bi-shield-lock me-1 text-danger"></i>
            Securing Homes & Businesses Since 2005
          </div>

          {/* --- Phone CTA --- */}
          <div className="d-flex gap-3 social-icons">
            <div className="d-flex justify-content-center py-2">
              <div className="flex-column text-end phone-cta">
                <div className="phone-box toll-free-box">
                  <a
                    href={`tel:${companyInfo.phoneNumbers.tollFree.replace(
                      /\D/g,
                      ""
                    )}`}
                    className="text-decoration-none text-danger fw-bold"
                  >
                    <i className="bi bi-telephone-plus me-2"></i>
                    {companyInfo.phoneNumbers.tollFree}
                  </a>
                </div>
              </div>
            </div>
            {companyInfo.socialProfiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <i className={`bi ${profile.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* --- Main Row: Logo + Menu --- */}
        <div className="d-flex justify-content-between align-items-center py-4">
          {/* Left: Logo + Company Name */}
          <div className="d-flex align-items-center">
            <img src={logo} alt="Rushrash Inc. Logo" className="logo-img" />
            <div className="ms-3">
              <h1 className="company-title mb-0">{companyInfo.companyName}</h1>
              <small className="company-subtitle">{header_subtitle}</small>
            </div>
          </div>

          {/* Main Menu */}
          <div style={{ position: "relative", zIndex: 2000 }}>
            <MainMenu className="d-none d-md-block" />
          </div>
        </div>
      </div>
    </header>
  );
}
