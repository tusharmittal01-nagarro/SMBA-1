import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-hero-slider></app-hero-slider>
    <app-product-section></app-product-section>
    <app-about-section></app-about-section>
    <app-testimonial-section></app-testimonial-section>
    <app-waitlist-form></app-waitlist-form>
  `
})
export class HomeComponent {
  constructor() {}
}