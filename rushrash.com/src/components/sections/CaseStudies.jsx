// src/components/section/CaseStudies.jsx
import React from "react";
import CaseStudyCard from "../cards/CaseStudyCard";

// Data Structures
import caseStudies from "../../assets/data/case_studies_ds";

//
const CaseStudies = ({ studyType = "all" }) => {
  // Filter case studies based on studyType
  const filteredStudies =
    studyType === "all"
      ? caseStudies
      : caseStudies.filter((study) => study.studyType === studyType);

  return (
    <section className="py-2 bg-light">
      <div className="container">
        <div className="m-3">
          <h2>Security Success Stories</h2>
          <p className="lead mb-5">
            See how we've helped homeowners and businesses like yours
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12">
            {filteredStudies.map((study, index) => (
              <CaseStudyCard key={index} study={study} />
            ))}
          </div>
        </div>

        {/* <div className="text-center mt-5">
          <a href="/case-studies" className="btn btn-outline-primary">
            View All Case Studies <i className="bi bi-arrow-right ms-2"></i>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default CaseStudies;
