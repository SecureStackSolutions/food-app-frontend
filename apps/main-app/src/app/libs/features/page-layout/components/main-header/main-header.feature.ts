import {
   Component,
   ElementRef,
   Input,
   OnDestroy,
   OnInit,
   Renderer2,
   ViewChild,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ScrollEvent, ScrollEventService } from '../../services/scroll-event.service';

@Component({
   selector: 'feature-main-header',
   templateUrl: 'main-header.feature.html',
   styleUrls: ['main-header.feature.scss'],
})
export class MainHeaderFeature implements OnDestroy, OnInit {
   @ViewChild('toolbar', { static: true }) toolbarExpanded!: ElementRef;

   @Input() titleCollapsed!: string;
   scrollEventSub!: Subscription;
   lastAnimationFrame?: number;
   isScrolled = false;

   constructor(
      private readonly scrollEventService: ScrollEventService,
      private renderer: Renderer2
   ) {}

   ngOnInit(): void {
      this.scrollEventSub = this.scrollEventService
         .getScrollEvent$()
         .subscribe(this.updateDom(this.toolbarExpanded.nativeElement));
   }

   updateDom = (element: HTMLElement) => {
      return ({ detail }: ScrollEvent) => {
         const isScrolled = detail.scrollTop > 0;

         if (isScrolled !== this.isScrolled) {
            if (this.lastAnimationFrame) {
               cancelAnimationFrame(this.lastAnimationFrame);
            }
            this.lastAnimationFrame = requestAnimationFrame(() => {
               this.renderer.setStyle(element, 'height', isScrolled ? '56px' : '156px');
            });
            this.isScrolled = isScrolled;
         }
      };
   };

   ngOnDestroy(): void {
      this.scrollEventSub?.unsubscribe();
      if (this.lastAnimationFrame) {
         cancelAnimationFrame(this.lastAnimationFrame);
      }
   }
}
