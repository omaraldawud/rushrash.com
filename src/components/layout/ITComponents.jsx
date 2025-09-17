export default function ITComponents() {
  return (
    <>
      <div className="sidebar-card ">
        <div className="card-header bg-success text-white">
          <i className="bi bi-camera-video text-warning me-2"></i>
          <span>IT Network Components</span>
        </div>
        <div className="card-body">
          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-record-circle"></i>
            </div>
            <div className="component-content">
              <strong>Endpoints</strong>
              <p>
                Devices that connect to a network, such as desktops, laptops,
                smartphones, and servers. Servers provide centralized resources
                and services to support multiple client devices.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-hdd-stack"></i>
            </div>
            <div className="component-content">
              <strong>Switches</strong>
              <p>
                Network switches link multiple devices within a local area
                network (LAN), directing data packets to their intended
                destinations efficiently.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-hdd-network"></i>
            </div>
            <div className="component-content">
              <strong>Routers</strong>
              <p>
                Devices that connect different networks, including linking a LAN
                to the internet, determining optimal paths for data to reach its
                destination.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-bell"></i>
            </div>
            <div className="component-content">
              <strong>Network Cables</strong>
              <p>
                Physical wiring such as Ethernet and fiber optic cables that
                enable reliable wired connections between networked devices,
                supporting various speeds and capacities.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-display"></i>
            </div>
            <div className="component-content">
              <strong>Wireless Access Points</strong>
              <p>
                Devices that extend network coverage by allowing wireless
                devices to connect, improving mobility and access for users
                throughout a building or campus.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-display"></i>
            </div>
            <div className="component-content">
              <strong>Network Software</strong>
              <p>
                Specialized operating systems installed on servers to manage
                resources, control user access, and maintain smooth network
                operations.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-display"></i>
            </div>
            <div className="component-content">
              <strong>Protocols</strong>
              <p>
                Defined rules for transmitting data across networks. Protocols
                like TCP/IP ensure proper formatting, addressing, routing, and
                delivery of information between devices.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-display"></i>
            </div>
            <div className="component-content">
              <strong>Firewalls</strong>
              <p>
                Security systems that monitor and control incoming and outgoing
                network traffic, blocking unauthorized access and protecting
                devices from potential threats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
