// src/components/functional/SafetyTips.jsx
import safetyTips from "../../assets/data/safety_tips_ds";

export default function SafetyTips({ category = "all" }) {
  const cat = (category || "all").toString().toLowerCase();

  const filtered =
    cat === "all"
      ? safetyTips
      : safetyTips.filter(
          (t) => normalizeCategory(t.category) === normalizeCategory(cat)
        );

  return (
    <div>
      <ul className="list-group">
        {filtered.length ? (
          filtered.map((tip) => (
            <li
              key={tip.id}
              className="list-group-item d-flex align-items-start"
            >
              <i className={`${tip.icon} me-3`} />
              <div>
                <strong>{tip.title}</strong>
                <div>{tip.tip}</div>
                {tip.article_link && (
                  <a href={tip.article_link} className="small">
                    Read more →
                  </a>
                )}
              </div>
            </li>
          ))
        ) : (
          <p className="text-muted">
            No safety tips available in this category.
          </p>
        )}
      </ul>
    </div>
  );
}

function normalizeCategory(s) {
  return (s || "")
    .toString()
    .toLowerCase()
    .replace(/[\s_-]+/g, "");
}
