import { CommonModule } from '@angular/common';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Language, LanguageCode, languageCodeMap } from 'libs/atlas/src/lib/types';

@Component({
   selector: 'language-selector',
   templateUrl: 'language-selector.component.html',
   styleUrls: ['language-selector.component.scss'],
   standalone: true,
   imports: [CommonModule],
})
export class LanguageSelectorComponent implements OnInit {
   language: Language;
   viewLanguages = false;
   @Input() languageCode: LanguageCode;
   selectableLanguages: any = [];

   @Output() languageSelected = new EventEmitter<LanguageCode>();

   ngOnInit(): void {
      this.language = languageCodeMap.get(this.languageCode) as Language;
   }

   onChangeLanguage() {
      this.selectableLanguages = [];
      for (const [code, name] of languageCodeMap) {
         if (code !== this.languageCode) {
            this.selectableLanguages.push({ code, name });
         }
      }

      this.viewLanguages = !this.viewLanguages;
   }
}
