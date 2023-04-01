import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AtlasModule } from '@atlas';
import { IonicModule } from '@ionic/angular';
import { PageLayoutFeatureModule } from '../../../../features/page-layout/page-layout.feature.module';
import { UserProfileFeature } from './features/user-profile-feature/user-profile.feature';
import { UserProfilePage } from './user-profile.page';
import { UserProfilePageRoutingModule } from './user-profile.routing';

@NgModule({
   imports: [
      CommonModule,
      IonicModule,
      PageLayoutFeatureModule,
      UserProfilePageRoutingModule,
      AtlasModule,
   ],
   declarations: [UserProfilePage, UserProfileFeature],
})
export class UserProfilePageModule {}
