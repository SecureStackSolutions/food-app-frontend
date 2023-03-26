import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
   selector: 'atlas-link-toggle',
   templateUrl: 'link-toggle.component.html',
   styleUrls: ['link-toggle.component.scss'],
   standalone: true,
   imports: [IonicModule, CommonModule],
})
export class AtlasLinkToggleComponent {
   @Input() data: {
      iconStart?: {
         path: string;
         size: number;
      };
      text: string;
   };
}
