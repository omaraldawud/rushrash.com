// src/pages/ArticleLanding.jsx
import { useState } from "react";

//json,TL
import SEOMeta from "../components/seo/SEOMeta";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "../schemas";

//css

//compopnents
import CaseStudies from "../components/sections/CaseStudies";
import SafetyTips from "../components/functional/SafetyTips";
import ArticleList from "../components/articles/ArticleList";
import infoIMG1 from "../assets/images/brands/lts/products/dvrs/TVI-DVR-16-Channel-ltd8316d.png";
import infoIMG2 from "../assets/images/brands/lts/products/dvrs/TVI-DVR-16-Channel-ltd8316d.png";
import PageInfoBox from "../components/cards/PageInfoBox";

//util function
import { mapCategoryName } from "../utils/mapCategoryName";

//list -
const categories = ["cctv", "access_control", "pa", "it", "alarm"];

export default function ArticleLanding() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filterByCategory = (items) =>
    activeCategory === "all"
      ? items
      : items.filter(
          (item) =>
            item.category?.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <>
      <div>
        {/* Breadcrumb */}
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://rushrashinc.com" },
            { name: "Articles", url: "https://rushrashinc.com/articles" },
          ]}
        />
        {/* SEO Meta */}
        <SEOMeta
          title="Security Articles & Guides | CCTV, Access Control, Alarms & PA Systems"
          description="Read expert articles on CCTV inspection, access control design, alarm detection, PA systems, and IT services. Stay updated with security tips from Rushrash Inc."
          keywords="security articles, CCTV tips, access control guides, alarm detection systems, PA system setup, cybersecurity"
          url="https://rushrashinc.com/articles"
          image="https://rushrashinc.com/images/articles/articles-landing-banner.jpg"
          twitterHandle="@RushrashInc"
        />
        {/* FAQ Schema */}
        <FAQSchema
          questions={[
            {
              question: "What type of security topics do your articles cover?",
              answer:
                "Our articles cover CCTV inspection, access control systems, alarm detection, PA systems, cybersecurity, and smart security solutions.",
            },
            {
              question: "Are your articles written by security professionals?",
              answer:
                "Yes. All content is written and reviewed by our certified CCTV, access control, and IT service experts at Rushrash Inc.",
            },
            {
              question: "How often are new articles published?",
              answer:
                "We publish fresh security guides, case studies, and system tips every month to keep our readers updated.",
            },
            {
              question: "Can I share or republish your articles?",
              answer:
                "You are welcome to share our articles with proper attribution, but commercial republishing requires written permission from Rushrash Inc.",
            },
          ]}
        />

        {/* Service Schema (related to article categories) */}
        <ServiceSchema
          services={[
            {
              name: "CCTV System Guides",
              description:
                "Expert insights on CCTV installation, inspection, and maintenance for reliable home and business security.",
              serviceType: "ConsultationService",
            },
            {
              name: "Access Control Guides",
              description:
                "Articles on biometric access, smart controllers, and entry-point security for businesses and residential properties.",
              serviceType: "ConsultationService",
            },
            {
              name: "Alarm Detection System Guides",
              description:
                "Step-by-step tips on alarm testing, setup, and monitoring for maximum property protection.",
              serviceType: "ConsultationService",
            },
            {
              name: "Public Address (PA) System Guides",
              description:
                "Tips for optimizing public address and sound communication systems for reliability and clarity.",
              serviceType: "ConsultationService",
            },
            {
              name: "IT & Cybersecurity Insights",
              description:
                "Guides on network setup, IT integration, and cybersecurity solutions to support security systems.",
              serviceType: "ConsultationService",
            },
          ]}
        />
      </div>
      <PageInfoBox
        pageType="articles"
        info_image1={infoIMG1}
        info_image2={infoIMG2}
      />
      <div
        className="position-relative px-5 rounded-4 overflow-hidden shadow-sm"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/src/assets/images/articles/article-landing-preview.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Content */}
        <div className="position-relative z-10 text-white">
          <h2 className="mb-3 fw-bold display-5">Articles & Guides</h2>
          <p className="mb-4 fs-5">
            Explore our latest insights on CCTV, access control, alarm systems,
            and security best practices to keep your property safe.
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-end">
            <button className="btn btn-light btn-lg px-4 py-2">
              <i className="bi bi-bookmark me-2"></i>Free Site Survey
            </button>
          </div>
        </div>

        {/* Overlay badge */}
        <div className="position-absolute top-0 end-0 m-3">
          <span className="badge bg-warning text-dark fs-6 p-2">
            <i className="bi bi-star-fill me-1"></i>Access Control Knowledge
            Center
          </span>
        </div>
      </div>

      <div className="container my-5 pb-3 bg-dark rounded-4">
        {/* Filter Buttons */}
        <div className="d-flex justify-content-center pt-3 flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn px-4 py-2 position-relative ${
                activeCategory === cat
                  ? "btn-gradient text-white shadow"
                  : "btn-light text-dark border-0 shadow-sm"
              }`}
              style={{
                borderRadius: "15px",
                transition: "all 0.3s ease",
                minWidth: "160px",
                fontWeight: "600",
                background:
                  activeCategory === cat
                    ? "linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%)"
                    : "#f8f9fa",
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat) {
                  e.target.style.background =
                    "linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%)";
                  e.target.style.transform = "translateY(-2px)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat) {
                  e.target.style.background = "#f8f9fa";
                  e.target.style.transform = "translateY(0)";
                }
              }}
              onClick={() => setActiveCategory(cat)}
            >
              <div className="d-flex align-items-center">
                {/* Icon on the left with margin */}
                {cat === "cctv" && (
                  <i className="bi bi-camera-video fs-5 me-2"></i>
                )}
                {cat === "access_control" && (
                  <i className="bi bi-shield-lock fs-5 me-2"></i>
                )}
                {cat === "pa" && <i className="bi bi-speaker fs-5 me-2"></i>}
                {cat === "it" && <i className="bi bi-laptop fs-5 me-2"></i>}
                {cat === "all" && <i className="bi bi-grid-3x3 fs-5 me-2"></i>}

                {/* Text - FIXED: Proper capitalization for display */}
                <span className="small">
                  {cat === "access_control"
                    ? "ACCESS CONTROL"
                    : cat.toUpperCase()}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Articles */}

        <section className="mb-5">
          <h2 className="text-center my-5 text-light">
            <i className="bi bi-journal-text me-3 text-warning"></i>
            Articles & Guides
            <i className="bi bi-journal-text ms-3 text-warning"></i>
          </h2>
          <div className="p-4 bg-light rounded-4 shadow-sm">
            <ArticleList category={activeCategory} />
          </div>
        </section>

        {/* Safety Tips Section */}
        <section className="mb-5">
          <h2 className="text-center my-5 text-light">
            <i className="bi bi-shield-exclamation me-3 text-warning"></i>
            Safety Tips - {mapCategoryName(activeCategory).toUpperCase()}
            <i className="bi bi-shield-exclamation ms-3 text-warning"></i>
          </h2>
          <div className="p-4 bg-light rounded-4 shadow-sm">
            <SafetyTips category={activeCategory} />
          </div>
        </section>
      </div>
    </>
  );
}
