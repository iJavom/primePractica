import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }

export const configTranslate = {
    defaultLanguage: 'es',
    loader: {
      provide: TranslateLoader,
      useFactory: (HttpLoaderFactory),
      deps: [HttpClient]
    }
  }