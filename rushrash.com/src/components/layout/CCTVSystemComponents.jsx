export default function CCTVSystemComponents() {
  return (
    <>
      <div className="sidebar-card">
        <div className="card-header">
          <i className="bi bi-camera-video text-warning me-2"></i>
          <span style={{}}>CCTV System Components</span>
        </div>
        <div className="card-body">
          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-record-circle"></i>
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
            <div className="component-icon text-danger">
              <i className="bi bi-hdd-stack"></i>
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
            <div className="component-icon text-danger">
              <i className="bi bi-hdd-network"></i>
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
            <div className="component-icon text-danger">
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
            <div className="component-icon text-danger">
              <i className="bi bi-display"></i>
            </div>
            <div className="component-content">
              <strong>MONITORING & SOFTWARE</strong>
              <p small text-secondary>
                Mobile apps, client software, and cloud storage integrations for
                live and recorded surveillance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
