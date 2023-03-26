import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Store } from '@ngxs/store';
import { LanguageCode } from '@atlas';

@Component({
   selector: 'feature-user-profile',
   templateUrl: 'user-profile.feature.html',
   styleUrls: ['user-profile.feature.scss'],
})
export class UserProfileFeature {
   LanguageCode = LanguageCode;
   constructor(private readonly auth: AngularFireAuth, private readonly store: Store) {}

   onSignOut() {
      this.auth.signOut();
   }
}
