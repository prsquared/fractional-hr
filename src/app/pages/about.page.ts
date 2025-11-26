import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [RouterLink],
  template: `
<section class="page-hero">
  <div class="container">
    <h1>About Geetu Ayyappan</h1>
    <p>Ontario HR support that’s friendly, practical, and on your side.</p>
  </div>
</section>

<section class="container about">
  <div>
    <h2>Hi — I’m Geetu.</h2>
    <p>I’m an Ontario‑based HR professional with 5+ years of experience helping small businesses across industries with employee relations, disability and return‑to‑work, recruitment, and HR operations. I bring a calm, people‑first approach and clear, compliant steps you can trust.</p>

    <h3>What Clients Appreciate</h3>
    <ul class="bullets">
      <li>Plain‑language advice and timely responses</li>
      <li>Balanced guidance — protect the business and treat people fairly</li>
      <li>Experience in unionized and non‑union environments</li>
      <li>Practical templates and documentation you can reuse</li>
    </ul>

    <h3>Experience & Focus</h3>
    <ul class="bullets">
      <li>Public health and small‑business HR operations (Dayforce/Workday)</li>
      <li>WSIB, STD/LTD, accommodations, and safe return‑to‑work plans</li>
      <li>Structured hiring and onboarding</li>
      <li>ESA, OHSA, AODA policies and briefings</li>
    </ul>

    <h3>Credentials</h3>
    <ul class="bullets">
      <li>HRPA Member; CHRL candidate (Exam: June 2025)</li>
      <li>Human Resource Management Diploma, Fanshawe College (Dean’s Honour Roll)</li>
      <li>MBA in Human Resource Management; B.Eng. (Electronics & Telecommunication)</li>
      <li>Bilingual: English (fluent), French (intermediate)</li>
    </ul>

    <p class="note">You’ll always get honest guidance, clear timelines, and kind, confidential support — especially when situations are sensitive.</p>

    <a routerLink="/contact" class="btn primary">Book Your Free 15‑Minute HR Audit Call</a>
  </div>
</section>
  `
})
export class AboutPage {}
