import { useLocation } from "react-router-dom";

//Components
import Brands from "../components/functional/Brands";
import PageInfoBox from "../components/cards/PageInfoBox";
import CCTVInfoTabs from "../components/cards/CCTVInfoTabs"; // Import your tabs component
import CaseStudies from "../components/sections/CaseStudies"; // You'll need to create this
// import ContactCTASection from "../components/cards/ContactCTASection"; // You'll need to create this

// Assets CSS, Images
import "../assets/css/HeroSection.css";

// JSON-LD Scheme & Metas
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "../schemas";
import SEOMeta from "../components/seo/SEOMeta";

// Data Strcutres
import brands_ds from "../assets/data/brands_ds";
import IndustrySolutionsSection from "../components/sections/IndustrySolutionsSection";

export default function CommercialSecurityPage() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <div>
        <SEOMeta
          title="Commercial CCTV Systems & Access Control | Professional Business Security Solutions"
          description="Complete commercial security solutions including HD CCTV surveillance, access control systems, and 24/7 monitoring for offices, retail, warehouses, and industrial facilities."
          keywords="commercial CCTV, business security systems, access control, surveillance cameras, video monitoring, security installation, retail security, warehouse surveillance"
          url="https://www.rushrashinc.com/commercial-cctv-security"
          image="https://www.rushrashinc.com/images/cctv/commercial-security-system.jpg"
          twitterHandle="@RushrashInc"
        />

        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://rushrashinc.com" },
            {
              name: "Commercial Security Solutions",
              url: "https://rushrashinc.com/commercial-cctv-security",
            },
          ]}
        />

        <FAQSchema
          questions={[
            {
              question: "What's included in a commercial CCTV system package?",
              answer:
                "Our commercial packages typically include HD IP cameras, NVR with ample storage, remote monitoring access, night vision capability, motion detection, and professional installation tailored to your business needs.",
            },
            {
              question: "Can CCTV systems integrate with access control?",
              answer:
                "Yes, we specialize in integrated security solutions that combine CCTV surveillance with access control systems, alarm systems, and intercoms for comprehensive business protection.",
            },
            {
              question: "Do you offer 24/7 monitoring services?",
              answer:
                "We offer both self-monitored and professionally monitored options, including 24/7 surveillance center support with immediate response capabilities for security breaches.",
            },
            {
              question: "What industries do you serve?",
              answer:
                "We provide security solutions for retail stores, offices, warehouses, manufacturing facilities, healthcare, education, and multi-site commercial operations.",
            },
          ]}
        />

        <ServiceSchema
          services={[
            {
              name: "Commercial CCTV Installation",
              description:
                "Professional installation of HD surveillance systems with remote monitoring capabilities",
              serviceType: "InstallationService",
              offers: { price: "1999+" },
            },
            {
              name: "Access Control Systems",
              description:
                "Keyless entry, biometric access, and integrated security management solutions",
              serviceType: "InstallationService",
            },
            {
              name: "24/7 Emergency Security Support",
              description:
                "Immediate response for system malfunctions or security breaches",
              serviceType: "EmergencyService",
            },
            {
              name: "Security System Maintenance",
              description:
                "Regular system checks, updates, and performance optimization",
              serviceType: "MaintenanceService",
            },
          ]}
        />
      </div>

      {/* Main Info Section */}
      <section className="commercial-security">
        <div className="container">
          <PageInfoBox pageType="commercial" />
        </div>
      </section>

      {/* --- ADD THESE SECTIONS --- */}

      {/* Industry Solutions Section */}
      <IndustrySolutionsSection />

      {/* Trusted Brands Section */}
      <Brands />

      {/* Case Studies/Testimonials Section */}
      <section className="p2-5">
        <CaseStudies studyType="commercial" />
      </section>
    </>
  );
}
