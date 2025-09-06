// React, JSON-LD Scheme & Meta
import { Container } from "react-bootstrap";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "../schemas";
import SEOMeta from "../components/seo/SEOMeta";

// Images

// Functionl Components
import PageInfoBox from "../components/cards/PageInfoBox";
import FAQsSection from "../components/sections/FAQsSection";
import CaseStudies from "../components/sections/CaseStudies";

//

const services = [
  {
    title: "Door Access Systems",
    icon: "bi-person-lock",
    description:
      "Secure and monitor access to your facilities with modern systems.",
  },
  {
    title: "Biometric Solutions",
    icon: "bi-fingerprint",
    description: "Advanced biometric authentication for staff and visitors.",
  },
  {
    title: "Smart Card & Keypad Access",
    icon: "bi-key",
    description: "Flexible access methods for employees and contractors.",
  },
];

export default function AccessControlServicesPage() {
  return (
    <>
      <div>
        {/* JSON-LD Breadcrumb for Access Control Page */}
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://rushrash.com" },
            {
              name: "Access Control",
              url: "https://rushrash.com/services/access-control",
            },
          ]}
        />

        {/* FAQ Schema for Access Control */}
        <FAQSchema
          questions={[
            {
              question: "What types of access control systems do you install?",
              answer:
                "We install key card systems, biometric readers, keypad entry, mobile-based access, and cloud-managed access control solutions for both residential and commercial properties.",
            },
            {
              question: "Can access control systems be integrated with CCTV?",
              answer:
                "Yes. Our access control solutions seamlessly integrate with CCTV cameras, alarms, and building management systems for complete security coverage.",
            },
            {
              question: "Do you offer cloud-based access control?",
              answer:
                "Absolutely. Cloud-based access control allows remote management of doors, schedules, and user permissions from anywhere.",
            },
            {
              question: "Can you handle large-scale enterprise access control?",
              answer:
                "Yes. We design and deploy enterprise-grade access control systems that scale with multiple locations and thousands of users.",
            },
            {
              question: "Do you provide ongoing support and maintenance?",
              answer:
                "Yes. We offer professional support, monitoring, and maintenance packages to keep your access control system running smoothly.",
            },
          ]}
        />

        {/* Featured Services for Access Control */}
        <ServiceSchema
          services={[
            {
              name: "Key Card & FOB Entry Systems",
              description:
                "Secure access with programmable key cards and FOBs, ideal for offices, residential complexes, and warehouses.",
            },
            {
              name: "Biometric Access Control",
              description:
                "Fingerprint, facial recognition, and retina scan systems for high-security environments.",
            },
            {
              name: "Cloud-Based Access Control",
              description:
                "Manage and monitor your building’s access remotely with scalable cloud-based solutions.",
            },
            {
              name: "Mobile Access Control",
              description:
                "Enable entry using smartphones and mobile apps with encrypted digital credentials.",
            },
            {
              name: "Multi-Site Access Solutions",
              description:
                "Centralized control for enterprises with multiple locations and thousands of users.",
            },
            {
              name: "Access Control Integration",
              description:
                "Seamless integration with CCTV, alarms, and building automation systems.",
            },
          ]}
        />

        {/* SEO Meta for Access Control */}
        <SEOMeta
          title="Access Control Systems | Rushrash Inc."
          description="Rushrash Inc. provides advanced access control solutions including key card systems, biometric readers, cloud-based access, mobile access, and enterprise-grade security integrations."
          keywords="access control systems, key card entry, biometric access, cloud access control, mobile access, enterprise access control, building security"
          url="https://rushrash.com/access-control"
          image="https://rushrash.com/wp-content/uploads/2023/05/rushrash-logo-23.png"
          twitterHandle="@RushrashInc"
        />
      </div>

      <Container fluid>
        <PageInfoBox pageType="accessControl" />
      </Container>
      <div className="container my-5">
        <div className="row g-4">
          {services.map((service, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div className="card h-100 text-center shadow-sm border-0">
                <div className="card-body">
                  <i
                    className={`bi ${service.icon} fs-1 mb-3 text-primary`}
                  ></i>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories & Studies */}
      <div id="case-studies">
        <CaseStudies tab="Access Control" />
      </div>

      <div>
        <FAQsSection faqServiceType="access" />
      </div>
    </>
  );
}
