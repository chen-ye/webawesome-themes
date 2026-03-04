import { html } from 'lit';

/** Colors & Scales section partial — bound to WaPlayground's `this` */
export function renderColorsSection() {
  return html`
  <section>
    <div class="wa-flank wa-margin-block-end-l">
      <div class="wa-stack wa-gap-2xs">
        <div class="section-title" style="margin-bottom: 0;">Colors &amp; Scales</div>
        <p class="wa-body-s" style="color: var(--wa-color-surface-dimmed)">Compare active theme variables line-by-line.</p>
      </div>
      <div class="wa-cluster wa-align-items-center">
        <span class="wa-body-s" style="font-weight: 500;">Compare Against:</span>
        <wa-select .value=${this.comparisonPalette} @change=${this._onComparisonChange} size="small" style="width: 150px;">
          <wa-option value="none">None</wa-option>
          <wa-option value="default">Default</wa-option>
          <wa-option value="shoelace">Shoelace</wa-option>
          <wa-option value="radix">Radix UI</wa-option>
        </wa-select>
      </div>
    </div>
    <wa-color-scales
      .activePaletteName=${this._activePaletteName}
      .comparisonPaletteName=${this._comparisonPaletteName}
      .comparisonPaletteClass=${this.comparisonPalette === 'default' ? 'default' : this.comparisonPalette}>
    </wa-color-scales>
  </section>`;
}
