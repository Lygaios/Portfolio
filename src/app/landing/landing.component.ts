import { Component } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ReferencesComponent } from "./references/references.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: "app-landing",
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ReferencesComponent,
    ContactComponent
  ],
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingComponent {}
