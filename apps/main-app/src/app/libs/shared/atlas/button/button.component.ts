import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AtlasButtonRectangleComponent } from './view/rectangle/button-rectangle.component';

@Component({
   selector: 'atlas-button',
   templateUrl: 'button.component.html',
   styleUrls: ['button.component.scss'],
   standalone: true,
   imports: [CommonModule, AtlasButtonRectangleComponent],
})
export class AtlasButtonComponent {
   View = View;

   @Input() data: {
      icon: string;
      text: string;
      color?: { textColor?: string; bgColor?: string[] };
   };
   @Input() view: View;
}

export enum View {
   Rectangle = 'Rectangle',
}
