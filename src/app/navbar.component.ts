import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
<header class="site-header">
  <div class="container nav">
    <div class="brand"><a routerLink="/" (click)="closeMenus()">Geetu Consulting</a></div>
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
      <a routerLink="/contact" routerLinkActive="active" (click)="closeMenus()">Contact</a>
    </nav>
    <a hidden class="btn primary" routerLink="/contact">Free Consult</a>
  </div>
</header>
`,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isOpen = false;
  isServicesOpen = false;

  services = [
    { label: 'Essential HR', path: '/essential-hr' },
    { label: 'Fractional HR', path: '/fractional-hr' },
    { label: 'Recruitment & Onboarding', path: '/recruitment-onboarding' },
    { label: 'HR Compliance', path: '/hr-compliance' },
    { label: 'Employee Relations & Performance', path: '/employee-relations' },
    { label: 'Disability & RTW', path: '/disability-rtw' }
  ];

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
}
