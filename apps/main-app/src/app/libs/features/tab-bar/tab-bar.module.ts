import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TabBarButtonComponent } from './components/tab-bar-button/tab-bar-button.component';
import { TabBarFeature } from './tab-bar.feature';

@NgModule({
   imports: [CommonModule, IonicModule],
   declarations: [TabBarFeature, TabBarButtonComponent],
   exports: [TabBarFeature],
})
export class TabBarFeatureModule {}
