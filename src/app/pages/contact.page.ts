import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-contact',
  template: `
<section class="page-hero">
  <div class="container">
    <h1>Book Your Free 15‑Minute HR Audit Call</h1>
    <p class="subhead">Review your top HR priority and leave with clear, practical next steps.</p>
  </div>
</section>

<section class="container contact">
  <div class="contact-grid">
    <form class="card form" (submit)="onSubmit($event)" novalidate>
      <div class="field">
        <label for="name">First & Last Name <span aria-hidden="true" class="req">*</span></label>
        <input id="name" name="name" type="text" required placeholder="Your name" autocomplete="name" />
      </div>
      <div class="field">
        <label for="company">Company Name</label>
        <input id="company" name="company" type="text" placeholder="Company" autocomplete="organization" />
      </div>
      <div class="field two">
        <div>
          <label for="email">Email <span aria-hidden="true" class="req">*</span></label>
          <input id="email" name="email" type="email" required placeholder="you@company.com" autocomplete="email" />
        </div>
        <div>
          <label for="phone">Phone (optional)</label>
          <input id="phone" name="phone" type="tel" placeholder="(xxx) xxx-xxxx" autocomplete="tel" />
        </div>
      </div>
      <div class="field">
        <label for="size">Team Size</label>
        <select id="size" name="size">
          <option value="1-5">1–5</option>
          <option value="6-15">6–15</option>
          <option value="16-50">16–50</option>
          <option value=">50">50+</option>
        </select>
      </div>
      <div class="field">
        <span class="label">What do you need help with?</span>
        <div class="chips" role="group" aria-label="Areas of support">
          <label><input type="checkbox" name="topics" value="Hiring"/> Hiring</label>
          <label><input type="checkbox" name="topics" value="Onboarding"/> Onboarding</label>
          <label><input type="checkbox" name="topics" value="Policies"/> Policies/Compliance</label>
          <label><input type="checkbox" name="topics" value="ER"/> Employee Relations</label>
          <label><input type="checkbox" name="topics" value="WSIB"/> WSIB/RTW</label>
          <label><input type="checkbox" name="topics" value="Other"/> Other</label>
        </div>
      </div>
      <div class="field">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Tell me a bit about your situation"></textarea>
        <p class="help">No sensitive details needed — just enough to point us in the right direction.</p>
      </div>
      <label class="consent"><input id="consent" type="checkbox" required/> I agree to be contacted by Geetu Consulting.</label>

      <div class="actions">
        <button class="btn primary" type="submit" [attr.aria-busy]="submitting ? 'true' : null" [disabled]="submitting">{{ submitting ? 'Booking…' : 'Book Your Free 15‑Minute HR Audit Call' }}</button>
      </div>
      <p class="disclaimer">Based in Scarborough; serving small businesses across Ontario. Remote support available.</p>

      <div class="status" aria-live="polite" *ngIf="submitted">
        <p class="success">Thanks — your request has been noted. I’ll email you within one business day to schedule.</p>
      </div>
    </form>

    <div class="contact-info">
      <div class="card">
        <h3>Prefer email?</h3>
        <p><a href="mailto:info@geetuconsulting.ca">info@geetuconsulting.ca</a></p>
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
  submitting = false;
  submitted = false;

  async onSubmit(ev: Event) {
    ev.preventDefault();
    if (this.submitting) return;
    this.submitting = true;
    this.submitted = false;
    // Simulate a quick async action
    await new Promise(r => setTimeout(r, 900));
    this.submitting = false;
    this.submitted = true;
  }
}
