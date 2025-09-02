import { Container } from "react-bootstrap";
//
import Brands from "../components/functional/Brands";
import PageInfoBox from "../components/cards/PageInfoBox";
import CCTVInfoTabs from "../components/cards/CCTVInfoTabs";

// Data Structures
import cctvCameraTypeSections from "../assets/data/cctv_types_sections_ds";
import cctvDvrSystemsDS from "../assets/data/cctv_dvr_systems_ds";
import posSystemsDS from "../assets/data/pos_systems_ds";
import accessControlSystemsDS from "../assets/data/access_control_systems_ds";
import brandsForTabsDS from "../assets/data/brands_for_tabs_ds";

// JSON-LD Scheme & Meta
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "../schemas";
import SEOMeta from "../components/seo/SEOMeta";

//Images
import CCTVInstallationProcess from "../components/sections/CCTVInstallationProcess";

/////////////////////////////////////

export default function HomePage() {
  // const pageData = seoData["/"];
  return (
    <>
      <div>
        {/* JSON-LD for CCTV Security Home Page */}
        <BreadcrumbSchema
          items={[{ name: "Home", url: "https://rushrash.com" }]}
        />

        <FAQSchema
          questions={[
            {
              question: "Do I need CCTV cameras for my business?",
              answer:
                "Yes. CCTV systems help deter theft, monitor employee safety, and provide critical video evidence in case of incidents.",
            },
            {
              question: "Can I access my security cameras remotely?",
              answer:
                "Absolutely. We provide smart CCTV solutions with mobile and desktop apps, allowing you to view live and recorded footage from anywhere.",
            },
            {
              question: "Do you offer installation and maintenance?",
              answer:
                "Yes. Our certified technicians handle complete installation, configuration, and ongoing maintenance of CCTV and access control systems.",
            },
            {
              question: "Are your systems scalable for large properties?",
              answer:
                "Yes. We design scalable security solutions for small offices, warehouses, retail stores, and enterprise-level facilities.",
            },
          ]}
        />

        {/* Featured Services for CCTV & Security */}
        <ServiceSchema
          services={[
            {
              name: "CCTV Installation",
              description:
                "Professional installation of indoor and outdoor security cameras with HD or 4K recording.",
            },
            {
              name: "Remote Monitoring",
              description:
                "Access live camera feeds and recorded footage remotely from any device.",
            },
            {
              name: "Access Control Systems",
              description:
                "Keycard, keypad, and biometric access solutions for businesses of all sizes.",
              offers: { price: "499" },
            },
            {
              name: "Maintenance & Support",
              description:
                "Ongoing support and preventive maintenance to keep your security system reliable.",
              offers: { price: "1999" },
            },
          ]}
        />

        {/* SEO Meta for CCTV Security */}
        <SEOMeta
          title="CCTV Security & Access Control Solutions | Rushrash Inc."
          description="Rushrash Inc. provides professional CCTV installation, remote monitoring, and access control systems for businesses and homes. Secure your property with cutting-edge surveillance solutions."
          keywords="CCTV installation, security cameras, access control, business security, remote monitoring, biometric access, surveillance systems"
          url="https://rushrash.com/"
          image="https://rushrash.com/wp-content/uploads/2023/05/rushrash-logo-23.png"
          twitterHandle="@RushrashInc"
        />
      </div>

      {/* main content */}
      <Container fluid>
        {/* Top Main Content */}
        <PageInfoBox pageType="home" />

        {/* Camera Information Box/ */}
        <CCTVInfoTabs
          tabs={[
            { label: "Cameras", data: cctvCameraTypeSections },
            { label: "DVRs/NVRs", data: cctvDvrSystemsDS },
            { label: "PoS", data: posSystemsDS },
            { label: "Access ControlSystems", data: accessControlSystemsDS },
            { label: "Security Brands", data: brandsForTabsDS },
          ]}
        />

        {/* Insallation Process */}
        <div>
          <CCTVInstallationProcess />
        </div>

        {/* Brands Section */}
        <div>
          <Brands />
        </div>
      </Container>
    </>
  );
}
