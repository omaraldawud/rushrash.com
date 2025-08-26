import "../../assets/css/SideBar.css";
import SafetyTipsSidebar from "../helpers/SafetyTipsSidebar";

function Sidebar() {
  return (
    <aside className="custom-sidebar">
      {/* CCTV System Components */}
      <div className="sidebar-card">
        <div className="card-header">
          <i className="bi bi-camera-video-fill me-2"></i>
          CCTV System Components
        </div>
        <div className="card-body">
          <div className="component-item">
            <div className="component-icon text-warning">
              <i className="bi bi-record-circle-fill"></i>
            </div>
            <div className="component-content">
              <strong>CAMERAS</strong>
              <p>
                Dome, bullet, PTZ, turret, and fisheye cameras for indoor and
                outdoor surveillance.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-warning">
              <i className="bi bi-hdd-stack-fill"></i>
            </div>
            <div className="component-content">
              <strong>DVR/NVR</strong>
              <p>
                Digital and network video recorders to store, manage, and
                playback footage.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-warning">
              <i className="bi bi-ethernet"></i>
            </div>
            <div className="component-content">
              <strong>CABLES & NETWORK</strong>
              <p>
                Coaxial for analog, Ethernet/PoE for IP systems. Ensure proper
                routing and power supply.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-warning">
              <i className="bi bi-bell"></i>
            </div>
            <div className="component-content">
              <strong>SENSORS & ACCESSORIES</strong>
              <p>
                Motion detectors, door contacts, alarms, and auxiliary
                components for enhanced security.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-warning">
              <i className="bi bi-display"></i>
            </div>
            <div className="component-content">
              <strong>MONITORING & SOFTWARE</strong>
              <p>
                Mobile apps, client software, and cloud storage integrations for
                live and recorded surveillance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="sidebar-card">
        <div className="card-header bg-danger text-white">
          <i className="bi bi-bullseye me-2"></i>
          Mission Statement
        </div>
        <div className="card-body">
          <p className="mb-0">
            Delivering professional CCTV installation and monitoring services
            with reliability and security across Chicagoland.
          </p>
        </div>
      </div>

      {/* Licensed & Insured */}
      <div className="sidebar-card">
        <div className="card-header bg-danger text-white">
          <i className="bi bi-shield-check me-2"></i>
          Licensed, Bonded & Insured
        </div>
        <div className="card-body">
          <p className="mb-0">
            Fully licensed, bonded, and insured CCTV company providing trusted
            security solutions for residential and commercial properties.
          </p>
        </div>
      </div>

      {/* Local CCTV */}
      <div className="sidebar-card">
        <div className="card-header bg-danger text-white">
          <i className="bi bi-geo-alt-fill me-2"></i>
          Local CCTV Company
        </div>
        <div className="card-body">
          <p className="mb-0">
            Serving Naperville, Aurora, Plainfield, and the greater Chicago area
            with professional CCTV installations.
          </p>
        </div>
      </div>

      {/* Safety Tips */}
      <div className="sidebar-card">
        <div className="card-header bg-danger text-white">
          <i className="bi bi-shield-check me-2"></i>
          CCTV Safety Tips
        </div>
        <div className="card-body">
          <SafetyTipsSidebar />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
