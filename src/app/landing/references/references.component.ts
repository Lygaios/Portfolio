import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {
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
