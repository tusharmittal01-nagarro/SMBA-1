import { Component } from '@angular/core';
import { FEATURES } from '../../data/constants';

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
  features: Feature[] = FEATURES;
}