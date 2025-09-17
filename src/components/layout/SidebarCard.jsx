export default function SidebarCard({
  icon,
  title,
  text,
  link,
  linkText = "Learn more",
  cardHeaderBgColorClass,
}) {
  return (
    <div className="sidebar-card">
      <div className={`card-header ${cardHeaderBgColorClass || ""}`}>
        {" "}
        <i className={`bi ${icon} me-2 text-warning`}></i>
        {title}
      </div>
      <div className="card-body">
        <p>
          {text}
          {link && (
            <>
              {" "}
              <a href={link} className="text-decoration-none">
                {linkText}
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
