import { Injectable } from '@angular/core';
import { ScrollDetail } from '@ionic/angular';
import { Observable, ReplaySubject } from 'rxjs';

export type ScrollEvent = CustomEvent<ScrollDetail>;

@Injectable()
export class ScrollEventService {
   private readonly _scrollEvent$: ReplaySubject<ScrollEvent> = new ReplaySubject<ScrollEvent>();
   private readonly scrollEvent$: Observable<ScrollEvent> = this._scrollEvent$.asObservable();

   sendScrollEvent(scrollEvent: ScrollEvent): void {
      this._scrollEvent$.next(scrollEvent);
   }
   getScrollEvent$ = (): Observable<ScrollEvent> => this.scrollEvent$;
}
