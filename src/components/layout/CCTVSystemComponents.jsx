export default function CCTVSystemComponents() {
  return (
    <>
      <div className="sidebar-card">
        <div className="card-header bg-success text-white">
          <i className="bi bi-camera-video text-warning me-2"></i>
          <span>CCTV System Components</span>
        </div>
        <div className="card-body">
          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-record-circle"></i>
            </div>
            <div className="component-content">
              <strong>Cameras</strong>
              <p>
                A variety of cameras, including dome, bullet, PTZ, turret, and
                fisheye, designed for both indoor and outdoor surveillance
                applications.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-hdd-stack"></i>
            </div>
            <div className="component-content">
              <strong>DVR/NVR Recorders</strong>
              <p>
                Digital and network video recorders that securely store footage
                and allow easy playback and management of video data.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-hdd-network"></i>
            </div>
            <div className="component-content">
              <strong>Cables & Networking</strong>
              <p>
                Coaxial cables for analog setups and Ethernet/PoE for IP
                systems, ensuring reliable connectivity and power delivery for
                all devices.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-bell"></i>
            </div>
            <div className="component-content">
              <strong>Sensors & Accessories</strong>
              <p>
                Motion detectors, door contacts, alarms, and other add-ons that
                enhance security and integrate seamlessly with the CCTV system.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-display"></i>
            </div>
            <div className="component-content">
              <strong>Monitoring & Software</strong>
              <p>
                Mobile apps, client software, and cloud storage options for live
                monitoring, alerts, and reviewing recorded footage from
                anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
