import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ShoppingListsPage } from './shopping-lists.page';
import { ShoppingListsPageRoutingModule } from './shopping-lists.routing';

@NgModule({
   imports: [CommonModule, IonicModule, ShoppingListsPageRoutingModule],
   declarations: [ShoppingListsPage],
})
export class ShoppingListsPageModule {}
