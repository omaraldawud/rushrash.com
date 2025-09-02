// src/components/cards/CCTVInfoTabs.jsx
import React, { useState } from "react";
import cctvTypeSections from "../../assets/data/cctv_types_sections_ds";
import cctvSystemsDS from "../../assets/data/cctv_dvr_systems_ds";
import posSystemsDS from "../../assets/data/pos_systems_ds";
import accessControlSystemsDS from "../../assets/data/access_control_systems_ds";
import brandsForTabsDS from "../../assets/data/brands_for_tabs_ds";

//
export default function CCTVInfoTabs() {
  const tabs = [
    {
      label: "Camera Systems",
      data: cctvTypeSections,
      icon: "bi-camera-video",
    },
    { label: "DVRs/NVRs", data: cctvSystemsDS, icon: "bi-cash" },
    { label: "PoS", data: posSystemsDS, icon: "bi-cash" },
    {
      label: "Access Control",
      data: accessControlSystemsDS,
      icon: "bi-fingerprint",
    },
    { label: "Brands", data: brandsForTabsDS, icon: "bi-tags" },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section>
      <div className="container">
        {/* Tab Navigation - Improved Styling */}
        <div className="d-flex gap-1 bg-light p-2 mb-2 rounded-3 flex-wrap shadow-sm">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              className={`btn btn-lg d-flex align-items-center ${
                idx === activeTab
                  ? "btn-primary shadow"
                  : "btn-outline-primary bg-white text-dark"
              } rounded-2 transition-all`}
              onClick={() => setActiveTab(idx)}
              style={{
                minWidth: "160px",
                transition: "all 0.3s ease",
              }}
            >
              <i className={`bi ${tab.icon} me-2`}></i>
              {tab.label}
            </button>
          ))}
        </div>
        {/* Active Tab Content */}

        {/* Active Tab Content */}
        <div className="tab-content">
          {tabs[activeTab].data.map((section, idx) => (
            <div
              key={idx}
              className="d-flex flex-column flex-md-row align-items-start mb-4 p-4 rounded-4 shadow-sm border-0 hover-lift"
              style={{
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                backgroundColor: section.bgColor,
              }}
            >
              {/* Text Content */}
              <div className="flex-grow-1 pe-md-4">
                <div className="d-flex align-items-center mb-3">
                  {/* --- CHANGED SECTION START --- */}
                  {/* Check if this is the Brands tab AND this section has a logo */}
                  {tabs[activeTab].label === "Brands" && section.logo ? (
                    // Render the brand logo
                    <div
                      className="bg-light p-2 rounded-3 me-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={section.logo}
                        alt={`${section.heading} logo`}
                        className="img-fluid"
                        style={{
                          maxHeight: "40px",
                          maxWidth: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  ) : section.icon ? (
                    // Fallback: Render the icon for all other tabs/sections
                    <div className="bg-primary bg-opacity-10 p-2 rounded-3 me-3">
                      <i
                        className={`bi ${section.icon} text-primary`}
                        style={{ fontSize: "1.5rem" }}
                      ></i>
                    </div>
                  ) : null}
                  {/* --- CHANGED SECTION END --- */}

                  <h4 className="mb-0 text-dark fw-bold">{section.heading}</h4>
                </div>

                {/* ... rest of your items list code remains unchanged ... */}
                {section.items && section.items.length > 0 && (
                  <ul className="list-unstyled mt-3 mb-0">
                    {section.items.map((item, i) => (
                      <li key={i} className="d-flex align-items-start mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1 flex-shrink-0"></i>
                        <span className="text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Image - Improved Styling */}
              {section.image && (
                <div className="flex-shrink-0 mt-4 mt-md-0">
                  <div
                    className="rounded-3 overflow-hidden shadow-sm"
                    style={{
                      width: "280px",
                      height: "200px",
                      minWidth: "280px",
                    }}
                  >
                    <img
                      src={section.image}
                      alt={section.heading}
                      className="img-fluid h-100 w-100"
                      style={{
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.05)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Add this to your global CSS */}
      <style jsx>{`
        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
        }
        .transition-all {
          transition: all 0.3s ease;
        }
        .btn-outline-primary.bg-white:hover {
          background: var(--bs-primary) !important;
          color: white !important;
        }
      `}</style>
    </section>
  );
}
