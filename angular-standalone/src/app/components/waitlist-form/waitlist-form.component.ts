import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-waitlist-form',
  templateUrl: './waitlist-form.component.html',
  styleUrls: ['./waitlist-form.component.scss']
})
export class WaitlistFormComponent {
  waitlistForm: FormGroup;
  isSubmitted = false;
  isSubmitting = false;
  submitError = '';
  
  constructor(private fb: FormBuilder) {
    this.waitlistForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      interests: ['', Validators.required]
    });
  }
  
  get f() { 
    return this.waitlistForm.controls; 
  }
  
  onSubmit() {
    this.isSubmitted = true;
    
    if (this.waitlistForm.invalid) {
      return;
    }
    
    this.isSubmitting = true;
    
    // Simulate API call with timeout
    setTimeout(() => {
      // In a real app, here you would call a service to submit the form
      this.isSubmitting = false;
      this.waitlistForm.reset();
      this.isSubmitted = false;
      
      // Show success message to user (in a real app, use a proper toast/alert component)
      alert('Thank you for joining our waitlist! We will notify you when our products are available.');
    }, 1500);
  }
}