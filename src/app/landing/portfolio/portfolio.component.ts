import { Component } from '@angular/core';
import { Item1Component } from "./item1/item1.component";
import { Item2Component } from "./item2/item2.component";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [Item1Component, Item2Component, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  item1Title = "JOIN";
  item1Description = "A kanban board.";
  item1ImageUrl = "assets/img/project1.png";

  item2Title = "El Pollo Loco";
  item2Description = "A jump'n run using JavaScript with object oriented programming.";
  item2ImageUrl = "assets/img/project2.png";
}
