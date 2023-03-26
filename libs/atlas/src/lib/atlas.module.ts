import { NgModule } from '@angular/core';
import { AtlasButtonComponent } from './components/button/button.component';
import { AtlasLinkChevronComponent } from './components/link/link-chevron/link-chevron.component';
import { AtlasLinkLanguageComponent } from './components/link/link-language/link-language.component';
import { AtlasLinkToggleComponent } from './components/link/link-toggle/link-toggle.component';

@NgModule({
   imports: [
      AtlasButtonComponent,
      AtlasLinkToggleComponent,
      AtlasLinkLanguageComponent,
      AtlasLinkChevronComponent,
   ],
   exports: [
      AtlasButtonComponent,
      AtlasLinkToggleComponent,
      AtlasLinkLanguageComponent,
      AtlasLinkChevronComponent,
   ],
})
export class AtlasModule {}
