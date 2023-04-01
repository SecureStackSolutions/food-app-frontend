import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AtlasModule } from '@atlas';
import { IonicModule } from '@ionic/angular';
import { PageLayoutFeatureModule } from '../../../../features/page-layout/page-layout.feature.module';
import { ProductSearchPage } from './product-search.page';
import { ProductSearchPageRoutingModule } from './product-search.routing';

@NgModule({
   imports: [
      CommonModule,
      IonicModule,
      ProductSearchPageRoutingModule,
      PageLayoutFeatureModule,
      AtlasModule,
   ],
   declarations: [ProductSearchPage],
})
export class ProductSearchPageModule {}
