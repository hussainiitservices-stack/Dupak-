const pages = {
  home: "https://www.dupak.net/",
  products: "https://www.dupak.net/products",
  "paper-cups": "https://www.dupak.net/paper-cups",
  "pet-cups": "https://www.dupak.net/pet-cups",
  "u-shape-cups": "https://www.dupak.net/u-shape-cups",
  "ice-cream-bowls": "https://www.dupak.net/ice-cream-bowls",
  "acai-bowls": "https://www.dupak.net/acai-bowls",
  "paper-bags": "https://www.dupak.net/paper-bags",
  "pet-bottles": "https://www.dupak.net/pet-bottles",
  "paper-boxes": "https://www.dupak.net/paper-boxes",
  "cup-holders": "https://www.dupak.net/cup-holders",
};

for (const [name, url] of Object.entries(pages)) {
  const res = await fetch(url);
  const html = await res.text();

  const pairs = [...html.matchAll(
    /https:\/\/static\.wixstatic\.com\/media\/([^"'\s)]+)\/v1\/[^"']*quality_auto\/([^"'\s?)]+)/gi
  )].map((m) => ({
    id: m[1],
    label: decodeURIComponent(m[2]),
    url: `https://static.wixstatic.com/media/${m[1]}`,
  }));

  const unique = new Map();
  for (const p of pairs) {
    if (!unique.has(p.id)) unique.set(p.id, p);
  }

  console.log(`\n=== ${name} ===`);
  for (const p of unique.values()) {
    if (
      p.label.includes("mockup") ||
      p.label.includes("cup") ||
      p.label.includes("Cup") ||
      p.label.includes("bowl") ||
      p.label.includes("Bowl") ||
      p.label.includes("bag") ||
      p.label.includes("box") ||
      p.label.includes("bottle") ||
      p.label.includes("holder") ||
      p.label.includes("Artboard") ||
      p.label.includes("U shape") ||
      p.label.includes("PET") ||
      p.label.includes("Acai") ||
      p.label.includes("Paper") ||
      p.id.includes("c9beac") ||
      p.id.includes("6e916a")
    ) {
      console.log(`${p.label} -> ${p.id}`);
    }
  }
}
