const urls = [
  "https://www.dupak.net/",
  "https://www.dupak.net/products",
  "https://www.dupak.net/paper-cups",
  "https://www.dupak.net/pet-cups",
  "https://www.dupak.net/u-shape-cups",
  "https://www.dupak.net/ice-cream-bowls",
  "https://www.dupak.net/acai-bowls",
  "https://www.dupak.net/paper-bags",
  "https://www.dupak.net/pet-bottles",
  "https://www.dupak.net/paper-boxes",
  "https://www.dupak.net/cup-holders",
];

const productPages = {};

for (const url of urls) {
  try {
    const res = await fetch(url);
    const html = await res.text();

    const media = [...html.matchAll(/static\.wixstatic\.com\/media\/([a-z0-9_~%.-]+)/gi)].map(
      (m) => m[1].split("/")[0]
    );

    const named = [...html.matchAll(/quality_auto\/([^"'\s?)]+)/gi)].map((m) =>
      decodeURIComponent(m[1])
    );

    productPages[url] = {
      mediaIds: [...new Set(media)].slice(0, 20),
      named: [...new Set(named)].filter((n) => !n.includes("~mv2") && n.length < 60),
    };
  } catch (e) {
    productPages[url] = { error: e.message };
  }
}

console.log(JSON.stringify(productPages, null, 2));
