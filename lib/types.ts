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
  title: string;
  summary: string;
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
