import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ButtonInput } from '../../button.component';

@Component({
   selector: 'atlas-button-rectangle',
   templateUrl: 'button-rectangle.component.html',
   styleUrls: ['button-rectangle.component.scss'],
   standalone: true,
   imports: [CommonModule, IonicModule],
})
export class AtlasButtonRectangleComponent implements OnInit {
   // backgroundColor: string;

   @Input() data: ButtonInput;

   ngOnInit() {
      // this.backgroundColor = this.getBackgroundColor(this.data.style?.color?.bgColor);
   }

   // getBackgroundColor(colors: string[] | undefined): string {
   //    if (colors) {
   //       const length = colors.length;
   //       if (length === 1) {
   //          colors = colors.flatMap((color) => [color, color]);
   //       }
   //    } else {
   //       colors = ['#fff', '#fff'];
   //    }

   //    const percentage = 100 / colors.length;
   //    const colorString = colors
   //       .map((color, index) => `${color} ${index * percentage}%`)
   //       .join(', ');
   //    return `linear-gradient(90deg, ${colorString})`;
   // }
}
