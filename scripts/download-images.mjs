import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const base = "https://static.wixstatic.com/media";

// Verified from dupak.net/products page labels
const carouselImages = {
  "paper-cups": `${base}/6e916a_54a121cce8724f1f97c3774f046ca38b~mv2.png`,
  "pet-cups": `${base}/c9beac_9166927bcee74405a882e79e7a7a04b5~mv2.png`,
  "u-shape-cups": `${base}/c9beac_1e6669a49fd1412a94f3f564723394f8~mv2.png`,
  "ice-cream-bowls": `${base}/c9beac_f1ed2d66e3664ebf88abdeee9dd02ce0~mv2.png`,
  "acai-bowls": `${base}/c9beac_47e8f160e5d44b22b05330a1e7d3d30d~mv2.png`,
  "paper-bags": `${base}/c9beac_3f8b83088e144c4a9a688a6dfb8022fd~mv2.png`,
  "pet-bottles": `${base}/c9beac_646d7d9b582e4a24a5165b0c387e1f07~mv2.png`,
  "paper-boxes": `${base}/c9beac_91467eaae14140f094c2ba6778c42473~mv2.png`,
  "cup-holders": `${base}/c9beac_7645bea2140148179173c2efdbaa0e36~mv2.png`,
};

// Primary showcase image from each product page on dupak.net
const pageImages = {
  "paper-cups-detail": `${base}/2f81c0_f84d8dbd11dc49fabbc5ad34b0f6bf25~mv2.png`,
  "pet-cups-detail": `${base}/c9beac_a9db2614e2d64911b565e4005b3e5a6e~mv2.png`,
  "u-shape-cups-detail": `${base}/c9beac_6cfa389dc3bc4e40b3f5d4f1d7ce8e92~mv2.png`,
  "ice-cream-bowls-detail": `${base}/c9beac_ed729801923441ba9c9a4b661c6cdb34~mv2.png`,
  "acai-bowls-detail": `${base}/c9beac_8bd272432a98451db352ec02ba4bea05~mv2.png`,
  "paper-bags-detail": `${base}/c9beac_ad3c6d4aab9e45898953fdda423eec2e~mv2.png`,
  "pet-bottles-detail": `${base}/c9beac_25ec7f12881949819949e61aae2e0db9~mv2.png`,
  "paper-boxes-detail": `${base}/c9beac_e90e65b5ae9549f9bf87feed2242cc69~mv2.png`,
  "cup-holders-detail": `${base}/c9beac_c318dd930a9248c2808f75444dc520bc~mv2.png`,
};

const other = {
  logo: `${base}/c9beac_60013d4365a149e491281828b8563360~mv2.png`,
};

const outDir = path.join(process.cwd(), "public", "images");
await mkdir(outDir, { recursive: true });

async function save(name, url) {
  const ext = url.match(/\.(jpg|jpeg|png)/i)?.[0]?.toLowerCase() || ".png";
  const filePath = path.join(outDir, `${name}${ext}`);
  const res = await fetch(url);
  if (!res.ok) {
    console.error("FAILED", name, res.status);
    return false;
  }
  await writeFile(filePath, Buffer.from(await res.arrayBuffer()));
  console.log("OK", name);
  return true;
}

for (const [name, url] of Object.entries({ ...carouselImages, ...pageImages, ...other })) {
  await save(name, url);
}

// Also save carousel versions under standard product filenames for backwards compat
for (const [name, url] of Object.entries(carouselImages)) {
  await save(name, url);
}

console.log("\nDone. Verified product image mapping:");
console.log(JSON.stringify(carouselImages, null, 2));
