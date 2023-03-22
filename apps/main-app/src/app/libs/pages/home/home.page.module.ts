import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MainHeaderFeatureModule } from '../../features/main-header/main-header.module';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home.page.routing';

@NgModule({
   imports: [CommonModule, IonicModule, HomePageRoutingModule, MainHeaderFeatureModule],
   declarations: [HomePage],
})
export class HomePageModule {}
