import "../assets/css/HeroSection.css";
import { useLocation } from "react-router-dom";
import PageInfoBox from "../components/cards/PageInfoBox";
import CCTVInstallationProcess from "../components/sections/CCTVInstallationProcess";
import SEOMeta from "../components/seo/SEOMeta";
import CommercialSection from "../components/sections/CommercialSection";
import CaseStudies from "../components/sections/CaseStudies"; // You'll need to create this

// JSON-LD Scheme
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "../schemas";

// Images
import QualitySectionBg from "../assets/images/security-locks/bg-keys-security.jpg";

//
// Function Starts
export default function ResidentialSecurityPage() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {/* Meta Tags and Schemas */}
      <div>
        <SEOMeta
          title="Residential CCTV & Access Control Systems | Rushrash Inc."
          description="Protect your home with professional residential CCTV and access control solutions. Expert installation of security cameras, smart locks, and home surveillance systems for complete peace of mind."
          keywords="home security cameras, residential CCTV, access control systems, home surveillance, security camera installation, smart locks, door entry systems, home security systems, burglary prevention"
          twitterHandle="@RushrashInc"
        />

        {/* JSON-LD for Residential Security Page */}
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://rushrashinc.com" },
            {
              name: "Residential Security",
              url: "https://rushrashinc.com/residential-cctv-security",
            },
          ]}
        />

        <FAQSchema
          questions={[
            {
              question: "What's included in a basic residential CCTV package?",
              answer:
                "Our basic package includes 4 HD cameras, a network video recorder (NVR), mobile app access, night vision capability, and professional installation. Perfect for monitoring entry points and key areas of your home.",
            },
            {
              question:
                "How does access control work for residential properties?",
              answer:
                "Residential access control systems can include smart locks, keyless entry pads, biometric scanners, or smartphone-controlled door entry systems. They allow you to grant temporary access to guests, monitor who enters your home, and eliminate the risk of lost keys.",
            },
            {
              question: "Can I view my security cameras remotely?",
              answer:
                "Yes, all our systems include mobile app access allowing you to view live footage, receive motion alerts, and review recordings from anywhere in the world using your smartphone or tablet.",
            },
            {
              question: "Are residential security systems monitored?",
              answer:
                "We offer both self-monitored and professionally monitored options. Self-monitored systems send alerts directly to your phone, while professional monitoring includes 24/7 surveillance center support and emergency response dispatch.",
            },
            {
              question: "How long is the warranty on your equipment?",
              answer:
                "Most of our residential security equipment comes with a 3-year manufacturer warranty, and we offer extended warranty options for additional peace of mind.",
            },
          ]}
        />

        <ServiceSchema
          services={[
            {
              name: "Free Security Assessment",
              description:
                "On-site evaluation of your home's security needs and vulnerabilities",
            },
            {
              name: "CCTV System Installation",
              description:
                "Professional installation of HD security cameras with mobile access",
              offers: { price: "299" },
            },
            {
              name: "Access Control Installation",
              description:
                "Smart lock and entry system installation for keyless home access",
              offers: { price: "199" },
            },
            {
              name: "24/7 Emergency Service",
              description:
                "Rapid response for security system malfunctions or breaches",
              offers: { price: "99" },
            },
            {
              name: "System Maintenance & Updates",
              description:
                "Regular system checks, software updates, and performance optimization",
            },
          ]}
        />

        {/* Additional Local Business Schema for better local SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Rushrash Inc.",
            description:
              "Professional residential CCTV and access control installation services",
            url: "https://rushrashinc.com",
            telephone: "+1-555-123-SAFE",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Security Way",
              addressLocality: "Chicago",
              addressRegion: "IL",
              postalCode: "60601",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "41.8781",
              longitude: "-87.6298",
            },
            openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-16:00",
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: "41.8781",
                longitude: "-87.6298",
              },
              geoRadius: "50000",
            },
          })}
        </script>
      </div>
      <section>
        <div className="container">
          <PageInfoBox pageType="residential" />
          {/* <!-- Replacement Process --> */}
          <div>
            <CCTVInstallationProcess pageType="Residential CCTV" />
          </div>
          {/* Case Studies/Testimonials Section */}
          <section>
            <CaseStudies category="residential" />
          </section>
          <CommercialSection />
          {/* Quality CCTV SEction */}{" "}
          <div
            className="opener-section text-center mt-5 p-lg-5  text-white rounded-3 position-relative"
            style={{
              backgroundImage: `url(${QualitySectionBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Overlay for better text readability */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100 rounded-3"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                zIndex: 1,
              }}
            ></div>

            {/* Content */}
            <div className="position-relative z-2" style={{ zIndex: 2 }}>
              <h2 className="mb-2 fw-bold">
                Complete Your System With Quality CCTV
              </h2>
              <p className="lead mb-4 fs-5">
                We help you choose the perfect security solution for your home
                or business.
              </p>
              <a
                href="/garage_door_openers.html"
                className="btn btn-outline-light btn-lg px-4 py-2 fw-semibold"
              >
                Explore CCTV Options - Near Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
