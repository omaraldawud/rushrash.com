export default function AccessControlComponents() {
  return (
    <>
      <div className="sidebar-card">
        <div className="card-header bg-secondary text-white">
          <i className="bi bi-door-closed text-warning me-2"></i>
          <span>Access Control System Components</span>
        </div>
        <div className="card-body">
          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-key"></i>
            </div>
            <div className="component-content">
              <strong>Locks & Doors</strong>
              <p>
                Smart electronic locks, reinforced doors, and turnstiles
                designed for secure entry in both residential and commercial
                buildings.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-person-badge"></i>
            </div>
            <div className="component-content">
              <strong>Card Readers & Biometric Systems</strong>
              <p>
                Devices using RFID, NFC, or biometric verification to control
                access and ensure only authorized personnel can enter.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-gear"></i>
            </div>
            <div className="component-content">
              <strong>Control Panels</strong>
              <p>
                Centralized control units for managing multiple entry points,
                configuring schedules, and setting user permissions efficiently.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-shield-lock"></i>
            </div>
            <div className="component-content">
              <strong>Security Management Software</strong>
              <p>
                Applications that monitor access logs, send real-time alerts,
                and provide analytics for all entry points in the system.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-camera-video"></i>
            </div>
            <div className="component-content">
              <strong>Integrated Surveillance</strong>
              <p>
                Optional CCTV or video monitoring integration to enhance
                security and track access point activity for compliance and
                safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
