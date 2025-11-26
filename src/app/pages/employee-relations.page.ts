import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-employee-relations',
  imports: [RouterLink],
  template: `
<section class="page-hero">
  <div class="container">
    <h1>Employee Relations & Performance Support</h1>
    <p>Navigate sensitive people situations with confidence, care, and strong documentation.</p>
  </div>
</section>

<section class="container">
  <h2>Support Areas</h2>
  <ul class="checklist">
    <li>Performance Management: Feedback frameworks, PIPs, documentation</li>
    <li>Investigations & Complaints: Neutral, trauma‑informed approach; clear reports</li>
    <li>Attendance & Accommodation: ESA leaves, duty to accommodate, medical documentation</li>
    <li>Conflict & Team Dynamics: Mediation, coaching, and action plans</li>
    <li>Terminations: Risk‑aware, compliant, and respectful offboarding</li>
  </ul>

  <h2>Approach</h2>
  <ul class="bullets">
    <li>Calm, practical guidance</li>
    <li>Clear steps and compliant documentation</li>
    <li>Experience across unionized and non‑unionized environments</li>
  </ul>

  <div class="cta-inline">
    <a routerLink="/contact" class="btn primary">Speak to an HR Advisor</a>
  </div>
</section>
  `
})
export class EmployeeRelationsPage {}
