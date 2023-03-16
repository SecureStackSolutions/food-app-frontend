import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
   selector: 'atlas-button-rectangle',
   templateUrl: 'button-rectangle.component.html',
   styleUrls: ['button-rectangle.component.scss'],
   standalone: true,
   imports: [CommonModule, IonicModule],
})
export class AtlasButtonRectangleComponent implements OnInit {
   @Input() data: {
      icon?: string;
      text?: string;
      color?: { textColor?: string; bgColor?: string[] };
   };
   @Input() isLoading = false;

   backgroundColor: string;

   ngOnInit() {
      this.backgroundColor = this.getBackgroundColor(this.data.color?.bgColor);
   }

   getBackgroundColor(colors: string[] | undefined): string {
      if (colors) {
         const length = colors.length;
         if (length === 1) {
            colors = colors.flatMap((color) => [color, color]);
         }
      } else {
         colors = ['#fff', '#fff'];
      }

      const percentage = 100 / colors.length;
      const colorString = colors
         .map((color, index) => `${color} ${index * percentage}%`)
         .join(', ');
      return `linear-gradient(90deg, ${colorString})`;
   }
}
