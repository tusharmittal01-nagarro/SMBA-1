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
      title: 'Experience Authentic Ayurvedic Solutions',
      subtitle: 'Ancient wisdom meets modern science. Our products are handcrafted using traditional techniques and natural ingredients.',
      image: 'assets/images/hero1.jpg',
      buttonText: 'Explore Products',
      buttonLink: '#products'
    },
    {
      id: 2,
      title: 'Balance Your Mind, Body & Spirit',
      subtitle: 'Discover holistic wellness through our carefully formulated Ayurvedic remedies and treatments.',
      image: 'assets/images/hero2.jpg',
      buttonText: 'Learn More',
      buttonLink: '#about'
    },
    {
      id: 3,
      title: 'Join Our Wellness Community',
      subtitle: 'Sign up for our waitlist and be the first to experience our new product line of premium Ayurvedic formulations.',
      image: 'assets/images/hero3.jpg',
      buttonText: 'Join Waitlist',
      buttonLink: '#waitlist'
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