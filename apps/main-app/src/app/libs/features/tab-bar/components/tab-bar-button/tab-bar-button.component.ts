import { Component, Input } from '@angular/core';

@Component({
   selector: 'component-tab-bar-button',
   templateUrl: 'tab-bar-button.component.html',
   styleUrls: ['tab-bar-button.component.scss'],
})
export class TabBarButtonComponent {
   @Input() isSelected!: boolean;
   @Input() tabName!: string;
}
