import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AuthenticationFeature } from '../../features';
import { AuthenticationPage } from './authentication.page';
import { AuthenticationPageRoutingModule } from './authentication.routing';

@NgModule({
   imports: [CommonModule, IonicModule, AuthenticationPageRoutingModule, AuthenticationFeature],
   declarations: [AuthenticationPage],
})
export class AuthenticationPageModule {}
