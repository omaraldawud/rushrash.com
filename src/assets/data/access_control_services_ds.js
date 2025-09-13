// src/assets/data/access_control_services_ds.js

//images
import imgDAC from "../images/access-control/dac-user-centric.jfif";
import imgMAC from "../images/access-control/mac-military.jfif";
import imgRBAC from "../images/services/access-control/rbac-organizational-75.jpg";
import imgABAC from "../images/access-control/aws-abac-attributes.png";
import imgBiometric from "../images/services/access-control/biometric-fingerprint-75.jpg";
import imgCardReader from "../images/services/access-control/imgCardReader-75.jpg";

const access_control_services_ds = [
  {
    title: "Door Access & Credential Systems",
    icon: "bi-door-open",
    img: imgCardReader,
    description:
      "Comprehensive access control solutions including modern door access systems with smart card, keypad, and credential reader technologies. Provides secure facility monitoring with flexible access methods for employees and contractors using proximity cards, key fobs, and smart cards that are easy to issue, revoke, and manage for large user bases across offices, hotels, and secured areas.",
  },
  {
    title: "Biometric Access",
    icon: "bi-fingerprint", // Represents biometric authentication
    img: imgBiometric,
    description:
      "Advanced biometric authentication using unique physical characteristics like fingerprints, facial recognition, iris scanning, and palm vein readers. Provides high security for both physical building access and logical device access since credentials cannot be lost or easily duplicated.",
  },
  {
    title: "DAC",
    icon: "bi-person-check", // Represents user ownership
    img: imgDAC,
    description:
      "Discretionary Access Control - Owner-managed access control where data owners decide permissions using Access Control Lists (ACLs). Highly flexible and user-centric, commonly implemented in standard operating systems like Windows and Mac for file permissions.",
  },
  {
    title: "MAC",
    icon: "bi-shield-lock", // Represents strict, top-down security
    img: imgMAC,
    description:
      "Mandatory Access Control - Centrally managed access control where policies are set by authority and users cannot change them. Highly secure and inflexible, using classification labels like 'Classified', 'Secret', and 'Top Secret' for government, military, and sensitive environments.",
  },
  {
    title: "RBAC",
    icon: "bi-people", // Represents roles and groups
    img: imgRBAC,
    description:
      "Role-Based Access Control - Permissions are assigned to organizational roles rather than individuals. Simplifies management through role groupings like 'Admin', 'Editor', and 'Viewer', efficiently enforcing the principle of least privilege in business software and corporate networks.",
  },
  {
    title: "ABAC",
    icon: "bi-tags", // Represents multiple attributes/tags
    img: imgABAC,
    description:
      "Dynamic access control that evaluates multiple attributes including user characteristics, resource properties, and environmental context. Enables highly granular, context-aware policies (e.g., 'Manager can access during office hours from company location') for complex, large-scale systems like cloud services.",
  },
];

export default access_control_services_ds;
