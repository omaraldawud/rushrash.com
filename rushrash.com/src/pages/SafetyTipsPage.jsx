import safety_tips_ds from "../assets/data/safety_tips_ds";
import PageInfoBox from "../components/cards/PageInfoBox";
import SvgSpringIcon from "../components/helpers/SvgSpringIcon";

// Metas and JSON-LD Schemas import
import SEOMeta from "../components/seo/SEOMeta";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "../schemas";

export default function SafetyTipsPage() {
  // Combine all tips from all paths
  const allTips = safety_tips_ds.flatMap((item) => item.tips);

  return (
    <>
      <div>
        {/* JSON-LS for Home Page */}
        <BreadcrumbSchema
          items={[
            {
              name: "Home",
              url: "https://advancedgaragedoorinc.com/garage_door_safety_tips.html",
            },
          ]}
        />
        <FAQSchema
          questions={[
            {
              question: "Do garage doors need annual maintenance?",
              answer:
                "Yes! Yearly professional maintenance of doors and openers prevents 85% of emergency repairs by catching worn springs, misaligned sensors, and lubrication needs early.",
            },
            {
              question: "What garage door brands do you install?",
              answer:
                "We're authorized dealers for top-rated residential brands including C.H.I, Amarr, and Clopay doors - all backed by manufacturer warranties.",
            },
            {
              question: "Do you offer emergency repairs for homeowners?",
              answer:
                "Yes! Our 24/7 emergency service handles broken springs, off-track doors, and opener failures with same-day response in most cases.",
            },
          ]}
        />
        {/* only Featured Services for home page*/}
        <ServiceSchema
          services={[
            {
              name: "Free Door Estimates",
              description: "On-site measurements and price quotes",
            },
            {
              name: "Over the Phone Estimates",
              description: "Call us estimate and price quotes",
            },
            {
              name: "Emergency Garage Door Spring Replacement",
              description:
                "24/7 Garage Door torsion spring repair oe replacement",
              offers: { price: "149" },
            },
            {
              name: "Service Call",
              description: "Garage Door Service Call",
              offers: { price: "75" },
            },
          ]}
        />
        {/* <SEO {...pageData} /> */}
        <SEOMeta
          title="Garage Door Safety Tips | Springs Safety Tips"
          description="The Professional Difference, the Advanced Garage Door experts will diagnose the problem and prescribe a solution for your it."
          keywords="Garage Door Opener, Garage Door Safety, Garage Door Corner Brackets, Extension Springs Safety, Torsion Springs Safety,Springs Safety"
          url="https://www.advancedgaragedoorinc.com/"
          image="https://www.advancedgaragedoorinc.com/images/garage-door-service.jpg"
          twitterHandle="@AdvancedGarageDoor"
        />
      </div>
      <div className="container py-4">
        <PageInfoBox
          pageType="safetyTips"
          info_title="Garage Door Safety Tips"
          info_top_title="Keep Your Home and Family Protected"
          info_mid_text="Garage doors are heavy and powerful—taking proper precautions can prevent accidents and injuries. Follow these essential safety tips for daily use, maintenance, and emergency situations."
          info_link1="/garage_door_contactus.html"
          link1_text="Request Safety Inspection"
          info_link2="/garage_door_services.html"
          link2_text="Professional Garage Door Services"
        />

        <div className="safety-tips bg-light rounded p-4">
          <div className="d-flex align-items-center mb-4">
            <SvgSpringIcon width="48" height="48" color="orange" />
            <h2 className="mb-0">Important Garage Door Safety Information</h2>
          </div>

          <div className="row g-4">
            {allTips.map((tip, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="card shadow-sm h-100 text-center p-3">
                  {/* Icon */}
                  <i className={`bi ${tip.icon} fs-2 text-primary mb-2`}></i>

                  {/* Text */}
                  <p className="card-text">{tip.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
