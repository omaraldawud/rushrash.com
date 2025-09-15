import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { allProducts } from "../components/products/data/allProductsDS";
import CCTVCameraCard from "../components/products/cards/CCTVCameraCard";
import RecorderCard from "../components/products/cards/RecorderCard";
import AccessControlCard from "../components/products/cards/AccessControlCard";
import "../components/products/css/products.css";

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
              {hoverTab === tab.id && <div className="tab-hover-effect"></div>}
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
  );
}
