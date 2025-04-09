import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ProductSectionComponent } from './components/product-section/product-section.component';
import { TestimonialSectionComponent } from './components/testimonial-section/testimonial-section.component';
import { WaitlistFormComponent } from './components/waitlist-form/waitlist-form.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroSliderComponent,
    AboutSectionComponent,
    ProductSectionComponent,
    TestimonialSectionComponent,
    WaitlistFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }