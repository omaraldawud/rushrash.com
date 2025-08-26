import "../assets/css/Openers.css";
import PageInfoBox from "../components/cards/PageInfoBox";
import USAMadeBanner from "../components/cards/USAMadeBanner";
import GarageDoorTypes from "../components/functional/GarageDoorTypes";
import SEOMeta from "../components/seo/SEOMeta";
import CommercialSection from "../components/sections/CommercialSection";

// JSON-LD Scheme
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "../schemas";

// functions
const FeatureCard = ({ icon, title, description }) => (
  <div className="gdo-feature-card bg-white p-4 rounded-3 shadow-sm text-center h-100">
    <div className={`fs-1 mb-3 text-primary ${icon}`} />
    <h3 className="h5">{title}</h3>
    <p className="mb-0">{description}</p>
  </div>
);

const ProductCard = ({ name, specs, madeInUSA, imageSrc }) => (
  <div className="card product-card">
    <img src={imageSrc} alt={name} className="product-card-img" />
    <div className="card-body product-card-body">
      <h5 className="card-title">{name}</h5>

      <div className="product-card-content">
        <ul className="mb-3">
          {specs.map((spec, idx) => (
            <li key={idx}>{spec}</li>
          ))}
        </ul>
      </div>

      <div className="product-card-footer">
        <button className="btn btn-primary w-100">View Details</button>
      </div>
    </div>
  </div>
);

const Testimonial = ({ quote, author }) => (
  <div className="bg-light p-4 rounded-3">
    <blockquote className="mb-0">
      <p className="fst-italic">"{quote}"</p>
      <footer className="text-muted">- {author}</footer>
    </blockquote>
  </div>
);

// main compoenet
const GarageDoorOpenersPage = () => {
  return (
    <>
      <SEOMeta
        title="Garage Door Opener Repair & Installation | Naperville, Aurora Chicago Subrubs"
        description="Expert garage door opener services: repair, installation & smart opener upgrades. Serving Naperville, Aurora & surrounding areas. 24/7 emergency service available. Certified LiftMaster & Genie dealers."
        keywords="garage door opener repair, opener installation, LiftMaster installation, Genie opener repair, smart garage opener, opener not working, garage door remote, keypad programming, [City] opener service"
        url="https://www.advancedgaragedoorinc.com/garage-door-openers.html"
        image="https://www.advancedgaragedoorinc.com/images/opener-installation-tech.jpg"
        twitterHandle="@AdvancedGarageDoor"
        canonicalUrl="https://www.advancedgaragedoorinc.com/garage-door-openers"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://advancedgaragedoorinc.com/" },
          {
            name: "Services",
            url: "https://advancedgaragedoorinc.com/garage_door_services.html",
          },
          {
            name: "Garage Door Openers",
            url: "https://advancedgaragedoorinc.com/garage_door_openers.html",
          },
        ]}
      />
      <ServiceSchema
        services={[
          {
            name: "Garage Door Opener Services",
            description:
              "Repair, installation and maintenance of all opener brands including LiftMaster, Genie, and Chamberlain",
            serviceType: "GarageDoorService",
            offers: {
              price: "99+",
              priceCurrency: "USD",
            },
          },
          {
            name: "Emergency Opener Repair",
            description:
              "24/7 diagnostics and repair for broken openers, faulty sensors, and remote programming",
            serviceType: "EmergencyService",
            offers: {
              price: "149",
              priceCurrency: "USD",
              availability: "InStock",
            },
            hoursAvailable: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
          },
        ]}
      />
      <FAQSchema
        questions={[
          {
            question: "How long do garage door openers typically last?",
            answer:
              "Most quality openers last 10-15 years. Belt-drive models often outlast chain-drive units by 3-5 years with proper maintenance.",
          },
          {
            question: "Can I replace my garage door opener myself?",
            answer:
              "While possible, we recommend professional installation to ensure proper safety sensor alignment, force settings calibration, and secure mounting.",
          },
          {
            question:
              "What's the difference between belt-drive and chain-drive openers?",
            answer:
              "Belt-drive openers operate more quietly while chain-drives offer slightly more lifting power. Our technicians can recommend the best type for your usage.",
          },
          {
            question: "Do you offer smart opener installation?",
            answer:
              "Yes! We install and configure Wi-Fi enabled openers with smartphone control from brands like LiftMaster myQ and Chamberlain.",
          },
        ]}
      />
      {/* main content */}
      <main className="gdo-main container py-4">
        <PageInfoBox
          pageType="openers"
          info_title="Advanced Garage Door Opener Technologies for Smart, Secure Homes"
          info_top_title="Cutting-Edge Garage Door Opener Technology"
          info_mid_text="Why Advanced Garage Door Customers Love Our Tech-Equipped Openers: Key Features"
          info_link1="/garage_door_contactus.html"
          link1_text="Free Estimate"
          info_link2="/garage_door_openers.html"
          link2_text="Openers Selection"
          info_image1="/images/openers/liftmaster/liftMaster-gen.png"
          info_image2="/images/openers/liftmaster/LM-myQ-connected.jpg"
          info_image3="/images/openers/chamberlain/Chamberlain-garage-door-opener-B6753STMC.png"
        />

        {/* Key Opener Featured Cards WiFi, ... */}
        <section className="my-5">
          <div className="text-center mb-4">
            <h2 className="mb-3">Key Openers Features</h2>
            <p className="lead">Smart technology for modern homes</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <FeatureCard
                icon="bi bi-wifi"
                title="Built-in Wi-Fi & Phone Connectivity"
                description="Control your garage door from anywhere using your smartphone with ease and security."
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <FeatureCard
                icon="bi bi-house-door"
                title="Smart Home Compatible"
                description="Works seamlessly with Alexa, Google Assistant, and other popular smart home systems."
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <FeatureCard
                icon="bi bi-noise-reduction"
                title="Quiet & Durable Operation"
                description="Engineered for silent performance and long-lasting durability in any climate."
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <FeatureCard
                icon="bi bi-bell"
                title="Advanced Safety & Security"
                description="Equipped with automatic reversing, rolling code security, and other essential safety features."
              />
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="my-5 py-4 bg-light">
          <div className="container">
            <div className="text-center mb-4">
              <h2 className="mb-3">Featured Models</h2>
              <p className="lead">Premium garage door openers for every need</p>
            </div>
            <div className="row g-4 justify-content-center align-items-stretch">
              <div className="col-md-6 col-lg-5 col-xl-4 d-flex">
                <ProductCard
                  name="Chamberlain-B2210T-ULTRA-QUIET"
                  specs={[
                    "Smartphone control via myQ app",
                    "An ultra-quiet DC motor and belt drive",
                    "Quiet Belt Drive",
                    "BATTERY BACKUP",
                    " Improved Wi-Fi® connectivity",
                    "Integrated Bluetooth technology",
                  ]}
                  madeInUSA={true}
                  imageSrc="/images/openers/chamberlain/products/belt-drive-openers/chamberlain-B2210T-ULTRA-QUIET-WI-FI.png"
                  className="flex-fill"
                />
              </div>
              <div className="col-md-6 col-lg-5 col-xl-4 d-flex">
                <ProductCard
                  name="LeftMaster Smart Opener LM84602"
                  specs={[
                    "Control, secure & monitor the garage with the myQ® app",
                    "Integrated LED lighting system",
                    "Battery backup",
                    "Powerful chain drive",
                    "Quite Operation",
                  ]}
                  madeInUSA={true}
                  imageSrc="/images/openers/liftmaster/products/LiftMaster-LM84602.png"
                  className="flex-fill"
                />
              </div>
              <div className="col-md-6 col-lg-5 col-xl-4 d-flex">
                <ProductCard
                  name="Genie Model 2562 - PowerLift® 900"
                  imageSrc="/images/openers/genie/products/genie-D7155L-wifi.avif"
                  specs={[
                    "Built-in Wi-Fi",
                    "Signature Series - ultra-quiet",
                    "LED lighting",
                    "Battery backup",
                    "Aladdin Connect",
                  ]}
                  madeInUSA={true}
                  className="flex-fill"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Made in USA */}
        <USAMadeBanner variant="opener" />

        <GarageDoorTypes variant="openers" />

        {/* Call to Action */}
        <section className="my-5 py-4 bg-primary text-white rounded-3">
          <div className="container text-center">
            <h2 className="mb-3">Ready to upgrade your garage door opener?</h2>
            <a
              href="/garage_door_contactus.html"
              className="btn btn-light btn-lg px-4"
            >
              Contact Us for a Free Quote
            </a>
          </div>
        </section>

        <CommercialSection varient="Opener" />
      </main>
    </>
  );
};

export default GarageDoorOpenersPage;
