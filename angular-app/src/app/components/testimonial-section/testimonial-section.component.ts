import { Component, OnInit } from '@angular/core';

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
export class TestimonialSectionComponent implements OnInit {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah J.',
      avatar: 'assets/images/user1.jpg',
      rating: 5,
      comment: 'I\'ve tried various Ayurvedic products before, but Balance Ayurveda stands out with their quality. Their Ashwagandha supplement has significantly improved my stress levels and sleep quality.'
    },
    {
      id: 2,
      name: 'Michael T.',
      avatar: 'assets/images/user2.jpg',
      rating: 5,
      comment: 'The Triphala formula has been a game-changer for my digestive health. I appreciate the transparent ingredient sourcing and authentic formulations that Balance provides.'
    },
    {
      id: 3,
      name: 'Priya K.',
      avatar: 'assets/images/user3.jpg',
      rating: 4,
      comment: 'As someone who practices Ayurveda daily, I\'m impressed with the attention to detail and adherence to traditional principles in their products. The results speak for themselves!'
    },
    {
      id: 4,
      name: 'David M.',
      avatar: 'assets/images/user4.jpg',
      rating: 5,
      comment: 'The Brahmi Brain Boost has helped me stay focused during long workdays. I\'m eager to see what new products Balance will introduce in the future.'
    }
  ];
  
  activeSlide: number = 0;
  slideInterval: any;
  
  ngOnInit() {
    this.startSlideTimer();
  }
  
  ngOnDestroy() {
    this.stopSlideTimer();
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
  
  // Generate an array for star ratings
  generateStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}