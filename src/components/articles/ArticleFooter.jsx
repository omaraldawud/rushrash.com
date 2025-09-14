// /src/components/articles/ArticleFooter.jsx
//

import { Link } from "react-router-dom";

export default function ArticleFooter({
  relatedArticles = [],
  relatedProduct,
}) {
  return (
    <footer className="mt-5 pt-5 border-top">
      {/* Row 1: Section Headers */}
      <div className="row mb-4">
        {/* Related Articles Column */}
        <div className="col-md-9 d-flex align-items-center justify-content-start mb-3 mb-md-0">
          <h3 className="mb-0 text-primary">Related Articles</h3>
          <Link
            to="/access-control-and-monitoring-articles"
            className="btn btn-warning px-3 py-2 ms-5 shadow-sm"
          >
            View All Articles
          </Link>
        </div>

        {/* Related Products Column */}
        <div className="col-md-3">
          <h3 className="mb-0 text-primary">Related Products</h3>
        </div>
      </div>

      {/* Horizontal rule separating headers from content */}
      <hr className="mb-4" />

      {/* Row 2: Content */}
      <div className="row">
        {/* Related Articles Content */}
        <div className="col-md-9 mb-4 mb-md-0">
          <div className="d-flex flex-wrap gap-2">
            {relatedArticles.map((slug) => {
              const title = slug
                .split("-")
                .map((w) => w[0].toUpperCase() + w.slice(1))
                .join(" ");

              return (
                <Link
                  key={slug}
                  to={`/articles/${slug}`}
                  className="btn btn-outline-primary px-3 py-2 shadow-sm"
                >
                  {title}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Related Products Content */}
        <div className="col-md-3 justify-content-start">
          <div className="d-flex flex-wrap gap-2 ">
            {relatedProduct && (
              <Link
                to={relatedProduct.link}
                className="btn btn-outline-secondary px-4 py-2 shadow-sm"
              >
                {relatedProduct.title}
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
