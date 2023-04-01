import {
   animate,
   animateChild,
   group,
   query,
   state,
   style,
   transition,
   trigger,
} from '@angular/animations';

export const fadeOutAnim = trigger('fadeOutAnim', [
   state(
      'true',
      style({
         opacity: 0,
         visibility: 'hidden',
      })
   ),
   state(
      'false',
      style({
         opacity: 1.0,
         visibility: 'visible',
      })
   ),
   transition('* <=> *', [animate('200ms')]),
]);

export const collapseAnim = trigger('collapseAnim', [
   state(
      'true',
      style({
         height: '56px',
      })
   ),
   state(
      'false',
      style({
         height: '156px',
      })
   ),
   transition('* <=> *', [group([query('@fadeOutAnim', animateChild()), animate('200ms')])]),
]);
