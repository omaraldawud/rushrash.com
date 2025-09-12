// React, JSON-LD Schema & Meta
import { Container } from "react-bootstrap";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "../schemas";
import SEOMeta from "../components/seo/SEOMeta";
// data strcutres
import FAQsSection from "../components/sections/FAQsSection";

// Components
import PageInfoBox from "../components/cards/PageInfoBox";
import CaseStudies from "../components/sections/CaseStudies";

// Images
import cctvResidentialIMG from "../assets/images/banners/residential/setup-residential-cctv-wireless-camera.jpg";
import cctvCommercialIMG from "../assets/images/banners/commercial/cctv-building-commercial.jpg";

//
// Services data
const services = [
  {
    title: "CCTV Surveillance Systems",
    icon: "bi-camera-video",
    description:
      "High-definition surveillance CCTV systems with DVR and NVR recording options for round-the-clock monitoring.",
  },
  {
    title: "CCTV Camera Installation",
    icon: "bi-camera",
    description:
      "Professional CCTV camera installation with proper placement and wiring for maximum coverage.",
  },
  {
    title: "NVR Solutions",
    icon: "bi-hdd-network",
    description:
      "Network Video Recorder (NVR) setup for IP-based CCTV systems with remote monitoring capability.",
  },
  {
    title: "DVR Solutions",
    icon: "bi-hdd",
    description:
      "Digital Video Recorder (DVR) installation for analog CCTV systems with secure storage.",
  },
];

export default function CCTVServicesPage() {
  return (
    <>
      <div>
        {/* JSON-LD Breadcrumb for CCTV Services Page */}
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://rushrash.com" },
            {
              name: "CCTV Installation",
              url: "https://rushrash.com/services/cctv-installation",
            },
          ]}
        />

        {/* FAQ Schema for CCTV Services */}
        <FAQSchema
          questions={[
            {
              question: "What types of CCTV systems do you install?",
              answer:
                "We install both commercial and residential CCTV systems, including DVR and NVR-based solutions.",
            },
            {
              question: "Can I view my CCTV cameras remotely?",
              answer:
                "Yes, our NVR and modern CCTV systems support mobile and desktop remote monitoring.",
            },
            {
              question: "Do you provide maintenance for CCTV systems?",
              answer:
                "Absolutely. We offer maintenance packages to ensure your CCTV systems operate reliably 24/7.",
            },
            {
              question: "What is the difference between DVR and NVR?",
              answer:
                "DVRs are used with analog CCTV cameras, while NVRs are used with IP cameras. We provide both depending on your requirements.",
            },
            {
              question: "Do you offer CCTV systems for homes and businesses?",
              answer:
                "Yes, we provide tailored CCTV surveillance solutions for both residential and commercial properties.",
            },
          ]}
        />

        {/* Service Schema for CCTV */}
        <ServiceSchema
          services={[
            {
              name: "Commercial CCTV Systems",
              description:
                "Enterprise-grade CCTV surveillance for offices, warehouses, and retail locations.",
            },
            {
              name: "Residential CCTV Systems",
              description:
                "Affordable CCTV installation for homes, apartments, and residential complexes.",
            },
            {
              name: "NVR & DVR Solutions",
              description:
                "Professional setup of DVR and NVR systems for secure video recording and monitoring.",
            },
            {
              name: "Remote CCTV Monitoring",
              description:
                "Access live CCTV footage anytime, anywhere with mobile and desktop apps.",
            },
          ]}
        />

        {/* SEO Meta for CCTV Services */}
        <SEOMeta
          title="CCTV Installation Services – Surveillance, DVR & NVR Solutions"
          description="Rushrash Inc. offers professional CCTV installation services for commercial and residential properties. We provide surveillance CCTV systems, DVR & NVR solutions, and remote monitoring for reliable security."
          keywords="CCTV installation, surveillance CCTV, DVR systems, NVR systems, commercial CCTV, residential CCTV, security cameras, remote CCTV monitoring"
          url="https://rushrash.com/services/cctv-installation"
          image="https://rushrash.com/wp-content/uploads/2023/05/rushrash-logo-23.png"
          twitterHandle="@RushrashInc"
        />
      </div>

      <Container fluid>
        <PageInfoBox pageType="cctv" />
      </Container>

      {/* Featured CCTV Services */}
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
      {/* Commercial & Residential CCTV Sections */}
      <div className="container my-5">
        <div className="row g-4 align-items-center">
          {/* Commercial CCTV */}
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <img
                src={cctvCommercialIMG}
                alt="Commercial CCTV Systems"
                className="card-img-top rounded-top"
              />
              <div className="card-body">
                <h2 className="h4 fw-bold">Commercial CCTV Systems</h2>
                <p className="text-muted">
                  Protect offices, warehouses, and retail spaces with
                  enterprise-grade surveillance CCTV solutions. We design
                  scalable systems with DVR/NVR integration and remote
                  monitoring for 24/7 security.
                </p>
                <a href="/cctv-commercial" className="btn btn-primary mt-2">
                  Explore Commercial CCTV
                </a>
              </div>
            </div>
          </div>

          {/* Residential CCTV */}
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <img
                src={cctvResidentialIMG}
                alt="Residential CCTV Systems"
                className="card-img-top rounded-top"
              />
              <div className="card-body">
                <h2 className="h4 fw-bold">Residential CCTV Systems</h2>
                <p className="text-muted">
                  Keep your home and family safe with affordable CCTV
                  installation. We provide professional setups for single-family
                  homes, apartments, and gated communities with easy remote
                  access and reliable recording.
                </p>
                <a href="/cctv-residential" className="btn btn-primary mt-2">
                  Explore Residential CCTV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories & Studies */}
      <div id="case-studies">
        <CaseStudies category="residential" />
      </div>

      <div>
        <FAQsSection faqServiceType="cctv" />
      </div>
    </>
  );
}
