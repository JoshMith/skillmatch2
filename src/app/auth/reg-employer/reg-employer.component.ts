import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-reg-employer',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './reg-employer.component.html',
  styleUrl: './reg-employer.component.css'
})
export class RegEmployerComponent implements OnInit {
  
  constructor(
    private router: Router,
    private register: AuthService
  ) { }

  private fb = inject(FormBuilder)




  signupForm = this.fb.group({
    companyName: ['', Validators.required],
    industrY: ['', Validators.required],
    contactName: ['', Validators.required],
    businessName: ['', Validators.required],
    companySize: ['', Validators.required],
    password: ['', Validators.required],
    termsAccepted: ['', Validators.required]
  })

  userType: 'jobSeeker' | 'employer' = 'employer';
  errorMessage =''
  successMessage = '';

  // Industry options
  industries: string[] = [
    'Technology',
    'Healthcare',
    'Finance',
    'Education',
    'Manufacturing',
    'Retail',
    'Hospitality',
    'Construction',
    'Transportation',
    'Media',
    'Other'
  ];

  // Company size options
  companySizes: string[] = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '501-1000 employees',
    '1000+ employees'
  ];


  ngOnInit(): void {
    this.onSubmit()
  }

  setUserType(type: 'jobSeeker' | 'employer'): void {
    this.userType = type;
    if (type === 'jobSeeker') {
      // Navigate to job seeker signup
      this.router.navigate(['/reg-jobseeker']);
      console.log('Navigating to job seeker signup');
    }
  }


    onSubmit(): void {
      if (this.signupForm.invalid) {
        this.errorMessage = 'Please fill in all required fields.';
        console.log('Please fill in all required fields.');
        return;
      }

      if(this.signupForm.valid) {
      // Handle form submission
      console.log('Form submitted', {
        ...this.signupForm.value,
        userType: this.userType
      });

      // Here you would typically call your auth service
      // this.authService.registerEmployer(this.signupForm.value)

      this.register.registerEmployer(this.signupForm.value).subscribe({
        next: (response) => {
          this.successMessage = 'Registration successful!';
          console.log('Registration successful', response);
          this.router.navigate(['/employer-dashboard']);
        },
        error: (error) => {
          this.errorMessage = 'Registration failed. Please try again.';
          console.error('Registration failed', error);
        }
      });

    } else {
      // Mark all form controls as touched to trigger validation messages
      Object.keys(this.signupForm.controls).forEach(key => {
        const control = this.signupForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  navigateToLogin(): void {
    // Navigate to login page
    console.log('Navigating to login');
    this.router.navigate(['/login']);
  }

}
