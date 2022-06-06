import { APP_INITIALIZER } from "@angular/core";
import { TranslocoService } from "@ngneat/transloco";


function preLoadTranslations(transloco:TranslocoService){//To do: get browser language
  return () => {
    const currentLang = transloco.getActiveLang();
    transloco.setActiveLang(currentLang);
    return transloco.load(currentLang).toPromise();
  }
}

export const translocoPreload = {
  provide:APP_INITIALIZER,
  multi:true,
  useFactory:preLoadTranslations,
  deps:[TranslocoService]
}
