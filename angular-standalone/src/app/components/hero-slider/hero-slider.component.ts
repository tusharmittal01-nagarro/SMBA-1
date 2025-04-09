import { Component, OnInit, OnDestroy } from '@angular/core';
import { HERO_SLIDES } from '../../data/constants';

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
  slides: Slide[] = HERO_SLIDES;
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
    this.stopSliderTimer();
    this.currentSlide = (this.currentSlide === this.slides.length - 1) ? 0 : this.currentSlide + 1;
    this.startSliderTimer();
  }
}