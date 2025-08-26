import SEOMeta from "../components/seo/SEOMeta";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "../schemas";

export default function GarageDoorRepairPage() {
  return (
    <>
      <div>
        {/* JSON-LD Structured Data */}
        <BreadcrumbSchema
          items={[
            {
              name: "Home",
              url: "https://advancedgaragedoorinc.com/",
            },
            {
              name: "Garage Door Repair Services",
              url: "https://advancedgaragedoorinc.com/garage-door-repair",
            },
          ]}
        />
        <FAQSchema
          questions={[
            {
              question: "Is annual garage door maintenance necessary?",
              answer:
                "Absolutely. Professional annual maintenance prevents 85% of emergency repairs by identifying worn springs, misaligned sensors, and lubrication needs before they become critical issues.",
            },
            {
              question: "Which garage door brands do you service?",
              answer:
                "As certified technicians, we service all major brands including C.H.I, Amarr, Clopay, and more - all backed by manufacturer warranties for your protection.",
            },
            {
              question: "Do you provide 24/7 emergency repair services?",
              answer:
                "Yes. Our rapid-response team is available around the clock for spring replacements, off-track doors, and opener failures, with most emergencies resolved same-day.",
            },
          ]}
        />
        <ServiceSchema
          services={[
            {
              name: "Complimentary On-Site Estimates",
              description: "Precise measurements and transparent pricing",
            },
            {
              name: "Phone Consultations",
              description: "Immediate guidance and preliminary estimates",
            },
            {
              name: "Emergency Spring Replacement",
              description: "24/7 torsion and extension spring repair services",
              offers: { price: "149" },
            },
            {
              name: "Diagnostic Service Call",
              description: "Professional assessment and repair evaluation",
              offers: { price: "75" },
            },
          ]}
        />
        <SEOMeta
          title="Professional Garage Door Repair Services | Springs & Rollers Specialists"
          description="Expert garage door repair services including spring replacement, roller repair, and full door restoration. 24/7 emergency service available."
          keywords="Garage Door Repair, Door Repair, Springs Repair, Rollers, Torsion Springs, Extension Springs, Garage Door Service"
          url="https://www.advancedgaragedoorinc.com/garage-door-repair"
          image="https://www.advancedgaragedoorinc.com/images/garage-door-repair.jpg"
          twitterHandle="@AdvancedGarageDoor"
        />
      </div>

      <div className="container ">
        <section className="mb-5 py-2  bg-light rounded-3 shadow-sm">
          <div className="container">
            <div className="row align-items-center">
              {/* Text Content Column */}
              <h2 className="display-5 fw-bold mb-4 text-primary">
                Expert Garage Door Repair Services
              </h2>
              <div className="col-lg-6 mb-4 mb-lg-0">
                <p className="lead text-dark">
                  Professional garage door repair requires specialized knowledge
                  and tools to ensure safety and longevity. Attempting DIY
                  repairs on torsion springs, rollers, or track alignment can
                  lead to serious injury or further damage to your door system.
                </p>
                <p>
                  With over a decade of experience serving the Chicago area,
                  Advanced Garage Door Inc. provides comprehensive repair
                  solutions for all major brands. Our certified technicians
                  deliver:
                </p>
                <ul className="list-icon-check mb-4">
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Precision spring replacement (torsion and extension systems)
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Roller and track realignment services
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    24/7 emergency repair availability
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Manufacturer-certified parts with warranty protection
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    Same-day service for most repairs
                  </li>
                </ul>
                <p className="fw-semibold">
                  We proudly serve Naperville, Aurora, Plainfield, Lisle and
                  surrounding communities with industry-leading response times
                  and unmatched workmanship guarantees.
                </p>
              </div>

              {/* Image Gallery Column */}
              <div className="col-lg-6">
                <div className="row g-3">
                  {/* Large Featured Image */}
                  <div className="col-md-8">
                    <div className="rounded-3 overflow-hidden shadow">
                      <img
                        src="/images/parts/springs/broken-springs.jpg"
                        alt="Technician replacing garage door springs"
                        className="img-fluid w-100 h-100 object-fit-cover"
                        style={{ minHeight: "250px" }}
                      />
                      <div className="bg-dark text-white p-3 small">
                        <strong>Certified Spring Replacement</strong> - Our
                        technicians follow strict safety protocols
                      </div>
                    </div>
                  </div>

                  {/* Smaller Images */}
                  <div className="col-md-4">
                    <div className="rounded-3 overflow-hidden shadow mb-2">
                      <img
                        src="/images/parts/snapped-cables.png"
                        alt="Garage door roller replacement"
                        className="img-fluid w-100"
                        style={{ height: "120px", objectFit: "cover" }}
                      />
                    </div>
                    <div className="rounded-3 overflow-hidden shadow mb-2">
                      <img
                        src="/images/parts/springs/springs-garage-door.jpg"
                        alt="24/7 emergency service vehicle"
                        className="img-fluid w-100"
                        style={{ height: "120px", objectFit: "cover" }}
                      />
                    </div>{" "}
                    <div className="rounded-3 overflow-hidden shadow">
                      <img
                        src="/images/parts/metal-hardware-garagedoor.jpg"
                        alt="24/7 emergency service vehicle"
                        className="img-fluid w-100"
                        style={{ height: "120px", objectFit: "cover" }}
                      />
                    </div>
                  </div>

                  {/* Bottom Row - Full Width */}
                  <div className="col-12">
                    <div className="rounded-3 overflow-hidden shadow">
                      <img
                        src="/images/parts/professional-door-installation.jfif"
                        alt="Professional door installation"
                        className="img-fluid w-100"
                        style={{ height: "150px", objectFit: "cover" }}
                      />
                      <div className="bg-primary text-white p-2 small text-center">
                        <strong>Same-Day Service Available</strong> for most
                        repairs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-3 mb-5 bg-white">
          <div className="container">
            <div className="row align-items-center">
              {/* Left Column - Text Content */}
              <div className="col-lg-6 pe-lg-5">
                <h2 className="fw-bold mb-4 display-6 text-primary">
                  Our Customer-Centric Approach
                </h2>

                <p className="lead text-dark mb-4">
                  Our certified technicians provide honest assessments and only
                  recommend necessary repairs. We stand behind our work with
                  industry-leading warranties and guarantees.
                </p>

                <div className="border-start border-4 border-primary ps-4 mb-4">
                  <h3 className="text-dark mb-3">Exclusive Repair Savings</h3>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2 d-flex align-items-center">
                      <span className="badge bg-primary me-3">$20 OFF</span>
                      <span>Any Repair Service</span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <span className="badge bg-primary me-3">$30 OFF</span>
                      <span>New Garage Door Installation</span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <span className="badge bg-primary me-3">$50 OFF</span>
                      <span>Double Door Installation</span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <span className="badge bg-primary me-3">$20 OFF</span>
                      <span>Spring Replacement</span>
                    </li>
                  </ul>

                  <div className="bg-light p-3 rounded text-center">
                    <p className="mb-0 fw-bold">
                      <i className="fas fa-shield-alt text-primary me-2"></i>
                      All services include{" "}
                      <span className="text-primary">
                        4-year parts warranty
                      </span>{" "}
                      and{" "}
                      <span className="text-primary">
                        1-year labor coverage
                      </span>
                    </p>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <a
                    href="tel:877-523-6677"
                    className="btn btn-danger btn-lg px-4 py-3"
                  >
                    <i className="fas fa-phone-alt me-2"></i>
                    Emergency Service: 877-523-6677
                  </a>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="position-relative rounded-4 overflow-hidden shadow-lg">
                  <img
                    src="/images/banners/garage_door_repair_adjustments.jpg"
                    alt="Technician explaining repair options to customer"
                    className="img-fluid w-100"
                    style={{ minHeight: "500px", objectFit: "cover" }}
                  />
                  <div className="position-absolute bottom-0 start-0 end-0 bg-primary bg-opacity-90 text-white p-4">
                    <h4 className="mb-0 text-center">
                      Honest Assessments • Fair Pricing • Guaranteed Work
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="mb-4">Recent Repair Projects</h2>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Naperville, IL</h5>
              <p className="card-text">
                Replaced torsion spring system, performed full door lubrication,
                and opener calibration for optimal performance.
              </p>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">St. Charles, IL</h5>
              <p className="card-text">
                Corrected dangerous DIY repair attempt by replacing damaged
                bottom brackets and rebalancing door system to manufacturer
                specifications.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Gurnee, IL</h5>
              <p className="card-text">
                Emergency repair for snapped cable causing track derailment.
                Installed new high-tensile cables and restored proper track
                alignment.
              </p>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-4 mt-5 py-3">
            {/* Customer Reviews Button - Primary CTA */}
            <a
              href="/garage_door_testimonials.html"
              className="btn btn-primary btn-lg px-4 py-3 shadow-sm"
              style={{
                minWidth: "250px",
                background: "linear-gradient(135deg, #0d6efd 0%, #0b5ed7 100%)",
                border: "none",
                fontWeight: "600",
                letterSpacing: "0.5px",
              }}
            >
              <i className="fas fa-star me-2"></i>
              Read Customer Reviews
              <i className="fas fa-chevron-right ms-2"></i>
            </a>

            {/* Coupons Button - Secondary CTA */}
            <a
              href="/garage_door_specials_coupons.html"
              className="btn btn-outline-primary btn-lg px-4 py-3"
              style={{
                minWidth: "250px",
                border: "2px solid",
                fontWeight: "600",
                letterSpacing: "0.5px",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.background = "#0d6efd";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "#0d6efd";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <i className="fas fa-tag me-2"></i>
              View Specials & Coupons
              <i className="fas fa-chevron-right ms-2"></i>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
