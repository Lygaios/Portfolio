import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public translate: TranslateService) {}

  switchLang(event: Event): void {
  const selectElement = event.target as HTMLSelectElement;
  const selectedLang = selectElement.value;

  this.translate.use(selectedLang);
  localStorage.setItem("preferredLanguage", selectedLang);
}

}
// This component serves as the navigation bar for the application, allowing users to switch languages and navigate through different routes.