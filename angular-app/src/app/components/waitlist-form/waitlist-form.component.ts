import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
  isSubmitting = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.waitlistForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^[0-9+ -]{10,15}$/)]],
      message: ['']
    });
  }

  get form() { 
    return this.waitlistForm.controls; 
  }

  onSubmit() {
    this.submitted = true;
    this.success = false;
    this.errorMessage = '';
    
    if (this.waitlistForm.invalid) {
      return;
    }
    
    this.isSubmitting = true;
    
    this.http.post('/api/waitlist', this.waitlistForm.value)
      .subscribe({
        next: (response) => {
          this.success = true;
          this.isSubmitting = false;
          this.waitlistForm.reset();
          this.submitted = false;
        },
        error: (error) => {
          console.error('Error submitting waitlist form:', error);
          this.errorMessage = error.error?.message || 'Failed to submit form. Please try again later.';
          this.isSubmitting = false;
        }
      });
  }
}