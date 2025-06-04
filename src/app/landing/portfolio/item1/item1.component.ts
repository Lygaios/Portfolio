import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-item1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item1.component.html',
  styleUrl: './item1.component.scss'
})
export class Item1Component {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
  @Input() isOdd: boolean = false;
}
