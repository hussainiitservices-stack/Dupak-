export { siteConfig } from "./site";

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Products", href: "/products" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export type Product = {
  slug: string;
  name: string;
  sizes: string;
  description: string;
  image: string;
  thumb: string;
  categorySlug: string;
  subcategorySlug: string;
};

export type ProductSubcategory = {
  slug: string;
  name: string;
  description: string;
  image: string;
  productSlugs: string[];
  lineSpecSlug?: string;
};

export type ProductCategory = {
  slug: string;
  name: string;
  description: string;
  image: string;
  subcategories: ProductSubcategory[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "paper-cups",
    name: "Paper Cups",
    description: "Hot & cold paper cups with custom branding — single wall, double wall, and U-shape.",
    image: "/images/paper-cups.png",
    subcategories: [
      {
        slug: "single-wall-cup",
        name: "Single Wall Cup",
        description: "4 oz to 22 oz with foiling, emboss, or standard print.",
        image: "/images/paper-cups-detail.jpg",
        productSlugs: ["paper-cups"],
        lineSpecSlug: "single-wall-cup",
      },
      {
        slug: "double-wall-cup",
        name: "Double Wall Cup",
        description: "Insulated cups that keep drinks hot and hands cool.",
        image: "/images/paper-cups.png",
        productSlugs: ["paper-cups"],
        lineSpecSlug: "double-wall-cup",
      },
      {
        slug: "u-shape-cups",
        name: "U-Shape Cups",
        description: "Distinctive profile cups that stand out on any counter.",
        image: "/images/u-shape-cups-detail.png",
        productSlugs: ["u-shape-cups"],
      },
    ],
  },
  {
    slug: "pet-drinkware",
    name: "PET Cups & Bottles",
    description: "Crystal-clear PET cups and bottles for juices, smoothies, and beverages.",
    image: "/images/pet-cups.png",
    subcategories: [
      {
        slug: "pet-cups",
        name: "PET Cups",
        description: "Ultra-clear cups for iced drinks and takeaway.",
        image: "/images/pet-cups-detail.png",
        productSlugs: ["pet-cups"],
      },
      {
        slug: "pet-bottles",
        name: "PET Bottles",
        description: "Custom-labelled bottles for water and juices.",
        image: "/images/pet-bottles-detail.png",
        productSlugs: ["pet-bottles"],
      },
    ],
  },
  {
    slug: "bowls",
    name: "Bowls",
    description: "Paper bowls for ice cream, gelato, acai, and desserts.",
    image: "/images/ice-cream-bowls.png",
    subcategories: [
      {
        slug: "ice-cream-bowls",
        name: "Ice Cream Bowls",
        description: "Thick bowls for gelato and frozen yogurt.",
        image: "/images/ice-cream-bowls-detail.png",
        productSlugs: ["ice-cream-bowls"],
      },
      {
        slug: "acai-bowls",
        name: "Acai Bowls",
        description: "Stylish bowls for smoothie and acai brands.",
        image: "/images/acai-bowls-detail.png",
        productSlugs: ["acai-bowls"],
      },
    ],
  },
  {
    slug: "bags-boxes",
    name: "Bags & Boxes",
    description: "Branded paper bags and luxury packaging boxes.",
    image: "/images/paper-bags.png",
    subcategories: [
      {
        slug: "paper-bags",
        name: "Paper Bags",
        description: "Eco-friendly bags for retail and delivery.",
        image: "/images/paper-bags-detail.png",
        productSlugs: ["paper-bags"],
      },
      {
        slug: "paper-boxes",
        name: "Paper Boxes",
        description: "Custom boxes with foil and emboss finishes.",
        image: "/images/paper-boxes-detail.png",
        productSlugs: ["paper-boxes"],
      },
    ],
  },
  {
    slug: "accessories",
    name: "Accessories",
    description: "Cup carriers and takeaway essentials.",
    image: "/images/cup-holders.png",
    subcategories: [
      {
        slug: "cup-holders",
        name: "Cup Holders",
        description: "Branded carriers for 2-cup and 4-cup service.",
        image: "/images/cup-holders-detail.png",
        productSlugs: ["cup-holders"],
      },
    ],
  },
];

export const heroSlides = [
  {
    eyebrow: "Paper Cups",
    title: "Custom Paper Cups That Elevate Your Brand",
    description:
      "High-quality, food-grade paper cups customized with your logo. Perfect for cafes, restaurants, and events across the UAE.",
    cta: "Get a Free Mockup",
    image: "/images/paper-cups.png",
    bgColor: "#fdf2f8",
  },
  {
    eyebrow: "PET Cups",
    title: "Crystal Clear PET Cups for Premium Drinks",
    description:
      "Ultra-clear food-grade PET cups that showcase your beverages beautifully while keeping your brand front and center.",
    cta: "Explore PET Cups",
    image: "/images/pet-cups.png",
    bgColor: "#eff6ff",
  },
  {
    eyebrow: "U-Shape Cups",
    title: "Stand Out With Signature U-Shape Cups",
    description:
      "Distinctive U-shaped profile cups designed to grab attention on any shelf, counter, or takeaway window.",
    cta: "View U-Shape Cups",
    image: "/images/u-shape-cups.png",
    bgColor: "#f5f3ff",
  },
  {
    eyebrow: "Ice Cream Bowls",
    title: "Premium Ice Cream Bowls for Your Brand",
    description:
      "Thick, durable paper bowls perfect for gelato, frozen yogurt, and desserts — fully customized with your artwork.",
    cta: "Order Ice Cream Bowls",
    image: "/images/ice-cream-bowls.png",
    bgColor: "#fff7ed",
  },
];

// Image IDs verified against dupak.net/products page labels
export const products: Product[] = [
  {
    slug: "paper-cups",
    name: "Paper Cups",
    sizes: "4 oz · 7 oz · 8 oz · 12 oz · 16 oz",
    description:
      "Elegant hot & cold paper cups made from premium food-grade board with custom printing.",
    image: "/images/paper-cups-detail.jpg",
    thumb: "/images/paper-cups.png",
    categorySlug: "paper-cups",
    subcategorySlug: "single-wall-cup",
  },
  {
    slug: "pet-cups",
    name: "PET Cups",
    sizes: "8 oz · 12 oz · 16 oz · 22 oz",
    description:
      "Ultra-clear disposable cups that let your drinks shine with full-color branding.",
    image: "/images/pet-cups-detail.png",
    thumb: "/images/pet-cups.png",
    categorySlug: "pet-drinkware",
    subcategorySlug: "pet-cups",
  },
  {
    slug: "u-shape-cups",
    name: "U-Shape Cups",
    sizes: "Multiple sizes available",
    description:
      "Distinctive U-shaped profile cups designed to stand out on any shelf or counter.",
    image: "/images/u-shape-cups-detail.png",
    thumb: "/images/u-shape-cups.png",
    categorySlug: "paper-cups",
    subcategorySlug: "u-shape-cups",
  },
  {
    slug: "ice-cream-bowls",
    name: "Ice Cream Bowls",
    sizes: "3.5 oz · 6 oz · 8 oz · 12 oz",
    description:
      "Thick, durable paper bowls perfect for gelato, frozen yogurt, and desserts.",
    image: "/images/ice-cream-bowls-detail.png",
    thumb: "/images/ice-cream-bowls.png",
    categorySlug: "bowls",
    subcategorySlug: "ice-cream-bowls",
  },
  {
    slug: "acai-bowls",
    name: "Acai Bowls",
    sizes: "Custom sizes",
    description:
      "Stylish bowls crafted for smoothie and acai brands that demand visual appeal.",
    image: "/images/acai-bowls-detail.png",
    thumb: "/images/acai-bowls.png",
    categorySlug: "bowls",
    subcategorySlug: "acai-bowls",
  },
  {
    slug: "paper-bags",
    name: "Paper Bags",
    sizes: "Various sizes",
    description:
      "Eco-friendly branded paper bags for retail, food delivery, and takeaway.",
    image: "/images/paper-bags-detail.png",
    thumb: "/images/paper-bags.png",
    categorySlug: "bags-boxes",
    subcategorySlug: "paper-bags",
  },
  {
    slug: "pet-bottles",
    name: "PET Bottles",
    sizes: "Multiple capacities",
    description:
      "Clear PET bottles with custom labels — ideal for juices, water, and beverages.",
    image: "/images/pet-bottles-detail.png",
    thumb: "/images/pet-bottles.png",
    categorySlug: "pet-drinkware",
    subcategorySlug: "pet-bottles",
  },
  {
    slug: "paper-boxes",
    name: "Paper Boxes",
    sizes: "Custom dimensions",
    description:
      "Luxury paper boxes and food packaging with foil, embossing, and matte finishes.",
    image: "/images/paper-boxes-detail.png",
    thumb: "/images/paper-boxes.png",
    categorySlug: "bags-boxes",
    subcategorySlug: "paper-boxes",
  },
  {
    slug: "cup-holders",
    name: "Cup Holders",
    sizes: "2-cup · 4-cup carriers",
    description:
      "Sturdy branded cup carriers that make takeaway service effortless and on-brand.",
    image: "/images/cup-holders-detail.png",
    thumb: "/images/cup-holders.png",
    categorySlug: "accessories",
    subcategorySlug: "cup-holders",
  },
];

export const marqueeProducts = products.map((p) => ({
  slug: p.slug,
  name: p.name,
  image: p.thumb,
}));

export const stats = [
  { value: "9+", label: "Product Lines" },
  { value: "100%", label: "Custom Branding" },
  { value: "GCC", label: "Wide Delivery" },
  { value: "24/7", label: "WhatsApp Support" },
];

export const features = [
  {
    title: "Premium Quality",
    description:
      "Only food-grade materials and cutting-edge printing technology go into every product we manufacture.",
  },
  {
    title: "Full Customization",
    description:
      "Your logo, your colors, your vision — foil stamping, glossy & matte finishes, embossing, and more.",
  },
  {
    title: "Fast Turnaround",
    description:
      "From artwork approval to production and delivery, we keep your project moving on schedule.",
  },
  {
    title: "One-Stop Shop",
    description:
      "Paper cups, PET cups, bowls, bags, bottles, boxes, and holders — all branded under one roof.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Pick a Product",
    description: "Choose from our full range of cups, bowls, bags, bottles, and boxes.",
  },
  {
    step: "02",
    title: "Artwork Development",
    description: "Share your logo or let our team help craft the perfect brand design.",
  },
  {
    step: "03",
    title: "Place Your Order",
    description: "Confirm specs, quantities, and delivery — we'll handle the rest.",
  },
  {
    step: "04",
    title: "Production & Delivery",
    description: "We manufacture, quality-check, and deliver your branded packaging on time.",
  },
];
