import { LitElement, html, nothing } from 'lit';
import componentStyles from './wa-playground.css' with { type: 'css' };
import utilityStyles from '@awesome.me/webawesome/dist/styles/utilities.css' with { type: 'css' };
import '@awesome.me/webawesome/dist/styles/webawesome.css';
import '@awesome.me/webawesome/dist/styles/themes/awesome.css';
import '@awesome.me/webawesome/dist/styles/themes/shoelace.css';
import '@awesome.me/webawesome/dist/styles/color/palettes/bright.css';
import '@awesome.me/webawesome/dist/styles/color/palettes/shoelace.css';
import '@awesome.me/webawesome/dist/styles/color/variants/brand.css';
import '@awesome.me/webawesome/dist/styles/color/variants/success.css';
import '@awesome.me/webawesome/dist/styles/color/variants/warning.css';
import '@awesome.me/webawesome/dist/styles/color/variants/danger.css';
import '@awesome.me/webawesome/dist/styles/color/variants/neutral.css';
import '../styles/radix-palette.css';
import '../styles/radix-theme.css';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/button-group/button-group.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import '@awesome.me/webawesome/dist/components/select/select.js';
import '@awesome.me/webawesome/dist/components/option/option.js';
import '@awesome.me/webawesome/dist/components/switch/switch.js';
import '@awesome.me/webawesome/dist/components/slider/slider.js';
import '@awesome.me/webawesome/dist/components/tab-group/tab-group.js';
import '@awesome.me/webawesome/dist/components/tab/tab.js';
import '@awesome.me/webawesome/dist/components/tab-panel/tab-panel.js';
import '@awesome.me/webawesome/dist/components/dropdown/dropdown.js';
import '@awesome.me/webawesome/dist/components/dropdown-item/dropdown-item.js';
import '@awesome.me/webawesome/dist/components/divider/divider.js';
import '@awesome.me/webawesome/dist/components/avatar/avatar.js';
import '@awesome.me/webawesome/dist/components/tooltip/tooltip.js';
import '@awesome.me/webawesome/dist/components/breadcrumb/breadcrumb.js';
import '@awesome.me/webawesome/dist/components/breadcrumb-item/breadcrumb-item.js';
import '@awesome.me/webawesome/dist/components/tree/tree.js';
import '@awesome.me/webawesome/dist/components/tree-item/tree-item.js';
import '@awesome.me/webawesome/dist/components/input/input.js';
import '@awesome.me/webawesome/dist/components/checkbox/checkbox.js';
import '@awesome.me/webawesome/dist/components/radio-group/radio-group.js';
import '@awesome.me/webawesome/dist/components/radio/radio.js';
import '@awesome.me/webawesome/dist/components/textarea/textarea.js';
import '@awesome.me/webawesome/dist/components/rating/rating.js';
import '@awesome.me/webawesome/dist/components/callout/callout.js';
import '@awesome.me/webawesome/dist/components/badge/badge.js';
import '@awesome.me/webawesome/dist/components/tag/tag.js';
import '@awesome.me/webawesome/dist/components/progress-bar/progress-bar.js';
import '@awesome.me/webawesome/dist/components/spinner/spinner.js';
import '@awesome.me/webawesome/dist/components/card/card.js';
import '@awesome.me/webawesome/dist/components/details/details.js';
import '@awesome.me/webawesome/dist/components/progress-ring/progress-ring.js';
import '@awesome.me/webawesome/dist/components/format-date/format-date.js';
import '@awesome.me/webawesome/dist/components/copy-button/copy-button.js';
import '@awesome.me/webawesome/dist/components/qr-code/qr-code.js';
import '@awesome.me/webawesome/dist/components/color-picker/color-picker.js';
import '@awesome.me/webawesome/dist/components/number-input/number-input.js';
import '@awesome.me/webawesome/dist/components/skeleton/skeleton.js';
import '@awesome.me/webawesome/dist/components/carousel/carousel.js';
import '@awesome.me/webawesome/dist/components/carousel-item/carousel-item.js';
import '@awesome.me/webawesome/dist/components/dialog/dialog.js';
import '@awesome.me/webawesome/dist/components/drawer/drawer.js';
import '@awesome.me/webawesome/dist/components/split-panel/split-panel.js';
import '@awesome.me/webawesome/dist/components/format-bytes/format-bytes.js';
import '@awesome.me/webawesome/dist/components/format-number/format-number.js';
import '@awesome.me/webawesome/dist/components/relative-time/relative-time.js';
import '@awesome.me/webawesome/dist/components/popover/popover.js';
import '@awesome.me/webawesome/dist/components/animation/animation.js';
import { setBasePath } from '@awesome.me/webawesome/dist/utilities/base-path.js';
import { registerIconLibrary } from '@awesome.me/webawesome/dist/components/icon/library.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './wa-color-scales.js';

// One-time setup
registerIconLibrary('default', {
  resolver: (name, family) => {
    const folder = family === 'brands' ? 'brands' : 'solid';
    return `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@7.2.0/svgs/${folder}/${name}.svg`;
  }
});
setBasePath('https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@3.2.1/dist');

const BRAND_COLORS = ['red','orange','yellow','green','cyan','blue','indigo','purple','pink','gray'];
const NEUTRAL_COLORS = [
  { value: 'gray', label: 'Gray', step: '50' },
  { value: 'mauve', label: 'Mauve', step: '50' },
  { value: 'slate', label: 'Slate', step: '50' },
  { value: 'sage', label: 'Sage', step: '50' },
  { value: 'olive', label: 'Olive', step: '50' },
  { value: 'sand', label: 'Sand', step: '50' },
];
const COLOR_STEPS = ['05','10','20','30','40','50','60','70','80','90','95'];

export class WaPlayground extends LitElement {
  static properties = {
    theme:            { type: String },
    palette:          { type: String },
    dark:             { type: Boolean },
    brand:            { type: String },
    neutral:          { type: String },
    radiusScale:      { type: Number },
    fontSizeScale:    { type: Number },
    spaceScale:       { type: Number },
    borderWidthScale: { type: Number },
    comparisonPalette:{ type: String },
  };

  static styles = [utilityStyles, componentStyles];

  constructor() {
    super();
    this.theme = 'default';
    this.palette = 'default';
    this.dark = false;
    this.brand = 'indigo';
    this.neutral = 'gray';
    this.radiusScale = 1;
    this.fontSizeScale = 1;
    this.spaceScale = 1;
    this.borderWidthScale = 1;
    this.comparisonPalette = 'none';
  }

  connectedCallback() {
    super.connectedCallback();
    this._injectFallbackStyles();
    this._loadFromUrl();
  }

  _injectFallbackStyles() {
    const fallback = [];
    ['mauve','slate','sage','olive','sand'].forEach(alias => {
      COLOR_STEPS.forEach(step => {
        fallback.push(`--wa-color-${alias}-${step}: var(--wa-color-gray-${step});`);
      });
    });
    const el = document.createElement('style');
    el.innerHTML = `:where(:root) { ${fallback.join(' ')} }`;
    document.head.appendChild(el);
  }

  _loadFromUrl() {
    const p = new URLSearchParams(window.location.search);
    if (p.has('theme'))   this.theme = p.get('theme');
    if (p.has('palette')) this.palette = p.get('palette');
    if (p.has('dark'))    this.dark = p.get('dark') === 'true';
    if (p.has('brand'))   this.brand = p.get('brand');
    if (p.has('neutral')) this.neutral = p.get('neutral');
    if (p.has('radius'))  this.radiusScale = parseFloat(p.get('radius'));
    if (p.has('font'))    this.fontSizeScale = parseFloat(p.get('font'));
    if (p.has('space'))   this.spaceScale = parseFloat(p.get('space'));
    if (p.has('border'))  this.borderWidthScale = parseFloat(p.get('border'));
    if (p.has('compare')) this.comparisonPalette = p.get('compare');
  }

  _syncToUrl() {
    const url = new URL(window.location);
    url.searchParams.set('theme', this.theme);
    url.searchParams.set('palette', this.palette);
    url.searchParams.set('dark', this.dark);
    url.searchParams.set('brand', this.brand);
    url.searchParams.set('neutral', this.neutral);
    url.searchParams.set('radius', this.radiusScale);
    url.searchParams.set('font', this.fontSizeScale);
    url.searchParams.set('space', this.spaceScale);
    url.searchParams.set('border', this.borderWidthScale);
    url.searchParams.set('compare', this.comparisonPalette);
    window.history.replaceState({}, '', url);
  }

  get _htmlClasses() {
    const themeClass = this.theme === 'default' ? 'wa-theme-default' : `wa-theme-${this.theme}`;
    const paletteClass = this.palette === 'default' ? '' : `wa-palette-${this.palette}`;
    const brandClass = this.brand === 'indigo' ? '' : `wa-brand-${this.brand}`;
    const neutralClass = this.neutral === 'gray' ? '' : `wa-neutral-${this.neutral}`;
    const darkClass = this.dark ? 'wa-dark' : '';
    return [themeClass, paletteClass, brandClass, neutralClass, darkClass].filter(Boolean).join(' ');
  }

  get _activePaletteName() {
    const names = { default: 'Default', bright: 'Bright', shoelace: 'Shoelace', radix: 'Radix' };
    return names[this.palette] || 'Default';
  }

  get _comparisonPaletteName() {
    const names = { none: '', default: 'Default', shoelace: 'Shoelace', radix: 'Radix UI' };
    return names[this.comparisonPalette] || '';
  }

  updated() {
    const root = document.documentElement;
    root.className = this._htmlClasses;
    root.style.setProperty('--wa-border-radius-scale', this.radiusScale);
    root.style.setProperty('--wa-font-size-scale', this.fontSizeScale);
    root.style.setProperty('--wa-space-scale', this.spaceScale);
    root.style.setProperty('--wa-border-width-scale', this.borderWidthScale);
    this._syncToUrl();
  }

  // -- Event handlers --
  _onDarkToggle(e) { this.dark = e.target.checked; }
  _onThemeChange(e) { this.theme = e.target.value; }
  _onPaletteChange(e) { this.palette = e.target.value; }
  _onRadiusInput(e) { this.radiusScale = parseFloat(e.target.value); }
  _onFontSizeInput(e) { this.fontSizeScale = parseFloat(e.target.value); }
  _onSpaceInput(e) { this.spaceScale = parseFloat(e.target.value); }
  _onBorderWidthInput(e) { this.borderWidthScale = parseFloat(e.target.value); }
  _onComparisonChange(e) { this.comparisonPalette = e.target.value; }
  _onBrandClick(color) { this.brand = color; }
  _onNeutralClick(color) { this.neutral = color; }

  // -- Template helpers (split for readability) --
  _renderSidebar() {
    return html`
    <aside class="sidebar">
      <div class="theme-panel-section">
        <div class="theme-panel-title">Theme Settings</div>

        <div class="control-group">
          <wa-switch .checked=${this.dark} @change=${this._onDarkToggle}>Dark Mode</wa-switch>
        </div>

        <div class="control-group">
          <label class="control-label">Theme</label>
          <wa-select .value=${this.theme} @change=${this._onThemeChange}>
            <wa-option value="default">Default</wa-option>
            <wa-option value="awesome">Awesome</wa-option>
            <wa-option value="shoelace">Shoelace</wa-option>
            <wa-option value="radix">Radix</wa-option>
          </wa-select>
        </div>

        <div class="control-group">
          <label class="control-label">Palette</label>
          <wa-select .value=${this.palette} @change=${this._onPaletteChange}>
            <wa-option value="default">Default</wa-option>
            <wa-option value="bright">Bright</wa-option>
            <wa-option value="shoelace">Shoelace</wa-option>
            <wa-option value="radix">Radix</wa-option>
          </wa-select>
        </div>

        <div class="control-group">
          <label class="control-label">Radius Scale</label>
          <wa-slider min="0" max="4" step="0.2" .value=${this.radiusScale} with-markers with-tooltip @input=${this._onRadiusInput}></wa-slider>
          <div style="display:flex;justify-content:space-between;font-size:10px;margin-top:4px;color:var(--wa-color-text-quiet)"><span>Sharp</span><span>Round</span></div>
        </div>

        <div class="control-group">
          <label class="control-label">Accent Color</label>
          <div class="color-picker">
            ${BRAND_COLORS.map(c => {
              const label = c.charAt(0).toUpperCase() + c.slice(1);
              const id = `swatch-accent-${c}`;
              return html`
                <wa-tooltip for="${id}">${label}</wa-tooltip>
                <button id="${id}"
                  class="color-swatch brand-swatch ${this.brand === c ? 'selected' : ''}"
                  style="--swatch-color: var(--wa-color-${c}-60);"
                  aria-label="${label}"
                  @click=${() => this._onBrandClick(c)}></button>
              `;
            })}
          </div>
        </div>

        <div class="control-group">
          <label class="control-label">Neutral Tint</label>
          <div class="color-picker">
            ${NEUTRAL_COLORS.map(n => {
              const id = `swatch-neutral-${n.value}`;
              return html`
                <wa-tooltip for="${id}">${n.label}</wa-tooltip>
                <button id="${id}"
                  class="color-swatch neutral-swatch ${this.neutral === n.value ? 'selected' : ''}"
                  style="--swatch-color: var(--wa-color-${n.value}-${n.step});"
                  aria-label="${n.label}"
                  @click=${() => this._onNeutralClick(n.value)}></button>
              `;
            })}
          </div>
        </div>

        <div class="control-group">
          <label class="control-label">Font Size Scale</label>
          <wa-slider min="0.5" max="1.5" step="0.1" .value=${this.fontSizeScale} with-markers with-tooltip @input=${this._onFontSizeInput}></wa-slider>
          <div style="display:flex;justify-content:space-between;font-size:10px;margin-top:4px;color:var(--wa-color-text-quiet)"><span>Small</span><span>1x</span><span>Large</span></div>
        </div>

        <div class="control-group">
          <label class="control-label">Spacing Scale</label>
          <wa-slider min="0.5" max="1.5" step="0.1" .value=${this.spaceScale} with-markers with-tooltip @input=${this._onSpaceInput}></wa-slider>
          <div style="display:flex;justify-content:space-between;font-size:10px;margin-top:4px;color:var(--wa-color-text-quiet)"><span>Tight</span><span>1x</span><span>Loose</span></div>
        </div>

        <div class="control-group">
          <label class="control-label">Border Width Scale</label>
          <wa-slider min="0" max="3" step="0.5" .value=${this.borderWidthScale} with-markers with-tooltip @input=${this._onBorderWidthInput}></wa-slider>
          <div style="display:flex;justify-content:space-between;font-size:10px;margin-top:4px;color:var(--wa-color-text-quiet)"><span>None</span><span>1x</span><span>Thick</span></div>
        </div>
      </div>

      <div class="config-view">&lt;html class="${this._htmlClasses}"&gt;</div>
    </aside>`;
  }

  render() {
    return html`
    <header>
      <div class="header-title">
        <wa-icon name="wand-magic-sparkles" style="color: var(--wa-color-brand-60);"></wa-icon>
        Web Awesome Playground
      </div>
      <div class="header-actions">
        <wa-button href="https://webawesome.com" target="_blank" size="small" variant="neutral" appearance="outlined">
          <wa-icon slot="start" name="house"></wa-icon> Docs
        </wa-button>
      </div>
    </header>

    <div class="main-layout">
      ${this._renderSidebar()}
      <main class="preview-area" id="preview-area">
        ${this._renderColorsSection()}
        ${this._renderButtonMatrix()}
        ${this._renderShowcase()}
      </main>
    </div>`;
  }
}

// Template partials are in separate files to keep this manageable
// We'll add them as methods below via mixin-style imports
import { renderColorsSection } from './partials/colors-section.js';
import { renderButtonMatrix } from './partials/button-matrix.js';
import { renderShowcase } from './partials/showcase.js';
import { renderShowcaseExamples } from './partials/showcase-examples.js';

WaPlayground.prototype._renderColorsSection = renderColorsSection;
WaPlayground.prototype._renderButtonMatrix = renderButtonMatrix;
WaPlayground.prototype._renderShowcase = renderShowcase;
WaPlayground.prototype._renderShowcaseExamples = renderShowcaseExamples;

customElements.define('wa-playground', WaPlayground);
