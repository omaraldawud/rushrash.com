// src/components/sections/CaseStudies.jsx
import { useState, useEffect } from "react";
import CaseStudyCard from "../cards/CaseStudyCard";
import caseStudies from "../../assets/data/case_studies_ds";
import "../../assets/css/CaseStudies.css";

// Tabs with labels + icons
const tabTypes = [
  { label: "All", value: "all", icon: "bi-layers" },
  { label: "Residential", value: "residential", icon: "bi-house-door" },
  { label: "Commercial", value: "commercial", icon: "bi-building" },
  { label: "Access Control", value: "access_control", icon: "bi-key" },
  { label: "IT & Network", value: "it", icon: "bi-hdd-network" },
  { label: "PA System", value: "pa", icon: "bi-bi-megaphone" },

  {
    label: "Local Chicago Wildlife Monitoring",
    value: "featured",
    icon: "bi-eye",
  },
];

const normalizeCategory = (cat) =>
  cat?.toLowerCase().replace(/\s+/g, "_") || "all";

const CaseStudies = ({ category = "all" }) => {
  const [activeTab, setActiveTab] = useState(category);

  // sync with parent-provided category
  useEffect(() => {
    setActiveTab(category);
  }, [category]);

  // filter data
  const filteredStudies =
    activeTab === "all"
      ? caseStudies
      : caseStudies.filter(
          (study) => normalizeCategory(study.studyType) === activeTab
        );
  //logs
  console.log("ActiveTab: ", activeTab);
  console.log("filtered cases: ", filteredStudies);

  return (
    <section id="case-studies" className="p-3 bg-success-subtle rounded-4">
      <div className="container">
        <div className="mb-4 text-center">
          <p className="lead">
            See how we've helped homeowners and businesses across Chicago
          </p>
        </div>

        {/* Tabs only if no external category filter is active */}
        {category === "all" && (
          <div className="d-flex justify-content-center mb-4 flex-wrap gap-2">
            {tabTypes.map((t) => (
              <button
                key={t.value}
                className={`case-tab-btn ${
                  activeTab === t.value ? "active" : ""
                }`}
                onClick={() => setActiveTab(t.value)}
              >
                <i className={`bi ${t.icon} me-2`}></i>
                {t.label}
              </button>
            ))}
          </div>
        )}

        {/* Case Study Cards */}
        <div className="row justify-content-center">
          <div className="col-lg-12">
            {filteredStudies.length > 0 ? (
              filteredStudies.map((study, index) => (
                <CaseStudyCard key={index} study={study} />
              ))
            ) : (
              <p className="text-center text-muted">
                No case studies available for this category.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
