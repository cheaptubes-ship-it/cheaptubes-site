export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  categoryId: string;
  description: string;
  specs: Record<string, string>;
  applications: string[];
  image: string;
  sdsFile?: string; // ex: "/sds/MWCNT-20-30NM.pdf"
}

export interface Pillar {
  id: string;
  slug: string;
  title: string;
  description: string;  // <-- ADD THIS
  summary: string;      // optional—remove if unused
  bullets: string[];
}

export interface ResourceItem {
  id: string;
  title: string;
  file: string; // pdf or doc link
}

export interface GeneratedTDSRequest {
  productId: string;
}
