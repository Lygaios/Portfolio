import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    privacyPolicy: false,
  };

  mailTest = false;

  post = {
    endPoint: 'https://joshuabrunke.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';
  errorMessage = '';

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitStatus = 'idle';
      this.errorMessage = '';

      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.submitStatus = 'success';
            this.isSubmitting = false;
            ngForm.resetForm();
            this.contactData = {
              name: '',
              email: '',
              message: '',
              privacyPolicy: false,
            };
          },
          error: (error) => {
            console.error('Failed to send email:', error);
            this.submitStatus = 'error';
            this.isSubmitting = false;
            
            // Check if it's an SSL certificate error
            if (error.status === 0 && error.statusText === 'Unknown Error') {
              this.errorMessage = 'Connection error. Please try again or contact me directly at joshuabrunke1@gmail.com';
            } else {
              this.errorMessage = 'Failed to send message. Please try again later.';
            }
          },
          complete: () => {
            this.isSubmitting = false;
          }
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  constructor(private router: Router) {}

  openPrivacyInNewTab(event: MouseEvent) {
    event.preventDefault();

    const urlTree = this.router.createUrlTree(['/privacy']);
    const url = this.router.serializeUrl(urlTree);

    window.open(url, '_blank');
  }
}
