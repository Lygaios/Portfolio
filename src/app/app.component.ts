import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { TranslateService } from "@ngx-translate/core";
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from '@angular/common';

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    TranslateModule,
    CommonModule
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Joshua Brunke – Portfolio";

  constructor(public translate: TranslateService) {
    this.translate.addLangs(["en", "de"]);
    this.translate.setDefaultLang("en");

    const savedLang = localStorage.getItem("preferredLanguage");
    const browserLang = translate.getBrowserLang();

    this.translate.use(savedLang || (browserLang === "de" ? "de" : "en"));
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem("preferredLanguage", lang);
  }
}
