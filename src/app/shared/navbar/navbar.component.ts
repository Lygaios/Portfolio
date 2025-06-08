import { Component, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule], // ← Order here shouldn't matter, but this is safe
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuOpen = false;
  wasOpen = false;
  showSlope1 = false;

  private router = inject(Router);

  constructor(public translate: TranslateService) {}

  switchLangManual(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('preferredLanguage', lang);
  }

  toggleMenu(): void {
    this.wasOpen = this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.showSlope1 = true;
      this.isMenuOpen = true;
      setTimeout(() => (this.showSlope1 = false), 300);
    } else {
      this.showSlope1 = true;
      setTimeout(() => {
        this.isMenuOpen = false;
        this.showSlope1 = false;
      }, 300);
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  isOnHomePage(): boolean {
    return this.router.url === '/' || this.router.url.startsWith('/#');
  }
}
