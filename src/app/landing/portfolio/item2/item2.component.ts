import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-item2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item2.component.html',
  styleUrl: './item2.component.scss'
})
export class Item2Component {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
  @Input() isOdd: boolean = false;
}
