import "../assets/css/HeroSection.css";
import { useLocation } from "react-router-dom";
import PageInfoBox from "../components/cards/PageInfoBox";
import CCTVInstallationProcess from "../components/sections/CCTVInstallationProcess";
import SEOMeta from "../components/seo/SEOMeta";
import CommercialSection from "../components/sections/CommercialSection";
// JSON-LD Scheme
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "../schemas";
import { Container } from "react-bootstrap";
//
// Function Starts
export default function HomeSurveillancePage() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <div>
        <SEOMeta
          title="Residential Garage Doors | Amarr, C.H.I. & Colpay Dealers"
          description="Upgrade your home with premium residential garage doors. We offer expert installation, repair, and maintenance services for a wide range of styles and materials."
          keywords="Amarr Doors, CHI Doors, Colpay Doors, residential garage doors, garage door installation, garage door replacement, wooden garage doors, steel garage doors, modern garage doors"
          twitterHandle="@AdvancedGarageDoor"
        />
        {/* JSON-LS for Home Page */}
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://advancedgaragedoorinc.com" },
            {
              name: "Residential Garage Doors",
              url: "http://localhost:5173/garage_door_residential.html",
            },
          ]}
        />
        <FAQSchema
          questions={[
            {
              name: "How often should residential garage doors be serviced?",
              answer:
                "Annual professional maintenance checks for both your garage door and opener help prevent sudden malfunctions, extend equipment lifespan, and maintain safety. Our 30-point inspection covers springs, cables, rollers, sensors, and opener mechanisms.",
            },
            {
              question: "What's the best residential garage door material?",
              answer:
                "Steel doors offer the best balance of durability and affordability, while wood provides premium aesthetics. Our C.H.I and Amarr steel doors come with 10-year warranties.",
            },
            {
              question:
                "How long does residential garage door installation take?",
              answer:
                "Most single-car door installations take 3-4 hours, while double-car doors typically require 4-6 hours for professional installation.",
            },
            {
              question: "Can I install a garage door myself?",
              answer:
                "We strongly recommend professional installation due to the heavy components, high-tension springs, and precise alignment required for safe operation.",
            },
          ]}
        />
        {/* only Featured Services for home page*/}
        <ServiceSchema
          services={[
            {
              name: "Free Door Estimates",
              description: "On-site measurements and price quotes",
            },
            {
              name: "Over the Phone Estimates",
              description: "Call us estimate and price quotes",
            },
            {
              name: "Emergency Garage Door Spring Replacement",
              description:
                "24/7 Garage Door torsion spring repair oe replacement",
              offers: { price: "149" },
            },
            {
              name: "Service Call",
              description: "Garage Door Service Call",
              offers: { price: "75" },
            },
          ]}
        />
      </div>
      <Container>
        <h2>HomeSurveillancePage</h2>
        <PageInfoBox pageType="residential" />
      </Container>
    </>
  );
}
