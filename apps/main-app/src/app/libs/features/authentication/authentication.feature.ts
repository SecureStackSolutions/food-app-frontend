import { HttpClientModule } from '@angular/common/http';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { AtlasInputComponent } from '../../shared';
import { AuthenticationService, AuthProvider } from './services/authentication.service';
import { AtlasModule } from '@atlas';

@Component({
   selector: 'feature-authentication',
   templateUrl: 'authentication.feature.html',
   styleUrls: ['authentication.feature.scss'],
   standalone: true,
   imports: [
      AtlasInputComponent,
      AtlasModule,
      IonicModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
   ],
   providers: [AuthenticationService],
})
export class AuthenticationFeature {
   AuthProvider = AuthProvider;

   constructor(
      private readonly store: Store,
      private readonly router: Router,
      private readonly authService: AuthenticationService
   ) {}

   authenticate(provider: AuthProvider) {
      this.authService.login(provider).subscribe();
   }
}
