import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtlasInputComponent } from '../../shared';
import { AtlasButtonComponent, View } from '../../shared/atlas/button/button.component';

@Component({
   selector: 'feature-authentication',
   templateUrl: 'authentication.feature.html',
   styleUrls: ['authentication.feature.scss'],
   standalone: true,
   imports: [AtlasInputComponent, FormsModule, ReactiveFormsModule, AtlasButtonComponent],
})
export class AuthenticationFeature {
   View = View;
}
