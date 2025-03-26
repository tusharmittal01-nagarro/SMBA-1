import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-waitlist-form',
  templateUrl: './waitlist-form.component.html',
  styleUrls: ['./waitlist-form.component.scss']
})
export class WaitlistFormComponent {
  waitlistForm: FormGroup;
  submitted = false;
  success = false;
  errorMessage = '';
  
  constructor(private fb: FormBuilder) {
    this.waitlistForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      interests: ['', Validators.required]
    });
  }
  
  get form() { 
    return this.waitlistForm.controls; 
  }
  
  onSubmit() {
    this.submitted = true;
    
    if (this.waitlistForm.invalid) {
      return;
    }
    
    // In a real application, this would send the data to a backend
    // For the UI-only demo, we'll just simulate a successful submission
    setTimeout(() => {
      this.success = true;
      this.waitlistForm.reset();
      this.submitted = false;
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        this.success = false;
      }, 5000);
    }, 1500);
  }
}