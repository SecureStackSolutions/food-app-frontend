import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ShoppingListPage } from './shopping-list.page';
import { ShoppingListPageRoutingModule } from './shopping-list.routes';

@NgModule({
   imports: [CommonModule, IonicModule, ShoppingListPageRoutingModule],
   declarations: [ShoppingListPage],
})
export class ShoppingListPageModule {}
