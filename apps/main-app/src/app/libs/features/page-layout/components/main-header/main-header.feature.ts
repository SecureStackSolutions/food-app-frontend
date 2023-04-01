import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollEvent, ScrollEventService } from '../../services/scroll-event.service';
import { collapseAnim, fadeOutAnim } from './animations';

export const toolbarHeightCollapsed = 56;
export const toolbarHeightExpanded = 156;

@Component({
   selector: 'feature-main-header',
   templateUrl: 'main-header.feature.html',
   styleUrls: ['main-header.feature.scss'],
   animations: [collapseAnim, fadeOutAnim],
})
export class MainHeaderFeature implements OnDestroy, OnInit {
   _backgroundColor?: string;
   _backgroundImage?: string;
   @Input()
   title!: string;
   @Input() allowExpanding = true;
   @Input() set background(values: { image?: string; color?: string }) {
      this._backgroundColor = values?.color;
      this._backgroundImage = values?.image;
   }

   scrollEventSub!: Subscription;
   isCollapsed?: boolean;

   constructor(private readonly scrollEventService: ScrollEventService) {}

   ngOnInit(): void {
      this.scrollEventSub = this.scrollEventService.getScrollEvent$().subscribe(this.onScrollEvent);
   }
   onScrollEvent = ({ detail }: ScrollEvent) => {
      const isScrolled = detail.scrollTop > 0;
      if (isScrolled !== this.isCollapsed) {
         this.isCollapsed = isScrolled;
      }
   };

   ngOnDestroy(): void {
      this.scrollEventSub?.unsubscribe();
   }
}
