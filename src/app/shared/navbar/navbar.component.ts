import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  wasOpen: boolean = false; // Track previous state

  constructor(public translate: TranslateService) {}

  switchLangManual(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('preferredLanguage', lang);
  }

  toggleMenu(): void {
    this.wasOpen = this.isMenuOpen; // Save current state before toggling
    this.isMenuOpen = !this.isMenuOpen; // Toggle open/close
  }
}
