// React, JSON-LD Scheme & Meta
import { Container } from "react-bootstrap";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "../schemas";
import SEOMeta from "../components/seo/SEOMeta";

// Images

// Functionl Components
import PageInfoBox from "../components/cards/PageInfoBox";
import FAQsSection from "../components/sections/FAQsSection";
import CaseStudies from "../components/sections/CaseStudies";

//

const services = [
  {
    title: "PA System Installation",
    icon: "bi-megaphone-fill",
    description:
      "Complete public address system design and professional installation.",
  },
  {
    title: "Commercial PA Systems",
    icon: "bi-megaphone",
    description:
      "Professional public address systems for clear announcements and communications.",
  },
  {
    title: "Background Music Systems",
    icon: "bi-music-note-beamed",
    description:
      "High-quality audio distribution for ambient music throughout your facility.",
  },
  {
    title: "Emergency Notification Systems",
    icon: "bi-broadcast",
    description:
      "Code-compliant emergency alert and mass notification solutions.",
  },
  {
    title: "Conference Room Audio",
    icon: "bi-mic",
    description: "Crystal-clear audio systems for meetings and presentations.",
  },
  {
    title: "Outdoor Speaker Systems",
    icon: "bi-speaker",
    description:
      "Weather-resistant audio solutions for outdoor areas and parking lots.",
  },
  {
    title: "Audio Zoning & Control",
    icon: "bi-sliders",
    description: "Multi-zone audio systems with individual area control.",
  },
  {
    title: "Audio Distribution",
    icon: "bi-speaker-fill",
    description: "Multi-zone audio distribution for buildings and campuses.",
  },
  {
    title: "Emergency Paging",
    icon: "bi-bell-fill",
    description: "Life safety and emergency mass notification systems.",
  },
  {
    title: "Voice Evacuation Systems",
    icon: "bi-exclamation-triangle",
    description: "Code-compliant voice evacuation for emergency situations.",
  },
  {
    title: "Audio Conferencing",
    icon: "bi-mic-fill",
    description:
      "Professional audio solutions for conference rooms and meeting spaces.",
  },
  {
    title: "System Integration",
    icon: "bi-puzzle",
    description:
      "Seamless integration with existing security and communication systems.",
  },
];

export default function PASystemsPage() {
  return (
    <>
      <div>
        {/* JSON-LD Breadcrumb for PA Systems Page */}
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://rushrash.com" },
            {
              name: "PA Systems",
              url: "https://rushrash.com/services/pa-systems",
            },
          ]}
        />

        {/* FAQ Schema for PA Systems */}
        <FAQSchema
          questions={[
            {
              question: "What types of PA systems do you install?",
              answer:
                "We install commercial-grade PA systems including background music systems, emergency notification systems, voice evacuation systems, conference room audio, and multi-zone audio distribution for both indoor and outdoor environments.",
            },
            {
              question:
                "Can PA systems be integrated with existing security systems?",
              answer:
                "Yes. Our PA solutions seamlessly integrate with access control, fire alarm, and security systems for unified emergency response and building-wide announcements.",
            },
            {
              question: "Do you offer wireless PA system options?",
              answer:
                "Absolutely. We provide both wired and wireless PA system solutions, including IP-based audio distribution and Bluetooth-enabled systems for flexible installation.",
            },
            {
              question:
                "Can you handle large-scale commercial PA installations?",
              answer:
                "Yes. We design and deploy enterprise-grade PA systems for schools, hospitals, warehouses, office buildings, and industrial facilities with multiple zones and complex audio requirements.",
            },
            {
              question: "Do you provide ongoing maintenance and support?",
              answer:
                "Yes. We offer comprehensive maintenance packages including system testing, speaker diagnostics, amplifier checks, and emergency repair services to keep your PA system operational.",
            },
          ]}
        />

        {/* Featured Services for PA Systems */}
        <ServiceSchema
          services={[
            {
              name: "Commercial PA System Installation",
              description:
                "Professional public address systems for clear announcements, background music, and emergency communications in commercial buildings.",
            },
            {
              name: "Emergency Notification Systems",
              description:
                "Code-compliant voice evacuation and mass notification systems for life safety and emergency situations.",
            },
            {
              name: "Background Music Systems",
              description:
                "High-quality audio distribution for ambient music throughout facilities with multi-zone control capabilities.",
            },
            {
              name: "Conference Room Audio Solutions",
              description:
                "Crystal-clear audio systems for meetings, presentations, and video conferencing with professional sound quality.",
            },
            {
              name: "Outdoor Speaker Systems",
              description:
                "Weather-resistant audio solutions for parking lots, courtyards, sports fields, and exterior building areas.",
            },
            {
              name: "PA System Integration",
              description:
                "Seamless integration with security systems, intercoms, and building automation for unified communications.",
            },
          ]}
        />

        {/* SEO Meta for PA Systems */}
        <SEOMeta
          title="Professional PA System Installation & Audio Solutions | Rushrash Inc."
          description="Rushrash Inc. provides comprehensive PA system installation including commercial public address, emergency notification, background music, conference room audio, and outdoor speaker systems."
          keywords="PA systems, public address systems, audio installation, emergency notification, background music, conference room audio, outdoor speakers, sound systems"
          url="https://rushrash.com/services/pa-systems"
          image="https://rushrash.com/wp-content/uploads/2023/05/rushrash-logo-23.png"
          twitterHandle="@RushrashInc"
        />
      </div>

      <Container fluid>
        <PageInfoBox pageType="pa" />
      </Container>
      <div className="container my-5">
        <div className="row g-4">
          {services.map((service, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
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

      {/* Success Stories & Studies */}
      <div id="case-studies">
        <CaseStudies category="pa" />
      </div>

      <div>
        <FAQsSection faqServiceType="pa" />
      </div>
    </>
  );
}
