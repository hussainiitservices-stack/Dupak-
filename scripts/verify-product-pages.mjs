const pages = {
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

for (const [slug, url] of Object.entries(pages)) {
  const res = await fetch(url);
  const html = await res.text();

  const images = [...html.matchAll(
    /https:\/\/static\.wixstatic\.com\/media\/([^"'\s)]+)\/v1\/fill\/w_(\d+),h_(\d+)[^"']*quality_auto\/([^"'\s?)]+)/gi
  )]
    .map((m) => ({
      id: m[1],
      w: +m[2],
      h: +m[3],
      label: decodeURIComponent(m[4]),
      area: +m[2] * +m[3],
    }))
    .filter((img) => img.area >= 150000 && !img.id.includes("60013d4365a149e491281828b8563360"))
    .sort((a, b) => b.area - a.area);

  const unique = new Map();
  for (const img of images) {
    if (!unique.has(img.id)) unique.set(img.id, img);
  }

  console.log(`\n=== ${slug} ===`);
  let i = 0;
  for (const img of unique.values()) {
    if (i++ >= 5) break;
    console.log(`${img.label} | ${img.id} | ${img.w}x${img.h}`);
  }
}
