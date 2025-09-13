//
//

//function
import services from "../../assets/data/cctv_services_ds";

export default function CCTVServices() {
  return (
    <div className="container my-5">
      <div className="row g-4">
        {services.map((service, idx) => (
          <div key={idx} className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm transition-all overflow-hidden">
              {/* Card Header with consistent height */}
              <div
                className="card-header bg-transparent border-0 pb-0 pt-4 text-center"
                style={{ minHeight: "100px" }}
              >
                <i className={`bi ${service.icon} fs-3 text-light`}></i>

                <h5
                  className="card-title text-dark fw-semibold mb-0 px-3"
                  style={{ lineHeight: "1.4" }}
                >
                  {service.title}
                </h5>
              </div>

              {/* Card Body */}
              <div className="card-body p-4 pt-3 d-flex flex-column">
                <div className="card-text flex-grow-1">
                  <ul className="list-unstyled mb-0">
                    {service.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="mb-2 d-flex align-items-start"
                      >
                        <i className="bi bi-check-circle text-success me-2 flex-shrink-0 mt-1"></i>
                        <span
                          className="text-secondary"
                          style={{ fontSize: "0.95rem" }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
