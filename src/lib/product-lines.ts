export type CupSize = {
  label: string;
  height: number;
  topDiameter: number;
  bottomDiameter: number;
};

export type FinishOption = {
  slug: "foiling" | "emboss" | "normal";
  name: string;
  description: string;
  image: string;
};

export type ProductLineSpec = {
  slug: string;
  name: string;
  title: string;
  description: string;
  sizes: CupSize[];
  gsmOptions: string[];
  finishes: FinishOption[];
  chartImage: string;
  heroImage: string;
};

export const productLineSpecs: Record<string, ProductLineSpec> = {
  "single-wall-cup": {
    slug: "single-wall-cup",
    name: "Single Wall Cup",
    title: "Single Wall Cups",
    description:
      "Classic single-wall paper cups in food-grade board — ideal for hot and cold beverages with full custom branding.",
    chartImage: "/images/single-wall-cups-chart.png",
    heroImage: "/images/paper-cups-detail.jpg",
    gsmOptions: ["250 GSM", "300 GSM", "350 GSM"],
    sizes: [
      { label: "4 oz", height: 60, topDiameter: 63, bottomDiameter: 45 },
      { label: "7 oz", height: 78, topDiameter: 72, bottomDiameter: 52 },
      { label: "8 oz", height: 90, topDiameter: 78, bottomDiameter: 55 },
      { label: "8 oz Wide", height: 93, topDiameter: 75, bottomDiameter: 54 },
      { label: "12 oz Narrow", height: 110, topDiameter: 80, bottomDiameter: 50 },
      { label: "12 oz", height: 113, topDiameter: 89, bottomDiameter: 60 },
      { label: "16 oz", height: 126, topDiameter: 90, bottomDiameter: 60 },
      { label: "22 oz", height: 164, topDiameter: 72, bottomDiameter: 52 },
    ],
    finishes: [
      {
        slug: "foiling",
        name: "Foiling",
        description:
          "Metallic foil stamping adds a premium shine to your logo and brand elements.",
        image: "/images/paper-cups-detail.jpg",
      },
      {
        slug: "emboss",
        name: "Emboss",
        description:
          "Raised embossing creates a tactile, luxury feel that elevates your cup design.",
        image: "/images/paper-cups.png",
      },
      {
        slug: "normal",
        name: "Normal",
        description:
          "High-quality standard printing with vivid colours on food-grade paper board.",
        image: "/images/paper-cups-detail.jpg",
      },
    ],
  },
  "double-wall-cup": {
    slug: "double-wall-cup",
    name: "Double Wall Cup",
    title: "Double Wall Cups",
    description:
      "Insulated double-wall paper cups with an air gap — keeps drinks hot, hands cool, and branding sharp.",
    chartImage: "/images/single-wall-cups-chart.png",
    heroImage: "/images/paper-cups.png",
    gsmOptions: ["250 + 250 GSM", "300 + 300 GSM", "350 + 350 GSM"],
    sizes: [
      { label: "8 oz", height: 93, topDiameter: 80, bottomDiameter: 56 },
      { label: "12 oz", height: 118, topDiameter: 90, bottomDiameter: 60 },
      { label: "16 oz", height: 132, topDiameter: 92, bottomDiameter: 62 },
      { label: "22 oz", height: 168, topDiameter: 75, bottomDiameter: 54 },
    ],
    finishes: [
      {
        slug: "foiling",
        name: "Foiling",
        description: "Foil accents on the outer wall for a standout premium look.",
        image: "/images/paper-cups.png",
      },
      {
        slug: "emboss",
        name: "Emboss",
        description: "Embossed branding on the outer sleeve for a textured finish.",
        image: "/images/paper-cups-detail.jpg",
      },
      {
        slug: "normal",
        name: "Normal",
        description:
          "Full-colour print on the outer wall with insulated double-wall construction.",
        image: "/images/paper-cups.png",
      },
    ],
  },
};

export function getProductLineSpec(slug: string): ProductLineSpec | undefined {
  return productLineSpecs[slug];
}
