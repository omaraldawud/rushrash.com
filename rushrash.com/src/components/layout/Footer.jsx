import FooterMenu from "../cta-forms/FooterMenu";
import FooterSection from "../sections/FooterSection";
import companyInfo from "../../assets/data/rr_company_ds";

//images
import Logo from "../../assets/images/logo/rushrash-inc-logo-350-tr.png";

////////////////////////////////////////////////
export default function Footer() {
  return (
    <footer className="footer-sec text-light py-4 align-items-start">
      <div className="container">
        <div className="row mb-4">
          {/* Logo - CTA - Left Desktop ONLY */}
          <div className="col-lg-3 col-md-4 mb-3  d-none d-md-block">
            <a href="/">
              <img
                src={Logo}
                alt="Advanced Garage Door Inc - Chicago Garage Door Repair Experts"
                className="img-fluid"
                style={{ maxWidth: "200px", height: "auto" }}
              />
            </a>
            {/* CTA Button - Right */}
            <div className="col-lg-3 col-md-4 text-end text-md-end mt-4">
              <a
                href="tel:6308008077"
                className="btn btn-warning btn-sm fw-bold px-3 py-2 rounded-pill shadow-sm hover-lift"
                style={{
                  background:
                    "linear-gradient(135deg, #ffc107 0%, #ff9800 100%)",
                  border: "2px solid #ffc107",
                  minWidth: "180px",
                  whiteSpace: "nowrap",
                }}
              >
                <i className="bi bi-telephone-fill me-1"></i>
                FREE Estimate
              </a>
            </div>
          </div>

          {/* Navigation Menu - Right */}
          <div className="col-lg-9 col-md-4 mb-3 mb-md-0">
            {/* Horizontal Navigation Menu */}
            <div className="d-none d-md-block">
              <FooterMenu />
            </div>
            <hr />
            <div className="justify-content-left">
              {/* SEO Text and Copyright */}
              <FooterSection />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
