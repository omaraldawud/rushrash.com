import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/layout/Layout";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CCTVServicesPage from "./pages/CCTVServicesPage";
import ContactPage from "./pages/ContactPage";
import ResidentialSecurityPage from "./pages/ResidentialSecurityPage";
import CommercialSecurityPage from "./pages/CommercialSecurityPage";
import POSInstallationPage from "./pages/POSInstallationPage";
import SecurityConsultationPage from "./pages/SecurityConsultationPage";
import AccessControlServicesPage from "./pages/AccessControlServicesPage";
import ITServicesPage from "./pages/ITServicesPage";
import HomeSurveillancePage from "./pages/HomeSurveillancePage";

// Schema
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
          path="/services/home-surveillance"
          element={<HomeSurveillancePage />}
        />
        <Route
          path="/services/pos-installation"
          element={<POSInstallationPage />}
        />
        <Route
          path="/services/security-consultation"
          element={<SecurityConsultationPage />}
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

        {/* Catch-all fallback to home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
