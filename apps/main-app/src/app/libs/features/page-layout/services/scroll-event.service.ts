import { Injectable } from '@angular/core';
import { ScrollDetail } from '@ionic/angular';
import { Observable, ReplaySubject } from 'rxjs';

type IonScrollEvent = CustomEvent<ScrollDetail>;

@Injectable()
export class ScrollEventService {
   private readonly _scrollEvent$: ReplaySubject<IonScrollEvent> =
      new ReplaySubject<IonScrollEvent>();
   private readonly scrollEvent$: Observable<IonScrollEvent> = this._scrollEvent$.asObservable();

   sendScrollEvent(scrollEvent: IonScrollEvent): void {
      this._scrollEvent$.next(scrollEvent);
   }
   getScrollEvent$ = (): Observable<IonScrollEvent> => this.scrollEvent$;
}
