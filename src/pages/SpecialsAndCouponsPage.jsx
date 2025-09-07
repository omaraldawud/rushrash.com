//
//
import { useLocation } from "react-router-dom";
// import logo from "/images/sitewide/advanced-garage-door-inc-logo-side.png";

// JSON-LD Scheme 7 Meta SEO
import SEOMeta from "../components/seo/SEOMeta";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "../schemas";
import PrintableCouponCard from "../components/cards/PrintableCouponCard";
import promotions_ds from "../assets/data/promotions_ds";

// main
export default function SpecialsAndCouponsPage() {
  const location = useLocation();
  const path = location.pathname.replace(/^\/+|\/+$/g, "") || "home";

  const filteredPromos = promotions_ds.filter((promo) =>
    promo.pages.includes(path)
  );

  return (
    <>
      <div>
        {/* Breadcrumb */}
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://advancedgaragedoorinc.com" },
            {
              name: "Specials & Coupons",
              url: "https://advancedgaragedoorinc.com/garage_door_specials_coupons.html",
            },
          ]}
        />

        {/* FAQ Schema */}
        <FAQSchema
          questions={[
            {
              question: "How often do you update your special offers?",
              answer:
                "We refresh our coupons monthly with new discounts on garage door repairs, installations, and maintenance services.",
            },
            {
              question: "Can I combine multiple coupons?",
              answer:
                "While we don't allow stacking discounts, we'll always apply your best available offer to ensure maximum savings.",
            },
            {
              question: "Do your coupons expire?",
              answer:
                "Yes, all offers have expiration dates as shown on each coupon. Most are valid for 30 days from publication.",
            },
          ]}
        />

        {/* Offer Schema
        <OfferSchema
          offers={[
            {
              name: "Spring Replacement Special",
              description:
                "$50 off torsion spring replacements with 2-year warranty",
              price: "50",
              priceCurrency: "USD",
              validThrough: getExpirationDate(),
            },
            {
              name: "New Opener Installation",
              description: "15% off premium garage door opener installations",
              price: "15",
              priceCurrency: "USD",
              priceSpecification: "Percentage",
              validThrough: getExpirationDate(),
            },
          ]}
        /> */}

        {/* SEO Meta */}
        <SEOMeta
          title="Garage Door Specials & Coupons | Garage Doors Offers"
          description="Save on professional garage door services with our exclusive coupons. Current offers include $50 off spring repairs, 15% off opener installations, and seasonal specials."
          keywords="garage door coupons, garage repair discounts, opener installation specials, spring replacement deals, garage door savings"
          url="https://www.advancedgaragedoorinc.com/garage_door_specials_coupons.html"
          image="https://www.advancedgaragedoorinc.com/images/specials/coupon-banner.jpg"
          twitterHandle="@AdvancedGarageDoor"
        />
      </div>
      <div className="p-3 border shadow-sm rounded my-3">
        <h2 className="text-secondary d-flex align-items-center border-bottom pb-2 mb-3">
          <i className="bi bi-ticket-perforated me-2 text-success fs-4"></i>
          Garage Door Coupons
        </h2>

        <p className="text-muted mb-4 fs-6">
          Save on professional <strong>garage door repair</strong>,{" "}
          <strong>spring replacement</strong>, and{" "}
          <strong>opener installation</strong> services with our exclusive
          coupons. Our certified technicians offer same-day service for{" "}
          <strong>broken springs</strong>, <strong>off-track doors</strong>, and{" "}
          <strong>opener malfunctions</strong> throughout the Chicago area. All
          work is backed by a warranty, and we use only premium parts from
          trusted brands like LiftMaster, Chamberlain, and Clopay.
          <span className="d-block mt-2">
            Present these coupons at time of service for instant savings on
            quality garage door solutions.
          </span>
        </p>

        {/* Add this grid container */}
        <div className="row row-cols-1 row-cols-md-2 g-3">
          {filteredPromos.map((promo, index) => (
            <div key={index} className="col">
              <PrintableCouponCard
                discount_amount={`$${promo.save_amount}`}
                discount_service={promo.save_on}
                discount_code={promo.save_code}
                discount_image={promo.discount_image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
