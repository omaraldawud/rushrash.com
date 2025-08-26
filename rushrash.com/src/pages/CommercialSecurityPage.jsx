import { useState } from "react";

import "../assets/css/HeroSection.css";
import { useLocation } from "react-router-dom";
// import GarageDoorTypes from "../components/functional/GarageDoorTypes";
import PageInfoBox from "../components/cards/PageInfoBox";
import SEOMeta from "../components/seo/SEOMeta";
// JSON-LD Scheme
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "../schemas";

//
// Function Starts
export default function CommercialSecurityPage() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <div>
        <SEOMeta
          title="Commercial Garage Doors | Heavy-Duty Sectional Doors | Advanced Garage Door Inc"
          description="Professional commercial garage door installation & repair for warehouses, auto shops, and industrial facilities. 24/7 emergency service available for sectional doors and rolling steel doors."
          keywords="commercial garage doors, warehouse doors, sectional garage doors, rolling steel doors, industrial garage doors, commercial door repair, dock door installation, high-speed doors"
          url="https://www.advancedgaragedoorinc.com/garage_door_commercial.html"
          image="https://www.advancedgaragedoorinc.com/images/commercial/commercial-garage-door-service.jpg"
          twitterHandle="@AdvancedGarageDoor"
        />
        {/* JSON-LS for Home Page */}
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://advancedgaragedoorinc.com" },
            {
              name: "Residential Garage Doors",
              url: "http://localhost:5173//garage_door_commercial.html",
            },
          ]}
        />
        <FAQSchema
          questions={[
            {
              question: "What's the lifespan of commercial garage doors?",
              answer:
                "With proper maintenance, industrial-grade doors last 15-20 years. We recommend annual inspections for high-use facilities.",
            },
            {
              question: "Can you install fire-rated commercial doors?",
              answer:
                "Yes, we're certified to install UL-rated fire doors meeting all local building codes.",
            },
          ]}
        />

        {/* only Featured Services for home page*/}
        <ServiceSchema
          services={[
            {
              name: "Commercial Sectional Door Installation",
              description:
                "Heavy-duty aluminum and steel sectional doors for loading docks and warehouses",
              serviceType: "InstallationService",
              offers: { price: "2499+" },
            },
            {
              name: "24/7 Commercial Door Repair",
              description:
                "Emergency service for broken springs, off-track doors, and damaged panels",
              serviceType: "EmergencyService",
            },
          ]}
        />
      </div>
      <section className="residential-garage-doors">
        <div className="container">
          <PageInfoBox
            pageType="commercial"
            info_title="Commercial Garage Door Solutions"
            info_top_title="Trusted by Chicagoland Businesses Since 2005"
            info_mid_text="Advanced Garage Door Inc specializes in heavy-duty commercial garage door installation, repair, and maintenance for warehouses, auto shops, and industrial facilities. Our certified technicians work with all major brands including Hormann, Rytec, and Wayne Dalton."
            info_link1="/garage_door_contactus.html"
            link1_text="Free Estimate"
            info_link2="/garage_door_openers.html"
            link2_text="Commercial Door Openers Selection"
            info_image1="/images/commercial/commercial-garage-doors.jpg"
            info_image2="/images/commercial/commercial-garage-doors-rolling_sheet.jpg"
            info_image3="/images/commercial/commercial_door_openers.jpg"
          />

          {/* <!-- Openers Section --> */}
          <div className="opener-section text-center mt-5 p-lg-5 bg-dark text-white rounded-3">
            <h2 className="mb-4">
              Complete Your Commercial System With Quality Commercial Door
              Openers
            </h2>
            <p className="lead mb-4">
              We help you choose the perfect commercial electric opener for your
              business new garage door, sectional door & commercial openers.
            </p>
            <a
              href="/garage_door_openers.html"
              className="btn btn-outline-light btn-lg"
            >
              Explore Openers
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
