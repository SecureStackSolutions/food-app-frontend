import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
   selector: '[hasFocus]',
   standalone: true,
})
export class InputStateListenerDirective {
   @Output() hasFocus = new EventEmitter<boolean>();

   @HostListener('focusout', ['false'])
   @HostListener('focusin', ['true'])
   onFocusInChange(hasFocus: boolean) {
      this.hasFocus.emit(hasFocus);
   }
}
