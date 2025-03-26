import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
export class TestimonialSectionComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [];
  activeSlide: number = 0;
  slideInterval: any;
  isLoading: boolean = true;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchTestimonials();
    this.startSlideTimer();
  }

  ngOnDestroy() {
    this.stopSlideTimer();
  }

  fetchTestimonials() {
    this.isLoading = true;
    this.http.get<Testimonial[]>('/api/testimonials')
      .subscribe({
        next: (data) => {
          this.testimonials = data;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error fetching testimonials:', err);
          this.error = 'Failed to load testimonials. Please try again later.';
          this.isLoading = false;
          // Fallback to sample testimonials if API fails
          this.loadSampleTestimonials();
        }
      });
  }

  loadSampleTestimonials() {
    // This is only used if the API request fails
    this.testimonials = [
      {
        id: 1,
        name: 'Sarah J.',
        avatar: '',
        rating: 5,
        comment: 'The Ayurvedic treatments have completely transformed my wellness journey. I feel balanced and rejuvenated!'
      },
      {
        id: 2,
        name: 'Michael T.',
        avatar: '',
        rating: 5,
        comment: 'These products have helped me maintain my dosha balance. My energy levels have never been better!'
      },
      {
        id: 3,
        name: 'Priya K.',
        avatar: '',
        rating: 5,
        comment: 'As someone who has practiced Ayurveda for years, I can confidently say these are some of the finest formulations I\'ve used.'
      }
    ];
  }

  startSlideTimer() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopSlideTimer() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  setCurrentSlide(index: number) {
    this.stopSlideTimer();
    this.activeSlide = index;
    this.startSlideTimer();
  }

  prevSlide() {
    this.stopSlideTimer();
    this.activeSlide = this.activeSlide === 0 ? this.testimonials.length - 1 : this.activeSlide - 1;
    this.startSlideTimer();
  }

  nextSlide() {
    this.activeSlide = (this.activeSlide + 1) % this.testimonials.length;
  }

  generateStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}