import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthenticationService, AuthProvider } from '../../authentication/authentication.service';
import { SetAuthToken } from '../../authentication/authentication.state';
import { AtlasInputComponent } from '../../shared';
import { AtlasButtonComponent, View } from '../../shared/atlas/button/button.component';

@Component({
   selector: 'feature-authentication',
   templateUrl: 'authentication.feature.html',
   styleUrls: ['authentication.feature.scss'],
   standalone: true,
   imports: [
      AtlasInputComponent,
      FormsModule,
      ReactiveFormsModule,
      AtlasButtonComponent,
      HttpClientModule,
   ],
   providers: [AuthenticationService],
})
export class AuthenticationFeature {
   View = View;
   AuthProvider = AuthProvider;

   constructor(
      private readonly store: Store,
      private readonly router: Router,
      private readonly authService: AuthenticationService
   ) {}

   authenticate(provider: AuthProvider) {
      this.authService.login(provider).subscribe();
      this.store.dispatch(new SetAuthToken('authToken'));
   }
}
