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
      title: 'Authentic Formulations',
      description: 'Our products are created following traditional Ayurvedic texts and methods, ensuring authenticity and effectiveness.',
      icon: 'fas fa-mortar-pestle'
    },
    {
      id: 2,
      title: 'Pure Ingredients',
      description: 'We source only the highest quality herbs, botanicals, and natural ingredients for our formulations.',
      icon: 'fas fa-leaf'
    },
    {
      id: 3,
      title: 'Sustainable Practices',
      description: 'Our commitment to sustainability extends from ethical sourcing to eco-friendly packaging.',
      icon: 'fas fa-seedling'
    },
    {
      id: 4,
      title: 'Modern Research',
      description: 'We combine traditional knowledge with contemporary scientific research to create effective products.',
      icon: 'fas fa-microscope'
    }
  ];
}