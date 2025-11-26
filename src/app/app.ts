import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent],
  template: `
<app-navbar></app-navbar>
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
      <p><a href="mailto:info&#64;geetuconsulting.ca">info&#64;geetuconsulting.ca</a><br/>Serving small businesses across Ontario</p>
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
export class App {}
