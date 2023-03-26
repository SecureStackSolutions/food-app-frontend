import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LanguageCode } from 'libs/atlas/src/lib/types';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';

@Component({
   selector: 'atlas-link-language',
   templateUrl: 'link-language.component.html',
   styleUrls: ['link-language.component.scss'],
   standalone: true,
   imports: [IonicModule, CommonModule, LanguageSelectorComponent],
})
export class AtlasLinkLanguageComponent {
   @Input() languageCode: LanguageCode;
}
