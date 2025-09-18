import { useLocation } from "react-router-dom";
import CTABannerForm from "../cta-forms/CTABannerForm";
import BannerServicesCard from "../cards/BannerServicesCard";

//cutom hooks

// CSS
import "../../assets/css/Banner.css";

// Images
import heroBgImg from "../../assets/images/banners/security-lock-open.jpg";
import contImgProxy from "../../assets/images/banners/contImgProxy.jpg";

export default function Banner({
  title = "Trusted Security Partner for Homes & Businesses",
  subtitle = "Your Sleepless Eye Watching Over Your Property",
  bgImage = heroBgImg,
  heroImages = heroImages,
  heroParagraph = "Update banners_ds. for this page",
  heroBullets = [],
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
          <div className="text-light d-flex flex-column justify-content-between h-100 ">
            {/* Top Section - Text Content */}
            <div>
              <h1 className="banner-title pt-5">{title}</h1>
              <h2 className="banner-subtitle">
                <span className="accent">Rushrash Inc.</span> {subtitle}
              </h2>
              <p className="banner-description">{heroParagraph}</p>
              {/* {console.log("Hero Bullets: ", heroBullets)} */}
              <ul className="banner-features d-none d-md-flex flex-wrap justify-content-center gap-3">
                {heroBullets.map((bullet, index) => (
                  <li
                    key={index}
                    className="feature-item px-3 rounded shadow-sm"
                  >
                    <i className={`bi ${bullet.icon} text-white me-2`}></i>
                    {bullet.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Section - Images */}
            <div className="row g-3 hero-images-wrapper d-none d-md-flex mt-auto">
              {heroImages &&
                heroImages.map((image, index) => (
                  <div key={index} className="col-12 col-sm-6 col-lg-4">
                    <div
                      className={`hero-image-container h-100 slide-in`}
                      style={{ animationDelay: `${index * 0.2}s` }}
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
          <div className="banner-container d-flex align-items-between h-100">
            <div className="banner-cta d-flex w-100 justify-content-between align-items-end">
              {location.pathname !== "/contact-rushrash-inc" ? (
                <div className="cta-form">
                  <CTABannerForm ctaText={"Reach us for more ..."} />
                </div>
              ) : (
                <div className="contact-image-container">
                  {" "}
                  {/* Removed align-self-end since parent handles it */}
                  <img
                    src={contImgProxy}
                    alt="Contact our security experts"
                    className="img-fluid rounded-3 shadow-lg"
                    style={{
                      height: "184px",
                      width: "370px",
                      objectFit: "cover",
                      border: "3px solid rgba(255, 255, 255, 0.1)",
                    }}
                  />
                </div>
              )}{" "}
              {/* Better alignment */}
              <BannerServicesCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
