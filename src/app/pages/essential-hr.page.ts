import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-essential-hr',
  imports: [RouterLink],
  template: `
<section class="page-hero">
  <div class="container">
    <h1>Essential HR Services</h1>
    <p>Put the right HR basics in place — clear policies, simple onboarding, and documentation that protects your people and your business.</p>
  </div>
</section>

<section class="container">
  <h2>What’s Included</h2>
  <ul class="checklist">
    <li><strong>HR Foundations:</strong> ESA‑aligned policies/handbook, compliant employment agreements, job descriptions.</li>
    <li><strong>Onboarding Toolkit:</strong> Offer templates, onboarding checklist, 30/60/90‑day plan, probation process.</li>
    <li><strong>Recordkeeping:</strong> Personnel file standards, HRIS setup guidance (Dayforce/Workday familiarity).</li>
    <li><strong>Manager Basics:</strong> Hiring steps, feedback templates, documentation standards, termination checklist.</li>
  </ul>

  <h2>How It Works</h2>
  <ol>
    <li><strong>Discovery:</strong> Quick review of your current tools and risks.</li>
    <li><strong>Build:</strong> Draft and customize to your business; align to ESA/OHSA/AODA.</li>
    <li><strong>Train:</strong> Walk‑through for founders/managers, plus practical how‑to guides.</li>
  </ol>

  <h2>Deliverables</h2>
  <ul class="bullets">
    <li>Custom policy pack and rollout notes</li>
    <li>Onboarding kit with reusable templates</li>
    <li>Documentation library (letters, forms)</li>
    <li>30‑day Q&A support post‑launch</li>
  </ul>

  <h2>Pricing</h2>
  <ul class="bullets">
    <li><strong>Small Team Essentials (≤15 employees):</strong> Fixed project pricing available.</li>
    <li><strong>Growing Team Essentials (16–50 employees):</strong> Priced to scope and complexity.</li>
  </ul>

  <div class="cta-inline">
    <a routerLink="/contact" class="btn primary">Book Your Free 15‑Minute HR Audit Call</a>
    <a routerLink="/contact" class="btn">Request a Quote</a>
  </div>
</section>
  `
})
export class EssentialHrPage {}
