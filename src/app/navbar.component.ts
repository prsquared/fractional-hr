import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
<!-- social topbar: appears above nav and hides when user scrolls down -->
<div class="social-topbar" [class.hidden]="!showTopBar" aria-hidden="false">
  <div class="container nav-social">
    <div class="social-links">
      <a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">
        <svg class="social-icon" viewBox="0 0 24 24" role="img" aria-hidden="false"><title>Facebook</title><path d="M22 12a10 10 0 10-11.6 9.86v-6.98H8.9v-2.88h1.5V9.4c0-1.48.88-2.3 2.23-2.3.65 0 1.33.12 1.33.12v1.46h-.75c-.74 0-.97.46-.97.94v1.13h1.66l-.27 2.88h-1.39V21.9A10 10 0 0022 12" fill="currentColor"/></svg>
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">
        <svg class="social-icon" viewBox="0 0 24 24" role="img" aria-hidden="false"><title>Instagram</title><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6zM18.8 6.2a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" fill="currentColor"/></svg>
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn">
        <svg class="social-icon" viewBox="0 0 24 24" role="img" aria-hidden="false"><title>LinkedIn</title><path d="M4.98 3.5a2.25 2.25 0 11.001 4.5A2.25 2.25 0 014.98 3.5zM3 8.98h3.96V21H3V8.98zM9.84 9h3.79v1.59h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.09V21h-3.99v-5.02c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.92 1.3-1.92 2.65V21H9.84V9z" fill="currentColor"/></svg>
      </a>
    </div>
    <div class="topbar-actions">
      <a class="muted small" href="/privacy">Privacy</a>
    </div>
  </div>
</div>

<header class="site-header">
  <div class="container nav">
    <div class="brand"><a routerLink="/" (click)="closeMenus()"><img src="assets/images/fractional_hr_wordmark.svg" alt="Geetu Consulting" class="brand-wordmark"/></a></div>
    <button class="nav-toggle" aria-label="Toggle navigation" (click)="toggleNav()" [attr.aria-expanded]="isOpen">
      <span class="hamburger"></span>
    </button>
    <nav [class.open]="isOpen">
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" (click)="closeMenus()">Home</a>
      <div class="dropdown" [class.open]="isServicesOpen">
        <a href="#" class="dropdown-toggle" (click)="toggleServices($event)" aria-haspopup="true" [attr.aria-expanded]="isServicesOpen">Services ▾</a>
        <ul class="dropdown-menu">
          <li *ngFor="let s of services">
            <a [routerLink]="s.path" routerLinkActive="active" (click)="closeMenus()">{{s.label}}</a>
          </li>
        </ul>
      </div>
      <a routerLink="/about" routerLinkActive="active" (click)="closeMenus()">About</a>

    </nav>
    <a hidden class="btn primary" routerLink="/contact">Free Consult</a>
  </div>
</header>
`,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isOpen = false;
  isServicesOpen = false;

  services = [
    { label: 'Essential HR', path: '/essential-hr' },
    { label: 'Fractional HR', path: '/fractional-hr' },
    { label: 'Process Documentation', path: '/process-documentation' },
    { label: 'Recruitment & Onboarding', path: '/recruitment-onboarding' },
    { label: 'HR Compliance', path: '/hr-compliance' },
    { label: 'Employee Relations & Performance', path: '/employee-relations' },
    { label: 'Disability & RTW', path: '/disability-rtw' }
  ];

  // topbar visibility state
  showTopBar = true;
  private lastScrollY = 0;
  private readonly hideThreshold = 80; // number of pixels scrolled before hiding

  ngOnInit() {
    // initialize last scroll and ensure body has class while topbar is visible
    this.lastScrollY = (typeof window !== 'undefined') ? window.pageYOffset || document.documentElement.scrollTop : 0;
    if (typeof document !== 'undefined') document.body.classList.add('has-topbar');
  }

  ngOnDestroy() {
    if (typeof document !== 'undefined') document.body.classList.remove('has-topbar');
  }

  toggleNav() {
    this.isOpen = !this.isOpen;
    if (!this.isOpen) this.isServicesOpen = false;
  }

  toggleServices(ev?: Event) {
    if (ev) ev.preventDefault();
    this.isServicesOpen = !this.isServicesOpen;
  }

  closeMenus() {
    this.isOpen = false;
    this.isServicesOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (typeof window === 'undefined') return;
    const currentY = window.pageYOffset || document.documentElement.scrollTop;
    // if scrolled down beyond threshold and moving down -> hide
    if (currentY > this.lastScrollY && currentY > this.hideThreshold) {
      this.setTopbarVisible(false);
    } else {
      // scrolling up -> show
      this.setTopbarVisible(true);
    }
    this.lastScrollY = currentY;
  }

  private setTopbarVisible(visible: boolean) {
    if (this.showTopBar === visible) return;
    this.showTopBar = visible;
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('has-topbar', visible);
    }
  }
}
