/**
 * Central editable company configuration for Upadhyay Rubber Industry.
 * All company details, contact channels, verified stats, and factory media paths are managed here.
 */

export const companyData = {
  name: "Upadhyay Rubber Industry",
  shortName: "Upadhyay Rubber",
  tagline: "Premium Manufacturer of Rubber & Plastic Components",
  subTagline: "Precision custom mould development, hydraulic moulding, and compounding for automotive and industrial engineering worldwide.",
  
  leadership: {
    owner: "Mr. Daya Shankar Upadhyay",
    role: "Founder & Proprietor",
    headline: "Leadership Built on Trust and Precision",
    biography: `With dedicated craftsmanship and an uncompromising commitment to engineering tolerances, Mr. Daya Shankar Upadhyay founded Upadhyay Rubber Industry with a simple vision: deliver custom-compounded, high-durability elastomeric and plastic components that exceed industrial expectations. Under his hands-on leadership, the company has forged long-standing partnerships with tier-1 equipment manufacturers, industrial machinery builders, and automotive suppliers across India.`,
    personalQuote: "Our reputation rests on every single seal, bush, and gasket leaving our factory. We don't just deliver components; we engineer reliability into our clients' mission-critical machinery.",
    quoteAuthor: "Daya Shankar Upadhyay, Founder",
  },

  contact: {
    ownerName: "Daya Shankar Upadhyay",
    phone: "+91 88104 22099",
    phoneClean: "918810422099",
    email: "upadhyayrubber@gmail.com",
    address: {
      street: "Gali Number 25, near SK Jewellers, Block E, Sanjay Colony, Sector 23",
      city: "Faridabad",
      state: "Haryana",
      pincode: "121004",
      country: "India",
      full: "Gali Number 25, near SK Jewellers, Block E, Sanjay Colony, Sector 23, Faridabad, Haryana – 121004, India",
    },
    hours: "Monday – Saturday: 08:30 AM – 07:30 PM (IST) | Sunday Closed",
    whatsappUrl: "https://wa.me/918810422099?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20rubber%20and%20plastic%20components.",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.536762319082!2d77.29177197626297!3d28.372839975806466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc7a9a130f1b%3A0xe165ee2d3ec37b67!2sSector%2023%2C%20Sanjay%20Colony%2C%20Faridabad%2C%20Haryana%20121005!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Gali+Number+25,+near+SK+Jewellers,+Block+E,+Sanjay+Colony,+Sector+23,+Faridabad,+Haryana+121004",
  },

  // Editable company metrics - clearly highlighted and verified
  stats: [
    { label: "Years of Manufacturing Experience", value: "8+", verified: true, detail: "Specialized in custom rubber compounding & hydraulic moulding" },
    { label: "Formulations & Components Developed", value: "300+", verified: true, detail: "Spanning NBR, EPDM, Silicone, Neoprene & Viton" },
    { label: "Industrial & OEM Clients", value: "35+", verified: true, detail: "Serving automotive, hydraulic, and electrical manufacturers" },
    { label: "Quality Certification", value: "ISO 9001:2015", verified: true, detail: "Certified Quality Management System" },
  ],

  // Verified Certification
  certification: {
    title: "ISO 9001:2015 Certified",
    standard: "ISO 9001:2015",
    scope: "Manufacture & Supply of Moulded Rubber, Extruded Profiles, Oil Seals, Gaskets & Precision Plastic Components",
    status: "Verified",
    imageUrl: "https://arunkumarsharma1.github.io/upadhyay-rubber-industry-website-/cer.png",
  },

  // Media assets from verified original source
  media: {
    factory: "https://arunkumarsharma1.github.io/upadhyay-rubber-industry-website-/company.png",
    mixingMill: "https://arunkumarsharma1.github.io/upadhyay-rubber-industry-website-/ar.png",
    mouldingPackaging: "https://arunkumarsharma1.github.io/upadhyay-rubber-industry-website-/packaging.jpg",
    testingLab1: "https://arunkumarsharma1.github.io/upadhyay-rubber-industry-website-/la.png",
    testingLab2: "https://arunkumarsharma1.github.io/upadhyay-rubber-industry-website-/un.png",
    certification: "https://arunkumarsharma1.github.io/upadhyay-rubber-industry-website-/cer.png",
  },

  // Company values
  values: [
    {
      title: "Dimensional Precision",
      description: "Strict adherence to DIN ISO 3302-1 tolerances. Every batch is measured for durometer hardness, elongation, tensile strength, and exact tolerances.",
      icon: "Target",
    },
    {
      title: "Material Consistency",
      description: "In-house compounding and two-roll open mixing mill allow continuous batch-to-batch polymer formulation without third-party variability.",
      icon: "Layers",
    },
    {
      title: "Bespoke Customization",
      description: "From 2D/3D CAD technical drawings or physical samples, our in-house tool development turns custom prototypes into high-volume runs.",
      icon: "Cpu",
    },
    {
      title: "Customer Commitment",
      description: "Transparent pricing, rapid turnaround times on custom dies, and direct access to engineering leadership for immediate project support.",
      icon: "ShieldCheck",
    },
  ],

  // 4-Stage Manufacturing Process
  manufacturingProcess: [
    {
      step: "01",
      title: "Raw Material Preparation & Compounding",
      description: "Precise polymer selection (Natural Rubber, Nitrile/NBR, EPDM, Neoprene, Silicone, Viton) blended with reinforcing carbon blacks, accelerators, and anti-oxidants on our heavy-duty mixing mill.",
      equipment: "Heavy-Duty Two-Roll Open Mixing Mill & Polymer Kneaders",
    },
    {
      step: "02",
      title: "Tooling & Hydraulic Compression Moulding",
      description: "Preforms are placed in precision CNC-machined hardened steel multi-cavity dies under calibrated heat (150°C - 190°C) and multi-ton hydraulic pressure for complete vulcanization.",
      equipment: "High-Tonnage Hydraulic Vulcanizing Presses with Digital Temperature Controllers",
    },
    {
      step: "03",
      title: "Deflashing & Precision Trimming",
      description: "Components undergo precision cryogenic or mechanical deflashing to ensure smooth edges, burr-free sealing lips, and exact outer profile contours.",
      equipment: "Precision Trimming Machinery & Ultrasonic Cleaning Tanks",
    },
    {
      step: "04",
      title: "In-House QA Inspection & Packaging",
      description: "Dimensional inspection using optical comparators, Shore A hardness durometer verification, tensile checks, and industrial moisture-sealed batch packaging.",
      equipment: "Testing Laboratory, Digital Verniers, Tensile Machines & Automated Packaging",
    },
  ],

  // Industries Served
  industries: [
    {
      title: "Automotive & Commercial Vehicles",
      description: "Suspension bushes, engine mounts, cabin weatherstrips, steering boots, pedal pads, and oil sealing gaskets.",
      metrics: "Shock damping & oil resistance",
      icon: "Car",
    },
    {
      title: "Industrial Machinery & Hydraulics",
      description: "High-pressure hydraulic seals, piston cups, wiper seals, O-rings, and heavy anti-vibration damping pads.",
      metrics: "Withstands up to 400 bar pressure",
      icon: "Cog",
    },
    {
      title: "Electrical & Power Infrastructure",
      description: "Cable grommets, flame-retardant silicone gaskets, transformer sealing rings, and dielectric terminal boots.",
      metrics: "High dielectric strength & UV resistance",
      icon: "Zap",
    },
    {
      title: "Pumps, Valves & Fluid Handling",
      description: "Chemical-resistant EPDM & Viton diaphragms, valve seats, flange gaskets, and food-grade silicone seals.",
      metrics: "Acid, alkali & solvent resistant",
      icon: "Droplets",
    },
    {
      title: "Agriculture & Earthmoving Equipment",
      description: "Rugged dust boots, track roller seals, radiator vibration mounts, and high-abrasion scraper blades.",
      metrics: "Extreme tear & abrasion resistance",
      icon: "Tractor",
    },
    {
      title: "Railways & Heavy Transportation",
      description: "Bogie suspension buffers, door sealing extruded profiles, brake diaphragm cups, and ballast mats.",
      metrics: "High fatigue endurance & weather resistance",
      icon: "Train",
    },
  ],

  // Milestones
  milestones: [
    { year: "Inception", title: "Factory Established in Faridabad", description: "Inaugurated dedicated manufacturing operations in Sanjay Colony industrial belt with hydraulic moulding presses." },
    { year: "Expansion", title: "In-House Two-Roll Mixing Mill Added", description: "Invested in on-site compounding and mixing equipment to achieve complete control over polymer grades." },
    { year: "Quality", title: "ISO 9001:2015 Certification", description: "Formalized strict quality management procedures, traceable batch testing, and standard inspection protocols." },
    { year: "Testing Lab", title: "Dedicated In-House Quality Testing Lab", description: "Commissioned comprehensive physical, rheometric, and dimensional testing equipment for zero-defect client delivery." },
    { year: "Present", title: "300+ Active Moulds & National Supply", description: "Supplying custom rubber and engineering plastic components to industrial and automotive clients across India." },
  ],
};
