import { Accordion } from "react-bootstrap";
import { faqs } from "../../assets/data/faqs";

const FAQsSection = ({ faqServiceType = "CCTV" }) => {
  const filteredFaqs = faqs.filter(
    (faq) => faq.faqServiceType.toLowerCase() === faqServiceType.toLowerCase()
  );

  return (
    <div className="section-box rounded-top-4 bg-dark py-4 px-3 px-md-5">
      <div>
        <h2 className="text-uppercase" style={{ color: "#add8e6" }}>
          Frequently Asked Questions
        </h2>
        <p className="text-warning">{faqServiceType.toUpperCase()} Services</p>
      </div>

      <Accordion defaultActiveKey="0" flush>
        {filteredFaqs.map((faq, index) => (
          <Accordion.Item
            key={faq.id}
            eventKey={index.toString()}
            className="mb-3"
          >
            <Accordion.Header>
              <i className={`bi ${faq.icon} me-2`}></i>
              <span className="text-success">{faq.question}</span>
            </Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQsSection;
