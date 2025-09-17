export default function PAComponents() {
  return (
    <>
      <div className="sidebar-card ">
        <div className="card-header bg-success text-white">
          <i className="bi bi-camera-video text-warning me-2"></i>
          <span>Core PA system components</span>
        </div>
        <div className="card-body">
          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-record-circle"></i>
            </div>
            <div className="component-content">
              <strong>Microphones</strong>
              <p>
                Essential for capturing audio from speakers or performers,
                microphones come in handheld, lapel (lavalier), and headset
                styles, both wired and wireless.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-hdd-stack"></i>
            </div>
            <div className="component-content">
              <strong>Mixers</strong>
              <p>
                Serve as the system's central control, allowing adjustment of
                volume, tone, and balance for each audio input. Available in
                analog and digital versions, some mixers are built into speaker
                systems for convenience.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-hdd-network"></i>
            </div>
            <div className="component-content">
              <strong>Amplifiers</strong>
              <p>
                Increase audio signals from the mixer to a level that powers the
                speakers effectively. Active speakers include built-in
                amplifiers, while passive models require external amplification.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-bell"></i>
            </div>
            <div className="component-content">
              <strong>Speakers</strong>
              <p>
                Transform electrical signals into sound, with types chosen based
                on the environment and intended use.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-display"></i>
            </div>
            <div className="component-content">
              <strong>Main speakers and subwoofers</strong>
              <p>
                Provide general sound reinforcement for large areas, delivering
                balanced audio across the venue.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-display"></i>
            </div>
            <div className="component-content">
              <strong>Horn speakers</strong>
              <p>
                Designed to deliver high-volume audio in expansive, noisy, or
                outdoor spaces such as factories, stadiums, and transit
                terminals.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-display"></i>
            </div>
            <div className="component-content">
              <strong>Ceiling and wall-mounted speakers</strong>
              <p>
                Installed on ceilings or walls, these speakers are ideal for
                background music and routine announcements in indoor settings.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-display"></i>
            </div>
            <div className="component-content">
              <strong>All-weather speakers</strong>
              <p>
                Built to resist outdoor elements, all-weather speakers deliver
                reliable sound in patios, gardens, or open-air venues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
