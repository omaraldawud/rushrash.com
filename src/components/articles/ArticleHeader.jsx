// /src/components/articles/ArticleHeader.jsx
//

// src/components/articles/ArticleHeader.jsx
/* eslint-disable react/prop-types */
export default function ArticleHeader({ article }) {
  return (
    <header className="mb-3">
      {/* Full-width image banner */}
      <div
        className="w-100 rounded-4 overflow-hidden"
        style={{
          maxHeight: "200px",
          height: "200px",
        }}
      >
        <img
          src={article.image}
          alt={article.headline}
          className="w-100 h-100 object-fit-cover"
        />
      </div>

      {/* Metadata row: H2 now comes from Markdown, author/date/readingTime right-aligned */}
      <div className="d-flex justify-content-end mt-2 text-muted small">
        <span>{article.author}</span> ·{" "}
        <time dateTime={new Date(article.datePublished).toISOString()}>
          {new Date(article.datePublished).toDateString()}
        </time>{" "}
        · {article.readingTime}
      </div>
    </header>
  );
}
