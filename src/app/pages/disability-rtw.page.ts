import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-disability-rtw',
  imports: [RouterLink],
  template: `
<section class="page-hero">
  <div class="container">
    <h1>Disability & Return‑to‑Work (WSIB, STD/LTD, Accommodations)</h1>
    <p>Compassionate, compliant support for injury, illness, and safe return‑to‑work.</p>
  </div>
</section>

<section class="container">
  <h2>What’s Included</h2>
  <ul class="checklist">
    <li>WSIB Claims: Coordination, modified duties, and documentation</li>
    <li>STD/LTD Administration: Liaison with providers and employees</li>
    <li>Accommodation Plans: Practical solutions that meet the duty to accommodate</li>
    <li>Manager Coaching: How to communicate and document appropriately</li>
  </ul>

  <h2>Deliverables</h2>
  <ul class="bullets">
    <li>RTW plans with timelines and responsibilities</li>
    <li>Correspondence templates and checklists</li>
    <li>Policy updates and training briefs</li>
  </ul>

  <div class="cta-inline">
    <a routerLink="/contact" class="btn primary">Book a Call</a>
  </div>
</section>
  `
})
export class DisabilityRtwPage {}
