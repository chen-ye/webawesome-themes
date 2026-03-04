import { html } from 'lit';

/** Showcase Examples card grid — the large demo section */
export function renderShowcaseExamples() {
  return html`
  <section>
    <div class="section-title">Showcase Examples</div>
    <div class="ui-component-examples" style="columns:6 300px;column-gap:1rem">

      <!-- Activity Rings -->
      <wa-card class="wa-dark" appearance="outlined" orientation="vertical">
        <div class="wa-cluster wa-gap-xl wa-justify-content-center">
          <div style="position:relative">
            <wa-progress-ring value="25" style="--size:100px;--track-width:16px;--indicator-width:16px;--track-color:color-mix(in oklab,deepskyblue 20%,transparent);--indicator-color:deepskyblue;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)"></wa-progress-ring>
            <wa-progress-ring value="50" style="--size:138px;--track-width:16px;--indicator-width:16px;--track-color:color-mix(in oklab,limegreen 20%,transparent);--indicator-color:limegreen;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)"></wa-progress-ring>
            <wa-progress-ring value="75" style="--size:176px;--track-width:16px;--indicator-width:16px;--track-color:color-mix(in oklab,crimson 20%,transparent);--indicator-color:crimson;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)"></wa-progress-ring>
            <wa-progress-ring value="75" style="--size:176px;--track-width:16px;--indicator-width:16px;--track-color:color-mix(in oklab,crimson 20%,transparent);--indicator-color:crimson;opacity:0"></wa-progress-ring>
          </div>
          <div class="wa-stack">
            <div class="wa-stack wa-gap-2xs"><h3 class="wa-heading-s">Parenting</h3><p class="wa-body-s" style="color:crimson">18/24 hrs</p></div>
            <div class="wa-stack wa-gap-2xs"><h3 class="wa-heading-s">Dishes</h3><p class="wa-body-s" style="color:limegreen">52/100 plates</p></div>
            <div class="wa-stack wa-gap-2xs"><h3 class="wa-heading-s">Laundry</h3><p class="wa-body-s" style="color:deepskyblue">1/4 loads</p></div>
          </div>
        </div>
      </wa-card>

      <!-- Cart -->
      <wa-card appearance="outlined" orientation="vertical" with-header with-footer>
        <div slot="header" class="wa-split">
          <h3 class="wa-heading-l">Your Cart</h3>
          <wa-button appearance="plain" size="small" tabindex="-1" variant="neutral"><wa-icon name="xmark" label="Close"></wa-icon></wa-button>
        </div>
        <div class="wa-stack">
          <div class="wa-flank">
            <wa-avatar shape="rounded" style="background-color:var(--wa-color-green-60);color:var(--wa-color-green-95)"><wa-icon slot="icon" name="jedi" class="icon-embiggen"></wa-icon></wa-avatar>
            <div class="wa-stack wa-gap-2xs">
              <div class="wa-split wa-gap-2xs"><strong>Initiate Saber</strong><strong>$179.99</strong></div>
              <div class="wa-split wa-gap-2xs wa-caption-s"><span>Standard Hilt + Green Kyber Add-on</span><a href="#" tabindex="-1" class="wa-link-plain"><wa-icon name="trash" variant="regular"></wa-icon></a></div>
            </div>
          </div>
          <wa-divider></wa-divider>
          <div class="wa-flank">
            <wa-avatar shape="rounded" style="background-color:var(--wa-color-cyan-60);color:var(--wa-color-cyan-95)"><wa-icon slot="icon" name="robot" class="icon-embiggen"></wa-icon></wa-avatar>
            <div class="wa-stack wa-gap-2xs">
              <div class="wa-split wa-gap-2xs"><strong>Repair Droid</strong><strong>$3,049.99</strong></div>
              <div class="wa-split wa-gap-2xs wa-caption-s"><span>R-series (Republic Era Model)</span><a href="#" tabindex="-1" class="wa-link-plain"><wa-icon name="trash" variant="regular"></wa-icon></a></div>
            </div>
          </div>
        </div>
        <div slot="footer" class="wa-stack wa-align-items-center" style="width:100%">
          <div class="wa-split"><strong>Subtotal</strong><strong>$3,229.98</strong></div>
          <wa-button tabindex="-1" variant="brand" style="width:100%" appearance="accent" size="medium"><wa-icon slot="start" name="bag-shopping"></wa-icon>Checkout</wa-button>
          <span class="wa-caption-s">Shipping and taxes calculated at checkout.</span>
        </div>
      </wa-card>

      <!-- Second Breakfast -->
      <wa-card appearance="outlined" orientation="vertical">
        <div class="wa-flank:end">
          <a href="" class="wa-flank wa-link-plain current" tabindex="-1">
            <wa-avatar shape="rounded" style="background-color:var(--wa-color-yellow-90);color:var(--wa-color-yellow-50)"><wa-icon slot="icon" name="utensils" class="icon-embiggen"></wa-icon></wa-avatar>
            <div class="wa-gap-2xs wa-stack"><span class="wa-heading-m">Second Breakfast</span><span class="wa-caption-s">19 Items</span></div>
          </a>
          <wa-dropdown size="medium" placement="bottom-start">
            <wa-button id="more-actions-2" slot="trigger" appearance="plain" size="small" tabindex="-1" variant="neutral"><wa-icon name="ellipsis-vertical" label="Manage Your Order"></wa-icon></wa-button>
            <wa-dropdown-item>Share with Bilbo</wa-dropdown-item>
            <wa-dropdown-item>Wait until elevensies</wa-dropdown-item>
            <wa-dropdown-item>Cancel order</wa-dropdown-item>
          </wa-dropdown>
          <wa-tooltip for="more-actions-2">Manage Your Order</wa-tooltip>
        </div>
      </wa-card>

      <!-- Callouts -->
      <wa-card appearance="plain" style="--spacing:0" orientation="vertical">
        <div class="wa-stack wa-gap-s">
          <wa-callout variant="success" size="medium"><wa-icon slot="icon" family="duotone" name="user-ninja" class="icon-embiggen"></wa-icon><div class="wa-split"><span>This is the way.</span><wa-button variant="success" size="small" tabindex="-1" appearance="accent">Follow the Creed</wa-button></div></wa-callout>
          <wa-callout variant="warning" size="medium"><wa-icon slot="icon" family="duotone" name="fighter-jet" class="icon-embiggen"></wa-icon><div class="wa-split"><span>It's a trap!</span><wa-button variant="warning" size="small" tabindex="-1" appearance="accent">Take Evasive Action</wa-button></div></wa-callout>
          <wa-callout variant="danger" size="medium"><wa-icon slot="icon" family="duotone" name="satellite" class="icon-embiggen"></wa-icon><div class="wa-split"><span>That's no moon.</span><wa-button variant="danger" size="small" tabindex="-1" appearance="accent">Turn Around</wa-button></div></wa-callout>
        </div>
      </wa-card>

      <!-- Cantina -->
      <wa-card appearance="outlined" orientation="vertical">
        <div class="wa-stack">
          <div class="wa-cluster wa-gap-xs" style="margin-block-end:calc(var(--wa-space-2xs) * -1)"><wa-badge appearance="filled" style="font-size:var(--wa-font-size-xs)" variant="success">Scoundrel Happy Hour!</wa-badge></div>
          <h3 class="wa-heading-l">Chalmun's Spaceport Cantina</h3>
          <div class="wa-cluster wa-gap-xs"><wa-rating value="4" readonly tabindex="-1" size="medium"></wa-rating><strong>4.1</strong><span>(419 reviews)</span></div>
          <div class="wa-cluster wa-gap-xs">
            <div class="wa-cluster wa-gap-0">
              <wa-icon name="dollar-sign" style="color:var(--wa-color-green-60);margin-inline:calc(var(--wa-space-2xs) * -1)"></wa-icon>
              <wa-icon name="dollar-sign" style="color:var(--wa-color-green-60);margin-inline:calc(var(--wa-space-2xs) * -1)"></wa-icon>
              <wa-icon name="dollar-sign" style="color:var(--wa-color-green-60);margin-inline:calc(var(--wa-space-2xs) * -1)"></wa-icon>
            </div>
            <wa-tag size="small" variant="neutral" appearance="filled-outlined">Bar</wa-tag>
            <wa-tag size="small" variant="neutral" appearance="filled-outlined">Gastropub</wa-tag>
            <wa-tag size="small" variant="neutral" appearance="filled-outlined">Local Fare</wa-tag>
          </div>
          <div class="wa-flank wa-gap-xs"><wa-icon name="location-dot"></wa-icon><a href="#" class="wa-caption-s" tabindex="-1">Mos Eisley, Tatooine</a></div>
        </div>
      </wa-card>

      <!-- Tell Me the Odds -->
      <wa-card appearance="outlined" orientation="vertical">
        <div class="wa-stack">
          <div class="wa-flank:end">
            <h3 id="odds-label" class="wa-heading-l wa-cluster wa-gap-s"><wa-icon variant="regular" name="robot"></wa-icon>Tell Me the Odds</h3>
            <wa-switch size="large" aria-labelledby="odds-label" tabindex="-1" value="on"></wa-switch>
          </div>
          <p class="wa-body-s">Allow protocol droids to inform you of probabilities, such as the success rate of navigating an asteroid field. We recommend setting this to "Never."</p>
        </div>
      </wa-card>

      <!-- Equalizer -->
      <wa-card appearance="outlined" orientation="vertical">
        <div class="wa-split">
          ${['bass/guitar','drums/drum','guitar/guitar','vocals/microphone','saxophone/fire','piano/keyboard'].map(pair => {
            const [label, icon] = pair.split('/');
            return html`
            <wa-slider orientation="vertical" name="${label}" min="0" max="8" value="${Math.floor(Math.random()*5+3)}" with-markers tabindex="-1" size="medium" tooltip-placement="top">
              <wa-icon slot="label" label="${label}" name="${icon}" class="icon-embiggen" style="margin-block-start:var(--wa-space-m)"></wa-icon>
            </wa-slider>`;
          })}
          <wa-slider orientation="vertical" name="cowbell" min="0" max="8" value="8" with-markers tabindex="-1" disabled id="cowbell" size="medium" tooltip-placement="top">
            <wa-icon slot="label" label="Cowbell" name="bell" class="icon-embiggen" style="margin-block-start:var(--wa-space-m)"></wa-icon>
          </wa-slider>
          <wa-tooltip for="cowbell" style="--max-width:auto">Don't touch the cowbell! It's at perfection!</wa-tooltip>
        </div>
      </wa-card>

      <!-- Receipt -->
      <wa-card appearance="outlined" orientation="vertical" with-footer>
        <div class="wa-stack">
          <div class="wa-split wa-align-items-start">
            <dl class="wa-stack wa-gap-2xs"><dt class="wa-heading-m">Amount</dt><dd class="wa-heading-xl">$5,610.00</dd></dl>
            <wa-badge appearance="filled-outlined" variant="success">Paid</wa-badge>
          </div>
          <wa-callout size="small" variant="success" appearance="filled"><wa-icon slot="icon" variant="regular" name="bullhorn"></wa-icon>You got a sweet Bombadeal!</wa-callout>
          <wa-divider></wa-divider>
          <dl class="wa-stack wa-gap-xs">
            <div class="wa-flank wa-align-items-center"><dt><wa-icon family="duotone" variant="regular" name="user" label="Name"></wa-icon></dt><dd>Tom Bombadil</dd></div>
            <div class="wa-flank wa-align-items-center"><dt><wa-icon family="duotone" variant="regular" name="calendar-days" label="Date"></wa-icon></dt><dd><wa-format-date date="2025-03-15"></wa-format-date></dd></div>
            <div class="wa-flank wa-align-items-center"><dt><wa-icon family="duotone" variant="regular" name="coins"></wa-icon></dt><dd>Paid with copper pennies</dd></div>
          </dl>
        </div>
        <div slot="footer" style="width:100%"><wa-button appearance="accent" variant="success" tabindex="-1" style="width:100%" size="medium"><wa-icon slot="start" variant="regular" name="download"></wa-icon>Download Receipt</wa-button></div>
      </wa-card>

      <!-- Profile Card -->
      <wa-card with-footer appearance="outlined" orientation="vertical">
        <div class="wa-flank:end">
          <div class="wa-stack wa-gap-xs">
            <div class="wa-cluster wa-gap-s"><h3 class="wa-heading-m">Migs Mayfeld</h3><wa-badge pill style="font-size:var(--wa-font-size-2xs)" variant="brand" appearance="accent">Admin</wa-badge></div>
            <span class="wa-caption-s">Remorseful Imperial Sharpshooter</span>
          </div>
          <wa-avatar image="https://images.unsplash.com/photo-1633268335280-a41fbde58707?q=80&w=3348&auto=format&fit=crop" label="Avatar" shape="circle"></wa-avatar>
        </div>
        <div slot="footer" class="wa-cluster wa-gap-xs" style="width:100%">
          <wa-button appearance="outlined" size="small" tabindex="-1" variant="neutral"><wa-icon name="at"></wa-icon></wa-button>
          <wa-button appearance="outlined" size="small" tabindex="-1" variant="neutral"><wa-icon name="message"></wa-icon></wa-button>
          <wa-button appearance="outlined" size="small" tabindex="-1" variant="neutral"><wa-icon name="phone"></wa-icon></wa-button>
          <wa-button appearance="accent" size="small" tabindex="-1" variant="neutral"><wa-icon slot="start" family="brands" name="linkedin" class="icon-embiggen"></wa-icon>Connect on LukedIn</wa-button>
        </div>
      </wa-card>

      <!-- Music Player -->
      <wa-card class="wa-dark" appearance="outlined" orientation="vertical">
        <div class="wa-stack">
          <div class="wa-flank" style="--flank-size:6rem">
            <div class="wa-frame wa-border-radius-m"><img src="https://images.unsplash.com/photo-1667514627762-521b1c815a89?q=20" alt="Album art"></div>
            <div class="wa-stack wa-gap-xs">
              <strong class="text-truncate">The Stone Troll (Shire Remix)</strong>
              <span class="wa-caption-s">Samwise G + Gandalf the Grey</span>
              <div class="wa-flank:end">
                <div class="wa-cluster wa-gap-0">
                  <wa-button appearance="plain" size="small" tabindex="-1" variant="neutral"><wa-icon name="share" label="Share"></wa-icon></wa-button>
                  <wa-button appearance="plain" size="small" tabindex="-1" variant="neutral"><wa-icon name="heart" label="Like"></wa-icon></wa-button>
                  <wa-button appearance="plain" size="small" tabindex="-1" variant="neutral"><wa-icon name="download" label="Download"></wa-icon></wa-button>
                </div>
                <wa-button appearance="plain" size="small" tabindex="-1" id="more-actions-3" variant="neutral"><wa-icon name="ellipsis-vertical" label="More"></wa-icon><wa-tooltip for="more-actions-3">More Options</wa-tooltip></wa-button>
              </div>
            </div>
          </div>
          <div class="wa-stack wa-gap-2xs">
            <wa-progress-bar value="34"></wa-progress-bar>
            <div class="wa-split"><span class="wa-caption-2xs">1:01</span><span class="wa-caption-2xs">-1:58</span></div>
          </div>
          <div class="wa-cluster wa-align-items-center wa-justify-content-center">
            <wa-button appearance="plain" tabindex="-1" variant="neutral" size="medium"><wa-icon name="shuffle" label="Shuffle"></wa-icon></wa-button>
            <div class="wa-cluster wa-gap-2xs">
              <wa-button appearance="plain" tabindex="-1" variant="neutral" size="medium"><wa-icon name="backward" label="Skip Backward"></wa-icon></wa-button>
              <wa-button appearance="plain" variant="brand" tabindex="-1" size="large"><wa-icon name="circle-pause" label="Pause" style="font-size:var(--wa-font-size-xl)"></wa-icon></wa-button>
              <wa-button appearance="plain" tabindex="-1" variant="neutral" size="medium"><wa-icon name="forward" label="Skip Forward"></wa-icon></wa-button>
            </div>
            <wa-button appearance="plain" tabindex="-1" variant="neutral" size="medium"><wa-icon name="repeat" label="Repeat"></wa-icon></wa-button>
          </div>
        </div>
      </wa-card>

      <!-- Cake or Death -->
      <wa-card appearance="outlined" orientation="vertical">
        <wa-radio-group label="You there! Cake or Death?" hint="We're gonna run out of cake at this rate." orientation="horizontal" tabindex="-1">
          <wa-radio appearance="button" value="1"><wa-icon name="cake-candles" variant="regular" style="margin-inline-end:var(--wa-space-s)"></wa-icon> Cake</wa-radio>
          <wa-radio appearance="button" value="2"><wa-icon name="skull-crossbones" variant="regular" style="margin-inline-end:var(--wa-space-s)"></wa-icon> Death</wa-radio>
        </wa-radio-group>
      </wa-card>

      <!-- Decks -->
      <wa-card with-header with-footer appearance="outlined" orientation="vertical">
        <div slot="header" class="wa-split wa-gap-xs">
          <h2 class="wa-heading-l">Decks</h2>
          <wa-button appearance="plain" size="small" tabindex="-1" variant="neutral"><wa-icon name="plus" label="Add"></wa-icon></wa-button>
        </div>
        <div class="wa-stack wa-gap-xl">
          <p class="wa-caption-s">You haven't created any decks yet. Get started by selecting an aspect that matches your play style.</p>
          <div class="wa-grid wa-gap-xl" style="--min-column-size:30ch">
            ${[
              { name:'Vigilance', icon:'shield', color:'blue', desc:'Protect, defend, and restore as you ready heavy-hitters.' },
              { name:'Command', icon:'angles-up', color:'green', desc:'Build imposing armies and stockpile resources.' },
              { name:'Aggression', icon:'explosion', color:'red', desc:'Relentlessly deal damage and apply pressure to your opponent.' },
              { name:'Cunning', icon:'moon', color:'yellow', desc:'Disrupt and frustrate your opponent with dastardly tricks.' },
            ].map(d => html`
              <a href="" class="wa-flank wa-align-items-start wa-link-plain current" tabindex="-1">
                <wa-avatar shape="rounded" style="background-color:var(--wa-color-${d.color}-90);color:var(--wa-color-${d.color}-50)"><wa-icon slot="icon" name="${d.icon}"></wa-icon></wa-avatar>
                <div class="wa-stack wa-gap-2xs">
                  <span class="wa-align-items-center wa-cluster wa-gap-xs wa-heading-m">${d.name} <wa-icon name="arrow-right"></wa-icon></span>
                  <p class="wa-caption-s">${d.desc}</p>
                </div>
              </a>
            `)}
          </div>
        </div>
        <div slot="footer" style="width:100%">
          <wa-button appearance="outlined" tabindex="-1" style="width:100%" variant="neutral" size="medium"><wa-icon slot="start" variant="regular" name="dice-d20"></wa-icon>Roll for Initiative and a Deck!</wa-button>
        </div>
      </wa-card>

      <!-- Data Entry -->
      <wa-card appearance="outlined" orientation="vertical">
        <h3 class="wa-heading-m wa-margin-block-end-m">Data Entry &amp; QR</h3>
        <div class="wa-stack wa-gap-s">
          <wa-color-picker value="#00d8ff"></wa-color-picker>
          <wa-number-input placeholder="Number Input" value="42" step="1"></wa-number-input>
          <div class="wa-cluster wa-justify-content-center wa-margin-block-start-m"><wa-qr-code value="https://webawesome.com" size="128"></wa-qr-code></div>
        </div>
      </wa-card>

      <!-- Formatting Utils -->
      <wa-card appearance="outlined" orientation="vertical">
        <h3 class="wa-heading-m wa-margin-block-end-m">Formatting Utils</h3>
        <ul class="wa-stack wa-gap-2xs">
          <li><strong>Bytes:</strong> <wa-format-bytes value="1073741824"></wa-format-bytes></li>
          <li><strong>Number:</strong> <wa-format-number value="1234567.89"></wa-format-number></li>
          <li><strong>Relative Time:</strong> <wa-relative-time date="2020-01-01"></wa-relative-time></li>
        </ul>
      </wa-card>

      <!-- Skeleton -->
      <wa-card appearance="outlined" orientation="vertical">
        <h3 class="wa-heading-m wa-margin-block-end-m">Loading Skeleton</h3>
        <div class="wa-flank">
          <wa-skeleton effect="pulse" style="--border-radius:var(--wa-border-radius-circle);width:3rem;height:3rem"></wa-skeleton>
          <div class="wa-stack wa-gap-3xs"><wa-skeleton effect="pulse" style="width:80%"></wa-skeleton><wa-skeleton effect="pulse" style="width:60%"></wa-skeleton></div>
        </div>
      </wa-card>

      <!-- Interactive & Media -->
      <wa-card appearance="outlined" orientation="vertical">
        <h3 class="wa-heading-m wa-margin-block-end-m">Interactive &amp; Media</h3>
        <div class="wa-stack wa-gap-m">
          <wa-popover placement="top"><wa-button slot="anchor">Hover for Popover</wa-button><wa-card appearance="filled" style="max-width:250px">This is a rich popover attached to the button!</wa-card></wa-popover>
          <wa-button @click=${() => document.querySelector('.playground-dialog').show()}>Open Dialog</wa-button>
          <wa-button @click=${() => document.querySelector('.playground-drawer').show()}>Open Drawer</wa-button>
          <wa-carousel pagination navigation style="--aspect-ratio:16/9;margin-top:var(--wa-space-s)">
            <wa-carousel-item style="background:var(--wa-color-brand-60);display:flex;align-items:center;justify-content:center;color:white;font-size:2rem">Slide 1</wa-carousel-item>
            <wa-carousel-item style="background:var(--wa-color-accent-60);display:flex;align-items:center;justify-content:center;color:white;font-size:2rem">Slide 2</wa-carousel-item>
            <wa-carousel-item style="background:var(--wa-color-success-60);display:flex;align-items:center;justify-content:center;color:white;font-size:2rem">Slide 3</wa-carousel-item>
          </wa-carousel>
        </div>
      </wa-card>

      <!-- Split Panel -->
      <wa-card appearance="outlined" orientation="vertical" style="grid-column:span 2">
        <h3 class="wa-heading-m wa-margin-block-end-m">Split Panel</h3>
        <wa-split-panel style="height:200px;--divider-width:10px">
          <div slot="start" style="height:100%;display:flex;align-items:center;justify-content:center;background:var(--wa-color-surface-sunken)">Start Panel</div>
          <div slot="end" style="height:100%;display:flex;align-items:center;justify-content:center;background:var(--wa-color-surface-dimmed)">End Panel</div>
        </wa-split-panel>
      </wa-card>

    </div>
  </section>`;
}
