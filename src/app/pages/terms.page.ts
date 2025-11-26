import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-terms',
  template: `
<section class="page-hero">
  <div class="container">
    <h1>Terms of Service</h1>
    <p>Simple terms for using this website and engaging services.</p>
  </div>
</section>
<section class="container legal">
  <p>This website is provided for general information. Nothing on this site constitutes legal advice. By contacting us, you agree that we may respond using the details you provide. Any consulting engagement will be governed by a separate written agreement that outlines scope, pricing, timelines, and confidentiality.</p>
  <p>All content © Geetu Consulting. Do not copy or redistribute without permission.</p>
</section>
  `
})
export class TermsPage {}
