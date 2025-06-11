import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  isArrowAnimated = false;
  hasAnimationFinished = false;

  animateArrowOnce() {
    if (!this.isArrowAnimated && !this.hasAnimationFinished) {
      this.isArrowAnimated = true;

      setTimeout(() => {
        this.hasAnimationFinished = true;
        this.isArrowAnimated = false;
      }, 300); // match animation duration
    }
  }
}
