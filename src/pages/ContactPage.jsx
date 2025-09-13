import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Components
import ContactForm from "../components/cta-forms/ContactForm";
import CaseStudies from "../components/sections/CaseStudies";
import Logo from "../components/layout/Logo";

// Company Data Structure
import rr_company_ds from "../assets/data/rr_company_ds";

// JSON-LD Scheme 7 Meta SEO
import SEOMeta from "../components/seo/SEOMeta";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "../schemas";

export default function Contact() {
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
    <>
      <div>
        {/* Breadcrumb */}
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://rushrashinc.com" },
            { name: "Contact", url: "https://rushrashinc.com/contact" },
          ]}
        />

        {/* FAQ Schema */}
        <FAQSchema
          questions={[
            {
              question:
                "How quickly can you respond to security service requests?",
              answer:
                "We offer same-day service for most security installations and next-day appointments for comprehensive system setups.",
            },
            {
              question: "What areas do you serve for security installations?",
              answer:
                "We service all of Chicagoland including Naperville, Arlington Heights, Plainfield, Hoffman Estates, and surrounding communities.",
            },
            {
              question: "Do you offer free security assessments?",
              answer:
                "Yes! We provide free in-person security assessments and phone consultations for all CCTV, access control, and security system projects.",
            },
            {
              question: "What types of security systems do you specialize in?",
              answer:
                "We specialize in residential and commercial CCTV systems, access control solutions, POS system installation, and comprehensive security integration.",
            },
            {
              question: "Do you provide 24/7 emergency security support?",
              answer:
                "Yes, we offer 24/7 emergency support for security system failures, breaches, and urgent security concerns.",
            },
          ]}
        />

        {/* Service Schema */}
        <ServiceSchema
          services={[
            {
              name: "24/7 Emergency Security Support",
              description:
                "Round-the-clock phone support for urgent security system issues and breaches",
              serviceType: "EmergencyService",
            },
            {
              name: "Free Security Consultation",
              description:
                "Schedule an in-person security assessment with our certified specialists",
              offers: { price: "0" },
            },
            {
              name: "Security System Installation",
              description:
                "Professional installation of CCTV, access control, and surveillance systems",
              serviceType: "InstallationService",
              offers: { price: "299" },
            },
            {
              name: "Security System Maintenance",
              description:
                "Ongoing support and maintenance for existing security infrastructure",
              serviceType: "MaintenanceService",
              offers: { price: "99" },
            },
          ]}
        />

        {/* SEO Meta */}
        <SEOMeta
          title="Contact Security Experts | 24/7 Support | Rushrash Inc"
          description="Need security system help? Contact our specialists 24/7 for emergency repairs, free assessments, and professional security consultations. Serving Chicagoland since 2003."
          keywords="security system contact, emergency security repair, security system estimate, CCTV consultation, access control support, security installation contact"
          url="https://www.rushrashinc.com/contact"
          image="https://www.rushrashinc.com/images/contact-security-hero.jpg"
          twitterHandle="@RushrashInc"
        />
      </div>

      {/* Main Section */}
      <section className="container-fluid px-0">
        <div className="container-lg">
          <div className="row g-4">
            {/* Form Column */}
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-3 p-md-4">
                  <h2 className="h3 fw-bold text-primary mb-3">
                    Contact Our CCTV Experts
                  </h2>
                  <p className="text-muted mb-4">
                    Get professional advice or schedule same-day{" "}
                    <strong>cctv site survey</strong>
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Phone CTA Column */}
            <div className="col-lg-4">
              <div className="card border-0 shadow-lg bg-gradient-primary text-white overflow-hidden">
                <div className="text-center py-4 bg-light bg-opacity-20">
                  <Logo />
                </div>
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <div className="bg-white bg-opacity-20 rounded-circle d-inline-flex p-3">
                      <i className="bi bi-telephone-fill text-danger fs-2"></i>
                    </div>
                  </div>
                  <h3 className="h6 mb-3 fw-bold">
                    24/7 Access Control & CCTV Emergency Response
                  </h3>
                  <p className="mb-4 small opacity-75">
                    Immediate assistance and expedited consultation available
                    now
                  </p>
                  <div className="bg-white bg-opacity-10 rounded-3 p-3 mb-4">
                    <span className="d-block text-warning fw-bold fs-5 mb-1">
                      Call Now
                    </span>
                    <a
                      href={rr_company_ds.phoneNumbers.telTollFree}
                      className="text-white text-decoration-none fw-bold fs-4"
                    >
                      {rr_company_ds.phoneNumbers.tollFree}
                    </a>
                  </div>
                  <div className="bg-dark bg-opacity-30 rounded-3 p-3 mt-3">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-geo-fill text-warning fs-5 me-2 mt-1"></i>
                      <div>
                        <span className="small fw-semibold d-block text-warning mb-1">
                          Serving The Chicago Area
                        </span>
                        <span className="small opacity-75">
                          Plainfield, Arlington Heights, Romeoville, Lockport,
                          Westchester, Naperville, Hoffman Estates, Palatine,
                          Woodridge, Winfield, Downers Grove
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="position-absolute top-0 end-0">
                  <span className="badge bg-warning text-dark px-3 py-2 rounded-0">
                    <i className="bi bi-lightning-fill text-danger me-1"></i>
                    EMERGENCY SERVICE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="section-divider security-theme my-5">
          <div className="d-flex align-items-center justify-content-center">
            <div className="divider-line"></div>
            <div className="security-icon mx-3">
              <i className="bi bi-camera-video text-primary"></i>
            </div>
            <div className="divider-line"></div>
          </div>
        </div>

        {/* Success Stories & Studies */}
        <div id="case-studies">
          <CaseStudies category="all" />
        </div>
      </section>
    </>
  );
}
