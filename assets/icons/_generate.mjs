// Animated tactical icon set for the profile README.
// Regenerate: bun assets/icons/_generate.mjs   (or: node assets/icons/_generate.mjs)
// Palette = the shared design tokens of techlead187.com / lucid-agents.com / aiworkshopapps.com
// (same values used in assets/header.svg, divider.svg, terminal.svg, footer.svg).
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const G = "#4fe08a", C = "#3ee8f0", O = "#f6ad55", P = "#a06bff", Y = "#e6c65c", S = "#93a4b3";
const M = "#c86be0", T = "#00ffd1", K = "#03060b";

const wrap = (body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
<defs><filter id="g" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
<g fill="none" stroke-linecap="round" stroke-linejoin="round">
${body}
</g>
</svg>`;

const icons = {};

// ── Section headers ──────────────────────────────────────────
icons.builds = `
<g stroke="${O}" stroke-width="3.5">
  <circle cx="32" cy="32" r="12"/>
  <g>
    <line x1="32" y1="10" x2="32" y2="17"/><line x1="32" y1="47" x2="32" y2="54"/>
    <line x1="10" y1="32" x2="17" y2="32"/><line x1="47" y1="32" x2="54" y2="32"/>
    <line x1="17" y1="17" x2="22" y2="22"/><line x1="42" y1="42" x2="47" y2="47"/>
    <line x1="47" y1="17" x2="42" y2="22"/><line x1="22" y1="42" x2="17" y2="47"/>
    <animateTransform attributeName="transform" type="rotate" from="0 32 32" to="360 32 32" dur="12s" repeatCount="indefinite"/>
  </g>
</g>
<circle cx="32" cy="32" r="4.5" stroke="${O}" stroke-width="2.5"/>`;

icons.longgame = `
<circle cx="32" cy="32" r="24" stroke="${G}" stroke-width="3"/>
<circle cx="32" cy="32" r="15" stroke="${G}" stroke-width="1" opacity="0.35"/>
<circle cx="32" cy="32" r="7" stroke="${G}" stroke-width="1" opacity="0.35"/>
<path d="M32 32 L32 8 A24 24 0 0 1 49 15 Z" fill="${G}" opacity="0.25">
  <animateTransform attributeName="transform" type="rotate" from="0 32 32" to="360 32 32" dur="5s" repeatCount="indefinite"/>
</path>
<line x1="32" y1="32" x2="32" y2="8" stroke="${G}" stroke-width="2.5" filter="url(#g)">
  <animateTransform attributeName="transform" type="rotate" from="0 32 32" to="360 32 32" dur="5s" repeatCount="indefinite"/>
</line>`;

icons.credentials = `
<path d="M24 6 H40 L36 26 H28 Z" stroke="${P}" stroke-width="3" fill="${P}" fill-opacity="0.25"/>
<circle cx="32" cy="41" r="15" stroke="${Y}" stroke-width="3.5"/>
<path d="M32 32 L34.8 38 L41 38.8 L36.5 43 L37.7 49.3 L32 46.2 L26.3 49.3 L27.5 43 L23 38.8 L29.2 38 Z" fill="${Y}" opacity="0.9">
  <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2.5s" repeatCount="indefinite"/>
</path>
<circle cx="32" cy="41" r="19" stroke="${Y}" stroke-width="1" opacity="0">
  <animate attributeName="r" values="15;22" dur="2.5s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.5;0" dur="2.5s" repeatCount="indefinite"/>
</circle>`;

icons.publications = `
<rect x="14" y="8" width="36" height="48" rx="3" stroke="${C}" stroke-width="3"/>
<g stroke="${S}" stroke-width="2.5" opacity="0.8">
  <line x1="21" y1="19" x2="43" y2="19"/><line x1="21" y1="27" x2="43" y2="27"/>
  <line x1="21" y1="35" x2="43" y2="35"/><line x1="21" y1="43" x2="34" y2="43"/>
</g>
<rect x="37" y="40" width="3" height="7" fill="${G}" filter="url(#g)">
  <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;0.5;0.5;1" dur="1.2s" repeatCount="indefinite"/>
</rect>`;

icons.community = `
<g stroke="${G}" stroke-width="2.5" opacity="0.7">
  <line x1="32" y1="14" x2="13" y2="46"/><line x1="32" y1="14" x2="51" y2="46"/><line x1="13" y1="46" x2="51" y2="46"/>
</g>
<circle cx="32" cy="14" r="6" stroke="${C}" stroke-width="3" fill="${K}"/>
<circle cx="13" cy="46" r="6" stroke="${P}" stroke-width="3" fill="${K}"/>
<circle cx="51" cy="46" r="6" stroke="${M}" stroke-width="3" fill="${K}"/>`;

icons.arsenal = `
<rect x="18" y="18" width="28" height="28" rx="3" stroke="${P}" stroke-width="3.5"/>
<rect x="26" y="26" width="12" height="12" stroke="${P}" stroke-width="2" opacity="0.7"/>
<g stroke="${P}" stroke-width="3">
  <line x1="26" y1="18" x2="26" y2="10"/><line x1="38" y1="18" x2="38" y2="10"/>
  <line x1="26" y1="46" x2="26" y2="54"/><line x1="38" y1="46" x2="38" y2="54"/>
  <line x1="18" y1="26" x2="10" y2="26"/><line x1="18" y1="38" x2="10" y2="38"/>
  <line x1="46" y1="26" x2="54" y2="26"/><line x1="46" y1="38" x2="54" y2="38"/>
</g>`;

icons.telemetry = `
<line x1="10" y1="54" x2="56" y2="54" stroke="${S}" stroke-width="2.5"/>
<rect x="14" y="30" width="9" height="24" fill="${G}" opacity="0.85">
  <animate attributeName="y" values="30;22;30" dur="2.8s" repeatCount="indefinite"/>
  <animate attributeName="height" values="24;32;24" dur="2.8s" repeatCount="indefinite"/>
</rect>
<rect x="28" y="20" width="9" height="34" fill="${C}" opacity="0.85">
  <animate attributeName="y" values="20;32;20" dur="2.8s" begin="0.5s" repeatCount="indefinite"/>
  <animate attributeName="height" values="34;22;34" dur="2.8s" begin="0.5s" repeatCount="indefinite"/>
</rect>
<rect x="42" y="36" width="9" height="18" fill="${O}" opacity="0.85">
  <animate attributeName="y" values="36;14;36" dur="2.8s" begin="1s" repeatCount="indefinite"/>
  <animate attributeName="height" values="18;40;18" dur="2.8s" begin="1s" repeatCount="indefinite"/>
</rect>`;

// ── Featured cards ───────────────────────────────────────────
icons.legaltech = `
<line x1="32" y1="10" x2="32" y2="52" stroke="${C}" stroke-width="3.5"/>
<line x1="22" y1="52" x2="42" y2="52" stroke="${C}" stroke-width="3.5"/>
<g stroke-width="3">
  <line x1="12" y1="18" x2="52" y2="18" stroke="${C}"/>
  <path d="M12 18 L6 34 M12 18 L18 34" stroke="${G}"/>
  <path d="M6 34 A 6 6 0 0 0 18 34" stroke="${G}"/>
  <path d="M52 18 L46 34 M52 18 L58 34" stroke="${G}"/>
  <path d="M46 34 A 6 6 0 0 0 58 34" stroke="${G}"/>
  <animateTransform attributeName="transform" type="rotate" values="-4 32 18;4 32 18;-4 32 18" dur="5s" repeatCount="indefinite"/>
</g>
<circle cx="32" cy="18" r="3" fill="${C}"/>`;

icons.venue = `
<path d="M10 50 H54" stroke="${S}" stroke-width="3"/>
<path d="M16 50 V38 A16 16 0 0 1 48 38 V50" stroke="${C}" stroke-width="3.5"/>
<path d="M24 28 A 11 11 0 0 1 40 28" stroke="${G}" stroke-width="2.5" opacity="0.8">
  <animate attributeName="opacity" values="0.8;0.15;0.8" dur="3s" repeatCount="indefinite"/>
</path>
<path d="M20 20 A 17 17 0 0 1 44 20" stroke="${G}" stroke-width="2.5" opacity="0.5">
  <animate attributeName="opacity" values="0.5;0.1;0.5" dur="3s" begin="0.5s" repeatCount="indefinite"/>
</path>
<path d="M16 12 A 23 23 0 0 1 48 12" stroke="${G}" stroke-width="2.5" opacity="0.3">
  <animate attributeName="opacity" values="0.3;0.05;0.3" dur="3s" begin="1s" repeatCount="indefinite"/>
</path>`;

icons.tactical = `
<path d="M32 8 L56 32 L32 56 L8 32 Z" stroke="${O}" stroke-width="3"/>
<g stroke="${O}" stroke-width="2.5" opacity="0.8">
  <line x1="32" y1="14" x2="32" y2="24"/><line x1="32" y1="40" x2="32" y2="50"/>
  <line x1="14" y1="32" x2="24" y2="32"/><line x1="40" y1="32" x2="50" y2="32"/>
</g>
<circle cx="32" cy="32" r="14" stroke="${C}" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.6">
  <animateTransform attributeName="transform" type="rotate" from="0 32 32" to="360 32 32" dur="10s" repeatCount="indefinite"/>
</circle>`;

icons.budget = `
<path d="M10 8 V54 H58" stroke="${S}" stroke-width="3"/>
<rect x="16" y="38" width="8" height="16" fill="${C}" opacity="0.75">
  <animate attributeName="y" values="38;42;38" dur="3s" repeatCount="indefinite"/>
  <animate attributeName="height" values="16;12;16" dur="3s" repeatCount="indefinite"/>
</rect>
<rect x="28" y="30" width="8" height="24" fill="${C}" opacity="0.75">
  <animate attributeName="y" values="30;34;30" dur="3s" begin="0.4s" repeatCount="indefinite"/>
  <animate attributeName="height" values="24;20;24" dur="3s" begin="0.4s" repeatCount="indefinite"/>
</rect>
<rect x="40" y="22" width="8" height="32" fill="${C}" opacity="0.75">
  <animate attributeName="y" values="22;26;22" dur="3s" begin="0.8s" repeatCount="indefinite"/>
  <animate attributeName="height" values="32;28;32" dur="3s" begin="0.8s" repeatCount="indefinite"/>
</rect>
<path d="M14 40 L30 28 L40 32 L54 14" stroke="${G}" stroke-width="3" filter="url(#g)" stroke-dasharray="60" stroke-dashoffset="60">
  <animate attributeName="stroke-dashoffset" values="60;0;0" keyTimes="0;0.6;1" dur="4s" repeatCount="indefinite"/>
</path>
<path d="M54 14 L45 15 M54 14 L52 23" stroke="${G}" stroke-width="3">
  <animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.55;0.65;1" dur="4s" repeatCount="indefinite"/>
</path>`;

// ── Bench rows ───────────────────────────────────────────────
icons.compass = `
<circle cx="32" cy="32" r="24" stroke="${C}" stroke-width="3.5"/>
<g>
  <path d="M32 32 L40 16 L28 28 Z" fill="${O}"/>
  <path d="M32 32 L24 48 L36 36 Z" fill="${S}"/>
  <animateTransform attributeName="transform" type="rotate" values="-25 32 32;20 32 32;-25 32 32" dur="6s" repeatCount="indefinite"/>
</g>
<circle cx="32" cy="32" r="3" fill="${C}"/>`;

icons.cards = `
<rect x="20" y="14" width="30" height="38" rx="3" stroke="${S}" stroke-width="3" opacity="0.6" transform="rotate(6 35 33)"/>
<g>
  <rect x="14" y="12" width="30" height="38" rx="3" stroke="${G}" stroke-width="3" fill="${K}"/>
  <line x1="20" y1="24" x2="38" y2="24" stroke="${G}" stroke-width="2.5" opacity="0.8"/>
  <line x1="20" y1="32" x2="34" y2="32" stroke="${S}" stroke-width="2" opacity="0.7"/>
  <animateTransform attributeName="transform" type="rotate" values="0 29 31;-5 29 31;0 29 31" dur="3.5s" repeatCount="indefinite"/>
</g>`;

icons.gradcap = `
<path d="M6 24 L32 12 L58 24 L32 36 Z" stroke="${P}" stroke-width="3.5" fill="${P}" fill-opacity="0.2"/>
<path d="M18 30 V42 C18 46 46 46 46 42 V30" stroke="${P}" stroke-width="3"/>
<g stroke="${Y}" stroke-width="2.5">
  <path d="M54 26 V40"/>
  <circle cx="54" cy="43" r="2.5" fill="${Y}"/>
  <animateTransform attributeName="transform" type="rotate" values="-8 54 26;8 54 26;-8 54 26" dur="3s" repeatCount="indefinite"/>
</g>`;

icons.home = `
<path d="M10 30 L32 10 L54 30" stroke="${G}" stroke-width="3.5"/>
<path d="M16 28 V52 H48 V28" stroke="${G}" stroke-width="3"/>
<rect x="27" y="36" width="10" height="10" stroke="${Y}" stroke-width="2.5" fill="${Y}" fill-opacity="0.4">
  <animate attributeName="fill-opacity" values="0.4;0.9;0.4" dur="2.5s" repeatCount="indefinite"/>
</rect>`;

icons.water = `
<path d="M32 8 C32 8 16 28 16 38 A16 16 0 0 0 48 38 C48 28 32 8 32 8 Z" stroke="${C}" stroke-width="3.5"/>
<path d="M25 38 A 7 7 0 0 0 30 46" stroke="${C}" stroke-width="2.5" opacity="0.7">
  <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.5s" repeatCount="indefinite"/>
</path>
<ellipse cx="32" cy="58" rx="8" ry="2.5" stroke="${C}" stroke-width="2" opacity="0.6">
  <animate attributeName="rx" values="6;16" dur="2.5s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.6;0" dur="2.5s" repeatCount="indefinite"/>
</ellipse>`;

icons.server = `
<rect x="14" y="10" width="36" height="44" rx="3" stroke="${S}" stroke-width="3"/>
<line x1="14" y1="24" x2="50" y2="24" stroke="${S}" stroke-width="2.5"/>
<line x1="14" y1="38" x2="50" y2="38" stroke="${S}" stroke-width="2.5"/>
<g stroke="${S}" stroke-width="2.5" opacity="0.7">
  <line x1="21" y1="17" x2="34" y2="17"/><line x1="21" y1="31" x2="34" y2="31"/><line x1="21" y1="45" x2="34" y2="45"/>
</g>
<g stroke-width="2.5">
  <line x1="40" y1="17" x2="44" y2="17" stroke="${C}"/><line x1="40" y1="31" x2="44" y2="31" stroke="${P}"/><line x1="40" y1="45" x2="44" y2="45" stroke="${M}"/>
</g>`;

icons.map = `
<path d="M32 6 C41 6 48 13 48 22 C48 34 32 52 32 52 C32 52 16 34 16 22 C16 13 23 6 32 6 Z" stroke="${O}" stroke-width="3.5"/>
<circle cx="32" cy="22" r="6" stroke="${O}" stroke-width="3"/>
<ellipse cx="32" cy="56" rx="9" ry="3" stroke="${O}" stroke-width="2" opacity="0.6">
  <animate attributeName="rx" values="5;15" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.6;0" dur="2.2s" repeatCount="indefinite"/>
</ellipse>`;

icons.compliance = `
<rect x="14" y="10" width="36" height="46" rx="3" stroke="${G}" stroke-width="3"/>
<rect x="25" y="6" width="14" height="8" rx="2" stroke="${G}" stroke-width="2.5" fill="${K}"/>
<g stroke="${S}" stroke-width="2" opacity="0.7">
  <line x1="21" y1="24" x2="43" y2="24"/><line x1="21" y1="31" x2="43" y2="31"/>
</g>
<path d="M22 43 L29 50 L43 36" stroke="${G}" stroke-width="3.5" filter="url(#g)" stroke-dasharray="32" stroke-dashoffset="32">
  <animate attributeName="stroke-dashoffset" values="32;0;0;32" keyTimes="0;0.35;0.85;1" dur="3.5s" repeatCount="indefinite"/>
</path>`;

icons.spray = `
<path d="M14 34 L26 26 L30 32 L20 42 Z" stroke="${C}" stroke-width="3"/>
<path d="M24 27 L20 18 H28" stroke="${C}" stroke-width="2.5"/>
<g stroke="${C}" stroke-width="2.5">
  <path d="M36 22 A 14 14 0 0 1 40 40" opacity="0.9"/>
  <path d="M42 16 A 20 20 0 0 1 48 44" opacity="0.6"/>
  <path d="M48 10 A 26 26 0 0 1 56 48" opacity="0.35"/>
</g>`;

// ── Mission bullets ──────────────────────────────────────────
icons.satellite = `
<rect x="26" y="24" width="12" height="16" rx="2" stroke="${C}" stroke-width="3" transform="rotate(45 32 32)"/>
<g stroke="${C}" stroke-width="2.5" transform="rotate(45 32 32)">
  <rect x="8" y="27" width="13" height="10" rx="1"/>
  <rect x="43" y="27" width="13" height="10" rx="1"/>
  <line x1="21" y1="32" x2="26" y2="32"/><line x1="38" y1="32" x2="43" y2="32"/>
</g>
<path d="M40 14 A 14 14 0 0 1 50 24" stroke="${G}" stroke-width="2.5" opacity="0.9">
  <animate attributeName="opacity" values="0.9;0.15;0.9" dur="2s" repeatCount="indefinite"/>
</path>
<path d="M44 8 A 21 21 0 0 1 56 20" stroke="${G}" stroke-width="2.5" opacity="0.5">
  <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2s" begin="0.4s" repeatCount="indefinite"/>
</path>`;

icons.cloudlock = `
<path d="M18 44 A 10 10 0 0 1 18 24 A 14 14 0 0 1 45 20 A 9 9 0 0 1 48 44 Z" stroke="${G}" stroke-width="3.5"/>
<rect x="26" y="32" width="12" height="10" rx="2" stroke="${C}" stroke-width="2.5" fill="${K}"/>
<path d="M29 32 V28 A 3 3 0 0 1 35 28 V32" stroke="${C}" stroke-width="2.5"/>
<circle cx="32" cy="37" r="1.5" fill="${C}"/>`;

icons.agent = `
<rect x="14" y="20" width="36" height="30" rx="6" stroke="${P}" stroke-width="3.5"/>
<line x1="32" y1="20" x2="32" y2="10" stroke="${P}" stroke-width="3"/>
<path d="M27 10 H37" stroke="${P}" stroke-width="3"/>
<g stroke="${C}" stroke-width="3.5">
  <line x1="21" y1="33" x2="27" y2="33"/><line x1="37" y1="33" x2="43" y2="33"/>
  <animateTransform attributeName="transform" type="translate" values="0 0;0 0;2 0;-2 0;0 0" keyTimes="0;0.7;0.8;0.9;1" dur="5s" repeatCount="indefinite"/>
</g>
<line x1="26" y1="43" x2="38" y2="43" stroke="${C}" stroke-width="2.5" opacity="0.8"/>`;

icons.vision = `
<path d="M6 32 C14 18 50 18 58 32 C50 46 14 46 6 32 Z" stroke="${C}" stroke-width="3.5"/>
<circle cx="32" cy="32" r="8" stroke="${O}" stroke-width="3">
  <animate attributeName="cx" values="26;38;26" dur="4s" repeatCount="indefinite"/>
</circle>
`;

icons.rocket = `
<path d="M32 6 C40 14 42 26 40 38 H24 C22 26 24 14 32 6 Z" stroke="${G}" stroke-width="3.5"/>
<circle cx="32" cy="22" r="4" stroke="${C}" stroke-width="2.5"/>
<path d="M24 34 L14 44 L24 42 M40 34 L50 44 L40 42" stroke="${G}" stroke-width="3"/>
<path d="M28 40 C28 46 32 50 32 54 C32 50 36 46 36 40" stroke="${O}" stroke-width="3" fill="${O}" fill-opacity="0.3" filter="url(#g)">
  <animate attributeName="opacity" values="1;0.35;0.9;0.5;1" dur="0.9s" repeatCount="indefinite"/>
</path>`;

// ── Flagship bullets ─────────────────────────────────────────
icons.lock = `
<rect x="16" y="28" width="32" height="26" rx="4" stroke="${G}" stroke-width="3.5"/>
<path d="M22 28 V20 A 10 10 0 0 1 42 20 V28" stroke="${G}" stroke-width="3.5"/>
<line x1="32" y1="38" x2="32" y2="46" stroke="${C}" stroke-width="3.5"/>
<circle cx="32" cy="38" r="3.5" fill="${C}"/>`;

icons.dna = `
<path d="M22 8 C22 20 42 24 42 32 C42 40 22 44 22 56" stroke="${C}" stroke-width="3"/>
<path d="M42 8 C42 20 22 24 22 32 C22 40 42 44 42 56" stroke="${G}" stroke-width="3"/>
<g stroke-width="2.5">
  <line x1="24" y1="14" x2="40" y2="14" stroke="${S}"><animate attributeName="opacity" values="1;0.2;1" dur="2.4s" repeatCount="indefinite"/></line>
  <line x1="27" y1="32" x2="37" y2="32" stroke="${S}"><animate attributeName="opacity" values="1;0.2;1" dur="2.4s" begin="0.8s" repeatCount="indefinite"/></line>
  <line x1="24" y1="50" x2="40" y2="50" stroke="${S}"><animate attributeName="opacity" values="1;0.2;1" dur="2.4s" begin="1.6s" repeatCount="indefinite"/></line>
</g>`;

icons.idbadge = `
<rect x="12" y="14" width="40" height="38" rx="4" stroke="${P}" stroke-width="3.5"/>
<path d="M26 14 V10 H38 V14" stroke="${P}" stroke-width="3"/>
<circle cx="24" cy="30" r="5" stroke="${C}" stroke-width="2.5"/>
<path d="M17 44 C17 38 31 38 31 44" stroke="${C}" stroke-width="2.5"/>
<g stroke="${S}" stroke-width="2.5" opacity="0.8">
  <line x1="38" y1="27" x2="46" y2="27"/><line x1="38" y1="34" x2="46" y2="34"/><line x1="38" y1="41" x2="44" y2="41"/>
</g>`;

icons.coin = `
<g>
  <ellipse cx="32" cy="32" rx="22" ry="22" stroke="${Y}" stroke-width="3.5">
    <animate attributeName="rx" values="22;7;22" dur="4s" repeatCount="indefinite"/>
  </ellipse>
  <path d="M32 20 V44 M38 24 H29 A 4.5 4.5 0 0 0 29 33 H35 A 4.5 4.5 0 0 1 35 42 H26" stroke="${Y}" stroke-width="3">
    <animate attributeName="opacity" values="1;0;1" keyTimes="0;0.5;1" dur="4s" repeatCount="indefinite"/>
  </path>
</g>`;

icons.medal = `
<path d="M26 6 H38 L35 20 H29 Z" stroke="${Y}" stroke-width="2.5" fill="${Y}" fill-opacity="0.25"/>
<circle cx="32" cy="36" r="16" stroke="${Y}" stroke-width="3.5"/>
<path d="M32 26 L35 33 L42 33.6 L37 38.4 L38.4 45.4 L32 42 L25.6 45.4 L27 38.4 L22 33.6 L29 33 Z" fill="${Y}">
  <animate attributeName="opacity" values="1;0.45;1" dur="2.5s" repeatCount="indefinite"/>
</path>`;

// ── Site-aligned additions (LUCID prism, COVERT, channels) ───
icons.prism = `
<path d="M32 8 L54 50 H10 Z" stroke="${S}" stroke-width="3" fill="${C}" fill-opacity="0.06"/>
<line x1="2" y1="40" x2="22" y2="32" stroke="#ecf4fa" stroke-width="3" filter="url(#g)"/>
<g stroke-width="2.5" filter="url(#g)">
  <line x1="42" y1="30" x2="62" y2="22" stroke="${G}"><animate attributeName="opacity" values="1;0.25;1" dur="2.4s" repeatCount="indefinite"/></line>
  <line x1="43" y1="33" x2="62" y2="30" stroke="${C}"><animate attributeName="opacity" values="1;0.25;1" dur="2.4s" begin="0.3s" repeatCount="indefinite"/></line>
  <line x1="44" y1="36" x2="62" y2="38" stroke="${P}"><animate attributeName="opacity" values="1;0.25;1" dur="2.4s" begin="0.6s" repeatCount="indefinite"/></line>
  <line x1="45" y1="39" x2="62" y2="46" stroke="${M}"><animate attributeName="opacity" values="1;0.25;1" dur="2.4s" begin="0.9s" repeatCount="indefinite"/></line>
</g>
<rect x="27" y="34" width="10" height="8" rx="1.5" fill="${T}" fill-opacity="0.35" stroke="${T}" stroke-width="2"/>
<path d="M29 34 V31 A 3 3 0 0 1 35 31 V34" stroke="${T}" stroke-width="2"/>
<circle cx="32" cy="38" r="1.4" fill="${T}"/>`;

icons.broadcast = `
<path d="M32 30 L20 58 M32 30 L44 58 M24 48 H40" stroke="${S}" stroke-width="3"/>
<circle cx="32" cy="26" r="4" stroke="${C}" stroke-width="3"/>
<g stroke-width="3">
  <path d="M22 16 A 14 14 0 0 0 22 36" stroke="${C}"><animate attributeName="opacity" values="1;0.15;1" dur="2s" repeatCount="indefinite"/></path>
  <path d="M42 16 A 14 14 0 0 1 42 36" stroke="${C}"><animate attributeName="opacity" values="1;0.15;1" dur="2s" repeatCount="indefinite"/></path>
  <path d="M14 10 A 22 22 0 0 0 14 42" stroke="${P}"><animate attributeName="opacity" values="0.8;0.1;0.8" dur="2s" begin="0.4s" repeatCount="indefinite"/></path>
  <path d="M50 10 A 22 22 0 0 1 50 42" stroke="${P}"><animate attributeName="opacity" values="0.8;0.1;0.8" dur="2s" begin="0.4s" repeatCount="indefinite"/></path>
</g>`;

icons.play = `
<rect x="6" y="14" width="52" height="36" rx="10" stroke="${M}" stroke-width="3.5"/>
<path d="M27 23 L41 32 L27 41 Z" fill="${M}" filter="url(#g)">
  <animate attributeName="opacity" values="1;0.45;1" dur="1.8s" repeatCount="indefinite"/>
</path>
<rect x="6" y="14" width="52" height="36" rx="10" stroke="${M}" stroke-width="1.5" opacity="0">
  <animate attributeName="opacity" values="0.6;0" dur="1.8s" repeatCount="indefinite"/>
  <animate attributeName="stroke-width" values="1.5;8" dur="1.8s" repeatCount="indefinite"/>
</rect>`;

icons.xmark = `
<rect x="6" y="6" width="52" height="52" rx="10" stroke="${S}" stroke-width="2.5" opacity="0.6"/>
<path d="M18 16 L46 48" stroke="${C}" stroke-width="5"/>
<path d="M46 16 L18 48" stroke="${C}" stroke-width="2.5"/>
<line x1="10" y1="12" x2="54" y2="12" stroke="${P}" stroke-width="2" filter="url(#g)">
  <animate attributeName="y1" values="12;52;12" dur="3.2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="12;52;12" dur="3.2s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.9;0.2;0.9" dur="3.2s" repeatCount="indefinite"/>
</line>`;

icons.forge = `
<path d="M22 18 L8 32 L22 46" stroke="${G}" stroke-width="3.5"/>
<path d="M42 18 L56 32 L42 46" stroke="${G}" stroke-width="3.5"/>
<path d="M36 12 L28 52" stroke="${C}" stroke-width="3"/>
<g stroke="${Y}" stroke-width="2.5">
  <line x1="46" y1="12" x2="50" y2="6"/><line x1="49" y1="15" x2="56" y2="13"/>
</g>`;

icons.planning = `
<rect x="6" y="10" width="52" height="44" rx="3" stroke="${S}" stroke-width="2.5" opacity="0.7"/>
<g stroke="${S}" stroke-width="1" opacity="0.35">
  <line x1="23" y1="10" x2="23" y2="54"/><line x1="41" y1="10" x2="41" y2="54"/><line x1="6" y1="32" x2="58" y2="32"/>
</g>
<path d="M12 46 C22 44 26 30 40 24" stroke="${C}" stroke-width="3" stroke-dasharray="44" stroke-dashoffset="44">
  <animate attributeName="stroke-dashoffset" values="44;0;0" keyTimes="0;0.6;1" dur="3.6s" repeatCount="indefinite"/>
</path>
<path d="M12 46 C24 50 36 44 48 38" stroke="${P}" stroke-width="3" stroke-dasharray="44" stroke-dashoffset="44">
  <animate attributeName="stroke-dashoffset" values="44;44;0;0" keyTimes="0;0.2;0.8;1" dur="3.6s" repeatCount="indefinite"/>
</path>
<path d="M44 16 L52 24 M52 16 L44 24" stroke="${M}" stroke-width="3"/>`;

icons.chart = `
<line x1="8" y1="56" x2="58" y2="56" stroke="${S}" stroke-width="2.5"/>
<g stroke-width="2.5">
  <line x1="16" y1="18" x2="16" y2="48" stroke="${G}"/><rect x="12" y="24" width="8" height="16" fill="${G}" fill-opacity="0.35" stroke="${G}"/>
  <line x1="30" y1="26" x2="30" y2="52" stroke="${M}"/><rect x="26" y="32" width="8" height="12" fill="${M}" fill-opacity="0.35" stroke="${M}"/>
  <line x1="44" y1="8" x2="44" y2="40" stroke="${G}"/><rect x="40" y="14" width="8" height="18" fill="${G}" fill-opacity="0.35" stroke="${G}"/>
</g>
<path d="M8 44 L22 30 L32 38 L56 12" stroke="${C}" stroke-width="2.5" filter="url(#g)" stroke-dasharray="70" stroke-dashoffset="70">
  <animate attributeName="stroke-dashoffset" values="70;0;0" keyTimes="0;0.6;1" dur="4s" repeatCount="indefinite"/>
</path>`;

icons.mic = `
<rect x="24" y="8" width="16" height="30" rx="8" stroke="${C}" stroke-width="3.5"/>
<path d="M16 30 A 16 16 0 0 0 48 30" stroke="${C}" stroke-width="3"/>
<line x1="32" y1="46" x2="32" y2="56" stroke="${C}" stroke-width="3"/>
<line x1="24" y1="56" x2="40" y2="56" stroke="${C}" stroke-width="3"/>
<g stroke="${G}" stroke-width="2.5">
  <line x1="8" y1="22" x2="8" y2="32"><animate attributeName="y1" values="22;16;22" dur="1.1s" repeatCount="indefinite"/></line>
  <line x1="56" y1="22" x2="56" y2="32"><animate attributeName="y1" values="22;14;22" dur="1.1s" begin="0.35s" repeatCount="indefinite"/></line>
</g>`;

icons.atom = `
<g stroke-width="2.5">
  <ellipse cx="32" cy="32" rx="26" ry="10" stroke="${C}"/>
  <ellipse cx="32" cy="32" rx="26" ry="10" stroke="${P}" transform="rotate(60 32 32)"/>
  <ellipse cx="32" cy="32" rx="26" ry="10" stroke="${M}" transform="rotate(120 32 32)"/>
  <animateTransform attributeName="transform" type="rotate" from="0 32 32" to="360 32 32" dur="14s" repeatCount="indefinite"/>
</g>
<circle cx="32" cy="32" r="4.5" stroke="${T}" stroke-width="2.5"/>`;

icons.seal = `
<circle cx="32" cy="32" r="24" stroke="${Y}" stroke-width="3.5"/>
<circle cx="32" cy="32" r="18" stroke="${Y}" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.7">
  <animateTransform attributeName="transform" type="rotate" from="0 32 32" to="360 32 32" dur="16s" repeatCount="indefinite"/>
</circle>
<path d="M32 20 L35.5 28 L44 28.8 L37.6 34.4 L39.5 42.8 L32 38.4 L24.5 42.8 L26.4 34.4 L20 28.8 L28.5 28 Z" fill="${Y}" fill-opacity="0.85">
  <animate attributeName="fill-opacity" values="0.85;0.4;0.85" dur="2.5s" repeatCount="indefinite"/>
</path>`;

icons.method = `
<circle cx="32" cy="32" r="20" stroke="${S}" stroke-width="2" stroke-dasharray="4 4" opacity="0.6">
  <animateTransform attributeName="transform" type="rotate" from="0 32 32" to="360 32 32" dur="12s" repeatCount="indefinite"/>
</circle>
<circle cx="32" cy="12" r="5" fill="${K}" stroke="${Y}" stroke-width="3"/>
<circle cx="52" cy="32" r="5" fill="${K}" stroke="${C}" stroke-width="3"/>
<circle cx="32" cy="52" r="5" fill="${K}" stroke="${P}" stroke-width="3"/>
<circle cx="12" cy="32" r="5" fill="${K}" stroke="${M}" stroke-width="3"/>`;

const outDir = dirname(fileURLToPath(import.meta.url));
mkdirSync(outDir, { recursive: true });
for (const [name, body] of Object.entries(icons)) {
  writeFileSync(join(outDir, `${name}.svg`), wrap(body.trim()) + "\n");
}
console.log(`wrote ${Object.keys(icons).length} icons to ${outDir}`);
