// src/components/functional/ArticleList.jsx
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import articles from "../../assets/data/articles";

export default function ArticleList({ category = "all" }) {
  const cat = (category || "all").toString().toLowerCase();

  const filtered =
    cat === "all"
      ? articles.filter((a) => a.published)
      : articles.filter(
          (a) =>
            normalizeCategory(a.category) === normalizeCategory(cat) &&
            a.published
        );

  return (
    <div>
      <div className="row">
        {filtered.length ? (
          filtered.map((article) => (
            <div className="col-md-4 mb-4" key={article.id}>
              <Card className="shadow-sm h-100">
                {article.image && (
                  <Card.Img
                    variant="top"
                    src={article.image}
                    style={{ height: "100px", objectFit: "cover" }}
                  />
                )}
                <Card.Body>
                  <Card.Title>{article.headline}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">
                    {article.readingTime} •{" "}
                    {new Date(article.datePublished).toLocaleDateString()}
                  </small>
                  <Button
                    href={`/articles/${article.slug}`}
                    variant="outline-primary"
                    size="sm"
                  >
                    Read More
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          ))
        ) : (
          <p className="text-muted">No articles available in this category.</p>
        )}
      </div>
    </div>
  );
}

// helper: normalize category string for robust matching
function normalizeCategory(s) {
  return (s || "")
    .toString()
    .toLowerCase()
    .replace(/[\s_-]+/g, "");
}
