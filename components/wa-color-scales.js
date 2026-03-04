import { LitElement, html, nothing } from 'lit';

const COLOR_STEPS = ['05', '10', '20', '30', '40', '50', '60', '70', '80', '90', '95'];

/**
 * <wa-palette-scale> — renders a single color's swatch row with optional comparison.
 *
 * @property {string} color - Color name (e.g. 'red', 'gray')
 * @property {string} activePaletteName - Label for the active palette
 * @property {string} comparisonPaletteName - Label for the comparison palette
 * @property {string} comparisonPaletteClass - CSS class suffix for comparison (e.g. 'shoelace')
 */
export class WaPaletteScale extends LitElement {
  static properties = {
    color:                 { type: String },
    activePaletteName:     { type: String, attribute: 'active-palette-name' },
    comparisonPaletteName: { type: String, attribute: 'comparison-palette-name' },
    comparisonPaletteClass:{ type: String, attribute: 'comparison-palette-class' },
  };

  createRenderRoot() { return this; }

  _renderRow(label, paletteClass, isComparison) {
    const swatches = COLOR_STEPS.map(step => {
      const isLightText = parseInt(step) < 60;
      const textColor = isLightText ? '#fff' : '#000';
      const tooltipId = `swatch-${paletteClass || 'active'}-${this.color}-${step}`;

      return html`
        <wa-tooltip for="${tooltipId}">
          <div style="text-align: center;">
            <strong>${this.color}-${step}</strong><br>
            <div style="font-size: 10px; opacity: 0.8;">var(--wa-color-${this.color}-${step})</div>
          </div>
        </wa-tooltip>
        <div id="${tooltipId}" class="swatch"
             style="width: 2.5rem; height: 2.5rem; border-radius: var(--wa-border-radius-m); background-color: var(--wa-color-${this.color}-${step}); border: 1px solid var(--wa-color-surface-dimmer); display: flex; align-items: center; justify-content: center; font-size: 10px; color: ${textColor}; cursor: pointer;">
          ${step}
        </div>
      `;
    });

    const containerClasses = `wa-flank wa-align-items-center wa-gap-s ${isComparison ? 'wa-margin-block-start-2xs' : ''} ${paletteClass ? `wa-palette-${paletteClass}` : ''}`;

    return html`
      <div class="${containerClasses}">
        <div class="wa-body-s" style="width: 120px; font-weight: 500; color: ${isComparison ? 'var(--wa-color-surface-dimmed)' : 'inherit'};">
          ${label}
        </div>
        <div class="wa-cluster wa-gap-xs">${swatches}</div>
      </div>
    `;
  }

  render() {
    const colorLabel = this.color.charAt(0).toUpperCase() + this.color.slice(1);
    const hasComparison = this.comparisonPaletteClass && this.comparisonPaletteClass !== 'none';

    return html`
      <div class="wa-stack wa-gap-3xs">
        ${this._renderRow(`${colorLabel} (${this.activePaletteName || 'Default'})`, '', false)}
        ${hasComparison
          ? this._renderRow(`Compare (${this.comparisonPaletteName})`, this.comparisonPaletteClass, true)
          : nothing}
      </div>
    `;
  }
}

customElements.define('wa-palette-scale', WaPaletteScale);


/**
 * <wa-color-scales> — orchestrates all palette scale rows with dividers.
 */
const ALL_CORE_PALETTES = ['gray', 'mauve', 'slate', 'sage', 'olive', 'sand', 'red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'indigo', 'purple', 'pink'];

export class WaColorScales extends LitElement {
  static properties = {
    activePaletteName:      { type: String, attribute: 'active-palette-name' },
    comparisonPaletteName:  { type: String, attribute: 'comparison-palette-name' },
    comparisonPaletteClass: { type: String, attribute: 'comparison-palette-class' },
  };

  createRenderRoot() { return this; }

  render() {
    return html`
      <div class="full-palette-comparison-container wa-stack wa-gap-xl">
        ${ALL_CORE_PALETTES.map((color, idx) => html`
          <wa-palette-scale
            .color=${color}
            .activePaletteName=${this.activePaletteName}
            .comparisonPaletteName=${this.comparisonPaletteName}
            .comparisonPaletteClass=${this.comparisonPaletteClass}>
          </wa-palette-scale>
          ${idx !== ALL_CORE_PALETTES.length - 1 ? html`<wa-divider style="margin: var(--wa-space-l) 0;"></wa-divider>` : nothing}
        `)}
      </div>
    `;
  }
}

customElements.define('wa-color-scales', WaColorScales);
