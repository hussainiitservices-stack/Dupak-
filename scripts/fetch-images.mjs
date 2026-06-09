const urls = [
  "https://www.dupak.net/",
  "https://www.dupak.net/products",
  "https://www.dupak.net/paper-cups",
  "https://www.dupak.net/pet-cups",
];

const found = new Set();

for (const url of urls) {
  try {
    const res = await fetch(url);
    const html = await res.text();
    const matches = html.matchAll(/https:\/\/static\.wixstatic\.com\/media\/[^"'\s)]+/g);
    for (const m of matches) found.add(m[0]);
  } catch (e) {
    console.error("Failed:", url, e.message);
  }
}

console.log([...found].join("\n"));
