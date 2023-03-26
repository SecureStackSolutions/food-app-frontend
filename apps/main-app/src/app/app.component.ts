import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import {
   convertNavigotorLanguageToAppLanguage,
   convertWindowThemeToAppTheme,
} from './libs/shared/functions';
import { SetAppLanguage, SetAppTheme } from './libs/state-management';

@Component({
   selector: 'root-app',
   templateUrl: 'app.component.html',
   styleUrls: ['app.component.scss'],
})
export class AppComponent {
   constructor(private readonly store: Store) {
      this.store.dispatch([
         new SetAppLanguage(convertNavigotorLanguageToAppLanguage(navigator.language)),
         new SetAppTheme(convertWindowThemeToAppTheme()),
      ]);
   }
}
