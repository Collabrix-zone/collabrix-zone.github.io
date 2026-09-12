// Display names live here; internal identifiers and URLs remain stable on rename.
export const products = {
  memoryOS: {
    id: 'memory-os',
    name: 'MemoryOS',
    workingName: false,
    routeType: 'external',
    url: 'https://memoryos.in',
    betaUrl: 'https://memoryos.in/signin',
    status: 'Beta',
    category: 'Organizational Knowledge / Memory',
    description: 'Organizational memory for teams whose decisions outlive the people who made them. Turn documents and threads into searchable knowledge, with sensitive content redacted locally before it reaches a model provider.',
    features: ['Knowledge cards with cited evidence', 'Searchable decisions, rationale and research', 'Local redaction before AI'],
  },
  clinicPlatform: {
    id: 'clinic-platform',
    name: 'CareOS',
    workingName: true,
    routeType: 'internal',
    route: '/products/clinic-platform',
    url: '/products/clinic-platform',
    status: 'Private Beta',
    category: 'Clinic Operations Software',
    company: 'Collabrix Zone Private Limited',
    description: 'A healthcare software platform being developed by Collabrix Zone Private Limited to simplify operational and clinical workflows for independent clinics and medical practices.',
    proposition: 'A clinic operating platform designed around everyday practice workflows.',
    features: ['Independent clinics and medical practices in India', 'Administrative and clinical workflows', 'Being developed and validated with early users'],
    modules: [
      { title: 'Patient Management', description: 'Maintain patient information and longitudinal context within the clinic workflow.' },
      { title: 'Appointments & Queue', description: 'Support scheduled appointments, walk-ins and day-to-day patient flow.' },
      { title: 'Clinical Workflows', description: 'Support consultation-related workflows while keeping healthcare professionals in control.' },
      { title: 'Role-Based Access', description: 'Provide appropriate access for doctors, reception staff and other authorised users.' },
      { title: 'Audit Trails', description: 'Maintain visibility into important actions performed within the system.' },
      { title: 'Data Management', description: 'Support structured handling of clinic and patient-related information.' },
      { title: 'Clinic Operations', description: 'Bring commonly disconnected administrative workflows into a single operating environment.' },
    ],
    audiences: [
      { title: 'Doctors', description: 'Maintain visibility across patient and consultation workflows.' },
      { title: 'Reception / Clinic Staff', description: 'Coordinate appointments, queues and appropriate administrative tasks.' },
      { title: 'Clinic Owners / Administrators', description: 'Understand and manage practice operations through a more unified system.' },
    ],
  },
} as const;

export const productCollection = Object.values(products);
