import { Container, Row, Col } from "react-bootstrap";
//
import TestimonialTabs from "../components/helpers/TestimonialTabs";
// import ServicesCard from "../components/cards/ServicesCard";
import Brands from "../components/functional/Brands";
import SEOMeta from "../components/seo/SEOMeta";
import PageInfoBox from "../components/cards/PageInfoBox";
// import CameraInfoBox from "../components/cards/CameraInfoBox";
import cctvTypeSections from "../assets/data/cctv_types_sections_ds";
import cctvDvrSystemsDS from "../assets/data/cctv_dvr_systems_ds";
import CCTVInfoTabs from "../components/cards/CCTVInfoTabs";

// JSON-LD Scheme
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "../schemas";

//Images
import img1 from "../assets/images/cctv/cctv-cams_xxl.jpg";
import img2 from "../assets/images/banners/cctv-header.jpg";
import CCTVInstallationProcess from "../components/sections/CCTVInstallationProcess";

/////////////////////////////////////

export default function HomePage() {
  // const pageData = seoData["/"];
  return (
    <>
      <div>
        {/* JSON-LS for Home Page */}
        <BreadcrumbSchema
          items={[{ name: "Home", url: "https://advancedgaragedoorinc.com" }]}
        />
        <FAQSchema
          questions={[
            {
              question: "Do garage doors need annual maintenance?",
              answer:
                "Yes! Yearly professional maintenance of doors and openers prevents 85% of emergency repairs by catching worn springs, misaligned sensors, and lubrication needs early.",
            },
            {
              question: "What garage door brands do you install?",
              answer:
                "We're authorized dealers for top-rated residential brands including C.H.I, Amarr, and Clopay doors - all backed by manufacturer warranties.",
            },
            {
              question: "Do you offer emergency repairs for homeowners?",
              answer:
                "Yes! Our 24/7 emergency service handles broken springs, off-track doors, and opener failures with same-day response in most cases.",
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
        {/* <SEO {...pageData} /> */}
        <SEOMeta
          title="Local Garage Door Repair & Installation | Garage Door Openers"
          description="Advanced Garage Doors provide a verity of local garage door repair and installation services. We install all types of garage doors and garage door openers."
          keywords="local garage door, garage door repair, garage door installation, garage door maintenance, emergency garage service, residential garage doors, commercial garage doors"
          url="https://www.advancedgaragedoorinc.com/"
          image="https://www.advancedgaragedoorinc.com/images/garage-door-service.jpg"
          twitterHandle="@AdvancedGarageDoor"
        />
      </div>
      {/* main content */}
      <Container fluid>
        {/* Top Main Content */}
        <PageInfoBox pageType="home" info_image1={img1} info_image2={img2} />

        {/* Insallation Process */}
        <div>
          <CCTVInstallationProcess />
        </div>

        {/* Camera Information Box/ */}
        <CCTVInfoTabs
          tabs={[
            { label: "Cameras", data: cctvTypeSections },
            { label: "DVRs/NVRs", data: cctvDvrSystemsDS },
          ]}
        />

        {/* Brands Section */}
        <div>
          <Brands />
        </div>
      </Container>
    </>
  );
}
