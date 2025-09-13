// components/cards/ServicesGrid.js
import ServiceCard from "./ServiceCard";

export default function ServicesGrid({ services, title, description }) {
  return (
    <section className="py-5">
      <div className="container">
        {title && (
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">{title}</h2>
            {description && <p className="lead text-muted">{description}</p>}
          </div>
        )}

        <div className="row g-4">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
