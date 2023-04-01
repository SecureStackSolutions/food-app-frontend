import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MainHeaderFeature } from './main-header.feature';

@NgModule({
   imports: [CommonModule, IonicModule],
   declarations: [MainHeaderFeature],
   exports: [MainHeaderFeature],
})
export class MainHeaderFeatureModule {}
