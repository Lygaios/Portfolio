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
  wasOpen: boolean = false;
  showSlope1: boolean = false;

  constructor(public translate: TranslateService) {}

  switchLangManual(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('preferredLanguage', lang);
  }

  toggleMenu(): void {
    this.wasOpen = this.isMenuOpen;

    if (!this.isMenuOpen) {
      // OPENING: show slope 1 for a short time, then show full overlay
      this.showSlope1 = true;
      this.isMenuOpen = true;

      setTimeout(() => {
        this.showSlope1 = false;
      }, 300); // Slope-1 shows for 300ms, then slope-2 takes over
    } else {
      // CLOSING: show slope 1 again briefly, then close everything
      this.showSlope1 = true;

      setTimeout(() => {
        this.isMenuOpen = false;
        this.showSlope1 = false;
      }, 300); // Slope-1 fades out before menu disappears
    }
  }
}

