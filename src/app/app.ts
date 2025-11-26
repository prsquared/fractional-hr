import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
<header class="site-header">
  <div class="container nav">
    <div class="brand"><a routerLink="/">Geetu Consulting</a></div>
    <nav>
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a>
      <a routerLink="/essential-hr" routerLinkActive="active">Essential HR</a>
      <a routerLink="/fractional-hr" routerLinkActive="active">Fractional HR</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
      <a routerLink="/contact" routerLinkActive="active">Contact</a>
    </nav>
    <a class="btn primary" routerLink="/contact">Book Free HR Audit</a>
  </div>
</header>
<main class="container main">
  <router-outlet />
</main>
<footer class="site-footer">
  <div class="container footer-grid">
    <div>
      <h4>About</h4>
      <p>Ontario‑based, people‑first HR support for small businesses across industries.</p>
    </div>
    <div>
      <h4>Services</h4>
      <ul>
        <li><a routerLink="/essential-hr">Essential HR</a></li>
        <li><a routerLink="/fractional-hr">Fractional HR</a></li>
        <li><a routerLink="/recruitment-onboarding">Recruitment &amp; Onboarding</a></li>
        <li><a routerLink="/hr-compliance">HR Compliance</a></li>
        <li><a routerLink="/employee-relations">Employee Relations</a></li>
        <li><a routerLink="/disability-rtw">Disability &amp; RTW</a></li>
      </ul>
    </div>
    <div>
      <h4>Contact</h4>
      <p><a href="mailto:info@geetuconsulting.ca">info@geetuconsulting.ca</a><br/>Serving small businesses across Ontario</p>
    </div>
    <div>
      <h4>Legal</h4>
      <ul>
        <li><a routerLink="/privacy">Privacy Policy</a></li>
        <li><a routerLink="/terms">Terms of Service</a></li>
      </ul>
    </div>
  </div>
  <div class="container copyright">© Geetu Consulting. All rights reserved.</div>
</footer>
`,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Geetu Consulting');
}
