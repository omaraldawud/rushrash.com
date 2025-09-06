// components/sections/AboutUsSection.tsx
import CaseStudies from "./CaseStudies";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
//images
import ourStory from "../../assets/images/ourStory-tr.png";
import authPartners from "../../assets/images/security-locks/security-locks-s3.jpg";
//
//
import { services as allServices } from "../../assets/data/rr_services_ds";

//
export default function AboutUsSection() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        // slight delay to ensure the section is rendered
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <section className="about-us bg-light">
      <div className="container">
        {/* Hero / Intro */}

        {/* Company Story */}
        <div className="row align-items-center g-5">
          {/* Image */}
          <div className="col-lg-5 ">
            <img
              src={ourStory}
              alt="Our Security Team"
              className="img-fluid rounded-3 shadow-sm w-100"
              style={{ maxHeight: "460px", objectFit: "contain" }}
            />
          </div>

          {/* Text */}
          <div className="col-lg-7">
            <h3 className="h4 text-primary fw-bold mb-3 vertical-border">
              Our Story
            </h3>
            <p className="text-secondary mb-3">
              For nearly two decades, we’ve been helping families and businesses
              protect what matters most. Our certified technicians combine
              experience with cutting-edge security equipment to deliver
              tailored, reliable solutions.
            </p>
            <p className="text-secondary mb-0">
              From single-family homes to multi-site enterprises, we design
              scalable systems with real-time monitoring, smart alerts, and
              seamless integration with access control and alarm systems.
            </p>
            <p className="lead text-muted mt-4">
              Your trusted partner in{" "}
              <strong>CCTV, Access Control, and Smart Security</strong> for
              homes and businesses.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-5 bg-success-subtle p-5 rounded-3">
        <h3 className="h4 fw-bold text-dark text-center mb-4">Why Choose Us</h3>

        <div className="row g-3 g-md-4">
          {[
            {
              text: "Residential & Commercial Experts",
              icon: "bi-house-check",
            },
            {
              text: "Certified Technicians & Licensed Installers",
              icon: "bi-person-badge text-info",
            },
            {
              text: "Authorized Partners with Leading Brands",
              icon: "bi-award",
            },
            {
              text: "24/7 Monitoring & Emergency Support",
              icon: "bi-headset",
            },
            {
              text: "Custom Solutions for Homes & Businesses",
              icon: "bi-gear",
            },
            {
              text: "Proven Success in Our Case Studies",
              icon: "bi-graph-up-arrow",
            },
          ].map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="h-100 bg-white rounded-3 shadow-sm p-4 text-center">
                <i
                  className={`bi ${item.icon} fs-1 text-success d-block mb-2`}
                />
                <p className="mb-0 fw-semibold">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <div id="case-studies" className="mb-5">
        <CaseStudies tab="Access Control" />
      </div>

      {/* Authorized Dealers */}
      <div className="row align-items-center mb-5 g-0 bg-dark text-light rounded shadow overflow-hidden">
        <div className="col-lg-5">
          <img
            src={authPartners}
            alt="Authorized Security Partners"
            className="img-fluid h-100 w-100 object-fit-cover"
          />
        </div>
        <div className="col-lg-7 p-5">
          <h3 className="h4 mb-3 border-start border-3 border-light ps-3">
            Authorized Dealers
          </h3>
          <p>
            We partner with industry-leading manufacturers to bring you
            certified, reliable security solutions. Our partnerships ensure
            every installation has full warranty coverage and long-term support.
          </p>
          <p>
            By leveraging trusted brands, your security system is scalable,
            future-proof, and backed by technology you can depend on.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="bg-dark text-light p-5 rounded shadow">
        <h4 className="mb-4 text-center">Our Security & CCTV Services</h4>
        {allServices.length > 0 && (
          <div className="row mt-3 gx-3 gy-3">
            {allServices.map((svc, idx) => (
              <div key={idx} className="col-6 col-md-3">
                <a href={svc.service_href} className="text-decoration-none">
                  <div className="service-gradient-card text-center p-3 rounded shadow-sm h-100">
                    {svc.icon && (
                      <i
                        className={`bi ${svc.icon} service-gradient-icon mb-2`}
                      />
                    )}
                    <div className="fw-semibold">{svc.title}</div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
