// prettier-ignore
import { BsAward, BsHouseDoor, BsGeoAlt, BsShieldCheck, BsWrenchAdjustable, BsDoorOpen, BsBatteryCharging } from "react-icons/bs";

const services_ds = [
  {
    cardPages: ["/", "/index.html", "/garage_door_services.html"],
    cardImage: "/images/sitewide/advanced-garage-doors-logo-red.png",
    cardTitle: "Warranty & Emergency (24/7)",
    cardText: (
      <p>
        All work is guaranteed with a generous warranty. 24/7/365 emergency
        service is available locally.
      </p>
    ),
    cardFooter: " 🚨 Emergency Garage Door Services",
    cardIcon: <BsShieldCheck />,
  },
  {
    cardPages: ["/", "/garage_door_services.html"],
    cardImage: "/images/parts/torsion_springs.png",
    cardTitle: "Full Garage Doors Service Options",
    cardText: (
      <p>
        We offer modern designs, colors, and decorative windows. Free estimates
        included.
      </p>
    ),
    cardFooter: "📍Near ME Garage Door Options",
    cardIcon: <BsWrenchAdjustable />,
  },
  {
    cardPages: [
      "/",
      "/garage_door_services.html",
      "/garage_door_residential.html",
    ],

    cardImage: "/images/sitewide/GarageDoorsTechnicians.jfif",
    cardTitle: "Certified Garage Doors Technicians",
    cardText: (
      <p>
        Our licensed, insured, and bonded pros are trained in all major brands:
        Amarr, Genie, LiftMaster and much more.
      </p>
    ),
    cardFooter: "🛡️ Local Certified Technicians",
    cardIcon: <BsAward />,
  },
  {
    cardPages: ["/garage_door_aboutus.html", "/garage_door_services.html"],
    cardImage: "/images/residential/garage-doors-residential.jpg",
    cardTitle: "Residential Installation & Repair",
    cardText: (
      <p>
        Your home's garage door service is backed by our strong warranty. We
        provide round-the-clock emergency repairs for homeowners, 365 days a
        year.
      </p>
    ),
    cardFooter: "🔒🏠🚪Protect Your Home",
    cardIcon: <BsShieldCheck />,
  },
  {
    cardPages: ["/garage_door_commercial.html"],

    cardImage: "/images/commercial/commercial-overhead.jpg",
    cardTitle: "Commercial Garage Door Services",
    cardText: (
      <p>
        Advanced Garage Door Inc. provides top-tier commercial garage door
        solutions for businesses, warehouses, and industrial facilities. Our
        heavy-duty doors, expert installation, and 24/7 emergency repair
        services ensure maximum security, durability, and operational
        efficiency.
      </p>
    ),
    cardFooter: "🛡️Trusted Commercial Overhead",
    cardIcon: <BsHouseDoor />,
  },

  {
    cardPages: ["/garage_door_aboutus.html", "/garage_door_services.html"],

    cardImage: "/images/parts/springs/broken-springs.jpg",
    cardTitle: "Garage Door Repairs",
    cardText: (
      <ul className="mb-1 pl-5 list-disc">
        <li>
          <a href="/garage_door_repair.html">Broken Spring Replacement</a>
        </li>
        <li>Cable Repair/Replacement</li>
        <li>Roller Replacement</li>
        <li>Track Alignment/Repair</li>
        <li>Hinge Replacement</li>
        <li>Panel Replacement</li>
        <li>Opener Arm Repair</li>
        <li>Garage Door Off-Track Repair</li>
        <li>Stranded Door Rescue (Emergency Services)</li>
      </ul>
    ),
    cardFooter: "🔧Expert Repairs - All Door Types",
    cardIcon: <BsBatteryCharging />,
  },
  {
    cardImage: "/images/openers/liftMaster-gen.png",
    cardTitle: "Garage Door Openers",
    cardText: (
      <ul class="garage-opener-list">
        {/* <!-- Brands --> */}
        <li class="list-header">
          <strong>Top Brands:</strong> Chamberlain, LiftMaster Genie SOMMER
          Ryobi
        </li>
        {/* <!-- Types --> */}
        <li class="list-header">
          <strong>Opener Types:</strong> Chain Drive, Belt Drive, Screw Drive,
          Direct Drive. (jackshaft)
        </li>

        {/* <!-- Features --> */}
        <li class="list-header">
          <strong>Key Features:</strong> Wi-Fi connectivity, Battery backup,
          Smart Home integration (Alexa/Google), Motion-activated lighting
          Security+ 2.0™ encryption (LiftMaster), Camera integration (e.g.,
          myQ®)
        </li>
      </ul>
    ),
    cardFooter: "🔧Garage Door Springs Expert",
    cardIcon: <BsDoorOpen />,
  },
  {
    cardPages: ["/garage_door_aboutus.html", "/garage_door_services.html"],

    cardImage: "/images/banners/garage-door-technician.jfif",
    cardTitle: "Services Near Me",
    cardText: (
      <p>
        As Naperville, Aurora, and Plainfield's trusted garage door specialists,
        we deliver fast, affordable service right to your doorstep. Whether you
        need emergency repairs, a new door installation, or opener
        troubleshooting, our local technicians provide same-day service with a
        generous warranty on all parts.
      </p>
    ),
    cardFooter: "📍Near ME",
    cardIcon: <BsGeoAlt />,
  },
  {
    cardImage: "/images/residential/residential_mid1.jpg",
    cardTitle: "Installation Services",
    cardText: (
      <ul className="mb-1 pl-5 list-disc">
        <li>
          <strong>New </strong>Garage Door Installation
        </li>
        <li>
          <strong>Opener</strong> Installation
        </li>
        <li>
          <strong>New</strong> Springs Installation
        </li>
        <li>
          <strong>Garage Door Parts</strong> Installation
        </li>
        <ul>
          <li>
            <strong>Door Panels</strong> - Steel, aluminum, wood, or fiberglass
          </li>
          <li>
            <strong>Torsion Springs</strong>: Mounted above the door (on a metal
            shaft) to counterbalance weight.
            <li>
              <strong>Extension Springs</strong>: Stretch along horizontal
              tracks (older systems).
            </li>
          </li>
          <li>
            <strong>Rollers:</strong> Small wheels attached to door panels that
            glide along tracks. Types: Nylon (quiet) or steel (durable).
          </li>
          <li>
            <strong>Tracks</strong> Metal rails (vertical and horizontal) that
            guide the door up/down. Must stay aligned for smooth operation.
          </li>
        </ul>
      </ul>
    ),
    cardFooter: "⚙️Professional Installation Services",
    cardIcon: <BsHouseDoor />,
  },
  {
    cardPages: ["services_sidebar"],
    cardImage: "/images/residential/residential_mid.jpg",
    cardTile: "title",
    cardText: (
      <ul
        style={{
          listStyle: "none",
          paddingLeft: 0,
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* High-importance parts (bold + color) */}
        <li style={{ marginBottom: "12px" }}>
          <strong style={{ color: "#d9534f", fontSize: "1.1em" }}>
            SPRINGS
          </strong>
          <span style={{ display: "block", fontSize: "0.9em", color: "#555" }}>
            Torsion (above door) or extension (sides).{" "}
            <em>#1 failure point—replace every 7-10 years.</em>
          </span>
        </li>

        {/* Medium importance (bold) */}
        <li style={{ marginBottom: "12px" }}>
          <strong>ROLLERS</strong>
          <span style={{ display: "block", fontSize: "0.9em", color: "#555" }}>
            Nylon (quiet) or steel (durable). Lubricate annually to prevent
            wear.
          </span>
        </li>

        {/* Critical but less visible */}
        <li style={{ marginBottom: "12px" }}>
          <strong style={{ color: "#5bc0de" }}>CABLES</strong>
          <span style={{ display: "block", fontSize: "0.9em", color: "#555" }}>
            High-strength steel.{" "}
            <span style={{ color: "#d9534f" }}>
              Never touch if broken—under extreme tension!
            </span>
          </span>
        </li>

        {/* Functional but low-maintenance */}
        <li style={{ marginBottom: "12px" }}>
          <strong>HINGES</strong>
          <span style={{ display: "block", fontSize: "0.9em", color: "#555" }}>
            Connect panels. Upgrade to heavy-duty if door sags.
          </span>
        </li>

        {/* Opener components */}
        <li style={{ marginBottom: "12px" }}>
          <strong style={{ textDecoration: "underline" }}>OPENER PARTS</strong>
          <span style={{ display: "block", fontSize: "0.9em", color: "#555" }}>
            Motor, drive (chain/belt), and safety sensors.{" "}
            <em>Plastic gears wear out first.</em>
          </span>
        </li>
      </ul>
    ),
    cardIcon: <BsGeoAlt />,
    cardFooter: "footer",
  },
];

export default services_ds;
