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

  mailTest = true;

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
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.info('Mail test mode is enabled. Form data:', this.contactData);
      console.info(
        'Form submitted successfully, but no email will be sent due to mailTest being true.'
      );
      ngForm.resetForm();
    }
  }

  constructor(private router: Router) {}

  openPrivacyInNewTab(event: MouseEvent) {
    event.preventDefault(); // prevent default anchor click behavior

    const urlTree = this.router.createUrlTree(['/privacy']);
    const url = this.router.serializeUrl(urlTree);

    window.open(url, '_blank');
  }
}
