export const garageServicesForSchemas = [
  //Service Call
  {
    name: "Service Call",
    description: "Professional diagnosis and assessment of garage door issues",
    offers: {
      price: "75",
      priceCurrency: "USD",
    },
  },
  // Springs
  {
    name: "Garage Door Springs Replacement",
    description:
      "Emergency torsion or extension spring replacement (10-year warranty on parts)",
  },
  // Installations
  {
    name: "New Garage Door Installation",
    description:
      "Professional installation of residential and commercial garage doors",
    offers: { price: "499+" },
    serviceType: "InstallationService",
  },
  {
    name: "Garage Door Opener Installation",
    description:
      "Expert installation of belt-drive, chain-drive, and smart openers",
    offers: { price: "249+" },
    serviceType: "InstallationService",
  },

  // Repairs
  {
    name: "Garage Door Repair",
    description: "Emergency repairs for springs, cables, and off-track doors",
    offers: { price: "99+" },
    serviceType: "EmergencyService",
  },
  {
    name: "Opener Repair",
    description: "Diagnosis and repair of all opener brands",
    offers: { price: "89+" },
    serviceType: "RepairService",
  },

  // Parts
  {
    name: "Roller Replacement",
    description: "Upgrade to nylon rollers for quieter operation",
    offers: { price: "129+" },
    serviceType: "MaintenanceService",
  },
  {
    name: "Cable & Hinge Replacement",
    description: "High-strength steel cables and heavy-duty hinges",
    offers: { price: "149+" },
    serviceType: "RepairService",
  },
];
