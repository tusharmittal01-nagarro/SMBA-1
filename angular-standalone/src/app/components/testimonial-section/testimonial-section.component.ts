import { Component } from '@angular/core';
import { TESTIMONIALS } from '../../data/constants';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

@Component({
  selector: 'app-testimonial-section',
  templateUrl: './testimonial-section.component.html',
  styleUrls: ['./testimonial-section.component.scss']
})
export class TestimonialSectionComponent {
  testimonials: Testimonial[] = TESTIMONIALS;
  
  // Generate an array for star ratings display
  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
  
  // Generate empty stars array for display
  getEmptyStars(rating: number): number[] {
    return Array(5 - rating).fill(0);
  }
}