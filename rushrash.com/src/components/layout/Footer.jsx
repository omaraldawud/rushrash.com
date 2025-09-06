// /src/components/layout/Footer.jsx

//Components
import FooterMenu from "../cta-forms/FooterMenu";
import FooterSection from "../sections/FooterSection";
import SocialProfiles from "../sections/SocialProfiles";
import FooterCTA from "../cta-forms/FooterCTA";
import CopyRightSection from "../layout/CopyRightSection";
import Logo from "./Logo";

//Data Structures
import companyInfo from "../../assets/data/rr_company_ds";

////////////////////////////////////////////////
export default function Footer() {
  return (
    <footer className="footer-sec text-light bg-danger py-4">
      <div className="container">
        <div className="row mb-4 align-items-center justify-content-center">
          {/* Logo & CTA - Left */}
          <div className="col-lg-3 col-md-4 mb-3 d-none d-md-block text-center">
            <Logo logoWidth="200px" />

            {/* Phone Number */}
            <h5 className="my-3 pb-4" style={{ color: "#FFD166" }}>
              (630) 800-8077
            </h5>

            {/* Divider */}
            <hr
              className="mx-auto"
              style={{
                borderColor: "rgba(255, 255, 255, 0.2)",
                width: "50%",
                margin: "20px auto",
              }}
            />

            {/* Social Section */}
            <div className="text-center">
              <h5 className="mb-3" style={{ color: "#4FC3F7" }}>
                Follow & Engage with Us
              </h5>
              <div className="d-flex justify-content-center">
                <SocialProfiles />
              </div>
            </div>
          </div>

          {/* Navigation Menu & SEO Text - Right */}
          <div className="col-lg-9 col-md-8 mb-3 mb-md-0">
            <div>
              <div className="d-none d-md-block">
                <FooterMenu />
              </div>
              <FooterCTA />
              <FooterSection />
              <CopyRightSection />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
