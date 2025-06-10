import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-item2',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.scss']
})
export class Item2Component {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
  @Input() isOdd: boolean = false;

 isHovered = false;

  toggleHover(): void {
    // Mobile only: sticky effect
    if (window.innerWidth <= 768) {
      this.isHovered = true;
    }
  }
}
