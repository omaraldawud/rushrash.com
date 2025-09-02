//

// src/components/cards/CaseStudyCard.jsx
import React from "react";

const CaseStudyCard = ({ study }) => {
  const {
    image,
    altText,
    category,
    title,
    stats,
    overview,
    services,
    results,
    isFeatured = false,
  } = study;

  return (
    <div className="case-study-card bg-white rounded-4 shadow-sm overflow-hidden mb-4">
      <div className="row g-0">
        {/* Image Section */}
        <div className="col-md-3">
          <div className="position-relative h-100">
            <img
              src={image}
              alt={altText}
              className="img-fluid h-100 object-fit-cover"
            />
            {isFeatured && (
              <div className="position-absolute top-0 start-0 bg-success text-white px-3 py-2">
                <span className="fw-bold">Featured Project</span>
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="col-md-9">
          <div className="p-4 p-lg-5">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-primary rounded-circle p-2 me-3">
                <i className={`bi ${category.icon} text-white fs-4`}></i>
              </div>
              <div>
                <span className="text-muted small">{category.name}</span>
                <h4 className="mb-0">{title}</h4>
              </div>
            </div>

            {stats && (
              <div className="row mb-4">
                {stats.map((stat, index) => (
                  <div key={index} className="col-6">
                    <div className="text-center p-3 bg-light rounded-3">
                      <div className="fw-bold text-primary fs-3">
                        {stat.value}
                      </div>
                      <div className="text-muted small">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <h5 className="mb-3">Project Overview</h5>
            <p className="text-muted">{overview}</p>

            {services && (
              <div className="mb-4">
                <h6 className="mb-2">Services Provided:</h6>
                <div className="d-flex flex-wrap gap-2">
                  {services.map((service, index) => (
                    <span
                      key={index}
                      className="badge bg-primary bg-opacity-10 text-primary"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {results && (
              <div className="mb-4">
                <h6 className="mb-2">Key Results:</h6>
                <ul className="list-unstyled">
                  {results.map((result, index) => (
                    <li key={index} className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="d-flex gap-2">
              <button className="btn btn-outline-primary btn-sm">
                <i className="bi bi-calendar me-2"></i>Schedule {category.name}
                {} Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
