import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#09090b"/>
      <stop offset="100%" stop-color="#0f1117"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#22d3ee"/>
      <stop offset="100%" stop-color="#818cf8"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <g opacity="0.04" stroke="#22d3ee" stroke-width="0.5">
    <line x1="0" y1="60" x2="1200" y2="60"/><line x1="0" y1="120" x2="1200" y2="120"/>
    <line x1="0" y1="180" x2="1200" y2="180"/><line x1="0" y1="240" x2="1200" y2="240"/>
    <line x1="0" y1="300" x2="1200" y2="300"/><line x1="0" y1="360" x2="1200" y2="360"/>
    <line x1="0" y1="420" x2="1200" y2="420"/><line x1="0" y1="480" x2="1200" y2="480"/>
    <line x1="0" y1="540" x2="1200" y2="540"/>
    <line x1="60" y1="0" x2="60" y2="630"/><line x1="120" y1="0" x2="120" y2="630"/>
    <line x1="180" y1="0" x2="180" y2="630"/><line x1="240" y1="0" x2="240" y2="630"/>
    <line x1="300" y1="0" x2="300" y2="630"/><line x1="360" y1="0" x2="360" y2="630"/>
    <line x1="420" y1="0" x2="420" y2="630"/><line x1="480" y1="0" x2="480" y2="630"/>
    <line x1="540" y1="0" x2="540" y2="630"/><line x1="600" y1="0" x2="600" y2="630"/>
    <line x1="660" y1="0" x2="660" y2="630"/><line x1="720" y1="0" x2="720" y2="630"/>
    <line x1="780" y1="0" x2="780" y2="630"/><line x1="840" y1="0" x2="840" y2="630"/>
    <line x1="900" y1="0" x2="900" y2="630"/><line x1="960" y1="0" x2="960" y2="630"/>
    <line x1="1020" y1="0" x2="1020" y2="630"/><line x1="1080" y1="0" x2="1080" y2="630"/>
    <line x1="1140" y1="0" x2="1140" y2="630"/>
  </g>
  <ellipse cx="1050" cy="150" rx="320" ry="220" fill="rgba(34,211,238,0.06)"/>
  <rect x="0" y="0" width="1200" height="3" fill="url(#accent)"/>
  <text x="80" y="190" font-family="monospace" font-size="14" fill="#22d3ee" letter-spacing="3" font-weight="600">ELECTRONICS &amp; COMMUNICATION ENGINEER</text>
  <text x="80" y="272" font-family="Arial, sans-serif" font-size="68" fill="#f1f5f9" font-weight="700" letter-spacing="-2">Arshid Ahmad</text>
  <text x="80" y="350" font-family="Arial, sans-serif" font-size="68" fill="#f1f5f9" font-weight="700" letter-spacing="-2">Malik</text>
  <rect x="80" y="370" width="130" height="3" fill="url(#accent)" rx="1.5"/>
  <text x="80" y="420" font-family="monospace" font-size="16" fill="#94a3b8" letter-spacing="1">Embedded Systems · IoT · VLSI · Edge AI · Android</text>
  <rect x="80" y="450" width="250" height="34" rx="17" fill="rgba(52,211,153,0.12)" stroke="rgba(52,211,153,0.3)" stroke-width="1"/>
  <circle cx="104" cy="467" r="5" fill="#34d399"/>
  <text x="117" y="472" font-family="monospace" font-size="13" fill="#34d399" font-weight="600">AVAILABLE FOR HIRE</text>
  <text x="80" y="535" font-family="monospace" font-size="14" fill="#475569">Bangalore, Karnataka, India</text>
  <text x="80" y="562" font-family="monospace" font-size="13" fill="#22d3ee">arshid-portfolio.vercel.app</text>
  <rect x="810" y="100" width="320" height="420" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  <text x="830" y="140" font-family="monospace" font-size="10" fill="#22d3ee" letter-spacing="2">ENGINEERING PROFILE</text>
  <line x1="830" y1="155" x2="1110" y2="155" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  <text x="830" y="183" font-family="monospace" font-size="10" fill="#475569">DISCIPLINE</text>
  <text x="830" y="203" font-family="monospace" font-size="13" fill="#f1f5f9">ECE Engineer</text>
  <text x="830" y="236" font-family="monospace" font-size="10" fill="#475569">INSTITUTION</text>
  <text x="830" y="256" font-family="monospace" font-size="12" fill="#f1f5f9">MVJ College of Engineering</text>
  <text x="830" y="274" font-family="monospace" font-size="11" fill="#64748b">Visvesvaraya Technological University</text>
  <text x="830" y="310" font-family="monospace" font-size="10" fill="#475569">PROJECTS</text>
  <text x="830" y="335" font-family="monospace" font-size="32" fill="#22d3ee" font-weight="700">7</text>
  <text x="920" y="310" font-family="monospace" font-size="10" fill="#475569">CERTIFICATIONS</text>
  <text x="920" y="335" font-family="monospace" font-size="32" fill="#818cf8" font-weight="700">21</text>
  <text x="1030" y="310" font-family="monospace" font-size="10" fill="#475569">INTERNSHIPS</text>
  <text x="1030" y="335" font-family="monospace" font-size="32" fill="#34d399" font-weight="700">4</text>
  <line x1="830" y1="362" x2="1110" y2="362" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  <text x="830" y="388" font-family="monospace" font-size="10" fill="#475569">CORE SKILLS</text>
  <text x="830" y="410" font-family="monospace" font-size="11" fill="#94a3b8">ESP32 · STM32 · Arduino · FPGA · Verilog</text>
  <text x="830" y="430" font-family="monospace" font-size="11" fill="#94a3b8">Python · C/C++ · Kotlin · React · Next.js</text>
  <text x="830" y="450" font-family="monospace" font-size="11" fill="#94a3b8">Edge AI · VLSI · IoT · Android · PCB Design</text>
  <rect x="0" y="627" width="1200" height="3" fill="url(#accent)"/>
</svg>`;

const outputPath = join(__dirname, "..", "public", "og-image.png");

sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath)
  .then((info) => {
    console.log("OG image created successfully:", JSON.stringify(info));
    console.log("Output:", outputPath);
  })
  .catch((err) => {
    console.error("Failed to create OG image:", err);
    process.exit(1);
  });
