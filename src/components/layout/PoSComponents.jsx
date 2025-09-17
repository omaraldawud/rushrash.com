export default function PoSComponents() {
  return (
    <>
      <div className="sidebar-card">
        <div className="card-header bg-primary text-white">
          <i className="bi bi-camera-video text-warning me-2"></i>
          <span>PoS System Components</span>
        </div>
        <div className="card-body">
          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-record-circle"></i>
            </div>
            <div className="component-content">
              <strong>POS Terminal</strong>
              <p>
                The main device for processing sales, which can be a desktop
                computer, tablet, or specialized point-of-sale terminal.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-hdd-stack"></i>
            </div>
            <div className="component-content">
              <strong>Card Reader</strong>
              <p>
                Hardware that accepts debit, credit, and mobile wallet payments,
                including NFC-enabled devices for contactless transactions.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-hdd-network"></i>
            </div>
            <div className="component-content">
              <strong>Barcode Scanner</strong>
              <p>
                Used to quickly and accurately scan product barcodes for pricing
                and inventory management.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-bell"></i>
            </div>
            <div className="component-content">
              <strong>Cash Drawer</strong>
              <p>
                Secure storage for cash transactions, keeping bills and coins
                organized for daily business operations.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-display"></i>
            </div>
            <div className="component-content">
              <strong>PoS Software</strong>
              <p>
                The software powering the terminal, managing sales, inventory,
                reporting, and integrating with payment systems for smooth
                operations.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-display"></i>
            </div>
            <div className="component-content">
              <strong>Network Requirements</strong>
              <p>
                A stable broadband connection, a reliable payment processor, and
                basic data security measures to ensure PCI compliance and secure
                cloud-based operations.
              </p>
            </div>
          </div>

          <div className="component-item">
            <div className="component-icon text-danger">
              <i className="bi bi-display"></i>
            </div>
            <div className="component-content">
              <strong>Protocols & Firewalls</strong>
              <p>
                Networking protocols like TCP/IP govern data flow, while
                software or hardware firewalls protect the system from
                unauthorized access and malicious threats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
