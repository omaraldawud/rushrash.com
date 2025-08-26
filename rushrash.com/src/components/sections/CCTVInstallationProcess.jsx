import "../../assets/css/cctv_installation_process.css";

/////////////////////////////
const CCTVInstallationProcess = ({ pageType = "CCTV" }) => {
  return (
    <div className="position-relative py-5 mb-5 rounded-3 overflow-hidden">
      {/* Decorative background elements */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 bg-light"
        style={{
          opacity: 0.9,
          backgroundImage: `
               radial-gradient(circle at 10% 20%, rgba(13, 110, 253, 0.05) 0%, transparent 20%),
               radial-gradient(circle at 90% 80%, rgba(25, 135, 84, 0.05) 0%, transparent 20%)
             `,
          zIndex: -1,
        }}
      ></div>

      {/* Diagonal stripes */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: `repeating-linear-gradient(
               45deg,
               transparent,
               transparent 10px,
               rgba(13, 110, 253, 0.03) 10px,
               rgba(13, 110, 253, 0.03) 20px
             )`,
          zIndex: -1,
        }}
      ></div>

      <div className="container position-relative">
        <h2 className="text-center mb-5 display-5 fw-bold text-dark">
          <span className="text-primary">
            Our {pageType} Installation Process
          </span>
        </h2>

        <div className="row g-4 g-lg-5">
          {[
            {
              step: "1",
              title: "Site Analysis & Consultation",
              description:
                "Our experts evaluate your property, security needs, and camera placement for optimal coverage.",
              icon: "bi-clipboard2-check",
              color: "primary",
            },
            {
              step: "2",
              title: "System Design & Planning",
              description:
                "We design a CCTV layout, select camera types, and plan wiring, PoE, or wireless connections.",
              icon: "bi-diagram-3",
              color: "success",
            },
            {
              step: "3",
              title: "Professional Installation & Setup",
              description:
                "Certified technicians install cameras, configure NVR/DVR systems, and ensure remote access and recording functionality.",
              icon: "bi-camera-video",
              color: "warning",
            },
            {
              step: "4",
              title: "Testing & Handover",
              description:
                "We verify all cameras, ensure recording and remote access works perfectly, and provide guidance to the client on system usage.",
              icon: "bi-check2-circle",
              color: "info",
            },
          ].map((step, index) => (
            <div key={index} className="col-md-3">
              <div
                className={`process-step h-100 p-4 rounded-4 bg-white shadow-sm transition-all border-top border-4 border-${step.color}`}
              >
                <div className={`step-icon mb-3 text-${step.color}`}>
                  <i className={`bi ${step.icon} fs-1`}></i>
                </div>
                <div className="step-number mb-2">
                  <span className={`badge bg-${step.color} rounded-pill`}>
                    Step {step.step}
                  </span>
                </div>
                <h3 className="h5 fw-semibold mb-3">{step.title}</h3>
                <p className="text-muted mb-0">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CCTVInstallationProcess;
