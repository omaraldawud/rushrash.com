// components/sections/AboutUsSection.tsx
//images
import ourStory from "../../assets/images/ourStory-tr.png";
import authPartners from "../../assets/images/security-locks/security-locks-s3.jpg";
//
//
import { services as allServices } from "../../assets/data/rr_services_ds";

//
export default function AboutUsSection() {
  return (
    <section className="about-us bg-light">
      <div className="container py-5">
        {/* Hero / Intro */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-primary mb-3">
            Welcome to Rushrash Inc.
          </h2>
          <p className="lead text-secondary">
            Your trusted partner in{" "}
            <strong>CCTV, Access Control, and Smart Security</strong> for homes
            and businesses.
          </p>
        </div>

        {/* Company Story with alternating image */}
        <div className="row align-items-center mb-5 g-4">
          <div className="col-lg-6 order-lg-1 justify-content-center">
            <img
              src={ourStory}
              alt="Our Security Team"
              className="ms-5 ps-5"
              style={{ maxHeight: "350px" }}
            />
          </div>
          <div className="col-lg-6 order-lg-2">
            <h3 className="h4 text-primary mb-3">Our Story</h3>
            <p>
              For nearly two decades, we’ve been helping families and businesses
              protect what matters most. Our certified technicians combine
              experience with cutting-edge security equipment to deliver
              tailored, reliable solutions.
            </p>
            <p>
              From single-family homes to multi-site enterprises, we design
              scalable systems with real-time monitoring, smart alerts, and
              seamless integration with access control and alarm systems.
            </p>
          </div>
        </div>

        {/* Why Choose Us Cards */}
        <div className="mb-5">
          <h3 className="h4 text-primary mb-4 text-center">Why Choose Us</h3>
          <div className="row g-3">
            {[
              "Residential & Commercial Experts",
              "Certified Technicians & Licensed Installers",
              "Authorized Partners with Leading Brands",
              "24/7 Monitoring & Emergency Support",
              "Custom Solutions for Homes & Businesses Security",
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-success me-3 fs-4"></i>
                    <p className="card-text mb-0">{item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Authorized Dealers Section */}
        <div className="row align-items-center mb-5 g-4">
          <div className="col-lg-5">
            <img
              src={authPartners}
              alt="Authorized Security Partners"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Authorized Dealers */}
          <div className="col-lg-7">
            <h3 className="h4 text-primary mb-3">Authorized Dealers</h3>
            <p>
              We partner with industry-leading manufacturers to bring you
              certified, reliable security solutions. Our partnerships ensure
              every installation has full warranty coverage and long-term
              support.
            </p>
            <p>
              By leveraging trusted brands, your security system is scalable,
              future-proof, and backed by technology you can depend on.
            </p>
          </div>
        </div>

        {/* Services Cards */}
        <div className="bg-dark text-light p-4">
          <h4>Our Security/CCTV Services</h4>
          {allServices.length > 0 && (
            <div className="row mt-3 gx-2 gy-2">
              {allServices.map((svc, idx) => (
                <div key={idx} className="col-6 col-md-3">
                  <a href={svc.service_href} className="text-decoration-none">
                    <div className="service-gradient-card text-center p-2">
                      {svc.icon && (
                        <i className={`bi ${svc.icon} service-gradient-icon`} />
                      )}
                      <div className="service-gradient-title">{svc.title}</div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
