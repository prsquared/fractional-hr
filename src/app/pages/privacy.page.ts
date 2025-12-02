import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-privacy',
  template: `
<section class="page-hero">
  <div class="container">
    <h1>Privacy Policy</h1>
    <p>We respect your privacy. This page outlines how basic contact information is used.</p>
  </div>
</section>
<section class="container legal">
  <p>This website collects only the information you choose to submit through the contact form (name, company, email, phone, message, and selected topics). This information is used solely to respond to your inquiry and is not sold or shared with third parties, except as required by law.</p>
  <p>If you wish to update or delete your information, please email <a href="mailto:info&#64;fractionalhrconsulting.ca">info&#64;fractionalhrconsulting.ca</a>.</p>
</section>
  `
})
export class PrivacyPage {}
