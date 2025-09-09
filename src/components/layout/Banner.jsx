import { useLocation } from "react-router-dom";
import CTABannerForm from "../cta-forms/CTABannerForm";
import BannerServicesCard from "../cards/BannerServicesCard";

// CSS
import "../../assets/css/Banner.css";

// Images
import heroBgImg from "../../assets/images/banners/security-lock-open.jpg";

export default function Banner({
  title = "Trusted Security Partner for Homes & Businesses",
  subtitle = "Your Sleepless Eye Watching Over Your Property",
  bgImage = heroBgImg,
  heroImages = heroImages,
}) {
  const location = useLocation();

  return (
    <div className="banner-wrapper">
      {/* Background */}
      <div
        className="banner-bg"
        style={{
          backgroundImage: `url(${bgImage})`,
          filter: "brightness(0.3)",
        }}
      ></div>

      <section className="banner-content container">
        <div className="banner-grid">
          {/* Text Content */}
          <div className="text-light">
            <h1 className="banner-title">{title}</h1>
            <h2 className="banner-subtitle">
              <span className="accent">Rushrash Inc.</span> {subtitle}
            </h2>
            <p className="banner-description">
              With over 15 years of expertise, we provide cutting-edge security
              solutions tailored to protect what matters most. Our systems
              combine advanced CCTV surveillance with access control
              technology—seamless protection for homes and businesses.
            </p>

            <ul className="banner-features d-none d-md-flex flex-wrap justify-content-center gap-3">
              <li className="feature-item px-3 rounded shadow-sm">
                <i className="bi bi-shield-check text-white me-2"></i> 24/7
                Professional Monitoring
              </li>
              <li className="feature-item  px-3 rounded shadow-sm">
                <i className="bi bi-cpu text-white me-2"></i> Latest Technology
                Systems
              </li>
              <li className="feature-item px-3  rounded shadow-sm">
                <i className="bi bi-gear text-white me-2"></i> Customized
                Security Solutions
              </li>
            </ul>

            <div className="row g-3 hero-images-wrapper  d-none d-md-flex">
              {heroImages &&
                heroImages.map((image, index) => (
                  <div key={index} className="col-12 col-sm-6 col-lg-4">
                    <div
                      className={`hero-image-container  h-100 slide-in`}
                      style={{ animationDelay: `${index * 0.2}s` }} // stagger animation
                    >
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

          {/* CTA Section */}
          <div className="banner-cta ">
            <BannerServicesCard />
            {/* {location.pathname !== "/contact-rushrash-inc" && (
              <div className="cta-form">
                <CTABannerForm ctaText={ctaText} />
              </div>
            )} */}
          </div>
        </div>
      </section>
    </div>
  );
}
