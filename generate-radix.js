const colors = require('@radix-ui/colors');
const fs = require('fs');

const colorMap = {
  // Brand
  red: 'red',
  orange: 'orange',
  yellow: 'yellow',
  green: 'green',
  cyan: 'cyan',
  blue: 'blue',
  indigo: 'indigo',
  purple: 'purple',
  pink: 'pink',
  // Neutrals
  gray: 'gray',
  mauve: 'mauve',
  slate: 'slate',
  sage: 'sage',
  olive: 'olive',
  sand: 'sand',
};

// Map Web Awesome standard steps to Radix visual scale.
// WA 95 logic = Background / Weakest Color
// WA 05 logic = Text / Strongest Color
// Radix 1 = Background
// Radix 12 = High contrast text
// The mapping remains completely symmetrical for light & dark modes.
// Map Web Awesome standard steps to Radix visual scale.
// WA 95 logic = Background / Weakest Color
// WA 05 logic = Text / Strongest Color
// Radix Light 1 = Background, 12 = High contrast text
const lightStepMap = {
  '95': '2', // App bg / Subtle bg
  '90': '3', // UI bg
  '80': '4', // Hovered UI bg
  '70': '6', // Subtle border
  '60': '7', // UI element border
  '50': '9', // Solid bg (Web Awesome Key)
  '40': '10', // Hover solid bg
  '30': '11', // Low contrast text
  '20': '11.5', // mix(11, 12)
  '10': '12', // High contrast text
  '05': '12.5' // mix(12, deepest contrast)
};

// Web Awesome expects Luma numbers to keep consistent literal meaning.
// 95 means lightest-possible-color-in-the-scale. 05 means darkest-possible-color.
// Radix Dark Mode is 1 = Darkest app bg, 12 = Brightest text.
// Therefore, we map WA 95 (lightest) to Radix Dark 12. WA 50 (solid) to Radix Dark 9.
const darkStepMap = {
  '95': '12.5', // Lightest available -> mapped to brightest + white mix
  '90': '12',   // Very light -> brightest text
  '80': '11.5', // Light -> mix(11, 12)
  '70': '11',   // Low contrast text -> bright
  '60': '10',   // Hover solid bg
  '50': '9',    // Solid bg (Web Awesome Key)
  '40': '7',    // UI element border
  '30': '6',    // Subtle border
  '20': '4',    // Hovered UI bg
  '10': '3',    // UI bg
  '05': '2'     // Darkest available -> App bg / Subtle bg
};

const alphaMap = {
  'a2': '2',
  'a3': '3',
  'a7': '7'
};

function mixColors(color1, color2, percentage = 50) {
  return `color-mix(in oklch, ${color1}, ${color2} ${percentage}%)`;
}

function getStepValue(scale, hue, step, isDark) {
  if (step === '11.5') {
    return mixColors(scale[`${hue}11`], scale[`${hue}12`]);
  }
  if (step === '12.5') {
    return mixColors(scale[`${hue}12`], isDark ? '#fff' : '#000', 30);
  }
  return scale[`${hue}${step}`];
}

let css = `@layer wa-color-palette {
  .wa-palette-radix {\n`;

const waStepKeys = Object.keys(lightStepMap).sort((a,b) => Number(b) - Number(a));

// Light scales
for (const [waName, radixName] of Object.entries(colorMap)) {
  css += `\n    /* ${waName} (Radix ${radixName}, light map) */\n`;
  const scale = colors[radixName];
  const alphaScale = colors[`${radixName}A`];

  for (const waStep of waStepKeys) {
    css += `    --wa-color-${waName}-${waStep}: ${getStepValue(scale, radixName, lightStepMap[waStep], false)};\n`;
  }
  css += `    --wa-color-${waName}: var(--wa-color-${waName}-50);\n`;
  css += `    --wa-color-${waName}-key: 50;\n`;

  for (const [waAlpha, radixAlpha] of Object.entries(alphaMap)) {
    css += `    --wa-color-${waName}-${waAlpha}: ${alphaScale[`${radixName}A${radixAlpha}`]};\n`;
  }
}

css += `  }\n\n`;
css += `  .wa-dark.wa-palette-radix, .wa-dark .wa-palette-radix {\n`;

// Dark scales
for (const [waName, radixName] of Object.entries(colorMap)) {
  css += `\n    /* ${waName} (Radix ${radixName}, dark map) */\n`;
  const scale = colors[`${radixName}Dark`];
  const alphaScale = colors[`${radixName}DarkA`];

  for (const waStep of waStepKeys) {
    css += `    --wa-color-${waName}-${waStep}: ${getStepValue(scale, radixName, darkStepMap[waStep], true)};\n`;
  }
  css += `    --wa-color-${waName}: var(--wa-color-${waName}-50);\n`;
  css += `    --wa-color-${waName}-key: 50;\n`;

  for (const [waAlpha, radixAlpha] of Object.entries(alphaMap)) {
    css += `    --wa-color-${waName}-${waAlpha}: ${alphaScale[`${radixName}A${radixAlpha}`]};\n`;
  }
}

css += `  }\n}\n\n`;

// Neutral Variants
css += `@layer wa-color-variant {\n`;
const neutrals = ['gray', 'mauve', 'slate', 'sage', 'olive', 'sand'];
for (const hue of neutrals) {
  css += `  .wa-palette-radix .wa-neutral-${hue} {\n`;
  for (const waStep of waStepKeys) {
    css += `    --wa-color-neutral-${waStep}: var(--wa-color-${hue}-${waStep});\n`;
  }
  css += `    --wa-color-neutral: var(--wa-color-${hue});\n`;
  for (const waAlpha of Object.keys(alphaMap)) {
    css += `    --wa-color-neutral-${waAlpha}: var(--wa-color-${hue}-${waAlpha});\n`;
  }
  css += `  }\n`;
}
css += `}\n`;

fs.writeFileSync('styles/radix-palette.css', css);
console.log('Successfully mapped semantics to styles/radix-palette.css!');
