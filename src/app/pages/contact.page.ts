import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-contact',
  // Component-scoped styles to make the embedded Google Form match the site's card styling
  styles: [
    `
    :host { display: block; }

    /* Make the embedded form sit flush with site's card look */
    .card.form {
      padding: 0; /* let the iframe fill the card */
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 0 6px 20px rgba(33, 33, 33, 0.08);
      background: #fff;
    }

    /* Responsive iframe sizing: fills available width, keeps a sensible height on all devices */
    .card.form iframe {
      display: block;
      width: 100%;
      /* Prefer up to 90vh but clamp to sensible sizes */
      height: min(90vh, 1400px);
      min-height: 640px;
      max-height: 1400px;
      border: 0;
    }

    /* Small inner padding for the disclaimer link so it doesn't touch the iframe */
    .card.form .disclaimer {
      padding: 12px 16px;
      margin: 0;
      font-size: 0.95rem;
      color: #666;
    }

    .QvWxOd {
      background-color: #1E7DF0;
    }

    @media (min-width: 900px) {
      .card.form { border-radius: 12px; }
      .card.form iframe { min-height: 800px; }
    }
    `
  ],
  template: `
<section class="page-hero">
  <div class="container">
    <h1>Book Your Free 15‑Minute HR Audit Call</h1>
    <p class="subhead">Review your top HR priority and leave with clear, practical next steps.</p>
  </div>
</section>

<section class="container contact">
  <div class="contact-grid">
    <!-- Embedded Google Form: replace the in-page form with the published form iframe -->
    <div class="card form">
      <iframe
         src="https://docs.google.com/forms/d/e/1FAIpQLSeRJ6DPG_h27tEiN0p_86PgQGfT4WUtZ2QIQewdgGFQ2-C9gw/viewform?embedded=true"
         width="100%"
         height="1400"
         loading="lazy"
         title="Contact form"
       >Loading…</iframe>
      <p class="disclaimer">If the form does not load, you can also <a href="https://docs.google.com/forms/d/e/1FAIpQLSeRJ6DPG_h27tEiN0p_86PgQGfT4WUtZ2QIQewdgGFQ2-C9gw/viewform" target="_blank" rel="noopener">open the form in a new tab</a>.</p>
    </div>

    <div class="contact-info">
      <div class="card">
        <h3>Prefer email?</h3>
        <p><a href="mailto:info&#64;fractionalhrconsulting.ca">info&#64;fractionalhrconsulting.ca</a></p>
        <p class="muted">Response within 1 business day.</p>
      </div>
      <div class="card">
        <h3>What to expect</h3>
        <ul class="bullets">
          <li>Quick call focused on your top priority</li>
          <li>Clear, practical next steps and options</li>
          <li>No pressure — just helpful guidance</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  `
})
export class ContactPage {
  // This page embeds the Google Form via iframe; form submission is handled by Google Forms.
}
