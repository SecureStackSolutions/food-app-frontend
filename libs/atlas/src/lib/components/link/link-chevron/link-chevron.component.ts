import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
   selector: 'atlas-link-chevron',
   templateUrl: 'link-chevron.component.html',
   styleUrls: ['link-chevron.component.scss'],
   standalone: true,
   imports: [IonicModule, CommonModule],
})
export class AtlasLinkChevronComponent {
   @Input() data: {
      iconStart?: {
         path: string;
         size: number;
      };
      text: string;
   };
}
