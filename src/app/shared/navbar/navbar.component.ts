import { Component, inject, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  wasOpen = false;
  showSlope1 = false;

  private router = inject(Router);

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const fragment = target.getAttribute('href')?.substring(1);
        if (fragment) {
          this.scrollToElement(fragment);
        }
      }
    });
  }

  switchLangManual(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('preferredLanguage', lang);
  }

  toggleMenu(): void {
    this.wasOpen = this.isMenuOpen;
    this.showSlope1 = true;

    if (!this.isMenuOpen) {
      this.openMenu();
    } else {
      this.closeMenu();
    }
  }

  /**
   * Opens the menu with animation
   */
  private openMenu(): void {
    this.isMenuOpen = true;
    setTimeout(() => (this.showSlope1 = false), 500);
  }

  /**
   * Closes the menu with animation
   */
  private closeMenu(): void {
    setTimeout(() => {
      this.isMenuOpen = false;
      this.showSlope1 = false;
    }, 500);
  }

  /**
   * Smoothly scrolls to the top of the page
   */
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Scrolls to a specific element with proper offset to account for the fixed navbar
   * @param elementId - The ID of the target element to scroll to
   */
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      const navbarHeight = 80;
      const extraPadding = 40;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight - extraPadding;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  /**
   * Navigates to the main page and scrolls to the contact section
   * Works from any page (privacy, imprint, etc.)
   */
  navigateToContact(): void {
    if (this.isOnHomePage()) {
      this.scrollToElement('contact');
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollToElement('contact');
        }, 100);
      });
    }
  }

  isOnHomePage(): boolean {
    return this.router.url === '/' || this.router.url.startsWith('/#');
  }
}
