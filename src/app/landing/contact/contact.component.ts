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
        'Content-Type': "'text/plain",
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            // Email sent successfully
            ngForm.resetForm();
            // You could add a success message here if needed
          },
          error: (error) => {
            // Handle email sending error
            console.error('Failed to send email:', error);
            // You could add an error message here if needed
          },
          complete: () => {
            // Email sending process completed
          }
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      // Test mode - for development only
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
