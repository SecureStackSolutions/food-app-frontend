import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputStateListenerDirective } from './input-state.directive';

@Component({
   selector: 'atlas-input',
   templateUrl: 'input.component.html',
   styleUrls: ['input.component.scss'],
   standalone: true,
   imports: [CommonModule, IonicModule, InputStateListenerDirective, FormsModule],
})
export class AtlasInputComponent implements ControlValueAccessor {
   InputState = InputState;
   state = InputState.UNFOCUSSED;
   text = '';
   onChange: (value: string) => void;
   onTouched: any;
   isDisabled: boolean;

   @Input() data: { label?: string; type?: string; icon?: string; placeholder?: string };

   onFocusChange(hasFocus: boolean) {
      this.state = hasFocus ? InputState.FOCUSSED : InputState.UNFOCUSSED;
   }

   writeValue(text: string): void {
      this.text = text;
   }
   registerOnChange(fn: (value: string) => void): void {
      this.onChange = fn;
   }
   registerOnTouched(fn: any): void {
      this.onTouched = fn;
   }
   setDisabledState?(isDisabled: boolean): void {
      this.isDisabled = isDisabled;
   }
}

enum InputState {
   FOCUSSED = 'focussed',
   UNFOCUSSED = 'unfocussed',
   WARNING = 'warning',
   SUCCESS = 'success',
}
