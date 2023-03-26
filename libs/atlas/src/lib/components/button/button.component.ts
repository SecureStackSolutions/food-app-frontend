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

   @Input() data: ButtonInput;
   @Input() view: View;
}

export enum View {
   Rectangle = 'Rectangle',
}

export interface ButtonInput {
   icon?: {
      path: string;
      size?: number;
   };
   text?: string;
   style?: {
      color?: {
         textColor?: string;
         bgColor?: string;
         borderColor: string;
      };
      height?: number;
   };
}
