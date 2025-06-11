import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
})
export class PrivacyComponent implements OnInit {
  constructor(private translate: TranslateService, private http: HttpClient) {}

  ngOnInit(): void {
    const lang =
      this.translate.currentLang ||
      this.translate.getDefaultLang() ||
      this.translate.getBrowserLang() ||
      'en';
    this.loadPrivacyTranslations(lang);

    this.translate.onLangChange.subscribe((event) => {
      this.loadPrivacyTranslations(event.lang);
    });
  }

  private loadPrivacyTranslations(lang: string): void {
    this.http.get(`/i18n/privacy.${lang}.json`).subscribe((translations) => {
      this.translate.setTranslation(lang, translations, true);
    });
  }
}
