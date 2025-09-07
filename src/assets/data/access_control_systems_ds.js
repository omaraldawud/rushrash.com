// src/assets/data/access_control_systems_ds.js

// Import placeholder images - you would replace these with your actual images
import imgDAC from "../images/access-control/dac-user-centric.jfif";
import imgMAC from "../images/access-control/mac-military.jfif";
import imgRBAC from "../images/access-control/rbac-organizational.jfif";
import imgABAC from "../images/access-control/aws-abac-attributes.png";
import imgBiometric from "../images/access-control/aws-biometric-fingerprint.jfif";
import imgCardReader from "../images/access-control/card-reader.jfif";

const accessControlSystemsDS = [
  {
    heading: "Discretionary Access Control (DAC)",
    icon: "bi-person-check", // Represents user ownership
    image: imgDAC,
    items: [
      "Control Model: The data owner decides who gets access.",
      "Flexibility: Highly flexible and user-centric.",
      "Common Use: Common in standard operating systems (e.g., file permissions on Windows/Mac).",
      "Key Trait: Uses Access Control Lists (ACLs).",
    ],
    bgColor: "#f3f6fb",
  },
  {
    heading: "Mandatory Access Control (MAC)",
    icon: "bi-shield-lock", // Represents strict, top-down security
    image: imgMAC,
    items: [
      "Control Model: A central authority sets access policies; users cannot change them.",
      "Security: Highly secure and inflexible, designed to protect sensitive information.",
      "Common Use: Government, military, and classified environments.",
      "Key Trait: Uses labels like 'Classified', 'Secret', 'Top Secret'.",
    ],
    bgColor: "#fff8e1",
  },
  {
    heading: "Role-Based Access Control (RBAC)",
    icon: "bi-people", // Represents roles and groups
    image: imgRBAC,
    items: [
      "Control Model: Access is granted based on the user's role within an organization.",
      "Efficiency: Simplifies management by grouping permissions into roles (e.g., 'Admin', 'Editor', 'Viewer').",
      "Common Use: The most common model in business software and corporate networks.",
      "Key Trait: Principle of least privilege is easily enforced.",
    ],
    bgColor: "#e8f5e9",
  },
  {
    heading: "Attribute-Based Access Control (ABAC)",
    icon: "bi-tags", // Represents multiple attributes/tags
    image: imgABAC,
    items: [
      "Control Model: Grants access based on attributes of the user, resource, and environment.",
      "Granularity: Allows for highly dynamic and context-aware policies (e.g., 'Can access if role=Manager AND time=9-5 AND location=Office').",
      "Common Use: Complex, large-scale systems like cloud services.",
      "Key Trait: Uses policies that evaluate multiple characteristics.",
    ],
    bgColor: "#fdf0f5",
  },
  {
    heading: "Biometric Access Control",
    icon: "bi-fingerprint", // Represents biometric authentication
    image: imgBiometric,
    items: [
      "Method: Uses unique physical characteristics for verification.",
      "Types: Includes fingerprint scanners, facial recognition, iris scanners, and palm vein readers.",
      "Security: High security as credentials cannot be lost or easily duplicated.",
      "Application: Used for both physical access to buildings and logical access to devices.",
    ],
    bgColor: "#e0f7fa",
  },
  {
    heading: "Card & Credential Readers",
    icon: "bi-credit-card", // Represents keycards and credentials
    image: imgCardReader,
    items: [
      "Method: Uses physical tokens or cards to grant access.",
      "Types: Proximity cards, key fobs, smart cards, and magnetic stripe cards.",
      "Convenience: Easy to issue, revoke, and manage for a large number of users.",
      "Application: The standard for physical access control in offices, hotels, and secured areas.",
    ],
    bgColor: "#fce4ec",
  },
];

export default accessControlSystemsDS;
