const colors = require('@radix-ui/colors');
const fs = require('fs');

const hues = ['gray', 'mauve', 'slate', 'sage', 'olive', 'sand'];
const maps = {
  1: '95', 2: '90', 3: '80', 4: '70', 5: '60', 6: '50',
  7: '40', 8: '30', 9: '20', 10: '10', 11: '05' // 12 is skipped
};

const darkMaps = {
  2: '05', 3: '10', 4: '20', 5: '30', 6: '40', 7: '50',
  8: '60', 9: '70', 10: '80', 11: '90', 12: '95' // 1 is skipped
};

let css = '';
css += '@layer wa-color-palette {\n';
css += '  .wa-palette-radix {\n';

for (const hue of hues) {
  css += `\n    /* ${hue} (Radix ${hue}, light map) */\n`;
  const scale = colors[hue];
  for (let i = 1; i <= 11; i++) {
    css += `    --wa-color-${hue}-${maps[i]}: ${scale[`${hue}${i}`]};\n`;
  }
  css += `    --wa-color-${hue}: var(--wa-color-${hue}-30);\n`;
  css += `    --wa-color-${hue}-key: 30;\n`;
}

css += '  }\n\n';
css += '  .wa-dark.wa-palette-radix, .wa-dark .wa-palette-radix {\n';

for (const hue of hues) {
  css += `\n    /* ${hue} (Radix ${hue}, dark map) */\n`;
  const scale = colors[`${hue}Dark`];
  for (let i = 2; i <= 12; i++) {
    css += `    --wa-color-${hue}-${darkMaps[i]}: ${scale[`${hue}${i}`]};\n`;
  }
  css += `    --wa-color-${hue}: var(--wa-color-${hue}-70);\n`;
  css += `    --wa-color-${hue}-key: 70;\n`;
}

css += '  }\n';
css += '}\n\n';

css += '@layer wa-color-variant {\n';
for (const hue of hues) {
  css += `  .wa-palette-radix .wa-neutral-${hue} {\n`;
  for (const val of Object.values(maps)) {
    css += `    --wa-color-neutral-${val}: var(--wa-color-${hue}-${val});\n`;
  }
  css += `    --wa-color-neutral: var(--wa-color-${hue});\n`;
  css += `  }\n`;
}
css += '}\n';

fs.writeFileSync('neutrals-out.css', css);
