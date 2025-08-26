import "../../assets/css/Banner.css";
import { services as allServices } from "../../assets/data/rr_services_ds";

export default function Banner({
  title,
  subtitle,
  ctaText,
  ctaLink,
  seo_brands_text,
  banner_brands = "",
  heroImages = [],
  bgImage = [],
}) {
  const bannerStyle = {
    position: "relative",
    minHeight: "600px",
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
          backgroundImage: `url(${bgImage[0]})`,
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
        className="hero-images-wrapper my-5 d-flex flex-column flex-lg-row align-items-stretch justify-content-center banner-content"
      >
        <div className="container">
          <div className="row d-flex gy-4 justify-content-center align-items-stretch">
            {/* Text + CTA */}
            <div className="col-lg-8 col-xl-8 order-2 order-lg-1 d-flex flex-column align-items-start">
              {ctaText && ctaLink && (
                <a
                  href={ctaLink}
                  className="px-4 py-2 fw-bold text-dark text-decoration-none mb-3 d-inline-flex align-items-center"
                >
                  <i className="bi-telephone-outbound text-warning me-2"></i>
                  {ctaText}
                </a>
              )}
              <h2 className="hero-heading text-center text-lg-start">
                {title}
              </h2>
              {subtitle && (
                <h3 className="subtitle text-center text-lg-start">
                  {subtitle}
                </h3>
              )}
              {seo_brands_text && (
                <p className="seo-text text-center text-lg-start">
                  {seo_brands_text} {banner_brands}
                </p>
              )}

              {/* Services Cards */}
              {allServices.length > 0 && (
                <div className="row mt-3 gx-2 gy-3">
                  {allServices.map((svc, idx) => (
                    <div key={idx} className="col-6 col-md-4">
                      <a
                        href={svc.service_href}
                        className="text-decoration-none"
                      >
                        <div className="service-card-small d-flex flex-column align-items-center p-2 h-100">
                          {svc.icon && (
                            <i
                              className={`bi ${svc.icon} service-icon-small mb-2`}
                            />
                          )}
                          <h6 className="service-title-small text-center">
                            {svc.title}
                          </h6>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Hero Images */}
            <div className="col-lg-4 col-xl-4 text-center order-1 order-lg-2 d-flex flex-column align-items-center gap-3">
              {heroImages.map((img, idx) => (
                <div key={idx} className="w-100 position-relative flex-fill">
                  <img
                    src={img.src}
                    alt={img.alt}
                    title={img.title}
                    className="hero-img"
                  />
                  {img.caption && (
                    <span className="position-absolute bottom-0 end-0 small text-light bg-dark bg-opacity-50 m-2 p-1 rounded">
                      {img.caption}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
