import "../assets/css/HeroSection.css";
import { useLocation } from "react-router-dom";
import ServiceArea from "../components/sections/ServiceArea";
import PageInfoBox from "../components/cards/PageInfoBox";
import CCTVInstallationProcess from "../components/sections/CCTVInstallationProcess";
import USAMadeBanner from "../components/cards/USAMadeBanner";
import SEOMeta from "../components/seo/SEOMeta";
import CommercialSection from "../components/sections/CommercialSection";
// JSON-LD Scheme
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "../schemas";

//
// Function Starts
export default function ResidentialSecurityPage() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
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

      <section className="residential-garage-doors">
        <div className="container">
          {/* <!-- Hero Section --> */}
          {/* <MainContentSticky
            sticky_title="Residential Garage Doors"
            sticky_msg2="Designed &  Made in USA"
          /> */}
          <PageInfoBox
            pageType="services"
            info_title="Why Choose Advanced Garage Doors Residential Services?"
            info_top_title="residential garage door repair & installation"
            info_mid_text="When you choose Advanced Garage Door for your residential garage door repair or installation"
            info_link1="/garage_door_contactus.html"
            link1_text="Free Estimate"
            info_link2="/garage_door_openers.html"
            link2_text="Openers Selection"
            info_image1="/images/residential/amarr/amarr-long-bead-board.jpg"
            info_image2="/images/residential/clopay/avante-ax-franklinshowcase.webp"
            info_image3="/images/residential/chi-skyline-flush-black-stacked-windows.webp"
          />
          {/* Service Area all props are taking from LocationData.ds */}
          <ServiceArea />

          {/* <!-- Replacement Process --> */}
          <div>
            <CCTVInstallationProcess />
          </div>

          {/* Made in USA */}
          <USAMadeBanner variant="garage door" />

          {/* <!-- Openers Section --> */}
          <div className="opener-section text-center mt-5 p-lg-5 bg-dark text-white rounded-3">
            <h2 className="mb-4">Complete Your System With Quality Openers</h2>
            <p className="lead mb-4">
              We help you choose the perfect electric opener for your new garage
              door and lifestyle needs.
            </p>
            <a
              href="/garage_door_openers.html"
              className="btn btn-outline-light btn-lg"
            >
              Explore Openers
            </a>
          </div>

          <CommercialSection />
        </div>
      </section>
    </>
  );
}
