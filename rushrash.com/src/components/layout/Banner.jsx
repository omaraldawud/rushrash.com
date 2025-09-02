import "../../assets/css/Banner.css";
import { services as allServices } from "../../assets/data/rr_services_ds";
import CTABannerForm from "../cta-forms/CTABannerForm";

export default function Banner({
  title = "Welcome to Rushrash Inc.",
  subtitle = "CCTV & Access Control Experts",
  ctaText = "Get a Free Quote",
  seo_brands_text = "We work with all major CCTV & Access Control brands:",
  banner_brands = "Hikvision, Dahua, Bosch, Axis, Honeywell",
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
            {/* Text + CTA Form + Services */}
            <div className="col-lg-8 col-xl-8 order-2 order-lg-1 d-flex flex-column align-items-start">
              <div className="w-100">
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

                {/* CTA Form Component */}
                <CTABannerForm ctaText={ctaText} />

                {/* Services Cards */}
                {allServices.length > 0 && (
                  <div className="row mt-3 gx-2 gy-2">
                    {allServices.slice(0, 4).map((svc, idx) => (
                      <div key={idx} className="col-6 col-md-3">
                        <a
                          href={svc.service_href}
                          className="text-decoration-none"
                        >
                          <div className="service-gradient-card text-center p-2">
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
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Hero Images - Reduced to 2 */}
            <div className="col-lg-4 col-xl-4 text-center order-1 order-lg-2 d-flex flex-column align-items-center gap-2">
              {heroImages.slice(0, 2).map((img, idx) => (
                <div key={idx} className="w-100 position-relative d-block">
                  {" "}
                  {/* Changed from flex-fill to d-block */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    title={img.title}
                    className="hero-img"
                    style={{
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  {img.caption && (
                    <span className="position-absolute top-0 end-0 small text-light bg-dark bg-opacity-75 m-1 p-1 rounded">
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
