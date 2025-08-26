import { Link } from "react-router-dom";

import {
  BsTools,
  BsDoorOpen,
  BsWrenchAdjustable,
  BsCheckCircleFill,
  BsListUl,
} from "react-icons/bs";

export default function ServicesSection() {
  return (
    <section className="services-section py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2
              className="text-center mb-5 display-4 fw-bold"
              style={{ color: "#2E86C9" }}
            >
              Our Comprehensive Garage Door Services
            </h2>

            <div className="row g-4">
              {/* Service Category 1: Repairs */}
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-3">
                    {" "}
                    {/* Reduced padding from p-4 to p-3 */}
                    <h3 className="h5 card-title text-primary mb-3">
                      {" "}
                      {/* Changed h4 to h5 and added mb-3 */}
                      <BsTools className="me-2 flex-shrink-0 d-block" />{" "}
                      {/* Prevent icon shrink */}
                      <span
                        className="d-inline-block mt-2"
                        style={{ color: "#2E86C9" }}
                      >
                        Emergency Repairs
                      </span>{" "}
                      {/* Wrap text */}
                    </h3>
                    <ul className="list-unstyled mb-0">
                      {" "}
                      {/* Added mb-0 to remove default margin */}
                      <li className="mb-2 d-flex">
                        <BsCheckCircleFill className="text-success mt-1 me-2 flex-shrink-0" />
                        <span className="text-wrap">
                          Broken Spring Replacement
                        </span>{" "}
                        {/* Added text-wrap */}
                      </li>
                      <li className="mb-2 d-flex">
                        <BsCheckCircleFill className="text-success mt-1 me-2 flex-shrink-0" />
                        <span className="text-wrap">
                          Cable & Rollers Replacement
                        </span>
                      </li>
                      <li className="mb-2 d-flex">
                        <BsCheckCircleFill className="text-success mt-1 me-2 flex-shrink-0" />
                        <span className="text-wrap">Section Replacements</span>
                      </li>
                      <li className="mb-2 d-flex">
                        <BsCheckCircleFill className="text-success mt-1 me-2 flex-shrink-0" />
                        <span className="text-wrap">
                          Service on All Makes & Models
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Service Category 2: Installations */}
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-3">
                    <h3 className="h5 card-title text-primary mb-3">
                      {" "}
                      {/* Changed h4 to h5 and added mb-3 */}
                      <BsWrenchAdjustable className="me-2 flex-shrink-0 d-block" />{" "}
                      {/* Prevent icon shrink */}
                      <span
                        className="d-inline-block mt-2"
                        style={{ color: "#2E86C9" }}
                      >
                        New Installation
                      </span>{" "}
                      {/* Wrap text */}
                    </h3>
                    <ul className="list-unstyled">
                      <li className="mb-2 d-flex align-items-start">
                        <BsCheckCircleFill className="text-success mt-1 me-2" />
                        <span>Custom Wood Doors</span>
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <BsCheckCircleFill className="text-success mt-1 me-2" />
                        <span>New Garage Doors</span>
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <BsCheckCircleFill className="text-success mt-1 me-2" />
                        <span>Electric Door Openers</span>
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <BsCheckCircleFill className="text-success mt-1 me-2" />
                        <span>Radio Controls</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Service Category 3: Maintenance */}
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-3">
                    <h3 className="h5 card-title text-primary mb-3">
                      {" "}
                      {/* Changed h4 to h5 and added mb-3 */}
                      <BsTools className="me-2 flex-shrink-0 d-block" />{" "}
                      {/* Prevent icon shrink */}
                      <span
                        className="d-inline-block mt-2"
                        style={{ color: "#2E86C9" }}
                      >
                        Maintenance
                      </span>{" "}
                      {/* Wrap text */}
                    </h3>
                    <ul className="list-unstyled">
                      <li className="mb-2 d-flex align-items-start">
                        <BsCheckCircleFill className="text-success mt-1 me-2" />
                        <span>Safety Equipment</span>
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <BsCheckCircleFill className="text-success mt-1 me-2" />
                        <span>Weather Seals</span>
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <BsCheckCircleFill className="text-success mt-1 me-2" />
                        <span>Preventive Maintenance</span>
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <BsCheckCircleFill className="text-success mt-1 me-2" />
                        <span>24/7 Emergency Service</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-5">
              <Link to="/services" className="btn btn-primary btn-lg px-4 py-3">
                <BsListUl className="me-2" />
                View Complete Service Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
