import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import Sidebar from "./Sidebar";
import "../../assets/css/Banner.css";
import "../../assets/css/Layout.css"; // new file for mobile tweaks

// Banners are referenced in App.jsx and defined in  "./assets/data/banners_ds";

export default function Layout({ page_banner, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <Header />

      {/* Banner */}
      {page_banner && <Banner {...page_banner} />}

      <div className="container my-content-container ">
        <div className="row">
          {/* Sidebar Desktop Only */}
          <aside
            className={`col-12 col-md-3 sidebar mb-4 ${
              sidebarOpen ? "d-block" : "d-none d-md-block"
            }`}
          >
            <div className="d-none d-lg-block">
              <Sidebar />
            </div>
          </aside>

          {/* Main Content */}
          <main className="col-12 col-md-9 main-content">{children}</main>
        </div>
      </div>

      <Footer />
    </>
  );
}
