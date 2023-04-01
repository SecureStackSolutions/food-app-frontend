import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScrollEventService } from '../../services/scroll-event.service';

@Component({
   selector: 'feature-main-header',
   templateUrl: 'main-header.feature.html',
   styleUrls: ['main-header.feature.scss'],
})
export class MainHeaderFeature implements OnInit {
   @Input() titleCollapsed!: string;
   scrollEvent$: Observable<Event>;

   constructor(private readonly scrollEventService: ScrollEventService) {
      this.scrollEvent$ = this.scrollEventService.getScrollEvent$();
      this.scrollEvent$.subscribe(console.log);
   }
   ngOnInit(): void {}
}
