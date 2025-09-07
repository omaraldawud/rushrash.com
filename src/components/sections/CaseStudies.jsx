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
  { label: "Access Control", value: "Access Control", icon: "bi-key" },
  { label: "IT2 & Network", value: "IT", icon: "bi-hdd-network" },
  {
    label: "Local Chicago Wildlife Monitoring",
    value: "featured",
    icon: "bi-eye",
  },
];

const CaseStudies = ({ tab = "all" }) => {
  const [activeTab, setActiveTab] = useState(tab);

  // keep in sync if prop changes later
  useEffect(() => {
    setActiveTab(tab);
  }, [tab]);

  // filter data
  const filteredStudies =
    activeTab === "all"
      ? caseStudies
      : caseStudies.filter((study) => study.studyType === activeTab);

  // find the current tab object for icon + label
  const currentTabObj = tabTypes.find((t) => t.value === activeTab);

  return (
    <section id="case-studies" className="p-3 bg-success-subtle rounded-4">
      <div className="container">
        <div className="mb-4 text-center">
          <h2>Access Control & Security Success Stories</h2>
          <p className="lead">
            See how we've helped homeowners and businesses across Chicago
          </p>
        </div>

        {/* Tabs Navigation */}
        {tab === "all" ? (
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
        ) : (
          // If prop passed, show only that tab title with icon (no buttons)
          <div className="d-flex justify-content-center mb-4">
            <h4 className="d-flex align-items-center">
              <i className={`bi ${currentTabObj?.icon} me-2 text-primary`}></i>
              {currentTabObj?.label}
            </h4>
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
