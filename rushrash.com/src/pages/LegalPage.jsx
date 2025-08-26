import SEOMeta from "../components/seo/SEOMeta";

export default function LegalPage() {
  return (
    <>
      <SEOMeta
        title="Legal Information | Advanced Garage Door Inc"
        description="Review our terms of service, privacy policy, and company information. Licensed, bonded & insured garage door specialists serving Chicagoland."
        keywords="garage door legal, privacy policy, terms of service, licensed garage door company"
      />

      <div className="container ">
        {/* Mission Statement Section */}
        <section className="row align-items-center mb-5 ">
          <div className="col-lg-6 pe-lg-5">
            <h2 className="display-5 fw-bold mb-4 text-primary">
              Our Commitment
            </h2>
            <div className="border-start border-4 border-primary ps-4">
              <h3 className="text-dark mb-3">Mission Statement</h3>
              <p className="lead">
                Raise the standards of quality in garage door repair and
                installation. Provide dependable service with personal
                attention. Become the most trusted name in the industry.
              </p>

              <div className="mt-4">
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-shield-alt fa-2x text-primary me-3"></i>
                  <div>
                    <h4 className="mb-0">Licensed, Bonded & Insured</h4>
                    <p className="mb-0">
                      We are a fully licensed, bonded, and insured garage door
                      company — delivering professional and trustworthy service
                      across Chicagoland.
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <i className="fas fa-map-marker-alt fa-2x text-primary me-3"></i>
                  <div>
                    <h4 className="mb-0">Local Garage Door Company</h4>
                    <p className="mb-0">
                      Serving Naperville, Aurora, Plainfield, and all Chicago
                      suburbs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* images */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="row g-3">
              <div className="col-md-6">
                <img
                  src="/images/sitewide/advanced-garage-door-inc-logo-side.png"
                  alt="Certified technician servicing garage door"
                  className="img-fluid rounded-3 "
                  style={{
                    height: "250px",
                    objectFit: "contain",
                    width: "100%",
                  }}
                />
              </div>
              <div className="col-md-6">
                <img
                  src="/images/sitewide/GarageDoorsTechnicians.jfif"
                  alt="Chicago service area coverage map"
                  className="img-fluid rounded-3 "
                  style={{ height: "250px", objectFit: "cover", width: "100%" }}
                />
              </div>
              <div className="d-flex gap-3 justify-content-center my-3">
                <img
                  src="/images/banners/about-banner.jpg"
                  alt="Licensed and insured certification"
                  className="img-fluid rounded-2"
                  style={{
                    height: "150px",
                    objectFit: "contain",
                    width: "48%",
                    backgroundColor: "#f8f9fa",
                    border: "1px solid #e9ecef",
                  }}
                />
                <img
                  src="/images/banners/residential-gif"
                  alt="Technician performing service"
                  className="img-fluid rounded-2"
                  style={{
                    height: "150px",
                    objectFit: "contain",
                    width: "48%",
                    backgroundColor: "#f8f9fa",
                    border: "1px solid #e9ecef",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section className="row align-items-center mb-5 py-4 bg-light rounded-4">
          <div className="col-lg-6 pe-lg-5">
            <h2 className="fw-bold mb-4 text-primary">Privacy Policy</h2>
            <p>
              Advanced Garage Door Inc. is committed to protecting your privacy.
              This policy outlines how we collect, use, and safeguard your
              personal information when you use our services or website.
            </p>

            <h4 className="mt-4">Information Collection</h4>
            <p>
              We collect information when you schedule services, request
              estimates, or contact our team. This may include your name,
              address, phone number, and email address.
            </p>

            <h4 className="mt-4">Data Security</h4>
            <p>
              We implement security measures to maintain the safety of your
              personal information. All sensitive/credit information is
              transmitted via Secure Socket Layer (SSL) technology.
            </p>

            <h4 className="mt-4">Policy Updates</h4>
            <p>
              This policy may be updated periodically. We will notify you of any
              changes by posting the new policy on this page.
            </p>
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="position-relative rounded-4 overflow-hidden shadow-lg">
              <img
                src="/images/sitewide/power-off-control.png"
                alt="Data privacy and security illustration"
                className="img-fluid w-100"
                style={{ minHeight: "300px", objectFit: "contain" }}
              />
              <div className="position-absolute bottom-0 start-0 end-0 bg-primary bg-opacity-90 text-white p-3">
                <h4 className="mb-0 text-center">Your Privacy Matters To Us</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Terms of Service Section */}
        <section className="row align-items-center mb-5 py-4">
          <div className="col-lg-6 pe-lg-5">
            <h2 className="fw-bold mb-4 text-primary">Terms of Service</h2>
            <p>
              By using our services, you agree to these terms and conditions.
              Please read them carefully before scheduling any services with
              Advanced Garage Door Inc.
            </p>

            <h4 className="mt-4">Service Agreements</h4>
            <p>
              All services are performed according to manufacturer
              specifications and industry standards. We provide warranties as
              outlined in your service contract.
            </p>

            <h4 className="mt-4">Payment Terms</h4>
            <p>
              Payment is due upon completion of services unless other
              arrangements have been made in advance. We accept cash, checks,
              and all major credit cards.
            </p>

            <h4 className="mt-4">Cancellation Policy</h4>
            <p>
              We require 24 hours notice for appointment cancellations. Repeated
              cancellations may result in a service fee.
            </p>
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              <img
                src="/images/sitewide/garage-door-service.avif"
                alt="Technician reviewing service agreement with customer"
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body bg-light">
                <h5 className="card-title">Clear Service Terms</h5>
                <p className="card-text">
                  We ensure all terms are clearly explained before beginning any
                  work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright Section */}
        <section className="row align-items-center py-4 bg-dark text-white rounded-4">
          <div className="col-lg-6 pe-lg-5">
            <h2 className="fw-bold mb-4 text-light">Copyright Information</h2>
            <p>
              © {new Date().getFullYear()} Advanced Garage Door Inc. All rights
              reserved.
            </p>

            <h4 className="mt-4">Content Usage</h4>
            <p>
              All content on this website, including text, graphics, logos, and
              images, is the property of Advanced Garage Door Inc. and protected
              by copyright laws.
            </p>

            <h4 className="mt-4">Permissions</h4>
            <p>
              For permission to use any materials from this site, please contact
              us at
              <a
                href="mailto:info@advancedgaragedoorinc.com"
                className="text-white"
              >
                {" "}
                info@advancedgaragedoorinc.com
              </a>
              .
            </p>
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="position-relative">
              <img
                src="/images/company-logo-full.jpg"
                alt="Advanced Garage Door Inc. logo"
                className="img-fluid rounded-3"
                style={{ maxHeight: "300px", objectFit: "contain" }}
              />
              <div className="text-center mt-3">
                <p className="mb-0">
                  <i className="fas fa-phone-alt me-2"></i>
                  <a href="tel:877-523-6677" className="text-white">
                    877-523-6677
                  </a>
                </p>
                <p className="mb-0">
                  <i className="fas fa-envelope me-2"></i>
                  <a
                    href="mailto:info@advancedgaragedoorinc.com"
                    className="text-white"
                  >
                    info@advancedgaragedoorinc.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
