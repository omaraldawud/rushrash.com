//
export default function IndustrySolutionsSection() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Industry-Specific Security Solutions</h2>
          <p className="lead">
            Tailored protection for different business environments
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="bi bi-shop display-4 text-primary mb-3"></i>
                <h5>Retail Security</h5>
                <p>
                  Loss prevention, customer counting, and point-of-sale
                  monitoring systems
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="bi bi-building display-4 text-primary mb-3"></i>
                <h5>Office Buildings</h5>
                <p>
                  Access control, lobby surveillance, and perimeter security
                  solutions
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="bi bi-box-seam display-4 text-primary mb-3"></i>
                <h5>Warehouse & Logistics</h5>
                <p>
                  Inventory protection, loading dock monitoring, and
                  facility-wide coverage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
