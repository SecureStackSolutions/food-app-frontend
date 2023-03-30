import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AtlasModule } from '@atlas';
import { IonicModule } from '@ionic/angular';
import { MainHeaderFeatureModule } from '../../../../features/main-header/main-header.module';
import { ProductSearchPage } from './product-search.page';
import { ProductSearchPageRoutingModule } from './product-search.routing';

@NgModule({
   imports: [
      CommonModule,
      IonicModule,
      ProductSearchPageRoutingModule,
      MainHeaderFeatureModule,
      AtlasModule,
   ],
   declarations: [ProductSearchPage],
})
export class ProductSearchPageModule {}
