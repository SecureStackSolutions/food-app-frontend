import { Component, Input } from '@angular/core';

@Component({
   selector: 'feature-main-header',
   templateUrl: 'main-header.feature.html',
   styleUrls: ['main-header.feature.scss'],
})
export class MainHeaderFeature {
   @Input() titleCollapsed: string;
}
