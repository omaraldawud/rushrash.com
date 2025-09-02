//Component
import ContactForm from "../components/cta-forms/ContactForm";
import CaseStudies from "../components/sections/CaseStudies";

//images
import Logo from "../assets/images/logo/rushrash-inc-logo-350-tr.png";

// JSON-LD Scheme 7 Meta SEO
import SEOMeta from "../components/seo/SEOMeta";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "../schemas";

// main component
export default function Contact() {
  return (
    <>
      <div>
        {/* Breadcrumb */}
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://rushrashinc.com" },
            {
              name: "Contact",
              url: "https://rushrashinc.com/contact",
            },
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
              offers: { price: "0" }, // Free service
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

      {/* mai section   */}
      <section className="container-fluid px-0">
        <div className="container-lg ">
          <div className="row g-4">
            {/* Form Column - Wider */}
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

            {/* Phone CTA Column - Redesigned */}
            <div className="col-lg-4">
              <div className="card border-0 shadow-lg bg-gradient-primary text-white overflow-hidden">
                {/* Logo Section */}
                <div className="text-center py-4 bg-dark bg-opacity-20">
                  <img
                    className="mt-4 img-fluid"
                    src={Logo}
                    z-index="1000"
                    alt="Rushrash Security Camera Logo"
                    width="250px"
                    style={{
                      maxHeight: "120px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                {/* Main Content */}
                <div className="card-body text-center p-4">
                  {/* Phone Icon */}
                  <div className="mb-3">
                    <div className="bg-white bg-opacity-20 rounded-circle d-inline-flex p-3">
                      <i className="bi bi-telephone-fill text-danger fs-2"></i>
                    </div>
                  </div>

                  {/* Headline */}
                  <h3 className="h5 mb-3 fw-bold">24/7 Emergency Response</h3>

                  {/* Description */}
                  <p className="mb-4 small opacity-75">
                    Immediate assistance and expedited consultation available
                    now
                  </p>

                  {/* Phone Number Emphasis */}
                  <div className="bg-white bg-opacity-10 rounded-3 p-3 mb-4">
                    <span className="d-block text-warning fw-bold fs-5 mb-1">
                      Call Now
                    </span>
                    <a
                      href="tel:+1-555-123-4567"
                      className="text-white text-decoration-none fw-bold fs-4"
                    >
                      (555) 123-4567
                    </a>
                  </div>

                  {/* Service Area */}
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

                {/* Emergency Badge */}
                <div className="position-absolute top-0 end-0">
                  <span className="badge bg-warning text-dark px-3 py-2 rounded-0">
                    <i className="bi bi-lightning-fill me-1"></i>
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

        <CaseStudies />
      </section>
    </>
  );
}
