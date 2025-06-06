import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-item1',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.scss']
})
export class Item1Component {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
  @Input() isOdd: boolean = false;
}
