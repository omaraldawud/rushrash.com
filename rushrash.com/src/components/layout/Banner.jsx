import { useLocation } from "react-router-dom";
import { services as allServices } from "../../assets/data/rr_services_ds";
import CTABannerForm from "../cta-forms/CTABannerForm";
import "../../assets/css/Banner.css";

export default function Banner({
  title = "Welcome to Rushrash Inc.",
  subtitle = "CCTV & Access Control Experts",
  ctaText = "Get a Free Quote",
  heroImages = null,
  bgImage = [],
}) {
  const location = useLocation();

  const bannerStyle = {
    position: "relative",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const fixedBgStyle =
    bgImage.length > 0
      ? {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.85)",
        }
      : {};

  return (
    <div style={bannerStyle} className="banner-wrapper">
      {bgImage.length > 0 && <div style={fixedBgStyle}></div>}

      <section
        id="hero"
        className="hero-images-wrapper my-5 d-flex flex-column align-items-stretch justify-content-center banner-content"
      >
        <div className="container">
          {/* Hero Text */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="hero-text-container text-center text-md-start">
                <h2 className="hero-heading">
                  <span className="hero-heading-accent">{title}</span>
                </h2>

                {subtitle && (
                  <div className="subtitle-wrapper">
                    <h3 className="subtitle">
                      <span className="subtitle-highlight">{subtitle}</span>
                    </h3>
                    <div className="subtitle-underline"></div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Hero Images and Form Side by Side */}
          <div className="row mb-4 align-items-stretch">
            {/* Two Hero Images */}
            <div className="col-12 col-md-8 mb-4 mb-md-0">
              <div className="row g-3 h-100">
                {heroImages &&
                  heroImages.slice(0, 2).map((image, index) => (
                    <div key={index} className="col-12 col-sm-6">
                      <div className="hero-image-container h-100">
                        <img
                          src={image.src}
                          alt={image.alt}
                          title={image.title}
                          className="hero-img h-100"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Form - Right side */}
            {location.pathname !== "/contact-rushrash-inc" ? (
              <div className="col-12 col-md-4">
                <CTABannerForm ctaText={ctaText} />
              </div>
            ) : null}
          </div>

          {/* Services - Full width */}
          <div className="row">
            <div className="col-12">
              {allServices.length > 0 && (
                <div className="row gx-2 gy-2">
                  {allServices.slice(0, 4).map((svc, idx) => {
                    const isActive = location.pathname === svc.service_href;
                    const cardClasses = `service-gradient-card text-center p-2 ${
                      isActive ? "active-service-card" : ""
                    }`;

                    return (
                      <div key={idx} className="col-6 col-md-3">
                        {isActive ? (
                          // Active: not clickable
                          <span className={cardClasses}>
                            {svc.icon && (
                              <i
                                className={`bi ${svc.icon} service-gradient-icon`}
                              />
                            )}
                            <div className="service-gradient-title">
                              {svc.title}
                            </div>
                          </span>
                        ) : (
                          // Inactive: link
                          <a
                            href={svc.service_href}
                            className="text-decoration-none"
                          >
                            <div className={cardClasses}>
                              {svc.icon && (
                                <i
                                  className={`bi ${svc.icon} service-gradient-icon`}
                                />
                              )}
                              <div className="service-gradient-title">
                                {svc.title}
                              </div>
                            </div>
                          </a>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
