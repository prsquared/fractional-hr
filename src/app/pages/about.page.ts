import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [RouterLink],
  template: `
<section hidden class="page-hero">
  <div class="container">
    <h1>About Geetu Ayyappan</h1>
    <p>Ontario HR support that’s friendly, practical, and on your side.</p>
  </div>
</section>

<section class="container about">
  <div>
    <h2>About me</h2>
    <p>Hi, I’m Geetu, an HR advisor who genuinely believes that people are the heart of every business, no matter the size.

      After years of working across different industries, I realized something important: small businesses deserve the same high-quality HR guidance that big companies rely on, but delivered in a simple, practical, and human way. That’s why I built Fractional HR; to support owners and teams who want to “do things right,” even without a full-time HR department.

      My approach is calm, people-first, and rooted in real-world experience. I focus on creating clear, sustainable HR practices that make everyday work smoother, whether that’s hiring the right people, building fair processes, ensuring compliance, or strengthening a healthy workplace culture.

      I’m based in Ontario and bilingual, and I work closely with small businesses who want HR support that is accessible, reliable, and tailored to their pace of growth. My goal is to help you reduce risk, build trust, and create an environment where your people thrive and your business can scale confidently.

      If you’re looking for HR guidance that feels like a true partnership, I’m here to help, one practical step at a time.</p>

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


    <p class="note">You’ll always get honest guidance, clear timelines, and kind, confidential support — especially when situations are sensitive.</p>

    <a routerLink="/contact" class="btn primary">Book Your Free 15‑Minute HR Audit Call</a>
  </div>
</section>
  `
})
export class AboutPage {}
