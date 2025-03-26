import { Component } from '@angular/core';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent {
  features: Feature[] = [
    {
      id: 1,
      title: 'Authentic Ayurveda',
      description: 'Our products are crafted following traditional Ayurvedic principles passed down through generations.',
      icon: 'fa-leaf'
    },
    {
      id: 2,
      title: 'Natural Ingredients',
      description: 'We use only premium, pure, and sustainably sourced natural ingredients in all our formulations.',
      icon: 'fa-seedling'
    },
    {
      id: 3,
      title: 'Holistic Approach',
      description: 'Each product is designed to promote balance and harmony between mind, body, and spirit.',
      icon: 'fa-balance-scale'
    },
    {
      id: 4,
      title: 'Scientific Research',
      description: 'Modern scientific techniques validate the effectiveness of our time-tested formulations.',
      icon: 'fa-flask'
    }
  ];
}