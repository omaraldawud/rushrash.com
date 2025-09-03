// pages/About.tsx
import { Container } from "react-bootstrap";
import SEOMeta from "../components/seo/SEOMeta";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "../schemas";

//components
import AboutUsSection from "../components/sections/AboutUsSection";
import PageInfoBox from "../components/cards/PageInfoBox";
//images
import img1 from "../assets/images/cctv-cams/cctv-system-installation.jpg";
import img2 from "../assets/images/banners/cctv-header.jpg";

//
//
export default function About() {
  return (
    <>
      {/* Schemas  */}
      <div>
        {/* Breadcrumb */}
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://rushrashinc.com" },
            {
              name: "About Us",
              url: "https://rushrashinc.com/about-rushrash-inc",
            },
          ]}
        />

        {/* FAQ Schema */}
        <FAQSchema
          questions={[
            {
              question: "How long has Rushrash Inc. been in business?",
              answer:
                "We’ve been proudly delivering advanced security solutions for residential and commercial clients since 2005.",
            },
            {
              question: "What security brands do you work with?",
              answer:
                "We are authorized dealers for top-rated CCTV, access control, and smart security equipment providers.",
            },
            {
              question: "Do you serve both homes and businesses?",
              answer:
                "Yes. Our certified technicians provide tailored solutions for residential, commercial, and multi-site facilities.",
            },
          ]}
        />

        {/* Service Schema */}
        <ServiceSchema
          services={[
            {
              name: "Residential CCTV Installation & Design",
              description:
                "Professional home security camera system installation with custom design for optimal property protection and remote monitoring capabilities.",
              serviceType: "InstallationService",
            },
            {
              name: "Commercial CCTV Installation & Design",
              description:
                "Enterprise-grade surveillance system installation for businesses, warehouses, and commercial properties with advanced monitoring features.",
              serviceType: "InstallationService",
            },
            {
              name: "Access Control Systems",
              description:
                "Professional installation of keyless entry systems, biometric access, and integrated security management solutions for enhanced property security.",
              serviceType: "InstallationService",
            },
            {
              name: "IT Services & Network Solutions",
              description:
                "Comprehensive IT support, network setup, and system integration services for seamless security technology operation.",
              serviceType: "MaintenanceService",
            },
            {
              name: "Point-of-Sale Installation & Setup",
              description:
                "Professional POS system installation, configuration, and integration with security systems for retail and business operations.",
              serviceType: "InstallationService",
            },
            {
              name: "24/7 Emergency Security Support",
              description:
                "Round-the-clock technical support and emergency security system service for immediate response to security issues.",
              serviceType: "EmergencyService",
            },
            {
              name: "Free Security Consultation",
              description:
                "Comprehensive site assessments, security system design, and cost estimates for new installations with no obligation.",
              serviceType: "ConsultationService",
            },
          ]}
        />

        {/* SEO Meta */}
        <SEOMeta
          title="About Rushrash Inc | Trusted CCTV & Access Control Experts"
          description="Rushrash Inc. is a trusted provider of CCTV, access control, and smart security systems. Serving residential and commercial clients with reliable, professional solutions."
          keywords="CCTV installation, access control, security company, smart surveillance, commercial security, residential security"
          url="https://rushrashinc.com/about"
          image="https://rushrashinc.com/images/about-team.jpg"
          twitterHandle="@RushrashInc"
        />
      </div>
      <Container fluid>
        <PageInfoBox pageType="aboutus" info_image1={img1} info_image2={img2} />

        <AboutUsSection />
      </Container>
    </>
  );
}
