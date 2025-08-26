//
//
export default function WarningInfobox({
  title,
  description,
  warningNote,
  dangerTitle = "Extreme Hazard Warning",
  dangerContent,
  imageSrc,
  imageAlt,
  imageCaption,
  className = "",
}) {
  return (
    <div
      className={`astra-infobox d-flex flex-column flex-md-row gap-4 p-4 bg-light rounded-3 shadow-sm border border-light ${className}`}
    >
      {/* Text Content */}
      <div className="flex-grow-1">
        <h3 className="text-danger mb-3 fw-bold">{title}</h3>

        <div className="mb-4">
          <p className="mb-3">{description}</p>

          {warningNote && (
            <div className="alert alert-warning d-flex align-items-start mb-3">
              <span className="me-2">⚠️</span>
              <div>{warningNote}</div>
            </div>
          )}
        </div>

        {/* Danger Section */}
        {dangerContent && (
          <div className="bg-danger bg-opacity-10 p-3 rounded-2 border-start border-4 border-danger mb-4">
            <div className="d-flex align-items-center mb-2">
              <span className="text-danger me-2 fs-4">☠️</span>
              <h4 className="text-danger mb-0">{dangerTitle}</h4>
            </div>
            <p className="mb-0">{dangerContent}</p>
          </div>
        )}
      </div>

      {/* Image - Only renders if imageSrc provided */}
      {imageSrc && (
        <div
          className="flex-shrink-0"
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <img
            src={imageSrc}
            alt={imageAlt || ""}
            className="img-fluid rounded-3 shadow-sm"
            style={{ border: "1px solid #dee2e6" }}
          />
          {imageCaption && (
            <div className="text-center mt-2 text-muted small">
              <em>{imageCaption}</em>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
