import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-recruitment-onboarding',
  imports: [RouterLink],
  template: `
<section class="page-hero">
  <div class="container">
    <h1>Recruitment & Onboarding</h1>
    <p>Hire confidently and onboard smoothly with structured steps that work for small teams across industries.</p>
  </div>
</section>

<section class="container">
  <h2>Services</h2>
  <ul class="checklist">
    <li>Role Design & Scorecards: Clear outcomes and competencies</li>
    <li>Posting & Sourcing: Practical channels for quality applicants</li>
    <li>Structured Interviews: Behavioural questions and evaluation rubrics</li>
    <li>Checks & Offers: Reference/police checks, ESA‑aligned agreements</li>
    <li>Onboarding Plan: Day‑1 to Day‑90 checklists and training cadence</li>
  </ul>

  <h2>Engagement Models</h2>
  <ul class="bullets">
    <li><strong>Per‑Hire Project:</strong> Intake to signed offer</li>
    <li><strong>Interview‑Only Support:</strong> Kits and panel training</li>
    <li><strong>Onboarding Package:</strong> Tools and templates for a consistent experience</li>
  </ul>

  <p class="note">Experience supporting both high‑volume and niche hiring for small businesses across industries.</p>

  <div class="cta-inline">
    <a routerLink="/contact" class="btn primary">Talk About Hiring Support</a>
  </div>
</section>
  `
})
export class RecruitmentOnboardingPage {}
