import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-fractional-hr',
  imports: [RouterLink],
  template: `
<section class="page-hero">
  <div class="container">
    <h1>Fractional HR Services</h1>
    <p>Affordable, ongoing HR support tailored to your stage. Get fast answers when you need them — and hands‑on support when it matters.</p>
  </div>
</section>

<section class="container">
  <h2>Monthly Retainers</h2>
  <div class="grid three">
    <div class="card">
      <h3>Advisor On‑Call (Light)</h3>
      <p><strong>Best for:</strong> Owners who want a responsive HR advisor for quick questions, reviews, and compliance checks.</p>
      <ul class="bullets">
        <li>Email support and scheduled advisory calls</li>
        <li>Template guidance and basic policy refreshes</li>
        <li><strong>SLA:</strong> Same‑business‑day acknowledgement; 1–2 business‑day turnaround</li>
      </ul>
    </div>
    <div class="card">
      <h3>HRBP Support (Core)</h3>
      <p><strong>Best for:</strong> Teams needing regular help with hiring, onboarding, performance, and employee relations.</p>
      <ul class="bullets">
        <li>Everything in On‑Call, plus interview support and onboarding plans</li>
        <li>Performance documentation and manager coaching</li>
        <li>Quarterly HR planning; priority support with recurring hours</li>
      </ul>
    </div>
    <div class="card">
      <h3>Fractional HR Lead (Plus)</h3>
      <p><strong>Best for:</strong> Multi‑team coordination, training, and complex accommodations/RTW planning.</p>
      <ul class="bullets">
        <li>Policy refresh cycles and training sessions</li>
        <li>Employee relations case facilitation</li>
        <li>Metrics and reporting</li>
      </ul>
    </div>
  </div>

  <h2>What We Handle</h2>
  <ul class="checklist">
    <li>People operations: hiring, onboarding, scheduling guidance</li>
    <li>Employee relations: investigations support, documentation, respectful conversations</li>
    <li>Compliance: ESA, OHSA, AODA; policy maintenance and briefings</li>
    <li>Accommodations & RTW: WSIB, STD/LTD, safe modified duties</li>
    <li>HR systems & data: Dayforce/Workday familiarity; clean reporting</li>
  </ul>

  <div class="cta-inline">
    <a routerLink="/contact" class="btn primary">Book Your Free 15‑Minute HR Audit Call</a>
  </div>
</section>
  `
})
export class FractionalHrPage {}
