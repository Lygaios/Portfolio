import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

}
