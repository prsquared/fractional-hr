import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-process-documentation',
  imports: [RouterLink],
  template: `
<section class="page-hero">
  <div class="container">
    <h1>Process Documentation</h1>
    <p class="lede">HR Documentation &amp; Policy Support</p>
  </div>
</section>

<section class="container">
  <p>
    Strong, clear documentation protects your business and gives employees the confidence that things are done fairly and consistently. I help small businesses create practical, easy-to-follow HR documents tailored to their operations, culture, and compliance needs.
  </p>

  <h2>Below are the key areas I support:</h2>

  <ol>
    <li>
      <h3>1. Process Documentation</h3>
      <p><strong>Create clarity. Reduce confusion. Improve consistency.</strong></p>
      <p>
        I build step-by-step process documents that outline exactly how day-to-day HR and operational workflows should run. This helps small businesses:
      </p>
      <ul>
        <li>Standardize the way tasks are done</li>
        <li>Reduce errors and miscommunication</li>
        <li>Make onboarding easier</li>
        <li>Improve accountability</li>
        <li>Ensure compliance with legislation</li>
      </ul>
      <p>Your team will always know what needs to be done, how to do it, and who is responsible.</p>
    </li>

    <li>
      <h3>2. Policy Development</h3>
      <p><strong>Clear policies protect your people and your business.</strong></p>
      <p>
        I create simple, legally aligned HR policies that reflect Ontario’s employment laws and your organization’s values. This includes:
      </p>
      <ul>
        <li>Attendance &amp; Leave Policies</li>
        <li>Code of Conduct</li>
        <li>Anti-Harassment &amp; Anti-Discrimination</li>
        <li>Health &amp; Safety Responsibilities</li>
        <li>Remote/Hybrid Work Guidelines</li>
        <li>Progressive Discipline</li>
        <li>Hours of Work &amp; Overtime Standards</li>
      </ul>
      <p>
        Every policy is written in a people-first way while ensuring your business stays compliant with ESA, OHSA, AODA, WSIB and other requirements.
      </p>
    </li>

    <li>
      <h3>3. Contracts &amp; Employment Agreements</h3>
      <p><strong>Contracts set the foundation for a fair and transparent working relationship.</strong></p>
      <p>
        I prepare legally sound, clearly structured employment agreements tailored for:
      </p>
      <ul>
        <li>Full-time employees</li>
        <li>Part-time employees</li>
        <li>Casual/on-call staff</li>
        <li>Independent contractors</li>
        <li>Short-term project hires</li>
        <li>Internship/co-op placements</li>
      </ul>
      <p>
        Each agreement includes essential clauses such as compensation, confidentiality, termination, expectations, and compliance with Ontario employment law — helping you avoid costly misunderstandings and protect your business.
      </p>
    </li>

    <li>
      <h3>4. Employee Handbook Creation</h3>
      <p><strong>Your handbook is the heart of your people experience.</strong></p>
      <p>
        I design modern, easy-to-read handbooks that clearly outline your company culture, expectations, and HR practices. A well-crafted handbook helps employees feel confident, informed, and supported from day one.
      </p>
      <p>Your handbook may include:</p>
      <ul>
        <li>Company mission, values &amp; culture</li>
        <li>Workplace expectations</li>
        <li>HR policies &amp; procedures</li>
        <li>Time-off and attendance rules</li>
        <li>Performance &amp; conduct guidelines</li>
        <li>Communication norms</li>
        <li>Health, safety &amp; wellbeing information</li>
        <li>Onboarding and training expectations</li>
      </ul>
      <p>Handbooks can be built from scratch or refreshed to match your evolving business needs.</p>
    </li>
  </ol>

  <h3>Why Small Businesses Love This Support</h3>
  <ul class="checklist">
    <li>✔ Saves time and reduces HR stress</li>
    <li>✔ Ensures legal compliance with Ontario standards</li>
    <li>✔ Creates clarity for both employees and managers</li>
    <li>✔ Minimizes risk of disputes or misunderstandings</li>
    <li>✔ Helps build a professional, structured work environment</li>
  </ul>

  <div class="cta-inline">
    <a routerLink="/contact" class="btn primary">Book Your Free 15‑Minute HR Audit Call</a>
    <a routerLink="/contact" class="btn">Request a Quote</a>
  </div>
</section>
  `
})
export class ProcessDocumentationPage {}

