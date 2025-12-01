import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home.page').then(m => m.HomePage) },
  { path: 'essential-hr', loadComponent: () => import('./pages/essential-hr.page').then(m => m.EssentialHrPage) },
  { path: 'process-documentation', loadComponent: () => import('./pages/process-documentation.page').then(m => m.ProcessDocumentationPage) },
  { path: 'fractional-hr', loadComponent: () => import('./pages/fractional-hr.page').then(m => m.FractionalHrPage) },
  { path: 'recruitment-onboarding', loadComponent: () => import('./pages/recruitment-onboarding.page').then(m => m.RecruitmentOnboardingPage) },
  { path: 'hr-compliance', loadComponent: () => import('./pages/hr-compliance.page').then(m => m.HrCompliancePage) },
  { path: 'employee-relations', loadComponent: () => import('./pages/employee-relations.page').then(m => m.EmployeeRelationsPage) },
  { path: 'disability-rtw', loadComponent: () => import('./pages/disability-rtw.page').then(m => m.DisabilityRtwPage) },
  { path: 'about', loadComponent: () => import('./pages/about.page').then(m => m.AboutPage) },
  { path: 'contact', loadComponent: () => import('./pages/contact.page').then(m => m.ContactPage) },
  { path: 'privacy', loadComponent: () => import('./pages/privacy.page').then(m => m.PrivacyPage) },
  { path: 'terms', loadComponent: () => import('./pages/terms.page').then(m => m.TermsPage) },
  { path: '**', redirectTo: '' }
];
