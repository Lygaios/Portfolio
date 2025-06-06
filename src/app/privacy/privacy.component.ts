import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {

}
