// /src/pages/ProducListingPage.jsx
//
import "../components/products/css/products.css";
import SEOMeta from "../components/seo/SEOMeta";
import { ProductSchema, BreadcrumbSchema, FAQSchema } from "../schemas";

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { allProducts } from "../components/products/data/allProductsDS";
import CCTVCameraCard from "../components/products/cards/CCTVCameraCard";
import RecorderCard from "../components/products/cards/RecorderCard";
import AccessControlCard from "../components/products/cards/AccessControlCard";
import PageInfoBox from "../components/cards/PageInfoBox";
import infoIMG1 from "../assets/images/brands/lts/products/dvrs/TVI-DVR-16-Channel-ltd8316d.png";
import infoIMG2 from "../assets/images/brands/lts/products/dvrs/TVI-DVR-16-Channel-ltd8316d.png";

//
export default function ProductListingPage() {
  const [searchParams] = useSearchParams();
  const tabFromUrl = searchParams.get("tab") || "all";
  const [activeTab, setActiveTab] = useState("all");
  const [hoverTab, setHoverTab] = useState(null);

  useEffect(() => {
    const tab = searchParams.get("tab") || "all";
    setActiveTab(tab);
  }, [searchParams]);

  const tabs = [
    { id: "all", label: "All Products", icon: "🔍" },
    { id: "cctv", label: "CCTV Cameras", icon: "📹" },
    { id: "recorders", label: "Recorders", icon: "💾" },
    { id: "access", label: "Access Control", icon: "🔐" },
  ];

  const filteredProducts =
    activeTab === "all"
      ? allProducts
      : allProducts.filter((p) => {
          switch (activeTab) {
            case "cctv":
              return p.category === "cctv-cameras";
            case "recorders":
              return p.category === "recorders";
            case "access":
              return p.category === "access-control";
            default:
              return true;
          }
        });

  const renderCard = (p) => {
    switch (p.category) {
      case "cctv-cameras":
        return <CCTVCameraCard key={p.id} product={p} />;
      case "recorders":
        return <RecorderCard key={p.id} product={p} />;
      case "access-control":
        return <AccessControlCard key={p.id} product={p} />;
      default:
        return null;
    }
  };

  //
  return (
    <>
      <div>
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://rushrashinc.com" },
            {
              name: "Security Products",
              url: "https://rushrashinc.com/security-products",
            },
          ]}
        />
        <SEOMeta
          title="Professional Security Products & Equipment | Rushrash Inc."
          description="Shop high-quality CCTV cameras, NVR systems, access control, and smart security products. Professional-grade equipment for home and business. Free shipping available."
          keywords="security products, CCTV cameras for sale, NVR systems, access control systems, buy security cameras, professional surveillance equipment, outdoor security cameras"
          url="https://rushrashinc.com/security-products"
          image="https://rushrashinc.com/images/security-products-hero.jpg"
          twitterHandle="@RushrashInc"
        />
        <FAQSchema
          questions={[
            {
              question:
                "What are the key features to look for in a modern CCTV camera?",
              answer:
                "Look for high resolution (4K or 1080p), night vision, weather resistance (IP66+ rating for outdoors), motion detection, remote viewing capabilities, and wide dynamic range (WDR) for handling varying light conditions.",
            },
            {
              question:
                "Are your security systems compatible with smartphones and voice assistants?",
              answer:
                "Yes, the majority of our modern CCTV and access control systems offer dedicated mobile apps for iOS and Android, allowing for live viewing, alerts, and playback. Many also integrate seamlessly with Amazon Alexa and Google Assistant for voice control.",
            },
            {
              question: "Do you offer warranties on your security products?",
              answer:
                "Absolutely. We provide manufacturer warranties on all our equipment, typically ranging from 2 to 5 years. We also offer extended warranty options and dedicated technical support to ensure your complete peace of mind.",
            },
            {
              question:
                "Can I upgrade my existing security system with your products?",
              answer:
                "In most cases, yes. Our experts can assess your current setup and recommend compatible cameras, recorders, or access control hardware that integrates with or enhances your existing infrastructure, often without the need for a complete overhaul.",
            },
            {
              question:
                "What's the difference between cloud and local (on-premise) video storage?",
              answer:
                "Cloud storage involves a monthly fee but offers off-site security and easy remote access. Local (NVR/DVR) storage is a one-time cost, keeps data on your premises, and doesn't require internet bandwidth for recording. We offer products that support both or a hybrid approach.",
            },
          ]}
        />
        <ProductSchema
          products={[
            {
              name: "4K Ultra HD Outdoor PTZ Security Camera",
              description:
                "Professional-grade outdoor camera with 4K resolution, 360° pan, 90° tilt, auto-tracking, color night vision, and a robust IP67 weatherproof rating for comprehensive perimeter security.",
              sku: "RUSH-PTZ-4K-100",
              gtin: "0842567891005", // Example GTIN
              brand: { name: "Rushrash Security" },
              offers: {
                price: "449.99",
                priceCurrency: "USD",
                priceValidUntil: "2024-12-31",
                availability: "https://schema.org/InStock",
                itemCondition: "https://schema.org/NewCondition",
                url: "https://rushrashinc.com/products/4k-ptz-camera",
                seller: { name: "Rushrash Inc." },
              },
              image:
                "https://rushrashinc.com/images/products/4k-ptz-camera.jpg",
              aggregateRating: {
                ratingValue: "4.8",
                reviewCount: "142",
              },
            },
            {
              name: "8-Channel 4K Network Video Recorder (NVR)",
              description:
                "Powerful 8-channel NVR with 2TB pre-installed HDD, supports up to 4K recording on all channels, features H.265+ compression for efficient storage, and includes remote mobile viewing.",
              sku: "RUSH-NVR-8CH-2TB",
              brand: { name: "Rushrash Security" },
              offers: {
                price: "299.99",
                priceCurrency: "USD",
                priceValidUntil: "2024-12-31",
                availability: "https://schema.org/InStock",
                itemCondition: "https://schema.org/NewCondition",
                url: "https://rushrashinc.com/products/8ch-nvr",
                seller: { name: "Rushrash Inc." },
              },
            },
            {
              name: "Smart Touchscreen Access Control System",
              description:
                "Modern access control solution featuring a 7-inch touchscreen, fingerprint and RFID card recognition, support for up to 100 users, and remote access management via a mobile app.",
              sku: "RUSH-ACCESS-7IN",
              brand: { name: "Rushrash Security" },
              offers: {
                price: "599.99",
                priceCurrency: "USD",
                priceValidUntil: "2024-12-31",
                availability: "https://schema.org/InStock",
                itemCondition: "https://schema.org/NewCondition",
                url: "https://rushrashinc.com/products/smart-access-system",
                seller: { name: "Rushrash Inc." },
              },
            },
            {
              name: "Wi-Fi Smart Doorbell Camera",
              description:
                "1080p HD video doorbell with two-way audio, motion-activated alerts, night vision, and seamless integration with Alexa and Google Home for real-time visitor monitoring.",
              sku: "RUSH-DOORBELL-WIFI",
              brand: { name: "Rushrash Security" },
              offers: {
                price: "199.99",
                priceCurrency: "USD",
                priceValidUntil: "2024-12-31",
                availability: "https://schema.org/InStock",
                itemCondition: "https://schema.org/NewCondition",
                url: "https://rushrashinc.com/products/wi-fi-doorbell",
                seller: { name: "Rushrash Inc." },
              },
            },
          ]}
        />
      </div>

      <PageInfoBox
        pageType="products"
        info_image1={infoIMG1}
        info_image2={infoIMG2}
      />

      <div className="techy-products-container">
        <h1 className="techy-title glitch" data-text="Our Products">
          Our Security Products
        </h1>

        {/* Tabs */}
        <div className="techy-tabs-container">
          <div className="techy-tabs">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`techy-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
                onMouseEnter={() => setHoverTab(tab.id)}
                onMouseLeave={() => setHoverTab(null)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
                <div className="tab-indicator"></div>
                {hoverTab === tab.id && (
                  <div className="tab-hover-effect"></div>
                )}
              </div>
            ))}
          </div>
          <div className="techy-tabs-underline"></div>
        </div>

        {/* Products */}
        <div className="techy-products-grid">
          {filteredProducts.map((p) => (
            <div className="techy-product-card-wrapper" key={p.id}>
              {renderCard(p)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
