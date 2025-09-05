import { useLocation } from "react-router-dom";
import { services as allServices } from "../../assets/data/rr_services_ds";
import CTABannerForm from "../cta-forms/CTABannerForm";
import "../../assets/css/Banner.css";

export default function Banner({
  title = "Trusted Security Partner for Homes & Businesses",
  subtitle = "Your Sleepless Eye Watching Over Your Property",
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
        className="hero-images-wrapper my-4 d-flex flex-column align-items-stretch justify-content-center banner-content"
      >
        <div className="container">
          <div className="row align-items-start d-flex align-items-stretch">
            {/* Left: Title + Images */}
            <div className="col-12 col-md-8">
              {/* Hero Text */}
              <div className="hero-text-container text-center text-md-start mb-4">
                <h2 className="hero-heading smaller-heading">
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

              {/* Hero Images */}
              <div className="row g-3">
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

            {/* Right: Form + Services */}
            <div className="col-12 col-md-4 d-flex flex-column justify-content-between">
              {/* Form only on pages other than contact */}
              {location.pathname !== "/contact-rushrash-inc" && (
                <CTABannerForm ctaText={ctaText} />
              )}

              {/* Services always visible */}
              {allServices.length > 0 && (
                <div className="d-flex flex-column gap-2 mt-3">
                  {allServices.slice(0, 4).map((svc, idx) => {
                    const isActive = location.pathname === svc.service_href;
                    const cardClasses = `service-gradient-card d-flex align-items-center gap-2 px-3 py-2 ${
                      isActive ? "active-service-card" : ""
                    }`;

                    return isActive ? (
                      <span key={idx} className={cardClasses}>
                        {svc.icon && (
                          <i
                            className={`bi ${svc.icon} service-gradient-icon`}
                          />
                        )}
                        <span className="service-gradient-title">
                          {svc.title}
                        </span>
                      </span>
                    ) : (
                      <a
                        key={idx}
                        href={svc.service_href}
                        className="text-decoration-none"
                      >
                        <div className={cardClasses}>
                          {svc.icon && (
                            <i
                              className={`bi ${svc.icon} service-gradient-icon`}
                            />
                          )}
                          <span className="service-gradient-title">
                            {svc.title}
                          </span>
                        </div>
                      </a>
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
