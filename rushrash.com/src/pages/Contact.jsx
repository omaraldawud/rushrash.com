import { Row, Col } from "react-bootstrap";

import ContactForm from "../components/cta-forms/ContactForm";
import WarningInfobox from "../components/helpers/WarningInfobox";
import TestimonialTabs from "../components/helpers/TestimonialTabs";
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
            { name: "Home", url: "https://advancedgaragedoorinc.com" },
            {
              name: "Contact",
              url: "https://advancedgaragedoorinc.com/contact",
            },
          ]}
        />

        {/* FAQ Schema */}
        <FAQSchema
          questions={[
            {
              question: "How quickly can you respond to service requests?",
              answer:
                "We offer same-day service for most repairs and next-day installation appointments.",
            },
            {
              question: "What areas do you serve?",
              answer:
                "We service all of Chicagoland including Naperville, Aurora, Plainfield, and surrounding communities.",
            },
            {
              question: "Do you offer free estimates?",
              answer:
                "Yes! We provide free in-person or phone estimates for all garage door services.",
            },
          ]}
        />

        {/* Service Schema */}
        <ServiceSchema
          services={[
            {
              name: "Emergency Contact Service",
              description: "24/7 phone support for urgent garage door issues",
              serviceType: "EmergencyService",
            },
            {
              name: "Consultation Appointments",
              description:
                "Schedule an in-person assessment with our specialists",
              offers: { price: "0" }, // Free service
            },
          ]}
        />

        {/* SEO Meta */}
        <SEOMeta
          title="Contact Garage Door Experts | 24/7 Support | Advanced Garage Door Inc"
          description="Need garage door help? Contact our specialists 24/7 for emergency repairs, free estimates, and professional consultations. Serving Chicagoland since 2005."
          keywords="garage door contact, emergency garage door repair, garage door estimate, garage door consultation"
          url="https://www.advancedgaragedoorinc.com/contact"
          image="https://www.advancedgaragedoorinc.com/images/contact-hero.jpg"
          twitterHandle="@AdvancedGarageDoor"
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
                    Contact Our Garage Door Experts
                  </h2>
                  <p className="text-muted mb-4">
                    Get professional advice or schedule same-day service
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Phone CTA Column - Compact */}
            <div className="col-lg-4">
              <div className="card border-primary">
                {" "}
                <div>
                  <img
                    src="/images/advanced-garage-door-inc-logo-tr.png"
                    alt="Advanced Garage Doors Logo"
                    width="300px"
                    style={{
                      maxHeight: "200px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="bi bi-telephone-fill text-primary fs-1"></i>
                  </div>
                  <h3 className="h5 mb-3">Immediate Assistance</h3>
                  <p className="text-muted mb-4 small">
                    Expedited service and consultation available by calling:
                  </p>
                  <p className="text-info mt-4 mb-0">
                    24/7 Emergency Service Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WarningInfobox
          title="Broken Springs"
          description="There are two kinds of garage door springs — torsion springs and extension springs..."
          warningNote="Save on service calls by replacing both springs when one fails."
          dangerContent="Garage door springs are under extreme tension. Improper handling can cause serious injury or death."
          imageSrc="/images/parts/garage-door-springs.jpg"
          imageAlt="Garage door spring mechanism"
          imageCaption="Torsion spring system (left) vs extension springs (right)"
          className="my-4" // Optional additional classes
        />
        <div className="mt-3">
          <a
            href="garage_door_services.html"
            className="text-warning text-decoration-none d-inline-block"
            style={{
              transition: "color 0.2s ease",
              ":hover": {
                color: "#ffca2c", // Slightly lighter yellow on hover
              },
            }}
          >
            <span className="small">
              Serving: Plainfield, Arlington Heights, Romeoville, Lockport,
              Westchester, Naperville, Hoffman Estates, Palatine, Woodridge,
              Winfield, Downers Grove
            </span>
          </a>
        </div>
        {/* Testimonials */}
        <Row className="mt-5 py-5 bg-light rounded shadow-sm">
          <Col>
            <TestimonialTabs />
          </Col>
        </Row>
      </section>
    </>
  );
}
