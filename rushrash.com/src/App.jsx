import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/layout/Layout";

// Pages
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Contact from "./pages/Contact";
import ResidentialSecurityPage from "./pages/ResidentialSecurityPage";
import CommercialSecurityPage from "./pages/CommercialSecurityPage";

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
        <Route path="/about" element={<About />} />

        {/* Services */}
        <Route path="/services" element={<ServicesPage />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* Residential Security */}
        <Route
          path="/residential-security"
          element={<ResidentialSecurityPage />}
        />

        {/* Commercial Security */}
        <Route
          path="/commercial-security"
          element={<CommercialSecurityPage />}
        />

        {/* Catch-all fallback to home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
