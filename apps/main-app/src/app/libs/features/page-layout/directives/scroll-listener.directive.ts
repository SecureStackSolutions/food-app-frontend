import { Directive, HostListener } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ScrollEventService } from '../services/scroll-event.service';

@Directive({
   selector: '[scrollListener]',
})
export class ScrollListenerDirective {
   constructor(
      private readonly scrollEventService: ScrollEventService,
      private readonly ionContent: IonContent
   ) {
      this.ionContent.scrollEvents = true;
      this.ionContent.ionScroll.subscribe((event) =>
         this.scrollEventService.sendScrollEvent(event)
      );
   }
}
