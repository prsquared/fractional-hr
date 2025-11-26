import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <section class="hero hero-split">
      <div class="container hero-inner">
        <div class="hero-content">
          <h1>Practical, People-First HR for Small Businesses in Ontario</h1>
          <p class="subhead">
            From hiring and compliance to accommodations and tough conversations — get calm,
            expert HR support without the cost of a full-time team.
          </p>
          <div class="actions">
            <a routerLink="/contact" class="btn primary">Book Your Free 15-Minute HR Audit Call</a>
            <a routerLink="/essential-hr" class="btn">Explore Services</a>
          </div>
          <ul class="trust">
            <li>Ontario-based</li>
            <li>ESA, OHSA & AODA</li>
            <li>WSIB & Return-to-Work</li>
            <li>For Small Businesses Across Industries</li>
            <li>Bilingual (EN/FR)</li>
          </ul>
        </div>

        <div class="hero-image">
          <img
            src="assets/images/home-hero-team.png"
            alt="Small team collaborating around a table"
          />
        </div>
      </div>
    </section>

<section class="value container">
  <p>I help founders and small teams across industries set up simple HR foundations, stay compliant, and resolve people issues with confidence. Choose one‑time projects or monthly fractional HR support with a responsive advisor you can count on.</p>
</section>

<section class="services container">
  <h2>Services</h2>
  <div class="grid">
    <a class="card" routerLink="/essential-hr">
      <h3>Essential HR Setup</h3>
      <p>Policies, onboarding kits, and right‑sized HR processes.</p>
      <span class="more">Learn more →</span>
    </a>
    <a class="card" routerLink="/fractional-hr">
      <h3>Fractional HR Support</h3>
      <p>On‑call HR advisor plus hands‑on HRBP services.</p>
      <span class="more">Learn more →</span>
    </a>
    <a class="card" routerLink="/recruitment-onboarding">
      <h3>Recruitment & Onboarding</h3>
      <p>Structured hiring and faster ramp‑up.</p>
      <span class="more">Learn more →</span>
    </a>
    <a class="card" routerLink="/hr-compliance">
      <h3>HR Compliance</h3>
      <p>ESA, OHSA, AODA, handbooks, and audits.</p>
      <span class="more">Learn more →</span>
    </a>
    <a class="card" routerLink="/employee-relations">
      <h3>Employee Relations & Performance</h3>
      <p>Coaching, investigations, and documentation.</p>
      <span class="more">Learn more →</span>
    </a>
    <a class="card" routerLink="/disability-rtw">
      <h3>Disability & RTW</h3>
      <p>WSIB, STD/LTD, accommodations, safe RTW plans.</p>
      <span class="more">Learn more →</span>
    </a>
  </div>
</section>

<section class="why container">
  <h2>Why Work With Geetu</h2>
  <div class="grid three">
    <div>
      <h4>Calm & Clear</h4>
      <p>Clear next steps without the jargon.</p>
    </div>
    <div>
      <h4>Ontario Expertise</h4>
      <p>ESA/OHSA/AODA aligned; experience with small businesses in unionized and non‑union settings.</p>
    </div>
    <div>
      <h4>Practical & Data‑Informed</h4>
      <p>High‑volume recruitment, scheduling, and HRIS (Dayforce, Workday) know‑how.</p>
    </div>
  </div>
</section>

<section class="process container">
  <h2>How It Works</h2>
  <ol class="steps">
    <li><strong>Discovery call</strong> to pinpoint your priorities</li>
    <li><strong>Tailored plan</strong> with clear pricing and timelines</li>
    <li><strong>Confident execution</strong> with reusable templates</li>
  </ol>
  <div class="center">
    <a routerLink="/contact" class="btn primary">Book Your Free 15‑Minute HR Audit Call</a>
  </div>
</section>

<section class="testimonials container">
  <h2>Client Words</h2>
  <blockquote>“Geetu gave us clear, step‑by‑step help on a sensitive employee issue. Fair, compliant, and respectful.” <span>— Partner, Small Business</span></blockquote>
  <blockquote>“Our onboarding finally feels organized. The checklists and templates saved us hours.” <span>— Founder, Small Business</span></blockquote>
  <blockquote>“On‑call advice helped us navigate accommodations and RTW the right way.” <span>— Director, Small Business</span></blockquote>
</section>

<section class="cta-band">
  <div class="container">
    <h2>Ready to make HR simpler and safer?</h2>
    <a routerLink="/contact" class="btn primary">Book Your Free 15‑Minute HR Audit Call</a>
  </div>
</section>
  `
})
export class HomePage {}
