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
import PASystemsPage from "./pages/PASystemsPAge";
import ArticlesLanding from "./pages/ArticlesLanding";
import ArticlePageTemplate from "./components/articles/ArticlePageTemplate";
import BrandPage from "./components/brands/BrandPage";

// Products  & Brands
import ProductListingPage from "./pages/ProductListingPage";
import SingleProductPage from "./components/products/SingleProductPage";
import { allProducts } from "./components/products/data/allProductsDS";
import brands_ds from "./assets/data/brands_ds";

// Schemas
import { GlobalBusinessSchema } from "./schemas/GlobalBusinessSchema";

// Banner Data
import {
  banners,
  getProductBanner,
  getBrandBanner,
} from "./assets/data/banners_ds";

function getPageBanner() {
  // Default banner from static pages
  let pb = banners[location.pathname] || banners["/"];

  console.log("Pathname: ", location.pathname);

  if (location.pathname.startsWith("/products/")) {
    const parts = location.pathname.split("/");
    // ['', 'products', brand, slug?]
    const brand = parts[2];
    const slug = parts[3]; // may be undefined

    console.log("---------------- brand:", brand, "----------- slug", slug);

    if (slug) {
      // Case 1: Product page
      const product = allProducts.find(
        (p) => p.brand.toLowerCase() === brand.toLowerCase()
      );

      console.log("---------------- prodcut:", product);

      if (product) {
        pb = getProductBanner(product);
      }
    } else {
      // Brand pag
      const brandObj = brands_ds.find(
        (b) => b.name.toLowerCase() === brand.toLowerCase()
      );
      const brandLogo = brandObj ? brandObj.brandLogo : null;
      pb = getBrandBanner(brand, brandLogo, allProducts);
    }
  }

  return pb;
}
function App() {
  const location = useLocation();

  let page_banner = getPageBanner();

  return (
    <Layout page_banner={page_banner}>
      {/* Global schemas */}
      <GlobalBusinessSchema />

      {/* Chatbot (optional) */}
      {/* <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}>
        <Chatbot />
      </div> */}

      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />
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
        <Route path="/services/pa-systems" element={<PASystemsPage />} />
        {/* Contact */}
        <Route path="/contact-rushrash-inc" element={<ContactPage />} />
        {/* Residential/Commercial */}
        <Route
          path="/residential-cctv-security"
          element={<ResidentialSecurityPage />}
        />
        <Route
          path="/commercial-cctv-security"
          element={<CommercialSecurityPage />}
        />
        {/* Legal */}
        <Route path="/rushrash-legal" element={<RushrashLegalPage />} />
        {/* Articles */}
        <Route path="/security-insights" element={<ArticlesLanding />} />
        <Route path="/articles/:slug" element={<ArticlePageTemplate />} />
        {/* Products */}
        <Route path="/security-products" element={<ProductListingPage />} />
        <Route path="/products/:brand" element={<BrandPage />} /> {/* new */}
        <Route path="/products/:brand/:slug" element={<SingleProductPage />} />
        {/* Brands */}
        {/* Catch-all fallback */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
