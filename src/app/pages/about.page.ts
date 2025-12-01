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
    <p>Hi, I’m Geetu, an HR Advisor and Fractional HR Partner dedicated to helping small businesses build strong, simple, and compliant people practices without the overwhelm.</p>

    <p>With over five years of HR experience across healthcare, technology, and construction, I bring a calm, structured, and solutions-focused approach to HR. I’ve supported leaders in everything from employee relations and policy interpretation to HR operations, recruitment, HR analytics, WSIB/RTW, and HRIS management; always with a focus on fairness, clarity, and doing what’s right for people and the organization.</p>

    <p>I started Fractional HR because I saw how many small businesses struggle with HR; not because they don’t care, but because they simply don’t have the time, bandwidth, or expertise to manage everything behind the scenes. My goal is to make HR feel approachable, human, and streamlined so you can focus on growing your business with confidence.</p>

    <p>Whether it’s handling day-to-day HR questions, setting up policies the right way, guiding managers through difficult moments, or building clean HR processes from scratch; I’m here to help you do things right the first time.</p>

    <p>If you’re a small business owner who wants clarity, support, and a trusted HR partner in your corner, I’d be honoured to work with you.</p>

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
