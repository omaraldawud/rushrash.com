// Reusable SidebarCard

export default function SidebarCard({
  icon,
  title,
  text,
  bgClass = "bg-danger text-white",
}) {
  return (
    <div className="sidebar-card mb-3">
      <div className={`card-header ${bgClass}`}>
        <i className={`bi ${icon} me-2`}></i>
        {title}
      </div>
      <div className="card-body">
        <p className="small text-secondary mb-0">{text}</p>
      </div>
    </div>
  );
}
