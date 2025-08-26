//
//
import { Container, Row, Col, Card } from "react-bootstrap";
import TestimonialTabs from "../components/helpers/TestimonialTabs";
import ServicesSection from "../components/sections/ServicesSection";
import ServiceAreaSection from "../components/sections/ServiceAreaSection";

// JSON-LD Scheme 7 Meta SEO
import SEOMeta from "../components/seo/SEOMeta";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "../schemas";

// main
export default function ServiceAreaPage() {
  return (
    <>
      <div>
        {/* Breadcrumb */}
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://advancedgaragedoorinc.com" },
            {
              name: "Service Areas",
              url: "https://advancedgaragedoorinc.com/service-area",
            },
          ]}
        />

        {/* FAQ Schema */}
        <FAQSchema
          questions={[
            {
              question: "Do you service my area?",
              answer:
                "We cover 60+ Chicagoland communities. If you don't see your city listed, please call to confirm service availability.",
            },
            {
              question:
                "Is there an extra charge for service outside your main areas?",
              answer:
                "Standard service fees apply to all listed communities. Areas beyond may incur a small travel fee.",
            },
          ]}
        />
        {/* Service Schema */}
        <ServiceSchema
          services={[
            {
              name: "Area-Wide Emergency Service",
              description:
                "24/7 garage door repairs available throughout our service region",
              serviceType: "EmergencyService",
            },
            {
              name: "24/7 Emergency Services",
              description:
                "Immediate response for broken springs, off-track doors, and opener failures",
              serviceType: "EmergencyService",
            },
            {
              name: "Free Consultations",
              description:
                "On-site assessments and price estimates for new installations",
              offers: { price: "0" },
            },
          ]}
        />
        {/* SEO Meta */}
        <SEOMeta
          title="Garage Door Service Areas | Chicago & Suburbs | Advanced Garage Doors"
          description="Proudly serving 60+ Chicagoland communities including Naperville, Aurora, Schaumburg and more. 24/7 emergency garage door repair available in all areas."
          keywords="garage door service areas, Chicago suburbs garage repair, Naperville garage door service, Aurora opener repair"
          url="https://www.advancedgaragedoorinc.com/service-area"
          image="https://www.advancedgaragedoorinc.com/images/service-area-map.jpg"
          twitterHandle="@AdvancedGarageDoor"
        />
      </div>
      <Container fluid>
        <ServiceAreaSection />

        <ServicesSection />
        {/* Testimonials */}
        <Row className="mt-5 py-5 bg-light rounded shadow-sm">
          <Col>
            <TestimonialTabs />
          </Col>
        </Row>
      </Container>
    </>
  );
}
