import { Category, Product, Pillar } from "./types";

/* ---------------------------
   THREE BRAND PILLARS
   (Hybrid Model Option C)
---------------------------- */
export const pillars: Pillar[] = [
  {
    id: "graphene",
    title: "Graphene Materials",
    summary:
      "Industry-leading graphene nanoplatelets and dispersions delivering unmatched conductivity, strength, and versatility.",
    bullets: [
      "High surface area for composites & coatings",
      "Excellent electrical & thermal conductivity",
      "Stable dispersions across multiple solvents"
    ],
  },
  {
    id: "carbon-nanotubes",
    title: "Carbon Nanotubes (CNTs)",
    summary:
      "MWNT and specialty CNT dispersions engineered for polymer reinforcement, EMI shielding, and advanced R&D applications.",
    bullets: [
      "High aspect ratio for structural enhancement",
      "EMI/RFI shielding optimization",
      "Dispersions include Flexiphene™ technology"
    ],
  },
  {
    id: "nanocomposites",
    title: "Polymer Nanocomposites",
    summary:
      "Pre-compounded CNT and graphene masterbatches providing plug-and-play performance improvements.",
    bullets: [
      "Compatible with common thermoplastics",
      "Improved tensile strength & conductivity",
      "Lower dosage needed vs. raw nanomaterials"
    ],
  }
];

/* ---------------------------
   PRODUCT CATEGORIES
---------------------------- */
export const categories: Category[] = [
  {
    id: "graphene",
    name: "Graphene Nanoplatelets",
    description: "High-performance GNPs for composites, coatings, inks, and additives.",
    image: "/images/categories/graphene.jpg",
  },
  {
    id: "cnt",
    name: "Carbon Nanotubes",
    description: "Multi-wall CNT powders and Flexiphene™ CNT dispersions.",
    image: "/images/categories/cnt.jpg",
  },
  {
    id: "nanocomposites",
    name: "Polymer Nanocomposites",
    description: "CNT and graphene masterbatches for thermoplastics.",
    image: "/images/categories/nanocomposites.jpg",
  }
];

/* ---------------------------
   PRODUCTS  
   (We will expand these later)
---------------------------- */
export const products: Product[] = [
  {
    id: "gnp-m5",
    name: "Graphene Nanoplatelets M-5",
    categoryId: "graphene",
    description: "High-purity graphene nanoplatelets with 5–10 µm lateral size.",
    specs: {
      Purity: "99%",
      "Surface Area": "120 m²/g",
      Thickness: "5–8 nm",
    },
    applications: [
      "Polymer reinforcement",
      "Conductive inks",
      "Battery additives"
    ],
    image: "/images/products/gnp-m5.jpg",
  },
  {
    id: "mwc-20-30",
    name: "MWNT 20–30 nm",
    categoryId: "cnt",
    description: "Multi-wall CNT powder with 20–30 nm outer diameter.",
    specs: {
      Purity: "95%",
      Diameter: "20–30 nm",
      Length: "10–20 µm",
    },
    applications: [
      "EMI/RFI shielding",
      "Conductive plastics",
      "Elastomer reinforcement"
    ],
    image: "/images/products/mwnt-20-30.jpg",
  },
  {
    id: "flexiphene-cnt",
    name: "Flexiphene™ CNT Dispersion",
    categoryId: "cnt",
    description: "Pre-dispersed CNTs using our proprietary Flexiphene system.",
    specs: {
      "CNT Loading": "2 wt%",
      Solvent: "Water or IPA",
      Stability: "12+ months",
    },
    applications: [
      "Spray coatings",
      "Conductive films",
      "Polymer compounding"
    ],
    image: "/images/products/flexiphene-cnt.jpg",
  },
  {
    id: "mb-cnt-pa6",
    name: "CNT-PA6 Masterbatch",
    categoryId: "nanocomposites",
    description: "CNT reinforced PA6 masterbatch designed for industrial processing.",
    specs: {
      "CNT Loading": "15%",
      Base: "PA6",
    },
    applications: [
      "Industrial molded parts",
      "Automotive components",
      "Conductive housings"
    ],
    image: "/images/products/cnt-pa6.jpg",
  }
];
