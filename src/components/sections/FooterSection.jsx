import { useLocation } from "react-router-dom";

export default function FooterSection() {
  const location = useLocation();
  const path = location.pathname;

  // Service-specific footer blurbs
  const serviceFooters = {
    "/services/access-control": (
      <p className="small mt-4">
        Rushrash Inc. delivers reliable access control systems in Chicago,
        helping businesses and homes stay secure with biometric entry, keycards,
        and remote management. Trusted since 2003, we provide licensed and
        insured installations tailored to your security needs.
      </p>
    ),
    "/services/cctv-installation": (
      <p className="small mt-4">
        At Rushrash Inc., we specialize in professional CCTV camera
        installations across Chicago. From HD IP systems to AI-powered video
        analytics, our team ensures clear surveillance and long-term protection.
        Serving commercial and residential clients since 2003.
      </p>
    ),
    "/services/it-services": (
      <p className="small mt-4">
        Rushrash Inc. provides expert IT services in Chicago, including network
        setup, troubleshooting, and secure system integration. With two decades
        of experience, our licensed technicians keep your technology reliable,
        efficient, and protected.
      </p>
    ),
    "/services/pa-systems": (
      <p className="small mt-4">
        Rushrash Inc. designs and installs PA systems for businesses, schools,
        and events in Chicago. Our solutions deliver clear communication with
        modern audio technology, backed by trusted service since 2003.
      </p>
    ),
    "/security-insights": (
      <p className="small mt-4">
        Explore expert articles on Access Control, CCTV, IT services, PA
        systems, and PoS solutions — security insights to help protect your
        business and home.
      </p>
    ),
    "/security-products": (
      <p className="small mt-4">
        Browse our range of Access Control, CCTV, IT, PA systems, and PoS
        products — trusted technology solutions for commercial and residential
        security.
      </p>
    ),
    "/commercial-cctv-security": (
      <p className="small mt-4">
        Commercial and business CCTV solutions designed to safeguard offices,
        retail spaces, and enterprises with reliable security technology.
      </p>
    ),
    "/residential-cctv-security": (
      <p className="small mt-4">
        Residential security systems including CCTV, IT, and PA solutions —
        tailored protection for homes, apartments, and private properties.
      </p>
    ),
  };

  // Default fallback footer (your current one)
  const defaultFooter = (
    <>
      <p className="small mt-4">
        <strong>Rushrash Inc.</strong> – Trusted Chicago security experts
        delivering complete security solutions. We specialize in professional
        CCTV surveillance systems, advanced access control solutions, and
        reliable Point of Sale (PoS) installations. Serving both commercial and
        residential clients since 2003, we provide state-of-the-art security
        technology tailored to your needs.
      </p>
      <p className="small mb-2">
        Our team designs <em>comprehensive security ecosystems</em> featuring HD
        IP camera networks, AI-powered video analytics, biometric access
        control, and secure retail PoS systems. Partnering with top brands such
        as Hikvision, Dahua, Axis, Honeywell, and Uniview, we ensure your home
        or business is protected with the latest technology.
        <br />
        <strong>Fully licensed, insured, and bonded</strong> for complete peace
        of mind.
      </p>
    </>
  );

  return (
    <div className="row justify-content-start">
      <div className="col-12 col-md-12 text-start text-light">
        <div>{serviceFooters[path] || defaultFooter}</div>
      </div>
    </div>
  );
}
