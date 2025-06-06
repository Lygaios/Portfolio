import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {

}
