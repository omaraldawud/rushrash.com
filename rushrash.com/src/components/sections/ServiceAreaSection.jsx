//

export default function ServiceAreaSection() {
  return (
    <section className="container">
      <div className="info-box bg-light p-4 rounded shadow-sm h-100">
        <div className="text-center mb-4">
          <i className="bi bi-geo-alt-fill text-primary fs-1"></i>
          <h3 className="h4 mt-2">Service Area Coverage</h3>
        </div>

        <p className="mb-4">
          We proudly serve the greater Chicagoland area with prompt,
          professional garage door services. Our team covers over 100
          communities across Northern Illinois.
        </p>

        <div className="mb-4">
          <h4 className="h5 mb-3">
            <i className="bi bi-pin-map-fill fs-3 text-info me-2"></i>
            Popular Service Areas:
          </h4>
          <ul className="list-unstyled d-flex flex-wrap gap-3 mb-0">
            <li className="d-flex align-items-center">
              <i className="bi bi-check-circle-fill text-success me-1"></i>
              Schaumburg & Hoffman Estates
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-check-circle-fill text-success me-1"></i>
              Naperville & Aurora
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-check-circle-fill text-success me-1"></i>
              Orland Park & Tinley Park
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-plus-circle-fill text-primary me-1"></i>
              Many more locations
            </li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded mb-4">
          <h4 className="h5 text-primary">Same-Day Service Available</h4>
          <p className="small mb-0">
            Emergency repairs and spring replacement services available 7 days a
            week.
          </p>
        </div>
      </div>

      {/* Organized Service Areas */}
      <div className="row g-4">
        {/* Northwest Suburbs */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-primary">
            <div className="card-header bg-primary text-white">
              <h2 className="h5 mb-0">Northwest Suburbs</h2>
            </div>
            <div className="card-body">
              <ul className="list-unstyled two-column-list">
                {[
                  "Arlington Heights",
                  "Barrington",
                  "Buffalo Grove",
                  "Elk Grove Village",
                  "Hanover Park",
                  "Hoffman Estates",
                  "Palatine",
                  "Rolling Meadows",
                  "Schaumburg",
                  "Streamwood",
                ].map((city) => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* West Suburbs */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-success">
            <div className="card-header bg-success text-white">
              <h2 className="h5 mb-0">West Suburbs</h2>
            </div>
            <div className="card-body">
              <ul className="list-unstyled two-column-list">
                {[
                  "Aurora",
                  "Bartlett",
                  "Batavia",
                  "Carol Stream",
                  "Downers Grove",
                  "Elmhurst",
                  "Glen Ellyn",
                  "Naperville",
                  "St. Charles",
                  "Wheaton",
                ].map((city) => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Southwest Suburbs */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-warning">
            <div className="card-header bg-warning text-dark">
              <h2 className="h5 mb-0">Southwest Suburbs</h2>
            </div>
            <div className="card-body">
              <ul className="list-unstyled two-column-list">
                {[
                  "Bolingbrook",
                  "Frankfort",
                  "Joliet",
                  "Lemont",
                  "Lockport",
                  "Mokena",
                  "Orland Park",
                  "Plainfield",
                  "Tinley Park",
                  "Yorkville",
                ].map((city) => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* North Shore */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-info">
            <div className="card-header bg-info text-white">
              <h2 className="h5 mb-0">Chicago Counties</h2>
            </div>
            <div className="card-body">
              <ul className="list-unstyled two-column-list">
                {[
                  "Cook County",
                  "DuPage County",
                  "Lake County (IL)",
                  "Will County",
                  "Kane County",
                  "McHenry County",
                  "Kendall County",
                  "Grundy County",
                  "DeKalb County",
                  "LaSalle County",
                ].map((city) => (
                  <span className="text-success">{city}, </span>
                ))}
              </ul>
              <p>
                Chicagoland's vibrant communities stretch across multiple
                counties, each offering unique attractions, economic
                opportunities, and suburban charm. From the urban core of Cook
                County to the thriving suburbs of DuPage, Lake (IL), Will, Kane,
                and McHenry, this region blends city convenience with suburban
                comfort. Nearby Northwest Indiana counties like Lake (IN) and
                Porter further expand the metro area, making Chicagoland a
                diverse and dynamic place to live, work, and explore.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Areas Card */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0">More Service Areas</h2>
            </div>
            <div className="card-body">
              <p>We also serve these communities:</p>
              <ul className="list-unstyled two-column-list">
                {[
                  "Addison",
                  "Algonquin",
                  "Bensenville",
                  "Bloomingdale",
                  "Carpentersville",
                  "Crystal Lake",
                  "Des Plaines",
                  "Elgin",
                  "Geneva",
                  "Gurnee",
                  "Lake Zurich",
                  "Libertyville",
                  "Mundelein",
                  "Oak Brook",
                  "Roselle",
                  "Villa Park",
                  "Wood Dale",
                  "Woodridge",
                  "Deerfield",
                  "Evanston",
                  "Glencoe",
                  "Glenview",
                  "Highland Park",
                  "Lake Forest",
                  "Northbrook",
                  "Wilmette",
                  "Winnetka",
                ].map((city) => (
                  <span className="text-success">{city}, </span>
                ))}
              </ul>
              <p>
                Our expert services are tailored to meet your needs, whether
                you're looking for home repairs, professional cleaning,
                landscaping, or skilled contracting. With a commitment to
                quality and customer satisfaction, we provide reliable,
                affordable solutions for residential and commercial clients.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 bg-light border-0">
            <div className="card-body d-flex flex-column justify-content-center text-center">
              <i className="bi bi-geo-alt-fill text-primary fs-1 mb-3"></i>
              <h3 className="h5">Don't see your area?</h3>
              <p className="mb-4">
                We serve most Chicagoland communities. Call to confirm service
                availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
