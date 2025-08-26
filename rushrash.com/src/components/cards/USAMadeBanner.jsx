import { Button } from "react-bootstrap";

const USAMadeBanner = ({ variant = "door" }) => {
  // Content configuration based on variant
  const content = {
    door: {
      title: "Proudly Crafted in the USA",
      brands: [
        {
          brand_name: "Amarr",
          brand_logo: "/images/brands/amarr-garage-door.jfif",
        },
        {
          brand_name: "C.H.I.",
          brand_logo: "/images/brands/chi-overhead-doors-logo.png",
        },
        {
          brand_name: "Clopay",
          brand_logo: "/images/brands/clopay-garage-door.png",
        },
      ],
      description:
        "Our steel and wood garage doors are built to last in American factories with strict quality standards.",
      cta: "View Door Collections",
    },
    opener: {
      title: "American-Made Opener Technology",
      brands: [
        {
          brand_name: "LiftMaster",
          brand_logo: "/images/brands/liftmaster-logo-garage-door.jpg",
        },
        {
          brand_name: "Chamberlain",
          brand_logo: "/images/brands/Chamberlain-logo-blue.png",
        },
        {
          brand_name: "Genie",
          brand_logo: "/images/brands/Genie-garage-door-opener-logo.avif",
        },
      ],
      description:
        "Every opener we install is designed and assembled in the USA, supporting domestic manufacturing jobs.",
      cta: "Explore Openers",
    },
    commercial: {
      title: "Commercial-Grade American Engineering",
      brands: [
        {
          brand_name: "Raynor",
          brand_logo: "/images/brands/raynor-logo.png",
        },
        {
          brand_name: "DBCI",
          brand_logo: "/images/brands/dbci-logo.png",
        },
      ],
      description:
        "Heavy-duty doors built for businesses, manufactured in facilities across North America.",
      cta: "Commercial Solutions",
    },
  };

  const current = content[variant] || content.door;

  return (
    <section className="py-2 bg-light position-relative overflow-hidden">
      <div className="container position-relative z-2">
        <div className="text-center ">
          <span
            className="badge rounded-pill px-3 mb-3 d-inline-flex align-items-center"
            style={{
              background: "linear-gradient(90deg, #B22234, #3C3B6E)",
              color: "#fff",
            }}
          >
            <i className="bi bi-flag-fill text- me-3"></i>
            AMERICAN MADE QUALITY
          </span>
          <h2 className="display-5 fw-bold mb-3">{current.title}</h2>
        </div>

        <div className="row g-4 justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="p-4 bg-white rounded-3 shadow-sm border border-2 border-primary">
              <blockquote className="blockquote mb-0">
                <div className="fs-3 text-primary">"</div>
                <p className="fs-5 fst-italic mb-4">{current.description}</p>
                <footer className="blockquote-footer fs-6">
                  <span className="text-primary fw-bold">Our Promise</span> —{" "}
                  {variant} systems
                </footer>
              </blockquote>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="p-4 text-center">
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="/images/sitewide/usa-map.png"
                  alt="USA Map"
                  className="img-fluid"
                  style={{ maxHeight: "120px" }}
                />
              </div>
              <h3 className="h5 text-success fw-bold mb-5">
                Featured American Brands
              </h3>
              <div className="d-flex flex-wrap justify-content-center gap-4">
                {current.brands.map((brand, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={brand.brand_logo}
                      alt={brand.brand_name}
                      className="img-fluid mb-2"
                      style={{
                        maxHeight: "50px",
                        width: "auto",
                        filter: "grayscale(100%) opacity(80%)",
                      }}
                    />
                    <div className="small text-muted">{brand.brand_name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center ">
          <Button variant="outline-primary" size="lg">
            <i className="bi bi-patch-check-fill me-2"></i>
            {current.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default USAMadeBanner;
