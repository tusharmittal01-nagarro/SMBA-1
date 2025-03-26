import { Component, OnInit, OnDestroy } from '@angular/core';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss']
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  slides: Slide[] = [
    {
      id: 1,
      title: 'Discover Ayurvedic Wellness',
      subtitle: 'Ancient wisdom for modern healing',
      image: 'assets/images/hero-1.jpg',
      buttonText: 'Explore Products',
      buttonLink: '#products'
    },
    {
      id: 2,
      title: 'Balance Your Mind & Body',
      subtitle: 'Holistic solutions for complete wellness',
      image: 'assets/images/hero-2.jpg',
      buttonText: 'Learn More',
      buttonLink: '#about'
    },
    {
      id: 3,
      title: 'Natural Herbal Remedies',
      subtitle: 'Pure, effective, and time-tested',
      image: 'assets/images/hero-3.jpg',
      buttonText: 'Join Waitlist',
      buttonLink: '#contact'
    }
  ];
  
  currentSlide = 0;
  sliderInterval: any;
  
  ngOnInit() {
    this.startSliderTimer();
  }
  
  ngOnDestroy() {
    this.stopSliderTimer();
  }
  
  startSliderTimer() {
    this.sliderInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }
  
  stopSliderTimer() {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
  }
  
  setCurrentSlide(index: number) {
    this.stopSliderTimer();
    this.currentSlide = index;
    this.startSliderTimer();
  }
  
  prevSlide() {
    this.stopSliderTimer();
    this.currentSlide = (this.currentSlide === 0) ? this.slides.length - 1 : this.currentSlide - 1;
    this.startSliderTimer();
  }
  
  nextSlide() {
    this.currentSlide = (this.currentSlide === this.slides.length - 1) ? 0 : this.currentSlide + 1;
  }
}