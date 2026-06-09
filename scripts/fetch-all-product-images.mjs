import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const base = "https://static.wixstatic.com/media";

// Verified carousel thumbnails from dupak.net/products labels
const thumbs = {
  "paper-cups": "6e916a_54a121cce8724f1f97c3774f046ca38b~mv2.png",
  "pet-cups": "c9beac_9166927bcee74405a882e79e7a7a04b5~mv2.png",
  "u-shape-cups": "c9beac_1e6669a49fd1412a94f3f564723394f8~mv2.png",
  "ice-cream-bowls": "c9beac_f1ed2d66e3664ebf88abdeee9dd02ce0~mv2.png",
  "acai-bowls": "c9beac_47e8f160e5d44b22b05330a1e7d3d30d~mv2.png",
  "paper-bags": "c9beac_3f8b83088e144c4a9a688a6dfb8022fd~mv2.png",
  "pet-bottles": "c9beac_646d7d9b582e4a24a5165b0c387e1f07~mv2.png",
  "paper-boxes": "c9beac_91467eaae14140f094c2ba6778c42473~mv2.png",
  "cup-holders": "c9beac_7645bea2140148179173c2efdbaa0e36~mv2.png",
};

// Best showcase image from each product page (largest product mockup)
const details = {
  "paper-cups": "2f81c0_e40c0ebb08214c0b873f933e95757a44~mv2.jpeg",
  "pet-cups": "c9beac_a9db2614e2d64911b565e4005b3e5a6e~mv2.png",
  "u-shape-cups": "c9beac_6cfa389dc3bc4e40b3f5d4f1d7ce8e92~mv2.png",
  "ice-cream-bowls": "c9beac_e4290408d31d4a62a08719db38e83220~mv2.png",
  "acai-bowls": "c9beac_124fbb7c2a9e4c80983e875b982df287~mv2.png",
  "paper-bags": "c9beac_ae47888947a94aabbff1f1fa0ac8546d~mv2.png",
  "pet-bottles": "c9beac_9c4e972c52ae4377b43d5ba124416ea3~mv2.png",
  "paper-boxes": "c9beac_cee4abca5fdb4ad98d0d1ff34db6ff1b~mv2.png",
  "cup-holders": "c9beac_528915f9324f465eb5c71b963414dde4~mv2.png",
};

const outDir = path.join(process.cwd(), "public", "images");
await mkdir(outDir, { recursive: true });

async function download(filename, mediaId) {
  const url = `${base}/${mediaId}`;
  const ext = mediaId.includes(".jpg") || mediaId.includes(".jpeg") ? ".jpg" : ".png";
  if (mediaId.includes(".jpeg")) {
    // keep jpeg ext
  }
  const actualExt = mediaId.match(/\.(jpe?g|png)$/i)?.[0]?.toLowerCase() || ".png";
  const filePath = path.join(outDir, `${filename}${actualExt === ".jpeg" ? ".jpg" : actualExt}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${filename} failed: ${res.status}`);
  await writeFile(filePath, Buffer.from(await res.arrayBuffer()));
  console.log("saved", filePath);
  return `/images/${filename}${actualExt === ".jpeg" ? ".jpg" : actualExt}`;
}

const mapping = {};

for (const [slug, id] of Object.entries(thumbs)) {
  const ext = id.includes(".jpeg") || id.includes(".jpg") ? ".jpg" : ".png";
  mapping[slug] = { thumb: await download(slug, id).then(() => `/images/${slug}${ext}`) };
}

for (const [slug, id] of Object.entries(details)) {
  const ext = id.includes(".jpeg") || id.includes(".jpg") ? ".jpg" : ".png";
  const detailName = `${slug}-detail`;
  await download(detailName, id);
  mapping[slug].detail = `/images/${detailName}${ext}`;
}

console.log("\nMAPPING:");
console.log(JSON.stringify(mapping, null, 2));
