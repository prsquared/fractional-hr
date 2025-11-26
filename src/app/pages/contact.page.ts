import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-contact',
  template: `
<section class="page-hero">
  <div class="container">
    <h1>Book Your Free 15‑Minute HR Audit Call</h1>
    <p>Let’s review your top HR priority and map out clear next steps. No pressure — just helpful, practical advice.</p>
  </div>
</section>

<section class="container">
  <div class="contact-grid">
    <form class="card form" (submit)="$event.preventDefault()">
      <div class="field"><label>First & Last Name<input type="text" required placeholder="Your name" /></label></div>
      <div class="field"><label>Company Name<input type="text" placeholder="Company" /></label></div>
      <div class="field"><label>Email<input type="email" required placeholder="you@company.com" /></label></div>
      <div class="field"><label>Phone (optional)<input type="tel" placeholder="(xxx) xxx-xxxx" /></label></div>
      <div class="field"><label>Team Size<select><option value="1-5">1–5</option><option value="6-15">6–15</option><option value="16-50">16–50</option><option value=">50">50+</option></select></label></div>
      <div class="field">
        <label>What do you need help with?</label>
        <div class="chips">
          <label><input type="checkbox"/> Hiring</label>
          <label><input type="checkbox"/> Onboarding</label>
          <label><input type="checkbox"/> Policies/Compliance</label>
          <label><input type="checkbox"/> Employee Relations</label>
          <label><input type="checkbox"/> WSIB/RTW</label>
          <label><input type="checkbox"/> Other</label>
        </div>
      </div>
      <div class="field"><label>Message<textarea rows="5" placeholder="Tell me a bit about your situation"></textarea></label></div>
      <label class="consent"><input type="checkbox" required/> I agree to be contacted by Geetu Consulting.</label>
      <button class="btn primary" type="submit">Book Your Free 15‑Minute HR Audit Call</button>
      <p class="disclaimer">Based in Scarborough; serving small businesses across Ontario. Remote support available.</p>
    </form>
    <div class="contact-info">
      <div class="card">
        <h3>Prefer email?</h3>
        <p><a href="mailto:info@geetuconsulting.ca">info@geetuconsulting.ca</a></p>
        <p>Response within 1 business day.</p>
      </div>
      <div class="card">
        <h3>What to expect</h3>
        <p>On a quick call we’ll identify your top priority — hiring, compliance, accommodations/RTW, or a people issue — and outline your best next steps.</p>
      </div>
    </div>
  </div>
</section>
  `
})
export class ContactPage {}
