import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { InlineSVGModule } from 'ng-inline-svg';
import { TabBarFeatureModule } from '../../features/tab-bar/tab-bar.module';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home.page.routing';

@NgModule({
   imports: [
      CommonModule,
      IonicModule,
      HomePageRoutingModule,
      InlineSVGModule,
      TabBarFeatureModule,
   ],
   declarations: [HomePage],
})
export class HomePageModule {}
