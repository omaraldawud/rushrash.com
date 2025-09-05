export default function AccessControlComponents() {
  return (
    <>
      <div className="sidebar-card">
        <div className="card-header">
          <i className="bi bi-door-closed text-warning me-2"></i>
          <span>Access Control System Components</span>
        </div>
        <div className="card-body">
          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-key"></i>
            </div>
            <div className="component-content">
              <strong>LOCKS & DOORS</strong>
              <p>
                Electronic locks, smart doors, and turnstiles for residential
                and commercial access points.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-person-badge"></i>
            </div>
            <div className="component-content">
              <strong>CARD READERS & BIOMETRICS</strong>
              <p>
                RFID, NFC, and biometric readers to ensure secure and controlled
                entry.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-gear"></i>
            </div>
            <div className="component-content">
              <strong>CONTROL PANELS</strong>
              <p>
                Centralized panels for managing multiple access points,
                schedules, and permissions.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-shield-lock"></i>
            </div>
            <div className="component-content">
              <strong>SECURITY SOFTWARE</strong>
              <p>
                Management software for logs, alerts, and real-time monitoring
                of all access points.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-camera-video"></i>
            </div>
            <div className="component-content">
              <strong>INTEGRATED SURVEILLANCE</strong>
              <p>
                Optional CCTV integration for monitoring access points and
                ensuring safety compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
