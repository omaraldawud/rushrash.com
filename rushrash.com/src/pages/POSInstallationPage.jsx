//
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import FaqSection from "../components/sections/FAqSection";
import PageInfoBox from "../components/cards/PageInfoBox";
import SEOMeta from "../components/seo/SEOMeta";
import { ServiceSchema, FAQSchema } from "../schemas";

// Function
export default function POSInstallationPage() {
  return (
    <Container fluid>
      {/* JSON-LS for Home Page */}
      {/* only Featured Services for home page*/}
      <ServiceSchema services={ServiceSchema} />
      <FAQSchema
        questions={[
          {
            question: "How often should garage door springs be replaced?",
            answer:
              "Torsion springs typically last 7-10 years with normal use.",
          },
          {
            question: "Is spring replacement dangerous?",
            answer:
              "Yes! Springs are under extreme tension - always hire a professional.",
          },
        ]}
      />
      <SEOMeta
        title="Garage Door Repair in Naperville, Aurora | Broken Spring Fix & Replacement"
        description="Emergency garage door repair specialists serving [City]. Fast response for broken springs, off-track doors, opener failures, and more. 15-minute arrival guarantee - 24/7 service available."
        keywords="garage door repair, broken spring replacement, garage door off track, opener not working, emergency garage door service, [City] garage door company, torsion spring repair, cable replacement"
        url="https://www.advancedgaragedoorinc.com/garage-door-repair-[city]"
        image="https://www.advancedgaragedoorinc.com/images/emergency-garage-repair-tech.jpg"
        twitterHandle="@AdvancedGarageDoor"
      />
      {/* Welcome Section */}
      <PageInfoBox
        pageType="services"
        info_title="Chicagoland & Naperville’s Most Reliable Garage Door Services—Fast, Durable & Worry-Free!"
        info_top_title="garage door repair & installation services"
        info_mid_text="Professional garage door services ensure your door operates smoothly, safely, and efficiently—offering repairs, maintenance, and installations to keep your home secure and convenient."
        info_link1="/garage_door_contactus.html"
        link1_text="Free Estimate"
        info_link2="/garage_door_openers.html"
        link2_text="Openers Selection"
        info_image1="/images/services/broken-springs-technician.jpg"
        info_image2="/images/parts/torsion_springs.png"
        info_image3="/images/services/broken-garage-door.jpg"
      />
      {/* Services Cards */}
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5 gap-3">
          <h2 className="mb-0 text-center text-md-start">
            Garage Door Services
          </h2>

          <Link
            className="btn btn-primary w-70 w-md-auto"
            to="/garage_door_residential.html"
          >
            view residential doors and services
          </Link>
        </div>
      </div>

      {/* Local Customer Jobs */}
      <Row className="rounded shadow-sm">
        <Col>
          <section class="customer-feedback bg-light ">
            <div class="container">
              {/* <!-- Customer Testimonial Card --> */}
              <div class="card mb-5 shadow-sm border-0">
                <div class="card-header bg-primary text-white">
                  <h3 class="h5 fs-2 mb-0">Recent notes from our customers</h3>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6">
                      <ul class="list-unstyled">
                        <li>
                          <strong>Subject:</strong> Spring replacement
                        </li>
                        <li>
                          <strong>Suburb:</strong> Naperville
                        </li>
                        <li>
                          <strong>When:</strong> Friday, November 5, 2010, 4:18
                          am
                        </li>
                        <li>
                          <strong>Name:</strong> Lee Sussman
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <blockquote class="blockquote mb-0">
                        <p>
                          "Yesterday, your technician replaced my garage door
                          spring and rollers in a friendly, fast, and very
                          professional manner. I would definitely recommend your
                          firm to anyone in need of your services."
                        </p>
                        <footer class="blockquote-footer">Lee Sussman</footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div class="card-footer bg-white text-end">
                  <a href="/testimonials" class="btn btn-outline-primary">
                    Read more testimonials →
                  </a>
                </div>
              </div>

              {/* <!-- Service Examples --> */}
              <h2 class="h4 text-center mb-4">
                Recent garage door services in your area
              </h2>
              <div class="row g-4">
                {/* <!-- Service Example 1 --> */}
                <div class="col-md-6 col-lg-4">
                  <div class="card h-100 border-start border-3 border-danger">
                    <div class="card-body">
                      <h3 class="h6 card-title text-danger">St Charles, IL</h3>
                      <p class="card-text">
                        Broken bottom bracket made left cable loose and door got
                        crooked. Customer attempted DIY repair which worsened
                        the situation. Replaced bottom brackets and balanced
                        door.
                      </p>
                    </div>
                  </div>
                </div>

                {/* <!-- Service Example 2 --> */}
                <div class="col-md-6 col-lg-4">
                  <div class="card h-100 border-start border-3 border-warning">
                    <div class="card-body">
                      <h3 class="h6 card-title text-warning">Gurnee, IL</h3>
                      <p class="card-text">
                        Door off track due to snapped cable. Installed new
                        cables and restored door to track.{" "}
                        <strong>Note:</strong> Never force a door with snapped
                        cables.
                      </p>
                    </div>
                  </div>
                </div>

                {/* <!-- Service Example 3 --> */}
                <div class="col-md-6 col-lg-4">
                  <div class="card h-100 border-start border-3 border-success">
                    <div class="card-body">
                      <h3 class="h6 card-title text-success">Naperville, IL</h3>
                      <p class="card-text">
                        Installed torsion springs, lubricated door, and
                        performed opener tune-up for optimal performance.
                      </p>
                    </div>
                  </div>
                </div>
                <small>
                  Testimonials from Plainfield, Chicago, Arlington Heights,
                  Romeoville, Lockport, Westchester, Naperville, Hoffman
                  Estates, Palatine, Naperville, Woodridge, Winfield, Downers
                  Grove. more
                </small>
                {/* <!-- Additional examples would follow same pattern --> */}
              </div>
            </div>
          </section>
        </Col>
      </Row>
      {/* Testimonials */}
      <Row className="mt-5 py-5 bg-light rounded shadow-sm">
        <Col>
          <FaqSection />
        </Col>
      </Row>
    </Container>
  );
}
