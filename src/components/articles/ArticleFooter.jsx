// /src/components/articles/ArticleFooter.jsx
import { Link } from "react-router-dom";

export default function ArticleFooter({
  relatedArticles = [],
  relatedProducts = [],
}) {
  return (
    <footer className="article-footer mt-5 pt-5">
      {/* Main container with techy gradient border */}
      <div className="footer-container">
        {/* Section headers with techy styling */}
        <div className="row mb-4">
          {/* Related Articles Column */}
          <div className="col-md-8 d-flex align-items-center mb-3 mb-md-0">
            <div className="section-header">
              <div className="techy-accent-line"></div>
              <h3 className="mb-0 techy-gradient-text">Related Articles</h3>
            </div>
            <Link
              to="/access-control-and-monitoring-articles"
              className="btn techy-btn-primary px-3 py-2 ms-4"
            >
              <span className="techy-btn-icon">→</span>
              View All Articles
            </Link>
          </div>

          {/* Related Products Column */}
          <div className="col-md-4">
            <div className="section-header">
              <div className="techy-accent-line"></div>
              <h3 className="mb-0 techy-gradient-text">Related Products</h3>
            </div>
          </div>
        </div>

        {/* Glowing separator */}
        <div className="techy-separator"></div>

        {/* Content rows */}
        <div className="row">
          {/* Related Articles Content */}
          <div className="col-md-8 mb-4 mb-md-0">
            <div className="d-flex flex-wrap gap-3">
              {relatedArticles.length > 0 ? (
                relatedArticles.map((slug) => {
                  const title = slug
                    .split("-")
                    .map((w) => w[0].toUpperCase() + w.slice(1))
                    .join(" ");

                  return (
                    <Link
                      key={slug}
                      to={`/articles/${slug}`}
                      className="techy-pill techy-pill-article"
                    >
                      {title}
                    </Link>
                  );
                })
              ) : (
                <p className="techy-muted">No related articles available</p>
              )}
            </div>
          </div>

          {/* Related Products Content */}
          <div className="col-md-4">
            <div className="d-flex flex-wrap gap-3">
              {relatedProducts && relatedProducts.length > 0 ? (
                relatedProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products/${product.brand.toLowerCase()}/${
                      product.slug
                    }`}
                    className="techy-pill techy-pill-product"
                  >
                    {product.title}
                  </Link>
                ))
              ) : (
                <p className="techy-muted">No related products available</p>
              )}
            </div>
          </div>
        </div>

        {/* Footer signature */}
        <div className="row mt-4 pt-3">
          <div className="col-12">
            <div className="techy-footer-signature">
              <div className="techy-signature-line"></div>
              <p className="techy-brand">Tech Insights • Knowledge Base</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .article-footer {
          background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
          border-top: 1px solid #e2e8f0;
          position: relative;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .section-header {
          position: relative;
          display: flex;
          align-items: center;
        }

        .techy-accent-line {
          width: 4px;
          height: 28px;
          background: linear-gradient(180deg, #3b82f6 0%, #8b5cf6 100%);
          border-radius: 2px;
          margin-right: 12px;
        }

        .techy-gradient-text {
          background: linear-gradient(90deg, #1e40af 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
          font-size: 1.5rem;
        }

        .techy-btn-primary {
          background: linear-gradient(90deg, #2563eb 0%, #3b82f6 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
          display: flex;
          align-items: center;
        }

        .techy-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(37, 99, 235, 0.3);
        }

        .techy-btn-icon {
          margin-right: 8px;
          font-weight: bold;
        }

        .techy-separator {
          height: 2px;
          background: linear-gradient(
            90deg,
            rgba(59, 130, 246, 0) 0%,
            rgba(59, 130, 246, 0.5) 50%,
            rgba(59, 130, 246, 0) 100%
          );
          margin-bottom: 1.5rem;
          position: relative;
        }

        .techy-separator:after {
          content: "";
          position: absolute;
          width: 6px;
          height: 6px;
          background: #3b82f6;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .techy-pill {
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .techy-pill-article {
          background: #e0f2fe;
          color: #0369a1;
          border: 1px solid #bae6fd;
        }

        .techy-pill-article:hover {
          background: #bae6fd;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(2, 132, 199, 0.15);
        }

        .techy-pill-product {
          background: #f0fdf4;
          color: #15803d;
          border: 1px solid #bbf7d0;
        }

        .techy-pill-product:hover {
          background: #bbf7d0;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(5, 150, 105, 0.15);
        }

        .techy-muted {
          color: #64748b;
          font-style: italic;
        }

        .techy-footer-signature {
          text-align: center;
          position: relative;
          padding-top: 1rem;
        }

        .techy-signature-line {
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(59, 130, 246, 0) 0%,
            rgba(59, 130, 246, 0.3) 50%,
            rgba(59, 130, 246, 0) 100%
          );
          margin-bottom: 1rem;
        }

        .techy-brand {
          color: #64748b;
          font-size: 0.9rem;
          letter-spacing: 0.5px;
          font-weight: 500;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .section-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .techy-btn-primary {
            margin-top: 0.5rem;
            margin-left: 0 !important;
          }

          .techy-gradient-text {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </footer>
  );
}
