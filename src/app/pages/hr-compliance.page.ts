import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-hr-compliance',
  imports: [RouterLink],
  template: `
<section class="page-hero">
  <div class="container">
    <h1>HR Compliance (ESA, OHSA, AODA, Policies)</h1>
    <p>Clear, practical compliance for Ontario small businesses — what to do, why it matters, and how to keep it up to date.</p>
  </div>
</section>

<section class="container">
  <h2>Compliance Audit & Fixes</h2>
  <ul class="checklist">
    <li><strong>ESA:</strong> Hours of work, overtime, leaves, vacation, termination.</li>
    <li><strong>OHSA:</strong> Health & safety training, documentation, and reporting.</li>
    <li><strong>AODA:</strong> Accessibility policies, training records, multi‑year plan (if required).</li>
    <li><strong>Handbooks & Policies:</strong> Build or refresh with rollout guidance.</li>
  </ul>

  <h2>Deliverables</h2>
  <ul class="bullets">
    <li>Gap analysis with priorities and timelines</li>
    <li>Updated policies and templates</li>
    <li>Compliance calendar and owner’s checklist</li>
    <li>Manager briefing and Q&A</li>
  </ul>

  <div class="cta-inline">
    <a routerLink="/contact" class="btn primary">Book a Compliance Review</a>
  </div>
</section>
  `
})
export class HrCompliancePage {}
