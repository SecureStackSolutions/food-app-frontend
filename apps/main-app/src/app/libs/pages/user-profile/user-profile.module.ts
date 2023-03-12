import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UserProfilePage } from './user-profile.page';
import { UserProfilePageRoutingModule } from './user-profile.routing';

@NgModule({
   imports: [CommonModule, IonicModule, UserProfilePageRoutingModule],
   declarations: [UserProfilePage],
})
export class UserProfilePageModule {}
