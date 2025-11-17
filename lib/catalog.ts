import { Category, Product, Pillar } from "./types";

/* ---------------------------
   THREE BRAND PILLARS
   (Hybrid Model Option C)
---------------------------- */
export const pillars: Pillar[] = [
  {
    id: "graphene",
    slug: "graphene",
    title: "Graphene Materials",
    description:
      "Performance-ready graphene optimized for real industrial loadings, with superior conductivity and reliable dispersion.",
    bullets: [
      "Optimized for <0.02 wt% loading performance",
      "Excellent electrical & thermal conductivity",
      "Stable dispersions across water, IPA, NMP, and custom carriers",
    ],
  },
  {
    id: "carbon-nanotubes",
    slug: "carbon-nanotubes",
    title: "Carbon Nanotubes (CNTs)",
    description:
      "CNT powders and Flexiphene™ dispersions engineered for predictable performance in polymers, coatings, and films.",
    bullets: [
      "High-aspect-ratio CNTs for mechanical & electrical performance",
      "EMI/RFI shielding optimization",
      "Flexiphene™ dispersions for plug-and-play processing",
    ],
  },
  {
    id: "polymer-nanocomposites",
    slug: "polymer-nanocomposites",
    title: "Polymer Nanocomposites",
    description:
      "Ready-to-use graphene and CNT masterbatches for predictable reinforcement, conductivity, and processing reliability.",
    bullets: [
      "PP, PA6, ABS, epoxy masterbatches",
      "Lower required loadings vs. raw nanomaterials",
      "Designed for injection molding & extrusion",
    ],
  },
];


/* ---------------------------
   PRODUCT CATEGORIES
---------------------------- */
export const categories = [
  {
    name: "Graphene Nanomaterials",
    slug: "graphene",
    image: "/images/categories/graphene-nanoplatelets-2d-structure.jpg",
    description:
      "GNPs, GO, rGO, functionalized graphene, and graphene dispersions engineered for real-world performance.",
  },
  {
    name: "Carbon Nanotubes (MWNT & SWNT)",
    slug: "cnt",
    image: "/images/categories/carbon-nanotubes-mwnt-sample-render.jpg",
    description:
      "High-quality multi-wall and single-wall CNTs with consistent morphology and reliable performance.",
  },
  {
    name: "MXenes & 2D Materials",
    slug: "mxene",
    image: "/images/categories/mxene-tmd-2d-material-structure.jpg",
    description:
      "Ti₃C₂ MXene and advanced 2D materials for energy storage, EMI shielding, composites and next-gen applications.",
  },
  {
    name: "Polymer Nanocomposites (Masterbatches)",
    slug: "nanocomposites",
    image: "/images/categories/polymer-nanocomposite-masterbatch-pellets.jpg",
    description:
      "Ready-to-use polymer masterbatches optimized for mechanical and electrical performance.",
  },
  {
    name: "Fullerenes & Specialty Nanocarbons",
    slug: "specialty",
    image: "/images/categories/fullerenes-c60-sample.jpg",
    description:
      "High-purity C60/C70 and custom carbon nanostructures for advanced R&D.",
  },
  {
    name: "Dispersions & Custom Formulations",
    slug: "dispersions",
    image: "/images/categories/nanomaterial-dispersions-lab-beakers.jpg",
    description:
      "Water, IPA, DMF, NMP & custom carriers. Stable and application-ready dispersions.",
  },
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
