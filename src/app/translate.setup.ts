import { importProvidersFrom } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

// This factory tells ngx-translate where to find the translation files
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "/i18n/", ".json");
}

// This function can be imported into main.ts to enable translation
export const provideTranslation = () =>
  importProvidersFrom(
    TranslateModule.forRoot({
      defaultLanguage: "en",
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    })
  );
