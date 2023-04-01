import { Directive, Input, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ScrollEventService } from '../services/scroll-event.service';

@Directive({
   selector: '[scrollListener]',
})
export class ScrollListenerDirective implements OnInit {
   @Input() scrollListener!: boolean;

   constructor(
      private readonly scrollEventService: ScrollEventService,
      private readonly ionContent: IonContent
   ) {}

   ngOnInit(): void {
      if (this.scrollListener) {
         this.ionContent.scrollEvents = true;
         this.ionContent.ionScroll.subscribe((event) =>
            this.scrollEventService.sendScrollEvent(event)
         );
      }
   }
}
