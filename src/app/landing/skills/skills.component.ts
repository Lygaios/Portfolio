import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
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
