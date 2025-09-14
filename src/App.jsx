import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/layout/Layout";
import Chatbot from "./components/ai/Chatbot";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CCTVServicesPage from "./pages/CCTVServicesPage";
import ContactPage from "./pages/ContactPage";
import ResidentialSecurityPage from "./pages/ResidentialSecurityPage";
import CommercialSecurityPage from "./pages/CommercialSecurityPage";
import POSInstallationPage from "./pages/POSInstallationPage";
import AccessControlServicesPage from "./pages/AccessControlServicesPage";
import ITServicesPage from "./pages/ITServicesPage";
import RushrashLegalPage from "./pages/RushrashLegalPage";
import ArticlesLanding from "./pages/ArticlesLanding";
import PASystemsPage from "./pages/PASystemsPAge";
// pages template
import ArticlePageTemplate from "./components/articles/ArticlePageTemplate";

// Schemas
import { GlobalBusinessSchema } from "./schemas/GlobalBusinessSchema";

// Banner Data
import banners from "./assets/data/banners_ds";

// App Component
function App() {
  const location = useLocation();

  // Get current banner based on pathname, fallback to home
  const page_banner = banners[location.pathname] || banners["/"];

  return (
    <Layout page_banner={page_banner}>
      <GlobalBusinessSchema /> {/* Global defaults only */}
      {/* Chatbot floating in bottom-right */}
      {/* <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}>
        <Chatbot />
      </div> */}
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* About */}
        <Route path="/about-rushrash-inc" element={<AboutPage />} />

        {/* Services */}
        <Route path="/services/it-services" element={<ITServicesPage />} />

        <Route path="/cctv-services" element={<CCTVServicesPage />} />

        <Route
          path="/services/cctv-installation"
          element={<CCTVServicesPage />}
        />
        <Route
          path="/services/access-control"
          element={<AccessControlServicesPage />}
        />

        <Route
          path="/services/pos-installation"
          element={<POSInstallationPage />}
        />

        {/* Contact */}
        <Route path="/contact-rushrash-inc" element={<ContactPage />} />

        {/* Residential Security */}
        <Route
          path="/residential-cctv-security"
          element={<ResidentialSecurityPage />}
        />

        {/* Commercial Security */}
        <Route
          path="/commercial-cctv-security"
          element={<CommercialSecurityPage />}
        />

        {/* Legal Pages */}
        <Route path="/rushrash-legal" element={<RushrashLegalPage />} />
        {/* PA, articles routes */}
        <Route
          path="/access-control-and-monitoring-articles"
          element={<ArticlesLanding />}
        ></Route>
        {/* Article route using slug */}
        <Route path="/articles/:slug" element={<ArticlePageTemplate />} />

        {/* //pa-systems */}
        <Route path="/services/pa-systems" element={<PASystemsPage />} />

        {/* Catch-all fallback to home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
