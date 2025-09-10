import { useState } from "react";
import { Tabs, Tab, Card, Container } from "react-bootstrap";
import testimonialData from "../../assets/data/testimonialData";
import { BsPersonFill, BsStarFill, BsYelp, BsGoogle } from "react-icons/bs";
import "../../assets/css/Testimonials.css";

const TestimonialTabs = () => {
  const [activeKey, setActiveKey] = useState(Object.keys(testimonialData)[0]);

  return (
    <section className="py-5 bg-dark text-light rounded-top-4 py-3 px-3">
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3 testimonial-header">
          <div>
            <h2
              className="mb-0 text-center text-md-start text-uppercase"
              style={{ color: "#add8e6" }}
            >
              What Our Customers Say
            </h2>
            <p className="text-warning">garage door repair reviews</p>
          </div>
          <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
            <a
              href="https://www.yelp.com/biz/advanced-garage-door-company-naperville"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light px-2 py-1 d-flex align-items-center gap-1 review-btn"
            >
              <BsYelp className="fs-5" />
              <span className="d-none d-sm-inline">Yelp Reviews</span>
            </a>
            <a
              href="https://g.page/your-business"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light px-2 py-1 d-flex align-items-center gap-1 review-btn"
            >
              <BsGoogle className="fs-5" />
              <span className="d-none d-sm-inline">Google Reviews</span>
            </a>
          </div>
        </div>

        <div className="testimonial-description">
          <p>
            We have received hundreds of feedback and complements on security
            services. bla blas bla
          </p>
        </div>

        <div
          className="testimonial-section p-4 rounded-4"
          style={{ backgroundColor: "#f8f9fa", border: "1px solid #e9ecef" }}
        >
          <Tabs
            id="testimonial-tabs"
            activeKey={activeKey}
            onSelect={(k) => setActiveKey(k || "")}
            className="mb-4"
          >
            {Object.entries(testimonialData).map(([city, testimonials]) => (
              <Tab
                eventKey={city}
                title={<span className="fw-semibold">{city}</span>}
                key={city}
                tabClassName="border-0 bg-transparent px-3 py-2 rounded-1"
                activeTabClassName="bg-primary text-white"
              >
                <div className="d-flex flex-column gap-3 mt-3">
                  {testimonials.map((testimonial, index) => (
                    <Card
                      key={index}
                      className="border-0 shadow-sm rounded-3 overflow-hidden"
                    >
                      <Card.Body className="p-4">
                        <div className="d-flex align-items-start mb-3">
                          <div className="bg-light rounded-circle p-3 me-3 d-none d-md-block">
                            <BsPersonFill className="text-primary" size={24} />
                          </div>
                          <div>
                            <Card.Text
                              className="fst-italic fs-5 mb-2"
                              style={{ lineHeight: 1.4 }}
                            >
                              "{testimonial.quote}"
                            </Card.Text>
                            <div className="d-flex align-items-center mb-2">
                              <BsStarFill className="text-warning me-1" />
                              <BsStarFill className="text-warning me-1" />
                              <BsStarFill className="text-warning me-1" />
                              <BsStarFill className="text-warning me-1" />
                              <BsStarFill
                                className={
                                  testimonial.rating >= 5
                                    ? "text-warning"
                                    : "text-secondary"
                                }
                              />
                              <span className="ms-2 text-muted">
                                {testimonial.rating}/5
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-light p-3 rounded-2">
                          <Card.Text className="mb-1">
                            <strong>Project:</strong> {testimonial.project}
                          </Card.Text>
                          <Card.Text className="mb-0">
                            <strong>Customer:</strong> {testimonial.customer}
                          </Card.Text>
                          <Card.Text className="mb-0">
                            <strong>City:</strong> {testimonial.review_city}
                          </Card.Text>
                        </div>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              </Tab>
            ))}
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialTabs;
