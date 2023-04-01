import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PageLayoutFeatureModule } from 'apps/main-app/src/app/libs/features/page-layout/page-layout.feature.module';
import { ShoppingListPage } from './shopping-list.page';
import { ShoppingListPageRoutingModule } from './shopping-list.routes';

@NgModule({
   imports: [CommonModule, IonicModule, ShoppingListPageRoutingModule, PageLayoutFeatureModule],
   declarations: [ShoppingListPage],
})
export class ShoppingListPageModule {}
