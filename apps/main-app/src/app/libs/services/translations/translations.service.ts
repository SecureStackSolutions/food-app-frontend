import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';

@Injectable({ providedIn: 'root' })
export class TranslationsService {
   @Select()
   getLanguage() {}
}
