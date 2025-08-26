//
export default function FooterSection() {
  return (
    <div className="row justify-content-start">
      <div className="col-12 col-md-12 text-start text-secondary">
        <div>
          <p className="small mb-2">
            <strong>Advanced Security Solutions</strong> - Professional CCTV,
            access control, and security camera installation services serving
            homes and businesses in the Chicago area since 2003. Our certified
            technicians provide reliable and emergency service for residential
            and commercial properties.
          </p>
          <p className="small mb-2">
            Specializing in <em>HD CCTV systems</em>, AI-powered video
            analytics, mobile access, and smart monitoring solutions from top
            brands like Hikvision, Dahua, Axis, and Uniview. Trusted security
            company providing full-service installation, maintenance, and
            upgrades for over 20 years.
            <br />
            <strong>Licensed, insured, & bonded</strong>.
          </p>
        </div>
        <div className="mt-5 text-end">
          <small>
            <em>
              &copy; {new Date().getFullYear()}
              Advanced Security Solutions. All rights reserved. |
              <a
                href="https://hostitwise.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-info text-decoration-none ms-1 hover-gold"
              >
                Website Built by HostItWise
              </a>
            </em>
          </small>
        </div>
      </div>
    </div>
  );
}
