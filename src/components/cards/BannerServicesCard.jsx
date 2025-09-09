import { useLocation } from "react-router-dom";
import { services as allServices } from "../../assets/data/rr_services_ds";

export default function BannerServicesCard() {
  const location = useLocation();

  return (
    <>
      {allServices.length > 0 && (
        <div className="services-card-list d-flex   flex-column gap-3 mt-5">
          {allServices.slice(0, 4).map((svc, idx) => {
            const isActive = location.pathname === svc.service_href;
            const cardClasses = `service-card d-flex align-items-center gap-3 px-3 py-3 ${
              isActive ? "active" : ""
            }`;

            const content = (
              <>
                {svc.icon && (
                  <div className="service-icon-wrapper">
                    <i className={`bi ${svc.icon} service-icon`} />
                  </div>
                )}
                <span className="service-title">{svc.title}</span>
              </>
            );

            return isActive ? (
              <span key={idx} className={cardClasses}>
                {content}
              </span>
            ) : (
              <a
                key={idx}
                href={svc.service_href}
                className="text-decoration-none"
              >
                <div className={cardClasses}>{content}</div>
              </a>
            );
          })}
        </div>
      )}
    </>
  );
}
