import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactData = {
    name: "",
    email: "",
    message: "",
  }
  
  onSubmit() {
    console.log(this.contactData);
  }
}
