import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselComponent } from '../carousel.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterLink, CarouselComponent],
  template: `
    <!-- Replaced static sections with the carousel component (full-bleed) -->
    <section class="carousel-section">
      <app-carousel [slides]="slides" [interval]="2000"></app-carousel>
    </section>

    <!-- Hidden, meaningful H1 for SEO / screen readers -->
    <h1 style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0;">Fractional HR — Practical HR Support for Small Businesses</h1>

    <!-- Next steps: full-width image with an overlay panel anchored middle-right -->
    <section hidden class="process full-bleed-image" aria-labelledby="next-steps">
      <figure class="process-image" aria-hidden="true">
        <img src="/assets/images/home-hero-team.png" alt="HR consultant working with a team" />

        <!-- moved overlay inside figure so it's positioned relative to the image -->
        <div class="process-overlay" role="region" aria-labelledby="next-steps-panel">
          <div class="process-content">
            <h2 id="next-steps-panel">Next steps</h2>
            <p class="lede">Simple, predictable steps to get you useful HR outcomes without the overhead.</p>

            <ul class="steps-grid">
              <li class="step-card">
                <div class="icon" aria-hidden="true">📞</div>
                <div>
                  <h3>Discovery call</h3>
                  <p>We listen to your priorities, constraints, and the outcomes that matter most to your team.</p>
                </div>
              </li>

              <li class="step-card">
                <div class="icon" aria-hidden="true">🧭</div>
                <div>
                  <h3>Tailored plan</h3>
                  <p>A concise plan with clear pricing, timelines, and reusable templates to keep things moving.</p>
                </div>
              </li>

              <li class="step-card">
                <div class="icon" aria-hidden="true">🛠️</div>
                <div>
                  <h3>Confident execution</h3>
                  <p>Hands-on support, coaching, and templates so you can act quickly and compliantly.</p>
                </div>
              </li>
            </ul>

            <div class="center">
              <a routerLink="/contact" class="btn primary btn-lg" aria-label="Book your free 15 minute HR audit call">Book Your Free 15‑Minute HR Audit Call</a>
            </div>
          </div>
        </div>
      </figure>
    </section>

    <section hidden class="testimonials container" aria-labelledby="client-words">
      <h2 id="client-words">Client Words</h2>
      <p class="lede">Short, real feedback from small business partners.</p>

      <div class="testimonials-grid">
        <figure class="testimonial-card">
          <blockquote>“Geetu gave us clear, step‑by‑step help on a sensitive employee issue. Fair, compliant, and respectful.”</blockquote>
          <figcaption>— Partner, Small Business</figcaption>
        </figure>

        <figure class="testimonial-card">
          <blockquote>“Our onboarding finally feels organized. The checklists and templates saved us hours.”</blockquote>
          <figcaption>— Founder, Small Business</figcaption>
        </figure>

        <figure class="testimonial-card">
          <blockquote>“On‑call advice helped us navigate accommodations and RTW the right way.”</blockquote>
          <figcaption>— Director, Small Business</figcaption>
        </figure>
      </div>
    </section>

    <section hidden class="cta-band" role="region" aria-label="Primary call to action">
      <div class="container cta-inner">
        <h2>Ready to make HR simpler and safer?</h2>
        <div class="cta-actions">
          <a routerLink="/contact" class="btn primary">Book Your Free 15‑Minute HR Audit Call</a>
          <a routerLink="/essential-hr" class="btn secondary" aria-label="Learn about services">See Services</a>
        </div>
      </div>
    </section>
  `
})
export class HomePage {
  slides = [
    {
      title: 'Why Work With Fractional HR',
      summary: 'Practical, expert HR support when you need it; without the cost of a full team.',
      full: 'We help small businesses with hiring, compliance, accommodations, and people strategy. Work with a responsive advisor who understands Ontario rules and small-team dynamics.',
      image: 'assets/images/team-brainstorm-meeting-in-bright-sunny-office.jpg',
      action: '/employee-relations',
      corner: 'corner'
    },
    {
      title: 'Services offered',
      summary: 'Flexible offerings: one-time projects, retainers, and on-call HR support.',
      full: 'From job descriptions and recruitment to performance management and WSIB/RTW, we provide templates, coaching, and hands-on support tailored to your needs.',
      image: 'assets/images/business-team-meeting-boardroom.jpg',
      action: '/essential-hr'
    },
    {
      title: 'Simplifying HR for Small Businesses',
      summary: 'People are the heart of every business, no matter the size.',
      full: 'My goal is to help small businesses receive high-quality HR guidance that big organizations rely, on, but delivered in a simple, practical, and human way.',
      image: 'assets/images/about-2.png',
      action: '/about',
      corner: 'corner'
    }
  ];
}
