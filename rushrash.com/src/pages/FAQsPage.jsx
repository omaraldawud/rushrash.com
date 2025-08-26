import SEOMeta from "../components/seo/SEOMeta";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "../schemas";
import PageInfoBox from "../components/cards/PageInfoBox";

export default function FAQsPage() {
  const faqs = [
    {
      question: "How do I know if my garage door springs need replacement?",
      answer:
        "Signs include: 1) Door closes too fast, 2) Visible gaps in torsion springs, 3) Stretched extension springs, 4) Loud snapping noises, 5) Door won't stay open halfway. Springs typically last 7-12 years (torsion) or 3-7 years (extension).",
    },
    {
      question: "Is it dangerous to replace garage door springs myself?",
      answer:
        "Extremely dangerous. Torsion springs store enough energy to cause serious injury. Professional technicians use special winding bars and safety equipment. We strongly recommend against DIY spring replacement.",
    },
    {
      question: "Why won't my garage door open?",
      answer:
        "Common causes: 1) Broken springs (most frequent), 2) Misaligned safety sensors, 3) Dead opener batteries, 4) Disconnected power, 5) Frozen tracks in winter. Our technicians can diagnose and fix most issues within an hour.",
    },
    {
      question: "What's the difference between torsion and extension springs?",
      answer:
        "Torsion springs mount above the door (safer, longer-lasting). Extension springs run along tracks (require safety cables). We recommend torsion systems for their durability and safety features.",
    },
    {
      question: "How much does spring replacement cost?",
      answer:
        "Typical costs: $149-$249 for single spring replacement, $199-$349 for dual springs. Price depends on spring type, size, and labor. We offer free estimates and upfront pricing.",
    },
    {
      question: "Can you replace just one spring if I have two?",
      answer:
        "We recommend replacing both springs simultaneously. If one fails, the other is near failure. Replacing both ensures balanced operation and prevents another service call soon.",
    },
    {
      question: "Why does my garage door shake when opening/closing?",
      answer:
        "Usually caused by: 1) Worn rollers, 2) Loose hardware, 3) Improper spring tension, 4) Damaged tracks. Our tune-up service ($89) typically resolves these issues.",
    },
    {
      question: "How often should I lubricate my garage door?",
      answer:
        "Every 6 months. Use white lithium grease on springs and silicone spray on rollers/tracks. Avoid WD-40 as it attracts dirt. Proper lubrication extends spring life by 30-40%.",
    },
    {
      question: "What maintenance prevents spring failure?",
      answer:
        "1) Bi-annual lubrication, 2) Monthly visual inspections, 3) Professional tune-ups yearly, 4) Keeping tracks clean, 5) Balancing tests every 2 years.",
    },
    {
      question: "Do you offer warranties on spring replacements?",
      answer:
        "Yes! All our spring replacements come with: 1) 1-year labor warranty, 2) Manufacturer's spring warranty (typically 10,000 cycles), 3) 30-day satisfaction guarantee.",
    },
    {
      question: "How quickly can you respond to emergency spring repairs?",
      answer:
        "Most emergency calls receive same-day service (often within 2-4 hours). We prioritize safety hazards like broken springs. Call (555) 123-4567 for immediate dispatch.",
    },
    {
      question: "Why does my garage door reverse when closing?",
      answer:
        "Usually indicates: 1) Misaligned safety sensors (clean lenses first), 2) Excessive closing force setting, 3) Binding tracks, or 4) Weak springs. Our $29 sensor alignment service often fixes this.",
    },
  ];

  return (
    <>
      <div>
        {/* JSON-LD Schemas */}
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://advancedgaragedoorinc.com/" },
            {
              name: "FAQs",
              url: "https://advancedgaragedoorinc.com/garage-door-faqs.html",
            },
          ]}
        />
        <FAQSchema questions={faqs} />
        <ServiceSchema
          services={[
            {
              name: "Emergency Spring Replacement",
              description:
                "24/7 service for broken torsion or extension springs",
              offers: { price: "149" },
            },
            {
              name: "Complete Spring System Tune-Up",
              description:
                "Includes lubrication, cable adjustment, and safety testing",
              offers: { price: "89" },
            },
            {
              name: "Garage Door Balance Test",
              description: "Verifies proper spring tension and door operation",
              offers: { price: "39" },
            },
            {
              name: "Safety Sensor Alignment",
              description: "Precision adjustment of auto-reverse sensors",
              offers: { price: "29" },
            },
            {
              name: "Annual Maintenance Package",
              description: "Full inspection, lubrication, and adjustments",
              offers: { price: "99" },
            },
          ]}
        />

        <SEOMeta
          title="Garage Door FAQs | Spring Replacement & Repair Questions"
          description="Expert answers to common garage door questions - spring replacement costs, safety concerns, troubleshooting, and maintenance tips. 24/7 emergency service available."
          keywords="garage door springs, torsion spring replacement, broken garage door, door won't open, spring repair cost, garage door maintenance, emergency repair"
          url="https://www.advancedgaragedoorinc.com/garage-door-faqs.html"
          image="https://www.advancedgaragedoorinc.com/images/spring-replacement.jpg"
          twitterHandle="@AdvancedGarageDoor"
        />
      </div>

      <div className="container py-4">
        <div className="container">
          <PageInfoBox
            pageType="faq"
            info_title="Garage Doors Frequently Asked Questions"
            info_top_title="Answers to Common Garage Door Questions"
            info_mid_text="Find quick answers to the most common garage door questions our customers ask, from troubleshooting and maintenance tips to warranty details and emergency service availability. Our goal is to help you stay informed and confident about your garage door needs."
            info_link1="/garage_door_contactus.html"
            link1_text="Ask a Question"
            info_link2="/legal-page.html"
            link2_text="Warranty & Legal Info"
          />
        </div>

        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${
                    index === 0 ? "" : "collapsed"
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse ${
                  index === 0 ? "show" : ""
                }`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 text-center  bg-light p-4 rounded">
          <h3 className="text-center mb-3">Need Immediate Help?</h3>
          <p className="text-center">
            Call our 24/7 garage door emergency service hotline at{" "}
            <strong>(630) 241-2481</strong>
          </p>
          <div className="d-grid gap-2 col-md-6 mx-auto">
            <a href="tel:6302412481">
              <button className="btn btn-danger btn-lg" type="button">
                <i className="bi bi-telephone-fill me-2"></i>
                Request Emergency Service
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
