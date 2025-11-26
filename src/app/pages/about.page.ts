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
    <h2>Hi, I’m Geetu Ayyappan</h2>
    <p>I'm an HR professional dedicated to helping small businesses build strong, confident, compliant workplaces without the cost of a full-time HR team. With experience across recruitment, employee relations, HR operations, policy development, and performance support, I bring practical, people-first solutions designed for growing organizations.

      I understand the challenges of small business owners — you’re juggling everything. My role is to make HR simple, clear, and stress-free so you can focus on what matters most: running your business and supporting your people.

      Whether you need help setting up HR fundamentals, navigating employee issues, improving culture and engagement, or accessing ongoing fractional HR support, I’m here as your trusted partner in people and compliance.

      My approach is warm, collaborative, and grounded in real experience. I believe that good HR isn’t just paperwork — it’s about creating workplaces where people feel respected, supported, and empowered to do their best work.</p>

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
