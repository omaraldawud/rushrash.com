//
//

export default function AboutUsSection() {
  return (
    <section className="about-us p-4 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mx-auto">
            {/* Main About Content */}
            <div className="mb-5">
              <h2 className="display-5 fw-bold text-primary mb-4">
                Welcome to Advanced Garage Doors
              </h2>

              <p className="lead">
                We are proud to serve the Chicago Northwest, West, and Far West
                Suburbs as well as South suburbs.
              </p>

              <div className="mb-4">
                <p>
                  We provide the best garage doors and garage door openers
                  services and enjoy working with our customers. Our certified
                  technicians are prepared to answer all of your questions.
                </p>
                <p>
                  Whether you need repairs or installations services, Advanced
                  Garage Door Company is here to serve you and provide you with
                  high quality service and ensure that we leave you each and
                  every time with a safe garage door that provides quality
                  performance for years to come.
                </p>
              </div>

              <div className="bg-white p-4 rounded shadow-sm mb-4">
                <h3 className="h5 text-primary mb-3">Why Choose Us?</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    Available for both residential and commercial services
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    Trucks loaded with all parts needed for immediate repairs
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    Technicians on-duty 24/7/365
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    Service all makes and models of garage doors and openers
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    Licensed, bonded, and insured
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    Evening and weekend appointments available
                  </li>
                </ul>
              </div>
            </div>

            {/* Brand Partnerships */}
            <div className="mb-5">
              <h3 className="h4 text-primary mb-3">Authorized Dealers</h3>
              <p>
                We are authorized resellers and installers for{" "}
                <strong>Amarr Garage Door</strong> and
                <strong> Chamberlain/Liftmaster Door Opener</strong>. We offer
                same day service and parts for all makes of garage doors and
                openers.
              </p>
              <p>
                We offer more choices, more service, and more product knowledge.
                We hope that you find this site useful and look forward to
                working with you.
              </p>
            </div>

            {/* Services List */}
            <div>
              <h3 className="h4 text-primary mb-3">Our Services</h3>
              <div className="row">
                {[
                  "Custom Wood Doors",
                  "Broken Spring Replacement",
                  "New Doors Installation",
                  "Section Replacements",
                  "Electric Door Openers",
                  "Cable & Rollers Replacement",
                  "Service on all Makes & Models",
                  "Radio Controls",
                  "Safety Equipment",
                  "Weather Seals",
                  "Preventive Maintenance",
                  "24/7 Emergency Service",
                ].map((service, index) => (
                  <div key={index} className="col-md-6 mb-2">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-wrench text-primary me-2"></i>
                      <span>{service}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
