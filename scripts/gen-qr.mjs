// Generates public/qr-linkedin.svg (the committed asset) and verifies it by
// rendering a PNG copy and decoding it back with jsQR.
import { writeFile } from "node:fs/promises";
import QRCode from "qrcode";
import { PNG } from "pngjs";
import jsQR from "jsqr";

const LINKEDIN_URL = "https://www.linkedin.com/in/nisrin-attarwala/";

const svg = await QRCode.toString(LINKEDIN_URL, {
  type: "svg",
  errorCorrectionLevel: "M",
  margin: 2,
  color: { dark: "#1a2333", light: "#ffffff" },
});
await writeFile(new URL("../public/qr-linkedin.svg", import.meta.url), svg);

const pngBuffer = await QRCode.toBuffer(LINKEDIN_URL, {
  type: "png",
  errorCorrectionLevel: "M",
  margin: 2,
  width: 400,
});
const png = PNG.sync.read(pngBuffer);
const decoded = jsQR(new Uint8ClampedArray(png.data), png.width, png.height);

if (!decoded || decoded.data !== LINKEDIN_URL) {
  console.error("QR verification FAILED. Decoded:", decoded && decoded.data);
  process.exit(1);
}
console.log("QR verified. Encodes exactly:", decoded.data);
