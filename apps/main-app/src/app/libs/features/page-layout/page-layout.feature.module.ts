import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MainHeaderFeatureModule } from './components/main-header/main-header.module';
import { ScrollListenerDirective } from './directives/scroll-listener.directive';
import { PageLayoutFeature } from './page-layout.feature';
import { ScrollEventService } from './services/scroll-event.service';

@NgModule({
   imports: [CommonModule, IonicModule, MainHeaderFeatureModule],
   exports: [PageLayoutFeature],
   declarations: [PageLayoutFeature, ScrollListenerDirective],
   providers: [ScrollEventService],
})
export class PageLayoutFeatureModule {}
