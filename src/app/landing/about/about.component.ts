import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  isArrowAnimated = false;
  hasAnimationFinished = false;

  /**
   * Animates the arrow once when triggered, preventing multiple animations
   */
  animateArrowOnce() {
    if (!this.isArrowAnimated && !this.hasAnimationFinished) {
      this.isArrowAnimated = true;

      setTimeout(() => {
        this.hasAnimationFinished = true;
        this.isArrowAnimated = false;
      }, 300);
    }
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
}
