import { html } from 'lit';

/** Button Matrix section partial — bound to WaPlayground's `this` */
export function renderButtonMatrix() {
  const variants = ['neutral','brand','success','warning','danger'];
  const appearances = ['accent','filled-outlined','filled','outlined','plain'];

  return html`
  <section>
    <div class="section-title" style="margin-top: var(--wa-space-4xl);">Button Matrix</div>
    <wa-tab-group class="button-matrix-tabs" style="margin-bottom: var(--wa-space-xl)">
      <wa-tab slot="nav" panel="colors">All Colors</wa-tab>
      <wa-tab slot="nav" panel="sizes">All Sizes</wa-tab>

      <wa-tab-panel name="colors">
        <div class="wa-stack wa-gap-l wa-margin-block-start-m">
          ${variants.map(v => html`
            <div class="wa-stack wa-gap-xs">
              <h4 class="wa-heading-s" style="border-bottom: solid var(--wa-border-width-s) var(--wa-color-surface-dim); padding-bottom: var(--wa-space-2xs);">${v.charAt(0).toUpperCase() + v.slice(1)}</h4>
              <div class="wa-cluster wa-gap-s">
                ${appearances.map(a => html`
                  <wa-button variant="${v}" appearance="${a}">${a.charAt(0).toUpperCase() + a.slice(1)}</wa-button>
                `)}
              </div>
            </div>
          `)}
        </div>
      </wa-tab-panel>

      <wa-tab-panel name="sizes">
        <div class="wa-stack wa-gap-l wa-margin-block-start-m">
          ${['small','medium','large'].map(size => html`
            <div class="wa-stack wa-gap-xs">
              <h4 class="wa-heading-s" style="border-bottom: solid var(--wa-border-width-s) var(--wa-color-surface-dim); padding-bottom: var(--wa-space-2xs);">${size.charAt(0).toUpperCase() + size.slice(1)}</h4>
              <div class="wa-cluster wa-gap-s wa-align-items-center">
                <wa-button size="${size}" variant="brand" appearance="filled">Brand</wa-button>
                <wa-button size="${size}" variant="neutral" appearance="filled">Neutral</wa-button>
                <wa-button size="${size}" variant="success" appearance="filled">Success</wa-button>
              </div>
            </div>
          `)}
        </div>
      </wa-tab-panel>
    </wa-tab-group>

    <!-- Secondary Button Components -->
    <h4 class="wa-heading-m wa-margin-block-end-m">Advanced Buttons</h4>
    <div class="wa-cluster wa-gap-xl wa-align-items-start">
      <wa-button-group>
        <wa-button size="medium" appearance="outlined" variant="neutral">Left</wa-button>
        <wa-button size="medium" appearance="outlined" variant="neutral">Center</wa-button>
        <wa-button size="medium" appearance="outlined" variant="neutral">Right</wa-button>
      </wa-button-group>

      <wa-dropdown>
        <wa-button slot="trigger" caret appearance="filled" variant="brand">Actions</wa-button>
        <wa-dropdown-item>Edit Record</wa-dropdown-item>
        <wa-dropdown-item>Duplicate Profile</wa-dropdown-item>
        <wa-divider></wa-divider>
        <wa-dropdown-item variant="danger">
          <wa-icon slot="prefix" name="trash"></wa-icon> Delete
        </wa-dropdown-item>
      </wa-dropdown>

      <div class="wa-cluster wa-gap-s">
        <wa-button variant="brand" appearance="filled" style="aspect-ratio:1/1;padding-inline:0px"><wa-icon name="plus"></wa-icon></wa-button>
        <wa-button variant="neutral" appearance="accent" style="aspect-ratio:1/1;padding-inline:0px"><wa-icon name="gear"></wa-icon></wa-button>
        <wa-button variant="danger" appearance="outlined" style="aspect-ratio:1/1;padding-inline:0px"><wa-icon name="heart"></wa-icon></wa-button>
      </div>
    </div>
  </section>`;
}
