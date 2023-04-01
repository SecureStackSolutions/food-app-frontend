import { Component, Input } from '@angular/core';

@Component({
   selector: 'feature-page-layout',
   templateUrl: 'page-layout.feature.html',
   styleUrls: ['page-layout.feature.scss'],
})
export class PageLayoutFeature {
   @Input() title!: string;
   @Input() allowExpanding = true;
   @Input() background: { image?: string; color?: string };
}
