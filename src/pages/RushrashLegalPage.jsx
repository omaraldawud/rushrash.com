import SEOMeta from "../components/seo/SEOMeta";
import { Container } from "react-bootstrap";
//components
import PageInfoBox from "../components/cards/PageInfoBox";
import rr_company_ds from "../assets/data/rr_company_ds";
import companyInfo from "../assets/data/rr_company_ds";
import Logo from "../components/layout/Logo";

//images
import securitySrvcImg from "../assets/images/security-protection-anti-virus-software.jpeg";
import dataPrvcyImg from "../assets/images/cyber-security.jpeg";
import techInstalingImg from "../assets/images/cctv-installation.png";
import certifiedTechImg from "../assets/images/parts-cables-connectores/It-and-Network-Services.jpg";
import techItSrvcImg from "../assets/images/it-services/cat-cables-it-network-setup.jpeg";
//
//
export default function RushrashLegalPage() {
  return (
    <>
      <SEOMeta
        title="Security & Legal Information | Rushrash Surveillance"
        description="Review our terms of service, privacy policy, and company information. Licensed and trusted providers of CCTV, access control, PoS, and IT services across Chicagoland."
        keywords="CCTV legal, access control privacy policy, IT services terms of service, PoS security"
      />

      <Container fluid>
        <PageInfoBox pageType="legal" />
      </Container>

      <div className="container">
        {/* Mission Statement Section */}
        <section className="row align-items-center mb-5">
          <div className="col-lg-6 pe-lg-5">
            <h2 className="display-5 fw-bold mb-4 text-primary">
              Our Commitment
            </h2>
            <div className="border-start border-4 border-primary ps-4">
              <h3 className="text-dark mb-3">Mission Statement</h3>
              <p className="lead">
                Raise the standards of quality in surveillance and IT solutions.
                Provide reliable service with personal attention. Become the
                most trusted provider in security, access control, PoS, and IT
                services.
              </p>

              <div className="mt-4">
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-shield-alt fa-2x text-primary me-3"></i>
                  <div>
                    <h4 className="mb-0">Licensed & Trusted</h4>
                    <p className="mb-0">
                      We are fully licensed and trusted experts in CCTV, access
                      control, PoS, and IT services — delivering professional
                      service across Chicagoland.
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <i className="fas fa-map-marker-alt fa-2x text-primary me-3"></i>
                  <div>
                    <h4 className="mb-0">Local Security & IT Company</h4>
                    <p className="mb-0">
                      Serving Naperville, Aurora, Plainfield, and all Chicago
                      suburbs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="row g-3">
              <div className="col-md-6">
                <Logo logoWidth="200px" />
              </div>
              <div className="col-md-6">
                <img
                  src={techInstalingImg}
                  alt="Technician installing security system"
                  className="img-fluid rounded-3"
                  style={{ height: "250px", objectFit: "cover", width: "100%" }}
                />
              </div>
              <div className="d-flex gap-3 justify-content-center my-3">
                <img
                  src={certifiedTechImg}
                  alt="Certified security technician"
                  className="img-fluid rounded-2"
                  style={{
                    height: "150px",
                    objectFit: "contain",
                    width: "48%",
                    backgroundColor: "#f8f9fa",
                    border: "1px solid #e9ecef",
                  }}
                />
                <img
                  src={techItSrvcImg}
                  alt="Technician performing IT service"
                  className="img-fluid rounded-2"
                  style={{
                    height: "150px",
                    objectFit: "contain",
                    width: "48%",
                    backgroundColor: "#f8f9fa",
                    border: "1px solid #e9ecef",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section className="row align-items-center mb-5 py-4 bg-light rounded-4">
          <div className="col-lg-6 pe-lg-5">
            <h2 className="fw-bold mb-4 text-primary">Privacy Policy</h2>
            <p>
              Rushrash Surveillance is committed to protecting your privacy.
              This policy outlines how we collect, use, and safeguard your
              personal information when you use our security, IT, or PoS
              services.
            </p>

            <h4 className="mt-4">Information Collection</h4>
            <p>
              We collect information when you request services, estimates, or
              contact our team. This may include your name, address, phone
              number, and email.
            </p>

            <h4 className="mt-4">Data Security</h4>
            <p>
              We implement strict security measures to protect your personal and
              business information. All sensitive data is transmitted via Secure
              Socket Layer (SSL) technology.
            </p>

            <h4 className="mt-4">Policy Updates</h4>
            <p>
              This policy may be updated periodically. We will notify you of any
              changes by posting the updated policy on this page.
            </p>
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="position-relative rounded-4 overflow-hidden shadow-lg">
              <img
                src={dataPrvcyImg}
                alt="Data privacy and security illustration"
                className="img-fluid w-100"
                style={{ minHeight: "300px", objectFit: "contain" }}
              />
              <div className="position-absolute bottom-0 start-0 end-0 bg-primary bg-opacity-90 text-white p-3">
                <h4 className="mb-0 text-center">Your Privacy Matters To Us</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Terms of Service Section */}
        <section className="row align-items-center mb-5 py-4">
          <div className="col-lg-6 pe-lg-5">
            <h2 className="fw-bold mb-4 text-primary">Terms of Service</h2>
            <p>
              By using our services, you agree to these terms and conditions.
              Please read them carefully before scheduling any CCTV, access
              control, PoS, or IT services with Rushrash Surveillance.
            </p>

            <h4 className="mt-4">Service Agreements</h4>
            <p>
              All services are performed according to industry standards and
              manufacturer specifications. We provide warranties as outlined in
              your service contract.
            </p>

            <h4 className="mt-4">Payment Terms</h4>
            <p>
              Payment is due upon completion of services unless other
              arrangements are made in advance. We accept cash, checks, and all
              major credit cards.
            </p>

            <h4 className="mt-4">Cancellation Policy</h4>
            <p>
              We require 24 hours notice for appointment cancellations. Repeated
              cancellations may result in a service fee.
            </p>
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              <img
                src={securitySrvcImg}
                alt="Technician reviewing service agreement"
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body bg-light">
                <h5 className="card-title">Clear Service Terms</h5>
                <p className="card-text">
                  We ensure all terms are clearly explained before beginning any
                  work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright Section */}
        <section className="row align-items-center py-4 bg-dark text-white rounded-4">
          <div className="col-lg-7 pe-lg-5">
            <h2 className="fw-bold mb-4 text-light">Copyright Information</h2>
            <p>
              © {new Date().getFullYear()} Rushrash Surveillance. All rights
              reserved.
            </p>

            <h4 className="mt-4">Content Usage</h4>
            <p>
              All content on this website, including text, graphics, logos, and
              images, is the property of Rushrash Surveillance and protected by
              copyright laws.
            </p>

            <h4 className="mt-4">Permissions</h4>
            <p>
              For permission to use any materials from this site, please contact
              us at
              <a href="mailto:info@rushrash.com" className="text-white">
                {" "}
                {rr_company_ds.email}
              </a>
              .
            </p>
          </div>

          <div className="col-lg-5 mt-5 mt-lg-0">
            <Logo logoWidth="400px" />
          </div>
        </section>
      </div>
    </>
  );
}
