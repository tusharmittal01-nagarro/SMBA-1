import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { ProductSectionComponent } from './components/product-section/product-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { TestimonialSectionComponent } from './components/testimonial-section/testimonial-section.component';
import { WaitlistFormComponent } from './components/waitlist-form/waitlist-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HeroSliderComponent,
    ProductSectionComponent,
    AboutSectionComponent,
    TestimonialSectionComponent,
    WaitlistFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }