import { html } from 'lit';

/** Showcase sections partial — Typography, Layout, Nav, Forms, Feedback, Organization, Examples */
export function renderShowcase() {
  return html`
  <!-- Typography -->
  <section>
    <div class="section-title">Typography</div>
    <div class="wa-stack wa-gap-m">
      <h1 style="margin:0">Heading 1</h1>
      <h2 style="margin:0">Heading 2</h2>
      <h3 style="margin:0">Heading 3</h3>
      <p style="margin:0;max-width:600px">
        This is a paragraph demonstrating the default typography. Web Awesome uses a robust set of
        <strong>font tokens</strong> and <em>utility classes</em> to ensure your text looks great
        and remains readable across all devices.
      </p>
      <div class="wa-cluster wa-gap-m wa-align-items-center">
        <code>const awesome = true;</code>
        <kbd>Cmd + K</kbd>
      </div>
    </div>
  </section>

  <!-- Layout -->
  <section>
    <div class="section-title">Layout Utilities</div>
    <div class="wa-stack wa-gap-xl">
      <div class="wa-grid wa-gap-m" style="--min-column-size:150px">
        <div style="background:var(--wa-color-brand-fill-quiet);height:100px;border-radius:var(--wa-border-radius-m);display:flex;align-items:center;justify-content:center">Grid 1</div>
        <div style="background:var(--wa-color-brand-fill-quiet);height:100px;border-radius:var(--wa-border-radius-m);display:flex;align-items:center;justify-content:center">Grid 2</div>
        <div style="background:var(--wa-color-brand-fill-quiet);height:100px;border-radius:var(--wa-border-radius-m);display:flex;align-items:center;justify-content:center">Grid 3</div>
      </div>
      <div class="wa-cluster wa-gap-s">
        <wa-button size="small">Cluster Item 1</wa-button>
        <wa-button size="small">Item 2</wa-button>
        <wa-button size="small">Longer Item 3</wa-button>
        <wa-button size="small">Item 4</wa-button>
        <wa-button size="small">5</wa-button>
      </div>
      <div class="wa-flank wa-align-items-start">
        <wa-avatar label="User Avatar"></wa-avatar>
        <div class="wa-stack wa-gap-3xs">
          <strong>Layout Wizard</strong>
          <p style="margin:0;font-size:var(--wa-font-size-s)">Using wa-flank for media objects.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Navigation -->
  <section>
    <div class="section-title">Navigation</div>
    <div class="wa-stack wa-gap-xl">
      <wa-tab-group>
        <wa-tab slot="nav" panel="general">General</wa-tab>
        <wa-tab slot="nav" panel="custom">Custom</wa-tab>
        <wa-tab slot="nav" panel="advanced">Advanced</wa-tab>
        <wa-tab-panel name="general">General settings content.</wa-tab-panel>
        <wa-tab-panel name="custom">Custom settings content.</wa-tab-panel>
        <wa-tab-panel name="advanced">Advanced settings content.</wa-tab-panel>
      </wa-tab-group>
      <wa-breadcrumb>
        <wa-breadcrumb-item href="#">Home</wa-breadcrumb-item>
        <wa-breadcrumb-item href="#">Components</wa-breadcrumb-item>
        <wa-breadcrumb-item>Playground</wa-breadcrumb-item>
      </wa-breadcrumb>
      <wa-tree style="max-width:300px">
        <wa-tree-item expanded>Assets
          <wa-tree-item>Images</wa-tree-item>
          <wa-tree-item>Fonts</wa-tree-item>
        </wa-tree-item>
        <wa-tree-item>Source</wa-tree-item>
      </wa-tree>
    </div>
  </section>

  <!-- Form Controls -->
  <section>
    <div class="section-title">Form Controls</div>
    <div class="wa-grid wa-gap-l" style="--min-column-size:250px">
      <wa-input label="Name" placeholder="Enter your name" help-text="We'll never share your name."></wa-input>
      <wa-select label="Favorite Animal" value="cat">
        <wa-option value="dog">Dog</wa-option>
        <wa-option value="cat">Cat</wa-option>
        <wa-option value="bird">Bird</wa-option>
      </wa-select>
      <div class="wa-cluster wa-gap-l wa-align-items-center">
        <wa-checkbox checked>Checkbox</wa-checkbox>
        <wa-switch checked>Switch</wa-switch>
      </div>
      <wa-radio-group label="Select an option" value="1">
        <wa-radio value="1">Option 1</wa-radio>
        <wa-radio value="2">Option 2</wa-radio>
      </wa-radio-group>
      <wa-textarea label="Bio" placeholder="Tell us about yourself"></wa-textarea>
      <wa-rating label="Rate your experience" value="3"></wa-rating>
    </div>
  </section>

  <!-- Feedback & Status -->
  <section>
    <div class="section-title">Feedback &amp; Status</div>
    <div class="wa-stack wa-gap-m">
      <wa-callout variant="brand">
        <wa-icon slot="icon" name="circle-info"></wa-icon>
        <strong>Welcome to the playground!</strong><br>
        Experiment with themes and palettes in the sidebar to see how components adapt.
      </wa-callout>
      <div class="wa-grid wa-gap-l" style="--min-column-size:200px">
        <div class="wa-cluster wa-gap-s">
          <wa-badge variant="brand">New</wa-badge>
          <wa-badge variant="success">Fixed</wa-badge>
          <wa-badge variant="danger" pill>99+</wa-badge>
        </div>
        <div class="wa-cluster wa-gap-s">
          <wa-tag variant="neutral" size="small">Tag</wa-tag>
          <wa-tag variant="brand" size="small" removable>Removable</wa-tag>
        </div>
        <wa-progress-bar value="60" label="Uploading..."></wa-progress-bar>
        <div class="wa-cluster wa-gap-l wa-align-items-center">
          <wa-spinner></wa-spinner>
          <wa-spinner style="font-size:2rem"></wa-spinner>
        </div>
      </div>
    </div>
  </section>

  <!-- Organization -->
  <section>
    <div class="section-title">Organization</div>
    <div class="wa-grid wa-gap-l" style="--min-column-size:300px">
      <wa-card>
        <img slot="image" src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=400&q=80" alt="Abstract art">
        <strong>Card Title</strong><br>
        This is a standard card with an image and some content.
        <div slot="footer"><wa-button variant="brand" size="small">Action</wa-button></div>
      </wa-card>
      <wa-details summary="Click to expand">
        Here is some detailed information that is hidden by default. It's great for FAQs or secondary content.
      </wa-details>
    </div>
  </section>

  ${this._renderShowcaseExamples()}`;
}
