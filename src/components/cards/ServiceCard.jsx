// components/cards/ServiceCard.js
export default function ServiceCard({ service }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 text-center shadow-sm border-0 transition-all">
        <div
          className="card-header p-0"
          style={{ height: "75px", overflow: "hidden" }}
        >
          <img
            src={service.img}
            alt={service.title}
            className="w-100 h-100 object-fit-cover"
          />
        </div>
        <div className="card-body text-start">
          {" "}
          {/* Changed to text-start */}
          <div className="d-flex align-items-center mb-3">
            {" "}
            {/* Added flex container */}
            <i className={`bi ${service.icon} fs-1 text-primary me-3`}></i>{" "}
            {/* Added margin */}
            <h5 className="card-title mb-0">{service.title}</h5>{" "}
            {/* Removed margin */}
          </div>
          <p className="card-text">{service.description}</p>
        </div>
      </div>
    </div>
  );
}
