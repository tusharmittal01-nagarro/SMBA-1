import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { ProductSectionComponent } from './components/product-section/product-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { TestimonialSectionComponent } from './components/testimonial-section/testimonial-section.component';
import { WaitlistFormComponent } from './components/waitlist-form/waitlist-form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroSliderComponent,
    ProductSectionComponent,
    AboutSectionComponent,
    TestimonialSectionComponent,
    WaitlistFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }