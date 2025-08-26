//
//
import { Container, Row, Col, Card } from "react-bootstrap";
import TestimonialTabs from "../components/helpers/TestimonialTabs";

// JSON-LD Scheme 7 Meta SEO
import SEOMeta from "../components/seo/SEOMeta";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "../schemas";

// main
export default function TestmonialsPage() {
  return (
    <>
      <Container fluid>
        {/* Testimonials */}
        <div className="section-wrapper mb-5 py-5 bg-light rounded shadow-sm">
          <TestimonialTabs />
        </div>
      </Container>
    </>
  );
}
