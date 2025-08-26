//

//
//
import { Container, Row, Col, Card } from "react-bootstrap";
import AboutUsSection from "../components/sections/AboutUsSection";
// JSON-LD Scheme 7 Meta SEO
import SEOMeta from "../components/seo/SEOMeta";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "../schemas";

// main
export default function AccessControlPage() {
  return (
    <>
      <div>
        {/* Breadcrumb */}
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://rushrash.com" },
            {
              name: "About Us",
              url: "https://rushrash.com/about",
            },
          ]}
        />

        {/* FAQ Schema */}
        <FAQSchema
          questions={[
            {
              question: "How long has Advanced Garage Door been in business?",
              answer:
                "We've been proudly serving the Chicago suburbs since 2005.",
            },
            {
              question: "What brands are you authorized to install?",
              answer:
                "We're authorized dealers for Amarr garage doors and Chamberlain/LiftMaster openers.",
            },
            {
              question:
                "Do you service both residential and commercial properties?",
              answer:
                "Yes, our certified technicians handle both residential and commercial garage door systems.",
            },
          ]}
        />

        {/* Service Schema */}
        <ServiceSchema
          services={[
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
          title="About Advanced Garage Door Inc | Trusted Since 2005 | Chicago Suburbs"
          description="Family-owned garage door company serving Chicago suburbs since 2005. Authorized dealers for Amarr and LiftMaster. 24/7 emergency service available."
          keywords="about garage door company, Chicago garage door service, authorized Amarr dealer, LiftMaster installer"
          url="https://www.rushrash.com/about"
          image="https://www.rushrash.com/images/about-team.jpg"
          twitterHandle="@AdvancedGarageDoor"
        />
      </div>
      <Container fluid>
        <h2>AccessControlPage</h2>
      </Container>
    </>
  );
}
