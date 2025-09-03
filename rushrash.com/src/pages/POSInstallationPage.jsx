//
// React, JSON-LD Scheme & Meta
import { Container } from "react-bootstrap";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "../schemas";
import SEOMeta from "../components/seo/SEOMeta";

// Functionl Components
import PageInfoBox from "../components/cards/PageInfoBox";
import FaqSection from "../components/sections/FAqSection";

//global vars - data structure
const services = [
  {
    title: "Retail POS Systems",
    icon: "bi-shop",
    description:
      "Efficient checkout and inventory management for retail businesses.",
  },
  {
    title: "Restaurant POS Solutions",
    icon: "bi-cup-straw",
    description:
      "Streamlined order and payment processing for restaurants and cafes.",
  },
  {
    title: "Mobile POS",
    icon: "bi-phone",
    description: "Flexible mobile payment solutions for on-the-go sales.",
  },
  {
    title: "POS Support & Maintenance",
    icon: "bi-tools",
    description:
      "Reliable technical support to keep your POS systems running smoothly.",
  },
];

export default function POSServices() {
  return (
    <>
      <div>
        {/* JSON-LD Breadcrumb for Point-of-Sale Page */}
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://rushrash.com" },
            {
              name: "Point-of-Sale",
              url: "https://rushrash.com/services/pos-services",
            },
          ]}
        />

        {/* FAQ Schema for PoS Services */}
        <FAQSchema
          questions={[
            {
              question: "What industries do your POS systems support?",
              answer:
                "Our POS solutions are tailored for retail, restaurants, cafes, service providers, and enterprise-level businesses.",
            },
            {
              question: "Do your POS systems support inventory management?",
              answer:
                "Yes. Our systems provide real-time inventory tracking, stock alerts, and seamless integration with back-office operations.",
            },
            {
              question: "Can your POS handle multiple payment methods?",
              answer:
                "Absolutely. Our POS solutions support cash, card, mobile wallets, and contactless payments for maximum flexibility.",
            },
            {
              question: "Do you provide cloud-based POS systems?",
              answer:
                "Yes. Cloud-based POS ensures secure remote access, scalability, and reliable backup for your business operations.",
            },
            {
              question: "Is ongoing support included with your POS systems?",
              answer:
                "Yes. We provide professional installation, training, and 24/7 support to keep your POS system running smoothly.",
            },
          ]}
        />

        {/* Featured Services for PoS */}
        <ServiceSchema
          services={[
            {
              name: "Retail POS Systems",
              description:
                "Streamlined checkout, barcode scanning, and inventory management for retail stores of all sizes.",
            },
            {
              name: "Restaurant & Hospitality POS",
              description:
                "Table management, kitchen display integration, and order tracking designed for food service businesses.",
            },
            {
              name: "Cloud-Based POS",
              description:
                "Access reports, sales data, and customer insights from anywhere with secure cloud technology.",
            },
            {
              name: "Payment Processing Integration",
              description:
                "Seamless integration with major payment providers for fast and secure transactions.",
            },
            {
              name: "Mobile POS Solutions",
              description:
                "Enable sales anywhere with tablet and smartphone POS options for on-the-go businesses.",
            },
            {
              name: "Custom POS Integration",
              description:
                "Tailored solutions that integrate with accounting, CRM, and e-commerce platforms.",
            },
          ]}
        />

        {/* SEO Meta for PoS Services */}
        <SEOMeta
          title="Point-of-Sale (POS) Systems & Solutions | Rushrash Inc."
          description="Rushrash Inc. delivers modern Point-of-Sale systems for retail, restaurants, and service businesses. Features include inventory management, cloud-based POS, mobile POS, and secure payment processing."
          keywords="point of sale, POS systems, retail POS, restaurant POS, cloud POS, mobile POS, payment processing, inventory management"
          url="https://rushrash.com/pos-services"
          image="https://rushrash.com/wp-content/uploads/2023/05/rushrash-logo-23.png"
          twitterHandle="@RushrashInc"
        />
      </div>

      <Container fluid>
        <PageInfoBox pageType="pos" />
      </Container>
      <div className="container my-5">
        <div className="row g-4">
          {services.map((service, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
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
    </>
  );
}
