import { Component } from '@angular/core';
import { Item1Component } from "./item1/item1.component";
import { Item2Component } from "./item2/item2.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [Item1Component, Item2Component],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
