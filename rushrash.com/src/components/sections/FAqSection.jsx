import { Accordion } from "react-bootstrap";

const FaqSection = () => {
  return (
    <div className="section-box rounded-top-4  bg-dark  py-4 px-3 px-md-5">
      <div>
        <h2 className="text-uppercase " style={{ color: "#add8e6" }}>
          Frequently Asked Questions
        </h2>
        <p className="text-warning">garage door repair & maintenance help</p>
      </div>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0" className="mb-3 ">
          <Accordion.Header>
            <i className="bi bi-currency-dollar me-2 "></i>
            <span className="text-success ">
              How much does garage door installation cost?
            </span>
          </Accordion.Header>
          <Accordion.Body>
            Prices vary depending on size, style, and materials. We offer free
            estimates and affordable solutions.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" className="mb-3">
          <Accordion.Header>
            <i className="bi bi-clock-history me-2"></i>
            <span className="text-success ">
              Do you offer 24/7 emergency repair services?
            </span>
          </Accordion.Header>
          <Accordion.Body>
            Yes, we provide 24/7/365 emergency garage door repairs across the
            Chicago suburbs.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" className="mb-3">
          <Accordion.Header>
            <i className="bi bi-truck me-2"></i>
            <span className="text-success ">Which areas do you serve?</span>
          </Accordion.Header>
          <Accordion.Body>
            <span className="text-success ">
              We proudly serve Naperville, Arlington Heights, Palatine, Hoffman
              Estates, and many more.
            </span>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" className="mb-3">
          <Accordion.Header>
            <i className="bi bi-tools me-2"></i>
            <span className="text-success ">
              Do you service all garage door brands?
            </span>
          </Accordion.Header>
          <Accordion.Body>
            Yes, we work with Amarr, Wayne Dalton, LiftMaster, C.H.I., IDEAL
            Door, Clopay, and others.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4" className="mb-3">
          <Accordion.Header>
            <i className="bi bi-patch-check me-2"></i>
            <span className="text-success ">
              Are your technicians licensed and insured?
            </span>
          </Accordion.Header>
          <Accordion.Body>
            Absolutely. All our technicians are fully licensed, bonded, and
            insured professionals.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5" className="mb-3">
          <Accordion.Header>
            <i className="bi bi-shield-check me-2"></i>
            <span className="text-success ">
              What kind of warranty do you offer?
            </span>
          </Accordion.Header>
          <Accordion.Body>
            We offer generous warranties on parts and labor. Details are
            available on our Warranty page.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6" className="mb-3">
          <Accordion.Header>
            <i className="bi bi-gear-wide-connected me-2"></i>
            <span className="text-success ">
              Can I replace just one garage door panel?
            </span>
          </Accordion.Header>
          <Accordion.Body>
            In some cases, yes. It depends on the damage and model. Contact us
            for a free evaluation.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7" className="mb-3">
          <Accordion.Header>
            <i className="bi bi-journal-text me-2"></i>
            <span className="text-success ">
              Do you have resources to help homeowners?
            </span>
          </Accordion.Header>
          <Accordion.Body>
            Yes! Check out our garage door blog with DIY tips, maintenance
            advice, and repair guidance.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FaqSection;
