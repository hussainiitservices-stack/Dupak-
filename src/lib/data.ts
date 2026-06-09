export const siteConfig = {
  name: "Dupak",
  tagline: "Branding Made Easy",
  description:
    "Manufacturing branded paper cups, plastic cups, PET bottles, paper bags, boxes & more. Custom packaging solutions across the UAE & GCC.",
  email: "info@dupak.net",
  whatsapp: "https://wa.me/971000000000",
  logo: "/images/logo.png",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
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
export const products = [
  {
    slug: "paper-cups",
    name: "Paper Cups",
    sizes: "4 oz · 7 oz · 8 oz · 12 oz · 16 oz",
    description:
      "Elegant hot & cold paper cups made from premium food-grade board with custom printing.",
    image: "/images/paper-cups-detail.jpg",
    thumb: "/images/paper-cups.png",
  },
  {
    slug: "pet-cups",
    name: "PET Cups",
    sizes: "8 oz · 12 oz · 16 oz · 22 oz",
    description:
      "Ultra-clear disposable cups that let your drinks shine with full-color branding.",
    image: "/images/pet-cups-detail.png",
    thumb: "/images/pet-cups.png",
  },
  {
    slug: "u-shape-cups",
    name: "U-Shape Cups",
    sizes: "Multiple sizes available",
    description:
      "Distinctive U-shaped profile cups designed to stand out on any shelf or counter.",
    image: "/images/u-shape-cups-detail.png",
    thumb: "/images/u-shape-cups.png",
  },
  {
    slug: "ice-cream-bowls",
    name: "Ice Cream Bowls",
    sizes: "3.5 oz · 6 oz · 8 oz · 12 oz",
    description:
      "Thick, durable paper bowls perfect for gelato, frozen yogurt, and desserts.",
    image: "/images/ice-cream-bowls-detail.png",
    thumb: "/images/ice-cream-bowls.png",
  },
  {
    slug: "acai-bowls",
    name: "Acai Bowls",
    sizes: "Custom sizes",
    description:
      "Stylish bowls crafted for smoothie and acai brands that demand visual appeal.",
    image: "/images/acai-bowls-detail.png",
    thumb: "/images/acai-bowls.png",
  },
  {
    slug: "paper-bags",
    name: "Paper Bags",
    sizes: "Various sizes",
    description:
      "Eco-friendly branded paper bags for retail, food delivery, and takeaway.",
    image: "/images/paper-bags-detail.png",
    thumb: "/images/paper-bags.png",
  },
  {
    slug: "pet-bottles",
    name: "PET Bottles",
    sizes: "Multiple capacities",
    description:
      "Clear PET bottles with custom labels — ideal for juices, water, and beverages.",
    image: "/images/pet-bottles-detail.png",
    thumb: "/images/pet-bottles.png",
  },
  {
    slug: "paper-boxes",
    name: "Paper Boxes",
    sizes: "Custom dimensions",
    description:
      "Luxury paper boxes and food packaging with foil, embossing, and matte finishes.",
    image: "/images/paper-boxes-detail.png",
    thumb: "/images/paper-boxes.png",
  },
  {
    slug: "cup-holders",
    name: "Cup Holders",
    sizes: "2-cup · 4-cup carriers",
    description:
      "Sturdy branded cup carriers that make takeaway service effortless and on-brand.",
    image: "/images/cup-holders-detail.png",
    thumb: "/images/cup-holders.png",
  },
] as const;

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
